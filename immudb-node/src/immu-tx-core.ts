import type * as immu from './types/index.js'
import type * as igrpc from '@codenotary/immudb-node-grpcjs'


export function fromGrpcTxHeader(
    grpcTxHeader: igrpc.TxHeader__Output | null | undefined
): immu.TxCore {

    if(grpcTxHeader == undefined) {
        throw 'grpcTxHeader must be defined'
    }
    return {
        type:               'tx-core',
        version:            '1',
        id:                 grpcTxHeader.id,
        timestamp:          grpcTxHeader.ts,
        prevTxesMht:        grpcTxHeader.blRoot,
        prevTxHash:         grpcTxHeader.prevAlh,
        allEntriesMht:      grpcTxHeader.eH,
        allEntriesCount:    grpcTxHeader.nentries,
    }
}