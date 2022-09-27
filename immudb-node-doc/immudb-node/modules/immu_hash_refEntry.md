[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/refEntry

# Module: immu-hash/refEntry

## Table of contents

### Functions

- [hashOfRefEntry](immu_hash_refEntry.md#hashofrefentry)

## Functions

### hashOfRefEntry

▸ **hashOfRefEntry**(`props`): `Buffer`

Hashes key-value entry as hash of fallowing buffers:
- metadata binary Buffer length as UInt16 BE Buffer
- metadata binary as Buffer Buffer
- key prefix length plus key length as UInt16 BE Buffer
- reference key prefix (0x00) as UInt8 Buffer
- reference key as Buffer
- hash of:
  - reference prefix (0x01) as UInt8 Buffer
  - reference transaction id as UInt64 BE Buffer
  - reference referencedKey prefix (0x00) as UInt8 Buffer
  - reference referencedKey as Buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RefEntry`](types_Entry.md#refentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/refEntry.ts:24](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/refEntry.ts#L24)
