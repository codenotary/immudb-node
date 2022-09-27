import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import Long from 'long'



export type SetZSetEntryProps = {
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
     * Key of Set holding ZEntries.
     */
    zSet: Buffer,
    /**
     * Key to include in set {@link SetZSetEntryProps.zSet}.
     */
    referredKey: Buffer,
    /**
     * Key index in set.
     */
    referredKeyScore: number,
    /** 
     * Optional transaction id for seeing key by indexer. If not set this value
     * will be set to `0` by immudb, meaning reference to latest value of key.
     */
    referredKeyAtTxId?: Long,
    /**
     * Setting this value to:
     * - `true` and if {@link SetZSetEntryProps.referredKeyAtTxId} is not set, then immudb
     *   will set {@link SetZSetEntryProps.referredKeyAtTxId} to latest transaction id.
     * - `true` and if {@link SetZSetEntryProps.referredKeyAtTxId} is set
     *   than operation behaviour is unknown.
     * - `false` or `undefinde` (default) operation behaviour will
     *   not be changed.
     */
    boundReferredKeyAtTxId?: boolean,
}


export function createSetZSetEntry(client: igrpc.ImmuServiceClient) {
    const setZEntryGrpc = immuGrpc.unaryCall.createZAdd(client)

    
    return function setZEntry(props: SetZSetEntryProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return setZEntryGrpc({
            request: {
                set:        props.zSet,
                key:        props.referredKey,
                score:      props.referredKeyScore,
                atTx:       props.referredKeyAtTxId,
                noWait:     props.options?.dontWaitForIndexer,
                boundRef:   props.boundReferredKeyAtTxId,
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

            const tx = igt.grpcTxHeaderToTxCore(grpcTx)
            const zSetTxEntry: immu.ZSetTxEntry = {
                type: 'zSet',
                version: '1',
                zSet: props.zSet,
                referredKey: props.referredKey,
                referredKeyScore: props.referredKeyScore,
                referredAtTxId: props.referredKeyAtTxId ?? Long.UZERO,
                id: tx.id
            }

            return {zSetTxEntry, tx}
        })
    }
}




