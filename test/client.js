const tap = require('tap')

const ImmudbClient = require('../lib/client')
const types = require('../lib/types')

const unix = Math.floor(Date.now()/1000)

const setup = (options, t, done) => {
  ImmudbClient(options, (err, cl) => {
    t.error(err)
    done(cl)
  })
}

tap.test('database management', (t) => {
  const options = {
    address: '127.0.0.1:56789',
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      let req = { username: 'immudb', password: 'immudb' }
      let res = await cl.login(req)
      t.type(res.token, 'string')

      await cl.createDatabase({ database: 'db1' })

      res = await cl.useDatabase({ database: 'db1' })
      t.type(res.token, 'string')

      res = await cl.set({ key: 'key1', value: 'value1' })
      t.equal(res.index, 0)

      res = await cl.listDatabases()
      t.equal(res.databases[0], 'defaultdb')
      t.equal(res.databases[1], 'db1')

      res = await cl.printTree()

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
    address: '127.0.0.1:56789',
    rootPath: `${__dirname}/../test/root.json`,
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      let req = { username: 'immudb', password: 'immudb' }
      let res = await cl.login(req)
      t.type(res.token, 'string')

      req = {
        username: rand,
        password: 'Example12#',
        permission: types.permission.readWrite,
        database: 'defaultdb',
      }
      await cl.createUser(req)

      res = await cl.listUsers({})

      req = {
        action: types.action.grant,
        username: rand,
        database: rand,
        permission: types.permission.readOnly, 
      }
      await cl.changePermission(req)

      req = {
        username: rand,
        old: 'Example12#',
        new: 'Example1234%',
      }
      await cl.changePassword(req)

      req = {
        username: rand,
        active: true,
      }
      await cl.setActiveUser(req)

      await cl.logout()

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

tap.test('ops structured', (t) => {
  const options = {
    address: '127.0.0.1:56789',
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      let req = { username: 'immudb', password: 'immudb' }
      let res = await cl.login(req)
      t.type(res.token, 'string')

      await cl.createDatabase({ database: rand })

      res = await cl.useDatabase({ database: rand })
      t.type(res.token, 'string')

      req = {
        key: rand,
        payload: rand,
        timestamp: unix,
      }
      res = await cl.setSV(req)
      t.equal(res.index, 0)

      const index = res.index

      res = await cl.getSV({ key: rand })
      t.equal(res.key, rand)
      t.equal(res.payload, rand)
      t.equal(res.timestamp, unix)

      res = await cl.count({ keyPrefix: rand })
      t.equal(res.count, 1)

      req = {
        keyPrefix: rand,
        offset: '10',
        limit: 5,
        reverse: false,
        deep: false,
      }
      res = await cl.scanSV(req)
      console.log(res)
      t.equal(res.items[0].key, rand)
      t.equal(res.items[0].payload, rand)
      t.equal(res.items[0].timestamp, unix)
      t.equal(res.items[0].index, index)

      res = await cl.byIndexSV({ index: index })
      t.equal(res.key, rand)
      t.equal(res.payload, rand)
      t.equal(res.timestamp, unix)
      t.equal(res.index, index)

      res = await cl.historySV({ key: rand })

      req = {
        set: rand,
        offset: '10',
        limit: 5,
        reverse: false,
      }
      res = await cl.zScanSV(req)

      res = await cl.iScanSV({ pageSize: 1, pageNumber: 1 })

      res = await cl.currentRoot()

      res = await cl.zAdd({ set: 'set1', score: 10, key: rand })

      res = await cl.reference({ reference: 'ref1', key: rand })

      req = {
        keys: [{
          key: rand,
        }],
      }
      res = await cl.getBatchSV(req)

      req = {
        key: rand,
        payload: rand,
        timestamp: unix,
      }
      res = await cl.safeSetSV(req)

      req = {
        key: rand,
      }
      res = await cl.safeGetSV(req)

      req = {
        index: index,
      }
      res = await cl.inclusion(req)

      req = {
        index: index,
      }
      res = await cl.consistency(req)

      req = {
        index: 2,
      }
      res = await cl.bySafeIndex(req)
      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})

tap.test('ops unstructured', (t) => {
  const options = {
    address: '127.0.0.1:56789',
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      let req = { username: 'immudb', password: 'immudb' }
      let res = await cl.login(req)

      await cl.createDatabase({ database: rand })

      res = await cl.useDatabase({ database: rand })

      res = await cl.set({ key: rand, value: rand })
      const index = res.index

      res = await cl.get({ key: rand })

      res = await cl.count({ keyPrefix: rand })

      req = {
        keyPrefix: rand,
        offset: '10',
        limit: 5,
        reverse: false,
        deep: false,
      }
      res = await cl.scan(req)

      res = await cl.byIndex({ index: index })

      res = await cl.history({ key: rand })

      req = {
        set: rand,
        offset: '10',
        limit: 5,
        reverse: false,
      }
      res = await cl.zScan(req)

      res = await cl.iScan({ pageSize: 1, pageNumber: 1 })

      req = {
        keys: [{
          key: rand,
        }],
      }
      res = await cl.getBatch(req)

      res = await cl.set({ key: rand*2, value: rand*2 })

      res = await cl.currentRoot()

      req = {
        key: rand+10,
        value: rand+10,
      }
      res = await cl.safeSet(req)

      res = await cl.currentRoot()

      req = {
        key: rand+11,
        value: rand+11,
      }
      res = await cl.safeSet(req)

      req = {
        key: rand+12,
        value: rand+12,
      }
      res = await cl.safeSet(req)

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
    address: '127.0.0.1:56789',
  }
  setup(options, t, async function(cl) {
    try {
      const rand = '' + Math.floor(Math.random()
        * Math.floor(100000))

      let unix = Math.floor(Date.now()/1000)
      let req = { username: 'immudb', password: 'immudb' }
      let res = await cl.login(req)

      res = await cl.useDatabase({ database: 'defaultdb' })

      req = {
        kvList : []
      }
      for (let i = 0; i < 20; i++) {
        req.kvList.push({
          key: 'batchKey'+i,
          value: 'value'+i,
        })
      }
      res = await cl.setBatch(req)

      // req = {
      //   skvList: [],
      // }
      // for (let i = 0; i < 10; i++) {
      //   req.skvList.push({
      //     key: 'batchKey'+i,
      //     payload: 'batchValue'+i,
      //     timestamp: unix,
      //   })
      // }
      // res = await cl.setBatchSV(req)

      t.end()
    } catch (err) {
      t.error(err)
    }
  })
})


