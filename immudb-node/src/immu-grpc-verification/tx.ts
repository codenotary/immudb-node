import type * as igrpc from '@codenotary/immudb-node-grpcjs';
import type * as immu from '../types/index.js'
import * as binEntry from '../immu-entry/index.js'
import Long from 'long'
import * as txCore from '../immu-tx-core.js'






export function grpcDualProofToVerificationTx(props: {
    grpcProof:  igrpc.DualProof__Output,
    grpcTx:     igrpc.TxHeader__Output,
    refTxId:    Long,
    refHash:    Buffer,
}): immu.VerificationTx {


    let verificationTx: immu.VerificationTx
    const txVerificationType = computeVerificationTxType({
        verId: props.grpcTx.id,
        refId: props.refTxId,
    })

    // console.log('dualProof consistencyProof: ', props.grpcProof.consistencyProof)
    // console.log('dualProof lastInclusionProof: ', props.grpcProof.lastInclusionProof)
    // console.log('dualProof inclusionProof: ', props.grpcProof.inclusionProof)

    switch(txVerificationType) {
        case 'tx-prev-in-ref-prev':
            return {
                type:                       'tx-prev-in-ref-prev',
                tx:                         txCore.fromGrpcTxHeader(props.grpcTx),
                refPrevTxInRefPrevTxesMht:  props.grpcProof.lastInclusionProof,
                txPrevInRefPrevTxesMht:     props.grpcProof.inclusionProof,
                ref:                        txCore.fromGrpcTxHeader(props.grpcProof.targetTxHeader),
                refHash: {
                    type:       'tx-hash',
                    version:    '1',
                    txHash:     props.refHash,
                    id:         props.refTxId,
                },
            }
        case 'ref-prev-in-tx-prev':
            return {
                type:                                       'ref-prev-in-tx-prev',
                tx:                                         txCore.fromGrpcTxHeader(props.grpcTx),
                txPrevTxInTxPrevTxesMht:                    props.grpcProof.lastInclusionProof,
                refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht:  props.grpcProof.consistencyProof,
                ref:                                        txCore.fromGrpcTxHeader(props.grpcProof.sourceTxHeader),
                refHash: {
                    type:       'tx-hash',
                    version:    '1',
                    txHash:     props.refHash,
                    id:         props.refTxId,
                },
            }
        case 'tx-is-ref':
            return {
                type:                       'tx-is-ref',
                tx:                         txCore.fromGrpcTxHeader(props.grpcTx),
                txPrevTxInRefPrevTxesMht:   props.grpcProof.lastInclusionProof,
                refHash: {
                    type:       'tx-hash',
                    version:    '1',
                    txHash:     props.refHash,
                    id:         props.refTxId,
                },
            }
    }

}



export function computeVerificationTxType(props: {
    verId: Long,
    refId: Long,
}): immu.VerificationTxType {
    switch(props.verId.compare(props.refId)) {
        case -1:    return 'tx-prev-in-ref-prev'
        case 0:     return 'tx-is-ref'
        case 1:     return 'ref-prev-in-tx-prev'
    }

    throw 'bad comparizon value'
}
