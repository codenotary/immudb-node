[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-entry

# Module: immu-grpc-entry

## Table of contents

### Functions

- [grpcEntryToValTxEntryAndRefTxEntry](immu_grpc_entry.md#grpcentrytovaltxentryandreftxentry)
- [grpcMetaToEntryMeta](immu_grpc_entry.md#grpcmetatoentrymeta)
- [grpcTxEntryToEntry](immu_grpc_entry.md#grpctxentrytoentry)
- [grpcTxEntryToTxEntry](immu_grpc_entry.md#grpctxentrytotxentry)
- [grpcZEntryToZSetEntryAndValTxEntryAndRefTxEntry](immu_grpc_entry.md#grpczentrytozsetentryandvaltxentryandreftxentry)

## Functions

### grpcEntryToValTxEntryAndRefTxEntry

▸ **grpcEntryToValTxEntryAndRefTxEntry**(`entry`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `Entry__Output` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `refTxEntry?` | [`RefTxEntry`](types_TxEntry.md#reftxentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) |
| `valTxEntry` | [`ValTxEntry`](types_TxEntry.md#valtxentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) |

#### Defined in

[immudb-node/src/immu-grpc-entry/index.ts:90](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-entry/index.ts#L90)

___

### grpcMetaToEntryMeta

▸ **grpcMetaToEntryMeta**(`props?`): [`EntryMetadata`](types_EntryMeta.md#entrymetadata) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | ``null`` \| `KVMetadata__Output` |

#### Returns

[`EntryMetadata`](types_EntryMeta.md#entrymetadata) \| `undefined`

#### Defined in

[immudb-node/src/immu-grpc-entry/index.ts:130](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-entry/index.ts#L130)

___

### grpcTxEntryToEntry

▸ **grpcTxEntryToEntry**(`grpcEntry`): [`Entry`](types_Entry.md#entry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grpcEntry` | `TxEntry__Output` |

#### Returns

[`Entry`](types_Entry.md#entry)

#### Defined in

[immudb-node/src/immu-grpc-entry/index.ts:70](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-entry/index.ts#L70)

___

### grpcTxEntryToTxEntry

▸ **grpcTxEntryToTxEntry**(`tx`, `grpcEntry`): [`TxEntry`](types_TxEntry.md#txentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Tx__Output` |
| `grpcEntry` | `TxEntry__Output` |

#### Returns

[`TxEntry`](types_TxEntry.md#txentry)

#### Defined in

[immudb-node/src/immu-grpc-entry/index.ts:50](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-entry/index.ts#L50)

___

### grpcZEntryToZSetEntryAndValTxEntryAndRefTxEntry

▸ **grpcZEntryToZSetEntryAndValTxEntryAndRefTxEntry**(`entry`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `ZEntry__Output` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `refTxEntry?` | [`RefTxEntry`](types_TxEntry.md#reftxentry) |
| `valTxEntry` | [`ValTxEntry`](types_TxEntry.md#valtxentry) |
| `zSetEntry` | [`ZSetEntry`](types_Entry.md#zsetentry) |

#### Defined in

[immudb-node/src/immu-grpc-entry/index.ts:17](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-entry/index.ts#L17)
