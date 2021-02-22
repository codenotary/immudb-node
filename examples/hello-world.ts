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

import ImmudbClient from '../src/client';

(async () => {
    try {
        // Instantiate the client
        const client = await ImmudbClient.getInstance({
            host: '127.0.0.1', port: '3322', user: 'immudb', password: 'immudb'
        });

        // add new item with the specified key and value
        const res1 = await client.set({ key: 'hello', value: 'world' });
        console.log('success: set', res1);

		// get item having the specified key
        const res2 = await client.get({ key: 'hello' })
        console.log('success: get', res2);

        // add new item with the specified key and value
        const res3 = await client.set({ key: 'hello', value: 'world2' });
        console.log('success: set', res3);

        // get item having the specified key
        const res4 = await client.get({ key: 'hello' })
        console.log('success: get', res4);
    
    } catch (err) {
        console.log(err)
    }
})();
