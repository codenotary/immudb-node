import type * as igrpc from 'immudb-node-grpcjs'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'



export function grpcOpenSessionToSessionTokens(
    props: igrpc.OpenSessionResponse__Output
): immu.SessionTokens {
    return {
        "immudb-uuid": props.serverUUID,
        sessionid: props.sessionID,
    }
}

export function userDatabaseSessionToGrpcOpenSession(
    props: immu.UserDatabaseSession
): igrpc.OpenSessionRequest {
    return {
        databaseName: props.database,
        password: Buffer.from(props.password),
        username: Buffer.from(props.user),
    }
}