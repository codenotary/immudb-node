import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import Long from 'long'
import * as ige from '../immu-grpc-entry/index.js'



export type ScanTxesProps = {
    /** 
     * Sort order, default is ascending. To order descending set this field to
     * `true`. 
     */
    sortDescending?: boolean,
    /** If set limits output to set value, no limit if `undefined` (default). */
    limit?: number,
    /**
     * If set includes in output only keys since transaction id.
     *
     * Not set does nothing (default).
     *
     * How this parameter is related to {@link ScanTxesProps.scanStartAtTxId}???
     * => maybe this would influence output if entry was resolved...
     */
    seenSinceTxId?: Long,
    /**
     * If set to `true`, seek does not wait for indexer to be synchronized.
     * This mean that operation may return stale values.
     * 
     * Not set does nothing (default).
     */
    dontWaitForLatestKeys?: boolean,
    /** 
     * If set operation will start scanning from transaction with specified id,
     * if not set operation will start from first transaction.
     * 
     * **Mandatory**.
     */
    scanStartAtTxId: Long,
    /** 
     * Action performed on transaction KVEntries and RefEntries:
     * - `EXCLUDE` - filter out (value?),
     * - `ONLY_DIGEST` (default) - filter to digest of value,
     * - `RAW_VALUE` - just value?,
     * - `RESOLVE` - if KVEntry is RefEntry (special KVEntry heaving as value
     *   referenced key), value will be value of referenced key. ZEntry does
     *   not have value (everything is encoded in key).
     * 
     * `ONLY_DIGEST` is default if not specified.
     */
    kvOrRefEntryAction?: 
        | 'EXCLUDE' 
        | 'ONLY_DIGEST' 
        | 'RAW_VALUE' 
        | 'RESOLVE',
    /** 
     * Action performed on transaction SqlEntries:
     * - `EXCLUDE` - filter out (value?),
     * - `ONLY_DIGEST` (default) - filter to digest of value,
     * - `RAW_VALUE` - just value?
     * 
     * `ONLY_DIGEST` is default if not specified.
     */
    sqlEntryAction?: 
        | 'EXCLUDE' 
        | 'ONLY_DIGEST' 
        | 'RAW_VALUE',
    /** 
     * Action performed on ZEntries:
     * - `EXCLUDE` - filter out (value?),
     * - `ONLY_DIGEST` - filter to digest of value,
     * - `RAW_VALUE` - just value? (ZEntry have empty value, everything is encoded in key),
     * - `RESOLVE` - value will be referenced key value.
     * 
     * `ONLY_DIGEST` is default if not specified.
     */
    zEntryAction?: 
        | 'EXCLUDE' 
        | 'ONLY_DIGEST' 
        | 'RAW_VALUE' 
        | 'RESOLVE',
}





export function createScanTxes(client: igrpc.ImmuServiceClient) {

    const scanTxesGrpc = immuGrpc.unaryCall.createTxScan(client)

    /**
     * For usage with {@link getAtTxId} returned entries will have keys prefixed
     * by one byte if those entries are KVs or Refs, from ZSet keys prefix
     * should not be stripped.
     */
    return function scanTxes(props: ScanTxesProps & {
        credentials: grpcjs.CallCredentials
    }) {

        return scanTxesGrpc({
            request: {
                desc:           props.sortDescending,
                limit:          props.limit,
                noWait:         props.dontWaitForLatestKeys,
                sinceTx:        props.seenSinceTxId,
                entriesSpec:    props.kvOrRefEntryAction || props.sqlEntryAction || props.zEntryAction
                    ? {
                        kvEntriesSpec: props.kvOrRefEntryAction  
                            ? {action: props.kvOrRefEntryAction}  
                            : undefined,
                        sqlEntriesSpec: props.sqlEntryAction 
                            ? {action: props.sqlEntryAction} 
                            : undefined,
                        zEntriesSpec: props.zEntryAction   
                            ? {action: props.zEntryAction}   
                            : undefined,
                    }
                    : undefined,
                initialTx: props.scanStartAtTxId,
            },
            options: {
                credentials:    props.credentials,
            }
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('TxList__Output must be defined')
        )
        .then(txes => txes.txs)

    }

}






export type ScanDBProps = {
    /** 
     * Sort order, default is ascending. To order descending set this field to
     * `true`. 
     */
    sortDescending?: boolean,
    /** If set limits output to set value, no limit if `undefined` (default). */
    limit?: number,
    /**
     * Get keys in transactions (database) after specified id.
     * 
     * Simulate situation as if database consists of transactions:
     * - from transaction `seenAtTxId`
     * - to most recent transaction.
     */
    seenSinceTxId?: Long,
    /**
     * If set to `true`, seek does not wait for indexer to be synchronized.
     * This mean that operation may return stale values.
     * 
     * Not set does nothing (default).
     */
    dontWaitForLatestKeys?: boolean,
    /** 
     * If set operation will start scanning from transaction with specified id,
     * if not set operation will start from first transaction.
     * 
     * 
     */
    scanStartAtTxId?: Long,
}




export function createScanDb(client: igrpc.ImmuServiceClient) {

    const scanTxes = createScanTxes(client)

    /**
     * 
     */
    return async function scanDB(props: ScanDBProps & {
        credentials: grpcjs.CallCredentials
    }) {

        const allEntries = await scanTxes({
            credentials:            props.credentials,
            scanStartAtTxId:        props.scanStartAtTxId ?? Long.fromInt(1, true),
            dontWaitForLatestKeys:  props.dontWaitForLatestKeys,
            seenSinceTxId:          props.seenSinceTxId,
            sortDescending:         props.sortDescending,
            limit:                  props.limit,

            kvOrRefEntryAction:     'RAW_VALUE',
            zEntryAction:           'RAW_VALUE',
            sqlEntryAction:         'RAW_VALUE',
        })
        .then(out => out.flatMap(
            tx => tx.entries.map(
                (grpcEntry, entryIndex) => {
                    return ige.grpcTxEntryToTxEntry(tx, grpcEntry)
                }
            )
        ))

        return allEntries
    }

}