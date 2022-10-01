[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/user

# Module: immu-api/user

## Table of contents

### Type Aliases

- [CreateUsersProps](immu_api_user.md#createusersprops)
- [SetUserActiveProps](immu_api_user.md#setuseractiveprops)
- [SetUserDbPermissionsProps](immu_api_user.md#setuserdbpermissionsprops)
- [SetUserPasswordProps](immu_api_user.md#setuserpasswordprops)

### Functions

- [createCreateUser](immu_api_user.md#createcreateuser)
- [createListUsers](immu_api_user.md#createlistusers)
- [createSetUserActive](immu_api_user.md#createsetuseractive)
- [createSetUserDbPermissions](immu_api_user.md#createsetuserdbpermissions)
- [createSetUserPassword](immu_api_user.md#createsetuserpassword)

## Type Aliases

### CreateUsersProps

Ƭ **CreateUsersProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | New user database name for which she will have permission |
| `password` | `string` | Password of new user. Password must have between 8 and 32 letters, digits and special characters of which at least 1 uppercase letter, 1 digit and 1 special character. |
| `permission` | [`Permission`](types_Permission.md#permission) | Permission given to new user on selected database. New user creator must have permissions for giving permissions on selected database. |
| `username` | `string` | Name of new user. Must be unique. |

#### Defined in

[immudb-node/src/immu-api/user.ts:73](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L73)

___

### SetUserActiveProps

Ƭ **SetUserActiveProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | Should user be active? |
| `username` | `string` | Name of existing user. |

#### Defined in

[immudb-node/src/immu-api/user.ts:176](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L176)

___

### SetUserDbPermissionsProps

Ƭ **SetUserDbPermissionsProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Database for with user permission is to be applied. |
| `grantRevoke` | ``"GRANT"`` \| ``"REVOKE"`` |  |
| `permission` | [`KnownPermissionName`](types_Permission.md#knownpermissionname) | New permissions for user. |
| `username` | `string` | Name of existing user for whome database permission is to be applied. |

#### Defined in

[immudb-node/src/immu-api/user.ts:215](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L215)

___

### SetUserPasswordProps

Ƭ **SetUserPasswordProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPassword` | `string` | New password. Must have between 8 and 32 letters, digits and special characters of which at least 1 uppercase letter, 1 digit and 1 special character. |
| `password` | `string` | Actual password |
| `username` | `string` | Name of new user. Must be unique. |

#### Defined in

[immudb-node/src/immu-api/user.ts:130](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L130)

## Functions

### createCreateUser

▸ **createCreateUser**(`client`): (`props`: [`CreateUsersProps`](immu_api_user.md#createusersprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`UserCredentials`](types_User.md#usercredentials) & [`DatabasePermission`](types_Permission.md#databasepermission)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`UserCredentials`](types_User.md#usercredentials) & [`DatabasePermission`](types_Permission.md#databasepermission)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CreateUsersProps`](immu_api_user.md#createusersprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`UserCredentials`](types_User.md#usercredentials) & [`DatabasePermission`](types_Permission.md#databasepermission)\>

#### Defined in

[immudb-node/src/immu-api/user.ts:97](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L97)

___

### createListUsers

▸ **createListUsers**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`UserInfo`](types_User.md#userinfo)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`UserInfo`](types_User.md#userinfo)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<[`UserInfo`](types_User.md#userinfo)[]\>

#### Defined in

[immudb-node/src/immu-api/user.ts:13](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L13)

___

### createSetUserActive

▸ **createSetUserActive**(`client`): (`props`: [`SetUserActiveProps`](immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SetUserActiveProps`](immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`SetUserActiveProps`](immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserActiveProps`](immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`SetUserActiveProps`](immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\>

#### Defined in

[immudb-node/src/immu-api/user.ts:188](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L188)

___

### createSetUserDbPermissions

▸ **createSetUserDbPermissions**(`client`): (`props`: [`SetUserDbPermissionsProps`](immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SetUserDbPermissionsProps`](immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`SetUserDbPermissionsProps`](immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserDbPermissionsProps`](immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`SetUserDbPermissionsProps`](immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\>

#### Defined in

[immudb-node/src/immu-api/user.ts:235](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L235)

___

### createSetUserPassword

▸ **createSetUserPassword**(`client`): (`props`: [`SetUserPasswordProps`](immu_api_user.md#setuserpasswordprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserPasswordProps`](immu_api_user.md#setuserpasswordprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-api/user.ts:148](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/user.ts#L148)
