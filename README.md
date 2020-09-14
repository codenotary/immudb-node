## Immudb nodejs client
[Browse examples](https://github.com/codenotary/immudb-node/tree/master/examples)

## Usage 
```
const ImmudbClient = require('immudb-node')

ImmudbClient({
  address: '127.0.0.1:7777',
}, (err, cl) => {
  cl.login({
    username: 'immudb',
    password: 'immudb' }, (err, res) => {
  })
})
```

## API (WIP)
```
 /*
   req.username
   req.password
   err
   res.token
   res.warning
 */
 login(req, (err, res) => {}) 
```

## Roadmap 
 - Implement SafeReference
 - Implement Dump
 - Write root to file (currently in memory)
 - SetSKV should only take in k and v as arguments
 - Restructure slightly
 - Update client with breaking change and publish v1.0.0 to npm
