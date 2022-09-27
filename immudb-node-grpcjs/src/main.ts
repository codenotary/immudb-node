import * as protoLoader from '@grpc/proto-loader'
import * as grpcjs from '@grpc/grpc-js'
import Long from 'long'
import { ProtoGrpcType } from './schema.js'
import { fileURLToPath } from 'node:url'


const protoPath = fileURLToPath(new URL('../schema.proto', import.meta.url))

export const grpcClientFactory = createGrpcClientFactory(
    protoPath
) 





/**
 * Creates grpc clients factory.
 *
 * @param protoPath - path to `.proto` file. 
 */
export function createGrpcClientFactory(protoPath: string) {

    const packageDefinition = protoLoader.loadSync(
        protoPath,
        {
            longs: Long,
            enums: String,
            bytes: Buffer,
            defaults: true,
            arrays: true,
            objects: true,
            oneofs: true,
            json: true,
        }
    )
            
    const packageApi = (
        grpcjs.loadPackageDefinition(packageDefinition) as unknown
    ) as ProtoGrpcType

    
    /**
     * Creates grpc client instance.
     */
    return function createGrpcClient(props: {
        /**
         * Host and optionally port, e.g. '127.0.0.1:3322'
         */
        address:        string, 
        /**
         * Credentials to be used by grpc channel, e.g. insecure, TLS, Mutual TLS...
         */
        credentials:    grpcjs.ChannelCredentials, 
        /**
         * Grpc client options, for example:
         * 
         * ```ts
         * {
         *   "grpc.max_send_message_length": 1<<4<<10<<10, // 32 * 1024 * 1024 = 32 MB
         *   "grpc.max_receive_message_length": 1<<4<<10<<10, // 32 * 1024 * 1024 = 32 MB
         * }
         * 
         * see also {@link ImmuGrpcClientOptions}
         * ```
         */
        options?:       grpcjs.ClientOptions | ImmuGrpcClientOptions,
    }) {
        return new packageApi.immudb.schema.ImmuService(
            props.address, 
            props.credentials, 
            props.options,
        )
    }

}


/**
 * Some useful Grpc channel options. To find more informations:
 * - for full list of options go see https://grpc.github.io/grpc/core/group__grpc__arg__keys.html
 * - for default values search https://github.com/grpc/grpc source code. 
 */
export type ImmuGrpcClientOptions = {
    /**
     * Default compression algorithm for the channel.
     */
    "grpc.default_compression_algorithm": grpcjs.compressionAlgorithms,


    /**
     * Is it permissible to send keepalive pings from the client 
     * without any outstanding streams. Value:
     * - `1`: keepalive without outstanding streams is allowed
     * - `0` (default): keepalive without outstanding streams is not allowed
     * 
     * @see https://github.com/grpc/grpc/blob/master/doc/keepalive.md
     */
    "grpc.keepalive_permit_without_calls": 0 | 1,
    /**
     * After a duration of this time the client/server pings its peer to see if
     * the transport is still alive. Default value is infinite (max number)
     * 
     * @see https://github.com/grpc/grpc/blob/master/doc/keepalive.md
     * 
     */
    "grpc.keepalive_time_ms": number,
    /**
     * After waiting for a duration of this time (in milliseconds), if the
     * keepalive ping sender does not receive the ping ack, it will close the
     * transport. Default value is 20000 (20 seconds).
     *
     * @see https://github.com/grpc/grpc/blob/master/doc/keepalive.md
     *
     */
    "grpc.keepalive_timeout_ms": number,


    /**
     * Maximum number of concurrent incoming streams to allow on a http2 connection.
     * Default value 4294967295
     * 
     * @see https://github.com/grpc/grpc/blob/master/src/core/ext/transport/chttp2/transport/http2_settings.cc#L51
     */
    "grpc.max_concurrent_streams": number,

    /**
     * Maximum message length (in bytes) that the channel can receive.
     * `-1` means unlimited (default).
     */
    "grpc.max_receive_message_length": number,
    /**
     * Maximum message length that the channel can send. `-1` means unlimited (default).
     */
    "grpc.max_send_message_length": number,
}


































// schema re-exports
export * from './schema.js'



// google re-exports

export * from './google/protobuf/Empty.js'
export * from './google/protobuf/ListValue.js'
export * from './google/protobuf/NullValue.js'
export * from './google/protobuf/Struct.js'
export * from './google/protobuf/Value.js'



// immu re-exports


