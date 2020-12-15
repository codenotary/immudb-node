"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const process = require('process');
const messages = require('./proto/schema_pb');
var Signals;
(function (Signals) {
    Signals["EXIT"] = "exit";
    Signals["SIGINT"] = "SIGINT";
    Signals["UNCAUGHT_EXCEPTION"] = "uncaughtException";
})(Signals || (Signals = {}));
class Root {
    constructor() {
        this.root = {};
        process.on(Signals.EXIT, this.exitHandler);
        process.on(Signals.SIGINT, this.exitHandler);
        process.on(Signals.UNCAUGHT_EXCEPTION, this.exitHandler);
    }
    set(params) {
        const rootPb = new messages.RootIndex();
        rootPb.setIndex(params.index);
        rootPb.setRoot(params.root);
        if (!this.root[params.server]) {
            this.root[params.server] = {
                [params.database]: rootPb,
            };
            return;
        }
        this.root[params.server][params.database] = rootPb;
    }
    get(params) {
        let serverRoot = this.root[params.server];
        if (!serverRoot) {
            return {
                index: 0,
                root: [],
            };
        }
        let rootPb = serverRoot[params.database];
        if (!rootPb) {
            return {
                index: 0,
                root: [],
            };
        }
        return {
            index: rootPb.getIndex(),
            root: rootPb.getRoot(),
        };
    }
    setRootPath(params) {
        this.rootPath = params.path;
        if (fs.existsSync(this.rootPath)) {
            let rawdata = fs.readFileSync(this.rootPath);
            this.root = JSON.parse(rawdata);
            return;
        }
        let data = JSON.stringify(this.root);
        fs.writeFileSync(this.rootPath, data);
    }
    commit() {
        let data = JSON.stringify(this.root);
        fs.writeFileSync(this.rootPath, data);
    }
    exitHandler() {
        if (this.rootPath) {
            let data = JSON.stringify(this.root);
            fs.writeFileSync(this.rootPath, data);
        }
    }
}
exports.default = Root;
