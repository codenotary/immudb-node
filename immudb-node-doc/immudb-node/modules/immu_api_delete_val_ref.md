[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/delete-val-ref

# Module: immu-api/delete-val-ref

## Table of contents

### Type Aliases

- [DeleteValRefProps](immu_api_delete_val_ref.md#deletevalrefprops)

### Functions

- [createDeleteValRef](immu_api_delete_val_ref.md#createdeletevalref)

## Type Aliases

### DeleteValRefProps

Ƭ **DeleteValRefProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Buffer`[] | Array of key value pairs to set. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `seenSinceTxId?` | `Long` | Delete keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |

#### Defined in

[immudb-node/src/immu-api/delete-val-ref.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/delete-val-ref.ts#L8)

## Functions

### createDeleteValRef

▸ **createDeleteValRef**(`client`): (`props`: [`DeleteValRefProps`](immu_api_delete_val_ref.md#deletevalrefprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](types_Tx.md#txcore)\>

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
| `props` | [`DeleteValRefProps`](immu_api_delete_val_ref.md#deletevalrefprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxCore`](types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-api/delete-val-ref.ts:41](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/delete-val-ref.ts#L41)
