import { TxCore, TxHash } from "./Tx.js";
import Long from "long"





export type VerificationTx = 
    | VerificationTxInclusion 
    | VerificationTxIsExtending 
    | VerificationTxEquality


export type VerificationTxInclusion = {
    type:                       'tx-prev-in-ref-prev',
    refHash:                    TxHash,
    tx:                         TxCore,
    ref:                        TxCore,
    txPrevInRefPrevTxesMht:     Buffer[],
    refPrevTxInRefPrevTxesMht:  Buffer[],
}

export type VerificationTxIsExtending = {
    type: 'ref-prev-in-tx-prev';
    refHash:                    TxHash,
    tx:                         TxCore,
    ref:                        TxCore,
    txPrevTxInTxPrevTxesMht:    Buffer[],
    refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht: Buffer[]
}

export type VerificationTxEquality = {
    type: 'tx-is-ref';
    refHash:                   TxHash,
    tx:                        TxCore,
    txPrevTxInRefPrevTxesMht:  Buffer[],
}

export type VerificationTxType = VerificationTx['type']
