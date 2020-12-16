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
import * as util from 'util';
import * as types from '../src/interfaces';
import * as messages from '../src/proto/schema_pb';

const IMMUDB_HOST: string = (process.env.IMMUDB_HOST as string || '127.0.0.1');
const IMMUDB_PORT: string = (process.env.IMMUDB_PORT as string || '3322');
const IMMUDB_USER: string = (process.env.IMMUDB_USER as string || 'immudb');
const IMMUDB_PWD: string = (process.env.IMMUDB_PWD as string || 'immudb');

(async () => {
    try {
        let res = null;
        
        // Instantiate the client
        const client = await ImmudbClient.getInstance({
            host: IMMUDB_HOST,
            port: IMMUDB_PORT,
            rootPath: 'rootfile',
            autoLogin: false,
            autoDatabase: false
        });

        const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

        // login using the specified username and password
        res = await client.login({
            user: IMMUDB_USER,
            password: IMMUDB_PWD
        })
        console.log('success: login', res);

        // create user
        res = await client.createUser({
            user: rand,
            password: 'Example12#',
            permission: types.Permission.READ_WRITE,
            database: 'defaultdb'
        })
        console.log(`success: createUser`);

        // list all users
        res = await client.listUsers()
            .then((res: any) => {
                console.log('success: listUser', util.inspect(res, false, 6, true));
            })
            .catch((err: any) => {
                console.error(err);
            })

        // change user permission
        res = await client.changePermission({
            action: messages.PermissionAction.GRANT,
            username: rand,
            database: rand,
            permission: types.Permission.READ_ONLY
        })
        console.log('success: changePermission');

        // change user password
        res = await client.changePassword({
            user: rand,
            oldpassword: 'Example12#',
            newpassword: 'Example1234%'
        })
        console.log('success: changePassword');

        // set active user
        res = await client.setActiveUser({
            username: rand,
            active: true
        })
        console.log('success: setActiveUser');

        // logout
        res = await client.logout()
        console.log('success: logout');

    } catch (err) {
    console.log(err)
    }
})();
