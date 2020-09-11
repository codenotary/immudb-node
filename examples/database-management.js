const util = require('util')

const ImmudbClient = require('../lib/client')

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
    console.log(res)

    res = await cl.set({ key: rand, value: rand })
    console.log(res)

    res = await cl.set({ key: rand, value: rand })
    console.log(res)

    res = await cl.listDatabases()
    console.log(res)

    res = await cl.printTree()
    console.log(util.inspect(res, false, 9, true))

    res = await cl.health()
    console.log(res)

  } catch (err) {
    console.log(err)
  }
}

main()

// TODO
// Dump(*empty.Empty, ImmuService_DumpServer) error
