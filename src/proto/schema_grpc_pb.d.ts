// package: immudb.schema
// file: schema.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IImmuServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IImmuServiceService_IListUsers;
    createUser: IImmuServiceService_ICreateUser;
    changePassword: IImmuServiceService_IChangePassword;
    updateAuthConfig: IImmuServiceService_IUpdateAuthConfig;
    updateMTLSConfig: IImmuServiceService_IUpdateMTLSConfig;
    login: IImmuServiceService_ILogin;
    logout: IImmuServiceService_ILogout;
    set: IImmuServiceService_ISet;
    verifiableSet: IImmuServiceService_IVerifiableSet;
    get: IImmuServiceService_IGet;
    verifiableGet: IImmuServiceService_IVerifiableGet;
    getAll: IImmuServiceService_IGetAll;
    execAll: IImmuServiceService_IExecAll;
    scan: IImmuServiceService_IScan;
    count: IImmuServiceService_ICount;
    countAll: IImmuServiceService_ICountAll;
    txById: IImmuServiceService_ITxById;
    verifiableTxById: IImmuServiceService_IVerifiableTxById;
    txScan: IImmuServiceService_ITxScan;
    history: IImmuServiceService_IHistory;
    health: IImmuServiceService_IHealth;
    currentState: IImmuServiceService_ICurrentState;
    setReference: IImmuServiceService_ISetReference;
    verifiableSetReference: IImmuServiceService_IVerifiableSetReference;
    zAdd: IImmuServiceService_IZAdd;
    verifiableZAdd: IImmuServiceService_IVerifiableZAdd;
    zScan: IImmuServiceService_IZScan;
    createDatabase: IImmuServiceService_ICreateDatabase;
    databaseList: IImmuServiceService_IDatabaseList;
    useDatabase: IImmuServiceService_IUseDatabase;
    cleanIndex: IImmuServiceService_ICleanIndex;
    changePermission: IImmuServiceService_IChangePermission;
    setActiveUser: IImmuServiceService_ISetActiveUser;
    streamGet: IImmuServiceService_IstreamGet;
    streamSet: IImmuServiceService_IstreamSet;
    streamVerifiableGet: IImmuServiceService_IstreamVerifiableGet;
    streamVerifiableSet: IImmuServiceService_IstreamVerifiableSet;
    streamScan: IImmuServiceService_IstreamScan;
    streamZScan: IImmuServiceService_IstreamZScan;
    streamHistory: IImmuServiceService_IstreamHistory;
    streamExecAll: IImmuServiceService_IstreamExecAll;
    useSnapshot: IImmuServiceService_IUseSnapshot;
    sQLExec: IImmuServiceService_ISQLExec;
    sQLQuery: IImmuServiceService_ISQLQuery;
    listTables: IImmuServiceService_IListTables;
    describeTable: IImmuServiceService_IDescribeTable;
    verifiableSQLGet: IImmuServiceService_IVerifiableSQLGet;
}

