[immudb-node](../README.md) / [Exports](../modules.md) / types/Session

# Module: types/Session

## Table of contents

### Type Aliases

- [SessionTokens](types_Session.md#sessiontokens)
- [TransactionTokens](types_Session.md#transactiontokens)
- [UserDatabaseSession](types_Session.md#userdatabasesession)
- [UserSessionCredentials](types_Session.md#usersessioncredentials)

## Type Aliases

### SessionTokens

Ƭ **SessionTokens**: `Object`

Represents immudb user session tokens

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `immudb-uuid` | `string` | Token of immudb server. |
| `sessionid` | `string` | Token of immudb server user session. |

#### Defined in

[immudb-node/src/types/Session.ts:32](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Session.ts#L32)

___

### TransactionTokens

Ƭ **TransactionTokens**: `Object`

Represents immudb user session transaction token

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionid` | `string` | Token of immudb server user session transaction. |

#### Defined in

[immudb-node/src/types/Session.ts:47](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Session.ts#L47)

___

### UserDatabaseSession

Ƭ **UserDatabaseSession**: [`UserSessionCredentials`](types_Session.md#usersessioncredentials) & { `database`: `string`  }

Information needed to connect user with immudb database.

#### Defined in

[immudb-node/src/types/Session.ts:21](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Session.ts#L21)

___

### UserSessionCredentials

Ƭ **UserSessionCredentials**: `Object`

User credentials needed for immudb session.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | User password. |
| `user` | `string` | Name of user. |

#### Defined in

[immudb-node/src/types/Session.ts:6](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Session.ts#L6)
