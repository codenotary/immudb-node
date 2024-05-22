import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import * as promis from '../grpc-promis/index.js'







// **************************
// Session
// **************************

export function createOpenSession(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.OpenSessionRequest, igrpc.OpenSessionResponse__Output>(
        client.openSession.bind(client)
    )
}

export function createCloseSession(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.Empty__Output>(
        client.closeSession.bind(client)
    )
}

export function createKeepAlive(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.Empty__Output>(
        client.keepAlive.bind(client)
    )
}


// **************************
// SQL transactional
// **************************


export function createNewTx(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.NewTxRequest, igrpc.NewTxResponse__Output>(
        client.newTx.bind(client)
    )
}

export function createCommit(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.CommittedSQLTx__Output>(
        client.commit.bind(client)
    )
}

export function createRollback(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.Empty__Output>(
        client.rollback.bind(client)
    )
}



export function createTxSqlExec(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.SQLExecRequest, igrpc.Empty__Output>(
        client.txSqlExec.bind(client)
    )
}

// **************************
// SQL
// **************************

export function createSqlExec(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.SQLExecRequest, igrpc.SQLExecResult__Output>(
        client.sqlExec.bind(client)
    )
}


// **************************
// SQL util
// **************************

export function createListTables(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.SQLQueryResult__Output>(
        client.listTables.bind(client)
    )
}

export function createDescribeTable(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Table, igrpc.SQLQueryResult__Output>(
        client.describeTable.bind(client)
    )
}

// **************************
// SQL and proof
// **************************

export function createVerifiableSqlGet(client: igrpc.ImmuServiceClient) {

    return promis.promisifyGrpcCall<igrpc.VerifiableSQLGetRequest, igrpc.VerifiableSQLEntry__Output>(
        client.verifiableSqlGet.bind(client)
    )
}





// **************************
// Get Values
// **************************

export function createGet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.KeyRequest, igrpc.Entry__Output>(
        client.get.bind(client)
    )
}

export function createGetAll(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.KeyListRequest, igrpc.Entries__Output>(
        client.getAll.bind(client)
    )
}

export function createTxById(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.TxRequest, igrpc.Tx__Output>(
        client.txById.bind(client)
    )
}

export function createScan(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ScanRequest, igrpc.Entries__Output>(
        client.scan.bind(client)
    )
}

export function createTxScan(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.TxScanRequest, igrpc.TxList__Output>(
        client.txScan.bind(client)
    )
}

export function createZScan(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ZScanRequest, igrpc.ZEntries__Output>(
        client.zScan.bind(client)
    )
}

export function createHistory(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.HistoryRequest, igrpc.Entries__Output>(
        client.history.bind(client)
    )
}

// **************************
// Get Values and proof
// **************************

export function createVerifiableGet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.VerifiableGetRequest, igrpc.VerifiableEntry__Output>(
        client.verifiableGet.bind(client)
    )
}

export function createVerifiableTxById(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.VerifiableTxRequest, igrpc.VerifiableTx__Output>(
        client.verifiableTxById.bind(client)
    )
}


// **************************
// Set Values
// **************************

export function createSet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.SetRequest, igrpc.TxHeader__Output>(
        client.set.bind(client)
    )
}

export function createSetReference(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ReferenceRequest, igrpc.TxHeader__Output>(
        client.setReference.bind(client)
    )
}

export function createZAdd(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ZAddRequest, igrpc.TxHeader__Output>(
        client.zAdd.bind(client)
    )
}

export function createExecAll(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ExecAllRequest, igrpc.TxHeader__Output>(
        client.execAll.bind(client)
    )
}

export function createDelete(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.DeleteKeysRequest, igrpc.TxHeader__Output>(
        client.delete.bind(client)
    )
}


// **************************
// Set Values and proof
// **************************


export function createVerifiableSet(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.VerifiableSetRequest, igrpc.VerifiableTx__Output>(
        client.verifiableSet.bind(client)
    )
}

export function createVerifiableSetReference(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.VerifiableReferenceRequest, igrpc.VerifiableTx__Output>(
        client.verifiableSetReference.bind(client)
    )
}

export function createVerifiableZAdd(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.VerifiableZAddRequest, igrpc.VerifiableTx__Output>(
        client.verifiableZAdd.bind(client)
    )
}

// **************************
// User
// **************************

export function createCreateUsers(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.CreateUserRequest, igrpc.Empty__Output>(
        client.createUser.bind(client)
    )
}

export function createListUsers(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.UserList__Output>(
        client.listUsers.bind(client)
    )
}

export function createChangePassword(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ChangePasswordRequest, igrpc.Empty__Output>(
        client.changePassword.bind(client)
    )
}

export function createChangePermission(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.ChangePermissionRequest, igrpc.Empty__Output>(
        client.changePermission.bind(client)
    )
}

export function createSetActiveUser(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.SetActiveUserRequest, igrpc.Empty__Output>(
        client.setActiveUser.bind(client)
    )
}

// **************************
// Database
// **************************

export function createDatabaseListV2(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.DatabaseListRequestV2, igrpc.DatabaseListResponseV2__Output>(
        client.databaseListV2.bind(client)
    )
}

export function createGetDatabaseSettingsV2(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.DatabaseSettingsRequest, igrpc.DatabaseSettingsResponse__Output>(
        client.getDatabaseSettingsV2.bind(client)
    )
}

export function createCreateDatabaseV2(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.CreateDatabaseRequest, igrpc.CreateDatabaseResponse__Output>(
        client.createDatabaseV2.bind(client)
    )
}

export function createUpdateDatabaseV2(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.UpdateDatabaseRequest, igrpc.UpdateDatabaseResponse__Output>(
        client.updateDatabaseV2.bind(client)
    )
}

export function createUseDatabase(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Database, igrpc.UseDatabaseReply__Output>(
        client.useDatabase.bind(client)
    )
}

export function createLoadDatabase(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.LoadDatabaseRequest, igrpc.LoadDatabaseResponse__Output>(
        client.loadDatabase.bind(client)
    )
}

export function createUnloadDatabase(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.UnloadDatabaseRequest, igrpc.UnloadDatabaseResponse__Output>(
        client.unloadDatabase.bind(client)
    )
}

export function createCompactIndex(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.Empty__Output>(
        client.compactIndex.bind(client)
    )
}

export function createFlushIndex(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.FlushIndexRequest, igrpc.FlushIndexResponse__Output>(
        client.flushIndex.bind(client)
    )
}

export function createDeleteDatabase(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.DeleteDatabaseRequest, igrpc.DeleteDatabaseResponse__Output>(
        client.deleteDatabase.bind(client)
    )
}

export function createDatabaseHealth(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.DatabaseHealthResponse__Output>(
        client.databaseHealth.bind(client)
    )
}


// **************************
// Instance
// **************************


export function createHealth(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.HealthResponse__Output>(
        client.health.bind(client)
    )
}

export function createCurrentState(client: igrpc.ImmuServiceClient) {
    return promis.promisifyGrpcCall<igrpc.Empty, igrpc.ImmutableState__Output>(
        client.currentState.bind(client)
    )
}


