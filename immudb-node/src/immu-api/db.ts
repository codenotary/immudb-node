import type * as immu from '../types/index.js'
import * as igd from '../immu-grpc-db.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import type * as igrpc from 'immudb-node-grpcjs'



export type CreateDatabaseProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
    /**
     * Database settings
     */
    settings: immu.DatabaseSettingsUpdatable;
    /**
     * What to do when database exists?
     * * silently ignore --> set this value to true
     * * (default) throw exception --> set this value to false or undefined
     */
    ifNotExists?: boolean;
}


export function createCreateDb(client: igrpc.ImmuServiceClient) {
    const createDbGrpc = immuGrpc.unaryCall.createCreateDatabaseV2(client)

    
    return function createDb(props: CreateDatabaseProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return createDbGrpc({
            request: {
                name:        props.database,
                ifNotExists: props.ifNotExists,
                settings:    igd.dbUpdatableSettingsToGrpcDbSettings(props.settings)
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('CreateDatabaseResponse__Output must be defined')
        )
        .then(resp => {
            return {
                database:       resp.name,
                alreadyExisted: resp.alreadyExisted,
                settings: igd.grpcDbSettingsToDbSettings(resp.settings),
            }
        })
    }
}



export type DeleteDatabaseProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
}



export function createDeleteDb(client: igrpc.ImmuServiceClient) {
    const deleteDbGrpc = immuGrpc.unaryCall.createDeleteDatabase(client)

    
    return function createDb(props: DeleteDatabaseProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return deleteDbGrpc({
            request: {
                database: props.database
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('DeleteDatabaseResponse__Output must be defined')
        )
        .then(resp => {
            return resp.database
        })
    }
}





export type FlushDatabaseIndexProps = {
    /**
     * Indicates how much space will be scanned for unreferenced data. 
     * Value must be between 0 and 1.
     *
     * Even though this operation blocks transaction processing, choosing a
     * small percentage e.g. 0.1 may not significantly hinder normal operations
     * while reducing used storage space.
     *
     * Partially compaction may be triggered automatically by immudb. Database
     * settings can be modified to set the cleanupPercentage attribute to
     * non-zero in order to accomplish this.
     */
    cleanupPercentage: number,

    /**
     * Should run fsync after writing data?
     * * true --> run fsync after writing data to avoid index regeneration in
     *   the case of an unexpected crash
     * * false | undefined -->  do not run fsync after writing data
     */
    synced: boolean,
}

export function createFlushDbIndex(client: igrpc.ImmuServiceClient) {
    const flushIndexGrpc = immuGrpc.unaryCall.createFlushIndex(client)

    
    return function flushDbIndex(props: FlushDatabaseIndexProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return flushIndexGrpc({
            request: {
                cleanupPercentage: props.cleanupPercentage,
                synced: props.synced,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('FlushIndexResponse__Output must be defined')
        )
        .then(resp => {
            return resp.database
        })
    }
}


export function createCompactDbIndex(client: igrpc.ImmuServiceClient) {
    const compactIndexGrpc = immuGrpc.unaryCall.createCompactIndex(client)

    
    return function compactDbIndex(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return compactIndexGrpc({
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
        .then(resp => {})
    }
}





export function createGetDbSettings(client: igrpc.ImmuServiceClient) {
    const getDatabaseSettingsV2Grpc = immuGrpc.unaryCall.createGetDatabaseSettingsV2(client)

    
    return function getDbSettings(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return getDatabaseSettingsV2Grpc({
            request: {
                
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('DatabaseSettingsResponse__Output must be defined')
        )
        .then(resp => {
            return {
                database : resp.database,
                settings: igd.grpcDbSettingsToDbSettings(resp.settings)
            }
        })
    }
}




export function createListDbs(client: igrpc.ImmuServiceClient) {
    const databaseListV2Grpc = immuGrpc.unaryCall.createDatabaseListV2(client)

    
    return function getDbSettings(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return databaseListV2Grpc({
            request: {
                
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('DatabaseListResponseV2__Output must be defined')
        )
        .then(resp => resp.databases.map(grpcDbRunInfoToDbRunInfo))
    }
}


function grpcDbRunInfoToDbRunInfo(
    props: igrpc.DatabaseWithSettings__Output
): immu.DBRuntimeInfo {
    return {
        database: props.name,
        isLoaded: props.loaded,
        settings: igd.grpcDbSettingsToDbSettings(props.settings)
    }
}




export type LoadDbProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
}


export function createLoadDb(client: igrpc.ImmuServiceClient) {
    const loadDatabaseGrpc = immuGrpc.unaryCall.createLoadDatabase(client)

    
    return function getDbSettings(props: LoadDbProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return loadDatabaseGrpc({
            request: {
                database: props.database,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('LoadDatabaseResponse__Output must be defined')
        )
        .then(resp => resp.database)
    }
}





export type UnloadDbProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
}


export function createUnloadDb(client: igrpc.ImmuServiceClient) {
    const unloadDatabaseGrpc = immuGrpc.unaryCall.createUnloadDatabase(client)

    
    return function getDbSettings(props: UnloadDbProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return unloadDatabaseGrpc({
            request: {
                database: props.database,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('UnloadDatabaseResponse__Output must be defined')
        )
        .then(resp => {resp.database})
    }
}




export type SetDbSettingsProps = {
    /**
     * Name of immudb instance database
     */
    database: string;
    /**
     * Database settings
     */
    settings: immu.DatabaseSettingsUpdatable;
}


export function createSetDbSettings(client: igrpc.ImmuServiceClient) {
    const updateDatabaseV2Grpc = immuGrpc.unaryCall.createUpdateDatabaseV2(client)

    
    return function setDbSettings(props: SetDbSettingsProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return updateDatabaseV2Grpc({
            request: {
                database: props.database,
                settings: igd.dbUpdatableSettingsToGrpcDbSettings(props.settings)
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('UpdateDatabaseResponse__Output must be defined')
        )
        .then(resp => ({
            database: resp.database,
            settings: igd.grpcDbSettingsToDbSettings(resp.settings)
        }))
    }
}





export function createGetDbCurrentState(client: igrpc.ImmuServiceClient) {
    const stateGrpc = immuGrpc.unaryCall.createCurrentState(client)

    
    return function getDbCurrentState(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return stateGrpc({
            request: {
                
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('UpdateDatabaseResponse__Output must be defined')
        )
        .then(resp => ({
            database:   resp.db,
            txHash:     resp.txHash,
            txId:       resp.txId,
            signature:  resp.signature == null ? undefined : resp.signature,
        }))
    }
}