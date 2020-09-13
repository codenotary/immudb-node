## Immudb nodejs client
 - See ./examples/

## Contribute 
```
npm i
./generate.sh
node ./examples/database-ops-structured.js
```

## TODO
 - Implement remaining methods 
  - SafeSetSV
  - SafeGetSV
  - SafeZAdd
  - Inclusion
  - Consistency
  - BySafeIndex
  - SafeReference
  - UpdateAuthConfig
  - UpdateMTLSConfig
  - Dump
  - SafeGet
 - Write root to file
  - In memory at the moment
  - Look into concurrency
 - TLS
 - Publish v0.0.1 to npm
 - Update client with breaking change and publish v1.0.0 to npm
