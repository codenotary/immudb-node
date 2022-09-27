[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/binEntry

# Module: immu-hash/binEntry

## Table of contents

### Functions

- [hashOfBinEntry](immu_hash_binEntry.md#hashofbinentry)

## Functions

### hashOfBinEntry

▸ **hashOfBinEntry**(`props`): `Buffer`

Hashes immu.BinEntry as sha256 of:
- metaLength - UInt16BE,
- meta - bytes,
- prefixedKeyLength - UInt16BE,
- prefixedKey - bytes
- sha256 of:
  - prefixedValue - bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/binEntry.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/binEntry.ts#L16)
