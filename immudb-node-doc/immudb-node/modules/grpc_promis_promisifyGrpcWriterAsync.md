[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/promisifyGrpcWriterAsync

# Module: grpc-promis/promisifyGrpcWriterAsync

## Table of contents

### Functions

- [promisifyGrpcWriterAsync](grpc_promis_promisifyGrpcWriterAsync.md#promisifygrpcwriterasync)

## Functions

### promisifyGrpcWriterAsync

▸ **promisifyGrpcWriterAsync**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `AsyncIterable`<`TRequest`\> ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info`: `any`[] ; `res?`: `TResponse`  }\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`metadata`: `Metadata`, `options`: `CallOptions`, `callback`: (`err`: ``null`` \| `ServiceError`, `res?`: `TResponse`) => `void`) => `ClientWritableStream`<`TRequest`\> |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info`: `any`[] ; `res?`: `TResponse`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `AsyncIterable`<`TRequest`\> |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`Promise`<{ `info`: `any`[] ; `res?`: `TResponse`  }\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcWriterAsync.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/promisifyGrpcWriterAsync.ts#L8)
