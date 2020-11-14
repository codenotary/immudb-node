const tap = require('tap')

const ImmudbClient = require('../lib/client')
const types = require('../lib/types')

const IMMUDB_HOST = process.env.IMMUDB_HOST || '127.0.0.1'
const IMMUDB_PORT = process.env.IMMUDB_TEST_PORT || 56789
const IMMUDB_USER = process.env.IMMUDB_USER || 'immudb'
const IMMUDB_PWD = process.env.IMMUDB_PWD || 'immudb'

const setup = (options, t, done) => {
  ImmudbClient(options, (err, cl) => {
    t.error(err)
    done(cl)
  })
}

tap.test('database management', (t) => {
  const options = {
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
  }
  setup(options, t, async function(cl) {
    try {
      // test: login using the specified username and password
      let req = { username: IMMUDB_USER, password: IMMUDB_PWD}
      let res = await cl.login(req)
      t.type(res.token, 'string')

      // test: create database
      req = { database: 'db1' }
      await cl.createDatabase(req)

      // test: use database just created
      req = { database: 'db1' }
      res = await cl.useDatabase(req)
      t.type(res.token, 'string')

      // test: add new item having the specified key and value
      req = { key: 'key1', value: 'value1' }
      res = await cl.set(req)
      t.equal(res.index, 0)

      // test: list all databases available
      res = await cl.listDatabases()
      t.equal(res.databases[0], 'defaultdb')
      t.equal(res.databases[1], 'db1')
      t.notEqual(res.databases[1], 'defaultdb');

      // test: print merkle tree
      res = await cl.printTree()

      // test: check immudb health status
      res = await cl.health()
      t.true(res.status)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

tap.test('user management', (t) => {
  const options = {
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
    rootPath: `${__dirname}/../test/root.json`,
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      // test: login using the specified username and password
      let req = { username: IMMUDB_USER, password: IMMUDB_PWD}
      let res = await cl.login(req)
      t.type(res.token, 'string')

      // test: create a new user
      req = {
        username: rand,
        password: 'Example12#',
        permission: types.permission.readWrite,
        database: 'defaultdb',
      }
      await cl.createUser(req)

      // test: list all users
      req = {}
      res = await cl.listUsers(req)

      // test: change user permission
      req = {
        action: types.action.grant,
        username: rand,
        database: rand,
        permission: types.permission.readOnly, 
      }
      await cl.changePermission(req)

      // test: change user password
      req = {
        username: rand,
        old: 'Example12#',
        new: 'Example1234%',
      }
      await cl.changePassword(req)

      // test: set active user
      req = {
        username: rand,
        active: true,
      }
      await cl.setActiveUser(req)

      // test: logout
      await cl.logout()

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

tap.test('operations', (t) => {
  const options = {
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
  }
  setup(options, t, async function(cl) {
    try {
    //   const rand = '' + Math.floor(Math.random()
    //     * Math.floor(100000))

      const rand = 1
      const testDB = 'testdb'

      // test: login using the specified username and password
      let req = { username: IMMUDB_USER, password: IMMUDB_PWD}
      let res = await cl.login(req)

      // test: create database
      req = { database: testDB }
      res = await cl.createDatabase(req)

      // test: use database just created
      req = { database: testDB }
      res = await cl.useDatabase(req)

      // test: add new item having the specified key
      // and value
      req = { key: rand, value: rand }
      res = await cl.set(req)
      const index = res && res.index // saving for byIndex

      // test: get item by key
      req = { key: rand }
      res = await cl.get({ key: rand })

      // test: count keys having the specified value
      // in the database in use
      req = { keyPrefix: rand }
      res = await cl.count(req)

      // test: iterate over keys having the specified
      // prefix
      req = {
        keyPrefix: rand,
        offset: '10',
        limit: 5,
        reverse: false,
        deep: false,
      }
      res = await cl.scan(req)

      // test: return an element by index
      req = { index: index }
      res = await cl.byIndex()

      // history: fetch history for the item having the
      // specified key
      req = { key: rand }
      res = await cl.history(req)

      // test: iterate over a sorted set
      req = {
        set: rand,
        offset: '10',
        limit: 5,
        reverse: false,
      }
      res = await cl.zScan(req)

      // test: iterate over all elements by
      // insertion order
      req = { pageSize: 1, pageNumber: 1 }
      res = await cl.iScan(req)

      // test: execute a batch read
      req = {
        keys: [{
          key: rand,
        }],
      }
      res = await cl.getBatch(req)

      // test: add new item having the specified key
      // and value
      res = await cl.set({ key: rand*2, value: rand*2 })

      // test: get current root info
      res = await cl.currentRoot()

      // test: safely add new item having the specified key
      // and value
      req = {
        key: rand+10,
        value: rand+10,
      }
      res = await cl.safeSet(req)

      // test: get current root info
      res = await cl.currentRoot()

      // test: safely add new item having the specified key
      // and value
      req = {
        key: rand+11,
        value: rand+11,
      }
      res = await cl.safeSet(req)

      // test: safely add new item having the specified key
      // and value
      req = {
        key: rand+12,
        value: rand+12,
      }
      res = await cl.safeSet(req)

      // test: safely get item by key
      req = {
        key: rand+12,
      }
      res = await cl.safeGet(req)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

tap.test('batches', (t) => {
  const options = {
    address: `${IMMUDB_HOST}:${IMMUDB_PORT}`,
  }
  setup(options, t, async function(cl) {
    try {
      // test: login using the specified username and password
      let req = { username: IMMUDB_USER, password: IMMUDB_PWD}
      let res = await cl.login(req)

      // test: use default database
      req = { database: 'defaultdb' }
      res = await cl.useDatabase(req)

      // test: execute a batch insert
      req = { keys : [] }
      for (let i = 0; i < 20; i++) {
        req.keys.push({ key: i, value: i })
      }
      res = await cl.setBatch(req)

      // test: execute a batch read
      req = { keys : [] }
      for (let i = 0; i < 20; i++) {
        req.keys.push({ key: i })
      }
      res = await cl.getBatch(req)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})


