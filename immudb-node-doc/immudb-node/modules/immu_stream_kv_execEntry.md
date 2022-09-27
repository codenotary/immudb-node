[immudb-node](../README.md) / [Exports](../modules.md) / immu-stream-kv/execEntry

# Module: immu-stream-kv/execEntry

## Table of contents

### Type Aliases

- [ExecEntryRequest](immu_stream_kv_execEntry.md#execentryrequest)
- [KVEntryRequest](immu_stream_kv_execEntry.md#kventryrequest)
- [ZEntryRequest](immu_stream_kv_execEntry.md#zentryrequest)

### Functions

- [fromExecEntries](immu_stream_kv_execEntry.md#fromexecentries)
- [fromExecEntriesGen](immu_stream_kv_execEntry.md#fromexecentriesgen)
- [fromExecEntry](immu_stream_kv_execEntry.md#fromexecentry)
- [fromExecEntryType](immu_stream_kv_execEntry.md#fromexecentrytype)

## Type Aliases

### ExecEntryRequest

Ƭ **ExecEntryRequest**: { `entry`: [`KVEntryRequest`](immu_stream_kv_execEntry.md#kventryrequest) ; `type`: ``"kv"``  } \| { `entry`: [`ZEntryRequest`](immu_stream_kv_execEntry.md#zentryrequest) ; `type`: ``"zAdd"``  }

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:47](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L47)

___

### KVEntryRequest

Ƭ **KVEntryRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `val` | `Buffer` |

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:42](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L42)

___

### ZEntryRequest

Ƭ **ZEntryRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atTx?` | `Long` |
| `boundRef?` | `boolean` |
| `key` | `Buffer` |
| `noWait?` | `boolean` |
| `score` | `number` |
| `set` | `Buffer` |

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:33](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L33)

## Functions

### fromExecEntries

▸ **fromExecEntries**(`entries`): `Buffer`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`ExecEntryRequest`](immu_stream_kv_execEntry.md#execentryrequest)[] |

#### Returns

`Buffer`[]

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L16)

___

### fromExecEntriesGen

▸ **fromExecEntriesGen**(`entries`): `AsyncGenerator`<{ `content`: `Buffer` = entryBin }, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`ExecEntryRequest`](immu_stream_kv_execEntry.md#execentryrequest)[] |

#### Returns

`AsyncGenerator`<{ `content`: `Buffer` = entryBin }, `void`, `unknown`\>

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:20](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L20)

___

### fromExecEntry

▸ **fromExecEntry**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`ExecEntryRequest`](immu_stream_kv_execEntry.md#execentryrequest) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:55](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L55)

___

### fromExecEntryType

▸ **fromExecEntryType**(`type`): ``1`` \| ``2``

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"kv"`` \| ``"zAdd"`` |

#### Returns

``1`` \| ``2``

#### Defined in

[immudb-node/src/immu-stream-kv/execEntry.ts:7](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-stream-kv/execEntry.ts#L7)
