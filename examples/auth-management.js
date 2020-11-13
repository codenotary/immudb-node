const ImmudbClient = require("../lib/client")
const types = require('../lib/types')

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

    res = await cl.useDatabase({ database: 'defaultdb' })
    
    console.log('useDatabase successfull, token:', res && res.token)

    await cl.updateAuthConfig({ auth: types.auth.enabled })

    console.log('updateAuthConfig')

    await cl.updateMTLSConfig({ enabled: false })

    console.log('updateMTLSConfig')

  } catch (err) {
    console.log(err)
  }
}
