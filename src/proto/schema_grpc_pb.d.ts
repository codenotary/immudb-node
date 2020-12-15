// package: immudb.schema
// file: schema.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as schema_pb from "./schema_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IImmuServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IImmuServiceService_IListUsers;
    createUser: IImmuServiceService_ICreateUser;
    changePassword: IImmuServiceService_IChangePassword;
    updateAuthConfig: IImmuServiceService_IUpdateAuthConfig;
    updateMTLSConfig: IImmuServiceService_IUpdateMTLSConfig;
    printTree: IImmuServiceService_IPrintTree;
    login: IImmuServiceService_ILogin;
    logout: IImmuServiceService_ILogout;
    set: IImmuServiceService_ISet;
    safeSet: IImmuServiceService_ISafeSet;
    get: IImmuServiceService_IGet;
    safeGet: IImmuServiceService_ISafeGet;
    setBatch: IImmuServiceService_ISetBatch;
    getBatch: IImmuServiceService_IGetBatch;
    scan: IImmuServiceService_IScan;
    count: IImmuServiceService_ICount;
    countAll: IImmuServiceService_ICountAll;
    currentRoot: IImmuServiceService_ICurrentRoot;
    inclusion: IImmuServiceService_IInclusion;
    consistency: IImmuServiceService_IConsistency;
    byIndex: IImmuServiceService_IByIndex;
    bySafeIndex: IImmuServiceService_IBySafeIndex;
    history: IImmuServiceService_IHistory;
    health: IImmuServiceService_IHealth;
    reference: IImmuServiceService_IReference;
    safeReference: IImmuServiceService_ISafeReference;
    zAdd: IImmuServiceService_IZAdd;
    zScan: IImmuServiceService_IZScan;
    safeZAdd: IImmuServiceService_ISafeZAdd;
    iScan: IImmuServiceService_IIScan;
    createDatabase: IImmuServiceService_ICreateDatabase;
    useDatabase: IImmuServiceService_IUseDatabase;
    changePermission: IImmuServiceService_IChangePermission;
    setActiveUser: IImmuServiceService_ISetActiveUser;
    databaseList: IImmuServiceService_IDatabaseList;
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
interface IImmuServiceService_IPrintTree extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.Tree> {
    path: "/immudb.schema.ImmuService/PrintTree";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.Tree>;
    responseDeserialize: grpc.deserialize<schema_pb.Tree>;
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
interface IImmuServiceService_ISet extends grpc.MethodDefinition<schema_pb.KeyValue, schema_pb.Index> {
    path: "/immudb.schema.ImmuService/Set";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyValue>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyValue>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface IImmuServiceService_ISafeSet extends grpc.MethodDefinition<schema_pb.SafeSetOptions, schema_pb.Proof> {
    path: "/immudb.schema.ImmuService/SafeSet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeSetOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeSetOptions>;
    responseSerialize: grpc.serialize<schema_pb.Proof>;
    responseDeserialize: grpc.deserialize<schema_pb.Proof>;
}
interface IImmuServiceService_IGet extends grpc.MethodDefinition<schema_pb.Key, schema_pb.Item> {
    path: "/immudb.schema.ImmuService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Key>;
    requestDeserialize: grpc.deserialize<schema_pb.Key>;
    responseSerialize: grpc.serialize<schema_pb.Item>;
    responseDeserialize: grpc.deserialize<schema_pb.Item>;
}
interface IImmuServiceService_ISafeGet extends grpc.MethodDefinition<schema_pb.SafeGetOptions, schema_pb.SafeItem> {
    path: "/immudb.schema.ImmuService/SafeGet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeGetOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeGetOptions>;
    responseSerialize: grpc.serialize<schema_pb.SafeItem>;
    responseDeserialize: grpc.deserialize<schema_pb.SafeItem>;
}
interface IImmuServiceService_ISetBatch extends grpc.MethodDefinition<schema_pb.KVList, schema_pb.Index> {
    path: "/immudb.schema.ImmuService/SetBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KVList>;
    requestDeserialize: grpc.deserialize<schema_pb.KVList>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface IImmuServiceService_IGetBatch extends grpc.MethodDefinition<schema_pb.KeyList, schema_pb.ItemList> {
    path: "/immudb.schema.ImmuService/GetBatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyList>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyList>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface IImmuServiceService_IScan extends grpc.MethodDefinition<schema_pb.ScanOptions, schema_pb.ItemList> {
    path: "/immudb.schema.ImmuService/Scan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ScanOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ScanOptions>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
}
interface IImmuServiceService_ICount extends grpc.MethodDefinition<schema_pb.KeyPrefix, schema_pb.ItemsCount> {
    path: "/immudb.schema.ImmuService/Count";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.KeyPrefix>;
    requestDeserialize: grpc.deserialize<schema_pb.KeyPrefix>;
    responseSerialize: grpc.serialize<schema_pb.ItemsCount>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemsCount>;
}
interface IImmuServiceService_ICountAll extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.ItemsCount> {
    path: "/immudb.schema.ImmuService/CountAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.ItemsCount>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemsCount>;
}
interface IImmuServiceService_ICurrentRoot extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.Root> {
    path: "/immudb.schema.ImmuService/CurrentRoot";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.Root>;
    responseDeserialize: grpc.deserialize<schema_pb.Root>;
}
interface IImmuServiceService_IInclusion extends grpc.MethodDefinition<schema_pb.Index, schema_pb.InclusionProof> {
    path: "/immudb.schema.ImmuService/Inclusion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Index>;
    requestDeserialize: grpc.deserialize<schema_pb.Index>;
    responseSerialize: grpc.serialize<schema_pb.InclusionProof>;
    responseDeserialize: grpc.deserialize<schema_pb.InclusionProof>;
}
interface IImmuServiceService_IConsistency extends grpc.MethodDefinition<schema_pb.Index, schema_pb.ConsistencyProof> {
    path: "/immudb.schema.ImmuService/Consistency";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Index>;
    requestDeserialize: grpc.deserialize<schema_pb.Index>;
    responseSerialize: grpc.serialize<schema_pb.ConsistencyProof>;
    responseDeserialize: grpc.deserialize<schema_pb.ConsistencyProof>;
}
interface IImmuServiceService_IByIndex extends grpc.MethodDefinition<schema_pb.Index, schema_pb.Item> {
    path: "/immudb.schema.ImmuService/ByIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Index>;
    requestDeserialize: grpc.deserialize<schema_pb.Index>;
    responseSerialize: grpc.serialize<schema_pb.Item>;
    responseDeserialize: grpc.deserialize<schema_pb.Item>;
}
interface IImmuServiceService_IBySafeIndex extends grpc.MethodDefinition<schema_pb.SafeIndexOptions, schema_pb.SafeItem> {
    path: "/immudb.schema.ImmuService/BySafeIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeIndexOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeIndexOptions>;
    responseSerialize: grpc.serialize<schema_pb.SafeItem>;
    responseDeserialize: grpc.deserialize<schema_pb.SafeItem>;
}
interface IImmuServiceService_IHistory extends grpc.MethodDefinition<schema_pb.HistoryOptions, schema_pb.ItemList> {
    path: "/immudb.schema.ImmuService/History";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.HistoryOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.HistoryOptions>;
    responseSerialize: grpc.serialize<schema_pb.ItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ItemList>;
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
interface IImmuServiceService_IReference extends grpc.MethodDefinition<schema_pb.ReferenceOptions, schema_pb.Index> {
    path: "/immudb.schema.ImmuService/Reference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ReferenceOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ReferenceOptions>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface IImmuServiceService_ISafeReference extends grpc.MethodDefinition<schema_pb.SafeReferenceOptions, schema_pb.Proof> {
    path: "/immudb.schema.ImmuService/SafeReference";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeReferenceOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeReferenceOptions>;
    responseSerialize: grpc.serialize<schema_pb.Proof>;
    responseDeserialize: grpc.deserialize<schema_pb.Proof>;
}
interface IImmuServiceService_IZAdd extends grpc.MethodDefinition<schema_pb.ZAddOptions, schema_pb.Index> {
    path: "/immudb.schema.ImmuService/ZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZAddOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ZAddOptions>;
    responseSerialize: grpc.serialize<schema_pb.Index>;
    responseDeserialize: grpc.deserialize<schema_pb.Index>;
}
interface IImmuServiceService_IZScan extends grpc.MethodDefinition<schema_pb.ZScanOptions, schema_pb.ZItemList> {
    path: "/immudb.schema.ImmuService/ZScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.ZScanOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.ZScanOptions>;
    responseSerialize: grpc.serialize<schema_pb.ZItemList>;
    responseDeserialize: grpc.deserialize<schema_pb.ZItemList>;
}
interface IImmuServiceService_ISafeZAdd extends grpc.MethodDefinition<schema_pb.SafeZAddOptions, schema_pb.Proof> {
    path: "/immudb.schema.ImmuService/SafeZAdd";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.SafeZAddOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.SafeZAddOptions>;
    responseSerialize: grpc.serialize<schema_pb.Proof>;
    responseDeserialize: grpc.deserialize<schema_pb.Proof>;
}
interface IImmuServiceService_IIScan extends grpc.MethodDefinition<schema_pb.IScanOptions, schema_pb.Page> {
    path: "/immudb.schema.ImmuService/IScan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.IScanOptions>;
    requestDeserialize: grpc.deserialize<schema_pb.IScanOptions>;
    responseSerialize: grpc.serialize<schema_pb.Page>;
    responseDeserialize: grpc.deserialize<schema_pb.Page>;
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
interface IImmuServiceService_IUseDatabase extends grpc.MethodDefinition<schema_pb.Database, schema_pb.UseDatabaseReply> {
    path: "/immudb.schema.ImmuService/UseDatabase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<schema_pb.Database>;
    requestDeserialize: grpc.deserialize<schema_pb.Database>;
    responseSerialize: grpc.serialize<schema_pb.UseDatabaseReply>;
    responseDeserialize: grpc.deserialize<schema_pb.UseDatabaseReply>;
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
interface IImmuServiceService_IDatabaseList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, schema_pb.DatabaseListResponse> {
    path: "/immudb.schema.ImmuService/DatabaseList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<schema_pb.DatabaseListResponse>;
    responseDeserialize: grpc.deserialize<schema_pb.DatabaseListResponse>;
}

export const ImmuServiceService: IImmuServiceService;

export interface IImmuServiceServer {
    listUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.UserList>;
    createUser: grpc.handleUnaryCall<schema_pb.CreateUserRequest, google_protobuf_empty_pb.Empty>;
    changePassword: grpc.handleUnaryCall<schema_pb.ChangePasswordRequest, google_protobuf_empty_pb.Empty>;
    updateAuthConfig: grpc.handleUnaryCall<schema_pb.AuthConfig, google_protobuf_empty_pb.Empty>;
    updateMTLSConfig: grpc.handleUnaryCall<schema_pb.MTLSConfig, google_protobuf_empty_pb.Empty>;
    printTree: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.Tree>;
    login: grpc.handleUnaryCall<schema_pb.LoginRequest, schema_pb.LoginResponse>;
    logout: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    set: grpc.handleUnaryCall<schema_pb.KeyValue, schema_pb.Index>;
    safeSet: grpc.handleUnaryCall<schema_pb.SafeSetOptions, schema_pb.Proof>;
    get: grpc.handleUnaryCall<schema_pb.Key, schema_pb.Item>;
    safeGet: grpc.handleUnaryCall<schema_pb.SafeGetOptions, schema_pb.SafeItem>;
    setBatch: grpc.handleUnaryCall<schema_pb.KVList, schema_pb.Index>;
    getBatch: grpc.handleUnaryCall<schema_pb.KeyList, schema_pb.ItemList>;
    scan: grpc.handleUnaryCall<schema_pb.ScanOptions, schema_pb.ItemList>;
    count: grpc.handleUnaryCall<schema_pb.KeyPrefix, schema_pb.ItemsCount>;
    countAll: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.ItemsCount>;
    currentRoot: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.Root>;
    inclusion: grpc.handleUnaryCall<schema_pb.Index, schema_pb.InclusionProof>;
    consistency: grpc.handleUnaryCall<schema_pb.Index, schema_pb.ConsistencyProof>;
    byIndex: grpc.handleUnaryCall<schema_pb.Index, schema_pb.Item>;
    bySafeIndex: grpc.handleUnaryCall<schema_pb.SafeIndexOptions, schema_pb.SafeItem>;
    history: grpc.handleUnaryCall<schema_pb.HistoryOptions, schema_pb.ItemList>;
    health: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.HealthResponse>;
    reference: grpc.handleUnaryCall<schema_pb.ReferenceOptions, schema_pb.Index>;
    safeReference: grpc.handleUnaryCall<schema_pb.SafeReferenceOptions, schema_pb.Proof>;
    zAdd: grpc.handleUnaryCall<schema_pb.ZAddOptions, schema_pb.Index>;
    zScan: grpc.handleUnaryCall<schema_pb.ZScanOptions, schema_pb.ZItemList>;
    safeZAdd: grpc.handleUnaryCall<schema_pb.SafeZAddOptions, schema_pb.Proof>;
    iScan: grpc.handleUnaryCall<schema_pb.IScanOptions, schema_pb.Page>;
    createDatabase: grpc.handleUnaryCall<schema_pb.Database, google_protobuf_empty_pb.Empty>;
    useDatabase: grpc.handleUnaryCall<schema_pb.Database, schema_pb.UseDatabaseReply>;
    changePermission: grpc.handleUnaryCall<schema_pb.ChangePermissionRequest, google_protobuf_empty_pb.Empty>;
    setActiveUser: grpc.handleUnaryCall<schema_pb.SetActiveUserRequest, google_protobuf_empty_pb.Empty>;
    databaseList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, schema_pb.DatabaseListResponse>;
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
    printTree(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    printTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    printTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.KeyValue, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.KeyValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    set(request: schema_pb.KeyValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    get(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    inclusion(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    inclusion(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    inclusion(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    consistency(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    consistency(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    consistency(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    byIndex(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    byIndex(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    byIndex(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    bySafeIndex(request: schema_pb.SafeIndexOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    bySafeIndex(request: schema_pb.SafeIndexOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    bySafeIndex(request: schema_pb.SafeIndexOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    history(request: schema_pb.HistoryOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    reference(request: schema_pb.ReferenceOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    reference(request: schema_pb.ReferenceOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    reference(request: schema_pb.ReferenceOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    safeReference(request: schema_pb.SafeReferenceOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeReference(request: schema_pb.SafeReferenceOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeReference(request: schema_pb.SafeReferenceOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    iScan(request: schema_pb.IScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    iScan(request: schema_pb.IScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    iScan(request: schema_pb.IScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
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
    public printTree(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    public printTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    public printTree(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Tree) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: schema_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public logout(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.KeyValue, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.KeyValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public set(request: schema_pb.KeyValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeSet(request: schema_pb.SafeSetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public get(request: schema_pb.Key, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public safeGet(request: schema_pb.SafeGetOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public setBatch(request: schema_pb.KVList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public getBatch(request: schema_pb.KeyList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public scan(request: schema_pb.ScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public count(request: schema_pb.KeyPrefix, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public countAll(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemsCount) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public currentRoot(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Root) => void): grpc.ClientUnaryCall;
    public inclusion(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    public inclusion(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    public inclusion(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.InclusionProof) => void): grpc.ClientUnaryCall;
    public consistency(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    public consistency(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    public consistency(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ConsistencyProof) => void): grpc.ClientUnaryCall;
    public byIndex(request: schema_pb.Index, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public byIndex(request: schema_pb.Index, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public byIndex(request: schema_pb.Index, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Item) => void): grpc.ClientUnaryCall;
    public bySafeIndex(request: schema_pb.SafeIndexOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public bySafeIndex(request: schema_pb.SafeIndexOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public bySafeIndex(request: schema_pb.SafeIndexOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.SafeItem) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public history(request: schema_pb.HistoryOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ItemList) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public health(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.HealthResponse) => void): grpc.ClientUnaryCall;
    public reference(request: schema_pb.ReferenceOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public reference(request: schema_pb.ReferenceOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public reference(request: schema_pb.ReferenceOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public safeReference(request: schema_pb.SafeReferenceOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeReference(request: schema_pb.SafeReferenceOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeReference(request: schema_pb.SafeReferenceOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public zAdd(request: schema_pb.ZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Index) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    public zScan(request: schema_pb.ZScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.ZItemList) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public safeZAdd(request: schema_pb.SafeZAddOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Proof) => void): grpc.ClientUnaryCall;
    public iScan(request: schema_pb.IScanOptions, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    public iScan(request: schema_pb.IScanOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    public iScan(request: schema_pb.IScanOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.Page) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public useDatabase(request: schema_pb.Database, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.UseDatabaseReply) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePermission(request: schema_pb.ChangePermissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setActiveUser(request: schema_pb.SetActiveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
    public databaseList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: schema_pb.DatabaseListResponse) => void): grpc.ClientUnaryCall;
}
