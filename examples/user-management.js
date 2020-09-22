const util = require('util')

const ImmudbClient = require('../lib/client')
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
    console.log(res)

    req = {
      username: rand,
      password: 'Example12#',
      permission: types.permission.readWrite,
      database: 'defaultdb',
    }
    await cl.createUser(req)

    res = await cl.listUsers()
    console.log(util.inspect(res, false, 6, true))

    req = {
      action: types.action.grant,
      username: rand,
      database: rand,
      permission: types.permission.readOnly, 
    }
    await cl.changePermission(req)

    req = {
      username: rand,
      old: 'Example12#',
      new: 'Example1234%',
    }
    await cl.changePassword(req)

    req = {
      username: rand,
      active: true,
    }
    await cl.setActiveUser(req)

    await cl.logout()

  } catch (err) {
    console.log(err)
  }
}
