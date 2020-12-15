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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
class ImmudbClient {
    constructor(config) {
        this.util = new util_1.default();
        this.proofs = new proofs_1.default();
        this.root = new root_1.default();
        const { host, port, certs, rootPath } = config;
        this._auth = grpc.credentials.createInsecure();
        if (certs) {
            this._auth = grpc.credentials.createSsl();
        }
        this.client = new services.ImmuServiceClient(`${host}:${port}`, this._auth);
        this._metadata = new grpc.Metadata();
        if (rootPath) {
            this.root && this.root.setRootPath({
                path: rootPath
            });
        }
    }
    shutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            this.root && this.root.commit();
            process.exit(0);
        });
    }
    login(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, password } = params;
                const req = new messages.LoginRequest();
                req.setUser(this.util.utf8Encode(user));
                req.setPassword(this.util.utf8Encode(password));
                this.client.login(req)
                    .then((res) => {
                    this._token = res && res.getToken();
                    this._metadata && this._metadata.remove('authorization');
                    this._metadata && this._metadata.add('authorization', 'Bearer ' + this._token);
                    return {
                        token: this._token,
                        warning: this.util.utf8Decode(res && res.getWarning())
                    };
                })
                    .catch((err) => {
                    console.error('Login Error', err);
                    throw new Error('Login Error');
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    createDatabase(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Database();
                req.setDatabasename(params && params.databasename);
                this.client.createDatabase(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Create database error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    useDatabase(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Database();
                req.setDatabasename(params && params.databasename);
                this.client.useDatabase(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Use database error');
                    }
                    const token = res && res.getToken();
                    this._metadata && this._metadata.remove('authorization');
                    this._metadata && this._metadata.add('authorization', 'Bearer ' + token);
                    this._activeDatabase = params && params.databasename;
                    this.currentRoot()
                        .then(() => {
                        return {
                            token
                        };
                    })
                        .catch((err) => {
                        throw new Error(err);
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    set(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.KeyValue();
                req.setKey(this.util && this.util.utf8Encode(params && params.key));
                req.setValue(this.util && this.util.utf8Encode(params && params.value));
                this.client.set(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Set error');
                    }
                    return {
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    get(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Key();
                req.setKey(this.util && this.util.utf8Encode(params && params.key));
                this.client.get(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Get error');
                    }
                    return {
                        key: this.util && this.util.utf8Decode(res && res.getKey()),
                        value: this.util && this.util.utf8Decode(res && res.getValue()),
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    listDatabases() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                this.client.databaseList(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('List databases error');
                    }
                    const dl = res && res.getDatabasesList();
                    const l = [];
                    for (let i = 0; dl && i < dl.length; i++) {
                        l.push(dl[i].getDatabasename());
                    }
                    return {
                        databases: l
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    changePermission(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.ChangePermissionRequest();
                req.setAction(params && params.action);
                req.setPermission(params && params.permission);
                req.setUsername(params && params.username);
                req.setDatabase(params && params.database);
                this.client.changePermission(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Change permission error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    listUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                this.client.listUsers(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('List users error');
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
                            username: this.util && this.util.utf8Decode(u.getUser()),
                            permissions: p,
                            createdBy: u.getCreatedby(),
                            createdAt: u.getCreatedat(),
                            active: u.getActive()
                        });
                    }
                    return {
                        users: l
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.CreateUserRequest();
                req.setUser(this.util && this.util.utf8Encode(params && params.user));
                req.setPassword(this.util && this.util.utf8Encode(params && params.password));
                req.setPermission(params && params.permission);
                req.setDatabase(params && params.database);
                this.client.createUser(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Create user error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    changePassword(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.ChangePasswordRequest();
                req.setUser(this.util && this.util.utf8Encode(params && params.user));
                req.setOldpassword(this.util && this.util.utf8Encode(params && params.oldpassword));
                req.setNewpassword(this.util && this.util.utf8Encode(params && params.newpassword));
                this.client.changePassword(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Change password error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                this.client.logout(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Logout error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    setActiveUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.SetActiveUserRequest();
                req.setUsername(params && params.username);
                req.setActive(params && params.active);
                this.client.setActiveUser(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Set active user error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    printTree() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                this.client.printTree(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Print tree error');
                    }
                    const result = [];
                    const tl = res && res.getTList();
                    for (let i = 0; tl && i < tl.length; i++) {
                        let layer = tl[i];
                        const ll = layer.getLList();
                        const nodes = [];
                        for (let j = 0; j < ll.length; j++) {
                            let node = ll[j];
                            let refk = node.getRefk() == ''
                                ? node.getRefk() :
                                this.util && this.util.utf8Decode(node.getRefk());
                            nodes.push({
                                h: this.util && this.util.base64Encode(node.getH()),
                                i: this.util && this.util.base64Encode(node.getI()),
                                refk: refk,
                                ref: node.getRef(),
                                cache: node.getCache(),
                                root: node.getRoot()
                            });
                        }
                        result.push(nodes);
                    }
                    return {
                        tree: result
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    health() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                const call = this.client.health(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Health error');
                    }
                    this._serverVersion = res && res.getVersion().split(' ')[1];
                    return {
                        status: res && res.getStatus(),
                        version: res && res.getVersion()
                    };
                });
                call.on('this._metadata', (meta) => {
                    this._serverUUID = meta.get('immudb-uuid')[0];
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    count(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.KeyPrefix();
                req.setPrefix(this.util && this.util.utf8Encode(params && params.prefix));
                this.client.count(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Count error');
                    }
                    return {
                        count: res && res.getCount()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    scan(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.ScanOptions();
                req.setPrefix(this.util && this.util.utf8Encode(params && params.prefix));
                req.setOffset(this.util && this.util.utf8Encode(params && params.offset));
                req.setLimit(params && params.limit);
                req.setReverse(params && params.reverse);
                req.setDeep(params && params.deep);
                this.client.scan(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Scan error');
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
                    return {
                        items: result
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    byIndex(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Index();
                req.setIndex(params && params.index);
                this.client.byIndex(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('By index error');
                    }
                    return {
                        key: this.util && this.util.utf8Decode(res && res.getKey()),
                        value: this.util && this.util.utf8Decode(res && res.getValue()),
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    history(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.HistoryOptions();
                req.setKey(this.util && this.util.utf8Encode(params && params.key));
                req.setOffset(params && params.offset);
                req.setLimit(params && params.limit);
                req.setReverse(params && params.reverse);
                this.client.history(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('History error');
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
                    return {
                        items: result
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    zScan(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.ZScanOptions();
                req.setSet(this.util && this.util.utf8Encode(params && params.set));
                req.setOffset(this.util && this.util.utf8Encode(params && params.offset));
                req.setLimit(params && params.limit);
                req.setReverse(params && params.reverse);
                this.client.zScan(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('zScan error');
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
                    return {
                        items: result
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    iScan(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.IScanOptions();
                req.setPagesize(params && params.pagesize);
                req.setPagenumber(params && params.pagenumber);
                this.client.iScan(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('iScan error');
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
                    return {
                        items: result,
                        more: res && res.getMore()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    currentRoot() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new empty.Empty();
                this.client.currentRoot(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Current root error');
                    }
                    let payload = res && res.getPayload();
                    let signature = res && res.getSignature();
                    this.root && this.root.set({
                        server: this._serverUUID,
                        database: this._activeDatabase,
                        root: payload && payload.getRoot(),
                        index: payload && payload.getIndex()
                    });
                    return {
                        rootIndex: {
                            index: payload && payload.getIndex(),
                            root: payload && payload.getRoot()
                        },
                        signature: {
                            signature: signature && signature.getSignature(),
                            publicKey: signature && signature.getPublickey()
                        }
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    zAdd(params) {
        return __awaiter(this, void 0, void 0, function* () {
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
                this.client.zAdd(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('zAdd error');
                    }
                    return {
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    reference(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.ReferenceOptions();
                req.setReference(this.util && this.util.utf8Encode(params && params.reference));
                req.setKey(this.util && this.util.utf8Encode(params && params.key));
                this.client.reference(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Reference error');
                    }
                    ;
                    return {
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    setBatch(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.KVList();
                for (let i = 0; params && params.kvsList && i < params.kvsList.length; i++) {
                    const kv = new messages.KeyValue();
                    kv.setKey(this.util && this.util.utf8Encode(params && params.kvsList[i].key));
                    kv.setValue(this.util && this.util.utf8Encode(params && params.kvsList[i].value));
                    req.addKvs(kv);
                }
                this.client.setBatch(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Set batch error');
                    }
                    return {
                        index: res && res.getIndex()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    getBatch(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const l = [];
                for (let i = 0; params && params.keysList && i < params.keysList.length; i++) {
                    const key = new messages.Key();
                    key.setKey(this.util && this.util.utf8Encode(params && params.keysList[i].key));
                    l.push(key);
                }
                const req = new messages.KeyList();
                req.setKeysList(l);
                this.client.getBatch(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Get batch error');
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
                    return {
                        items: result
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    safeSet(params) {
        return __awaiter(this, void 0, void 0, function* () {
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
                this.client.safeSet(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('SafeSet error');
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
                        return {
                            index: res && res.getIndex()
                        };
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    safeGet(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const index = new messages.Index();
                index.setIndex(this.root && this.root.get({
                    server: this._serverUUID,
                    database: this._activeDatabase
                }).index);
                const req = new messages.SafeGetOptions();
                req.setKey(this.util && this.util.utf8Encode(params && params.key));
                req.setRootindex(index);
                this.client.safeGet(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('SafeGet error');
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
                        return {
                            key: this.util && this.util.utf8Decode(item.getKey()),
                            value: this.util && this.util.utf8Decode(item.getValue()),
                            index: item.getIndex()
                        };
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    updateAuthConfig(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.AuthConfig();
                req.setKind(params && params.kind);
                this.client.updateAuthConfig(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Update auth config error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    updateMTLSConfig(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.MTLSConfig();
                req.setEnabled(params && params.enabled);
                this.client.updateMTLSConfig(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('Update mtls config error');
                    }
                    return {};
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    safeZAdd(params) {
        return __awaiter(this, void 0, void 0, function* () {
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
                this.client.safeZAdd(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('safeZAdd error');
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
                        return {
                            index: res && res.getIndex()
                        };
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    inclusion(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Index();
                req.setIndex(params && params.index);
                this.client.inclusion(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('inclusion error');
                    }
                    return {
                        at: res && res.getAt(),
                        index: res && res.getIndex(),
                        root: res && res.getRoot(),
                        leaf: res && res.getLeaf(),
                        inclusionPath: res && res.getPathList()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    consistency(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = new messages.Index();
                req.setIndex(params && params.index);
                this.client.consistency(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('consistency error');
                    }
                    ;
                    return {
                        oldRootIndex: res && res.getFirst(),
                        at: res && res.getSecond(),
                        oldRoot: res && res.getFirstroot(),
                        newRoot: res && res.getSecondroot(),
                        consistencyPath: res && res.getPathList()
                    };
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
    bySafeIndex(params) {
        return __awaiter(this, void 0, void 0, function* () {
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
                this.client.bySafeIndex(req, this._metadata, (err, res) => {
                    if (err) {
                        throw new Error('bySafeIndex error');
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
                        return {
                            key: this.util && this.util.utf8Decode(item.getKey()),
                            value: this.util && this.util.utf8Decode(item.getValue()),
                            index: item.getIndex()
                        };
                    });
                });
            }
            catch (err) {
                console.error(err);
            }
            // Fallback in case of errors
            return new empty.Empty;
        });
    }
}
exports.default = ImmudbClient;
