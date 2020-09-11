const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

const cl = ImmudbClient({
  address: '127.0.0.1:7777',
})

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))
 
async function main() {
  try {
    let req = { username: 'immudb', password: 'immudb' }
    let res = await cl.login(req)
    console.log(res)

    await cl.createDatabase({ database: rand })

    res = await cl.useDatabase({ database: rand })
    console.log(res)

    let unix = Math.floor(Date.now()/1000)
    console.log(unix)
    req = {
      key: rand,
      payload: rand,
      timestamp: unix,
    }
    res = await cl.setSV(req)
    const index = res.index
    console.log(res)

    res = await cl.getSV({ key: rand })
    console.log(res)

    res = await cl.count({ keyPrefix: rand })
    console.log(res)

    req = {
      keyPrefix: rand,
      offset: '10',
      limit: 5,
      reverse: false,
      deep: false,
    }
    res = await cl.scanSV(req)
    console.log(res)

    res = await cl.byIndexSV({ index: index })
    console.log(res)

    res = await cl.historySV({ key: rand })
    console.log(res)

    req = {
      set: rand,
      offset: '10',
      limit: 5,
      reverse: false,
    }
    res = await cl.zScanSV(req)
    console.log(res)

    res = await cl.iScanSV({ pageSize: 1, pageNumber: 1 })
    console.log(res)

    // TODO(andrew): Incorporate the breaking change to the API.
    res = await cl.currentRoot()
    console.log(res)

    req = {
      database: rand,
      index: res.index,
      root: res.signature,
    }
    root.set(req)

    res = await cl.zAdd({ set: 'set1', score: 10, key: rand })
    console.log(res)

    res = await cl.reference({ reference: 'ref1', key: rand })
    console.log(res)

    // req = {
    //   skvList: [{
    //     key: rand,
    //     payload: rand,
    //     timestamp: unix,
    //   },{
    //     key: rand,
    //     payload: rand,
    //     timestamp: unix,
    //   }]
    // }
    // res = await cl.setBatchSV(req)
    // console.log(res)

    req = {
      keys: [{
        key: rand,
      }],
    }
    res = await cl.getBatchSV(req)
    console.log(res)

    // req = {
    //   key: rand,
    //   value: rand,
    //   root: root.getRoot({ database: rand }),
    // }
    // res = await cl.safeSetSV(req)
    // console.log(res)

  } catch (err) {
    console.log(err)
  }
}


main()
// TODO
// SafeSetSV(*SafeSetSVOptions) (*Proof)
// SafeGetSV(*SafeGetOptions) (*SafeStructuredItem)
// SafeZAdd(*SafeZAddOptions) (*Proof)
// Inclusion(*Index) (*InclusionProof)
// Consistency(*Index) (*ConsistencyProof)
// BySafeIndex(*SafeIndexOptions) (*SafeItem)
// SafeReference(*SafeReferenceOptions) (*Proof)
