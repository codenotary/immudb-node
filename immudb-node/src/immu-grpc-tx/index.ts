import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'


export function grpcTxHeaderToTxCore(
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