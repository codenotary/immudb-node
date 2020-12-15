declare class Util {
    constructor();
    utf8Encode(val: any): Uint8Array;
    utf8Decode(val: any): any;
    base64Encode(val: any): string;
    equalArray(a1: any, a2: any): boolean;
    isPowerOfTwo(x: any): boolean;
}
export default Util;
