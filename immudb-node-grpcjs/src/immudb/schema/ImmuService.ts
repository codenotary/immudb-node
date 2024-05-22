// Original file: schema.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthConfig as _immudb_schema_AuthConfig, AuthConfig__Output as _immudb_schema_AuthConfig__Output } from '../../immudb/schema/AuthConfig';
import type { ChangePasswordRequest as _immudb_schema_ChangePasswordRequest, ChangePasswordRequest__Output as _immudb_schema_ChangePasswordRequest__Output } from '../../immudb/schema/ChangePasswordRequest';
import type { ChangePermissionRequest as _immudb_schema_ChangePermissionRequest, ChangePermissionRequest__Output as _immudb_schema_ChangePermissionRequest__Output } from '../../immudb/schema/ChangePermissionRequest';
import type { Chunk as _immudb_schema_Chunk, Chunk__Output as _immudb_schema_Chunk__Output } from '../../immudb/schema/Chunk';
import type { CommittedSQLTx as _immudb_schema_CommittedSQLTx, CommittedSQLTx__Output as _immudb_schema_CommittedSQLTx__Output } from '../../immudb/schema/CommittedSQLTx';
import type { CreateDatabaseRequest as _immudb_schema_CreateDatabaseRequest, CreateDatabaseRequest__Output as _immudb_schema_CreateDatabaseRequest__Output } from '../../immudb/schema/CreateDatabaseRequest';
import type { CreateDatabaseResponse as _immudb_schema_CreateDatabaseResponse, CreateDatabaseResponse__Output as _immudb_schema_CreateDatabaseResponse__Output } from '../../immudb/schema/CreateDatabaseResponse';
import type { CreateUserRequest as _immudb_schema_CreateUserRequest, CreateUserRequest__Output as _immudb_schema_CreateUserRequest__Output } from '../../immudb/schema/CreateUserRequest';
import type { Database as _immudb_schema_Database, Database__Output as _immudb_schema_Database__Output } from '../../immudb/schema/Database';
import type { DatabaseHealthResponse as _immudb_schema_DatabaseHealthResponse, DatabaseHealthResponse__Output as _immudb_schema_DatabaseHealthResponse__Output } from '../../immudb/schema/DatabaseHealthResponse';
import type { DatabaseListRequestV2 as _immudb_schema_DatabaseListRequestV2, DatabaseListRequestV2__Output as _immudb_schema_DatabaseListRequestV2__Output } from '../../immudb/schema/DatabaseListRequestV2';
import type { DatabaseListResponse as _immudb_schema_DatabaseListResponse, DatabaseListResponse__Output as _immudb_schema_DatabaseListResponse__Output } from '../../immudb/schema/DatabaseListResponse';
import type { DatabaseListResponseV2 as _immudb_schema_DatabaseListResponseV2, DatabaseListResponseV2__Output as _immudb_schema_DatabaseListResponseV2__Output } from '../../immudb/schema/DatabaseListResponseV2';
import type { DatabaseSettings as _immudb_schema_DatabaseSettings, DatabaseSettings__Output as _immudb_schema_DatabaseSettings__Output } from '../../immudb/schema/DatabaseSettings';
import type { DatabaseSettingsRequest as _immudb_schema_DatabaseSettingsRequest, DatabaseSettingsRequest__Output as _immudb_schema_DatabaseSettingsRequest__Output } from '../../immudb/schema/DatabaseSettingsRequest';
import type { DatabaseSettingsResponse as _immudb_schema_DatabaseSettingsResponse, DatabaseSettingsResponse__Output as _immudb_schema_DatabaseSettingsResponse__Output } from '../../immudb/schema/DatabaseSettingsResponse';
import type { DeleteDatabaseRequest as _immudb_schema_DeleteDatabaseRequest, DeleteDatabaseRequest__Output as _immudb_schema_DeleteDatabaseRequest__Output } from '../../immudb/schema/DeleteDatabaseRequest';
import type { DeleteDatabaseResponse as _immudb_schema_DeleteDatabaseResponse, DeleteDatabaseResponse__Output as _immudb_schema_DeleteDatabaseResponse__Output } from '../../immudb/schema/DeleteDatabaseResponse';
import type { DeleteKeysRequest as _immudb_schema_DeleteKeysRequest, DeleteKeysRequest__Output as _immudb_schema_DeleteKeysRequest__Output } from '../../immudb/schema/DeleteKeysRequest';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { Entries as _immudb_schema_Entries, Entries__Output as _immudb_schema_Entries__Output } from '../../immudb/schema/Entries';
import type { Entry as _immudb_schema_Entry, Entry__Output as _immudb_schema_Entry__Output } from '../../immudb/schema/Entry';
import type { EntryCount as _immudb_schema_EntryCount, EntryCount__Output as _immudb_schema_EntryCount__Output } from '../../immudb/schema/EntryCount';
import type { ExecAllRequest as _immudb_schema_ExecAllRequest, ExecAllRequest__Output as _immudb_schema_ExecAllRequest__Output } from '../../immudb/schema/ExecAllRequest';
import type { ExportTxRequest as _immudb_schema_ExportTxRequest, ExportTxRequest__Output as _immudb_schema_ExportTxRequest__Output } from '../../immudb/schema/ExportTxRequest';
import type { FlushIndexRequest as _immudb_schema_FlushIndexRequest, FlushIndexRequest__Output as _immudb_schema_FlushIndexRequest__Output } from '../../immudb/schema/FlushIndexRequest';
import type { FlushIndexResponse as _immudb_schema_FlushIndexResponse, FlushIndexResponse__Output as _immudb_schema_FlushIndexResponse__Output } from '../../immudb/schema/FlushIndexResponse';
import type { HealthResponse as _immudb_schema_HealthResponse, HealthResponse__Output as _immudb_schema_HealthResponse__Output } from '../../immudb/schema/HealthResponse';
import type { HistoryRequest as _immudb_schema_HistoryRequest, HistoryRequest__Output as _immudb_schema_HistoryRequest__Output } from '../../immudb/schema/HistoryRequest';
import type { ImmutableState as _immudb_schema_ImmutableState, ImmutableState__Output as _immudb_schema_ImmutableState__Output } from '../../immudb/schema/ImmutableState';
import type { KeyListRequest as _immudb_schema_KeyListRequest, KeyListRequest__Output as _immudb_schema_KeyListRequest__Output } from '../../immudb/schema/KeyListRequest';
import type { KeyPrefix as _immudb_schema_KeyPrefix, KeyPrefix__Output as _immudb_schema_KeyPrefix__Output } from '../../immudb/schema/KeyPrefix';
import type { KeyRequest as _immudb_schema_KeyRequest, KeyRequest__Output as _immudb_schema_KeyRequest__Output } from '../../immudb/schema/KeyRequest';
import type { LoadDatabaseRequest as _immudb_schema_LoadDatabaseRequest, LoadDatabaseRequest__Output as _immudb_schema_LoadDatabaseRequest__Output } from '../../immudb/schema/LoadDatabaseRequest';
import type { LoadDatabaseResponse as _immudb_schema_LoadDatabaseResponse, LoadDatabaseResponse__Output as _immudb_schema_LoadDatabaseResponse__Output } from '../../immudb/schema/LoadDatabaseResponse';
import type { LoginRequest as _immudb_schema_LoginRequest, LoginRequest__Output as _immudb_schema_LoginRequest__Output } from '../../immudb/schema/LoginRequest';
import type { LoginResponse as _immudb_schema_LoginResponse, LoginResponse__Output as _immudb_schema_LoginResponse__Output } from '../../immudb/schema/LoginResponse';
import type { MTLSConfig as _immudb_schema_MTLSConfig, MTLSConfig__Output as _immudb_schema_MTLSConfig__Output } from '../../immudb/schema/MTLSConfig';
import type { NewTxRequest as _immudb_schema_NewTxRequest, NewTxRequest__Output as _immudb_schema_NewTxRequest__Output } from '../../immudb/schema/NewTxRequest';
import type { NewTxResponse as _immudb_schema_NewTxResponse, NewTxResponse__Output as _immudb_schema_NewTxResponse__Output } from '../../immudb/schema/NewTxResponse';
import type { OpenSessionRequest as _immudb_schema_OpenSessionRequest, OpenSessionRequest__Output as _immudb_schema_OpenSessionRequest__Output } from '../../immudb/schema/OpenSessionRequest';
import type { OpenSessionResponse as _immudb_schema_OpenSessionResponse, OpenSessionResponse__Output as _immudb_schema_OpenSessionResponse__Output } from '../../immudb/schema/OpenSessionResponse';
import type { ReferenceRequest as _immudb_schema_ReferenceRequest, ReferenceRequest__Output as _immudb_schema_ReferenceRequest__Output } from '../../immudb/schema/ReferenceRequest';
import type { SQLExecRequest as _immudb_schema_SQLExecRequest, SQLExecRequest__Output as _immudb_schema_SQLExecRequest__Output } from '../../immudb/schema/SQLExecRequest';
import type { SQLExecResult as _immudb_schema_SQLExecResult, SQLExecResult__Output as _immudb_schema_SQLExecResult__Output } from '../../immudb/schema/SQLExecResult';
import type { SQLQueryRequest as _immudb_schema_SQLQueryRequest, SQLQueryRequest__Output as _immudb_schema_SQLQueryRequest__Output } from '../../immudb/schema/SQLQueryRequest';
import type { SQLQueryResult as _immudb_schema_SQLQueryResult, SQLQueryResult__Output as _immudb_schema_SQLQueryResult__Output } from '../../immudb/schema/SQLQueryResult';
import type { ScanRequest as _immudb_schema_ScanRequest, ScanRequest__Output as _immudb_schema_ScanRequest__Output } from '../../immudb/schema/ScanRequest';
import type { SetActiveUserRequest as _immudb_schema_SetActiveUserRequest, SetActiveUserRequest__Output as _immudb_schema_SetActiveUserRequest__Output } from '../../immudb/schema/SetActiveUserRequest';
import type { SetRequest as _immudb_schema_SetRequest, SetRequest__Output as _immudb_schema_SetRequest__Output } from '../../immudb/schema/SetRequest';
import type { Table as _immudb_schema_Table, Table__Output as _immudb_schema_Table__Output } from '../../immudb/schema/Table';
import type { Tx as _immudb_schema_Tx, Tx__Output as _immudb_schema_Tx__Output } from '../../immudb/schema/Tx';
import type { TxHeader as _immudb_schema_TxHeader, TxHeader__Output as _immudb_schema_TxHeader__Output } from '../../immudb/schema/TxHeader';
import type { TxList as _immudb_schema_TxList, TxList__Output as _immudb_schema_TxList__Output } from '../../immudb/schema/TxList';
import type { TxRequest as _immudb_schema_TxRequest, TxRequest__Output as _immudb_schema_TxRequest__Output } from '../../immudb/schema/TxRequest';
import type { TxScanRequest as _immudb_schema_TxScanRequest, TxScanRequest__Output as _immudb_schema_TxScanRequest__Output } from '../../immudb/schema/TxScanRequest';
import type { UnloadDatabaseRequest as _immudb_schema_UnloadDatabaseRequest, UnloadDatabaseRequest__Output as _immudb_schema_UnloadDatabaseRequest__Output } from '../../immudb/schema/UnloadDatabaseRequest';
import type { UnloadDatabaseResponse as _immudb_schema_UnloadDatabaseResponse, UnloadDatabaseResponse__Output as _immudb_schema_UnloadDatabaseResponse__Output } from '../../immudb/schema/UnloadDatabaseResponse';
import type { UpdateDatabaseRequest as _immudb_schema_UpdateDatabaseRequest, UpdateDatabaseRequest__Output as _immudb_schema_UpdateDatabaseRequest__Output } from '../../immudb/schema/UpdateDatabaseRequest';
import type { UpdateDatabaseResponse as _immudb_schema_UpdateDatabaseResponse, UpdateDatabaseResponse__Output as _immudb_schema_UpdateDatabaseResponse__Output } from '../../immudb/schema/UpdateDatabaseResponse';
import type { UseDatabaseReply as _immudb_schema_UseDatabaseReply, UseDatabaseReply__Output as _immudb_schema_UseDatabaseReply__Output } from '../../immudb/schema/UseDatabaseReply';
import type { UserList as _immudb_schema_UserList, UserList__Output as _immudb_schema_UserList__Output } from '../../immudb/schema/UserList';
import type { VerifiableEntry as _immudb_schema_VerifiableEntry, VerifiableEntry__Output as _immudb_schema_VerifiableEntry__Output } from '../../immudb/schema/VerifiableEntry';
import type { VerifiableGetRequest as _immudb_schema_VerifiableGetRequest, VerifiableGetRequest__Output as _immudb_schema_VerifiableGetRequest__Output } from '../../immudb/schema/VerifiableGetRequest';
import type { VerifiableReferenceRequest as _immudb_schema_VerifiableReferenceRequest, VerifiableReferenceRequest__Output as _immudb_schema_VerifiableReferenceRequest__Output } from '../../immudb/schema/VerifiableReferenceRequest';
import type { VerifiableSQLEntry as _immudb_schema_VerifiableSQLEntry, VerifiableSQLEntry__Output as _immudb_schema_VerifiableSQLEntry__Output } from '../../immudb/schema/VerifiableSQLEntry';
import type { VerifiableSQLGetRequest as _immudb_schema_VerifiableSQLGetRequest, VerifiableSQLGetRequest__Output as _immudb_schema_VerifiableSQLGetRequest__Output } from '../../immudb/schema/VerifiableSQLGetRequest';
import type { VerifiableSetRequest as _immudb_schema_VerifiableSetRequest, VerifiableSetRequest__Output as _immudb_schema_VerifiableSetRequest__Output } from '../../immudb/schema/VerifiableSetRequest';
import type { VerifiableTx as _immudb_schema_VerifiableTx, VerifiableTx__Output as _immudb_schema_VerifiableTx__Output } from '../../immudb/schema/VerifiableTx';
import type { VerifiableTxRequest as _immudb_schema_VerifiableTxRequest, VerifiableTxRequest__Output as _immudb_schema_VerifiableTxRequest__Output } from '../../immudb/schema/VerifiableTxRequest';
import type { VerifiableZAddRequest as _immudb_schema_VerifiableZAddRequest, VerifiableZAddRequest__Output as _immudb_schema_VerifiableZAddRequest__Output } from '../../immudb/schema/VerifiableZAddRequest';
import type { ZAddRequest as _immudb_schema_ZAddRequest, ZAddRequest__Output as _immudb_schema_ZAddRequest__Output } from '../../immudb/schema/ZAddRequest';
import type { ZEntries as _immudb_schema_ZEntries, ZEntries__Output as _immudb_schema_ZEntries__Output } from '../../immudb/schema/ZEntries';
import type { ZScanRequest as _immudb_schema_ZScanRequest, ZScanRequest__Output as _immudb_schema_ZScanRequest__Output } from '../../immudb/schema/ZScanRequest';

