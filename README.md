# immudb-node [![License](https://img.shields.io/github/license/codenotary/immudb-node)](LICENSE)

[![npm](https://img.shields.io/npm/v/@codenotary/immudb-node)](https://www.npmjs.com/package/@codenotary/immudb-node)
[![Discord](https://img.shields.io/discord/831257098368319569)](https://discord.gg/EWeCbkjZVu) 
[![Tweet about immudb!](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Tweet%20about%20immudb)](https://twitter.com/intent/tweet?text=immudb:%20lightweight,%20high-speed%20immutable%20database!&url=https://github.com/codenotary/immudb)

### Official [immudb] client for nodejs.

[immudb]: https://immudb.io/

# Mono repository

If you don't plan developing this project, you will be only interested with:

- [immudb-node](immudb-node) - immudb client, or
- [immudb-node-showcase](immudb-node-showcase) - immudb client examples of usage.

This repository contains following projects:

- [immudb-node](immudb-node) - immudb client, 
- [immudb-node-showcase](immudb-node-showcase) - immudb client examples of usage, 
- [immudb-node-doc](immudb-node-doc) - Documentation of immudb client,
- [immudb-node-grpcjs](immudb-node-grpcjs) - immudb low lewel gprc bindings,
- [immudb-node-pbjs](immudb-node-pbjs) - immudb low lewel protobufers bindings, 
- [immudb-node-test](immudb-node-test) - immudb client tests.

# Building project

To (re)build all projects run in root directory:

```sh
npm install
npm run build
# cleaning:
npm run clean
```