interface IImmuServiceService_IListUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.UserList> {
    path: "/immudb.schema.ImmuService/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.UserList>;
    responseDeserialize: grpc.deserialize<schema_pb.UserList>;
}
interface IImmuServiceService_ICreateUser extends grpc.MethodDefinition<schema_pb.CreateUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IChangePassword extends grpc.MethodDefinition<schema_pb.ChangePasswordRequest, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IUpdateAuthConfig extends grpc.MethodDefinition<schema_pb.AuthConfig, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/UpdateAuthConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.AuthConfig>;
    requestDeserialize: grpc.deserialize<schema_pb.AuthConfig>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IUpdateMTLSConfig extends grpc.MethodDefinition<schema_pb.MTLSConfig, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/UpdateMTLSConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.MTLSConfig>;
    requestDeserialize: grpc.deserialize<schema_pb.MTLSConfig>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_ILogin extends grpc.MethodDefinition<schema_pb.LoginRequest, schema_pb.LoginResponse> {
    path: "/immudb.schema.ImmuService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.LoginRequest>;
    responseSerialize: grpc.serialize<schema_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.LoginResponse>;
}
interface IImmuServiceService_ILogout extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/Logout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_ISet extends grpc.MethodDefinition<schema_pb.SetRequest, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.SetRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IVerifiableSet extends grpc.MethodDefinition<schema_pb.VerifiableSetRequest, schema_pb.VerifiableTx> {
    path: "/immudb.schema.ImmuService/VerifiableSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableSetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableSetRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface IImmuServiceService_IGet extends grpc.MethodDefinition<schema_pb.KeyRequest, schema_pb.Entry> {
    path: "/immudb.schema.ImmuService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entry>;
    responseDeserialize: grpc.deserialize<schema_pb.Entry>;
}
interface IImmuServiceService_IVerifiableGet extends grpc.MethodDefinition<schema_pb.VerifiableGetRequest, schema_pb.VerifiableEntry> {
    path: "/immudb.schema.ImmuService/VerifiableGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableGetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableGetRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableEntry>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableEntry>;
}
interface IImmuServiceService_IGetAll extends grpc.MethodDefinition<schema_pb.KeyListRequest, schema_pb.Entries> {
    path: "/immudb.schema.ImmuService/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyListRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyListRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface IImmuServiceService_IExecAll extends grpc.MethodDefinition<schema_pb.ExecAllRequest, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/ExecAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ExecAllRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ExecAllRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IScan extends grpc.MethodDefinition<schema_pb.ScanRequest, schema_pb.Entries> {
    path: "/immudb.schema.ImmuService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface IImmuServiceService_ICount extends grpc.MethodDefinition<schema_pb.KeyPrefix, schema_pb.EntryCount> {
    path: "/immudb.schema.ImmuService/Count";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyPrefix>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyPrefix>;
    responseSerialize: grpc.serialize<schema_pb.EntryCount>;
    responseDeserialize: grpc.deserialize<schema_pb.EntryCount>;
}
interface IImmuServiceService_ICountAll extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.EntryCount> {
    path: "/immudb.schema.ImmuService/CountAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.EntryCount>;
    responseDeserialize: grpc.deserialize<schema_pb.EntryCount>;
}
interface IImmuServiceService_ITxById extends grpc.MethodDefinition<schema_pb.TxRequest, schema_pb.Tx> {
    path: "/immudb.schema.ImmuService/TxById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.TxRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.TxRequest>;
    responseSerialize: grpc.serialize<schema_pb.Tx>;
    responseDeserialize: grpc.deserialize<schema_pb.Tx>;
}
interface IImmuServiceService_IVerifiableTxById extends grpc.MethodDefinition<schema_pb.VerifiableTxRequest, schema_pb.VerifiableTx> {
    path: "/immudb.schema.ImmuService/VerifiableTxById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableTxRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableTxRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface IImmuServiceService_ITxScan extends grpc.MethodDefinition<schema_pb.TxScanRequest, schema_pb.TxList> {
    path: "/immudb.schema.ImmuService/TxScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.TxScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.TxScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxList>;
    responseDeserialize: grpc.deserialize<schema_pb.TxList>;
}
interface IImmuServiceService_IHistory extends grpc.MethodDefinition<schema_pb.HistoryRequest, schema_pb.Entries> {
    path: "/immudb.schema.ImmuService/History";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.HistoryRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.HistoryRequest>;
    responseSerialize: grpc.serialize<schema_pb.Entries>;
    responseDeserialize: grpc.deserialize<schema_pb.Entries>;
}
interface IImmuServiceService_IHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse> {
    path: "/immudb.schema.ImmuService/Health";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.HealthResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.HealthResponse>;
}
interface IImmuServiceService_ICurrentState extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.ImmutableState> {
    path: "/immudb.schema.ImmuService/CurrentState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.ImmutableState>;
    responseDeserialize: grpc.deserialize<schema_pb.ImmutableState>;
}
interface IImmuServiceService_ISetReference extends grpc.MethodDefinition<schema_pb.ReferenceRequest, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/SetReference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ReferenceRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ReferenceRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IVerifiableSetReference extends grpc.MethodDefinition<schema_pb.VerifiableReferenceRequest, schema_pb.VerifiableTx> {
    path: "/immudb.schema.ImmuService/VerifiableSetReference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableReferenceRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableReferenceRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface IImmuServiceService_IZAdd extends grpc.MethodDefinition<schema_pb.ZAddRequest, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/ZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZAddRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZAddRequest>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IVerifiableZAdd extends grpc.MethodDefinition<schema_pb.VerifiableZAddRequest, schema_pb.VerifiableTx> {
    path: "/immudb.schema.ImmuService/VerifiableZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableZAddRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableZAddRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface IImmuServiceService_IZScan extends grpc.MethodDefinition<schema_pb.ZScanRequest, schema_pb.ZEntries> {
    path: "/immudb.schema.ImmuService/ZScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.ZEntries>;
    responseDeserialize: grpc.deserialize<schema_pb.ZEntries>;
}
interface IImmuServiceService_ICreateDatabase extends grpc.MethodDefinition<schema_pb.Database, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/CreateDatabase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Database>;
    requestDeserialize: grpc.deserialize<schema_pb.Database>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IDatabaseList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.DatabaseListResponse> {
    path: "/immudb.schema.ImmuService/DatabaseList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.DatabaseListResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.DatabaseListResponse>;
}
interface IImmuServiceService_IUseDatabase extends grpc.MethodDefinition<schema_pb.Database, schema_pb.UseDatabaseReply> {
    path: "/immudb.schema.ImmuService/UseDatabase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Database>;
    requestDeserialize: grpc.deserialize<schema_pb.Database>;
    responseSerialize: grpc.serialize<schema_pb.UseDatabaseReply>;
    responseDeserialize: grpc.deserialize<schema_pb.UseDatabaseReply>;
}
interface IImmuServiceService_ICleanIndex extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/CleanIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IChangePermission extends grpc.MethodDefinition<schema_pb.ChangePermissionRequest, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/ChangePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ChangePermissionRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ChangePermissionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_ISetActiveUser extends grpc.MethodDefinition<schema_pb.SetActiveUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/SetActiveUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SetActiveUserRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.SetActiveUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_IstreamGet extends grpc.MethodDefinition<schema_pb.KeyRequest, schema_pb.Chunk> {
    path: "/immudb.schema.ImmuService/streamGet";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<schema_pb.KeyRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyRequest>;
    responseSerialize: grpc.serialize<schema_pb.Chunk>;
    responseDeserialize: grpc.deserialize<schema_pb.Chunk>;
}
interface IImmuServiceService_IstreamSet extends grpc.MethodDefinition<schema_pb.Chunk, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/streamSet";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Chunk>;
    requestDeserialize: grpc.deserialize<schema_pb.Chunk>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IstreamVerifiableGet extends grpc.MethodDefinition<schema_pb.VerifiableGetRequest, schema_pb.Chunk> {
    path: "/immudb.schema.ImmuService/streamVerifiableGet";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<schema_pb.VerifiableGetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableGetRequest>;
    responseSerialize: grpc.serialize<schema_pb.Chunk>;
    responseDeserialize: grpc.deserialize<schema_pb.Chunk>;
}
interface IImmuServiceService_IstreamVerifiableSet extends grpc.MethodDefinition<schema_pb.Chunk, schema_pb.VerifiableTx> {
    path: "/immudb.schema.ImmuService/streamVerifiableSet";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Chunk>;
    requestDeserialize: grpc.deserialize<schema_pb.Chunk>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableTx>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableTx>;
}
interface IImmuServiceService_IstreamScan extends grpc.MethodDefinition<schema_pb.ScanRequest, schema_pb.Chunk> {
    path: "/immudb.schema.ImmuService/streamScan";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<schema_pb.ScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.Chunk>;
    responseDeserialize: grpc.deserialize<schema_pb.Chunk>;
}
interface IImmuServiceService_IstreamZScan extends grpc.MethodDefinition<schema_pb.ZScanRequest, schema_pb.Chunk> {
    path: "/immudb.schema.ImmuService/streamZScan";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<schema_pb.ZScanRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanRequest>;
    responseSerialize: grpc.serialize<schema_pb.Chunk>;
    responseDeserialize: grpc.deserialize<schema_pb.Chunk>;
}
interface IImmuServiceService_IstreamHistory extends grpc.MethodDefinition<schema_pb.HistoryRequest, schema_pb.Chunk> {
    path: "/immudb.schema.ImmuService/streamHistory";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<schema_pb.HistoryRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.HistoryRequest>;
    responseSerialize: grpc.serialize<schema_pb.Chunk>;
    responseDeserialize: grpc.deserialize<schema_pb.Chunk>;
}
interface IImmuServiceService_IstreamExecAll extends grpc.MethodDefinition<schema_pb.Chunk, schema_pb.TxMetadata> {
    path: "/immudb.schema.ImmuService/streamExecAll";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Chunk>;
    requestDeserialize: grpc.deserialize<schema_pb.Chunk>;
    responseSerialize: grpc.serialize<schema_pb.TxMetadata>;
    responseDeserialize: grpc.deserialize<schema_pb.TxMetadata>;
}
interface IImmuServiceService_IUseSnapshot extends grpc.MethodDefinition<schema_pb.UseSnapshotRequest, google_protobuf_empty_pb.Empty> {
    path: "/immudb.schema.ImmuService/UseSnapshot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.UseSnapshotRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.UseSnapshotRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IImmuServiceService_ISQLExec extends grpc.MethodDefinition<schema_pb.SQLExecRequest, schema_pb.SQLExecResult> {
    path: "/immudb.schema.ImmuService/SQLExec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SQLExecRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.SQLExecRequest>;
    responseSerialize: grpc.serialize<schema_pb.SQLExecResult>;
    responseDeserialize: grpc.deserialize<schema_pb.SQLExecResult>;
}
interface IImmuServiceService_ISQLQuery extends grpc.MethodDefinition<schema_pb.SQLQueryRequest, schema_pb.SQLQueryResult> {
    path: "/immudb.schema.ImmuService/SQLQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SQLQueryRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.SQLQueryRequest>;
    responseSerialize: grpc.serialize<schema_pb.SQLQueryResult>;
    responseDeserialize: grpc.deserialize<schema_pb.SQLQueryResult>;
}
interface IImmuServiceService_IListTables extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.SQLQueryResult> {
    path: "/immudb.schema.ImmuService/ListTables";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.SQLQueryResult>;
    responseDeserialize: grpc.deserialize<schema_pb.SQLQueryResult>;
}
interface IImmuServiceService_IDescribeTable extends grpc.MethodDefinition<schema_pb.Table, schema_pb.SQLQueryResult> {
    path: "/immudb.schema.ImmuService/DescribeTable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Table>;
    requestDeserialize: grpc.deserialize<schema_pb.Table>;
    responseSerialize: grpc.serialize<schema_pb.SQLQueryResult>;
    responseDeserialize: grpc.deserialize<schema_pb.SQLQueryResult>;
}
interface IImmuServiceService_IVerifiableSQLGet extends grpc.MethodDefinition<schema_pb.VerifiableSQLGetRequest, schema_pb.VerifiableSQLEntry> {
    path: "/immudb.schema.ImmuService/VerifiableSQLGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.VerifiableSQLGetRequest>;
    requestDeserialize: grpc.deserialize<schema_pb.VerifiableSQLGetRequest>;
    responseSerialize: grpc.serialize<schema_pb.VerifiableSQLEntry>;
    responseDeserialize: grpc.deserialize<schema_pb.VerifiableSQLEntry>;
}

