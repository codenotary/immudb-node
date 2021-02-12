import * as types from './interfaces';
declare class Util {
    constructor();
    utf8Encode(val: any): Uint8Array;
    utf8Decode(val: any): any;
    base64Encode(val: any): string;
    equalArray(a1: any, a2: any): boolean;
    isPowerOfTwo(x: any): boolean;
    maskConfig(c: types.Config): string;
    maskString(data: string, n?: number): string;
    prefixKey(key: Uint8Array): Uint8Array;
    prefixValue(value: Uint8Array): Uint8Array;
    encodeReferenceValue(referencedKey: Uint8Array, atTx: number): Uint8Array;
}
export default Util;
