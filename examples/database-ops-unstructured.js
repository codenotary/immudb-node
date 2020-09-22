const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

ImmudbClient({
  address: '127.0.0.1:3322',
}, main)

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))
 
async function main(err, cl) {
  if (err) {
    return console.log(err)
  }

  try {
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

    res = await cl.health()

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
    console.log(res)

  } catch (err) {
    console.log(err)
  }
}
