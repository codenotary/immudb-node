const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

ImmudbClient({
  address: '127.0.0.1:3322',
}, main)

const rand = '' + Math.floor(Math.random()
  * Math.floor(100000))
let unix = Math.floor(Date.now()/1000)
 
async function main(err, cl) {
  if (err) {
    return console.log(err)
  }

  try {
    let req = { username: 'immudb', password: 'immudb' }
    let res = await cl.login(req)

    res = await cl.useDatabase({ database: 'defaultdb' })

    // set batch ops
    for (let i = 0; i < 20; i++) {
      req = {
        kvList : [
          { key: i, value: i },
        ]
      }
      res = await cl.setBatch(req)
      console.log(res)
    }

    // get batch ops
    for (let i = 0; i < 20; i++) {
        req = {
          kvList : [
            { key: i },
          ]
        }
        res = await cl.getBatch(req)
        console.log(res)
      }
  } catch (err) {
    console.log(err)
  }
}
