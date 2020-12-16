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
import 'dotenv/config';
import ImmudbClient from '../src/client';

const IMMUDB_HOST: string = (process.env.IMMUDB_HOST as string || '127.0.0.1');
const IMMUDB_PORT: string = (process.env.IMMUDB_PORT as string || '3322');
const IMMUDB_USER: string = (process.env.IMMUDB_USER as string || 'immudb');
const IMMUDB_PWD: string = (process.env.IMMUDB_PWD as string || 'immudb');
 
(async () => {
    try {
        const rand = '' + Math.floor(Math.random()
            * Math.floor(100000));
        let res = null;
        let index: any;

        // Instantiate the client
        const client = await ImmudbClient.getInstance({
            host: IMMUDB_HOST,
            port: IMMUDB_PORT,
            user: IMMUDB_USER,
            password: IMMUDB_PWD,
            rootPath: 'rootfile',
            autoDatabase: false
        });

        // create database
        res = await client.createDatabase({
            databasename: rand
        })
        console.log('success: createDatabase');

        // use database just created
        res = await client.useDatabase({
            databasename: rand
        })
        console.log('success: useDatabase');

        // add new item having the specified key and value
        res = await client.set({
            key: rand,
            value: rand
        })
        console.log('success: set', res);
        index = res && res.index

        // get item having the specified key
        res = await client.get({
            key: rand
        })
        console.log('success: get', res);

        // count keys having the specified value
        // in the database in use
        res = await client.count({ 
            prefix: rand
        })
        console.log('success: count', res);

        // increase occurences of items having the
        // same key
        for (let i = 0; i < 10; i++) {
            res = await client.set({
                key: rand,
                value: rand
            })
            console.log(`success: set ${i}`, res);
        }
            
        // count again keys having the specified value
        // in the database in use (result will be +10)
        res = await client.count({
            prefix: rand
        })
        console.log('success: count', res);

        // iterate over keys having the specified
        // prefix
        res = await client.scan({
            prefix: rand,
            offset: '10',
            limit: 1,
            reverse: false,
            deep: false
        })
        console.log('success: scan', res);

        // return an element by index
        res = await client.byIndex({
            index: index
        })
        console.log('success: byIndex', res);

        // safely return an element by index
        res = await client.bySafeIndex({
            index: index
        })
        console.log('success: bySafeIndex', res);

        // fetch history for the item having the
        // specified key
        res = await client.history({
            key: rand,
            offset: 0,
            limit: 0,
            reverse: false
        })
        console.log('success: history', res);

        // fetch paginated history for the item having the
        // specified key
        res = await client.history({
            key: rand,
            offset: 10,
            limit: 5,
            reverse: false
        })
        console.log('success: paginated history', res);

        // iterate over a sorted set
        res = await client.zScan({
            set: rand,
            offset: '10',
            limit: 5,
            reverse: false
        })
        console.log('success: zScan', res);

        // iterate over a sorted set
        res = await client.zAdd({
            set: rand,
            key: '10',
            score: 5,
            index: 0
        })
        console.log('success: zScan', res);

        // iterate over all elements by insertion order
        res = await client.iScan({
            pagesize: 1,
            pagenumber: 1
        })
        console.log('success: iScan', res);

        // execute a batch read
        res = await client.getBatch({
            keysList: [{
                key: rand
            }],
        })
        console.log('success: getBatch', res);

        // check immudb health status
        res = await client.health()
        console.log('success: health', res);

        // get current root info
        res = await client.currentRoot()
        console.log('success: currentRoot', res);

        // safely add new item having the specified key and value
        res = await client.safeSet({
            key: rand + 10,
            value: rand + 10
        })
        console.log('success: safeSet', res);

        // get current root info
        res = await client.currentRoot()
        console.log('success: currentRoot', res);

        // safely add new item having the specified key and value
        res = await client.safeSet({
            key: rand + 11,
            value: rand + 11
        })
        console.log('success: safeSet', res);

        // safely add new item having the specified key and value
        res = await client.safeSet({
            key: rand + 12,
            value: rand + 12
        })
        console.log('success: safeSet', res);

        // safely get item by key
        res = await client.safeGet({
            key: rand + 12
        })
        console.log('success: safeGet', res);
    } catch (err) {
        console.log(err)
    }
})();
