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
    constructor() {
        process_1.default.on(Signals.EXIT, this.exitHandler);
        process_1.default.on(Signals.SIGINT, this.exitHandler);
        process_1.default.on(Signals.UNCAUGHT_EXCEPTION, this.exitHandler);
        this.state = new schema_pb_1.default.ImmutableState();
    }
    set(params) {
        const { db, txid, txhash, signature } = params;
        const sgntr = new schema_pb_1.Signature();
        signature && sgntr.setSignature(signature.signature);
        this.state.setDb(db);
        this.state.setTxid(txid);
        this.state.setTxhash(txhash);
        this.state.setSignature(sgntr);
    }
    get() {
        return this.state.toObject();
    }
    setRootPath(params) {
        this.rootPath = params.path;
        if (fs_1.default.existsSync(this.rootPath)) {
            const rawdata = fs_1.default.readFileSync(this.rootPath, 'utf-8');
            this.set(JSON.parse(rawdata));
        }
        else {
            this.commit();
        }
    }
    commit() {
        const data = JSON.stringify(this.state);
        fs_1.default.writeFileSync(this.rootPath, data);
    }
    exitHandler() {
        if (this.rootPath) {
            this.commit();
        }
    }
}
exports.default = State;
