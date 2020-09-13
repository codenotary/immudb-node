const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

const cl = ImmudbClient({
  address: '127.0.0.1:7777',
})

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))
 
async function main(callback) {
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

    res = await cl.set({ key: rand*2, value: rand*2 })

    res = await cl.currentRoot()

    req = {
      database: rand,
      index: res.index,
      root: res.root,
    }
    root.set(req)

  } catch (err) {
    console.log(err)
  }
  callback()
}

async function safeGetSet() {
  try {
    let req = { username: 'immudb', password: 'immudb' }
    let res = await cl.login(req)

    await cl.createDatabase({ database: rand+1 })

    res = await cl.useDatabase({ database: rand+1 })

    res = await cl.currentRoot()
    req = {
      database: rand+1,
      index: res.index,
      root: res.root,
    }
    root.set(req)

    req = {
      key: rand+6,
      value: rand+6,
      root: root.get({ database: rand+1 }),
    }
    res = await cl.safeSet(req)

    res = await cl.currentRoot()
    req = {
      database: rand+1,
      index: res.index,
      root: res.root,
    }
    root.set(req)

    req = {
      key: rand+6,
      value: rand+6,
      root: root.get({ database: rand+1 }),
    }
    res = await cl.safeSet(req)

    req = {
      key: rand+6,
      value: rand+6,
      root: root.get({ database: rand+1 }),
    }
    res = await cl.safeSet(req)


  } catch (err) {
    console.log(err)
  }

}

main(()=> {
  console.log('---------Safe Get Set-------------')
  safeGetSet()
})

// TODO
// SafeGet(*SafeGetOptions) (*SafeItem)
