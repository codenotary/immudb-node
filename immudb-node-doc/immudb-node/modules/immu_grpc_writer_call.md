[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc/writer-call

# Module: immu-grpc/writer-call

## Table of contents

### Functions

- [createReplicateTx](immu_grpc_writer_call.md#createreplicatetx)
- [createStreamExecAll](immu_grpc_writer_call.md#createstreamexecall)
- [createStreamSet](immu_grpc_writer_call.md#createstreamset)
- [createStreamVerifiableSet](immu_grpc_writer_call.md#createstreamverifiableset)

## Functions

### createReplicateTx

▸ **createReplicateTx**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `AsyncIterable`<`Chunk`\> ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `AsyncIterable`<`Chunk`\> |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Defined in

[immudb-node/src/immu-grpc/writer-call.ts:38](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc/writer-call.ts#L38)

___

### createStreamExecAll

▸ **createStreamExecAll**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `AsyncIterable`<`Chunk`\> ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `AsyncIterable`<`Chunk`\> |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Defined in

[immudb-node/src/immu-grpc/writer-call.ts:17](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc/writer-call.ts#L17)

___

### createStreamSet

▸ **createStreamSet**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `AsyncIterable`<`Chunk`\> ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `AsyncIterable`<`Chunk`\> |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<{ `info?`: `any`[] ; `res?`: `TxHeader__Output`  }\>

#### Defined in

[immudb-node/src/immu-grpc/writer-call.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc/writer-call.ts#L11)

___

### createStreamVerifiableSet

▸ **createStreamVerifiableSet**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `AsyncIterable`<`Chunk`\> ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info?`: `any`[] ; `res?`: `VerifiableTx__Output`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info?`: `any`[] ; `res?`: `VerifiableTx__Output`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `AsyncIterable`<`Chunk`\> |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<{ `info?`: `any`[] ; `res?`: `VerifiableTx__Output`  }\>

#### Defined in

[immudb-node/src/immu-grpc/writer-call.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc/writer-call.ts#L27)
