[immudb-node](../README.md) / [Exports](../modules.md) / types/Indexer

# Module: types/Indexer

## Table of contents

### Type Aliases

- [IndexerInfo](types_Indexer.md#indexerinfo)

## Type Aliases

### IndexerInfo

Ƭ **IndexerInfo**: `Object`

Entry and additional information from immudb server indexer.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `expired?` | `boolean` | Entry indexer context - is entry expired?  If `true` than entry metadata expiresAt |
| `revision` | `Long` | Entry indexer context - entry revision.  (Assuming that for same key (different) values was set multiple times, `revision` number is sequence number of set operation.) |

#### Defined in

[immudb-node/src/types/Indexer.ts:9](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Indexer.ts#L9)
