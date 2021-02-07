"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const grpc = __importStar(require("@grpc/grpc-js"));
const empty = __importStar(require("google-protobuf/google/protobuf/empty_pb"));
const messages = __importStar(require("./proto/schema_pb"));
const services = __importStar(require("./proto/schema_grpc_pb"));
const util_1 = __importDefault(require("./util"));
const proofs_1 = __importDefault(require("./proofs"));
const state_1 = __importDefault(require("./state"));
const CLIENT_INIT_PREFIX = 'ImmudbClient:';
const DEFAULT_DATABASE = 'defaultdb';
const DEFAULT_ROOTPATH = 'root';
class ImmudbClient {
    constructor(config) {
        this.util = new util_1.default();
        this.proofs = new proofs_1.default();
        this.state = new state_1.default();
        const host = (config && config.host) || process.env.IMMUDB_HOST || '127.0.0.1';
        const port = (config && config.port) || process.env.IMMUDB_PORT || '3322';
        const certs = config && config.certs;
        const rootPath = (config && config.rootPath) || DEFAULT_ROOTPATH;
        // init insecure grpc auth
        this._auth = grpc.credentials.createInsecure();
        // init secure grpc auth
        certs && (this._auth = grpc.credentials.createSsl());
        // initialize client from service
        this.client = new services.ImmuServiceClient(`${host}:${port}`, this._auth);
        // init empty grpc metadata
        this._metadata = new grpc.Metadata();
        // init state
        rootPath && this.state && this.state.setRootPath({ path: rootPath });
    }
    static async getInstance(config) {
        const util = new util_1.default();
        const user = (config && config.user) || process.env.IMMUDB_USER;
        const password = (config && config.password) || process.env.IMMUDB_PWD;
        const databasename = (config && config.database) || process.env.IMMUDB_DEFAULT_DB;
        const autoLogin = config && config.autoLogin !== undefined ? config.autoLogin : true;
        const autoDatabase = config && config.autoDatabase !== undefined ? config.autoDatabase : true;
        try {
            if (!ImmudbClient.instance) {
                console.log(`${CLIENT_INIT_PREFIX} creating new ImmudbClient instance with config`, '\n', `${util.maskConfig(config)}`);
                ImmudbClient.instance = new ImmudbClient(config);
                console.log(`${CLIENT_INIT_PREFIX} init new instance`);
                await ImmudbClient.instance.initClient(user, password, databasename, autoLogin, autoDatabase);
            }
            else {
                console.log(`${CLIENT_INIT_PREFIX} using already available ImmudbClient instance`);
            }
            return new Promise((resolve) => resolve(ImmudbClient.instance));
        }
        catch (err) {
            await ImmudbClient.instance.shutdown();
            return new Promise((reject) => reject(err));
        }
    }
    async initClient(user, password, databasename, autoLogin = true, autoDatabase = true) {
        // by default automatically manage user login with dotenv variables
        if (autoLogin) {
            // login
            if (user && password) {
                const resLogin = await this.login({ user, password });
                const token = resLogin ? this.util.maskString(resLogin.token) : '';
                console.log('ImmudbClient: login', token);
            }
        }
        else {
            console.log(`${CLIENT_INIT_PREFIX} skipped automatic init login (manual client login is required)`);
            if (autoDatabase) {
                console.warn(`${CLIENT_INIT_PREFIX} it's not possible to 'autoDatabase' if 'autoLogin' is set to false`, '\n', `(the following ops will fallback to use '${DEFAULT_DATABASE}' database)`);
            }
        }
        // by default automatically manage database ops with dotenv variables
        if (autoLogin && autoDatabase) {
            // get current database list
            const resList = await this.listDatabases();
            if (resList && resList && resList.databasesList.some((_) => String(_) === databasename)) {
                // useDatabase database specified if it
                // already exists
                await this.useDatabase({ databasename: DEFAULT_DATABASE });
                console.log(`${CLIENT_INIT_PREFIX} useDatabase  '${DEFAULT_DATABASE}'`);
            }
            else if (databasename) {
                // run createDatabase and useDatabase if databasename
                // is different than the default one
                await this.createDatabase({ databasename });
                console.log(`${CLIENT_INIT_PREFIX} createDatabase '${databasename}'`);
                await this.useDatabase({ databasename });
                console.log(`${CLIENT_INIT_PREFIX} useDatabase '${databasename}'`);
            }
            else {
                // run createDatabase and useDatabase if default
                // databasename is missing
                await this.useDatabase({ databasename: DEFAULT_DATABASE });
                console.log(`${CLIENT_INIT_PREFIX} useDatabase '${databasename}'`);
            }
        }
        else {
            console.log(`${CLIENT_INIT_PREFIX} skipped automatic init database`, '\n', `(manual client database ops are required, '${DEFAULT_DATABASE}' database will be used otherwise)`);
        }
        // fetch health status
        this.healthCheck();
    }
    async shutdown() {
        this.state && this.state.commit();
        this.logout();
        process.exit(0);
    }
    async login(params) {
        try {
            const { user, password } = params;
            const req = new messages.LoginRequest();
            req.setUser(this.util.utf8Encode(user));
            req.setPassword(this.util.utf8Encode(password));
            return new Promise((resolve, reject) => this.client.login(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Login Error', err);
                    return reject(err);
                }
                this._token = res && res.getToken();
                this._metadata && this._metadata.remove('authorization');
                this._metadata && this._metadata.add('authorization', `Bearer ${this._token}`);
                resolve({
                    token: this._token,
                    warning: this.util.utf8Decode(res && res.getWarning()),
                });
            }));
        }
        catch (err) {
            console.error('Login Error', err);
        }
    }
    async createDatabase(params) {
        try {
            const req = new messages.Database();
            req.setDatabasename(params && params.databasename);
            return new Promise((resolve, reject) => this.client.createDatabase(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Create database error');
                    return reject(err);
                }
                return resolve(new empty.Empty());
            }));
        }
        catch (err) {
            console.error('Create database error', err);
        }
    }
    async useDatabase(params) {
        try {
            const req = new messages.Database();
            req.setDatabasename(params && params.databasename);
            return new Promise((resolve, reject) => this.client.useDatabase(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Use database error', err);
                    return reject(err);
                }
                else {
                    const token = res && res.getToken();
                    this._metadata && this._metadata.remove('authorization');
                    this._metadata && this._metadata.add('authorization', `Bearer ${token}`);
                    this._activeDatabase = params && params.databasename;
                    this.currentState()
                        .then(() => ({ token }))
                        .catch((err) => {
                        console.error('Use database error', err);
                        throw new Error('Use database error');
                    });
                    // @ts-ignore
                    resolve();
                }
            }));
        }
        catch (err) {
            console.error('Use database error', err);
        }
    }
    async set(params) {
        try {
            const req = new messages.SetRequest();
            const kv = new messages.KeyValue();
            kv.setKey(this.util && this.util.utf8Encode(params && params.key));
            kv.setValue(this.util && this.util.utf8Encode(params && params.value));
            req.setKvsList([kv]);
            return new Promise((resolve, reject) => this.client.set(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Set error', err);
                    return reject(err);
                }
                resolve({
                    id: res && res.getId(),
                    prevalh: res && res.getPrevalh(),
                    ts: res && res.getTs(),
                    nentries: res && res.getNentries(),
                    eh: res && res.getEh(),
                    bltxid: res && res.getBltxid(),
                    blroot: res && res.getBlroot(),
                });
            }));
        }
        catch (err) {
            console.error('Set error', err);
        }
    }
    async get(params) {
        try {
            const req = new messages.KeyRequest();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            return new Promise(resolve => this.client.get(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Get error', err);
                    throw new Error(err.message);
                }
                else {
                    resolve({
                        tx: res && res.getTx(),
                        key: this.util && this.util.utf8Decode(res && res.getKey()),
                        value: this.util && this.util.utf8Decode(res && res.getValue()),
                    });
                }
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async listDatabases() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.databaseList(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('List databases error', err);
                    return reject(err);
                }
                const dl = res && res.getDatabasesList();
                const l = [];
                for (let i = 0; dl && i < dl.length; i++) {
                    l.push(dl[i].toObject());
                }
                resolve({
                    databasesList: l,
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async changePermission(params) {
        try {
            const req = new messages.ChangePermissionRequest();
            req.setAction(params && params.action);
            req.setPermission(params && params.permission);
            req.setUsername(params && params.username);
            req.setDatabase(params && params.database);
            return new Promise((resolve, reject) => this.client.changePermission(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Change permission error', err);
                    return reject(err);
                }
                // @ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async listUsers() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.listUsers(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('List users error', err);
                    throw new Error(err.message);
                }
                const ul = res && res.getUsersList();
                const l = [];
                for (let i = 0; ul && i < ul.length; i++) {
                    const u = ul[i];
                    const pl = u.getPermissionsList();
                    const p = [];
                    for (let j = 0; j < pl.length; j++) {
                        p.push({
                            database: pl[j].getDatabase(),
                            permission: pl[j].getPermission(),
                        });
                    }
                    l.push({
                        user: this.util && this.util.utf8Decode(u.getUser()),
                        permissionsList: p,
                        createdby: u.getCreatedby(),
                        createdat: u.getCreatedat(),
                        active: u.getActive(),
                    });
                }
                resolve({
                    usersList: l,
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async createUser(params) {
        try {
            const req = new messages.CreateUserRequest();
            req.setUser(this.util && this.util.utf8Encode(params && params.user));
            req.setPassword(this.util && this.util.utf8Encode(params && params.password));
            req.setPermission(params && params.permission);
            req.setDatabase(params && params.database);
            return new Promise((resolve, reject) => this.client.createUser(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Create user error', err);
                    return reject(err);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async changePassword(params) {
        try {
            const req = new messages.ChangePasswordRequest();
            req.setUser(this.util && this.util.utf8Encode(params && params.user));
            req.setOldpassword(this.util && this.util.utf8Encode(params && params.oldpassword));
            req.setNewpassword(this.util && this.util.utf8Encode(params && params.newpassword));
            return new Promise((resolve, reject) => this.client.changePassword(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Change password error', err);
                    return reject(err);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async logout() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.logout(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Logout error', err);
                    throw new Error(err.message);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async setActiveUser(params) {
        try {
            const req = new messages.SetActiveUserRequest();
            req.setUsername(params && params.username);
            req.setActive(params && params.active);
            return new Promise((resolve, reject) => this.client.setActiveUser(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Set active user error', err);
                    return reject(err);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async healthCheck() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.health(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Health error', err);
                    return reject(err);
                }
                this._serverVersion = res && res.getVersion().split(' ')[1];
                resolve({
                    status: res && res.getStatus(),
                    version: res && res.getVersion(),
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async count(params) {
        try {
            const req = new messages.KeyPrefix();
            req.setPrefix(this.util && this.util.utf8Encode(params && params.prefix));
            return new Promise((resolve, reject) => this.client.count(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Count error', err);
                    return reject(err);
                }
                resolve({
                    count: res && res.getCount(),
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async countAll(params) {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.countAll(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Count all error', err);
                    return reject(err);
                }
                resolve({
                    count: res && res.getCount(),
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async scan(params) {
        try {
            const req = new messages.ScanRequest();
            req.setSeekkey(this.util && this.util.utf8Encode(params && params.seekkey));
            req.setPrefix(this.util && this.util.utf8Encode(params && params.prefix));
            req.setDesc(params.desc);
            req.setLimit(params.limit);
            req.setSincetx(params.sincetx);
            req.setNowait(params.nowait);
            return new Promise((resolve, reject) => this.client.scan(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Scan error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getEntriesList();
                for (let i = 0; il && i < il.length; i++) {
                    const item = il[i];
                    result.push({
                        tx: item.getTx(),
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                    });
                }
                resolve({
                    entriesList: result,
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async history({ key, offset, limit, desc, sincetx }) {
        try {
            const req = new messages.HistoryRequest();
            req.setKey(this.util && this.util.utf8Encode(key));
            req.setOffset(offset);
            req.setLimit(limit);
            req.setDesc(desc);
            req.setSincetx(sincetx);
            return new Promise((resolve, reject) => this.client.history(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('History error', err);
                    return reject(err);
                }
                const entriesList = res.getEntriesList();
                const result = entriesList.reduce((entries, entry) => entries.concat({
                    tx: entry.getTx(),
                    key: this.util && this.util.utf8Decode(entry.getKey()),
                    value: this.util && this.util.utf8Decode(entry.getValue()),
                }), []);
                resolve({
                    entriesList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async zScan({ set, seekkey, seekscore, seekattx, inclusiveseek, limit, desc, sincetx, nowait }) {
        try {
            const req = new messages.ZScanRequest();
            req.setSet(this.util && this.util.utf8Encode(set));
            req.setSeekkey(this.util && this.util.utf8Encode(seekkey));
            req.setSeekscore(seekscore);
            req.setSeekattx(seekattx);
            req.setInclusiveseek(inclusiveseek);
            req.setLimit(limit);
            req.setDesc(desc);
            req.setSincetx(sincetx);
            req.setNowait(nowait);
            return new Promise((resolve, reject) => this.client.zScan(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('zScan error', err);
                    return reject(err);
                }
                const entriesList = res.getEntriesList();
                const result = entriesList.reduce((entries, entry) => entries.concat({
                    set: this.util && this.util.utf8Decode(entry.getSet()),
                    key: this.util && this.util.utf8Decode(entry.getKey()),
                    score: entry.getScore(),
                    attx: entry.getAttx()
                }), []);
                resolve({
                    entriesList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async currentState() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.currentState(req, this._metadata, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    const signature = res && res.getSignature();
                    this.state &&
                        this.state.set(res.toObject());
                    resolve({
                        db: this._activeDatabase,
                        txid: res && res.getTxid(),
                        txhash: res && res.getTxhash(),
                        signature: {
                            signature: this.util && this.util.utf8Encode(signature && signature.getSignature()),
                            publickey: this.util && this.util.utf8Encode(signature && signature.getPublickey())
                        },
                    });
                }
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async currentRoot() {
        return this.currentState();
    }
    async zAdd(params) {
        return this.zAddAt(Object.assign(Object.assign({}, params), { attx: 0 }));
    }
    async zAddAt({ set, score = 0, key, attx = 0 }) {
        try {
            const req = new messages.ZAddRequest();
            req.setSet(this.util && this.util.utf8Encode(set));
            req.setScore(score);
            req.setKey(this.util && this.util.utf8Encode(key));
            req.setAttx(attx);
            req.setBoundref(attx > 0);
            return new Promise((resolve, reject) => this.client.zAdd(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('zAdd error', err);
                    return reject(err);
                }
                resolve({
                    id: res && res.getId(),
                    prevalh: res && res.getPrevalh(),
                    ts: res && res.getTs(),
                    nentries: res && res.getNentries(),
                    eh: res && res.getEh(),
                    bltxid: res && res.getBltxid(),
                    blroot: res && res.getBlroot(),
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    // async reference(
    //   params: messages.ReferenceOptions.AsObject
    // ): Promise<messages.Index.AsObject | undefined> {
    //   try {
    //     const req = new messages.ReferenceOptions();
    //     req.setReference(this.util && this.util.utf8Encode(params && params.reference));
    //     req.setKey(this.util && this.util.utf8Encode(params && params.key));
    //     return new Promise((resolve, reject) =>
    //       this.client.reference(req, this._metadata, (err: any, res: any) => {
    //         if (err) {
    //           console.error('Reference error', err);
    //           return reject(err);
    //         }
    //         resolve({
    //           index: res && res.getIndex(),
    //         });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    async setReference(params) {
        try {
            const req = new messages.ReferenceRequest();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            // req.setReferencedkey(this.util && this.util.utf8Encode(params && params.referencedkey));
            return new Promise((resolve, reject) => this.client.setReference(req, this._metadata, (err, res) => { }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async setReferenceAt() { }
    async verifiedSetReference() { }
    async verifiedSetReferenceAt() { }
    // async setBatch(params: messages.KVList.AsObject): Promise<messages.Index.AsObject | undefined> {
    //   try {
    //     const req = new messages.KVList();
    //     for (let i = 0; params && params.kvsList && i < params.kvsList.length; i++) {
    //       const kv = new messages.KeyValue();
    //       kv.setKey(this.util && this.util.utf8Encode(params && params.kvsList[i].key));
    //       kv.setValue(this.util && this.util.utf8Encode(params && params.kvsList[i].value));
    //       req.addKvs(kv);
    //     }
    //     return new Promise((resolve, reject) =>
    //       this.client.setBatch(req, this._metadata, (err: any, res: any) => {
    //         if (err) {
    //           console.error('Set batch error', err);
    //           return reject(err);
    //         }
    //         resolve({
    //           index: res && res.getIndex(),
    //         });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    async setAll() { }
    async execAll() { }
    // DEPRECATED async getBatch(
    //   params: messages.KeyList.AsObject
    // ): Promise<messages.ItemList.AsObject | undefined> {
    //   try {
    //     const l: Array<Key> = [];
    //     for (let i = 0; params && params.keysList && i < params.keysList.length; i++) {
    //       const key = new messages.Key();
    //       key.setKey(this.util && this.util.utf8Encode(params && params.keysList[i].key));
    //       l.push(key);
    //     }
    //     const req = new messages.KeyList();
    //     req.setKeysList(l);
    //     return new Promise((resolve, reject) =>
    //       this.client.getBatch(req, this._metadata, (err: any, res: any) => {
    //         if (err) {
    //           console.error('Get batch error', err);
    //           return reject(err);
    //         }
    //         const result: Array<Item.AsObject> = [];
    //         const il = res && res.getItemsList();
    //         for (let i = 0; il && i < il.length; i++) {
    //           const item = il[i];
    //           result.push({
    //             key: this.util && this.util.utf8Decode(item.getKey()),
    //             value: this.util && this.util.utf8Decode(item.getValue()),
    //             index: item.getIndex(),
    //           });
    //         }
    //         resolve({
    //           itemsList: result,
    //         });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    async getAll({ keysList, sincetx }) {
        try {
            const req = new messages.KeyListRequest();
            req.setKeysList(keysList);
            req.setSincetx(sincetx);
            return new Promise((resolve, reject) => this.client.getAll(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Get all error', err);
                    return reject(err);
                }
                const entriesList = res.getEntriesList();
                const result = entriesList.reduce((entries, entry) => entries.concat({
                    tx: entry.getTx(),
                    key: this.util && this.util.utf8Decode(entry.getKey()),
                    value: this.util && this.util.utf8Decode(entry.getValue()),
                }), []);
                resolve({
                    entriesList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    // async verifiedSet(
    //   params: messages.KeyValue.AsObject
    // ): Promise<messages.TxMetadata.AsObject | undefined> {
    //   try {
    //     const kv = new messages.KeyValue();
    //     kv.setKey(this.util && this.util.utf8Encode(params && params.key));
    //     kv.setValue(this.util && this.util.utf8Encode(params && params.value));
    //     // const index = new messages.Index();
    //     // index.setIndex(
    //     //   this.util &&
    //     //     this.root.get({
    //     //       server: this._serverUUID,
    //     //       database: this._activeDatabase,
    //     //     }).index
    //     // );
    //     const sr = new messages.SetRequest();
    //     sr.setKvsList([kv]);
    //     const req = new messages.VerifiableSetRequest();
    //     req.setSetrequest(sr);
    //     // req.setProvesincetx(index);
    //     return new Promise((resolve, reject) =>
    //       this.client.verifiableSet(req, this._metadata, (err, res) => {
    //         if (err) {
    //           console.error('SafeSet error', err);
    //           return reject(err);
    //         }
    //         const verifyReq = {
    //           proof: {
    //             inclusionPath: res && res.getInclusionpathList(),
    //             consistencyPath: res && res.getConsistencypathList(),
    //             index: res && res.getIndex(),
    //             at: res && res.getAt(),
    //             leaf: res && res.getLeaf(),
    //             root: res && res.getRoot(),
    //           },
    //           item: {
    //             key: this.util && this.util.utf8Encode(params && params.key),
    //             value: this.util && this.util.utf8Encode(params && params.value),
    //             index: res && res.getIndex(),
    //           },
    //           oldRoot:
    //             this.state &&
    //             this.state.get(),
    //         };
    //         this.proofs &&
    //           this.proofs.verify(verifyReq, (err: any) => {
    //             if (err) {
    //               return { err };
    //             }
    //             this.state &&
    //               this.state.set({
    //                 tx: res && res.getTx(),
    //                 server: this._serverUUID,
    //                 database: this._activeDatabase,
    //               });
    //             resolve({
    //               id: res && res.getId(),
    //               prevalh: res && res.getPrevalh(),
    //               ts: res && res.getTs(),
    //               nentries: res && res.getNentries(),
    //               eh: res && res.getEh(),
    //               bltxid: res && res.getBltxid(),
    //               blroot: res && res.getBlroot(),
    //             });
    //           });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // async safeSet(
    //   params: messages.KeyValue.AsObject
    // ): Promise<messages.TxMetadata.AsObject | undefined> {
    //   return this.verifiedSet(params);
    // }
    // async verifiedGet(params: messages.Key.AsObject): Promise<messages.Entry.AsObject | undefined> {
    //   try {
    //     // const index = new messages.Index();
    //     // index.setIndex(
    //     //   this.root &&
    //     //     this.root.get({
    //     //       server: this._serverUUID,
    //     //       database: this._activeDatabase,
    //     //     }).index
    //     // );
    //     const req = new messages.VerifiableGetRequest();
    //     const kr = new messages.KeyRequest();
    //     kr.setKey(this.util && this.util.utf8Encode(params && params.key));
    //     req.setKeyrequest(kr);
    //     // req.setRootindex(index);
    //     return new Promise((resolve, reject) =>
    //       this.client.verifiableGet(req, this._metadata, (err, res) => {
    //         if (err) {
    //           console.error('SafeGet error', err);
    //           return reject(err);
    //         }
    //         const proof = res && res.getProof();
    //         const item = res && res.getItem();
    //         const verifyReq = {
    //           proof: {
    //             inclusionPath: proof.getInclusionpathList(),
    //             consistencyPath: proof.getConsistencypathList(),
    //             index: proof.getIndex(),
    //             at: proof.getAt(),
    //             leaf: proof.getLeaf(),
    //             root: proof.getRoot(),
    //           },
    //           item: {
    //             key: item.getKey(),
    //             value: item.getValue(),
    //             index: item.getIndex(),
    //           },
    //           oldRoot:
    //             this.state &&
    //             this.state.get({
    //               server: this._serverUUID,
    //               database: this._activeDatabase,
    //             }),
    //         };
    //         this.proofs &&
    //           this.proofs.verify(verifyReq, (err: any) => {
    //             if (err) {
    //               return { err };
    //             }
    //             this.state &&
    //               this.state.set({
    //                 server: this._serverUUID,
    //                 database: this._activeDatabase,
    //                 root: proof.getRoot(),
    //                 index: proof.getAt(),
    //               });
    //             resolve({
    //               tx: res && res.getTx(),
    //               key: this.util && this.util.utf8Decode(item.getKey()),
    //               value: this.util && this.util.utf8Decode(item.getValue()),
    //             });
    //           });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // async safeGet(
    //   params: messages.Key.AsObject
    // ): Promise<messages.Entry.AsObject | undefined> {
    //   return this.verifiedGet(params);
    // }
    async updateAuthConfig(params) {
        try {
            const req = new messages.AuthConfig();
            req.setKind(params && params.kind);
            return new Promise((resolve, reject) => this.client.updateAuthConfig(req, this._metadata, err => {
                if (err) {
                    console.error('Update auth config error', err);
                    return reject(err);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async updateMTLSConfig(params) {
        try {
            const req = new messages.MTLSConfig();
            req.setEnabled(params && params.enabled);
            return new Promise((resolve, reject) => this.client.updateMTLSConfig(req, this._metadata, err => {
                if (err) {
                    console.error('Update mtls config error', err);
                    return reject(err);
                }
                //@ts-ignore
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    // async verifiedZAdd(
    //   params: types.SimpleZAddOptions.AsObject
    // ): Promise<messages.TxMetadata.AsObject | undefined> {
    //   try {
    //     // const index = new messages.Index();
    //     // index.setIndex(
    //     //   this.root &&
    //     //     this.root.get({
    //     //       server: this._serverUUID,
    //     //       database: this._activeDatabase,
    //     //     }).index
    //     // );
    //     const zar = new messages.ZAddRequest();
    //     zar.setSet(this.util && this.util.utf8Encode(params && params.set));
    //     zar.setScore(params.score || 0);
    //     zar.setKey(this.util && this.util.utf8Encode(params && params.key));
    //     const req = new messages.VerifiableZAddRequest();
    //     req.setZaddrequest(zar);
    //     // req.setProvesincetx(index);
    //     return new Promise((resolve, reject) =>
    //       this.client.verifiableZAdd(req, this._metadata, (err, res) => {
    //         if (err) {
    //           console.error('verifiedZAdd error', err);
    //           return reject(err);
    //         }
    //         const key2 =
    //           this.proofs &&
    //           this.proofs.setKey({
    //             key: this.util && this.util.utf8Encode(params && params.key),
    //             set: this.util && this.util.utf8Encode(params && params.set),
    //             score: params && params.score,
    //           });
    //         const verifyReq = {
    //           proof: {
    //             inclusionPath: res && res.getInclusionpathList(),
    //             consistencyPath: res && res.getConsistencypathList(),
    //             index: res && res.getIndex(),
    //             at: res && res.getAt(),
    //             leaf: res && res.getLeaf(),
    //             root: res && res.getRoot(),
    //           },
    //           item: {
    //             key: key2,
    //             value: this.util && this.util.utf8Encode(params && params.key),
    //             index: res && res.getIndex(),
    //           },
    //           oldRoot:
    //             this.state &&
    //             this.state.get({
    //               server: this._serverUUID,
    //               database: this._activeDatabase,
    //             }),
    //         };
    //         this.proofs &&
    //           this.proofs.verify(verifyReq, (err: any) => {
    //             if (err) {
    //               return { err };
    //             }
    //             this.state &&
    //               this.state.set({
    //                 server: this._serverUUID,
    //                 database: this._activeDatabase,
    //                 root: res && res.getRoot(),
    //                 index: res && res.getAt(),
    //               });
    //             resolve({
    //               id: res && res.getId(),
    //               prevalh: res && res.getPrevalh(),
    //               ts: res && res.getTs(),
    //               nentries: res && res.getNentries(),
    //               eh: res && res.getEh(),
    //               bltxid: res && res.getBltxid(),
    //               blroot: res && res.getBlroot(),
    //             });
    //           });
    //       })
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // async verifiedZAddAt (params: types.SimpleZAddOptions.AsObject): Promise<messages.TxMetadata.AsObject | undefined> {
    // }
    // async safeZAdd(
    //   params: types.SimpleZAddOptions.AsObject
    // ): Promise<messages.TxMetadata.AsObject | undefined> {
    //   return this.verifiedZAdd(params);
    // }
    async txById(params) {
        try {
            const req = new messages.TxRequest();
            params && req.setTx(params.tx);
            return new Promise((resolve, reject) => this.client.txById(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('txById error', err);
                    reject(err);
                }
                else {
                    const response = res.toObject();
                    resolve({
                        metadata: response.metadata,
                        entriesList: response.entriesList
                    });
                }
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    // async verifiedTxById(params: messages.TxRequest.AsObject): Promise<messages.Tx.AsObject> | undefined {}
    async setupDialOptions() { }
}
exports.default = ImmudbClient;
