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

const dotenv = require('dotenv').config()
const util = require('util')
const ImmudbClient = require('../lib/client')

const IMMUDB_HOST = process.env.IMMUDB_HOST || '127.0.0.1'
const IMMUDB_PORT = process.env.IMMUDB_PORT || 3322
const IMMUDB_USER = process.env.IMMUDB_USER || 'immudb'
const IMMUDB_PWD = process.env.IMMUDB_PWD || 'immudb'

ImmudbClient({
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
  }, main)

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))
 
async function main(err, cl) {
  if (err) {
    return console.log(err)
  }

  try {
    let req = { username: IMMUDB_USER, password: IMMUDB_PWD }
    let res = await cl.login(req)

    await cl.createDatabase({ database: rand })
    console.log('success: createDatabase', res);

    res = await cl.useDatabase({ database: rand })
    console.log('success: useDatabase', res);

    res = await cl.set({ key: rand, value: rand })

    res = await cl.listDatabases()
    console.log('success: listDatabases', res);

    console.log(util.inspect(res, false, 8, true))

    res = await cl.printTree()
    console.log('success: printTree', res);

    res = await cl.health()
    console.log('success: health', res);

  } catch (err) {
    console.log(err)
  }
}
