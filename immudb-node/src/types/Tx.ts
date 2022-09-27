import { Buffer } from 'node:buffer'
import Long from 'long'





export type TxHash = {
    type: 'tx-hash',
    /**
     * Transaction structure version.
     */
    version: '1',
     /**
      * Transaction sequence number. First transaction
      * have sequence number `1`.
      */
    id: Long,
    /**
     * Hash of transaction.
     */
    txHash: Buffer
}



/**
 * Transaction without specified entries.
 */
 export type TxCore = {
    type: 'tx-core',
    /**
     * Transaction structure version.
     */
    version: '1',
    /**
     * Transaction sequence number. First transaction
     * have sequence number `1`.
     */
    id: Long,
    /**
     * When transaction happened.
     */
    timestamp:  Long,
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
    /**
     * Count of all entries set during this transaction.
     */
    allEntriesCount: number,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash:     Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht:    Buffer,
}






















/**
 * Transaction is recursive structure heaving
 * entries (list of and data) and other (previous) transaction.
 * 
 * Effectively transaction is database at state
 * when the transaction was last database transaction.
 */
export type TxObsolate = {
    /**
     * Id of transaction. 
     */
    id: Long,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash: Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht: Buffer,
    /**
     * When transaction happened.
     */
    timestamp: Long,
    /**
     * Transaction structure version.
     */
    version: 1,
    /**
     * Transaction can contain list of data (entries), 
     * and it is count of this list.
     */
    entriesCount: number,
    /**
     * Merkle Hash of entries.
     */
    entriesMht: Buffer,
}







/**
 * Structure representing transaction {@link TxObsolate},
 * useful for referring to transaction.
 */
export type RefToTxObsolate = {
    /**
     * Hash (sha256) of transaction.
     */
    hash:  Buffer,
    /**
     * Id of reffered transaction.
     */
    id:    Long,
    /**
     * Transaction
     */
    tx?:     TxObsolate,
}

