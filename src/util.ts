import btoa from 'btoa';
import * as util from 'util';

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

    maskString(data: string, n = 12) {
        if (data) {
            return `${data.slice(0, n)}************${data.slice(data.length - n)}`;
        }
        return '';
    }
}

export default Util;
