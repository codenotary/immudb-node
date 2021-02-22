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
	const randString: string = `${Math.floor(Math.random() * Math.floor(100000))}`;
	const randNumber: number = +randString;
    const ITERATIONS = 1000; // may fail over 50K KV
    let res = null;

    // Instantiate the client
    const client = await ImmudbClient.getInstance({
        host: IMMUDB_HOST,
        port: IMMUDB_PORT,
        user: IMMUDB_USER,
        password: IMMUDB_PWD,
        database: randString,
        rootPath: 'root'
    });

    try {       
        // execute a batch insert
        const req1 = { kvsList: <any>[] }
        for (let i = 0; i < ITERATIONS; i++) {
            req1.kvsList.push({
                key: String(i),
                value: String(i)
            });
        }
        res = await client.setAll(req1);
        console.log('success: setAll', res);

        // execute a batch read
        const req2 = {
			keysList: <any>[],
			sincetx: randNumber
		}
        for (let i = 0; i < ITERATIONS; i++) {
            req2.keysList.push(String(i));
        }
        res = await client.getAll(req2);
        console.log('success: getAll', res);
    
    } catch (err) {
        console.log(err)
    }
})();
