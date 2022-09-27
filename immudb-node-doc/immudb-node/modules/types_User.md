[immudb-node](../README.md) / [Exports](../modules.md) / types/User

# Module: types/User

## Table of contents

### Type Aliases

- [UserCredentials](types_User.md#usercredentials)
- [UserInfo](types_User.md#userinfo)

## Type Aliases

### UserCredentials

Ƭ **UserCredentials**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | Password |
| `username` | `string` | Name of immudb instance user |

#### Defined in

[immudb-node/src/types/User.ts:33](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/User.ts#L33)

___

### UserInfo

Ƭ **UserInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | Is this immudb instance user active |
| `createdBy` | `string` | Name of immudb instance user which created this user |
| `createdDate` | `Date` | Date when immudb instance user was created |
| `permissions` | [`DatabasePermission`](types_Permission.md#databasepermission)[] | Immudb instance user permissions for databases |
| `username` | `string` | Name of immudb instance user |

#### Defined in

[immudb-node/src/types/User.ts:8](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/User.ts#L8)
