"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
require("dotenv/config");
const client_1 = __importDefault(require("../src/client"));
const IMMUDB_HOST = (process.env.IMMUDB_HOST || '127.0.0.1');
const IMMUDB_PORT = (process.env.IMMUDB_PORT || '3322');
const IMMUDB_USER = (process.env.IMMUDB_USER || 'immudb');
const IMMUDB_PWD = (process.env.IMMUDB_PWD || 'immudb');
(async () => {
    try {
        const randString = `${Math.floor(Math.random() * Math.floor(100000))}`;
        const randNumber = +randString;
        let index;
        // Instantiate the client
        const client = await client_1.default.getInstance({
            host: IMMUDB_HOST,
            port: IMMUDB_PORT,
            user: IMMUDB_USER,
            password: IMMUDB_PWD,
            rootPath: 'root',
            autoDatabase: false
        });
        // create database
        await client.createDatabase({
            databasename: randString
        });
        console.log('success: createDatabase');
        // use database just created
        await client.useDatabase({
            databasename: randString
        });
        console.log('success: useDatabase');
        // add new item with the specified key and value
        const res1 = await client.set({
            key: randString,
            value: randString
        });
        console.log('success: set', res1);
        // index = res1 && res1.index;
        // get item having the specified key
        const res2 = await client.get({
            key: randString
        });
        console.log('success: get', res2);
        // count keys having the specified value
        // // in the database in use
        // const res3 = await client.count({ 
        //     prefix: randString
        // })
        // console.log('success: count', res3);
        // increase occurences of items having the
        // same key
        for (let i = 0; i < 10; i++) {
            const res4 = await client.set({
                key: randString,
                value: randString
            });
            console.log(`success: set ${i}`, res4);
        }
        // count again keys having the specified value
        // in the database in use (result will be +10)
        // const res5 = await client.count({
        //     prefix: randString
        // })
        // console.log('success: count', res5);
        // iterate over keys having the specified
        // prefix
        const res6 = await client.scan({
            seekkey: new Uint8Array(randNumber),
            prefix: new Uint8Array(randNumber),
            desc: true,
            limit: 1,
            sincetx: randNumber,
            nowait: true
        });
        console.log('success: scan', res6);
        // return an element by index
        // const res7 = await client.byIndex({
        //     index: index
        // })
        // console.log('success: byIndex', res7);
        // // safely return an element by index
        // const res8 = await client.bySafeIndex({
        //     index: index
        // })
        // console.log('success: bySafeIndex', res8);
        // fetch history for the item having the
        // specified key
        // const res9 = await client.history({
        // 	key: new Uint8Array(randNumber),
        // 	offset: 0,
        // 	limit: 0,
        // 	desc: false,
        // 	sincetx: randNumber
        // })
        // console.log('success: history', res9);
        // fetch paginated history for the item having the
        // specified key
        // const res10 = await client.history({
        // 	key: new Uint8Array(randNumber),
        // 	offset: 10,
        // 	limit: 5,
        // 	desc: true,
        // 	sincetx: randNumber
        // })
        // console.log('success: paginated history', res10);
        // iterate over a sorted set
        const res11 = await client.zScan({
            set: randString,
            seekkey: '',
            seekscore: 0,
            seekattx: 0,
            inclusiveseek: true,
            limit: 5,
            desc: true,
            sincetx: 0,
            nowait: true
        });
        console.log('success: zScan', res11);
        // iterate over a sorted set
        // const res12 = await client.zAdd({
        //     set: randString,
        //     key: '10',
        //     score: 5,
        //     index: 0
        // })
        // console.log('success: zScan', res12);
        // iterate over all elements by insertion order
        // const res13 = await client.iScan({
        //     pagesize: 1,
        //     pagenumber: 1
        // })
        // console.log('success: iScan', res13);
        // execute a batch read
        const res14 = await client.getAll({
            keysList: [randString],
            sincetx: randNumber
        });
        console.log('success: getAll', res14);
        // check immudb health status
        const res15 = await client.health();
        console.log('success: health', res15);
        // get current state
        const res16 = await client.currentState();
        console.log('success: currentState', res16);
        // safely add new item having the specified key and value
        const res17 = await client.verifiedSet({
            key: randString + 10,
            value: randString + 10
        });
        console.log('success: verifiedSet', res17);
        // get current state
        const res18 = await client.currentState();
        console.log('success: currentState', res18);
        // safely add new item having the specified key and value
        const res19 = await client.verifiedSet({
            key: randString + 11,
            value: randString + 11
        });
        console.log('success: verifiedSet', res19);
        // safely add new item having the specified key and value
        const res20 = await client.verifiedSet({
            key: randString + 12,
            value: randString + 12
        });
        console.log('success: verifiedSet', res20);
        // safely get item by key
        const res21 = await client.verifiedGet({
            key: randString + 12
        });
        console.log('success: verifiedGet', res21);
    }
    catch (err) {
        console.log(err);
    }
})();
//# sourceMappingURL=database-operations.js.map