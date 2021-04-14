import { sha256 } from 'js-sha256'
import * as util from 'util';

import * as types from './interfaces';
import * as schemaTypes from './proto/schema_pb';
import { REFERENCE_VALUE_PREFIX, SORTED_KEY_PREFIX, SET_KEY_PREFIX, PLAIN_VALUE_PREFIX, LEAF_PREFIX } from './consts'

export const hashUint8Array = (value: Uint8Array) => new Uint8Array(sha256.create().update(value).array())

export const utf8Encode = (val: any) => {
    return new util.TextEncoder().encode(val);
}

export const digestKeyValue = (kv: schemaTypes.KeyValue) => {
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

export const getAlh = (txm: schemaTypes.TxMetadata): Uint8Array => {
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

export const encodeInt64 = (num: number, buf = Buffer.allocUnsafe(8), offset = 0) => {
    const UINT_32_MAX = Math.pow(2, 32)

    const top = Math.floor(num / UINT_32_MAX)
    const rem = num - top * UINT_32_MAX

    buf.writeUInt32BE(top, offset)
    buf.writeUInt32BE(rem, offset + 4)

    return buf
}

export const encodeInt32 = (num: number, buf = Buffer.allocUnsafe(4), offset = 0) => {
    buf.writeUInt32BE(num, offset)
    return buf
}

export const doubleToByteArray = (number: number) => {
    var buffer = new ArrayBuffer(8);         // JS numbers are 8 bytes long, or 64 bits
    var longNum = new Float64Array(buffer);  // so equivalent to Float64

    longNum[0] = number;

    return Array.from(new Int8Array(buffer)).reverse();  // reverse to get little endian
}

export const utf8Decode = (val: any) => {
    return val === ''
        ? val
        : new util.TextDecoder("utf-8").decode(val);
}
    
export const equalArray = (a1: any, a2: any) => {
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
    
export const isPowerOfTwo = (x: any) => {
    return Math.log2(x) % 1 === 0;
}

export const maskConfig = (c: types.Config) => {
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
    
export const maskString = (data: string, n = 12) => {
    if (data) {
        return `${data.slice(0, n)}************${data.slice(data.length - n)}`;
    }
    return '';
}

export const prefixKey = (key: Uint8Array): Uint8Array => {
    const res = new Uint8Array(SET_KEY_PREFIX.length + key.length)

    res.set(SET_KEY_PREFIX)
    res.set(key, SET_KEY_PREFIX.length)

    return res
}

export const prefixValue = (value: Uint8Array): Uint8Array => {
    const res = new Uint8Array(PLAIN_VALUE_PREFIX.length + value.length)

    res.set(PLAIN_VALUE_PREFIX)
    res.set(value, PLAIN_VALUE_PREFIX.length)

    return res
}

export const encodeReferenceValue = (referencedKey: Uint8Array, atTx: number): Uint8Array => {
    const atTxUint = encodeInt64(atTx)
    const encoded = new Uint8Array(REFERENCE_VALUE_PREFIX.length + atTxUint.length + SET_KEY_PREFIX.length + referencedKey.length)

    encoded.set(REFERENCE_VALUE_PREFIX)
    encoded.set(atTxUint, REFERENCE_VALUE_PREFIX.length)
    encoded.set(SET_KEY_PREFIX, REFERENCE_VALUE_PREFIX.length + atTxUint.length)
    encoded.set(referencedKey, REFERENCE_VALUE_PREFIX.length + atTxUint.length + SET_KEY_PREFIX.length)

    return encoded
}

export const encodeKeyValue = (key: Uint8Array, value: Uint8Array) => {
    const kv = new schemaTypes.KeyValue()

    kv.setKey(prefixKey(key))
    kv.setValue(prefixValue(value))

    return kv
}

export const encodeZAdd = (zSet: Uint8Array, score: number, key: Uint8Array, attx: number) => {
    const eKey = prefixKey(key)
    const zSetLengthUint = encodeInt64(zSet.length)
    const scoreUint = doubleToByteArray(score)
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
    
    const kv = new schemaTypes.KeyValue()

    kv.setKey(zKey)

    return kv
}

export const withLeafPrefix = (value: Uint8Array): Uint8Array => {
    const res = new Uint8Array(LEAF_PREFIX.length + value.length)

    res.set(LEAF_PREFIX)
    res.set(value, LEAF_PREFIX.length)

    return res
}

export const bitLength = (n: number): number => n === 0 ? 0 : Math.abs(n).toString(2).length

export const isString = (value: any) => {
    return typeof value === 'string'
}