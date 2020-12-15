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
        // Instantiate the client
        const client = ImmudbClient.getInstance({
            host: IMMUDB_HOST,
            port: IMMUDB_PORT,
            rootPath: 'rootfile'
        });

        const rand = '' + Math.floor(Math.random()
            * Math.floor(100000));

        let index = 0;

        // login using the specified username and password
        await client.login({
            user: IMMUDB_USER,
            password: IMMUDB_PWD
        })
            .then((res: any) => {
                console.log('success: login', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // create database
        await client.createDatabase({
            databasename: rand
        })
            .then((res: any) => {
                console.log('success: createDatabase');
            })
            .catch((err: any) => {
                console.error(err);
            });

        // use database just created
        await client.useDatabase({
            databasename: rand
        })
            .then((res: any) => {
                console.log('success: useDatabase');
            })
            .catch((err: any) => {
                console.error(err);
            });

        // add new item having the specified key and value
        await client.set({
            key: rand,
            value: rand
        })
            .then((res: any) => {
                console.log('success: set', res);
                index = res && res.index
            })
            .catch((err: any) => {
                console.error(err);
            });

        // get item having the specified key
        await client.get({
            key: rand
        })
            .then((res: any) => {
                console.log('success: get', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // count keys having the specified value
        // in the database in use
        await client.count({ 
            prefix: rand
        })
            .then((res: any) => {
                console.log('success: count', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // increase occurences of items having the
        // same key
        for (let i = 0; i < 10; i++) {
            await client.set({
                key: rand,
                value: rand
            })
            .then((res: any) => {
                console.log(`success: set ${i}`, res);
            })
            .catch((err: any) => {
                console.error(err);
            });
        }
            
        // count again keys having the specified value
        // in the database in use (result will be +10)
        await client.count({
            prefix: rand
        })
            .then((res: any) => {
                console.log('success: count', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // iterate over keys having the specified
        // prefix
        await client.scan({
            prefix: rand,
            offset: '10',
            limit: 1,
            reverse: false,
            deep: false
        })
            .then((res: any) => {
                console.log('success: scan', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // return an element by index
        await client.byIndex({
            index: index
        })
            .then((res: any) => {
                console.log('success: byIndex', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // safely return an element by index
        await client.bySafeIndex({
            index: index
        })
            .then((res: any) => {
                console.log('success: bySafeIndex', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // fetch history for the item having the
        // specified key
        await client.history({
            key: rand,
            offset: 0,
            limit: 0,
            reverse: false
        })
            .then((res: any) => {
                console.log('success: history', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // fetch paginated history for the item having the
        // specified key
        await client.history({
            key: rand,
            offset: 10,
            limit: 5,
            reverse: false
        })
            .then((res: any) => {
                console.log('success: paginated history', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // iterate over a sorted set
        await client.zScan({
            set: rand,
            offset: '10',
            limit: 5,
            reverse: false
        })
            .then((res: any) => {
                console.log('success: zScan', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // iterate over a sorted set
        await client.zAdd({
            set: rand,
            key: '10',
            score: 5,
            index: 0
        })
            .then((res: any) => {
                console.log('success: zScan', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // iterate over all elements by insertion order
        await client.iScan({
            pagesize: 1,
            pagenumber: 1
        })
            .then((res: any) => {
                console.log('success: iScan', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // execute a batch read
        await client.getBatch({
            keysList: [{
                key: rand
            }],
        })
            .then((res: any) => {
                console.log('success: getBatch', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // check immudb health status
        await client.health()
            .then((res: any) => {
                console.log('success: health', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // get current root info
        await client.currentRoot()
            .then((res: any) => {
                console.log('success: currentRoot', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // safely add new item having the specified key and value
        await client.safeSet({
            key: rand + 10,
            value: rand + 10
        })
            .then((res: any) => {
                console.log('success: safeSet', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // get current root info
        await client.currentRoot()
            .then((res: any) => {
                console.log('success: currentRoot', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // safely add new item having the specified key and value
        await client.safeSet({
            key: rand + 11,
            value: rand + 11
        })
            .then((res: any) => {
                console.log('success: safeSet', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // safely add new item having the specified key and value
        await client.safeSet({
            key: rand + 12,
            value: rand + 12
        })
            .then((res: any) => {
                console.log('success: safeSet', res);
            })
            .catch((err: any) => {
                console.error(err);
            });

        // safely get item by key
        await client.safeGet({
            key: rand + 12
        })
            .then((res: any) => {
                console.log('success: safeGet', res);
            })
            .catch((err: any) => {
                console.error(err);
            });
    } catch (err) {
        console.log(err)
    }
