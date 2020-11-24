/*
Copyright 2019-2020 vChain, Inc.
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

const IMMUDB_HOST = process.env.IMMUDB_HOST || '127.0.0.1'
const IMMUDB_PORT = process.env.IMMUDB_PORT || 3322
const IMMUDB_USER = process.env.IMMUDB_USER || 'immudb'
const IMMUDB_PWD = process.env.IMMUDB_PWD || 'immudb'

const ImmudbClient = require('../lib/client')
const types = require('../lib/types')

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

    console.log('success: login', res)

    req = {
      username: rand,
      password: 'Example12#',
      permission: types.permission.readWrite,
      database: 'defaultdb',
    }
    res = await cl.createUser(req)
    console.log('success: createUser');

    res = await cl.listUsers()
    console.log('success: listUser', util.inspect(res, false, 6, true))

    req = {
      action: types.action.grant,
      username: rand,
      database: rand,
      permission: types.permission.readOnly, 
    }
    res = await cl.changePermission(req)
    console.log('success: changePermission');

    req = {
      username: rand,
      old: 'Example12#',
      new: 'Example1234%',
    }
    res = await cl.changePassword(req)
    console.log('success: changePassword');

    req = {
      username: rand,
      active: true,
    }
    res = await cl.setActiveUser(req)
    console.log('success: setActiveUser');

    res = await cl.logout()
    console.log('success: logout');

  } catch (err) {
    console.log(err)
  }
}
