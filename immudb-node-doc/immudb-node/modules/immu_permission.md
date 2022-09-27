[immudb-node](../README.md) / [Exports](../modules.md) / immu-permission

# Module: immu-permission

## Table of contents

### Type Aliases

- [Invert](immu_permission.md#invert)

### Variables

- [knownPermissionCodeToName](immu_permission.md#knownpermissioncodetoname)
- [knownPermissionNameToCode](immu_permission.md#knownpermissionnametocode)

### Functions

- [permissionFromCode](immu_permission.md#permissionfromcode)
- [permissionToCode](immu_permission.md#permissiontocode)
- [permissionToKnownIfPossible](immu_permission.md#permissiontoknownifpossible)

## Type Aliases

### Invert

Ƭ **Invert**<`T`\>: { [P in keyof T as T[P]]: P }

Inverts const maps, e.g.

**`Example`**

```ts
Invert<{None: 0, Sth: 1} as const>
// -> {1: 'None', 2: 'Sth'} as const
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`PropertyKey`, `PropertyKey`\> |

#### Defined in

[immudb-node/src/immu-permission.ts:78](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L78)

## Variables

### knownPermissionCodeToName

• `Const` **knownPermissionCodeToName**: [`Invert`](immu_permission.md#invert)<typeof [`knownPermissionNameToCode`](immu_permission.md#knownpermissionnametocode)\>

#### Defined in

[immudb-node/src/immu-permission.ts:83](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L83)

___

### knownPermissionNameToCode

• `Const` **knownPermissionNameToCode**: `Object`

Permission names to codes.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `Admin` | ``254`` | Permission to read, write and administer database |
| `None` | ``0`` | No permissions |
| `Read` | ``1`` | Permission to read database |
| `ReadWrite` | ``2`` | Permission to read and write database |
| `SysAdmin` | ``255`` | Permission to read, write and administer all databases |

#### Defined in

[immudb-node/src/immu-permission.ts:45](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L45)

## Functions

### permissionFromCode

▸ **permissionFromCode**(`code`): [`Permission`](types_Permission.md#permission)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

[`Permission`](types_Permission.md#permission)

#### Defined in

[immudb-node/src/immu-permission.ts:18](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L18)

___

### permissionToCode

▸ **permissionToCode**(`permission`): [`PermissionCode`](types_Permission.md#permissioncode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | [`Permission`](types_Permission.md#permission) |

#### Returns

[`PermissionCode`](types_Permission.md#permissioncode)

#### Defined in

[immudb-node/src/immu-permission.ts:29](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L29)

___

### permissionToKnownIfPossible

▸ **permissionToKnownIfPossible**(`permission`): [`Permission`](types_Permission.md#permission)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | [`KnownPermissionName`](types_Permission.md#knownpermissionname) |

#### Returns

[`Permission`](types_Permission.md#permission)

#### Defined in

[immudb-node/src/immu-permission.ts:6](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-permission.ts#L6)