export interface ImmuServiceClient extends grpc.Client {
  ChangePassword(argument: _immudb_schema_ChangePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _immudb_schema_ChangePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _immudb_schema_ChangePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _immudb_schema_ChangePasswordRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _immudb_schema_ChangePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _immudb_schema_ChangePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _immudb_schema_ChangePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _immudb_schema_ChangePasswordRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  ChangePermission(argument: _immudb_schema_ChangePermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePermission(argument: _immudb_schema_ChangePermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePermission(argument: _immudb_schema_ChangePermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  ChangePermission(argument: _immudb_schema_ChangePermissionRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePermission(argument: _immudb_schema_ChangePermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePermission(argument: _immudb_schema_ChangePermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePermission(argument: _immudb_schema_ChangePermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  changePermission(argument: _immudb_schema_ChangePermissionRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  CloseSession(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CloseSession(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CloseSession(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CloseSession(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeSession(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeSession(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeSession(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  closeSession(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Commit(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  Commit(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  Commit(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  Commit(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  commit(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  commit(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  commit(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  commit(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_CommittedSQLTx__Output>): grpc.ClientUnaryCall;
  
  CompactIndex(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CompactIndex(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CompactIndex(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CompactIndex(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  compactIndex(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  compactIndex(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  compactIndex(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  compactIndex(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Count(argument: _immudb_schema_KeyPrefix, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  Count(argument: _immudb_schema_KeyPrefix, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  Count(argument: _immudb_schema_KeyPrefix, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  Count(argument: _immudb_schema_KeyPrefix, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  count(argument: _immudb_schema_KeyPrefix, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  count(argument: _immudb_schema_KeyPrefix, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  count(argument: _immudb_schema_KeyPrefix, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  count(argument: _immudb_schema_KeyPrefix, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  
  CountAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  CountAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  CountAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  CountAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  countAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  countAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  countAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  countAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_EntryCount__Output>): grpc.ClientUnaryCall;
  
  CreateDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabase(argument: _immudb_schema_Database, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabase(argument: _immudb_schema_Database, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabase(argument: _immudb_schema_Database, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabase(argument: _immudb_schema_Database, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  CreateDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  CreateDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  CreateDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  CreateDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  createDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  createDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  createDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  createDatabaseV2(argument: _immudb_schema_CreateDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_CreateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  
  CreateDatabaseWith(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabaseWith(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabaseWith(argument: _immudb_schema_DatabaseSettings, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateDatabaseWith(argument: _immudb_schema_DatabaseSettings, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabaseWith(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabaseWith(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabaseWith(argument: _immudb_schema_DatabaseSettings, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createDatabaseWith(argument: _immudb_schema_DatabaseSettings, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _immudb_schema_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _immudb_schema_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _immudb_schema_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _immudb_schema_CreateUserRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _immudb_schema_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _immudb_schema_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _immudb_schema_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _immudb_schema_CreateUserRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  CurrentState(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  CurrentState(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  CurrentState(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  CurrentState(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  currentState(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  currentState(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  currentState(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  currentState(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_ImmutableState__Output>): grpc.ClientUnaryCall;
  
  DatabaseHealth(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  DatabaseHealth(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  DatabaseHealth(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  DatabaseHealth(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  databaseHealth(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  databaseHealth(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  databaseHealth(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  databaseHealth(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseHealthResponse__Output>): grpc.ClientUnaryCall;
  
  DatabaseList(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  DatabaseList(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  DatabaseList(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  DatabaseList(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  databaseList(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  databaseList(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  databaseList(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  databaseList(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponse__Output>): grpc.ClientUnaryCall;
  
  DatabaseListV2(argument: _immudb_schema_DatabaseListRequestV2, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  DatabaseListV2(argument: _immudb_schema_DatabaseListRequestV2, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  DatabaseListV2(argument: _immudb_schema_DatabaseListRequestV2, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  DatabaseListV2(argument: _immudb_schema_DatabaseListRequestV2, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  databaseListV2(argument: _immudb_schema_DatabaseListRequestV2, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  databaseListV2(argument: _immudb_schema_DatabaseListRequestV2, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  databaseListV2(argument: _immudb_schema_DatabaseListRequestV2, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  databaseListV2(argument: _immudb_schema_DatabaseListRequestV2, callback: grpc.requestCallback<_immudb_schema_DatabaseListResponseV2__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _immudb_schema_DeleteKeysRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Delete(argument: _immudb_schema_DeleteKeysRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Delete(argument: _immudb_schema_DeleteKeysRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Delete(argument: _immudb_schema_DeleteKeysRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  delete(argument: _immudb_schema_DeleteKeysRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  delete(argument: _immudb_schema_DeleteKeysRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  delete(argument: _immudb_schema_DeleteKeysRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  delete(argument: _immudb_schema_DeleteKeysRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  
  DeleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  DeleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  DeleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  DeleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  deleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  deleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  deleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  deleteDatabase(argument: _immudb_schema_DeleteDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_DeleteDatabaseResponse__Output>): grpc.ClientUnaryCall;
  
  DescribeTable(argument: _immudb_schema_Table, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  DescribeTable(argument: _immudb_schema_Table, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  DescribeTable(argument: _immudb_schema_Table, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  DescribeTable(argument: _immudb_schema_Table, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  describeTable(argument: _immudb_schema_Table, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  describeTable(argument: _immudb_schema_Table, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  describeTable(argument: _immudb_schema_Table, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  describeTable(argument: _immudb_schema_Table, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  
  ExecAll(argument: _immudb_schema_ExecAllRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ExecAll(argument: _immudb_schema_ExecAllRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ExecAll(argument: _immudb_schema_ExecAllRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ExecAll(argument: _immudb_schema_ExecAllRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  execAll(argument: _immudb_schema_ExecAllRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  execAll(argument: _immudb_schema_ExecAllRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  execAll(argument: _immudb_schema_ExecAllRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  execAll(argument: _immudb_schema_ExecAllRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  
  FlushIndex(argument: _immudb_schema_FlushIndexRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  FlushIndex(argument: _immudb_schema_FlushIndexRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  FlushIndex(argument: _immudb_schema_FlushIndexRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  FlushIndex(argument: _immudb_schema_FlushIndexRequest, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  flushIndex(argument: _immudb_schema_FlushIndexRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  flushIndex(argument: _immudb_schema_FlushIndexRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  flushIndex(argument: _immudb_schema_FlushIndexRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  flushIndex(argument: _immudb_schema_FlushIndexRequest, callback: grpc.requestCallback<_immudb_schema_FlushIndexResponse__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  Get(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  Get(argument: _immudb_schema_KeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  Get(argument: _immudb_schema_KeyRequest, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  get(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  get(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  get(argument: _immudb_schema_KeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  get(argument: _immudb_schema_KeyRequest, callback: grpc.requestCallback<_immudb_schema_Entry__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _immudb_schema_KeyListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _immudb_schema_KeyListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _immudb_schema_KeyListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _immudb_schema_KeyListRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  getAll(argument: _immudb_schema_KeyListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  getAll(argument: _immudb_schema_KeyListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  getAll(argument: _immudb_schema_KeyListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  getAll(argument: _immudb_schema_KeyListRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  
  GetDatabaseSettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettings(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettings(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  getDatabaseSettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  getDatabaseSettings(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  getDatabaseSettings(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  getDatabaseSettings(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_DatabaseSettings__Output>): grpc.ClientUnaryCall;
  
  GetDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  GetDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  getDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  getDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  getDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  getDatabaseSettingsV2(argument: _immudb_schema_DatabaseSettingsRequest, callback: grpc.requestCallback<_immudb_schema_DatabaseSettingsResponse__Output>): grpc.ClientUnaryCall;
  
  Health(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  Health(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  health(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_HealthResponse__Output>): grpc.ClientUnaryCall;
  
  History(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  History(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  History(argument: _immudb_schema_HistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  History(argument: _immudb_schema_HistoryRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  history(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  history(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  history(argument: _immudb_schema_HistoryRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  history(argument: _immudb_schema_HistoryRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  
  KeepAlive(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  KeepAlive(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  KeepAlive(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  KeepAlive(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  keepAlive(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  keepAlive(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  keepAlive(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  keepAlive(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  ListTables(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  ListTables(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  ListTables(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  ListTables(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  listTables(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  listTables(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  listTables(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  listTables(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_SQLQueryResult__Output>): grpc.ClientUnaryCall;
  
  ListUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  ListUsers(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  listUsers(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_immudb_schema_UserList__Output>): grpc.ClientUnaryCall;
  
  LoadDatabase(argument: _immudb_schema_LoadDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  LoadDatabase(argument: _immudb_schema_LoadDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  LoadDatabase(argument: _immudb_schema_LoadDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  LoadDatabase(argument: _immudb_schema_LoadDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  loadDatabase(argument: _immudb_schema_LoadDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  loadDatabase(argument: _immudb_schema_LoadDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  loadDatabase(argument: _immudb_schema_LoadDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  loadDatabase(argument: _immudb_schema_LoadDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_LoadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _immudb_schema_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _immudb_schema_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _immudb_schema_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _immudb_schema_LoginRequest, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _immudb_schema_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _immudb_schema_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _immudb_schema_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _immudb_schema_LoginRequest, callback: grpc.requestCallback<_immudb_schema_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Logout(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Logout(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Logout(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logout(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logout(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logout(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  logout(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  NewTx(argument: _immudb_schema_NewTxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  NewTx(argument: _immudb_schema_NewTxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  NewTx(argument: _immudb_schema_NewTxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  NewTx(argument: _immudb_schema_NewTxRequest, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  newTx(argument: _immudb_schema_NewTxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  newTx(argument: _immudb_schema_NewTxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  newTx(argument: _immudb_schema_NewTxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  newTx(argument: _immudb_schema_NewTxRequest, callback: grpc.requestCallback<_immudb_schema_NewTxResponse__Output>): grpc.ClientUnaryCall;
  
  OpenSession(argument: _immudb_schema_OpenSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  OpenSession(argument: _immudb_schema_OpenSessionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  OpenSession(argument: _immudb_schema_OpenSessionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  OpenSession(argument: _immudb_schema_OpenSessionRequest, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  openSession(argument: _immudb_schema_OpenSessionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  openSession(argument: _immudb_schema_OpenSessionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  openSession(argument: _immudb_schema_OpenSessionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  openSession(argument: _immudb_schema_OpenSessionRequest, callback: grpc.requestCallback<_immudb_schema_OpenSessionResponse__Output>): grpc.ClientUnaryCall;
  
  Rollback(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Rollback(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Rollback(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Rollback(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  rollback(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  rollback(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  rollback(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  rollback(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  SQLExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  SQLExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  SQLExec(argument: _immudb_schema_SQLExecRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  SQLExec(argument: _immudb_schema_SQLExecRequest, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  sqlExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  sqlExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  sqlExec(argument: _immudb_schema_SQLExecRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  sqlExec(argument: _immudb_schema_SQLExecRequest, callback: grpc.requestCallback<_immudb_schema_SQLExecResult__Output>): grpc.ClientUnaryCall;
  
  SQLQuery(argument: _immudb_schema_SQLQueryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  SQLQuery(argument: _immudb_schema_SQLQueryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  sqlQuery(argument: _immudb_schema_SQLQueryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  sqlQuery(argument: _immudb_schema_SQLQueryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  
  Scan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  Scan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  Scan(argument: _immudb_schema_ScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  Scan(argument: _immudb_schema_ScanRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  scan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  scan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  scan(argument: _immudb_schema_ScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  scan(argument: _immudb_schema_ScanRequest, callback: grpc.requestCallback<_immudb_schema_Entries__Output>): grpc.ClientUnaryCall;
  
  Set(argument: _immudb_schema_SetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Set(argument: _immudb_schema_SetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Set(argument: _immudb_schema_SetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  Set(argument: _immudb_schema_SetRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  set(argument: _immudb_schema_SetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  set(argument: _immudb_schema_SetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  set(argument: _immudb_schema_SetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  set(argument: _immudb_schema_SetRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  
  SetActiveUser(argument: _immudb_schema_SetActiveUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetActiveUser(argument: _immudb_schema_SetActiveUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetActiveUser(argument: _immudb_schema_SetActiveUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetActiveUser(argument: _immudb_schema_SetActiveUserRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setActiveUser(argument: _immudb_schema_SetActiveUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setActiveUser(argument: _immudb_schema_SetActiveUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setActiveUser(argument: _immudb_schema_SetActiveUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setActiveUser(argument: _immudb_schema_SetActiveUserRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  SetReference(argument: _immudb_schema_ReferenceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  SetReference(argument: _immudb_schema_ReferenceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  SetReference(argument: _immudb_schema_ReferenceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  SetReference(argument: _immudb_schema_ReferenceRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  setReference(argument: _immudb_schema_ReferenceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  setReference(argument: _immudb_schema_ReferenceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  setReference(argument: _immudb_schema_ReferenceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  setReference(argument: _immudb_schema_ReferenceRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  
  TxById(argument: _immudb_schema_TxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  TxById(argument: _immudb_schema_TxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  TxById(argument: _immudb_schema_TxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  TxById(argument: _immudb_schema_TxRequest, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  txById(argument: _immudb_schema_TxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  txById(argument: _immudb_schema_TxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  txById(argument: _immudb_schema_TxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  txById(argument: _immudb_schema_TxRequest, callback: grpc.requestCallback<_immudb_schema_Tx__Output>): grpc.ClientUnaryCall;
  
  TxSQLExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  TxSQLExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  TxSQLExec(argument: _immudb_schema_SQLExecRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  TxSQLExec(argument: _immudb_schema_SQLExecRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  txSqlExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  txSqlExec(argument: _immudb_schema_SQLExecRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  txSqlExec(argument: _immudb_schema_SQLExecRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  txSqlExec(argument: _immudb_schema_SQLExecRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  TxSQLQuery(argument: _immudb_schema_SQLQueryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  TxSQLQuery(argument: _immudb_schema_SQLQueryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  txSqlQuery(argument: _immudb_schema_SQLQueryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  txSqlQuery(argument: _immudb_schema_SQLQueryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_SQLQueryResult__Output>;
  
  TxScan(argument: _immudb_schema_TxScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  TxScan(argument: _immudb_schema_TxScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  TxScan(argument: _immudb_schema_TxScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  TxScan(argument: _immudb_schema_TxScanRequest, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  txScan(argument: _immudb_schema_TxScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  txScan(argument: _immudb_schema_TxScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  txScan(argument: _immudb_schema_TxScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  txScan(argument: _immudb_schema_TxScanRequest, callback: grpc.requestCallback<_immudb_schema_TxList__Output>): grpc.ClientUnaryCall;
  
  UnloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UnloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UnloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UnloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  unloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  unloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  unloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  unloadDatabase(argument: _immudb_schema_UnloadDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_UnloadDatabaseResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateAuthConfig(argument: _immudb_schema_AuthConfig, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateAuthConfig(argument: _immudb_schema_AuthConfig, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateAuthConfig(argument: _immudb_schema_AuthConfig, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateAuthConfig(argument: _immudb_schema_AuthConfig, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateAuthConfig(argument: _immudb_schema_AuthConfig, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateAuthConfig(argument: _immudb_schema_AuthConfig, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateAuthConfig(argument: _immudb_schema_AuthConfig, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateAuthConfig(argument: _immudb_schema_AuthConfig, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  UpdateDatabase(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateDatabase(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateDatabase(argument: _immudb_schema_DatabaseSettings, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateDatabase(argument: _immudb_schema_DatabaseSettings, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateDatabase(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateDatabase(argument: _immudb_schema_DatabaseSettings, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateDatabase(argument: _immudb_schema_DatabaseSettings, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateDatabase(argument: _immudb_schema_DatabaseSettings, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  UpdateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UpdateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UpdateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  UpdateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  updateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  updateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  updateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  updateDatabaseV2(argument: _immudb_schema_UpdateDatabaseRequest, callback: grpc.requestCallback<_immudb_schema_UpdateDatabaseResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateMTLSConfig(argument: _immudb_schema_MTLSConfig, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMTLSConfig(argument: _immudb_schema_MTLSConfig, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMTLSConfig(argument: _immudb_schema_MTLSConfig, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMTLSConfig(argument: _immudb_schema_MTLSConfig, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateMtlsConfig(argument: _immudb_schema_MTLSConfig, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateMtlsConfig(argument: _immudb_schema_MTLSConfig, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateMtlsConfig(argument: _immudb_schema_MTLSConfig, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateMtlsConfig(argument: _immudb_schema_MTLSConfig, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  UseDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  UseDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  UseDatabase(argument: _immudb_schema_Database, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  UseDatabase(argument: _immudb_schema_Database, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  useDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  useDatabase(argument: _immudb_schema_Database, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  useDatabase(argument: _immudb_schema_Database, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  useDatabase(argument: _immudb_schema_Database, callback: grpc.requestCallback<_immudb_schema_UseDatabaseReply__Output>): grpc.ClientUnaryCall;
  
  VerifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  VerifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  VerifiableGet(argument: _immudb_schema_VerifiableGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  VerifiableGet(argument: _immudb_schema_VerifiableGetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  verifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  verifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  verifiableGet(argument: _immudb_schema_VerifiableGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  verifiableGet(argument: _immudb_schema_VerifiableGetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableEntry__Output>): grpc.ClientUnaryCall;
  
  VerifiableSQLGet(argument: _immudb_schema_VerifiableSQLGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  VerifiableSQLGet(argument: _immudb_schema_VerifiableSQLGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  VerifiableSQLGet(argument: _immudb_schema_VerifiableSQLGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  VerifiableSQLGet(argument: _immudb_schema_VerifiableSQLGetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  verifiableSqlGet(argument: _immudb_schema_VerifiableSQLGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  verifiableSqlGet(argument: _immudb_schema_VerifiableSQLGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  verifiableSqlGet(argument: _immudb_schema_VerifiableSQLGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  verifiableSqlGet(argument: _immudb_schema_VerifiableSQLGetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableSQLEntry__Output>): grpc.ClientUnaryCall;
  
  VerifiableSet(argument: _immudb_schema_VerifiableSetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSet(argument: _immudb_schema_VerifiableSetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSet(argument: _immudb_schema_VerifiableSetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSet(argument: _immudb_schema_VerifiableSetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSet(argument: _immudb_schema_VerifiableSetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSet(argument: _immudb_schema_VerifiableSetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSet(argument: _immudb_schema_VerifiableSetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSet(argument: _immudb_schema_VerifiableSetRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  
  VerifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableSetReference(argument: _immudb_schema_VerifiableReferenceRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  
  VerifiableTxById(argument: _immudb_schema_VerifiableTxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableTxById(argument: _immudb_schema_VerifiableTxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableTxById(argument: _immudb_schema_VerifiableTxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableTxById(argument: _immudb_schema_VerifiableTxRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableTxById(argument: _immudb_schema_VerifiableTxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableTxById(argument: _immudb_schema_VerifiableTxRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableTxById(argument: _immudb_schema_VerifiableTxRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableTxById(argument: _immudb_schema_VerifiableTxRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  
  VerifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  VerifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  verifiableZAdd(argument: _immudb_schema_VerifiableZAddRequest, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientUnaryCall;
  
  ZAdd(argument: _immudb_schema_ZAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ZAdd(argument: _immudb_schema_ZAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ZAdd(argument: _immudb_schema_ZAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  ZAdd(argument: _immudb_schema_ZAddRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  zAdd(argument: _immudb_schema_ZAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  zAdd(argument: _immudb_schema_ZAddRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  zAdd(argument: _immudb_schema_ZAddRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  zAdd(argument: _immudb_schema_ZAddRequest, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientUnaryCall;
  
  ZScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  ZScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  ZScan(argument: _immudb_schema_ZScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  ZScan(argument: _immudb_schema_ZScanRequest, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  zScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  zScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  zScan(argument: _immudb_schema_ZScanRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  zScan(argument: _immudb_schema_ZScanRequest, callback: grpc.requestCallback<_immudb_schema_ZEntries__Output>): grpc.ClientUnaryCall;
  
  exportTx(argument: _immudb_schema_ExportTxRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  exportTx(argument: _immudb_schema_ExportTxRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  exportTx(argument: _immudb_schema_ExportTxRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  exportTx(argument: _immudb_schema_ExportTxRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
  replicateTx(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  replicateTx(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  
  streamExecAll(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamExecAll(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  
  streamGet(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamGet(argument: _immudb_schema_KeyRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamGet(argument: _immudb_schema_KeyRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamGet(argument: _immudb_schema_KeyRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
  streamHistory(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamHistory(argument: _immudb_schema_HistoryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamHistory(argument: _immudb_schema_HistoryRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamHistory(argument: _immudb_schema_HistoryRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
  streamScan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamScan(argument: _immudb_schema_ScanRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamScan(argument: _immudb_schema_ScanRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamScan(argument: _immudb_schema_ScanRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
  streamSet(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamSet(callback: grpc.requestCallback<_immudb_schema_TxHeader__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  
  streamVerifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamVerifiableGet(argument: _immudb_schema_VerifiableGetRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamVerifiableGet(argument: _immudb_schema_VerifiableGetRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamVerifiableGet(argument: _immudb_schema_VerifiableGetRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
  streamVerifiableSet(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(metadata: grpc.Metadata, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(options: grpc.CallOptions, callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  streamVerifiableSet(callback: grpc.requestCallback<_immudb_schema_VerifiableTx__Output>): grpc.ClientWritableStream<_immudb_schema_Chunk>;
  
  streamZScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamZScan(argument: _immudb_schema_ZScanRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamZScan(argument: _immudb_schema_ZScanRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  streamZScan(argument: _immudb_schema_ZScanRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_immudb_schema_Chunk__Output>;
  
}

export interface ImmuServiceHandlers extends grpc.UntypedServiceImplementation {
  ChangePassword: grpc.handleUnaryCall<_immudb_schema_ChangePasswordRequest__Output, _google_protobuf_Empty>;
  
  ChangePermission: grpc.handleUnaryCall<_immudb_schema_ChangePermissionRequest__Output, _google_protobuf_Empty>;
  
  CloseSession: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  Commit: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_CommittedSQLTx>;
  
  CompactIndex: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  Count: grpc.handleUnaryCall<_immudb_schema_KeyPrefix__Output, _immudb_schema_EntryCount>;
  
  CountAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_EntryCount>;
  
  CreateDatabase: grpc.handleUnaryCall<_immudb_schema_Database__Output, _google_protobuf_Empty>;
  
  CreateDatabaseV2: grpc.handleUnaryCall<_immudb_schema_CreateDatabaseRequest__Output, _immudb_schema_CreateDatabaseResponse>;
  
  CreateDatabaseWith: grpc.handleUnaryCall<_immudb_schema_DatabaseSettings__Output, _google_protobuf_Empty>;
  
  CreateUser: grpc.handleUnaryCall<_immudb_schema_CreateUserRequest__Output, _google_protobuf_Empty>;
  
  CurrentState: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_ImmutableState>;
  
  DatabaseHealth: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_DatabaseHealthResponse>;
  
  DatabaseList: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_DatabaseListResponse>;
  
  DatabaseListV2: grpc.handleUnaryCall<_immudb_schema_DatabaseListRequestV2__Output, _immudb_schema_DatabaseListResponseV2>;
  
  Delete: grpc.handleUnaryCall<_immudb_schema_DeleteKeysRequest__Output, _immudb_schema_TxHeader>;
  
  DeleteDatabase: grpc.handleUnaryCall<_immudb_schema_DeleteDatabaseRequest__Output, _immudb_schema_DeleteDatabaseResponse>;
  
  DescribeTable: grpc.handleUnaryCall<_immudb_schema_Table__Output, _immudb_schema_SQLQueryResult>;
  
  ExecAll: grpc.handleUnaryCall<_immudb_schema_ExecAllRequest__Output, _immudb_schema_TxHeader>;
  
  FlushIndex: grpc.handleUnaryCall<_immudb_schema_FlushIndexRequest__Output, _immudb_schema_FlushIndexResponse>;
  
  Get: grpc.handleUnaryCall<_immudb_schema_KeyRequest__Output, _immudb_schema_Entry>;
  
  GetAll: grpc.handleUnaryCall<_immudb_schema_KeyListRequest__Output, _immudb_schema_Entries>;
  
  GetDatabaseSettings: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_DatabaseSettings>;
  
  GetDatabaseSettingsV2: grpc.handleUnaryCall<_immudb_schema_DatabaseSettingsRequest__Output, _immudb_schema_DatabaseSettingsResponse>;
  
  Health: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_HealthResponse>;
  
  History: grpc.handleUnaryCall<_immudb_schema_HistoryRequest__Output, _immudb_schema_Entries>;
  
  KeepAlive: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  ListTables: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_SQLQueryResult>;
  
  ListUsers: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _immudb_schema_UserList>;
  
  LoadDatabase: grpc.handleUnaryCall<_immudb_schema_LoadDatabaseRequest__Output, _immudb_schema_LoadDatabaseResponse>;
  
  Login: grpc.handleUnaryCall<_immudb_schema_LoginRequest__Output, _immudb_schema_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  NewTx: grpc.handleUnaryCall<_immudb_schema_NewTxRequest__Output, _immudb_schema_NewTxResponse>;
  
  OpenSession: grpc.handleUnaryCall<_immudb_schema_OpenSessionRequest__Output, _immudb_schema_OpenSessionResponse>;
  
  Rollback: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _google_protobuf_Empty>;
  
  SQLExec: grpc.handleUnaryCall<_immudb_schema_SQLExecRequest__Output, _immudb_schema_SQLExecResult>;
  
  SQLQuery: grpc.handleServerStreamingCall<_immudb_schema_SQLQueryRequest__Output, _immudb_schema_SQLQueryResult>;
  
  Scan: grpc.handleUnaryCall<_immudb_schema_ScanRequest__Output, _immudb_schema_Entries>;
  
  Set: grpc.handleUnaryCall<_immudb_schema_SetRequest__Output, _immudb_schema_TxHeader>;
  
  SetActiveUser: grpc.handleUnaryCall<_immudb_schema_SetActiveUserRequest__Output, _google_protobuf_Empty>;
  
  SetReference: grpc.handleUnaryCall<_immudb_schema_ReferenceRequest__Output, _immudb_schema_TxHeader>;
  
  TxById: grpc.handleUnaryCall<_immudb_schema_TxRequest__Output, _immudb_schema_Tx>;
  
  TxSQLExec: grpc.handleUnaryCall<_immudb_schema_SQLExecRequest__Output, _google_protobuf_Empty>;
  
  TxSQLQuery: grpc.handleServerStreamingCall<_immudb_schema_SQLQueryRequest__Output, _immudb_schema_SQLQueryResult>;
  
  TxScan: grpc.handleUnaryCall<_immudb_schema_TxScanRequest__Output, _immudb_schema_TxList>;
  
  UnloadDatabase: grpc.handleUnaryCall<_immudb_schema_UnloadDatabaseRequest__Output, _immudb_schema_UnloadDatabaseResponse>;
  
  UpdateAuthConfig: grpc.handleUnaryCall<_immudb_schema_AuthConfig__Output, _google_protobuf_Empty>;
  
  UpdateDatabase: grpc.handleUnaryCall<_immudb_schema_DatabaseSettings__Output, _google_protobuf_Empty>;
  
  UpdateDatabaseV2: grpc.handleUnaryCall<_immudb_schema_UpdateDatabaseRequest__Output, _immudb_schema_UpdateDatabaseResponse>;
  
  UpdateMTLSConfig: grpc.handleUnaryCall<_immudb_schema_MTLSConfig__Output, _google_protobuf_Empty>;
  
  UseDatabase: grpc.handleUnaryCall<_immudb_schema_Database__Output, _immudb_schema_UseDatabaseReply>;
  
  VerifiableGet: grpc.handleUnaryCall<_immudb_schema_VerifiableGetRequest__Output, _immudb_schema_VerifiableEntry>;
  
  VerifiableSQLGet: grpc.handleUnaryCall<_immudb_schema_VerifiableSQLGetRequest__Output, _immudb_schema_VerifiableSQLEntry>;
  
  VerifiableSet: grpc.handleUnaryCall<_immudb_schema_VerifiableSetRequest__Output, _immudb_schema_VerifiableTx>;
  
  VerifiableSetReference: grpc.handleUnaryCall<_immudb_schema_VerifiableReferenceRequest__Output, _immudb_schema_VerifiableTx>;
  
  VerifiableTxById: grpc.handleUnaryCall<_immudb_schema_VerifiableTxRequest__Output, _immudb_schema_VerifiableTx>;
  
  VerifiableZAdd: grpc.handleUnaryCall<_immudb_schema_VerifiableZAddRequest__Output, _immudb_schema_VerifiableTx>;
  
  ZAdd: grpc.handleUnaryCall<_immudb_schema_ZAddRequest__Output, _immudb_schema_TxHeader>;
  
  ZScan: grpc.handleUnaryCall<_immudb_schema_ZScanRequest__Output, _immudb_schema_ZEntries>;
  
  exportTx: grpc.handleServerStreamingCall<_immudb_schema_ExportTxRequest__Output, _immudb_schema_Chunk>;
  
  replicateTx: grpc.handleClientStreamingCall<_immudb_schema_Chunk__Output, _immudb_schema_TxHeader>;
  
  streamExecAll: grpc.handleClientStreamingCall<_immudb_schema_Chunk__Output, _immudb_schema_TxHeader>;
  
  streamGet: grpc.handleServerStreamingCall<_immudb_schema_KeyRequest__Output, _immudb_schema_Chunk>;
  
  streamHistory: grpc.handleServerStreamingCall<_immudb_schema_HistoryRequest__Output, _immudb_schema_Chunk>;
  
  streamScan: grpc.handleServerStreamingCall<_immudb_schema_ScanRequest__Output, _immudb_schema_Chunk>;
  
  streamSet: grpc.handleClientStreamingCall<_immudb_schema_Chunk__Output, _immudb_schema_TxHeader>;
  
  streamVerifiableGet: grpc.handleServerStreamingCall<_immudb_schema_VerifiableGetRequest__Output, _immudb_schema_Chunk>;
  
  streamVerifiableSet: grpc.handleClientStreamingCall<_immudb_schema_Chunk__Output, _immudb_schema_VerifiableTx>;
  
  streamZScan: grpc.handleServerStreamingCall<_immudb_schema_ZScanRequest__Output, _immudb_schema_Chunk>;
  
}

export interface ImmuServiceDefinition extends grpc.ServiceDefinition {
  ChangePassword: MethodDefinition<_immudb_schema_ChangePasswordRequest, _google_protobuf_Empty, _immudb_schema_ChangePasswordRequest__Output, _google_protobuf_Empty__Output>
  ChangePermission: MethodDefinition<_immudb_schema_ChangePermissionRequest, _google_protobuf_Empty, _immudb_schema_ChangePermissionRequest__Output, _google_protobuf_Empty__Output>
  CloseSession: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  Commit: MethodDefinition<_google_protobuf_Empty, _immudb_schema_CommittedSQLTx, _google_protobuf_Empty__Output, _immudb_schema_CommittedSQLTx__Output>
  CompactIndex: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  Count: MethodDefinition<_immudb_schema_KeyPrefix, _immudb_schema_EntryCount, _immudb_schema_KeyPrefix__Output, _immudb_schema_EntryCount__Output>
  CountAll: MethodDefinition<_google_protobuf_Empty, _immudb_schema_EntryCount, _google_protobuf_Empty__Output, _immudb_schema_EntryCount__Output>
  CreateDatabase: MethodDefinition<_immudb_schema_Database, _google_protobuf_Empty, _immudb_schema_Database__Output, _google_protobuf_Empty__Output>
  CreateDatabaseV2: MethodDefinition<_immudb_schema_CreateDatabaseRequest, _immudb_schema_CreateDatabaseResponse, _immudb_schema_CreateDatabaseRequest__Output, _immudb_schema_CreateDatabaseResponse__Output>
  CreateDatabaseWith: MethodDefinition<_immudb_schema_DatabaseSettings, _google_protobuf_Empty, _immudb_schema_DatabaseSettings__Output, _google_protobuf_Empty__Output>
  CreateUser: MethodDefinition<_immudb_schema_CreateUserRequest, _google_protobuf_Empty, _immudb_schema_CreateUserRequest__Output, _google_protobuf_Empty__Output>
  CurrentState: MethodDefinition<_google_protobuf_Empty, _immudb_schema_ImmutableState, _google_protobuf_Empty__Output, _immudb_schema_ImmutableState__Output>
  DatabaseHealth: MethodDefinition<_google_protobuf_Empty, _immudb_schema_DatabaseHealthResponse, _google_protobuf_Empty__Output, _immudb_schema_DatabaseHealthResponse__Output>
  DatabaseList: MethodDefinition<_google_protobuf_Empty, _immudb_schema_DatabaseListResponse, _google_protobuf_Empty__Output, _immudb_schema_DatabaseListResponse__Output>
  DatabaseListV2: MethodDefinition<_immudb_schema_DatabaseListRequestV2, _immudb_schema_DatabaseListResponseV2, _immudb_schema_DatabaseListRequestV2__Output, _immudb_schema_DatabaseListResponseV2__Output>
  Delete: MethodDefinition<_immudb_schema_DeleteKeysRequest, _immudb_schema_TxHeader, _immudb_schema_DeleteKeysRequest__Output, _immudb_schema_TxHeader__Output>
  DeleteDatabase: MethodDefinition<_immudb_schema_DeleteDatabaseRequest, _immudb_schema_DeleteDatabaseResponse, _immudb_schema_DeleteDatabaseRequest__Output, _immudb_schema_DeleteDatabaseResponse__Output>
  DescribeTable: MethodDefinition<_immudb_schema_Table, _immudb_schema_SQLQueryResult, _immudb_schema_Table__Output, _immudb_schema_SQLQueryResult__Output>
  ExecAll: MethodDefinition<_immudb_schema_ExecAllRequest, _immudb_schema_TxHeader, _immudb_schema_ExecAllRequest__Output, _immudb_schema_TxHeader__Output>
  FlushIndex: MethodDefinition<_immudb_schema_FlushIndexRequest, _immudb_schema_FlushIndexResponse, _immudb_schema_FlushIndexRequest__Output, _immudb_schema_FlushIndexResponse__Output>
  Get: MethodDefinition<_immudb_schema_KeyRequest, _immudb_schema_Entry, _immudb_schema_KeyRequest__Output, _immudb_schema_Entry__Output>
  GetAll: MethodDefinition<_immudb_schema_KeyListRequest, _immudb_schema_Entries, _immudb_schema_KeyListRequest__Output, _immudb_schema_Entries__Output>
  GetDatabaseSettings: MethodDefinition<_google_protobuf_Empty, _immudb_schema_DatabaseSettings, _google_protobuf_Empty__Output, _immudb_schema_DatabaseSettings__Output>
  GetDatabaseSettingsV2: MethodDefinition<_immudb_schema_DatabaseSettingsRequest, _immudb_schema_DatabaseSettingsResponse, _immudb_schema_DatabaseSettingsRequest__Output, _immudb_schema_DatabaseSettingsResponse__Output>
  Health: MethodDefinition<_google_protobuf_Empty, _immudb_schema_HealthResponse, _google_protobuf_Empty__Output, _immudb_schema_HealthResponse__Output>
  History: MethodDefinition<_immudb_schema_HistoryRequest, _immudb_schema_Entries, _immudb_schema_HistoryRequest__Output, _immudb_schema_Entries__Output>
  KeepAlive: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  ListTables: MethodDefinition<_google_protobuf_Empty, _immudb_schema_SQLQueryResult, _google_protobuf_Empty__Output, _immudb_schema_SQLQueryResult__Output>
  ListUsers: MethodDefinition<_google_protobuf_Empty, _immudb_schema_UserList, _google_protobuf_Empty__Output, _immudb_schema_UserList__Output>
  LoadDatabase: MethodDefinition<_immudb_schema_LoadDatabaseRequest, _immudb_schema_LoadDatabaseResponse, _immudb_schema_LoadDatabaseRequest__Output, _immudb_schema_LoadDatabaseResponse__Output>
  Login: MethodDefinition<_immudb_schema_LoginRequest, _immudb_schema_LoginResponse, _immudb_schema_LoginRequest__Output, _immudb_schema_LoginResponse__Output>
  Logout: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  NewTx: MethodDefinition<_immudb_schema_NewTxRequest, _immudb_schema_NewTxResponse, _immudb_schema_NewTxRequest__Output, _immudb_schema_NewTxResponse__Output>
  OpenSession: MethodDefinition<_immudb_schema_OpenSessionRequest, _immudb_schema_OpenSessionResponse, _immudb_schema_OpenSessionRequest__Output, _immudb_schema_OpenSessionResponse__Output>
  Rollback: MethodDefinition<_google_protobuf_Empty, _google_protobuf_Empty, _google_protobuf_Empty__Output, _google_protobuf_Empty__Output>
  SQLExec: MethodDefinition<_immudb_schema_SQLExecRequest, _immudb_schema_SQLExecResult, _immudb_schema_SQLExecRequest__Output, _immudb_schema_SQLExecResult__Output>
  SQLQuery: MethodDefinition<_immudb_schema_SQLQueryRequest, _immudb_schema_SQLQueryResult, _immudb_schema_SQLQueryRequest__Output, _immudb_schema_SQLQueryResult__Output>
  Scan: MethodDefinition<_immudb_schema_ScanRequest, _immudb_schema_Entries, _immudb_schema_ScanRequest__Output, _immudb_schema_Entries__Output>
  Set: MethodDefinition<_immudb_schema_SetRequest, _immudb_schema_TxHeader, _immudb_schema_SetRequest__Output, _immudb_schema_TxHeader__Output>
  SetActiveUser: MethodDefinition<_immudb_schema_SetActiveUserRequest, _google_protobuf_Empty, _immudb_schema_SetActiveUserRequest__Output, _google_protobuf_Empty__Output>
  SetReference: MethodDefinition<_immudb_schema_ReferenceRequest, _immudb_schema_TxHeader, _immudb_schema_ReferenceRequest__Output, _immudb_schema_TxHeader__Output>
  TxById: MethodDefinition<_immudb_schema_TxRequest, _immudb_schema_Tx, _immudb_schema_TxRequest__Output, _immudb_schema_Tx__Output>
  TxSQLExec: MethodDefinition<_immudb_schema_SQLExecRequest, _google_protobuf_Empty, _immudb_schema_SQLExecRequest__Output, _google_protobuf_Empty__Output>
  TxSQLQuery: MethodDefinition<_immudb_schema_SQLQueryRequest, _immudb_schema_SQLQueryResult, _immudb_schema_SQLQueryRequest__Output, _immudb_schema_SQLQueryResult__Output>
  TxScan: MethodDefinition<_immudb_schema_TxScanRequest, _immudb_schema_TxList, _immudb_schema_TxScanRequest__Output, _immudb_schema_TxList__Output>
  UnloadDatabase: MethodDefinition<_immudb_schema_UnloadDatabaseRequest, _immudb_schema_UnloadDatabaseResponse, _immudb_schema_UnloadDatabaseRequest__Output, _immudb_schema_UnloadDatabaseResponse__Output>
  UpdateAuthConfig: MethodDefinition<_immudb_schema_AuthConfig, _google_protobuf_Empty, _immudb_schema_AuthConfig__Output, _google_protobuf_Empty__Output>
  UpdateDatabase: MethodDefinition<_immudb_schema_DatabaseSettings, _google_protobuf_Empty, _immudb_schema_DatabaseSettings__Output, _google_protobuf_Empty__Output>
  UpdateDatabaseV2: MethodDefinition<_immudb_schema_UpdateDatabaseRequest, _immudb_schema_UpdateDatabaseResponse, _immudb_schema_UpdateDatabaseRequest__Output, _immudb_schema_UpdateDatabaseResponse__Output>
  UpdateMTLSConfig: MethodDefinition<_immudb_schema_MTLSConfig, _google_protobuf_Empty, _immudb_schema_MTLSConfig__Output, _google_protobuf_Empty__Output>
  UseDatabase: MethodDefinition<_immudb_schema_Database, _immudb_schema_UseDatabaseReply, _immudb_schema_Database__Output, _immudb_schema_UseDatabaseReply__Output>
  VerifiableGet: MethodDefinition<_immudb_schema_VerifiableGetRequest, _immudb_schema_VerifiableEntry, _immudb_schema_VerifiableGetRequest__Output, _immudb_schema_VerifiableEntry__Output>
  VerifiableSQLGet: MethodDefinition<_immudb_schema_VerifiableSQLGetRequest, _immudb_schema_VerifiableSQLEntry, _immudb_schema_VerifiableSQLGetRequest__Output, _immudb_schema_VerifiableSQLEntry__Output>
  VerifiableSet: MethodDefinition<_immudb_schema_VerifiableSetRequest, _immudb_schema_VerifiableTx, _immudb_schema_VerifiableSetRequest__Output, _immudb_schema_VerifiableTx__Output>
  VerifiableSetReference: MethodDefinition<_immudb_schema_VerifiableReferenceRequest, _immudb_schema_VerifiableTx, _immudb_schema_VerifiableReferenceRequest__Output, _immudb_schema_VerifiableTx__Output>
  VerifiableTxById: MethodDefinition<_immudb_schema_VerifiableTxRequest, _immudb_schema_VerifiableTx, _immudb_schema_VerifiableTxRequest__Output, _immudb_schema_VerifiableTx__Output>
  VerifiableZAdd: MethodDefinition<_immudb_schema_VerifiableZAddRequest, _immudb_schema_VerifiableTx, _immudb_schema_VerifiableZAddRequest__Output, _immudb_schema_VerifiableTx__Output>
  ZAdd: MethodDefinition<_immudb_schema_ZAddRequest, _immudb_schema_TxHeader, _immudb_schema_ZAddRequest__Output, _immudb_schema_TxHeader__Output>
  ZScan: MethodDefinition<_immudb_schema_ZScanRequest, _immudb_schema_ZEntries, _immudb_schema_ZScanRequest__Output, _immudb_schema_ZEntries__Output>
  exportTx: MethodDefinition<_immudb_schema_ExportTxRequest, _immudb_schema_Chunk, _immudb_schema_ExportTxRequest__Output, _immudb_schema_Chunk__Output>
  replicateTx: MethodDefinition<_immudb_schema_Chunk, _immudb_schema_TxHeader, _immudb_schema_Chunk__Output, _immudb_schema_TxHeader__Output>
  streamExecAll: MethodDefinition<_immudb_schema_Chunk, _immudb_schema_TxHeader, _immudb_schema_Chunk__Output, _immudb_schema_TxHeader__Output>
  streamGet: MethodDefinition<_immudb_schema_KeyRequest, _immudb_schema_Chunk, _immudb_schema_KeyRequest__Output, _immudb_schema_Chunk__Output>
  streamHistory: MethodDefinition<_immudb_schema_HistoryRequest, _immudb_schema_Chunk, _immudb_schema_HistoryRequest__Output, _immudb_schema_Chunk__Output>
  streamScan: MethodDefinition<_immudb_schema_ScanRequest, _immudb_schema_Chunk, _immudb_schema_ScanRequest__Output, _immudb_schema_Chunk__Output>
  streamSet: MethodDefinition<_immudb_schema_Chunk, _immudb_schema_TxHeader, _immudb_schema_Chunk__Output, _immudb_schema_TxHeader__Output>
  streamVerifiableGet: MethodDefinition<_immudb_schema_VerifiableGetRequest, _immudb_schema_Chunk, _immudb_schema_VerifiableGetRequest__Output, _immudb_schema_Chunk__Output>
  streamVerifiableSet: MethodDefinition<_immudb_schema_Chunk, _immudb_schema_VerifiableTx, _immudb_schema_Chunk__Output, _immudb_schema_VerifiableTx__Output>
  streamZScan: MethodDefinition<_immudb_schema_ZScanRequest, _immudb_schema_Chunk, _immudb_schema_ZScanRequest__Output, _immudb_schema_Chunk__Output>
}
