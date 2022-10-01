[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/session

# Module: immu-api/session

## Table of contents

### Type Aliases

- [UseDbProps](immu_api_session.md#usedbprops)

### Functions

- [createCloseSession](immu_api_session.md#createclosesession)
- [createKeepAlive](immu_api_session.md#createkeepalive)
- [createOpenSession](immu_api_session.md#createopensession)
- [createUseDb](immu_api_session.md#createusedb)

## Type Aliases

### UseDbProps

Ƭ **UseDbProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |

#### Defined in

[immudb-node/src/immu-api/session.ts:79](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/session.ts#L79)

## Functions

### createCloseSession

▸ **createCloseSession**(`client`): (`props`: `CallCredentials`) => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `CallCredentials` |

##### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-api/session.ts:30](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/session.ts#L30)

___

### createKeepAlive

▸ **createKeepAlive**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-api/session.ts:56](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/session.ts#L56)

___

### createOpenSession

▸ **createOpenSession**(`client`): (`sessionInfo`: [`UserDatabaseSession`](types_Session.md#userdatabasesession)) => `Promise`<[`SessionTokens`](types_Session.md#sessiontokens)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`sessionInfo`): `Promise`<[`SessionTokens`](types_Session.md#sessiontokens)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sessionInfo` | [`UserDatabaseSession`](types_Session.md#userdatabasesession) |

##### Returns

`Promise`<[`SessionTokens`](types_Session.md#sessiontokens)\>

#### Defined in

[immudb-node/src/immu-api/session.ts:10](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/session.ts#L10)

___

### createUseDb

▸ **createUseDb**(`client`): (`props`: [`UseDbProps`](immu_api_session.md#usedbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = props.database; `token`: `string` = resp.token }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `database`: `string` = props.database; `token`: `string` = resp.token }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UseDbProps`](immu_api_session.md#usedbprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `database`: `string` = props.database; `token`: `string` = resp.token }\>

#### Defined in

[immudb-node/src/immu-api/session.ts:88](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/session.ts#L88)
