import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import * as igs from '../immu-grpc-sql/index.js'



export type SqlTxNewProps = {
    /**
     * Mode of interactive transaction:
     * - `ReadOnly` declares that transaction will not modify db,
     * - `WriteOnly` declares that transaction will not depend on reading db,
     * - `ReadWrite` declares that transaction may read and write to db.
     */
    mode?: "ReadOnly" | "WriteOnly" | "ReadWrite"
}

export function createSqlTxNew(client: igrpc.ImmuServiceClient) {
    const sqlTxNewGrpc = immuGrpc.unaryCall.createNewTx(client)

    /**
     * Starts new interactive transation. If successful returns
     * transaction token used  to associate further grpc calls with
     * interactive transaction.
     */
    return function sqlTxNew(props: SqlTxNewProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlTxNewGrpc({
            request: {
                mode: props.mode,
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('NewTxResponse__Output    must be defined')
            )
            .then(grpcNewTxResponse => {

                const token: immu.TransactionTokens = {
                    transactionid: grpcNewTxResponse.transactionID
                }
                return token
            })
    }
}


export function createSqlTxCommit(client: igrpc.ImmuServiceClient) {
    const sqlTxCommitGrpc = immuGrpc.unaryCall.createCommit(client)

    /**
     * Commits interactive transaction.
     * `credentials` must inslude interactive transaction token.
     */
    return function sqlTxCommit(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlTxCommitGrpc({
            request: {
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('CommittedSQLTx__Output must be defined')
            )
            .then(grpcSqlCommitedTxResult => {

                // execution may not cause effects!!!
                const tx = grpcSqlCommitedTxResult.header == undefined
                    ? undefined
                    : igt.grpcTxHeaderToTxCore(grpcSqlCommitedTxResult.header)
                const updatedRowsCount = grpcSqlCommitedTxResult.updatedRows
                const firstPK = igs.grpcSqlObjectNamedValueToNamedValues(
                    grpcSqlCommitedTxResult.firstInsertedPKs
                )
                const lastPK = igs.grpcSqlObjectNamedValueToNamedValues(
                    grpcSqlCommitedTxResult.lastInsertedPKs
                )
                return {
                    tx,
                    firstPK,
                    lastPK,
                    updatedRowsCount,
                }
            })
    }
}



export function createSqlTxRollback(client: igrpc.ImmuServiceClient) {
    const sqlTxRollbackGrpc = immuGrpc.unaryCall.createRollback(client)

    /**
     * Rollbacks interactive transaction.
     * `credentials` must inslude interactive transaction token.
     */
    return function sqlTxRollback(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlTxRollbackGrpc({
            request: {
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('Empty__Output must be defined')
            )
            .then(res => { })
    }
}





export type SqlTxExecProps = {
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
    },
    /**
     * Sql statements to execute. (May be multiple, all will be executed inside
     * automatic transaction.)
     */
    sql: string,
    /**
     * sql params
     * 
     * ```ts
     * 
     * sqlExec({
     *   sql: 'select * from customer where id = :clientId',
     *   params: [
     *     {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},
     *   ]
     * })
     * ```
     */
    params?: immu.SqlNamedValue[],

}

export function createSqlTxExec(client: igrpc.ImmuServiceClient) {
    const sqlTxExecGrpc = immuGrpc.unaryCall.createTxSqlExec(client)


    return function sqlTxExec(props: SqlTxExecProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlTxExecGrpc({
            request: {
                sql: props.sql,
                params: props.params?.map(igs.sqlNamedValueToGrpcSqlNamedParam),
                noWait: props.options?.dontWaitForIndexer,
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('Empty__Output must be defined')
            )
            .then(res => { })
    }
}



export type SqlTxQueryProps = {

    /**
     * Sql statements to execute. (May be multiple, all will be executed inside
     * automatic transaction.)
     */
    sql: string,
    /**
     * sql params
     * 
     * ```ts
     * 
     * sqlExec({
     *   sql: 'select * from customer where id = :clientId',
     *   params: [
     *     {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},
     *   ]
     * })
     * ```
     */
    params?: immu.SqlNamedValue[],
    /**
     * Does this query operation needs refreshed index
     * or not? (perhaps earlier operation was also read).
     */
    reuseSnapshot?: boolean,
}





export function createSqlTxQuery(client: igrpc.ImmuServiceClient) {
    const sqlTxQueryGrpc = immuGrpc.readerCall.createTxSqlQuery(client)


    return function sqlTxQuery(props: SqlTxQueryProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        const res = sqlTxQueryGrpc({
            request: {
                sql: props.sql,
                params: props.params?.map(igs.sqlNamedValueToGrpcSqlNamedParam),
                reuseSnapshot: props.reuseSnapshot
            },
            credentials: props.credentials,
        })
        return igs.generateRows(res)
    }
}