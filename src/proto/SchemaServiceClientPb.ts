/**
 * @fileoverview gRPC-Web generated client stub for immudb.schema
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  AuthConfig,
  ChangePasswordRequest,
  ChangePermissionRequest,
  CreateUserRequest,
  Database,
  DatabaseListResponse,
  Entries,
  Entry,
  EntryCount,
  ExecAllRequest,
  HealthResponse,
  HistoryRequest,
  ImmutableState,
  KeyListRequest,
  KeyPrefix,
  KeyRequest,
  LoginRequest,
  LoginResponse,
  MTLSConfig,
  ReferenceRequest,
  ScanRequest,
  SetActiveUserRequest,
  SetRequest,
  Tx,
  TxList,
  TxMetadata,
  TxRequest,
  TxScanRequest,
  UseDatabaseReply,
  UserList,
  VerifiableEntry,
  VerifiableGetRequest,
  VerifiableReferenceRequest,
  VerifiableSetRequest,
  VerifiableTx,
  VerifiableTxRequest,
  VerifiableZAddRequest,
  ZAddRequest,
  ZEntries,
  ZScanRequest} from './schema_pb';

export class ImmuServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    UserList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    UserList.deserializeBinary
  );

  listUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<UserList>;

  listUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserList) => void): grpcWeb.ClientReadableStream<UserList>;

  listUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UserList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ListUsers', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ListUsers',
    request,
    metadata || {},
    this.methodInfoListUsers);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CreateUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/CreateUser', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ChangePassword', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoUpdateAuthConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: AuthConfig) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateAuthConfig(
    request: AuthConfig,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateAuthConfig(
    request: AuthConfig,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateAuthConfig(
    request: AuthConfig,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/UpdateAuthConfig', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdateAuthConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/UpdateAuthConfig',
    request,
    metadata || {},
    this.methodInfoUpdateAuthConfig);
  }

  methodInfoUpdateMTLSConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: MTLSConfig) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateMTLSConfig(
    request: MTLSConfig,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateMTLSConfig(
    request: MTLSConfig,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateMTLSConfig(
    request: MTLSConfig,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/UpdateMTLSConfig', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdateMTLSConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/UpdateMTLSConfig',
    request,
    metadata || {},
    this.methodInfoUpdateMTLSConfig);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<LoginResponse>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void): grpcWeb.ClientReadableStream<LoginResponse>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Login', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  logout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  logout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  logout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Logout', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

  methodInfoSet = new grpcWeb.AbstractClientBase.MethodInfo(
    TxMetadata,
    (request: SetRequest) => {
      return request.serializeBinary();
    },
    TxMetadata.deserializeBinary
  );

  set(
    request: SetRequest,
    metadata: grpcWeb.Metadata | null): Promise<TxMetadata>;

  set(
    request: SetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TxMetadata) => void): grpcWeb.ClientReadableStream<TxMetadata>;

  set(
    request: SetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TxMetadata) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Set', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Set',
    request,
    metadata || {},
    this.methodInfoSet);
  }

  methodInfoVerifiableSet = new grpcWeb.AbstractClientBase.MethodInfo(
    VerifiableTx,
    (request: VerifiableSetRequest) => {
      return request.serializeBinary();
    },
    VerifiableTx.deserializeBinary
  );

  verifiableSet(
    request: VerifiableSetRequest,
    metadata: grpcWeb.Metadata | null): Promise<VerifiableTx>;

  verifiableSet(
    request: VerifiableSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VerifiableTx) => void): grpcWeb.ClientReadableStream<VerifiableTx>;

  verifiableSet(
    request: VerifiableSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: VerifiableTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/VerifiableSet', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoVerifiableSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/VerifiableSet',
    request,
    metadata || {},
    this.methodInfoVerifiableSet);
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    Entry,
    (request: KeyRequest) => {
      return request.serializeBinary();
    },
    Entry.deserializeBinary
  );

  get(
    request: KeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<Entry>;

  get(
    request: KeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entry) => void): grpcWeb.ClientReadableStream<Entry>;

  get(
    request: KeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Entry) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Get', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

  methodInfoVerifiableGet = new grpcWeb.AbstractClientBase.MethodInfo(
    VerifiableEntry,
    (request: VerifiableGetRequest) => {
      return request.serializeBinary();
    },
    VerifiableEntry.deserializeBinary
  );

  verifiableGet(
    request: VerifiableGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<VerifiableEntry>;

  verifiableGet(
    request: VerifiableGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VerifiableEntry) => void): grpcWeb.ClientReadableStream<VerifiableEntry>;

  verifiableGet(
    request: VerifiableGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: VerifiableEntry) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/VerifiableGet', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoVerifiableGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/VerifiableGet',
    request,
    metadata || {},
    this.methodInfoVerifiableGet);
  }

  methodInfoGetAll = new grpcWeb.AbstractClientBase.MethodInfo(
    Entries,
    (request: KeyListRequest) => {
      return request.serializeBinary();
    },
    Entries.deserializeBinary
  );

  getAll(
    request: KeyListRequest,
    metadata: grpcWeb.Metadata | null): Promise<Entries>;

  getAll(
    request: KeyListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entries) => void): grpcWeb.ClientReadableStream<Entries>;

  getAll(
    request: KeyListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Entries) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/GetAll', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/GetAll',
    request,
    metadata || {},
    this.methodInfoGetAll);
  }

  methodInfoExecAll = new grpcWeb.AbstractClientBase.MethodInfo(
    TxMetadata,
    (request: ExecAllRequest) => {
      return request.serializeBinary();
    },
    TxMetadata.deserializeBinary
  );

  execAll(
    request: ExecAllRequest,
    metadata: grpcWeb.Metadata | null): Promise<TxMetadata>;

  execAll(
    request: ExecAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TxMetadata) => void): grpcWeb.ClientReadableStream<TxMetadata>;

  execAll(
    request: ExecAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TxMetadata) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ExecAll', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoExecAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ExecAll',
    request,
    metadata || {},
    this.methodInfoExecAll);
  }

  methodInfoScan = new grpcWeb.AbstractClientBase.MethodInfo(
    Entries,
    (request: ScanRequest) => {
      return request.serializeBinary();
    },
    Entries.deserializeBinary
  );

  scan(
    request: ScanRequest,
    metadata: grpcWeb.Metadata | null): Promise<Entries>;

  scan(
    request: ScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entries) => void): grpcWeb.ClientReadableStream<Entries>;

  scan(
    request: ScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Entries) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Scan', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoScan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Scan',
    request,
    metadata || {},
    this.methodInfoScan);
  }

  methodInfoCount = new grpcWeb.AbstractClientBase.MethodInfo(
    EntryCount,
    (request: KeyPrefix) => {
      return request.serializeBinary();
    },
    EntryCount.deserializeBinary
  );

  count(
    request: KeyPrefix,
    metadata: grpcWeb.Metadata | null): Promise<EntryCount>;

  count(
    request: KeyPrefix,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntryCount) => void): grpcWeb.ClientReadableStream<EntryCount>;

  count(
    request: KeyPrefix,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: EntryCount) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Count', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

  methodInfoCountAll = new grpcWeb.AbstractClientBase.MethodInfo(
    EntryCount,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    EntryCount.deserializeBinary
  );

  countAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<EntryCount>;

  countAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntryCount) => void): grpcWeb.ClientReadableStream<EntryCount>;

  countAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: EntryCount) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/CountAll', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCountAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/CountAll',
    request,
    metadata || {},
    this.methodInfoCountAll);
  }

  methodInfoTxById = new grpcWeb.AbstractClientBase.MethodInfo(
    Tx,
    (request: TxRequest) => {
      return request.serializeBinary();
    },
    Tx.deserializeBinary
  );

  txById(
    request: TxRequest,
    metadata: grpcWeb.Metadata | null): Promise<Tx>;

  txById(
    request: TxRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Tx) => void): grpcWeb.ClientReadableStream<Tx>;

  txById(
    request: TxRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Tx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/TxById', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoTxById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/TxById',
    request,
    metadata || {},
    this.methodInfoTxById);
  }

  methodInfoVerifiableTxById = new grpcWeb.AbstractClientBase.MethodInfo(
    VerifiableTx,
    (request: VerifiableTxRequest) => {
      return request.serializeBinary();
    },
    VerifiableTx.deserializeBinary
  );

  verifiableTxById(
    request: VerifiableTxRequest,
    metadata: grpcWeb.Metadata | null): Promise<VerifiableTx>;

  verifiableTxById(
    request: VerifiableTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VerifiableTx) => void): grpcWeb.ClientReadableStream<VerifiableTx>;

  verifiableTxById(
    request: VerifiableTxRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: VerifiableTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/VerifiableTxById', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoVerifiableTxById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/VerifiableTxById',
    request,
    metadata || {},
    this.methodInfoVerifiableTxById);
  }

  methodInfoTxScan = new grpcWeb.AbstractClientBase.MethodInfo(
    TxList,
    (request: TxScanRequest) => {
      return request.serializeBinary();
    },
    TxList.deserializeBinary
  );

  txScan(
    request: TxScanRequest,
    metadata: grpcWeb.Metadata | null): Promise<TxList>;

  txScan(
    request: TxScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TxList) => void): grpcWeb.ClientReadableStream<TxList>;

  txScan(
    request: TxScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TxList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/TxScan', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoTxScan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/TxScan',
    request,
    metadata || {},
    this.methodInfoTxScan);
  }

  methodInfoHistory = new grpcWeb.AbstractClientBase.MethodInfo(
    Entries,
    (request: HistoryRequest) => {
      return request.serializeBinary();
    },
    Entries.deserializeBinary
  );

  history(
    request: HistoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<Entries>;

  history(
    request: HistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Entries) => void): grpcWeb.ClientReadableStream<Entries>;

  history(
    request: HistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Entries) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/History', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoHistory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/History',
    request,
    metadata || {},
    this.methodInfoHistory);
  }

  methodInfoHealth = new grpcWeb.AbstractClientBase.MethodInfo(
    HealthResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    HealthResponse.deserializeBinary
  );

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<HealthResponse>;

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HealthResponse) => void): grpcWeb.ClientReadableStream<HealthResponse>;

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: HealthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/Health', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoHealth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/Health',
    request,
    metadata || {},
    this.methodInfoHealth);
  }

  methodInfoCurrentState = new grpcWeb.AbstractClientBase.MethodInfo(
    ImmutableState,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ImmutableState.deserializeBinary
  );

  currentState(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ImmutableState>;

  currentState(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ImmutableState) => void): grpcWeb.ClientReadableStream<ImmutableState>;

  currentState(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ImmutableState) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/CurrentState', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCurrentState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/CurrentState',
    request,
    metadata || {},
    this.methodInfoCurrentState);
  }

  methodInfoSetReference = new grpcWeb.AbstractClientBase.MethodInfo(
    TxMetadata,
    (request: ReferenceRequest) => {
      return request.serializeBinary();
    },
    TxMetadata.deserializeBinary
  );

  setReference(
    request: ReferenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<TxMetadata>;

  setReference(
    request: ReferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TxMetadata) => void): grpcWeb.ClientReadableStream<TxMetadata>;

  setReference(
    request: ReferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TxMetadata) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/SetReference', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoSetReference,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/SetReference',
    request,
    metadata || {},
    this.methodInfoSetReference);
  }

  methodInfoVerifiableSetReference = new grpcWeb.AbstractClientBase.MethodInfo(
    VerifiableTx,
    (request: VerifiableReferenceRequest) => {
      return request.serializeBinary();
    },
    VerifiableTx.deserializeBinary
  );

  verifiableSetReference(
    request: VerifiableReferenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<VerifiableTx>;

  verifiableSetReference(
    request: VerifiableReferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VerifiableTx) => void): grpcWeb.ClientReadableStream<VerifiableTx>;

  verifiableSetReference(
    request: VerifiableReferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: VerifiableTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/VerifiableSetReference', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoVerifiableSetReference,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/VerifiableSetReference',
    request,
    metadata || {},
    this.methodInfoVerifiableSetReference);
  }

  methodInfoZAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    TxMetadata,
    (request: ZAddRequest) => {
      return request.serializeBinary();
    },
    TxMetadata.deserializeBinary
  );

  zAdd(
    request: ZAddRequest,
    metadata: grpcWeb.Metadata | null): Promise<TxMetadata>;

  zAdd(
    request: ZAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TxMetadata) => void): grpcWeb.ClientReadableStream<TxMetadata>;

  zAdd(
    request: ZAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TxMetadata) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ZAdd', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoZAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ZAdd',
    request,
    metadata || {},
    this.methodInfoZAdd);
  }

  methodInfoVerifiableZAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    VerifiableTx,
    (request: VerifiableZAddRequest) => {
      return request.serializeBinary();
    },
    VerifiableTx.deserializeBinary
  );

  verifiableZAdd(
    request: VerifiableZAddRequest,
    metadata: grpcWeb.Metadata | null): Promise<VerifiableTx>;

  verifiableZAdd(
    request: VerifiableZAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VerifiableTx) => void): grpcWeb.ClientReadableStream<VerifiableTx>;

  verifiableZAdd(
    request: VerifiableZAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: VerifiableTx) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/VerifiableZAdd', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoVerifiableZAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/VerifiableZAdd',
    request,
    metadata || {},
    this.methodInfoVerifiableZAdd);
  }

  methodInfoZScan = new grpcWeb.AbstractClientBase.MethodInfo(
    ZEntries,
    (request: ZScanRequest) => {
      return request.serializeBinary();
    },
    ZEntries.deserializeBinary
  );

  zScan(
    request: ZScanRequest,
    metadata: grpcWeb.Metadata | null): Promise<ZEntries>;

  zScan(
    request: ZScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ZEntries) => void): grpcWeb.ClientReadableStream<ZEntries>;

  zScan(
    request: ZScanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ZEntries) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ZScan', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoZScan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ZScan',
    request,
    metadata || {},
    this.methodInfoZScan);
  }

  methodInfoCreateDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: Database) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  createDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/CreateDatabase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateDatabase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/CreateDatabase',
    request,
    metadata || {},
    this.methodInfoCreateDatabase);
  }

  methodInfoDatabaseList = new grpcWeb.AbstractClientBase.MethodInfo(
    DatabaseListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    DatabaseListResponse.deserializeBinary
  );

  databaseList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<DatabaseListResponse>;

  databaseList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DatabaseListResponse) => void): grpcWeb.ClientReadableStream<DatabaseListResponse>;

  databaseList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DatabaseListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/DatabaseList', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoDatabaseList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/DatabaseList',
    request,
    metadata || {},
    this.methodInfoDatabaseList);
  }

  methodInfoUseDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    UseDatabaseReply,
    (request: Database) => {
      return request.serializeBinary();
    },
    UseDatabaseReply.deserializeBinary
  );

  useDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null): Promise<UseDatabaseReply>;

  useDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UseDatabaseReply) => void): grpcWeb.ClientReadableStream<UseDatabaseReply>;

  useDatabase(
    request: Database,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UseDatabaseReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/UseDatabase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUseDatabase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/UseDatabase',
    request,
    metadata || {},
    this.methodInfoUseDatabase);
  }

  methodInfoCleanIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  cleanIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  cleanIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  cleanIndex(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/CleanIndex', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCleanIndex,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/CleanIndex',
    request,
    metadata || {},
    this.methodInfoCleanIndex);
  }

  methodInfoChangePermission = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ChangePermissionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  changePermission(
    request: ChangePermissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  changePermission(
    request: ChangePermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePermission(
    request: ChangePermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/ChangePermission', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoChangePermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/ChangePermission',
    request,
    metadata || {},
    this.methodInfoChangePermission);
  }

  methodInfoSetActiveUser = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: SetActiveUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setActiveUser(
    request: SetActiveUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setActiveUser(
    request: SetActiveUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setActiveUser(
    request: SetActiveUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/immudb.schema.ImmuService/SetActiveUser', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoSetActiveUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/immudb.schema.ImmuService/SetActiveUser',
    request,
    metadata || {},
    this.methodInfoSetActiveUser);
  }

}

