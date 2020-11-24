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
const ImmudbClient = require('../lib/client')

const IMMUDB_HOST = process.env.IMMUDB_HOST || '127.0.0.1'
const IMMUDB_PORT = process.env.IMMUDB_PORT || 3322
const IMMUDB_USER = process.env.IMMUDB_USER || 'immudb'
const IMMUDB_PWD = process.env.IMMUDB_PWD || 'immudb'

ImmudbClient({
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
    rootPath: 'rootfile'
  }, main)

const rand = '1'
const testDB = 'opsdb'
 
async function main(err, cl) {
  if (err) {
    return console.log(err)
  }

  try {
    // login using the specified username and password
    let req = { username: IMMUDB_USER, password: IMMUDB_PWD }
    let res = await cl.login(req)
    console.log('success: login', res)

    // create database
    req = { database: testDB }
    res = await cl.createDatabase(req)
    console.log('success: createDatabase', res)

    // use database just created
    req = { database: testDB }
    res = await cl.useDatabase(req)
    console.log('success: useDatabase', res)

    // add new item having the specified key and value
    req = { key: rand, value: rand }
    res = await cl.set(req)
    console.log('success: set', res)
    const index = res.index

    // get item having the specified key
    req = { key: rand }
    res = await cl.get(req)
    console.log('success: get', res)

    // count keys having the specified value
    // in the database in use
    req = { keyPrefix: rand }
    res = await cl.count(req)
    console.log('success: count', res)

    // increase occurences of items having the
    // same key
    for (let i = 0; i < 10; i++) {
        req = { key: rand, value: rand }
        res = await cl.set(req)
    }
      
    // count again keys having the specified value
    // in the database in use (result will be +10)
    req = { keyPrefix: rand }
    res = await cl.count(req)
    console.log('success: count', res)

    // iterate over keys having the specified
    // prefix
    req = {
      keyPrefix: rand,
      offset: '10',
      limit: 1,
      reverse: false,
      deep: false,
    }
    res = await cl.scan(req)
    console.log('success: scan', res)

    // return an element by index
    req = { index: index }
    res = await cl.byIndex(req)
    console.log('success: byIndex', res)

    // fetch history for the item having the
    // specified key
    req = { key: rand }
    res = await cl.history(req)
    console.log('success: history', res)

    // fetch paginated history for the item having the
    // specified key
    req = {
      set: rand,
      offset: 10,
      limit: 5,
      reverse: false,
    }
    res = await cl.history(req)
    console.log('success: paginated history', res)

    // iterate over a sorted set
    req = {
      set: rand,
      offset: '10',
      limit: 5,
      reverse: false,
    }
    res = await cl.zScan(req)
    console.log('success: zScan', res)

    // iterate over all elements by insertion order
    req = { pageSize: 1, pageNumber: 1 }
    res = await cl.iScan(req)
    console.log('success: iScan', res)

    // execute a batch read
    req = {
      keys: [{
        key: rand,
      }],
    }
    res = await cl.getBatch(req)
    console.log('success: getBatch', res)

    // check immudb health status
    res = await cl.health()
    console.log('success: health', res)

    // get current root info
    res = await cl.currentRoot()
    console.log('success: currentRoot', res)

    // safely add new item having the specified key and value
    req = {
      key: rand+10,
      value: rand+10,
    }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res)

    // get current root info
    res = await cl.currentRoot()
    console.log('success: currentRoot', res)

    // safely add new item having the specified key and value
    req = {
      key: rand+11,
      value: rand+11,
    }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res)

    // safely add new item having the specified key and value
    req = {
      key: rand+12,
      value: rand+12,
    }
    res = await cl.safeSet(req)
    console.log('success: safeSet', res)

    // safely get item by key
    req = {
      key: rand+12,
    }
    res = await cl.safeGet(req)
    console.log('success: safeGet', res)

  } catch (err) {
    console.log(err)
  }
}
