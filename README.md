# immudb-node [![License](https://img.shields.io/github/license/codenotary/immudb-node)](LICENSE)

[![Slack](https://img.shields.io/badge/join%20slack-%23immutability-brightgreen.svg)](https://slack.vchain.us/) [![Discuss at immudb@googlegroups.com](https://img.shields.io/badge/discuss-immudb%40googlegroups.com-blue.svg)](https://groups.google.com/group/immudb)

### Official [immudb] client for nodejs.

[immudb]: https://immudb.io/


## Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Supported Versions](#supported-versions)
- [Quickstart](#quickstart)
- [Step by step guide](#step-by-step-guide)
  * [Creating a Client](#creating-a-client)
  * [User sessions](#user-sessions)
  * [Creating a database](#creating-a-database)
  * [Setting the active database](#setting-the-active-database)
  * [Traditional read and write](#traditional-read-and-write)
  * [Verified or Safe read and write](#verified-or-safe-read-and-write)
  * [Multi-key read and write](#multi-key-read-and-write)
  * [Closing the client](#creating-a-database)
- [Contributing](#contributing)

## Introduction

immudb-node implements a [grpc] immudb client. A minimalist API is exposed for applications while cryptographic verifications and state update protocol implementation are fully implemented by this client.  Latest validated immudb state may be keep in the local filesystem when initialising the client with the rootPath option, please read [immudb research paper] for details of how immutability is ensured by [immudb].

[grpc]: https://grpc.io/
[immudb research paper]: https://immudb.io/
[immudb]: https://immudb.io/

## Prerequisites

immudb-node assumes an already running immudb server. Running `immudb` is quite simple, please refer to the
following link for downloading and running it: https://docs.immudb.io/quickstart.html

## Installation

Just include immudb-node as a dependency in your project:
```
const ImmudbClient = require('immudb-node')
```

## Supported Versions

immudb-node supports the [latest immudb release].

[latest immudb release]: https://github.com/codenotary/immudb/releases/tag/v0.8.0

## Quickstart

Check out some [examples]

[examples]: https://github.com/codenotary/immudb-node/tree/master/examples/

## Step by step guide

### Creating a Client

The following code snippets shows how to create a client.

Using default configuration:
```
const config = {
  address: '127.0.0.1:3322',
  rootPath: '.',
}

ImmudbClient(config, (err, cl) => {
  if (err) {
    return console.log(err)
  }

  // Interact with the client.
})
```

### User sessions

Use `login` and `logout` methods to initiate and terminate user sessions:

```
try {
  await cl.login({ username: 'usr1', password: 'pwd1' })

  // Interact with immudb using logged user.

  await cl.logout()
} catch (err) {
  console.log(err)
}
```

Or with callbacks
```
cl.login({ username: 'usr1', password: 'pwd1' }, (err, res) => {
  if (err) {
    return console.log(err)
  }

  // Interact with immudb using logged user.

  cl.logout(null, (err, res) => {
    if (err) {
      return console.log(err)
    })
    // Logged out.
})
```

### Creating a database

Creating a new database is quite simple:

```
cl.createDatabase('db1')
```

### Setting the active database

Specify the active database with:

```
cl.useDatabase('db1')
```

### Traditional read and write

immudb provides read and write operations that behave as a traditional
key-value store i.e. no cryptographic verification is done. This operations
may be used when validations can be post-poned:

```
let res = await cl.set({ key: 'key1', value: 'value1' })
console.log(res.index)

res = await cl.get({ key: 'key1' })
console.log(res.key, res.value, res.index)
```

### Verified or Safe read and write

immudb provides built-in cryptographic verification for any entry. The client
implements the mathematical validations while the application uses as a traditional
read or write operation:

```
try {
  let res = await cl.safeSet({ key: 'key1', value: 'value1' })
  console.log(res.index)

  res = await cl.safeGet({ key: 'key1' })
  console.log(res.key, res.value, res.index)
} catch (err) {
  if (err.clientErr == cl.proofErr) {
    // Proof does not verify.
  }
  console.log(err)
}
```

### Multi-key read and write

Transactional multi-key read and write operations are supported by immudb and immudb-node.

Atomic multi-key write (all entries are persisted or none):

```
  req = {
    skvList: [{
      key: 'key1',
      payload: 'value1',
      timestamp: Math.floor(Date.now()/100),
    },{
      key: 'key2',
      payload: 'value2',
      timestamp: Math.floor(Date.now()/100),
    }]
  }
  res = await cl.setBatchSV(req)
```

Atomic multi-key read (all entries are retrieved or none):
```
    req = {
      keys: [{
        key: 'key1',
      },{
        key: 'key2',
      }],
    }
    res = await cl.getBatchSV(req)
```

### Closing the client

To programatically close the connection with immudb server use the `shutdown` operation:
 
 ```
 cl.shutdown()
 ```

Note: after shutdown, a new client needs to be created to establish a new connection.

## Contributing

We welcome contributions. Feel free to join the team!

To report bugs or get help, use [GitHub's issues].

[GitHub's issues]: https://github.com/codenotary/immudb-node/issues
