import Long from 'long'
import * as hash from '../immu-hash/hash.js'




/**
 * Computes MHT root from:
 * - leaf `leaf`, 
 * - at posision `leafId`, 
 * - for MHT size `lastLeafId` 
 * - using Merkle Audit Path `inclusionProofNodes`.
 */
 export function rootFromInclusionProof(
    proofData: {
        /**
         * List of nodes needed to compute MHT path starting at leaf.
         */
        inclusionProofNodes: Buffer[],
        /**
         * Id (number) of leaf.
         * Number is encoded as UInt64  and represented by type Long in js. 
         */
        leafId: Long,
        /**
         * Size of Merkle Tree.
         * Number is UInt64, represented by type Long in js.
         */
        lastLeafId: Long,
        /**
         * Leaf node value for which proof inclusion
         */
        leaf: Buffer,
    }
): Buffer {

    // change sizes to indexes
    let currentNodeIndex = proofData.leafId.sub(1)
    let currentLevelLastIndex = proofData.lastLeafId.sub(1)

    // setup current nodes:
    let currentNode = proofData.leaf
    

    for (const inclusionProofNode of proofData.inclusionProofNodes) {
        // current node is left node
        // and current node is not last node
        if (
            currentNodeIndex.mod(2).equals(0) 
            && currentNodeIndex.notEquals(currentLevelLastIndex)
        ) {
            // join with node on right and compute parent node
            currentNode = hash.data(
                Buffer.concat([
                    Buffer.of(0x01),
                    currentNode,
                    inclusionProofNode,
                ])
            )
        }
        // curent node is right node
        // or current node is last node (last node can only have left sibling)
        else {
            // join with node on left
            currentNode = hash.data(
                Buffer.concat([
                    Buffer.of(0x01),
                    inclusionProofNode,
                    currentNode,
                ])
            )
        }

        // go to parent
        currentNodeIndex = currentNodeIndex.shiftRight(1)
        // go to parent
        currentLevelLastIndex = currentLevelLastIndex.shiftRight(1)
    }
     
    
    // check index is root.
    // how???


    return currentNode
}



/**
 * Computes MHT root from:
 * - leaf `iLeaf`, 
 * - at posision `i`, 
 * - for MHT size `j` 
 * - using Merkle Audit Path `iProof`.
 * 
 * This function is 1:1 rewrite of similar function 
 * in Java client
 */
export function evalInclusion(props: {
    iProof: Buffer[],
    i: Long,
    j: Long,
    iLeaf: Buffer
}) {
    const {iProof, i, j, iLeaf} = props

    let i1 = i.sub(1)
    let j1 = j.sub(1)
    let ciRoot = iLeaf;

    const b = Buffer.alloc(1 + 32 * 2)
    b[0] = 0x1;

    for (const h of iProof) {
        if (i1.mod(2).equals(0) && i1.notEquals(j1)) {
            ciRoot.copy(b, 1, 0, ciRoot.length)
            h.copy(b, 1 + 32, 0, h.length)
        } else {
            h.copy(b, 1, 0, h.length)
            ciRoot.copy(b, 1 + 32, 0, ciRoot.length)
        }

        ciRoot = hash.data(b)

        i1 = i1.shiftRight(1)
        j1 = j1.shiftRight(1)
    }

    return ciRoot
}

