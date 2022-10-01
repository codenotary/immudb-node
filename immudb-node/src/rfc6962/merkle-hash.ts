import * as hash from '../immu-hash/index.js'




/**
 * The hashing algorithm is SHA-256. The input to the Merkle Tree Hash is a list
 * of data entries; these entries will be hashed to form the leaves of the
 * Merkle Hash Tree. The output is a single 32-byte Merkle Tree Hash.
 * 
 * Alghoritm is as follows:
 * 
 * ```
 * MTH({})      = SHA-256()
 * MTH({d(0)})  = SHA-256(0x00 || d(0))
 * MTH(D(n))    = SHA-256(0x01 || MTH(D[0:k]) || MTH(D[k:n]))
 * ```
 * 
 * Symbols:
 * * `D(n) = [d(0), d(1), ..., d(n-1)]`
 * * `||` is concatenation
 * * `k` = the largest power of two smaller than n
 * * `D(k1:k2) = [d(k1), d(k1+1),..., d(k2-1)]`.
 * 
 * @example
 * const merkleHash256BytesBuffer = merkelHashOf(Buffer.from('Quick brown fox'))
 *
 * @see [rfc6962](https://datatracker.ietf.org/doc/html/rfc6962#section-2.1)
 * @param things List of things to merkle hash
 * @returns merkle hash
 */
export function merkelHashOf(things: Buffer[]) {
    return merkleHashOfN(things)
}


function merkleHashOfN(things: Buffer[]): Buffer {
    const n = things.length
    switch (n) {
        case 0: return merkelHashOfEmpty()
        case 1: return merkelHashOfOne(things[0])
    }
    
    const k = maxPowOf2LessOrEqTo(n)
    
    const padNode               = Buffer.from([0x01])

    const things_0_upto_k       = things.slice(0, k-1)
    const merkleHash_0_upto_k   = merkleHashOfN(things_0_upto_k)
    
    const things_k_upto_n       = things.slice(k)
    const merkleHash_k_upto_n   = merkleHashOfN(things_k_upto_n)

    return hash.ofBuffers(padNode, merkleHash_0_upto_k, merkleHash_k_upto_n)
}




function merkelHashOfEmpty() {
    // same result
    // return Buffer.from([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85])
    return hash.data(Buffer.of())
}



function merkelHashOfOne(thing: Buffer) {
    return hash.ofBuffers(Buffer.from([0x00]), thing)
}





/**
 * Finds highest power of 2 smaller
 * than or equal to n. No input checks are performed,
 * so illegal input will return not relevant value.
 * 
 * @param n Positive 32bit integer equall or greater than 1
 * @returns Closest power of two value on the left
 */
export function maxPowOf2LessOrEqTo(n: number)
{
    // check for the set bits
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
  
    // Then we remove all but the top bit by xor'ing the
    // string of 1's with that string of 1's shifted one to
    // the left, and we end up with just the one top bit
    // followed by 0's.
    return n ^ (n >> 1);
}