export * from './immudb/schema/AuthConfig.js'
export * from './immudb/schema/ChangePasswordRequest.js'
export * from './immudb/schema/ChangePermissionRequest.js'
export * from './immudb/schema/Chunk.js'
export * from './immudb/schema/Column.js'
export * from './immudb/schema/CommittedSQLTx.js'
export * from './immudb/schema/CreateDatabaseRequest.js'
export * from './immudb/schema/CreateDatabaseResponse.js'
export * from './immudb/schema/CreateUserRequest.js'
export * from './immudb/schema/Database.js'
export * from './immudb/schema/DatabaseHealthResponse.js'
export * from './immudb/schema/DatabaseListRequestV2.js'
export * from './immudb/schema/DatabaseListResponse.js'
export * from './immudb/schema/DatabaseListResponseV2.js'
export * from './immudb/schema/DatabaseNullableSettings.js'
export * from './immudb/schema/DatabaseSettings.js'
export * from './immudb/schema/DatabaseSettingsRequest.js'
export * from './immudb/schema/DatabaseSettingsResponse.js'
export * from './immudb/schema/DatabaseWithSettings.js'
export * from './immudb/schema/DebugInfo.js'
export * from './immudb/schema/DeleteDatabaseRequest.js'
export * from './immudb/schema/DeleteDatabaseResponse.js'
export * from './immudb/schema/DeleteKeysRequest.js'
export * from './immudb/schema/DualProof.js'
export * from './immudb/schema/Entries.js'
export * from './immudb/schema/EntriesSpec.js'
export * from './immudb/schema/Entry.js'
export * from './immudb/schema/EntryCount.js'
export * from './immudb/schema/EntryTypeAction.js'
export * from './immudb/schema/EntryTypeSpec.js'
export * from './immudb/schema/ErrorInfo.js'
export * from './immudb/schema/ExecAllRequest.js'
export * from './immudb/schema/Expiration.js'
export * from './immudb/schema/ExportTxRequest.js'
export * from './immudb/schema/FlushIndexRequest.js'
export * from './immudb/schema/FlushIndexResponse.js'
export * from './immudb/schema/HealthResponse.js'
export * from './immudb/schema/HistoryRequest.js'
export * from './immudb/schema/ImmuService.js'
export * from './immudb/schema/ImmutableState.js'
export * from './immudb/schema/InclusionProof.js'
export * from './immudb/schema/IndexNullableSettings.js'
export * from './immudb/schema/KVMetadata.js'
export * from './immudb/schema/Key.js'
export * from './immudb/schema/KeyListRequest.js'
export * from './immudb/schema/KeyPrefix.js'
export * from './immudb/schema/KeyRequest.js'
export * from './immudb/schema/KeyValue.js'
export * from './immudb/schema/LinearProof.js'
export * from './immudb/schema/LoadDatabaseRequest.js'
export * from './immudb/schema/LoadDatabaseResponse.js'
export * from './immudb/schema/LoginRequest.js'
export * from './immudb/schema/LoginResponse.js'
export * from './immudb/schema/MTLSConfig.js'
export * from './immudb/schema/NamedParam.js'
export * from './immudb/schema/NewTxRequest.js'
export * from './immudb/schema/NewTxResponse.js'
export * from './immudb/schema/NullableBool.js'
export * from './immudb/schema/NullableFloat.js'
export * from './immudb/schema/NullableString.js'
export * from './immudb/schema/NullableUint32.js'
export * from './immudb/schema/NullableUint64.js'
export * from './immudb/schema/Op.js'
export * from './immudb/schema/OpenSessionRequest.js'
export * from './immudb/schema/OpenSessionResponse.js'
export * from './immudb/schema/Permission.js'
export * from './immudb/schema/PermissionAction.js'
export * from './immudb/schema/Precondition.js'
export * from './immudb/schema/Reference.js'
export * from './immudb/schema/ReferenceRequest.js'
export * from './immudb/schema/ReplicationNullableSettings.js'
export * from './immudb/schema/RetryInfo.js'
export * from './immudb/schema/Row.js'
export * from './immudb/schema/SQLEntry.js'
export * from './immudb/schema/SQLExecRequest.js'
export * from './immudb/schema/SQLExecResult.js'
export * from './immudb/schema/SQLGetRequest.js'
export * from './immudb/schema/SQLQueryRequest.js'
export * from './immudb/schema/SQLQueryResult.js'
export * from './immudb/schema/SQLValue.js'
export * from './immudb/schema/ScanRequest.js'
export * from './immudb/schema/Score.js'
export * from './immudb/schema/SetActiveUserRequest.js'
export * from './immudb/schema/SetRequest.js'
export * from './immudb/schema/Signature.js'
export * from './immudb/schema/Table.js'
export * from './immudb/schema/Tx.js'
export * from './immudb/schema/TxEntry.js'
export * from './immudb/schema/TxHeader.js'
export * from './immudb/schema/TxList.js'
export * from './immudb/schema/TxMetadata.js'
export * from './immudb/schema/TxMode.js'
export * from './immudb/schema/TxRequest.js'
export * from './immudb/schema/TxScanRequest.js'
export * from './immudb/schema/UnloadDatabaseRequest.js'
export * from './immudb/schema/UnloadDatabaseResponse.js'
export * from './immudb/schema/UpdateDatabaseRequest.js'
export * from './immudb/schema/UpdateDatabaseResponse.js'
export * from './immudb/schema/UseDatabaseReply.js'
export * from './immudb/schema/UseSnapshotRequest.js'
export * from './immudb/schema/User.js'
export * from './immudb/schema/UserList.js'
export * from './immudb/schema/UserRequest.js'
export * from './immudb/schema/VerifiableEntry.js'
export * from './immudb/schema/VerifiableGetRequest.js'
export * from './immudb/schema/VerifiableReferenceRequest.js'
export * from './immudb/schema/VerifiableSQLEntry.js'
export * from './immudb/schema/VerifiableSQLGetRequest.js'
export * from './immudb/schema/VerifiableSetRequest.js'
export * from './immudb/schema/VerifiableTx.js'
export * from './immudb/schema/VerifiableTxRequest.js'
export * from './immudb/schema/VerifiableZAddRequest.js'
export * from './immudb/schema/ZAddRequest.js'
export * from './immudb/schema/ZEntries.js'
export * from './immudb/schema/ZEntry.js'
export * from './immudb/schema/ZScanRequest.js'
