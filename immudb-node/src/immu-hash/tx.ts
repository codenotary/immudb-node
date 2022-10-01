import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'





export function hashOfTxCore(tx: immu.TxCore) {
    return hash.ofBuffers(
        Buffer.from(tx.id.toBytesBE()),               // id
        tx.prevTxHash,                                // previous tx hash
        hash.ofBuffers(                                 
            Buffer.from(tx.timestamp.toBytesBE()),    // timestamp
            buffer.fromUInt16BE(1),                      // header version
            buffer.fromUInt16BE(0),                      // empty tx metadata
            buffer.fromUInt32BE(tx.allEntriesCount),  // tx entries count
            tx.allEntriesMht,                         // tx entries mht hash
            Buffer.from(tx.id.sub(1).toBytesBE()),    // previous tx id
            tx.prevTxesMht,                           // previous tx'es mht hash
        )
    )
}

export function hashOfTxHash(tx: immu.TxHash): Buffer {
    return tx.txHash
}

