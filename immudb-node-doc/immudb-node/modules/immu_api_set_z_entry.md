[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/set-z-entry

# Module: immu-api/set-z-entry

## Table of contents

### Type Aliases

- [SetZSetEntryProps](immu_api_set_z_entry.md#setzsetentryprops)

### Functions

- [createSetZSetEntry](immu_api_set_z_entry.md#createsetzsetentry)

## Type Aliases

### SetZSetEntryProps

Ƭ **SetZSetEntryProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundReferredKeyAtTxId?` | `boolean` | Setting this value to: - `true` and if SetZSetEntryProps.referredKeyAtTxId is not set, then immudb   will set SetZSetEntryProps.referredKeyAtTxId to latest transaction id. - `true` and if SetZSetEntryProps.referredKeyAtTxId is set   than operation behaviour is unknown. - `false` or `undefinde` (default) operation behaviour will   not be changed. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `referredKey` | `Buffer` | Key to include in set SetZSetEntryProps.zSet. |
| `referredKeyAtTxId?` | `Long` | Optional transaction id for seeing key by indexer. If not set this value will be set to `0` by immudb, meaning reference to latest value of key. |
| `referredKeyScore` | `number` | Key index in set. |
| `zSet` | `Buffer` | Key of Set holding ZEntries. |

#### Defined in

[immudb-node/src/immu-api/set-z-entry.ts:10](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-z-entry.ts#L10)

## Functions

### createSetZSetEntry

▸ **createSetZSetEntry**(`client`): (`props`: [`SetZSetEntryProps`](immu_api_set_z_entry.md#setzsetentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](types_TxEntry.md#zsettxentry)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](types_TxEntry.md#zsettxentry)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetZSetEntryProps`](immu_api_set_z_entry.md#setzsetentryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `tx`: [`TxCore`](types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](types_TxEntry.md#zsettxentry)  }\>

#### Defined in

[immudb-node/src/immu-api/set-z-entry.ts:58](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/set-z-entry.ts#L58)
