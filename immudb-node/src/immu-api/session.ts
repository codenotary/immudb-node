import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as igs from '../immu-grpc-session/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'




export function createOpenSession(client: igrpc.ImmuServiceClient) {
    const openSessionGrpc = immuGrpc.unaryCall.createOpenSession(client)
    /**
     * Requests session metadata ({@link immu.UserDatabaseSession}) from immudb
     * server for user and database.
     */
    return function openSession(sessionInfo: immu.UserDatabaseSession) {
        return openSessionGrpc({
            request: igs.userDatabaseSessionToGrpcOpenSession(sessionInfo),
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('session tokens must be defined')
        )
        .then(igs.grpcOpenSessionToSessionTokens)
    }
}



export function createCloseSession(client: igrpc.ImmuServiceClient) {
    const closeSessionGrpc = immuGrpc.unaryCall.createCloseSession(client)
    /**
     * Closes session heaving {@link immu.SessionTokens} 
     * embedded in {@link grpcjs.CallCredentials}.
     */
    return function closeSession(props: grpcjs.CallCredentials) {
        return closeSessionGrpc({
            request: {},
            options: {
                credentials: props
            }
        })
        .then(maybeOutput => {})
    }
    // return function closeSession(props: SessionTokens) {
    //     return closeSessionGrpc({
    //         request: {},
    //         options: {
    //             credentials: immuSession.createImmuGrpcCallCredentials(props)
    //         }
    //     })
    // }
}


export function createKeepAlive(client: igrpc.ImmuServiceClient) {
    const keepAliveGrpc = immuGrpc.unaryCall.createKeepAlive(client)
    /**
     * Asks immudb to not close (idle?) connection.
     */
    return function keepAlive(props: {
        credentials: grpcjs.CallCredentials,
    }) {
        return keepAliveGrpc({
            request: {},
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('keep alive return value be defined')
        )
        .then(response => {})
    }
}


export type UseDbProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
}



export function createUseDb(client: igrpc.ImmuServiceClient) {
    const useDatabaseGrpc = immuGrpc.unaryCall.createUseDatabase(client)

    
    return function setDbSettings(props: UseDbProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return useDatabaseGrpc({
            request: {
                databaseName: props.database,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('UseDatabaseReply__Output  must be defined')
        )
        .then(resp => ({
            database:   props.database,
            token:      resp.token,
        }))
    }
}