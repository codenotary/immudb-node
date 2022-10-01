[immudb-node](../README.md) / [Exports](../modules.md) / immu-stream-kv/kvEntry

# Module: immu-stream-kv/kvEntry

## Table of contents

### Functions

- [fromKVEntries](immu_stream_kv_kvEntry.md#fromkventries)
- [fromKVEntry](immu_stream_kv_kvEntry.md#fromkventry)
- [toKVEntries](immu_stream_kv_kvEntry.md#tokventries)
- [toKVEntry](immu_stream_kv_kvEntry.md#tokventry)
- [toKVEntryOpt](immu_stream_kv_kvEntry.md#tokventryopt)

## Functions

### fromKVEntries

▸ **fromKVEntries**(`kvs`): `AsyncGenerator`<{ `content`: `Buffer`  }, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kvs` | { `key`: `Buffer` ; `val`: `Buffer`  }[] |

#### Returns

`AsyncGenerator`<{ `content`: `Buffer`  }, `void`, `unknown`\>

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntry.ts:23](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntry.ts#L23)

___

### fromKVEntry

▸ **fromKVEntry**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.key` | `Buffer` |
| `props.val` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntry.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntry.ts#L8)

___

### toKVEntries

▸ **toKVEntries**(`everything`): { `key`: `Buffer` ; `val`: `Buffer`  }[]

Deserializes key-values from list of buffers heaving
following structure:
- serie of:
  - key length - UInt64BE
  - key
  - value length - UInt64BE
  - value

#### Parameters

| Name | Type |
| :------ | :------ |
| `everything` | `Buffer` |

#### Returns

{ `key`: `Buffer` ; `val`: `Buffer`  }[]

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntry.ts:82](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntry.ts#L82)

___

### toKVEntry

▸ **toKVEntry**(`everything`): `Object`

Deserializes key-value from list of buffers heaving
following structure:
- key length - UInt64BE
- key
- value length - UInt64BE
- value

#### Parameters

| Name | Type |
| :------ | :------ |
| `everything` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `val` | `Buffer` |

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntry.ts:46](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntry.ts#L46)

___

### toKVEntryOpt

▸ **toKVEntryOpt**(`bufs`): `Object`

Deserializes key-value from list of buffers heaving
following structure:
- key length - UInt64BE
- key
- value length - UInt64BE
- value

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufs` | `Iterator`<`Buffer`, `Buffer`, `undefined`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `val` | `Buffer` |

#### Defined in

[immudb-node/src/immu-stream-kv/kvEntry.ts:104](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-stream-kv/kvEntry.ts#L104)
