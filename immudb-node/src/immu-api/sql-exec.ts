import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igt from '../immu-grpc-tx/index.js'
import * as igs from '../immu-grpc-sql/index.js'



export type SqlExecProps = {
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




export function createSqlExec(client: igrpc.ImmuServiceClient) {
    // const sqlExecGrpc = immuGrpc.unaryCall.createTxSqlExec(client)
    const sqlExecGrpc = immuGrpc.unaryCall.createSqlExec(client)

    
    return function sqlExec(props: SqlExecProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlExecGrpc({
            request: {
                sql:    props.sql,
                params: props.params?.map(igs.sqlNamedValueToGrpcSqlNamedParam),
                noWait: props.options?.dontWaitForIndexer,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('SQLExecResult__Output must be defined')
        )
        .then(grpcSqlExecResults => {
            
            const isInTransaction = grpcSqlExecResults.ongoingTx
            const subTxes = grpcSqlExecResults.txs.map(grpcCommitedSqlTx => {

                // execution may not cause effects!!!
                const tx = grpcCommitedSqlTx.header == undefined
                    ? undefined
                    : igt.grpcTxHeaderToTxCore(grpcCommitedSqlTx.header)
                const updatedRowsCount = grpcCommitedSqlTx.updatedRows
                const firstPK = igs.grpcSqlObjectNamedValueToNamedValues(
                    grpcCommitedSqlTx.firstInsertedPKs
                )
                console.log('grpcCommitedSqlTx.firstInsertedPKs', grpcCommitedSqlTx.firstInsertedPKs)
                const lastPK = igs.grpcSqlObjectNamedValueToNamedValues(
                    grpcCommitedSqlTx.lastInsertedPKs
                )
                console.log('grpcCommitedSqlTx.lastInsertedPKs', grpcCommitedSqlTx.lastInsertedPKs)

                return {
                    tx,
                    firstPK,
                    lastPK,
                    updatedRowsCount,
                }
            })

            return {
                subTxes,
                isInTransaction,
            }
        })
    }
}


