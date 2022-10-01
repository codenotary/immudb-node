[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/valEntry

# Module: immu-hash/valEntry

## Table of contents

### Functions

- [hashOfValEntry](immu_hash_valEntry.md#hashofvalentry)

## Functions

### hashOfValEntry

▸ **hashOfValEntry**(`props`): `Buffer`

Hashes key-value entry as hash of fallowing buffers:
- metadata binary format length as UInt16 BE
- metadata binary
- key prefix length plus key length as UInt16 BE
- key prefix (0x00)
- key
- hash of value prefix and value:
  - value prefix (0x00)
  - value

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ValEntry`](types_Entry.md#valentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/valEntry.ts:19](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-hash/valEntry.ts#L19)
