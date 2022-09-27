[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/promisifyGrpcReader

# Module: grpc-promis/promisifyGrpcReader

## Table of contents

### Functions

- [promisifyGrpcReader](grpc_promis_promisifyGrpcReader.md#promisifygrpcreader)

## Functions

### promisifyGrpcReader

▸ **promisifyGrpcReader**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info?`: `any`[] ; `response`: `TResponse`[]  }\>

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

▸ (`props`): `Promise`<{ `info?`: `any`[] ; `response`: `TResponse`[]  }\>

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

`Promise`<{ `info?`: `any`[] ; `response`: `TResponse`[]  }\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcReader.ts:8](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/grpc-promis/promisifyGrpcReader.ts#L8)
