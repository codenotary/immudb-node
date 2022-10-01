import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import Long from 'long'
import { grpcDualProofToVerificationTx } from './tx.js'
import { grpcTxEntriesToVerificationEntries } from './entry.js'


export * from './tx.js'
export * from './entry.js'


export function verificationAndTxFromGrpcVerTx(props: {
    grpcVerTx:  igrpc.VerifiableTx__Output,
    refTxId:    Long,
    refHash:    Buffer,
}): {
    transaction: immu.Transaction,
    verification: immu.Verification,
} {
            
    const grpcTx = props.grpcVerTx.tx
    const grpcProof = props.grpcVerTx.dualProof

    if(grpcTx?.header == undefined) {
        throw 'transaction must be defined'
    }
    if(grpcProof?.sourceTxHeader == undefined) {
        throw 'sourceTxHeader must be defined'
    }
    if(grpcProof?.targetTxHeader == undefined) {
        throw 'targetTxHeader must be defined'
    }

    

    const verificationEntries = grpcTxEntriesToVerificationEntries({
        txEntries:      grpcTx.entries,
        allEntriesMht:  grpcTx.header.eH
    })


    const verificationTx: immu.VerificationTx = grpcDualProofToVerificationTx({
        grpcProof:  grpcProof,
        grpcTx:     grpcTx.header,
        refHash:    props.refHash,
        refTxId:    props.refTxId,
    })
    

    const verification: immu.Verification = {
        entries:    verificationEntries,
        tx:         verificationTx
    }


    const transaction: immu.Transaction = {
        id:         verificationTx.tx.id,
        timestamp:  verificationTx.tx.timestamp,
        entries:    verificationEntries.allEntries,
    }


    return {
        transaction,
        verification
    }

}