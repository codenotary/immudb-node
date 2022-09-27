[immudb-node](../README.md) / [Exports](../modules.md) / immu-session

# Module: immu-session

## Table of contents

### Type Aliases

- [ImmuGrpcMetadata](immu_session.md#immugrpcmetadata)

### Functions

- [createImmuGrpcCallCredentials](immu_session.md#createimmugrpccallcredentials)
- [createImmuGrpcMetadata](immu_session.md#createimmugrpcmetadata)

## Type Aliases

### ImmuGrpcMetadata

Ƭ **ImmuGrpcMetadata**: `Object`

Various immudb authorization headers

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorization?` | `string` | User token? (which user is connected used database?) |
| `immudb-uuid?` | `string` | Immudb instance server token. |
| `sessionid?` | `string` | Client session token. |
| `transactionid?` | `string` | Client interactive transaction token |

#### Defined in

[immudb-node/src/immu-session.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-session.ts#L12)

## Functions

### createImmuGrpcCallCredentials

▸ **createImmuGrpcCallCredentials**(`props`): `grpcjs.CallCredentials`

Creates grpcjs.CallCredentials object with provided [ImmuGrpcMetadata](immu_session.md#immugrpcmetadata)
options specific to ImmuDb.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ImmuGrpcMetadata`](immu_session.md#immugrpcmetadata) |

#### Returns

`grpcjs.CallCredentials`

#### Defined in

[immudb-node/src/immu-session.ts:56](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-session.ts#L56)

___

### createImmuGrpcMetadata

▸ **createImmuGrpcMetadata**(`props`): `grpcjs.Metadata`

Creates grpcjs.Metadata object with provided [ImmuGrpcMetadata](immu_session.md#immugrpcmetadata)
options specific to ImmuDb.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ImmuGrpcMetadata`](immu_session.md#immugrpcmetadata) |

#### Returns

`grpcjs.Metadata`

#### Defined in

[immudb-node/src/immu-session.ts:37](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-session.ts#L37)
