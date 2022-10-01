[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/set-val-entry

# Module: immu-api/set-val-entry

## Table of contents

### Type Aliases

- [SetValEntriesStreamingProps](immu_api_set_val_entry.md#setvalentriesstreamingprops)
- [SetValEntryProps](immu_api_set_val_entry.md#setvalentryprops)

### Functions

- [createSetValEntries](immu_api_set_val_entry.md#createsetvalentries)
- [createSetValEntriesStreaming](immu_api_set_val_entry.md#createsetvalentriesstreaming)

## Type Aliases

### SetValEntriesStreamingProps

Ƭ **SetValEntriesStreamingProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chunks` | `AsyncIterable`<`igrpc.Chunk`\> |

#### Defined in

[immudb-node/src/immu-api/set-val-entry.ts:82](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-val-entry.ts#L82)

___

### SetValEntryProps

Ƭ **SetValEntryProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `kvms` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta)[] | Array of key value pairs to set. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `preconditions?` | [`ValOrRefKeyPrecondition`](types_ValOrRefKeyPrecondition.md#valorrefkeyprecondition)[] | All conditions must be fullfilled for all key values. |

#### Defined in

[immudb-node/src/immu-api/set-val-entry.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-val-entry.ts#L11)

## Functions

### createSetValEntries

▸ **createSetValEntries**(`client`): (`props`: [`SetValEntryProps`](immu_api_set_val_entry.md#setvalentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `txCore`: [`TxCore`](types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](types_TxEntry.md#valtxentry)[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `txCore`: [`TxCore`](types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](types_TxEntry.md#valtxentry)[]  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetValEntryProps`](immu_api_set_val_entry.md#setvalentryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `txCore`: [`TxCore`](types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](types_TxEntry.md#valtxentry)[]  }\>

#### Defined in

[immudb-node/src/immu-api/set-val-entry.ts:40](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-val-entry.ts#L40)

___

### createSetValEntriesStreaming

▸ **createSetValEntriesStreaming**(`client`): (`props`: [`SetValEntriesStreamingProps`](immu_api_set_val_entry.md#setvalentriesstreamingprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](types_Tx.md#txcore)\>

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
| `props` | [`SetValEntriesStreamingProps`](immu_api_set_val_entry.md#setvalentriesstreamingprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxCore`](types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-api/set-val-entry.ts:86](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-val-entry.ts#L86)
