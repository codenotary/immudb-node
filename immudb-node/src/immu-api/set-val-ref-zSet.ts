import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as ike from '../immu-kvm-entry/index.js'
import Long from 'long'

import { SetValEntryProps } from './set-val-entry.js'
import { SetRefEntryProps } from './set-ref-entry.js'
import { SetZSetEntryProps } from './set-z-entry.js'



/**
 * Specifies how to set Entry.
 */
export type SetEntryProps = {
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
     * Operations.
     */
    ops: SetOperation[],
}


export type SetOperation = 
    | ({ type: 'val'  } & immu.KeyValMeta)
    | ({ type: 'ref'  } & SetRefEntryProps) 
    | ({ type: 'zSet' } & SetZSetEntryProps)


export function createSetEntries(client: igrpc.ImmuServiceClient) {
    const execAllGrpc = immuGrpc.unaryCall.createExecAll(client)

    
    return function setEntries(props: SetEntryProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return execAllGrpc({
            request: {
                Operations:     props.ops.map(operationToGrpcOperation),
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

            const tx = igt.grpcTxHeaderToTxCore(grpcTx)
            const txEntries = props.ops.map((entry) => operationToVerifiableOperation(
                entry, 
                tx, 
            ))

            return {txEntries, tx}

        })
    }
}



function operationToGrpcOperation(op: SetOperation): igrpc.Op {
    
    switch(op.type) {
        case 'val': return {
            operation: 'kv',
            kv: ike.kvmToGrpcKeyValue(op)
        }
        case 'ref': return {
            operation: 'ref',
            ref: {
                referencedKey:  op.referToKey,
                key:            op.key,
                atTx:           op.keyTxId,
                boundRef:       op.boundRef,
                noWait:         op.options?.dontWaitForIndexer,
                preconditions:  op.preconditions?.map(
                    igp.precondToGrpcPrecond
                ),
            }
        }
        case 'zSet': return {
            operation: 'zAdd',
            zAdd: {
                set:        op.zSet,
                key:        op.referredKey,
                score:      op.referredKeyScore,
                atTx:       op.referredKeyAtTxId,
                noWait:     op.options?.dontWaitForIndexer,
                boundRef:   op.boundReferredKeyAtTxId,
            },
        }
    }

    
}



function operationToVerifiableOperation(
    op: SetOperation, 
    tx: immu.TxCore,
): immu.ZSetTxEntry | immu.RefTxEntry | immu.ValTxEntry {

    switch(op.type) {
        case 'val': return {
            type:       'val',
            version:    '1',
            meta:       op.meta,
            id:         tx.id,
            key:        op.key,
            val:        op.val,
        }
        case 'ref': return {
            type: 'ref',
            version: '1',
            meta: undefined,
            id: tx.id,
            key: op.key,
            referredKey: op.referToKey,
            referredAtTxId: op.keyTxId !== undefined
                ? op.keyTxId
                : op.boundRef === true 
                    ? tx.id
                    : Long.UZERO,
        }
        case 'zSet': return {
            type:               'zSet',
            version:            '1',
            id:                 tx.id,
            meta:               undefined,
            referredKey:        op.referredKey,
            referredAtTxId:     op.referredKeyAtTxId ?? Long.UZERO,
            referredKeyScore:   op.referredKeyScore,
            zSet:               op.zSet,
        }
    }

}






export type SetEntriesStreamingProps = {
    chunks: AsyncIterable<igrpc.Chunk>
}

export function createSetEntriesStreaming(client: igrpc.ImmuServiceClient) {
    const streamExecAllGrpc = immuGrpc.writerCall.createStreamExecAll(client)

    
    /**
     * 
     * Example usage:
     * 
     * ```ts
     * 
     * const tx = setEntriesStreaming({chunks: fromExecEntriesGen([
     *     {
     *          type: 'kv', 
     *          entry: {
     *              key: Buffer.from('some key'), 
     *              val: Buffer.from('some val'),
     *          },
     *      },
     *     {
     *          type: 'zAdd', 
     *          entry: {
     *              set: Buffer.from('my set'), 
     *              score: 2, 
     *              key: Buffer.from('some key'),
     *          },
     *      },
     * ])})
     * 
     * ```
     */
    return function setEntriesStreaming(props: SetEntriesStreamingProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return streamExecAllGrpc({
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