"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.StatePersistenceTypes = void 0;
var fs_1 = require("fs");
var schemaTypes = require("./proto/schema_pb");
var empty = require("google-protobuf/google/protobuf/empty_pb");
var Signals;
(function (Signals) {
    Signals["EXIT"] = "exit";
    Signals["SIGINT"] = "SIGINT";
    Signals["UNCAUGHT_EXCEPTION"] = "uncaughtException";
})(Signals || (Signals = {}));
var StatePersistenceTypes;
(function (StatePersistenceTypes) {
    StatePersistenceTypes["FILE"] = "file";
    StatePersistenceTypes["COOKIE"] = "cookie";
    StatePersistenceTypes["LOCALSTORAGE"] = "localStorage";
})(StatePersistenceTypes = exports.StatePersistenceTypes || (exports.StatePersistenceTypes = {}));
var State = /** @class */ (function () {
    function State(_a) {
        var _this = this;
        var client = _a.client, _b = _a.rootPath, rootPath = _b === void 0 ? 'root' : _b, statePersistenceType = _a.statePersistenceType;
        var handleExit = function () {
            _this.exitHandler();
        };
        process.on(Signals.EXIT, handleExit);
        process.on(Signals.SIGINT, handleExit);
        process.on(Signals.UNCAUGHT_EXCEPTION, handleExit);
        this.client = client;
        this.rootPath = rootPath;
        this.statePersistenceType = statePersistenceType;
        this.servers = this.getInitialState();
    }
    State.prototype.get = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var serverName, databaseName, server, state, db, txid, txhash, signature, iState, sgntr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serverName = config.serverName, databaseName = config.databaseName;
                        server = this.servers[serverName];
                        if (!(server !== undefined)) return [3 /*break*/, 4];
                        state = server[databaseName];
                        if (!(state !== undefined || Object.keys(state).length === 0)) return [3 /*break*/, 1];
                        db = state.db, txid = state.txid, txhash = state.txhash, signature = state.signature;
                        iState = new schemaTypes.ImmutableState();
                        iState.setDb(db);
                        iState.setTxid(txid);
                        iState.setTxhash(txhash);
                        if (signature !== undefined) {
                            sgntr = new schemaTypes.Signature();
                            sgntr.setSignature(signature.signature);
                            sgntr.setPublickey(signature.publickey);
                            iState.setSignature(sgntr);
                        }
                        return [2 /*return*/, iState];
                    case 1: return [4 /*yield*/, this.getCurrentState(config)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.getCurrentState(config)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    State.prototype.getCurrentState = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var databaseName, metadata;
            var _this = this;
            return __generator(this, function (_a) {
                databaseName = config.databaseName, metadata = config.metadata;
                return [2 /*return*/, new Promise(function (resolve, reject) { return _this.client.currentState(new empty.Empty(), metadata, function (err, res) {
                        var _a;
                        if (err) {
                            reject(err);
                        }
                        var stateObject = {
                            db: res.getDb(),
                            txid: res.getTxid(),
                            txhash: res.getTxhash_asU8(),
                            signature: (_a = res.getSignature()) === null || _a === void 0 ? void 0 : _a.toObject()
                        };
                        var state = new schemaTypes.ImmutableState();
                        var sgntr = new schemaTypes.Signature();
                        if (stateObject.signature !== undefined) {
                            sgntr.setSignature(stateObject.signature.signature);
                            sgntr.setPublickey(stateObject.signature.publickey);
                        }
                        state.setDb(databaseName);
                        state.setTxid(stateObject.txid);
                        state.setTxhash(stateObject.txhash);
                        state.setSignature(sgntr);
                        _this.set(config, stateObject);
                        resolve(state);
                    }); })];
            });
        });
    };
    State.prototype.set = function (_a, state) {
        var serverName = _a.serverName, databaseName = _a.databaseName;
        var server = this.servers[serverName] || {};
        server[databaseName] = state;
        this.servers[serverName] = server;
    };
    State.prototype.getInitialState = function () {
        try {
            return this.statePersistenceType === StatePersistenceTypes.COOKIE
                ? this.getStateFromCookie()
                : this.statePersistenceType === StatePersistenceTypes.LOCALSTORAGE
                    ? this.getStateFromLocalStorage()
                    : this.getStateFromFile();
        }
        catch (err) {
            console.error(err);
            throw new Error('Error getting initial state');
        }
    };
    State.prototype.commit = function () {
        try {
            var data = this.stringifyServers();
            this.statePersistenceType === StatePersistenceTypes.COOKIE
                ? this.setStateInCookie(data)
                : this.statePersistenceType === StatePersistenceTypes.LOCALSTORAGE
                    ? this.setStateInLocalStorage(data)
                    : this.setStateInFile(data);
        }
        catch (err) {
            console.error(err);
        }
    };
    State.prototype.exitHandler = function () {
        this.commit();
    };
    State.prototype.stringifyServers = function () {
        var _this = this;
        var serverNames = Object.keys(this.servers);
        var servers = serverNames.reduce(function (sAcc, serverName) {
            var _a;
            var databaseNames = Object.keys(_this.servers[serverName]);
            var databases = databaseNames.reduce(function (dAcc, databaseName) {
                var _a;
                var state = _this.servers[serverName][databaseName];
                var txhash = Array.from(state.txhash);
                var newState = Object.assign({}, state, { txhash: txhash });
                return Object.assign({}, dAcc, (_a = {}, _a[databaseName] = newState, _a));
            }, {});
            return Object.assign({}, sAcc, (_a = {}, _a[serverName] = databases, _a));
        }, {});
        return JSON.stringify(servers);
    };
    State.prototype.parseServers = function (stringifiedServers) {
        var data = JSON.parse(stringifiedServers);
        var serverNames = Object.keys(data);
        var servers = serverNames.reduce(function (sAcc, serverName) {
            var _a;
            var databaseNames = Object.keys(data[serverName]);
            var databases = databaseNames.reduce(function (dAcc, databaseName) {
                var _a;
                var state = data[serverName][databaseName];
                var txhash = new Uint8Array(state.txhash);
                var newState = Object.assign({}, state, { txhash: txhash });
                return Object.assign({}, dAcc, (_a = {}, _a[databaseName] = newState, _a));
            }, {});
            return Object.assign({}, sAcc, (_a = {}, _a[serverName] = databases, _a));
        }, {});
        return servers;
    };
    State.prototype.getStateFromCookie = function () {
        var name = this.rootPath + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return this.parseServers(c.substring(name.length, c.length));
            }
        }
        return {};
    };
    // TODO: @Temii implement localStorage state persistence handling
    State.prototype.getStateFromLocalStorage = function () {
        return {};
    };
    // TODO: @Temii implement IndexedDB state persistence handling
    State.prototype.getStateFromIndexedDB = function () {
        return {};
    };
    State.prototype.getStateFromFile = function () {
        if (fs_1["default"].existsSync(this.rootPath)) {
            var rawdata = fs_1["default"].readFileSync(this.rootPath, 'utf-8');
            return this.parseServers(rawdata);
        }
        else {
            return {};
        }
    };
    State.prototype.setStateInFile = function (data) {
        fs_1["default"].writeFileSync(this.rootPath, data);
    };
    State.prototype.setStateInCookie = function (data) {
        var date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        var expires = "expires=" + date.toUTCString();
        document.cookie = this.rootPath + "=" + data + ";" + expires + ";path=/;samesite=strict;";
    };
    // TODO: @Temii implement localStorage state persistence handling
    State.prototype.setStateInLocalStorage = function (data) { };
    // TODO: @Temii implement IndexedDB state persistence handling
    State.prototype.setStateInIndexedDB = function (data) { };
    return State;
}());
exports["default"] = State;
