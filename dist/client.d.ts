import 'dotenv/config';
import * as messages from './proto/schema_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';
import { Config } from './interfaces';
import Util from './util';
import Proofs from './proofs';
import Root from './root';
import * as types from './interfaces';
declare class ImmudbClient {
    util: Util;
    proofs: Proofs;
    root: Root;
    client: any;
    private _auth;
    private _token;
    private _metadata;
    private _activeDatabase;
    private _serverUUID;
    private _serverVersion;
    constructor(config: Config);
    shutdown(): Promise<void>;
    login(params: messages.LoginRequest.AsObject): Promise<messages.LoginResponse.AsObject | undefined>;
    createDatabase(params: messages.Database.AsObject): Promise<empty.Empty | undefined>;
    useDatabase(params: messages.Database.AsObject): Promise<messages.UseDatabaseReply.AsObject | undefined>;
    set(params: messages.KeyValue.AsObject): Promise<messages.Index.AsObject | undefined>;
    get(params: messages.Key.AsObject): Promise<messages.Item.AsObject | undefined>;
    listDatabases(): Promise<messages.DatabaseListResponse.AsObject | undefined>;
    changePermission(params: messages.ChangePermissionRequest.AsObject): Promise<empty.Empty | undefined>;
    listUsers(): Promise<messages.UserList.AsObject | undefined>;
    createUser(params: messages.CreateUserRequest.AsObject): Promise<empty.Empty | undefined>;
    changePassword(params: messages.ChangePasswordRequest.AsObject): Promise<empty.Empty | undefined>;
    logout(): Promise<empty.Empty | undefined>;
    setActiveUser(params: messages.SetActiveUserRequest.AsObject): Promise<empty.Empty | undefined>;
    health(): Promise<messages.HealthResponse.AsObject | undefined>;
    count(params: messages.KeyPrefix.AsObject): Promise<messages.ItemsCount.AsObject | undefined>;
    scan(params: messages.ScanOptions.AsObject): Promise<messages.ItemList.AsObject | undefined>;
    byIndex(params: messages.Index.AsObject): Promise<messages.Item.AsObject | undefined>;
    history(params: messages.HistoryOptions.AsObject): Promise<messages.ItemList.AsObject | undefined>;
    zScan(params: messages.ZScanOptions.AsObject): Promise<messages.ItemList.AsObject | undefined>;
    iScan(params: messages.IScanOptions.AsObject): Promise<messages.Page.AsObject | undefined>;
    currentRoot(): Promise<messages.Root.AsObject | undefined>;
    zAdd(params: types.SimpleZAddOptions.AsObject): Promise<messages.Index.AsObject | undefined>;
    reference(params: messages.ReferenceOptions.AsObject): Promise<messages.Index.AsObject | undefined>;
    setBatch(params: messages.KVList.AsObject): Promise<messages.Index.AsObject | undefined>;
    getBatch(params: messages.KeyList.AsObject): Promise<messages.ItemList.AsObject | undefined>;
    safeSet(params: messages.KeyValue.AsObject): Promise<messages.Index.AsObject | undefined>;
    safeGet(params: messages.Key.AsObject): Promise<messages.Item.AsObject | undefined>;
    updateAuthConfig(params: messages.AuthConfig.AsObject): Promise<empty.Empty | undefined>;
    updateMTLSConfig(params: messages.MTLSConfig.AsObject): Promise<empty.Empty | undefined>;
    safeZAdd(params: types.SimpleZAddOptions.AsObject): Promise<messages.Index.AsObject | undefined>;
    inclusion(params: messages.Index.AsObject): Promise<messages.InclusionProof.AsObject | undefined>;
    consistency(params: messages.Index.AsObject): Promise<messages.ConsistencyProof.AsObject | undefined>;
    bySafeIndex(params: messages.Index.AsObject): Promise<messages.Item.AsObject | undefined>;
}
export default ImmudbClient;
