const ImmudbClient = require("../lib/client")

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

  } catch (err) {
    console.log(err)
  }
}

main()

// TODO
// UpdateAuthConfig(*AuthConfig) (*empty.Empty)
// UpdateMTLSConfig(*MTLSConfig) (*empty.Empty)
