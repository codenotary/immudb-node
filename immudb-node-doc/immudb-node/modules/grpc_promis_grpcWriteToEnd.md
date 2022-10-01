[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/grpcWriteToEnd

# Module: grpc-promis/grpcWriteToEnd

## Table of contents

### Functions

- [grpcWriteToEnd](grpc_promis_grpcWriteToEnd.md#grpcwritetoend)

## Functions

### grpcWriteToEnd

▸ **grpcWriteToEnd**<`T`\>(`props`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.chunks` | `AsyncIterable`<`T`\> |
| `props.grpcWriter` | `ClientWritableStream`<`T`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/grpc-promis/grpcWriteToEnd.ts:5](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/grpc-promis/grpcWriteToEnd.ts#L5)
