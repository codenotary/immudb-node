[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/EntryMetadata

# Module: immu-hash/EntryMetadata

## Table of contents

### Functions

- [entryMetaToBuffer](immu_hash_EntryMetadata.md#entrymetatobuffer)
- [entryMetaToBufferLength](immu_hash_EntryMetadata.md#entrymetatobufferlength)

## Functions

### entryMetaToBuffer

▸ **entryMetaToBuffer**(`metadata?`): `Buffer`

Binary formats entry KV metadata as concatence of following buffers:
- if `deleted` is true than buffer with `0x00` byte otherwise empty buffer
- if `expiration.expiresAt` is defined than buffer with `0x01` byte otherwise
  empty buffer
- if `expiration.expiresAt` is defined than buffer with `expiresAt` as UInt64
  BE otherwise empty buffer
- if `nonIndexable` is true buffer with `0x02` byte otherwise empty buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata?` | ``null`` \| [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/EntryMetadata.ts:36](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-hash/EntryMetadata.ts#L36)

___

### entryMetaToBufferLength

▸ **entryMetaToBufferLength**(`metadata?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata?` | ``null`` \| [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-hash/EntryMetadata.ts:10](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-hash/EntryMetadata.ts#L10)
