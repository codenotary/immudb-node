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

## Roadmap 
 - Implement SafeZAdd
 - Implement SafeReference
 - Implement Dump
 - Documentation
