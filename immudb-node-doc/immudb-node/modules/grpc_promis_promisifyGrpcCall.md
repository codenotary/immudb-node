[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/promisifyGrpcCall

# Module: grpc-promis/promisifyGrpcCall

## Table of contents

### Functions

- [basicPromisifyGrpcCall](grpc_promis_promisifyGrpcCall.md#basicpromisifygrpccall)
- [fullPromisifyGrpcCall](grpc_promis_promisifyGrpcCall.md#fullpromisifygrpccall)
- [promisifyGrpcCall](grpc_promis_promisifyGrpcCall.md#promisifygrpccall)

## Functions

### basicPromisifyGrpcCall

▸ **basicPromisifyGrpcCall**<`TRequest`, `TResponse`\>(`callFunction`): (`arg1`: `TRequest`, `arg2`: `Metadata`, `arg3`: `CallOptions`) => `Promise`<`undefined` \| `TResponse`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`, `callback`: `UnaryCallback`<`TResponse`\>) => `Call` |

#### Returns

`fn`

▸ (`arg1`, `arg2`, `arg3`): `Promise`<`undefined` \| `TResponse`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `TRequest` |
| `arg2` | `Metadata` |
| `arg3` | `CallOptions` |

##### Returns

`Promise`<`undefined` \| `TResponse`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcCall.ts:8](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/grpc-promis/promisifyGrpcCall.ts#L8)

___

### fullPromisifyGrpcCall

▸ **fullPromisifyGrpcCall**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `TRequest` ; `requestMetadata?`: `Metadata`  }) => `Promise`<{ `info`: `any`[] ; `response?`: `TResponse`  }\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`, `callback`: `UnaryCallback`<`TResponse`\>) => `Call` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `info`: `any`[] ; `response?`: `TResponse`  }\>

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

`Promise`<{ `info`: `any`[] ; `response?`: `TResponse`  }\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcCall.ts:64](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/grpc-promis/promisifyGrpcCall.ts#L64)

___

### promisifyGrpcCall

▸ **promisifyGrpcCall**<`TRequest`, `TResponse`\>(`callFunction`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TRequest`  }) => `Promise`<`undefined` \| `TResponse`\>

#### Type parameters

| Name |
| :------ |
| `TRequest` |
| `TResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callFunction` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `CallOptions`, `callback`: `UnaryCallback`<`TResponse`\>) => `Call` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TResponse`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TRequest`  } |

##### Returns

`Promise`<`undefined` \| `TResponse`\>

#### Defined in

[immudb-node/src/grpc-promis/promisifyGrpcCall.ts:28](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/grpc-promis/promisifyGrpcCall.ts#L28)
