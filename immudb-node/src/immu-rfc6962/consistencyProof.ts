import Long from 'long'
import { createGenerator } from '../immu-hash/hash.js'






/**
 * Computes source and target Merkel Hash trees roots
 * using data of the proof. This function implements
 * client side consistency check alghoritm.
 * @export
 * @return computed roots
 */
export function rootsFromConsistencyProof(
    proofData: {
        /**
         * List of nodes needed to compute source and target Merkle Tree hashes.
         * Proof nodes have four parts:
         * - first node is last leaf of source Merkle Tree, used for computation
         *   of both source and target Merkle Trees roots,
         * - next is 0 or 1 node from target Merkle Tree joined on the right used for
         *   computing target Merkle Tree,
         * - next are nodes from both Merkle Trees (at least 1 when source and
         *   target are not the same) joined on the left used for computing source and
         *   target Merkle Tree,
         * - next are 0 or moore nodes from target Merkle Tree joined on the right when
         *   computing target Merkle Tree.
         */
        proofNodes: Buffer[],
        /**
         * Size (number of leafs) of the source Merkle Tree.
         * Number is encoded as UInt64, unsigned integer with 64 bits,
         * and represented by type Long in js. In immudb sourceSize
         * is equal to last transaction number.
         */
        sourceSize: Long,
        /**
         * Size (number of leafs) of the target Merkle Tree.
         * Number is encoded as UInt64, unsigned integer with 64 bits,
         * and represented by type Long in js. In immudb targetSize
         * is equal to last transaction number.
         */
        targetSize: Long,
    }
): {
    /**
     * Source Merkle Tree root
     * (by default as SHA256)
     */
    sourceRoot: Buffer,
    /**
     * Target Merkle Tree root
     * (by default as SHA256)
     */
    targetRoot: Buffer,
} {

    const computeHash = createGenerator()

    // change sizes to indexes
    let sourceCurrentNodeIndex = proofData.sourceSize.sub(1)
    let targetCurrentNodeIndex = proofData.targetSize.sub(1)

    // while sourceCurrentNodeIndex is node with left sibling
    while (sourceCurrentNodeIndex.mod(2).equals(1)) {
        // go to parent
        sourceCurrentNodeIndex = sourceCurrentNodeIndex.shiftRight(1)
        // go to parent
        targetCurrentNodeIndex = targetCurrentNodeIndex.shiftRight(1)
    }
    // here sourceCurrentNodeIndex is node **without** left sibling!


    // setup current nodes:
    // first source node is last leaf from source tree
    let sourceCurrentNode = proofData.proofNodes[0]
    // first target node is also last leaf from source tree
    let targetCurrentNode = proofData.proofNodes[0]

    

    for (let k = 1; k < proofData.proofNodes.length; k++) {
        // this part verifies proof when both paths matches
        if (
            sourceCurrentNodeIndex.mod(2).equals(1)                  // source node have left sibling
            || sourceCurrentNodeIndex.equals(targetCurrentNodeIndex) // source node is target node
        ) {
            // add left sibling
            sourceCurrentNode = computeHash(
                Buffer.from([
                    0x01,
                    ...proofData.proofNodes[k],
                    ...sourceCurrentNode,
                ])
            )
            // add left sibling
            targetCurrentNode = computeHash(
                Buffer.from([
                    0x01,
                    ...proofData.proofNodes[k],
                    ...targetCurrentNode,
                ])
            )

            // while sourceCurrentNodeIndex is node without left sibling
            //       or sourceCurrentNodeIndex is root
            while (
                sourceCurrentNodeIndex.mod(2).equals(0)
                && sourceCurrentNodeIndex.notEquals(0)
            ) {
                // go to parent
                sourceCurrentNodeIndex = sourceCurrentNodeIndex.shiftRight(1)
                // go to parent
                targetCurrentNodeIndex = targetCurrentNodeIndex.shiftRight(1)
            }
            // now sourceCurrentNodeIndex have left sibling
            //     or sourceCurrentNodeIndex is root
        }
        // this part builds target path from bottom before source and target paths matches 
        // and above source path
        else {

            // add right sibling
            targetCurrentNode = computeHash(
                Buffer.from([
                    0x01,
                    ...targetCurrentNode,
                    ...proofData.proofNodes[k],
                ])
            )
        }

        // go to parent
        sourceCurrentNodeIndex = sourceCurrentNodeIndex.shiftRight(1)
        // go to parent
        targetCurrentNodeIndex = targetCurrentNodeIndex.shiftRight(1)
    }


    if (sourceCurrentNodeIndex.notEquals(0)) {
        console.log(
            'Consistency proof: computed source node is not root node for tree of provided size',
            sourceCurrentNodeIndex
        )
    }
    if (targetCurrentNodeIndex.notEquals(0)) {
        console.log(
            'Consistency proof: computed source node is not root node for tree of provided size',
            targetCurrentNodeIndex
        )
    }

    return {
        sourceRoot: sourceCurrentNode,
        targetRoot: targetCurrentNode,
    }
}