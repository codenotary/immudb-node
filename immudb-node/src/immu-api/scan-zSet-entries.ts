import type * as igrpc from 'immudb-node-grpcjs'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as ige from '../immu-grpc-entry/index.js'
import { Buffer } from 'node:buffer'
import Long from 'long'




export type ScanZSetEntriesProps = {
    /** 
     * Sort order, default is ascending. To order descending set this field to
     * `true`. 
     */
    sortDescending?: boolean,
    /** 
     * Set to seek.
     */
    set: Buffer,
    /**
     * Include referenced entries heaving score at least `minScore`.
     */
    minScore?: number,
    /**
     * Include zEntries heaving key.
     */
    seekKey?: Buffer,
    /**
     * Wheader to include entries with {@link ScanZSetEntriesProps.minScore}
     * and {@link ScanZSetEntriesProps.maxScore}.
     */
    inclusiveSeek?: boolean,
    /** Limit output to number, no limit if `undefined` (default). */
    limit?: Long,
    /** 
     * Include referenced entries heaving score not greater than `maxScore`.
     */
    maxScore?: number,
    /** 
     * Include referenced entries heaving score equal to `equalsScore`.
     */
    equalsScore?: number,
    /**
     * Get keys in transactions (database) after specified id.
     * 
     * Simulate situation as if database consists of transactions:
     * - from transaction `seenAtTxId`
     * - to most recent transaction.
     */
    seenSinceTxId?: Long,
    /**
     * Get keys in transactions (database) after specified id.
     * 
     * Simulate situation as if database consists of transactions:
     * - from first transaction 
     * - to transaction with id `seenToTxId`.
     */
    seenToTxId?: Long,
    /**
     * If set to `true`, seek does not wait for indexer to be synchronized.
     * This mean that operation may return stale values.
     * 
     * Not set does nothing (default).
     */
    dontWaitForLatestKeys?: boolean
}

export function createScanZEntries(client: igrpc.ImmuServiceClient) {

    const zScanGrpc = immuGrpc.unaryCall.createZScan(client)

    return function scanZSetEntries(props: ScanZSetEntriesProps & {
        credentials: grpcjs.CallCredentials
    }) {

        return zScanGrpc({
            request: {
                
                set:            props.set,
                minScore:       { score: props.minScore },
                maxScore:       { score: props.maxScore },
                seekScore:      props.equalsScore,
                

                seekAtTx:       props.seenToTxId,


                desc:           props.sortDescending,
                inclusiveSeek:  props.inclusiveSeek,
                limit:          props.limit,
                noWait:         props.dontWaitForLatestKeys,
                sinceTx:        props.seenSinceTxId,
                seekKey:        props.seekKey,
            },
            options: {
                credentials:    props.credentials,
            }
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Entries__output must be defined')
        )
        .then(zEntries => zEntries.entries.map(
            ige.grpcZEntryToZSetEntryAndValTxEntryAndRefTxEntry
        ))

    }

}




export function createScanZEntriesStreaming(client: igrpc.ImmuServiceClient) {

    const streamScanZGrpc = immuGrpc.readerCall.createStreamZScan(client)


    /**
     * Example usage:
     * 
     * ```ts
     * 
     * const buffs: Buffer[] = []
     * for await (const chunk of scanZEntriesStreaming({})) {
     *     buffs.push(chunk.content)
     * }
     * const zEntries = toZEntries(Buffer.concat(buffs))
     * console.log(zEntries)
     * 
     * ```
     * 
     */
    return function scanZEntriesStreaming(props: ScanZSetEntriesProps & {
        credentials: grpcjs.CallCredentials
    }) {

        return streamScanZGrpc({
            request: {

                set:            props.set,
                minScore:       { score: props.minScore },
                maxScore:       { score: props.maxScore },
                seekScore:      props.equalsScore,


                seekAtTx:       props.seenToTxId,


                desc:           props.sortDescending,
                inclusiveSeek:  props.inclusiveSeek,
                limit:          props.limit,
                noWait:         props.dontWaitForLatestKeys,
                sinceTx:        props.seenSinceTxId,
                seekKey:        props.seekKey,
            },
            credentials:        props.credentials,
            
        })

       

    }

}


