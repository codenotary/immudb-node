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
import * as messages from '../src/proto/schema_pb';

const IMMUDB_HOST: string = (process.env.IMMUDB_HOST as string || '127.0.0.1');
const IMMUDB_PORT: string = (process.env.IMMUDB_PORT as string || '3322');
const IMMUDB_USER: string = (process.env.IMMUDB_USER as string || 'immudb');
const IMMUDB_PWD: string = (process.env.IMMUDB_PWD as string || 'immudb');
 
try {
    // Instantiate the client
    const client = new ImmudbClient({
        host: IMMUDB_HOST,
        port: IMMUDB_PORT,
        rootPath: 'rootfile'
    });

    const rand = '' + Math.floor(Math.random()
    * Math.floor(100000))

    let index = 0;

    // login using the specified username and password
    client.login({
        user: IMMUDB_USER,
        password: IMMUDB_PWD
    })
        .then((res: any) => {
            console.log('success: login', res);
        })
        .catch((err: any) => {
            console.error(err);
        })

    // create database
    // client.createDatabase({
    //     databasename: rand
    // })
    //     .then((res: any) => {
    //         console.log('success: createDatabase', res);
    //     })
    //     .catch((err: any) => {
    //         console.error(err);
    //     })
} catch (err) {
    console.log(err)
}