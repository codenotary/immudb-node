"use strict";
/*
Copyright 2019-2020 Codenotary, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
const util = __importStar(require("util"));
const client_1 = __importDefault(require("../src/client"));
const IMMUDB_HOST = (process.env.IMMUDB_HOST || '127.0.0.1');
const IMMUDB_PORT = (process.env.IMMUDB_PORT || '3322');
const IMMUDB_USER = (process.env.IMMUDB_USER || 'immudb');
const IMMUDB_PWD = (process.env.IMMUDB_PWD || 'immudb');
(async () => {
    try {
        const rand = '' + Math.floor(Math.random()
            * Math.floor(100000));
        let res = null;
        // Instantiate the client
        const client = await client_1.default.getInstance({
            host: IMMUDB_HOST,
            port: IMMUDB_PORT,
            user: IMMUDB_USER,
            password: IMMUDB_PWD,
            database: rand,
            rootPath: 'root'
        });
        // create database
        res = await client.createDatabase({
            databasename: rand
        });
        console.log('success: createDatabase');
        // use database just created
        res = await client.useDatabase({
            databasename: rand
        });
        console.log('success: useDatabase');
        // add new item having the specified key and value
        res = await client.set({
            key: rand,
            value: rand
        });
        console.log('success: set', res);
        // list all databases available
        res = await client.listDatabases();
        console.log('success: listDatabases', util.inspect(res, false, 8, true));
        // get a tree visualization of immudb
        // res =  await client.printTree()
        // console.log('success: printTree', res);
        // check immudb health status
        res = await client.health();
        console.log('success: health', res);
    }
    catch (err) {
        console.log(err);
    }
})();
//# sourceMappingURL=database-management.js.map