import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import * as promis from '../grpc-promis/index.js'




// **************************
// Set Values
// **************************

export function createStreamSet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcWriter<igrpc.Chunk, igrpc.TxHeader__Output>(
        client.streamSet.bind(client)
    )
}

export function createStreamExecAll(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcWriter<igrpc.Chunk, igrpc.TxHeader__Output>(
        client.streamExecAll.bind(client)
    )
}

// **************************
// Set Values and proof
// **************************

export function createStreamVerifiableSet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcWriter<igrpc.Chunk, igrpc.VerifiableTx__Output>(
        client.streamVerifiableSet.bind(client)
    )
}


// **************************
// Instance
// **************************

export function createReplicateTx(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcWriter<igrpc.Chunk, igrpc.TxHeader__Output>(
        client.replicateTx.bind(client)
    )
}