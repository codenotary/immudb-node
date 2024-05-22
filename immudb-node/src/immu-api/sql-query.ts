import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igs from '../immu-grpc-sql/index.js'





export type SqlQueryProps = {

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


export function createSqlQuery(client: igrpc.ImmuServiceClient) {
    const sqlQueryGrpc = immuGrpc.readerCall.createSqlQuery(client)

    return function sqlQuery(props: SqlQueryProps & {
        credentials: grpcjs.CallCredentials,
    }) {
        const gen = sqlQueryGrpc({
            request: {
                sql: props.sql,
                params: props.params?.map(igs.sqlNamedValueToGrpcSqlNamedParam),
                reuseSnapshot: props.reuseSnapshot,
                acceptStream: true
            },
            credentials: props.credentials,
        })
        return igs.generateRows(gen)
    }
}


export function createSqlQueryTables(client: igrpc.ImmuServiceClient) {
    const sqlQueryTablesGrpc = immuGrpc.unaryCall.createListTables(client)


    return function sqlQueryTables(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlQueryTablesGrpc({
            request: {
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('SQLQueryResult__Output must be defined')
            )
            .then(grpcSqlRows => {
                return igs.grpcQueryResultToListoOfSqlNamedValues(grpcSqlRows)
            })
    }
}





export type SqlQueryTableProps = {
    /**
     * Sql table to query.
     */
    table: string,
}


export function createSqlQueryTable(client: igrpc.ImmuServiceClient) {
    const sqlQueryTableGrpc = immuGrpc.unaryCall.createDescribeTable(client)


    return function sqlQueryTable(props: SqlQueryTableProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlQueryTableGrpc({
            request: {
                tableName: props.table,
            },
            options: {
                credentials: props.credentials,
            },
        })
            .then(maybeResponse => maybeResponse
                ? maybeResponse
                : Promise.reject('SQLQueryResult__Output must be defined')
            )
            .then(grpcSqlRows => {
                return igs.grpcQueryResultToListoOfSqlNamedValues(grpcSqlRows)
            })
    }
}
