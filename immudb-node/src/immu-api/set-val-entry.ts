import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as ike from '../immu-kvm-entry/index.js'



export type SetValEntryProps = {
    /**
     * Array of key value pairs to set.
     */
    kvms: immu.KeyValMeta[], 
    /**
     * All conditions must be fullfilled for all key values.
     */
    preconditions?: immu.ValOrRefKeyPrecondition[], 
    /**
     * Operation options.
     */
    options?: {
        /**
         * Do not wait for immudb to update database indexes, setting this
         * value to `true` may cause operation to speed up in exchange for
         * stale database latest keys values.
         *
         * For example geting key value will return key value pointed by
         * indexer. If indexer is not up to date, returned value may be not
         * latest value.
         *
         * Default value is `false`.
         */
        dontWaitForIndexer?: boolean,
    }
}


export function createSetValEntries(client: igrpc.ImmuServiceClient) {
    const setGrpc = immuGrpc.unaryCall.createSet(client)

    /**
     * Sets key-value pair(s) for given session defined in credentials
     */
    return function setVEntries(props: SetValEntryProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        

        return setGrpc({
            request: {
                KVs:            props.kvms.map(ike.kvmToGrpcKeyValue),
                noWait:         props.options?.dontWaitForIndexer,
                preconditions:  props.preconditions?.map(
                    igp.precondToGrpcPrecond
                ),
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('tx must be defined')
        )
        .then(txGrpc => {

            const txCore = igt.grpcTxHeaderToTxCore(txGrpc)
            const valEntries = props.kvms.map(
                grpcEntry => ike.kvmToValTxEntry(grpcEntry, txCore.id)
            )

            return {valEntries, txCore}
        })
    }
}



export type SetValEntriesStreamingProps = {
    chunks: AsyncIterable<igrpc.Chunk>
}

export function createSetValEntriesStreaming(client: igrpc.ImmuServiceClient) {
    const streamSetGrpc = immuGrpc.writerCall.createStreamSet(client)

    
    /**
     * 
     * Example usage: 
     * 
     * ```ts
     * 
     * const tx = setValEntriesStreaming({chunks: fromKVEntries([
     *     {
     *          key: Buffer.from('some key'), 
     *          val: Buffer.from('some val'),
     *      },
     *     {
     *          key: Buffer.from('other key'), 
     *          val: Buffer.from('other val'),
     *      },
     * ])})
     * 
     * ```
     */
    return function setValEntriesStreaming(props: SetValEntriesStreamingProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return streamSetGrpc({
            request: props.chunks,
            credentials: props.credentials,
        })
        .then(({res, info}) => res
            ? res 
            : Promise.reject('TxHeader__Output must be defined')
        )
        .then(igt.grpcTxHeaderToTxCore)
        
    }
}
























