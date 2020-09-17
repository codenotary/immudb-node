const ImmudbClient = require('../lib/client')
const root = require('../lib/root')

ImmudbClient({
  address: '127.0.0.1:7777',
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

    for (let i = 0; i < 20; i++) {
      req = {
        kvList : [
          { key: rand+i, value: rand+i },
          { key: rand+i+30, value: rand+i+30 },
        ]
      }
      res = await cl.setBatch(req)
      console.log(res)

      req = {
        skvList: [{
          key: rand,
          payload: rand,
          timestamp: unix,
        },{
          key: rand,
          payload: rand,
          timestamp: unix,
        }]
      }
      res = await cl.setBatchSV(req)
      console.log(res)
    }

  } catch (err) {
    console.log(err)
  }
}
