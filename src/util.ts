import btoa from 'btoa';
import * as util from 'util';
import * as types from './interfaces';

const REFERENCE_VALUE_PREFIX = new Uint8Array(0x01)
const SET_KEY_PREFIX = new Uint8Array(0x00)
const PLAIN_VALUE_PREFIX = new Uint8Array(0x00)

class Util {

    constructor () {}

    utf8Encode (val: any) {
        return new util.TextEncoder().encode(val);
    }
    
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
        const res = new Uint8Array(2)

        res.set(SET_KEY_PREFIX)
        res.set(key, 1)

        return res
    }

    prefixValue(value: Uint8Array): Uint8Array {
        const res = new Uint8Array(2)

        res.set(PLAIN_VALUE_PREFIX)
        res.set(value, 1)

        return res
    }

    encodeReferenceValue(referencedKey: Uint8Array, atTx: number): Uint8Array {
        const encoded = new Uint8Array(4)

        encoded.set(REFERENCE_VALUE_PREFIX)
        encoded.set(new Uint8Array([atTx]), 1)
        encoded.set(SET_KEY_PREFIX, 2)
        encoded.set(referencedKey, 3)

        return encoded
    }
}

export default Util;
