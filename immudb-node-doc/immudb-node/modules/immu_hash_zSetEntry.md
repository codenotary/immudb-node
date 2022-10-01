[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/zSetEntry

# Module: immu-hash/zSetEntry

## Table of contents

### Functions

- [hashOfZSetEntry](immu_hash_zSetEntry.md#hashofzsetentry)

## Functions

### hashOfZSetEntry

▸ **hashOfZSetEntry**(`props`): `Buffer`

Hashes zSet entry as sha256 of:

- metadataLength - length of binary encoded metadata - UInt16BE,
- metadata - metadata - bytes
- prefixedZSetKeyLength - UInt16BE,
- prefixedZSetKey:
    - prefixZSet - `0x01` - byte
    - zSetLength - UInt64BE,
    - zSet - bytes,
    - score - Double64BE,
    - prefixedRefKeyLength - UInt64BE,
    - prefixedRefKey:
      - prefix - `0x00` - byte,
      - refKey - bytes
- sha256 of:
  - value - empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ZSetEntry`](types_Entry.md#zsetentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/zSetEntry.ts:49](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-hash/zSetEntry.ts#L49)
