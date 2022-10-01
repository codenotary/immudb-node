[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/instance

# Module: immu-api/instance

## Table of contents

### Type Aliases

- [ExportTxProps](immu_api_instance.md#exporttxprops)
- [ReplicateTxProps](immu_api_instance.md#replicatetxprops)

### Functions

- [createExportTx](immu_api_instance.md#createexporttx)
- [createReplicateTx](immu_api_instance.md#createreplicatetx)
- [createServerInfo](immu_api_instance.md#createserverinfo)

## Type Aliases

### ExportTxProps

Ƭ **ExportTxProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `txId` | `Long` |

#### Defined in

[immudb-node/src/immu-api/instance.ts:34](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/instance.ts#L34)

___

### ReplicateTxProps

Ƭ **ReplicateTxProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chunks` | `AsyncIterable`<`igrpc.Chunk`\> |

#### Defined in

[immudb-node/src/immu-api/instance.ts:59](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/instance.ts#L59)

## Functions

### createExportTx

▸ **createExportTx**(`client`): (`props`: [`ExportTxProps`](immu_api_instance.md#exporttxprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ExportTxProps`](immu_api_instance.md#exporttxprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-api/instance.ts:38](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/instance.ts#L38)

___

### createReplicateTx

▸ **createReplicateTx**(`client`): (`props`: [`ReplicateTxProps`](immu_api_instance.md#replicatetxprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](types_Tx.md#txcore)\>

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
| `props` | [`ReplicateTxProps`](immu_api_instance.md#replicatetxprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxCore`](types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-api/instance.ts:63](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/instance.ts#L63)

___

### createServerInfo

▸ **createServerInfo**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`ServerInfo`](types_Instance.md#serverinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`ServerInfo`](types_Instance.md#serverinfo)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<[`ServerInfo`](types_Instance.md#serverinfo)\>

#### Defined in

[immudb-node/src/immu-api/instance.ts:10](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/instance.ts#L10)
