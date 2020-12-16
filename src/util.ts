import btoa from 'btoa';
import * as util from 'util';
import * as types from './interfaces';

class Util {

    constructor () {}

    utf8Encode (val: any) {
        return new util.TextEncoder().encode(val);
    }
    
    utf8Decode (val: any) {
        if (val === '') {
            return val;
        }
        return new util.TextDecoder("utf-8").decode(val);
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
}

export default Util;
