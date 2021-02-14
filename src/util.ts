import btoa from 'btoa';
import crypto from 'crypto';

import * as util from 'util';
import * as types from './interfaces';
import * as messages from './proto/schema_pb';

const REFERENCE_VALUE_PREFIX = new Uint8Array([0x01])
const SORTED_KEY_PREFIX = new Uint8Array([0x01])
const SET_KEY_PREFIX = new Uint8Array([0x00])
const PLAIN_VALUE_PREFIX = new Uint8Array([0x00])

export const hashUint8Array = (value: Uint8Array) => new Uint8Array(crypto.createHash('sha256').update(value).digest())

export const utf8Encode = (val: any) => {
    return new util.TextEncoder().encode(val);
}

export const digestKeyValue = (kv: messages.KeyValue) => {
    let valdigest
    const key = kv.getKey_asU8()
    const value = kv.getValue_asU8()

    if (value === undefined) {
        valdigest = hashUint8Array(utf8Encode(''))
    } else {
        valdigest = hashUint8Array(value)
    }

    const res = new Uint8Array(key.length + valdigest.length)

    res.set(key)
    res.set(valdigest, key.length)

    return hashUint8Array(res)
}

export const getAlh = (txm: messages.TxMetadata): Uint8Array => {
    const encId = encodeInt64(txm.getId())
    const prevalh = txm.getPrevalh_asU8()
    const encTs = encodeInt64(txm.getTs())
    const encEntries = encodeInt32(txm.getNentries())
    const eh = txm.getEh_asU8()
    const encBltxid = encodeInt64(txm.getBltxid())
    const root = txm.getBlroot_asU8()

    const bj = new Uint8Array(encTs.length + encEntries.length + eh.length + encBltxid.length + root.length)
    bj.set(encTs)
    bj.set(encEntries, encTs.length)
    bj.set(eh, encTs.length + encEntries.length)
    bj.set(encBltxid, encTs.length + encEntries.length + eh.length)
    bj.set(root, encTs.length + encEntries.length + eh.length + encBltxid.length)

    const innerHash = hashUint8Array(bj)

    const bi = new Uint8Array(encId.length + prevalh.length + innerHash.length)
    bi.set(encId)
    bi.set(prevalh, encId.length)
    bi.set(innerHash, encId.length + prevalh.length)

    return hashUint8Array(bi)
}

export function encodeInt64 (num: number, buf = Buffer.allocUnsafe(8), offset = 0) {
    const UINT_32_MAX = Math.pow(2, 32)

    const top = Math.floor(num / UINT_32_MAX)
    const rem = num - top * UINT_32_MAX

    buf.writeUInt32BE(top, offset)
    buf.writeUInt32BE(rem, offset + 4)

    return buf
}

export function encodeInt32 (num: number, buf = Buffer.allocUnsafe(4), offset = 0) {
    buf.writeUInt32BE(num, offset)
    return buf
}

class Util {

    constructor () {}
    
    utf8Decode (val: any) {
        return val === ''
            ? val
            : new util.TextDecoder("utf-8").decode(val);
    }
    
    base64Encode (val: any) {
        return btoa(String.fromCharCode(
            ...new Uint8Array(val))
        );
    }
    
    equalArray (a1: any, a2: any) {
        if (a1.length != a2.length) {
            return false;
        }
        
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) {
                return false;
            }
        }
        
        return true;
    }
    
    isPowerOfTwo (x: any) {
        return Math.log2(x) % 1 === 0;
    }

    maskConfig(c: types.Config) {
        let result = '';
        if (c) {
            result += `[ address: ${c.host}:${c.port}`;
            c.user && (result += `, user: ${c.user}`);
            c.password && (result += ', password: *****');
            c.database && (result += `, database: ${c.database || 'defaultdb'}`);
            c.rootPath && (result += `, rootPath: ${c.rootPath}`);
            c.secure && (result += `, secure: ${!!c.secure}`);
            c.certs && (result += `, certs: ${c.certs}`);
            c.autoLogin && (result += `, autoLogin: ${!!c.autoLogin}`);
            c.autoDatabase && (result += `, autoDatabase: ${!!c.autoDatabase}`);
        }
        return `${result} ]`;
    }
    
    maskString(data: string, n = 12) {
        if (data) {
            return `${data.slice(0, n)}************${data.slice(data.length - n)}`;
        }
        return '';
    }

    prefixKey(key: Uint8Array): Uint8Array {
        const res = new Uint8Array(SET_KEY_PREFIX.length + key.length)

        res.set(SET_KEY_PREFIX)
        res.set(key, SET_KEY_PREFIX.length)

        return res
    }

    prefixValue(value: Uint8Array): Uint8Array {
        const res = new Uint8Array(PLAIN_VALUE_PREFIX.length + value.length)

        res.set(PLAIN_VALUE_PREFIX)
        res.set(value, PLAIN_VALUE_PREFIX.length)

        return res
    }

    encodeReferenceValue(referencedKey: Uint8Array, atTx: number): Uint8Array {
        const atTxUint = new Uint8Array([atTx])
        const encoded = new Uint8Array(REFERENCE_VALUE_PREFIX.length + atTxUint.length + SET_KEY_PREFIX.length + referencedKey.length)

        encoded.set(REFERENCE_VALUE_PREFIX)
        encoded.set(atTxUint, REFERENCE_VALUE_PREFIX.length)
        encoded.set(SET_KEY_PREFIX, REFERENCE_VALUE_PREFIX.length + atTxUint.length)
        encoded.set(referencedKey, REFERENCE_VALUE_PREFIX.length + atTxUint.length + SET_KEY_PREFIX.length)

        return encoded
    }

    encodeKeyValue(key: Uint8Array, value: Uint8Array) {
        const kv = new messages.KeyValue()

        kv.setKey(this.prefixKey(key))
        kv.setValue(this.prefixValue(value))

        return kv
    }

    encodeZAdd(zSet: Uint8Array, score: number, key: Uint8Array, attx: number) {
        const eKey = this.prefixKey(key)
        const zSetLengthUint = encodeInt64(zSet.length)
        const scoreUint = encodeInt64(score)
        const eKeyLengthUint = encodeInt64(eKey.length)
        const attxUint = encodeInt64(attx)
        const zKey = new Uint8Array(SORTED_KEY_PREFIX.length + zSetLengthUint.length + zSet.length + scoreUint.length + eKeyLengthUint.length + eKey.length + attxUint.length)

        zKey.set(SORTED_KEY_PREFIX)
        zKey.set(zSetLengthUint, SORTED_KEY_PREFIX.length)
        zKey.set(zSet, SORTED_KEY_PREFIX.length + zSetLengthUint.length)
        zKey.set(scoreUint, SORTED_KEY_PREFIX.length + zSetLengthUint.length + zSet.length)
        zKey.set(eKeyLengthUint, SORTED_KEY_PREFIX.length + zSetLengthUint.length + zSet.length + scoreUint.length)
        zKey.set(eKey, SORTED_KEY_PREFIX.length + zSetLengthUint.length + zSet.length + scoreUint.length + eKeyLengthUint.length)
        zKey.set(attxUint, SORTED_KEY_PREFIX.length + zSetLengthUint.length + zSet.length + scoreUint.length + eKeyLengthUint.length + eKey.length)
        
        const kv = new messages.KeyValue()

        kv.setKey(zKey)

        return kv
    }
}

export default Util;
