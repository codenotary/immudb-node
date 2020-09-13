const ImmudbClient = require("../lib/client")
const types = require('../lib/types')

ImmudbClient({
  address: '127.0.0.1:7777',
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

    res = await cl.useDatabase({ database: 'defaultdb' })

    await cl.updateAuthConfig({ auth: types.auth.enabled })

    await cl.updateMTLSConfig({ enabled: false })

  } catch (err) {
    console.log(err)
  }
}
