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
const fs_1 = __importDefault(require("fs"));
const process_1 = __importDefault(require("process"));
const schema_pb_1 = __importStar(require("./proto/schema_pb"));
var Signals;
(function (Signals) {
    Signals["EXIT"] = "exit";
    Signals["SIGINT"] = "SIGINT";
    Signals["UNCAUGHT_EXCEPTION"] = "uncaughtException";
})(Signals || (Signals = {}));
class State {
    constructor({ client, rootPath }) {
        process_1.default.on(Signals.EXIT, this.exitHandler);
        process_1.default.on(Signals.SIGINT, this.exitHandler);
        process_1.default.on(Signals.UNCAUGHT_EXCEPTION, this.exitHandler);
        this.servers = new Map();
        this.client = client;
        this.rootPath = rootPath;
        this.getStateFromFile();
    }
    set({ serverName, databaseName }, { db, txid, txhash, signature }) {
        const currentServer = this.servers.get(serverName) || new Map();
        const state = new schema_pb_1.default.ImmutableState();
        const sgntr = new schema_pb_1.Signature();
        if (signature !== undefined) {
            sgntr.setSignature(signature.signature);
        }
        state
            .setDb(db)
            .setTxid(txid)
            .setTxhash(txhash)
            .setSignature(sgntr);
        currentServer.set(databaseName, state);
        this.servers.set(serverName, currentServer);
    }
    async get(stateConfig) {
        const { serverName, databaseName } = stateConfig;
        const server = this.servers.get(serverName);
        if (server !== undefined) {
            const state = server.get(databaseName);
            if (state !== undefined) {
                return state;
            }
            else {
                this.setCurrentState(stateConfig);
                return this.get(stateConfig);
            }
        }
        else {
            this.setCurrentState(stateConfig);
            return this.get(stateConfig);
        }
    }
    async setCurrentState({ serverName, databaseName }) {
        const currentState = await this.client.currentState() || new schema_pb_1.default.ImmutableState().toObject();
        this.set({ serverName, databaseName }, currentState);
    }
    async getStateFromFile() {
        if (fs_1.default.existsSync(this.rootPath)) {
            const rawdata = fs_1.default.readFileSync(this.rootPath, 'utf-8');
            const dataEntries = Object.entries(JSON.parse(rawdata));
            this.servers = new Map(dataEntries);
        }
    }
    commit() {
        const data = JSON.stringify(this.servers);
        fs_1.default.writeFileSync(this.rootPath, data);
    }
    exitHandler() {
        if (this.rootPath) {
            this.commit();
        }
    }
}
exports.default = State;
//# sourceMappingURL=state.js.map