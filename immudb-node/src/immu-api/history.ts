import type * as igrpc       from '@codenotary/immudb-node-grpcjs'
import * as grpcjs      from '@grpc/grpc-js'
import * as immuGrpc    from '../immu-grpc/index.js'
import * as ige         from '../immu-grpc-entry/index.js'
import { Buffer } from 'node:buffer'
import Long from 'long'





export type GetHistoryProps = {
    /** 
     * Sort order, default is ascending. To order descending set this field to
     * `true`. 
     */
    sortDescending?: boolean,
    /** 
     * Key for which scan history.
     */
    key: Buffer,
    /**
     * Start history scan starting with revision id:
     * - `0` - most recent revision
     * - `n` - n-th revision (n's starts from 1),
     * - `-k` - k-th revision before most recent (k's starts from 1).
     */
    startAtRevisionId?: Long,
    /** 
     * Limit output to number, no limit if `undefined` (default).
     */
    limit?: number,
    /**
     * Get keys in transactions (database) after specified id.
     * 
     * Simulate situation as if database consists of transactions:
     * - from transaction `seenAtTxId`
     * - to most recent transaction.
     */
    seenSinceTxId?: Long,
}

export function createScanHistory(client: igrpc.ImmuServiceClient) {

    const historyGrpc = immuGrpc.unaryCall.createHistory(client)

    return function scanHistory(props: GetHistoryProps & {
        credentials: grpcjs.CallCredentials
    }) {

        return historyGrpc({
            request: {
                key:            props.key,
                desc:           props.sortDescending,
                sinceTx:        props.seenSinceTxId,
                limit:          props.limit,
                offset:         props.startAtRevisionId,
            },
            options: {
                credentials:    props.credentials,
            }
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Entries__output must be defined')
        )
        .then(kvs => {
            return kvs.entries.map(ige.grpcEntryToValTxEntryAndRefTxEntry)
        })

    }

}



export function createScanHistoryStreaming(client: igrpc.ImmuServiceClient) {

    const streamScanHistoryGrpc = immuGrpc.readerCall.createStreamHistory(client)


    /**
     * Example usage:
     * 
     * ```ts
     * 
     * const buffs: Buffer[] = []
     * for await (const chunk of scanHistoryStreaming({key: Buffer.from('some key')})) {
     *     buffs.push(chunk.content)
     * }
     * const history = toKVEntries(Buffer.concat(buffs))
     * console.log(history)
     * 
     * ```
     * 
     */
    return function scanHistoryStreaming(props: GetHistoryProps & {
        credentials: grpcjs.CallCredentials
    }) {

        return streamScanHistoryGrpc({
            request: {
                key:            props.key,
                desc:           props.sortDescending,
                sinceTx:        props.seenSinceTxId,
                limit:          props.limit,
                offset:         props.startAtRevisionId,
            },
            credentials:        props.credentials,
            
        })

       
    }

}


