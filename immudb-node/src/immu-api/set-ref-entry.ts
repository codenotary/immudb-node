import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import Long from 'long'


/**
 * Specifies how to set RefEntry.
 */
export type SetRefEntryProps = {
    /**
     * Operation options.
     */
    options?: {
        /**
         * Do not wait for ImmuDb to update database indexes, setting this
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
    },
    /**
     * All conditions must be fullfilled for all key values.
     */
    preconditions?: immu.ValOrRefKeyPrecondition[],
    /**
     * Key to include in set {@link SetRefEntryProps.set}.
     */
    key: Buffer,
    /**
     * Key to reference.
     */
    referToKey: Buffer,
    /** 
     * Optional transaction id for seeing key by indexer. If not set this value
     * will be set to `0` by immudb, meaning reference to latest value of key.
     */
    keyTxId?: Long,
    /**
     * Setting this value to:
     * - `true` and if {@link SetRefEntryProps.keyTxId} is not set, then immudb
     *   will set {@link SetRefEntryProps.keyTxId} to latest transaction id.
     * - `true` and if {@link SetRefEntryProps.keyTxId} is set
     *   than operation behaviour is unknown.
     * - `false` or `undefinde` (default) operation behaviour will
     *   not be changed.
     */
    boundRef?: boolean,
}


export function createSetRefEntry(client: igrpc.ImmuServiceClient) {
    const setRefEntryGrpc = immuGrpc.unaryCall.createSetReference(client)

    
    return function setRefEntry(props: SetRefEntryProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return setRefEntryGrpc({
            request: {

                referencedKey:  props.referToKey,
                key:            props.key,
                atTx:           props.keyTxId,
                boundRef:       props.boundRef,
                preconditions:  props.preconditions?.map(
                    igp.precondToGrpcPrecond
                ),
                
                noWait:         props.options?.dontWaitForIndexer,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('TxHeader__Output  must be defined')
        )
        .then(grpcTx => {

            const txCore = igt.grpcTxHeaderToTxCore(grpcTx)
            const ref: immu.RefTxEntry = {
                type:           'ref',
                version:        '1',
                id:             txCore.id,
                key:            props.key,
                referredKey:    props.referToKey,
                referredAtTxId: props.keyTxId !== undefined
                    ? props.keyTxId
                    : props.boundRef === true 
                        ? txCore.id
                        : Long.UZERO,
            }
            
            return {ref, txCore}
        })
    }
}




