/**
 * Provides data type for (small) Merkle Hash Tree in memory,
 * and convinient methods for tree examination,
 * navigation and inclusion proof generator for
 * any of tree leafs.
 *
 */
import * as hash from '../immu-hash/index.js'




export type MerkleTreeData = Buffer[][]


export function createFromValues(
    values: Buffer[]
): MerkleTreeData {

    if (values.length < 1) {
        throw new RangeError('values must be non empty')
    }


    function allocateTree(numberOfLeafs: number) {
        const tree: MerkleTreeData = []

        let levelLastIndex = numberOfLeafs - 1
        tree.push(Array.from({length: levelLastIndex + 1}))

        while (levelLastIndex > 0) {
            levelLastIndex = levelLastIndex >> 1
            tree.push(Array.from({length: levelLastIndex + 1}))
        }
        return tree
    }
    const tree: MerkleTreeData = allocateTree(values.length)

    values.forEach((value, i) => {
        tree[0][i] = hash.ofBuffers(Buffer.of(0x00), value)
    })
    

    let currentWidth = values.length
    let currentLevel = 0

    while (currentWidth > 1) {
        let parentNodeIndex = 0
        let currentNodeIndex = 0

        while (currentNodeIndex + 1 < currentWidth) {
            
            tree[currentLevel+1][parentNodeIndex] = hash.ofBuffers(
                Buffer.of(0x01),
                tree[currentLevel][currentNodeIndex],
                tree[currentLevel][currentNodeIndex+1]
            )

            parentNodeIndex = parentNodeIndex+1
            currentNodeIndex = currentNodeIndex+2

        }

        if (currentWidth % 2 === 1) {
            tree[currentLevel+1][parentNodeIndex] = tree[currentLevel][currentWidth-1]
            parentNodeIndex = parentNodeIndex+1
        }

        currentLevel += 1
        currentWidth = parentNodeIndex
    }

    return tree
}


export function getRoot(treeData: MerkleTreeData) {
    return treeData[treeData.length - 1][0]
}

export function getWidth(treeData: MerkleTreeData) {
    return treeData[0].length
}

export function getHight(treeData: MerkleTreeData) {
    return treeData.length
}

export function getLevelWidht(treeData: MerkleTreeData, levelIndex: number) {
    const height = getHight(treeData)

    if (
        levelIndex < 0
        || levelIndex > (height - 1)
    ) {
        throw new RangeError('levelIndex must be greater or equal 0 and lesser than tree height')
    }

    return treeData[levelIndex].length
}

export function getLeaf(
    treeData: MerkleTreeData,
    index: number
) {
    const levelWidth = getWidth(treeData)
   
    if (
        index < 0
        || index > (levelWidth - 1)
    ) {
        throw new RangeError('index must be greater or equall 0 and lesser than level width')
    }

    return treeData[0][index]
}

export function getNode(
    treeData: MerkleTreeData,
    levelIndex: number,
    index: number
) {
    const levelWidth = getLevelWidht(treeData, levelIndex)
   
    if (
        index < 0
        || index > (levelWidth - 1)
    ) {
        throw new RangeError('index must be greater or equall 0 and lesser than level width')
    }

    return treeData[levelIndex][index]
}

export function getParentNodeIndex(
    treeData: MerkleTreeData,
    levelIndex: number,
    index: number
) {
    const levelWidth = getLevelWidht(treeData, levelIndex)
   
    if (
        index < 0
        || index > (levelWidth - 1)
    ) {
        throw new RangeError('index must be greater or equall 0 and lesser than level width')
    }

    return index >> 1
}


export function generateInclusionProofDataFor(props: {
    leafIndex: number,
    usingMerkleTree: MerkleTreeData
}) {
    const {
        leafIndex: leafIndex,
        usingMerkleTree: tree,
    } = props

    const width = getWidth(tree)
        
    if (
        leafIndex < 0
        || leafIndex > width - 1
    ) {
        throw new RangeError('leafIndex must be greater or equall 0 and lesser than tree width')
    }

    const treeHight = getHight(tree)
    

    const path: Buffer[] = []
    let currentLevelIndex = 0
    let currentIndex = leafIndex
    let currentWidth = tree[currentLevelIndex].length

    while (currentLevelIndex < treeHight - 1) {

        // have left sibling
        if ((currentIndex + 1) % 2 === 0) {
            // add left sibling to path
            path.push(tree[currentLevelIndex][currentIndex - 1])
        }
        // no left sibling
        else {
            // no left sibling, and since last element no right sibling
            if ((currentIndex + 1) === currentWidth) {
                // do not add, wait for left sibling
            }
            // have right sibling
            else {
                // add right sibling
                path.push(tree[currentLevelIndex][currentIndex + 1])
            }
        }

        // level up
        currentLevelIndex = currentIndex + 1
        // go to parent
        currentIndex = currentIndex >> 1
        // level up width
        currentWidth = tree[currentLevelIndex].length

    }
    
    return path
}


function powerOfTwoLessOrEqThan(uInt32: number){
    uInt32 |= uInt32 >> 1;
    uInt32 |= uInt32 >> 2;
    uInt32 |= uInt32 >> 4;
    uInt32 |= uInt32 >> 8;
    uInt32 |= uInt32 >> 16;
    return uInt32 ^ (uInt32 >> 1);
}