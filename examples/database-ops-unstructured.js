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

    res = await cl.set({ key: rand, value: rand })
    const index = res.index
    console.log(res)

    res = await cl.get({ key: rand })
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
    res = await cl.scan(req)
    console.log(res)

    res = await cl.byIndex({ index: index })
    console.log(res)

    res = await cl.history({ key: rand })
    console.log(res)

    req = {
      set: rand,
      offset: '10',
      limit: 5,
      reverse: false,
    }
    res = await cl.zScan(req)
    console.log(res)

    res = await cl.iScan({ pageSize: 1, pageNumber: 1 })
    console.log(res)

    // TODO(andrew): Figure out why this is erroring.
    // req = {
    //   kvList : [
    //     { key: rand, value: rand },
    //     { key: rand, value: rand },
    //   ]
    // }
    // res = await cl.setBatch(req)
    // console.log(res)

    req = {
      keys: [{
        key: rand,
      }],
    }
    res = await cl.getBatch(req)
    console.log(res)

    res = await cl.currentRoot()
    console.log(res)

    req = {
      database: rand,
      index: res.index,
      root: res.signature,
    }
    root.set(req)

    // req = {
    //   key: rand,
    //   value: rand,
    //   root: root.get({ database: rand }),
    // }
    // res = await cl.safeSet(req)
    // console.log(res)

  } catch (err) {
    console.log(err)
  }
}

main()

// TODO
// SafeSet(*SafeSetOptions) (*Proof)
// SafeGet(*SafeGetOptions) (*SafeItem)
