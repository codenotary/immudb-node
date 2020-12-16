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
import * as util from 'util';
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

        let res = null;

        const rand = '' + Math.floor(Math.random()
            * Math.floor(100000));

        // login using the specified username and password
        res = await client.login({
            user: IMMUDB_USER,
            password: IMMUDB_PWD
        })
        console.log('success: login', res);

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

        // list all databases available
        res = await client.listDatabases()
        console.log('success: listDatabases', util.inspect(res, false, 8, true));

        // get a tree visualization of immudb
        // res =  await client.printTree()
        // console.log('success: printTree', res);

        // check immudb health status
        res = await client.health()
        console.log('success: health', res);

    } catch (err) {
        console.log(err)
    }
})();
