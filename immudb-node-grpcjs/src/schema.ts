import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ImmuServiceClient as _immudb_schema_ImmuServiceClient, ImmuServiceDefinition as _immudb_schema_ImmuServiceDefinition } from './immudb/schema/ImmuService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
      ListValue: MessageTypeDefinition
      NullValue: EnumTypeDefinition
      Struct: MessageTypeDefinition
      Value: MessageTypeDefinition
    }
  }
  immudb: {
    schema: {
      AuthConfig: MessageTypeDefinition
      ChangePasswordRequest: MessageTypeDefinition
      ChangePermissionRequest: MessageTypeDefinition
      Chunk: MessageTypeDefinition
      Column: MessageTypeDefinition
      CommittedSQLTx: MessageTypeDefinition
      CreateDatabaseRequest: MessageTypeDefinition
      CreateDatabaseResponse: MessageTypeDefinition
      CreateUserRequest: MessageTypeDefinition
      Database: MessageTypeDefinition
      DatabaseHealthResponse: MessageTypeDefinition
      DatabaseListRequestV2: MessageTypeDefinition
      DatabaseListResponse: MessageTypeDefinition
      DatabaseListResponseV2: MessageTypeDefinition
      DatabaseNullableSettings: MessageTypeDefinition
      DatabaseSettings: MessageTypeDefinition
      DatabaseSettingsRequest: MessageTypeDefinition
      DatabaseSettingsResponse: MessageTypeDefinition
      DatabaseWithSettings: MessageTypeDefinition
      DebugInfo: MessageTypeDefinition
      DeleteDatabaseRequest: MessageTypeDefinition
      DeleteDatabaseResponse: MessageTypeDefinition
      DeleteKeysRequest: MessageTypeDefinition
      DualProof: MessageTypeDefinition
      Entries: MessageTypeDefinition
      EntriesSpec: MessageTypeDefinition
      Entry: MessageTypeDefinition
      EntryCount: MessageTypeDefinition
      EntryTypeAction: EnumTypeDefinition
      EntryTypeSpec: MessageTypeDefinition
      ErrorInfo: MessageTypeDefinition
      ExecAllRequest: MessageTypeDefinition
      Expiration: MessageTypeDefinition
      ExportTxRequest: MessageTypeDefinition
      FlushIndexRequest: MessageTypeDefinition
      FlushIndexResponse: MessageTypeDefinition
      HealthResponse: MessageTypeDefinition
      HistoryRequest: MessageTypeDefinition
      ImmuService: SubtypeConstructor<typeof grpc.Client, _immudb_schema_ImmuServiceClient> & { service: _immudb_schema_ImmuServiceDefinition }
      ImmutableState: MessageTypeDefinition
      InclusionProof: MessageTypeDefinition
      IndexNullableSettings: MessageTypeDefinition
      KVMetadata: MessageTypeDefinition
      Key: MessageTypeDefinition
      KeyListRequest: MessageTypeDefinition
      KeyPrefix: MessageTypeDefinition
      KeyRequest: MessageTypeDefinition
      KeyValue: MessageTypeDefinition
      LinearProof: MessageTypeDefinition
      LoadDatabaseRequest: MessageTypeDefinition
      LoadDatabaseResponse: MessageTypeDefinition
      LoginRequest: MessageTypeDefinition
      LoginResponse: MessageTypeDefinition
      MTLSConfig: MessageTypeDefinition
      NamedParam: MessageTypeDefinition
      NewTxRequest: MessageTypeDefinition
      NewTxResponse: MessageTypeDefinition
      NullableBool: MessageTypeDefinition
      NullableFloat: MessageTypeDefinition
      NullableString: MessageTypeDefinition
      NullableUint32: MessageTypeDefinition
      NullableUint64: MessageTypeDefinition
      Op: MessageTypeDefinition
      OpenSessionRequest: MessageTypeDefinition
      OpenSessionResponse: MessageTypeDefinition
      Permission: MessageTypeDefinition
      PermissionAction: EnumTypeDefinition
      Precondition: MessageTypeDefinition
      Reference: MessageTypeDefinition
      ReferenceRequest: MessageTypeDefinition
      ReplicationNullableSettings: MessageTypeDefinition
      RetryInfo: MessageTypeDefinition
      Row: MessageTypeDefinition
      SQLEntry: MessageTypeDefinition
      SQLExecRequest: MessageTypeDefinition
      SQLExecResult: MessageTypeDefinition
      SQLGetRequest: MessageTypeDefinition
      SQLQueryRequest: MessageTypeDefinition
      SQLQueryResult: MessageTypeDefinition
      SQLValue: MessageTypeDefinition
      ScanRequest: MessageTypeDefinition
      Score: MessageTypeDefinition
      SetActiveUserRequest: MessageTypeDefinition
      SetRequest: MessageTypeDefinition
      Signature: MessageTypeDefinition
      Table: MessageTypeDefinition
      Tx: MessageTypeDefinition
      TxEntry: MessageTypeDefinition
      TxHeader: MessageTypeDefinition
      TxList: MessageTypeDefinition
      TxMetadata: MessageTypeDefinition
      TxMode: EnumTypeDefinition
      TxRequest: MessageTypeDefinition
      TxScanRequest: MessageTypeDefinition
      UnloadDatabaseRequest: MessageTypeDefinition
      UnloadDatabaseResponse: MessageTypeDefinition
      UpdateDatabaseRequest: MessageTypeDefinition
      UpdateDatabaseResponse: MessageTypeDefinition
      UseDatabaseReply: MessageTypeDefinition
      UseSnapshotRequest: MessageTypeDefinition
      User: MessageTypeDefinition
      UserList: MessageTypeDefinition
      UserRequest: MessageTypeDefinition
      VerifiableEntry: MessageTypeDefinition
      VerifiableGetRequest: MessageTypeDefinition
      VerifiableReferenceRequest: MessageTypeDefinition
      VerifiableSQLEntry: MessageTypeDefinition
      VerifiableSQLGetRequest: MessageTypeDefinition
      VerifiableSetRequest: MessageTypeDefinition
      VerifiableTx: MessageTypeDefinition
      VerifiableTxRequest: MessageTypeDefinition
      VerifiableZAddRequest: MessageTypeDefinition
      ZAddRequest: MessageTypeDefinition
      ZEntries: MessageTypeDefinition
      ZEntry: MessageTypeDefinition
      ZScanRequest: MessageTypeDefinition
    }
  }
}

