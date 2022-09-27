[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/set-ref-entry

# Module: immu-api/set-ref-entry

## Table of contents

### Type Aliases

- [SetRefEntryProps](immu_api_set_ref_entry.md#setrefentryprops)

### Functions

- [createSetRefEntry](immu_api_set_ref_entry.md#createsetrefentry)

## Type Aliases

### SetRefEntryProps

Ƭ **SetRefEntryProps**: `Object`

Specifies how to set RefEntry.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundRef?` | `boolean` | Setting this value to:  - `true` and if SetRefEntryProps.keyTxId is not set, then immudb    will set SetRefEntryProps.keyTxId to latest transaction id.  - `true` and if SetRefEntryProps.keyTxId is set    than operation behaviour is unknown.  - `false` or `undefinde` (default) operation behaviour will    not be changed. |
| `key` | `Buffer` | Key to include in set SetRefEntryProps.set. |
| `keyTxId?` | `Long` | Optional transaction id for seeing key by indexer. If not set this value  will be set to `0` by immudb, meaning reference to latest value of key. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for ImmuDb to update database indexes, setting this  value to `true` may cause operation to speed up in exchange for  stale database latest keys values.    For example geting key value will return key value pointed by  indexer. If indexer is not up to date, returned value may be not  latest value.    Default value is `false`. |
| `preconditions?` | [`ValOrRefKeyPrecondition`](types_ValOrRefKeyPrecondition.md#valorrefkeyprecondition)[] | All conditions must be fullfilled for all key values. |
| `referToKey` | `Buffer` | Key to reference. |

#### Defined in

[immudb-node/src/immu-api/set-ref-entry.ts:13](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-ref-entry.ts#L13)

## Functions

### createSetRefEntry

▸ **createSetRefEntry**(`client`): (`props`: [`SetRefEntryProps`](immu_api_set_ref_entry.md#setrefentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `ref`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](types_Tx.md#txcore)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `ref`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](types_Tx.md#txcore)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetRefEntryProps`](immu_api_set_ref_entry.md#setrefentryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `ref`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](types_Tx.md#txcore)  }\>

#### Defined in

[immudb-node/src/immu-api/set-ref-entry.ts:61](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/set-ref-entry.ts#L61)