export const ImmuServiceService: IImmuServiceService;

export interface IImmuServiceServer {
    listUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.UserList>;
    createUser: grpc.handleUnaryCall<schema_pb.CreateUserRequest, google_protobuf_empty_pb.Empty>;
    changePassword: grpc.handleUnaryCall<schema_pb.ChangePasswordRequest, google_protobuf_empty_pb.Empty>;
    updateAuthConfig: grpc.handleUnaryCall<schema_pb.AuthConfig, google_protobuf_empty_pb.Empty>;
    updateMTLSConfig: grpc.handleUnaryCall<schema_pb.MTLSConfig, google_protobuf_empty_pb.Empty>;
    login: grpc.handleUnaryCall<schema_pb.LoginRequest, schema_pb.LoginResponse>;
    logout: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    set: grpc.handleUnaryCall<schema_pb.SetRequest, schema_pb.TxMetadata>;
    verifiableSet: grpc.handleUnaryCall<schema_pb.VerifiableSetRequest, schema_pb.VerifiableTx>;
    get: grpc.handleUnaryCall<schema_pb.KeyRequest, schema_pb.Entry>;
    verifiableGet: grpc.handleUnaryCall<schema_pb.VerifiableGetRequest, schema_pb.VerifiableEntry>;
    getAll: grpc.handleUnaryCall<schema_pb.KeyListRequest, schema_pb.Entries>;
    execAll: grpc.handleUnaryCall<schema_pb.ExecAllRequest, schema_pb.TxMetadata>;
    scan: grpc.handleUnaryCall<schema_pb.ScanRequest, schema_pb.Entries>;
    count: grpc.handleUnaryCall<schema_pb.KeyPrefix, schema_pb.EntryCount>;
    countAll: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.EntryCount>;
    txById: grpc.handleUnaryCall<schema_pb.TxRequest, schema_pb.Tx>;
    verifiableTxById: grpc.handleUnaryCall<schema_pb.VerifiableTxRequest, schema_pb.VerifiableTx>;
    txScan: grpc.handleUnaryCall<schema_pb.TxScanRequest, schema_pb.TxList>;
    history: grpc.handleUnaryCall<schema_pb.HistoryRequest, schema_pb.Entries>;
    health: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse>;
    currentState: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.ImmutableState>;
    setReference: grpc.handleUnaryCall<schema_pb.ReferenceRequest, schema_pb.TxMetadata>;
    verifiableSetReference: grpc.handleUnaryCall<schema_pb.VerifiableReferenceRequest, schema_pb.VerifiableTx>;
    zAdd: grpc.handleUnaryCall<schema_pb.ZAddRequest, schema_pb.TxMetadata>;
    verifiableZAdd: grpc.handleUnaryCall<schema_pb.VerifiableZAddRequest, schema_pb.VerifiableTx>;
    zScan: grpc.handleUnaryCall<schema_pb.ZScanRequest, schema_pb.ZEntries>;
    createDatabase: grpc.handleUnaryCall<schema_pb.Database, google_protobuf_empty_pb.Empty>;
    databaseList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.DatabaseListResponse>;
    useDatabase: grpc.handleUnaryCall<schema_pb.Database, schema_pb.UseDatabaseReply>;
    cleanIndex: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    changePermission: grpc.handleUnaryCall<schema_pb.ChangePermissionRequest, google_protobuf_empty_pb.Empty>;
    setActiveUser: grpc.handleUnaryCall<schema_pb.SetActiveUserRequest, google_protobuf_empty_pb.Empty>;
    streamGet: grpc.handleServerStreamingCall<schema_pb.KeyRequest, schema_pb.Chunk>;
    streamSet: grpc.handleClientStreamingCall<schema_pb.Chunk, schema_pb.TxMetadata>;
    streamVerifiableGet: grpc.handleServerStreamingCall<schema_pb.VerifiableGetRequest, schema_pb.Chunk>;
    streamVerifiableSet: grpc.handleClientStreamingCall<schema_pb.Chunk, schema_pb.VerifiableTx>;
    streamScan: grpc.handleServerStreamingCall<schema_pb.ScanRequest, schema_pb.Chunk>;
    streamZScan: grpc.handleServerStreamingCall<schema_pb.ZScanRequest, schema_pb.Chunk>;
    streamHistory: grpc.handleServerStreamingCall<schema_pb.HistoryRequest, schema_pb.Chunk>;
    streamExecAll: grpc.handleClientStreamingCall<schema_pb.Chunk, schema_pb.TxMetadata>;
    useSnapshot: grpc.handleUnaryCall<schema_pb.UseSnapshotRequest, google_protobuf_empty_pb.Empty>;
    sQLExec: grpc.handleUnaryCall<schema_pb.SQLExecRequest, schema_pb.SQLExecResult>;
    sQLQuery: grpc.handleUnaryCall<schema_pb.SQLQueryRequest, schema_pb.SQLQueryResult>;
    listTables: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.SQLQueryResult>;
    describeTable: grpc.handleUnaryCall<schema_pb.Table, schema_pb.SQLQueryResult>;
    verifiableSQLGet: grpc.handleUnaryCall<schema_pb.VerifiableSQLGetRequest, schema_pb.VerifiableSQLEntry>;
}

