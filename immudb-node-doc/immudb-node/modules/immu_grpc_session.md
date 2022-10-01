[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-session

# Module: immu-grpc-session

## Table of contents

### Functions

- [grpcOpenSessionToSessionTokens](immu_grpc_session.md#grpcopensessiontosessiontokens)
- [userDatabaseSessionToGrpcOpenSession](immu_grpc_session.md#userdatabasesessiontogrpcopensession)

## Functions

### grpcOpenSessionToSessionTokens

▸ **grpcOpenSessionToSessionTokens**(`props`): [`SessionTokens`](types_Session.md#sessiontokens)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `OpenSessionResponse__Output` |

#### Returns

[`SessionTokens`](types_Session.md#sessiontokens)

#### Defined in

[immudb-node/src/immu-grpc-session/index.ts:7](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-session/index.ts#L7)

___

### userDatabaseSessionToGrpcOpenSession

▸ **userDatabaseSessionToGrpcOpenSession**(`props`): `igrpc.OpenSessionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UserDatabaseSession`](types_Session.md#userdatabasesession) |

#### Returns

`igrpc.OpenSessionRequest`

#### Defined in

[immudb-node/src/immu-grpc-session/index.ts:16](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-session/index.ts#L16)
