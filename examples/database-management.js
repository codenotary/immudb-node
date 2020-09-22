const util = require('util')

const ImmudbClient = require('../lib/client')

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

    res = await cl.listDatabases()
    console.log(util.inspect(res, false, 8, true))

    res = await cl.printTree()

    res = await cl.health()

  } catch (err) {
    console.log(err)
  }
}
