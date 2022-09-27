[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/set-val-ref-zSet

# Module: immu-api/set-val-ref-zSet

## Table of contents

### Type Aliases

- [SetEntriesStreamingProps](immu_api_set_val_ref_zSet.md#setentriesstreamingprops)
- [SetEntryProps](immu_api_set_val_ref_zSet.md#setentryprops)
- [SetOperation](immu_api_set_val_ref_zSet.md#setoperation)

### Functions

- [createSetEntries](immu_api_set_val_ref_zSet.md#createsetentries)
- [createSetEntriesStreaming](immu_api_set_val_ref_zSet.md#createsetentriesstreaming)

## Type Aliases

### SetEntriesStreamingProps

Ƭ **SetEntriesStreamingProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chunks` | `AsyncIterable`<`igrpc.Chunk`\> |

#### Defined in

[immudb-node/src/immu-api/set-val-ref-zSet.ts:178](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-val-ref-zSet.ts#L178)

___

### SetEntryProps

Ƭ **SetEntryProps**: `Object`

Specifies how to set Entry.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ops` | [`SetOperation`](immu_api_set_val_ref_zSet.md#setoperation)[] | Operations. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for ImmuDb to update database indexes, setting this  value to `true` may cause operation to speed up in exchange for  stale database latest keys values.    For example geting key value will return key value pointed by  indexer. If indexer is not up to date, returned value may be not  latest value.    Default value is `false`. |
| `preconditions?` | [`ValOrRefKeyPrecondition`](types_ValOrRefKeyPrecondition.md#valorrefkeyprecondition)[] | All conditions must be fullfilled for all key values. |

#### Defined in

[immudb-node/src/immu-api/set-val-ref-zSet.ts:19](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-val-ref-zSet.ts#L19)

___

### SetOperation

Ƭ **SetOperation**: { `type`: ``"val"``  } & [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta) \| { `type`: ``"ref"``  } & [`SetRefEntryProps`](immu_api_set_ref_entry.md#setrefentryprops) \| { `type`: ``"zSet"``  } & [`SetZSetEntryProps`](immu_api_set_z_entry.md#setzsetentryprops)

#### Defined in

[immudb-node/src/immu-api/set-val-ref-zSet.ts:48](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-val-ref-zSet.ts#L48)

## Functions

### createSetEntries

▸ **createSetEntries**(`client`): (`props`: [`SetEntryProps`](immu_api_set_val_ref_zSet.md#setentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](types_TxEntry.md#valtxentry) \| [`RefTxEntry`](types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](types_TxEntry.md#zsettxentry))[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](types_TxEntry.md#valtxentry) \| [`RefTxEntry`](types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](types_TxEntry.md#zsettxentry))[]  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetEntryProps`](immu_api_set_val_ref_zSet.md#setentryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](types_TxEntry.md#valtxentry) \| [`RefTxEntry`](types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](types_TxEntry.md#zsettxentry))[]  }\>

#### Defined in

[immudb-node/src/immu-api/set-val-ref-zSet.ts:54](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-val-ref-zSet.ts#L54)

___

### createSetEntriesStreaming

▸ **createSetEntriesStreaming**(`client`): (`props`: [`SetEntriesStreamingProps`](immu_api_set_val_ref_zSet.md#setentriesstreamingprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](types_Tx.md#txcore)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`TxCore`](types_Tx.md#txcore)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetEntriesStreamingProps`](immu_api_set_val_ref_zSet.md#setentriesstreamingprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxCore`](types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-api/set-val-ref-zSet.ts:182](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-val-ref-zSet.ts#L182)
