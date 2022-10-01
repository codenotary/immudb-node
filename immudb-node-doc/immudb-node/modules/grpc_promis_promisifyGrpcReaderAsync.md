[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/promisifyGrpcReaderAsync

# Module: grpc-promis/promisifyGrpcReaderAsync

## Table of contents

### Functions

- [promisifyGrpcReaderAsync](grpc_promis_promisifyGrpcReaderAsync.md#promisifygrpcreaderasync)
- [promisifyGrpcReaderAsyncOnData](grpc_promis_promisifyGrpcReaderAsync.md#promisifygrpcreaderasyncondata)
- [promisifyGrpcReaderAsyncOnReadable](grpc_promis_promisifyGrpcReaderAsync.md#promisifygrpcreaderasynconreadable)
- [simplePromisifyGrpcReaderOnData](grpc_promis_promisifyGrpcReaderAsync.md#simplepromisifygrpcreaderondata)
- [simplePromisifyGrpcReaderOnReadable](grpc_promis_promisifyGrpcReaderAsync.md#simplepromisifygrpcreaderonreadable)

## Functions

### promisifyGrpcReaderAsync

▸ **promisifyGrpcReaderAsync**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`) => `ClientReadableStream`<`TResponse`\> |

#### Returns

`fn`

▸ (`props`): `AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `TRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts#L8)

___

### promisifyGrpcReaderAsyncOnData

▸ **promisifyGrpcReaderAsyncOnData**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`) => `ClientReadableStream`<`TResponse`\> |

#### Returns

`fn`

▸ (`props`): `AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `TRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Awaited`<`TResponse`\>, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts:86](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts#L86)

___

### promisifyGrpcReaderAsyncOnReadable

▸ **promisifyGrpcReaderAsyncOnReadable**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Awaited`<`NonNullable`<`TResponse`\>\>, `undefined` \| `any`[], `unknown`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`) => `ClientReadableStream`<`TResponse`\> |

#### Returns

`fn`

▸ (`props`): `AsyncGenerator`<`Awaited`<`NonNullable`<`TResponse`\>\>, `undefined` \| `any`[], `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `TRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Awaited`<`NonNullable`<`TResponse`\>\>, `undefined` \| `any`[], `unknown`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts:162](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts#L162)

___

### simplePromisifyGrpcReaderOnData

▸ **simplePromisifyGrpcReaderOnData**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `Promise`<`unknown`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`) => `ClientReadableStream`<`TResponse`\> |

#### Returns

`fn`

▸ (`props`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `TRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts:293](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts#L293)

___

### simplePromisifyGrpcReaderOnReadable

▸ **simplePromisifyGrpcReaderOnReadable**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `Promise`<`unknown`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`) => `ClientReadableStream`<`TResponse`\> |

#### Returns

`fn`

▸ (`props`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `TRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts:238](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcReaderAsync.ts#L238)
