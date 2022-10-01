[immudb-node](../README.md) / [Exports](../modules.md) / immu-stream-kv/zEntry

# Module: immu-stream-kv/zEntry

## Table of contents

### Functions

- [toZEntries](immu_stream_kv_zEntry.md#tozentries)
- [toZEntry](immu_stream_kv_zEntry.md#tozentry)

## Functions

### toZEntries

▸ **toZEntries**(`everything`): { `refKey`: `Buffer` = refKey; `refKeySeenFromTxId`: `Long` = refKeyAtTxId; `referencedKeyVal`: `Buffer` = refVal; `score`: `number` = refKeyScore; `zSet`: `Buffer` = setKey }[]

Deserializes zEntries from list of buffers heaving
following structure:
- serie of:
  - setKey length - UInt64BE
  - setKey
  - refKey length - UInt64BE
  - refKey
  - refKeyScore length - UInt64BE
  - refKeyScore - DoubleBE
  - refKeyAtTxId length - UInt64BE
  - refKeyAtTxId - UInt64BE
  - refVal length - UInt64BE
  - refVal

#### Parameters

| Name | Type |
| :------ | :------ |
| `everything` | `Buffer` |

#### Returns

{ `refKey`: `Buffer` = refKey; `refKeySeenFromTxId`: `Long` = refKeyAtTxId; `referencedKeyVal`: `Buffer` = refVal; `score`: `number` = refKeyScore; `zSet`: `Buffer` = setKey }[]

#### Defined in

[immudb-node/src/immu-stream-kv/zEntry.ts:85](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/zEntry.ts#L85)

___

### toZEntry

▸ **toZEntry**(`everything`): `Object`

Deserializes zEntry from list of buffers heaving
following structure:
- setKey length - UInt64BE
- setKey
- refKey length - UInt64BE
- refKey
- refKeyScore length - UInt64BE
- refKeyScore - DoubleBE
- refKeyAtTxId length - UInt64BE
- refKeyAtTxId - UInt64BE
- refVal length - UInt64BE
- refVal

#### Parameters

| Name | Type |
| :------ | :------ |
| `everything` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `refKey` | `Buffer` |
| `refKeySeenFromTxId` | `Long` |
| `referencedKeyVal` | `Buffer` |
| `score` | `number` |
| `zSet` | `Buffer` |

#### Defined in

[immudb-node/src/immu-stream-kv/zEntry.ts:20](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/zEntry.ts#L20)
