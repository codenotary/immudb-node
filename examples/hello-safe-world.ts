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

import { digestKeyValue, encodeZAdd, utf8Encode } from '../src/util';
import ImmudbClient from '../src/client';

(async () => {
    try {
        // Instantiate the client
        const client = await ImmudbClient.getInstance({
            host: '127.0.0.1', port: '3322', user: 'immudb', password: 'immudb'
        });

        // // add new item with the specified key and value
        // const res11 = await client.verifiedSet({ key: 'hello', value: 'world' });
        // console.log('success: set', res11);

        // // get item having the specified key
        // const res4 = await client.verifiedGet({ key: 'hello' })
        // console.log('success: verifiedGet', res4);

        // // get item having the specified key
        // const res44 = await client.verifiedGet({ key: 'hello' })
        // console.log('success: verifiedGet', res44);

        // const res = await client.verifiedSetReferenceAt({ key: 'blabla', referencedKey: 'hello', attx: 0 })
        // console.log('success: verifiedSetReferenceAt', res)

        // get item having the specified key
        const res444 = await client.verifiedGet({ key: 'blabla' })
        console.log('success: verifiedGet by reference', res444);

        // const res2 = await client.zAdd({ set: 'ajshdf', score: 34, key: 'hello' })
        // console.log('success: zAdd', res2)

        // const res3 = await client.zScan({ set: 'ajshdf', seekkey: 'hello', seekscore: 34, seekattx: 0, inclusiveseek: true, limit: 10, desc: false, sincetx: 0, nowait: true })
        // console.log('success: zScan', res3)
    } catch (err) {
        console.log(err)
    }
})();
