import btoa from 'btoa';
import crypto from 'crypto';

import * as util from 'util';
import * as types from './interfaces';
import * as messages from './proto/schema_pb';

const REFERENCE_VALUE_PREFIX = new Uint8Array(0x01)
const SET_KEY_PREFIX = new Uint8Array(0x00)
const PLAIN_VALUE_PREFIX = new Uint8Array(0x00)

export const hashUint8Array = (value: Uint8Array) => new Uint8Array(crypto.createHash('sha256').update(value).digest())

export const utf8Encode = (val: any) => {
    return new util.TextEncoder().encode(val);
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
}

export default Util;
