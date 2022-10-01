import * as memoryMhtApi from "./memoryMhtApi.js";


/**
 * Stores (small) Merkle Hash Tree in memory,
 * provide convinient methods for tree examination,
 * navigation and can produce inclusion proof for
 * any of its leafs.
 *
 */
export class MemoryMht {
    readonly tree: memoryMhtApi.MerkleTreeData

    /**
     * Constructs full MHT tree from list of values. 
     *
     * Tree is build as fallows:
     * - Leafs are created hashing concatence of leaf prefix `0x00` and value. 
     * - Nodes are created by hashing concatence of node prefix `0x01`, left
     *   subtree, right subtree.
     *
     * Tree supports matrix like indexing, and ability to generate inclusion
     * proofs.
     */
    constructor(values: Buffer[]) {
        this.tree = memoryMhtApi.createFromValues(values)
    }

    getRoot(): Buffer {
        return memoryMhtApi.getRoot(this.tree)
    }

    width(): number {
        return memoryMhtApi.getWidth(this.tree)
    }

    hight(): number {
        return memoryMhtApi.getHight(this.tree)
    }

    levelWidth(levelIndex: number): number {
        return memoryMhtApi.getLevelWidht(this.tree, levelIndex)
    }

    getNode(
        levelIndex: number,
        index: number
    ): Buffer {
        return memoryMhtApi.getNode(this.tree, levelIndex, index)
    }


    getLeaf(index: number): Buffer {
        return memoryMhtApi.getLeaf(this.tree, index)
    }

    getParentNodeIndex(
        levelIndex: number,
        index: number
    ): number {
        return memoryMhtApi.getParentNodeIndex(this.tree, levelIndex, index)
    }

    generateInclusionProofFor(
        leafIndex: number
    ): Buffer[] {
        return memoryMhtApi.generateInclusionProofDataFor({
            leafIndex,
            usingMerkleTree: this.tree,
        })
    }
}