export interface IImmuServiceClient {
    listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    createUser(request: schema_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: schema_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createUser(request: schema_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePassword(request: schema_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePassword(request: schema_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePassword(request: schema_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAuthConfig(request: schema_pb.AuthConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAuthConfig(request: schema_pb.AuthConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateAuthConfig(request: schema_pb.AuthConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMTLSConfig(request: schema_pb.MTLSConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMTLSConfig(request: schema_pb.MTLSConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateMTLSConfig(request: schema_pb.MTLSConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    txById(request: schema_pb.TxRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    txById(request: schema_pb.TxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    txById(request: schema_pb.TxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    verifiableTxById(request: schema_pb.VerifiableTxRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableTxById(request: schema_pb.VerifiableTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableTxById(request: schema_pb.VerifiableTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    txScan(request: schema_pb.TxScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    txScan(request: schema_pb.TxScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    txScan(request: schema_pb.TxScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    setReference(request: schema_pb.ReferenceRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    setReference(request: schema_pb.ReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    setReference(request: schema_pb.ReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    cleanIndex(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cleanIndex(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cleanIndex(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    streamGet(request: schema_pb.KeyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamGet(request: schema_pb.KeyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamSet(callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamSet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamSet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamSet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamVerifiableGet(request: schema_pb.VerifiableGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamVerifiableGet(request: schema_pb.VerifiableGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamVerifiableSet(callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamVerifiableSet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamVerifiableSet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamVerifiableSet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamScan(request: schema_pb.ScanRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamScan(request: schema_pb.ScanRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamZScan(request: schema_pb.ZScanRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamZScan(request: schema_pb.ZScanRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamHistory(request: schema_pb.HistoryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamHistory(request: schema_pb.HistoryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    streamExecAll(callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamExecAll(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamExecAll(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    streamExecAll(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    useSnapshot(request: schema_pb.UseSnapshotRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    useSnapshot(request: schema_pb.UseSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    useSnapshot(request: schema_pb.UseSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sQLExec(request: schema_pb.SQLExecRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    sQLExec(request: schema_pb.SQLExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    sQLExec(request: schema_pb.SQLExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    sQLQuery(request: schema_pb.SQLQueryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    sQLQuery(request: schema_pb.SQLQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    sQLQuery(request: schema_pb.SQLQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    listTables(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    listTables(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    listTables(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    describeTable(request: schema_pb.Table, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    describeTable(request: schema_pb.Table, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    describeTable(request: schema_pb.Table, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
    verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
    verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
}

export class ImmuServiceClient extends grpc.Client implements IImmuServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UserList) => void): grpc.ClientUnaryCall;
    public createUser(request: schema_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: schema_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createUser(request: schema_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePassword(request: schema_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePassword(request: schema_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePassword(request: schema_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAuthConfig(request: schema_pb.AuthConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAuthConfig(request: schema_pb.AuthConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateAuthConfig(request: schema_pb.AuthConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMTLSConfig(request: schema_pb.MTLSConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMTLSConfig(request: schema_pb.MTLSConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateMTLSConfig(request: schema_pb.MTLSConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.SetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.SetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.SetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSet(request: schema_pb.VerifiableSetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.KeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entry) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public verifiableGet(request: schema_pb.VerifiableGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableEntry) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public getAll(request: schema_pb.KeyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public execAll(request: schema_pb.ExecAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.EntryCount) => void): grpc.ClientUnaryCall;
    public txById(request: schema_pb.TxRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    public txById(request: schema_pb.TxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    public txById(request: schema_pb.TxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Tx) => void): grpc.ClientUnaryCall;
    public verifiableTxById(request: schema_pb.VerifiableTxRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableTxById(request: schema_pb.VerifiableTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableTxById(request: schema_pb.VerifiableTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public txScan(request: schema_pb.TxScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    public txScan(request: schema_pb.TxScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    public txScan(request: schema_pb.TxScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Entries) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public currentState(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ImmutableState) => void): grpc.ClientUnaryCall;
    public setReference(request: schema_pb.ReferenceRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public setReference(request: schema_pb.ReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public setReference(request: schema_pb.ReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableSetReference(request: schema_pb.VerifiableReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public verifiableZAdd(request: schema_pb.VerifiableZAddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZEntries) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public cleanIndex(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cleanIndex(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cleanIndex(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public streamGet(request: schema_pb.KeyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamGet(request: schema_pb.KeyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamSet(callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamSet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamSet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamSet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamVerifiableGet(request: schema_pb.VerifiableGetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamVerifiableGet(request: schema_pb.VerifiableGetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamVerifiableSet(callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamVerifiableSet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamVerifiableSet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamVerifiableSet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableTx) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamScan(request: schema_pb.ScanRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamScan(request: schema_pb.ScanRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamZScan(request: schema_pb.ZScanRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamZScan(request: schema_pb.ZScanRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamHistory(request: schema_pb.HistoryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamHistory(request: schema_pb.HistoryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<schema_pb.Chunk>;
    public streamExecAll(callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamExecAll(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamExecAll(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public streamExecAll(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.TxMetadata) => void): grpc.ClientWritableStream<schema_pb.Chunk>;
    public useSnapshot(request: schema_pb.UseSnapshotRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public useSnapshot(request: schema_pb.UseSnapshotRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public useSnapshot(request: schema_pb.UseSnapshotRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sQLExec(request: schema_pb.SQLExecRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    public sQLExec(request: schema_pb.SQLExecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    public sQLExec(request: schema_pb.SQLExecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLExecResult) => void): grpc.ClientUnaryCall;
    public sQLQuery(request: schema_pb.SQLQueryRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public sQLQuery(request: schema_pb.SQLQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public sQLQuery(request: schema_pb.SQLQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public listTables(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public listTables(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public listTables(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public describeTable(request: schema_pb.Table, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public describeTable(request: schema_pb.Table, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public describeTable(request: schema_pb.Table, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SQLQueryResult) => void): grpc.ClientUnaryCall;
    public verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
    public verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
    public verifiableSQLGet(request: schema_pb.VerifiableSQLGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.VerifiableSQLEntry) => void): grpc.ClientUnaryCall;
}
