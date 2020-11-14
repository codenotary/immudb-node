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
    // login using the specified username and password
    let req = { username: IMMUDB_USER, password: IMMUDB_PWD }
    let res = await cl.login(req)
    console.log('success: login', res)

    // create database
    req = { database: rand }
    res = await cl.createDatabase(req)
    console.log('success: createDatabase', res)

    // use database just created
    req = { database: rand }
    res = await cl.useDatabase(req)
    console.log('success: useDatabase', res)
    
    // execute a batch insert
    req = { keys: [] }
    for (let i = 0; i < 20; i++) {
      req.keys.push({ key: i, value: i })
    }
    res = await cl.setBatch(req)
    console.log(`success: setBatch`, res)

    // execute a batch read
    req = { keys: [] }
    for (let i = 0; i < 20; i++) {
      req.keys.push({ key: i })
    }
    res = await cl.getBatch(req)
    console.log(`success: getBatch`, res)
 
  } catch (err) {
    console.log(err)
  }
}
