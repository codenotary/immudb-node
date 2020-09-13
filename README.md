## Immudb nodejs client
[Browse examples](https://github.com/codenotary/immudb-node/tree/master/examples)

## Get started 
```
npm i
./generate.sh
node ./examples/database-ops-structured.js
```

## TODO
 - Implement remaining methods 
    - SafeZAdd
    - Inclusion
    - Consistency
    - BySafeIndex
    - SafeReference
    - Dump
 - Write root to file
    - In memory at the moment
    - Look into concurrency
 - SetSKV should take in k and v as arguments
 - Move some things around (read go client for ref)
 - Publish v0.0.1 to npm
 - Update client with breaking change and publish v1.0.0 to npm
