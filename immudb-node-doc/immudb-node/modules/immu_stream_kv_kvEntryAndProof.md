[immudb-node](../README.md) / [Exports](../modules.md) / immu-stream-kv/kvEntryAndProof

# Module: immu-stream-kv/kvEntryAndProof

## Table of contents

### Functions

- [toKVEntryAndProof](immu_stream_kv_kvEntryAndProof.md#tokventryandproof)

## Functions

### toKVEntryAndProof

▸ **toKVEntryAndProof**(`props`): `Object`

Deserializes key-value from list of buffers heaving
following structure:
- entry length - UInt64BE
- entry
- verifableTx length - UInt64BE
- verifableTx
- inclusionProof length - UInt64BE
- inclusionProof
- val/key length - UInt64BE
- val/key

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Buffer`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `entry` | `Entry` |
| `inclusionProof` | `InclusionProof` |
| `verifiableTx` | `VerifiableTx` |

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntryAndProof.ts:18](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntryAndProof.ts#L18)
