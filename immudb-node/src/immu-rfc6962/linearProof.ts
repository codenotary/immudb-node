import Long from 'long'
import { createGenerator } from '../immu-hash/hash.js'




/**
 * Computes last block (transactionId, previousBlock, dataHash) hash
 * from previous block hash and data hashes
 * 
 * @throws {@link RangeError} when sourceTxId is less than zero
 * @throws {@link RangeError} when proofData is empty
 * 
 * @returns Block hash and its transaction id
 */
export function blockFromLinearProof(props: {
    /**
     * Array of hashes, first element is hash of previous
     * block, rest are hashes of data.
     */
    proofData: Buffer[],
    /**
     * Transaction id of previous block (UInt64)
     */
    sourceTxId: Long,
}):  {
    /**
     * hash of computed block
     */
    blockHash: Buffer,
    /**
     * transaction id of computed block
     */
    txId: Long,
} {

    const { proofData, sourceTxId } = props
    if (sourceTxId.lessThan(0)) {
        throw new RangeError('sourceTxId must be greater or equal 0')
    }
    if (proofData.length < 1) {
        throw new RangeError('proofData must have at least one element')
    }
    const hash = createGenerator()
    let blockHash = proofData[0]
    const transactionHash = proofData
    for (let i = 1; i < transactionHash.length; i++) {
        blockHash = hash(Buffer.from([      // next block hash
            ...sourceTxId.add(i).toBytesBE(), // next transaction id
            ...blockHash,                   // current block hash
            ...transactionHash[i]           // next transaction hash
        ]))
    }

    return {
        /**
         * hash of computed block
         */
        blockHash,
        /**
         * transaction id of computed block
         */
        txId: sourceTxId.add(transactionHash.length - 1),
    }
}



export function blockFromPreviousBlock(props: {
    previousBlockHash: Buffer,
    currentMhtHash: Buffer,
    currentId: Long
}) {

    const hash = createGenerator()

    return hash(Buffer.from([     
        ...props.currentId.toBytesBE(), 
        ...props.previousBlockHash,  
        ...props.currentMhtHash,
    ]))
}





