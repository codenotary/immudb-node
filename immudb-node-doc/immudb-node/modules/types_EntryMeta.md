[immudb-node](../README.md) / [Exports](../modules.md) / types/EntryMeta

# Module: types/EntryMeta

## Table of contents

### Type Aliases

- [EntryMetadata](types_EntryMeta.md#entrymetadata)

## Type Aliases

### EntryMetadata

Ƭ **EntryMetadata**: `Object`

Structure influencing immudb Indexer behaviour for
indexing Entry'ies.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deleted?` | `boolean` | If set to `true` key value will be marked as deleted.  Get key will not return value ok key value marked as deleted. |
| `expiresAt?` | `Long` | If set and immudb server time is after, this key value will be marked as expired when queried. Latest key value may than return other value. |
| `nonIndexable?` | `boolean` | If set to `true` key value will be marked as non indexable and skipped by immudb indexer. Effectively this would mean that if this key value was set with this property, and we ask for latest key, returned value will be not of this key value but of last indexed. |

#### Defined in

[immudb-node/src/types/EntryMeta.ts:12](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/EntryMeta.ts#L12)
