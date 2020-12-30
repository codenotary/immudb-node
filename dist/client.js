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
require("dotenv/config");
const grpc = __importStar(require("@grpc/grpc-js"));
const messages = __importStar(require("./proto/schema_pb"));
const services = __importStar(require("./proto/schema_grpc_pb"));
const empty = __importStar(require("google-protobuf/google/protobuf/empty_pb"));
const util_1 = __importDefault(require("./util"));
const proofs_1 = __importDefault(require("./proofs"));
const root_1 = __importDefault(require("./root"));
const CLIENT_INIT_PREFIX = 'ImmudbClient:';
const DEFAULT_DATABASE = 'defaultdb';
class ImmudbClient {
    constructor(config) {
        this.util = new util_1.default();
        this.proofs = new proofs_1.default();
        this.root = new root_1.default();
        const host = config && config.host || process.env.IMMUDB_HOST || '127.0.0.1';
        const port = config && config.port || process.env.IMMUDB_PORT || '3322';
        const certs = config && config.certs;
        const rootPath = config && config.rootPath;
        // init insecure grpc auth
        this._auth = grpc.credentials.createInsecure();
        // init secure grpc auth
        certs && (this._auth = grpc.credentials.createSsl());
        // initialize client from service
        this.client = new services.ImmuServiceClient(`${host}:${port}`, this._auth);
        // init empty grpc metadata
        this._metadata = new grpc.Metadata();
        // init root
        rootPath && this.root && this.root.setRootPath({ path: rootPath });
    }
    static async getInstance(config) {
        const util = new util_1.default();
        const user = config && config.user || process.env.IMMUDB_USER;
        const password = config && config.password || process.env.IMMUDB_PWD;
        const databasename = config && config.database || process.env.IMMUDB_DEFAULT_DB;
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
        this.health();
    }
    async shutdown() {
        this.root && this.root.commit();
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
                this._metadata && this._metadata.add('authorization', 'Bearer ' + this._token);
                resolve({
                    token: this._token,
                    warning: this.util.utf8Decode(res && res.getWarning())
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
                resolve();
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
                const token = res && res.getToken();
                this._metadata && this._metadata.remove('authorization');
                this._metadata && this._metadata.add('authorization', 'Bearer ' + token);
                this._activeDatabase = params && params.databasename;
                this.currentRoot()
                    .then(() => ({ token }))
                    .catch((err) => { throw new Error('Use database error'); });
                resolve();
            }));
        }
        catch (err) {
            console.error('Use database error', err);
        }
    }
    async set(params) {
        try {
            const req = new messages.KeyValue();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            req.setValue(this.util && this.util.utf8Encode(params && params.value));
            return new Promise((resolve, reject) => this.client.set(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Set error', err);
                    return reject(err);
                }
                resolve({
                    index: res && res.getIndex()
                });
            }));
        }
        catch (err) {
            console.error('Set error', err);
        }
    }
    async get(params) {
        try {
            const req = new messages.Key();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            return new Promise((resolve, reject) => this.client.get(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Get error', err);
                    throw new Error(err);
                }
                resolve({
                    key: this.util && this.util.utf8Decode(res && res.getKey()),
                    value: this.util && this.util.utf8Decode(res && res.getValue()),
                    index: res && res.getIndex()
                });
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
                    l.push(dl[i].getDatabasename());
                }
                resolve({
                    databasesList: l
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
                    throw new Error(err);
                }
                const ul = res && res.getUsersList();
                const l = [];
                for (let i = 0; ul && i < ul.length; i++) {
                    let u = ul[i];
                    const pl = u.getPermissionsList();
                    const p = [];
                    for (let j = 0; j < pl.length; j++) {
                        p.push({
                            database: pl[j].getDatabase(),
                            permission: pl[j].getPermission()
                        });
                    }
                    l.push({
                        user: this.util && this.util.utf8Decode(u.getUser()),
                        permissionsList: p,
                        createdby: u.getCreatedby(),
                        createdat: u.getCreatedat(),
                        active: u.getActive()
                    });
                }
                resolve({
                    usersList: l
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
                    throw new Error(err);
                }
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
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    // async printTree (): Promise <messages.Tree.AsObject | undefined> {
    //     try {
    //         const req = new empty.Empty();
    //         return new Promise((resolve, reject) => this.client.printTree(req, this._metadata, (err: any, res: any) => {
    //             if (err) {
    //                 console.error('Print tree error', err);
    //                 return reject(err);
    //             }
    //             // const tList = [];
    //             const tList = new messages.Tree();
    //             const tl = res && res.getTList();
    //             for (let i = 0; tl && i < tl.length; i++) {
    //                 let layer = tl[i];
    //                 const ll = layer.getLList();
    //                 const lList = new messages.Layer();
    //                 for (let j = 0; j < ll.length; j++) {
    //                     let node = new messages.Node(ll[j]);
    //                     node.setI();
    //                     node.setH();
    //                     node.setRefk();
    //                     node.setRef();
    //                     node.setCache();
    //                     node.setRoot();
    //                     let refk = node.getRefk() == ''
    //                         ? node.getRefk() :
    //                         this.util && this.util.utf8Decode(node.getRefk());
    //                     lList.addL(<messages.Node.AsObject>{
    //                         i: this.util && this.util.base64Encode(node.getI()),
    //                         h: this.util && this.util.base64Encode(node.getH()),
    //                         refk: refk,
    //                         ref: node.getRef(),
    //                         cache: node.getCache(),
    //                         root: node.getRoot()
    //                     });
    //                 }
    //                 tList.addT(lList);
    //             }
    //             resolve({
    //                 tList: tList
    //             });
    //         }));
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    async health() {
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
                    version: res && res.getVersion()
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
                    count: res && res.getCount()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async scan(params) {
        try {
            const req = new messages.ScanOptions();
            req.setPrefix(this.util && this.util.utf8Encode(params && params.prefix));
            req.setOffset(this.util && this.util.utf8Encode(params && params.offset));
            req.setLimit(params && params.limit);
            req.setReverse(params && params.reverse);
            req.setDeep(params && params.deep);
            return new Promise((resolve, reject) => this.client.scan(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Scan error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getItemsList();
                for (let i = 0; il && i < il.length; i++) {
                    let item = il[i];
                    result.push({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                }
                resolve({
                    itemsList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async byIndex(params) {
        try {
            const req = new messages.Index();
            req.setIndex(params && params.index);
            return new Promise((resolve, reject) => this.client.byIndex(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('By index error', err);
                    return reject(err);
                }
                resolve({
                    key: this.util && this.util.utf8Decode(res && res.getKey()),
                    value: this.util && this.util.utf8Decode(res && res.getValue()),
                    index: res && res.getIndex()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async history(params) {
        try {
            const req = new messages.HistoryOptions();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            req.setOffset(params && params.offset);
            req.setLimit(params && params.limit);
            req.setReverse(params && params.reverse);
            return new Promise((resolve, reject) => this.client.history(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('History error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getItemsList();
                for (let i = 0; il && i < il.length; i++) {
                    let item = il[i];
                    result.push({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                }
                resolve({
                    itemsList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async zScan(params) {
        try {
            const req = new messages.ZScanOptions();
            req.setSet(this.util && this.util.utf8Encode(params && params.set));
            req.setOffset(this.util && this.util.utf8Encode(params && params.offset));
            req.setLimit(params && params.limit);
            req.setReverse(params && params.reverse);
            return new Promise((resolve, reject) => this.client.zScan(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('zScan error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getItemsList();
                for (let i = 0; il && i < il.length; i++) {
                    let item = il[i];
                    result.push({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                }
                resolve({
                    itemsList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async iScan(params) {
        try {
            const req = new messages.IScanOptions();
            req.setPagesize(params && params.pagesize);
            req.setPagenumber(params && params.pagenumber);
            return new Promise((resolve, reject) => this.client.iScan(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('iScan error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getItemsList();
                for (let i = 0; il && i < il.length; i++) {
                    let item = il[i];
                    result.push({
                        key: this.util && this.util.utf8Decode(item && item.getKey()),
                        value: this.util && this.util.utf8Decode(item && item.getValue()),
                        index: item && item.getIndex()
                    });
                }
                resolve({
                    itemsList: result,
                    more: res && res.getMore()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async currentRoot() {
        try {
            const req = new empty.Empty();
            return new Promise((resolve, reject) => this.client.currentRoot(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Current root error', err);
                    return reject(err);
                }
                let payload = res && res.getPayload();
                let signature = res && res.getSignature();
                this.root && this.root.set({
                    server: this._serverUUID,
                    database: this._activeDatabase,
                    root: payload && payload.getRoot(),
                    index: payload && payload.getIndex()
                });
                resolve({
                    payload: {
                        index: payload && payload.getIndex(),
                        root: payload && payload.getRoot()
                    },
                    signature: {
                        signature: signature && signature.getSignature(),
                        publickey: signature && signature.getPublickey()
                    }
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async zAdd(params) {
        try {
            const req = new messages.ZAddOptions();
            const score = new messages.Score();
            const index = new messages.Index();
            params && score.setScore(params.score || 0);
            params && index.setIndex(params.index || 0);
            req.setSet(this.util && this.util.utf8Encode(params && params.set));
            req.setScore(score);
            req.setIndex(index);
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            return new Promise((resolve, reject) => this.client.zAdd(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('zAdd error', err);
                    return reject(err);
                }
                resolve({
                    index: res && res.getIndex()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async reference(params) {
        try {
            const req = new messages.ReferenceOptions();
            req.setReference(this.util && this.util.utf8Encode(params && params.reference));
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            return new Promise((resolve, reject) => this.client.reference(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Reference error', err);
                    return reject(err);
                }
                ;
                resolve({
                    index: res && res.getIndex()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async setBatch(params) {
        try {
            const req = new messages.KVList();
            for (let i = 0; params && params.kvsList && i < params.kvsList.length; i++) {
                const kv = new messages.KeyValue();
                kv.setKey(this.util && this.util.utf8Encode(params && params.kvsList[i].key));
                kv.setValue(this.util && this.util.utf8Encode(params && params.kvsList[i].value));
                req.addKvs(kv);
            }
            return new Promise((resolve, reject) => this.client.setBatch(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Set batch error', err);
                    return reject(err);
                }
                resolve({
                    index: res && res.getIndex()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async getBatch(params) {
        try {
            const l = [];
            for (let i = 0; params && params.keysList && i < params.keysList.length; i++) {
                const key = new messages.Key();
                key.setKey(this.util && this.util.utf8Encode(params && params.keysList[i].key));
                l.push(key);
            }
            const req = new messages.KeyList();
            req.setKeysList(l);
            return new Promise((resolve, reject) => this.client.getBatch(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Get batch error', err);
                    return reject(err);
                }
                const result = [];
                const il = res && res.getItemsList();
                for (let i = 0; il && i < il.length; i++) {
                    let item = il[i];
                    result.push({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                }
                resolve({
                    itemsList: result
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async safeSet(params) {
        try {
            const kv = new messages.KeyValue();
            kv.setKey(this.util && this.util.utf8Encode(params && params.key));
            kv.setValue(this.util && this.util.utf8Encode(params && params.value));
            const index = new messages.Index();
            index.setIndex(this.util && this.root.get({
                server: this._serverUUID,
                database: this._activeDatabase
            }).index);
            const req = new messages.SafeSetOptions();
            req.setKv(kv);
            req.setRootindex(index);
            return new Promise((resolve, reject) => this.client.safeSet(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('SafeSet error', err);
                    return reject(err);
                }
                const verifyReq = {
                    proof: {
                        inclusionPath: res && res.getInclusionpathList(),
                        consistencyPath: res && res.getConsistencypathList(),
                        index: res && res.getIndex(),
                        at: res && res.getAt(),
                        leaf: res && res.getLeaf(),
                        root: res && res.getRoot(),
                    },
                    item: {
                        key: this.util && this.util.utf8Encode(params && params.key),
                        value: this.util && this.util.utf8Encode(params && params.value),
                        index: res && res.getIndex(),
                    },
                    oldRoot: this.root && this.root.get({
                        server: this._serverUUID,
                        database: this._activeDatabase
                    })
                };
                this.proofs && this.proofs.verify(verifyReq, (err) => {
                    if (err) {
                        return { err };
                    }
                    this.root && this.root.set({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                        root: res && res.getRoot(),
                        index: res && res.getAt()
                    });
                    resolve({
                        index: res && res.getIndex()
                    });
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async safeGet(params) {
        try {
            const index = new messages.Index();
            index.setIndex(this.root && this.root.get({
                server: this._serverUUID,
                database: this._activeDatabase
            }).index);
            const req = new messages.SafeGetOptions();
            req.setKey(this.util && this.util.utf8Encode(params && params.key));
            req.setRootindex(index);
            return new Promise((resolve, reject) => this.client.safeGet(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('SafeGet error', err);
                    return reject(err);
                }
                const proof = res && res.getProof();
                const item = res && res.getItem();
                const verifyReq = {
                    proof: {
                        inclusionPath: proof.getInclusionpathList(),
                        consistencyPath: proof.getConsistencypathList(),
                        index: proof.getIndex(),
                        at: proof.getAt(),
                        leaf: proof.getLeaf(),
                        root: proof.getRoot(),
                    },
                    item: {
                        key: item.getKey(),
                        value: item.getValue(),
                        index: item.getIndex(),
                    },
                    oldRoot: this.root && this.root.get({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                    })
                };
                this.proofs && this.proofs.verify(verifyReq, (err) => {
                    if (err) {
                        return { err };
                    }
                    this.root && this.root.set({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                        root: proof.getRoot(),
                        index: proof.getAt()
                    });
                    resolve({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async updateAuthConfig(params) {
        try {
            const req = new messages.AuthConfig();
            req.setKind(params && params.kind);
            return new Promise((resolve, reject) => this.client.updateAuthConfig(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Update auth config error', err);
                    return reject(err);
                }
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
            return new Promise((resolve, reject) => this.client.updateMTLSConfig(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('Update mtls config error', err);
                    return reject(err);
                }
                resolve();
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async safeZAdd(params) {
        try {
            const options = new messages.ZAddOptions();
            const score = new messages.Score();
            params && score.setScore(params.score || 0);
            options.setSet(this.util && this.util.utf8Encode(params && params.set));
            options.setScore(score);
            options.setKey(this.util && this.util.utf8Encode(params && params.key));
            const index = new messages.Index();
            index.setIndex(this.root && this.root.get({
                server: this._serverUUID,
                database: this._activeDatabase
            }).index);
            const req = new messages.SafeZAddOptions();
            req.setZopts(options);
            req.setRootindex(index);
            return new Promise((resolve, reject) => this.client.safeZAdd(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('safeZAdd error', err);
                    return reject(err);
                }
                let key2 = this.proofs && this.proofs.setKey({
                    key: this.util && this.util.utf8Encode(params && params.key),
                    set: this.util && this.util.utf8Encode(params && params.set),
                    score: params && params.score
                });
                const verifyReq = {
                    proof: {
                        inclusionPath: res && res.getInclusionpathList(),
                        consistencyPath: res && res.getConsistencypathList(),
                        index: res && res.getIndex(),
                        at: res && res.getAt(),
                        leaf: res && res.getLeaf(),
                        root: res && res.getRoot()
                    },
                    item: {
                        key: key2,
                        value: this.util && this.util.utf8Encode(params && params.key),
                        index: res && res.getIndex()
                    },
                    oldRoot: this.root && this.root.get({
                        server: this._serverUUID,
                        database: this._activeDatabase
                    })
                };
                this.proofs && this.proofs.verify(verifyReq, (err) => {
                    if (err) {
                        return { err };
                    }
                    this.root && this.root.set({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                        root: res && res.getRoot(),
                        index: res && res.getAt()
                    });
                    resolve({
                        index: res && res.getIndex()
                    });
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async inclusion(params) {
        try {
            const req = new messages.Index();
            req.setIndex(params && params.index);
            return new Promise((resolve, reject) => this.client.inclusion(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('inclusion error', err);
                    return reject(err);
                }
                resolve({
                    at: res && res.getAt(),
                    index: res && res.getIndex(),
                    root: res && res.getRoot(),
                    leaf: res && res.getLeaf(),
                    pathList: res && res.getPathList()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async consistency(params) {
        try {
            const req = new messages.Index();
            req.setIndex(params && params.index);
            return new Promise((resolve, reject) => this.client.consistency(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('consistency error', err);
                    return reject(err);
                }
                ;
                resolve({
                    first: res && res.getFirst(),
                    second: res && res.getSecond(),
                    firstroot: res && res.getFirstroot(),
                    secondroot: res && res.getSecondroot(),
                    pathList: res && res.getPathList()
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
    async bySafeIndex(params) {
        try {
            let oldRoot = this.root && this.root.get({
                server: this._serverUUID,
                database: this._activeDatabase,
            });
            const index = new messages.Index();
            index.setIndex(oldRoot.index);
            const req = new messages.SafeIndexOptions();
            req.setIndex(params && params.index);
            req.setRootindex(index);
            return new Promise((resolve, reject) => this.client.bySafeIndex(req, this._metadata, (err, res) => {
                if (err) {
                    console.error('bySafeIndex error', err);
                    return reject(err);
                }
                const proof = res && res.getProof();
                const item = res && res.getItem();
                const verifyReq = {
                    proof: {
                        inclusionPath: proof.getInclusionpathList(),
                        consistencyPath: proof.getConsistencypathList(),
                        index: proof.getIndex(),
                        at: proof.getAt(),
                        leaf: proof.getLeaf(),
                        root: proof.getRoot(),
                    },
                    item: {
                        key: item.getKey(),
                        value: item.getValue(),
                        index: item.getIndex()
                    },
                    oldRoot: oldRoot,
                };
                oldRoot = this.root && this.root.get({
                    server: this._serverUUID,
                    database: this._activeDatabase,
                });
                this.proofs && this.proofs.verify(verifyReq, (err) => {
                    if (err) {
                        return { err };
                    }
                    this.root && this.root.set({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                        root: proof.getRoot(),
                        index: proof.getAt(),
                    });
                    resolve({
                        key: this.util && this.util.utf8Decode(item.getKey()),
                        value: this.util && this.util.utf8Decode(item.getValue()),
                        index: item.getIndex()
                    });
                });
            }));
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = ImmudbClient;
