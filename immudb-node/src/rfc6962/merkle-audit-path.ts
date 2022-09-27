import {merkelHashOf} from './merkle-hash.js'



/**
 * Computes Merkle audit path navigation list for given
 * size of leafs and index of selected leaf.
 *
 * @param things Length of things for which compute Merkel Audit Path
 * @param m 0 based index of thing
 */
export function merkleAuditPathNav(thingsLength: number, m: number): ('l' | 'r')[] {
    if(m < 0) {
        throw new RangeError('thing index can not be less than 0')
    }
    if(m >= thingsLength) {
        throw new RangeError('thing index must be within things indexes range')
    }    
    return merkleAuditPathNavInternal(thingsLength, m)

}


function merkleAuditPathNavInternal(thingsLength: number, m: number): ('l' | 'r')[] {
    const n = thingsLength
    switch (n) {
        case 0: return []
        case 1: return []
    }
    
    const k = maxPowOf2LessOrEqTo(n)

    const things_0_upto_k       = k
    const things_k_upto_n       = n - k
    
    
    return m < k
        ? [...merkleAuditPathNavInternal(things_0_upto_k, m),       'r']
        : [...merkleAuditPathNavInternal(things_k_upto_n, m - k),   'l']
}




/**
 * A Merkle audit path for a leaf in a Merkle Hash Tree is the shortest list of
 * additional nodes in the Merkle Tree required to compute the Merkle Tree Hash
 * for that tree.
 *
 * @export
 * @param things Things for which compute Merkel Audit Path
 * @param m 0 based index of thing
 * @return List of nodes of tree representation of merkel hash allowing (with
 * addition of leaf) computation of merkel hash of list.
 */
export function merkleAuditPath(things: Buffer[], m: number) {
    if(m < 0) {
        throw new RangeError('thing index can not be less than 0')
    }
    if(m >= things.length) {
        throw new RangeError('thing index must be within things indexes range')
    }    
    return merkleAuditPathInternal(things, m)

}




function merkleAuditPathInternal(things: Buffer[], m: number): Buffer[] {
    const n = things.length
    switch (n) {
        case 0: return []
        case 1: return []
    }
    
    const k = maxPowOf2LessOrEqTo(n)

    const things_0_upto_k       = things.slice(0, k-1)
    const things_k_upto_n       = things.slice(k)
    
    
    return m < k
        ? [...merkleAuditPathInternal(things_0_upto_k, m),       merkelHashOf(things_k_upto_n)]
        : [...merkleAuditPathInternal(things_k_upto_n, m - k),   merkelHashOf(things_0_upto_k)]
}






/**
 * Finds highest power of 2 smaller
 * than or equal to n. No input checks are performed,
 * so illegal input will return not relevant value.
 * 
 * @param n Positive integer equall or greater than 1
 * @returns Closest power of two value on the left
 */
function maxPowOf2LessOrEqTo(n: number): number {
 
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