[immudb-node](../README.md) / [Exports](../modules.md) / types/Permission

# Module: types/Permission

## Table of contents

### Type Aliases

- [DatabasePermission](types_Permission.md#databasepermission)
- [KnownPermissionName](types_Permission.md#knownpermissionname)
- [Permission](types_Permission.md#permission)
- [PermissionCode](types_Permission.md#permissioncode)
- [UserPermission](types_Permission.md#userpermission)

## Type Aliases

### DatabasePermission

Ƭ **DatabasePermission**: `Object`

Permission for database

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Database name |
| `permission` | [`Permission`](types_Permission.md#permission) | Permission known name or code |

#### Defined in

[immudb-node/src/types/Permission.ts:15](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Permission.ts#L15)

___

### KnownPermissionName

Ƭ **KnownPermissionName**: ``"ReadWrite"`` \| ``"None"`` \| ``"Read"`` \| ``"Admin"`` \| ``"SysAdmin"``

#### Defined in

[immudb-node/src/types/Permission.ts:6](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Permission.ts#L6)

___

### Permission

Ƭ **Permission**: [`PermissionCode`](types_Permission.md#permissioncode) \| [`KnownPermissionName`](types_Permission.md#knownpermissionname)

#### Defined in

[immudb-node/src/types/Permission.ts:4](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Permission.ts#L4)

___

### PermissionCode

Ƭ **PermissionCode**: `number`

#### Defined in

[immudb-node/src/types/Permission.ts:5](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Permission.ts#L5)

___

### UserPermission

Ƭ **UserPermission**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Database name |
| `permission` | [`Permission`](types_Permission.md#permission) | Permission known name or code |
| `username` | `string` | Name of immudb instance user |

#### Defined in

[immudb-node/src/types/Permission.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Permission.ts#L27)
