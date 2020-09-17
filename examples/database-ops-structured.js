const util = require('util')

const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

const clientOptions = {
  address: '127.0.0.1:7777',
  rootPath: `${__dirname}/../root.json`,
}

ImmudbClient(clientOptions, main)

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

    let unix = Math.floor(Date.now()/1000)
    req = {
      key: rand,
      payload: rand,
      timestamp: unix,
    }
    res = await cl.setSV(req)
    const index = res.index

    res = await cl.getSV({ key: rand })

    res = await cl.count({ keyPrefix: rand })

    req = {
      keyPrefix: rand,
      offset: '10',
      limit: 5,
      reverse: false,
      deep: false,
    }
    res = await cl.scanSV(req)

    res = await cl.byIndexSV({ index: index })

    res = await cl.historySV({ key: rand })

    res = await cl.health()

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

    // WIP 
    // req = {
    //   key: rand,
    //   score: rand,
    //   set: rand,
    // }
    // res = await cl.safeZAdd(req)
    // console.log(res)

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
    console.log(util.inspect(res, false, 8, true))

  } catch (err) {
  }
}
