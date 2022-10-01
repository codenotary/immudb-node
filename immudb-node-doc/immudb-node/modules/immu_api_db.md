[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/db

# Module: immu-api/db

## Table of contents

### Type Aliases

- [CreateDatabaseProps](immu_api_db.md#createdatabaseprops)
- [DeleteDatabaseProps](immu_api_db.md#deletedatabaseprops)
- [FlushDatabaseIndexProps](immu_api_db.md#flushdatabaseindexprops)
- [LoadDbProps](immu_api_db.md#loaddbprops)
- [SetDbSettingsProps](immu_api_db.md#setdbsettingsprops)
- [UnloadDbProps](immu_api_db.md#unloaddbprops)

### Functions

- [createCompactDbIndex](immu_api_db.md#createcompactdbindex)
- [createCreateDb](immu_api_db.md#createcreatedb)
- [createDeleteDb](immu_api_db.md#createdeletedb)
- [createFlushDbIndex](immu_api_db.md#createflushdbindex)
- [createGetDbCurrentState](immu_api_db.md#creategetdbcurrentstate)
- [createGetDbSettings](immu_api_db.md#creategetdbsettings)
- [createListDbs](immu_api_db.md#createlistdbs)
- [createLoadDb](immu_api_db.md#createloaddb)
- [createSetDbSettings](immu_api_db.md#createsetdbsettings)
- [createUnloadDb](immu_api_db.md#createunloaddb)

## Type Aliases

### CreateDatabaseProps

Ƭ **CreateDatabaseProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |
| `ifNotExists?` | `boolean` | What to do when database exists? * silently ignore --> set this value to true * (default) throw exception --> set this value to false or undefined |
| `settings` | [`DatabaseSettingsUpdatable`](types_Db.md#databasesettingsupdatable) | Database settings |

#### Defined in

[immudb-node/src/immu-api/db.ts:9](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L9)

___

### DeleteDatabaseProps

Ƭ **DeleteDatabaseProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |

#### Defined in

[immudb-node/src/immu-api/db.ts:61](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L61)

___

### FlushDatabaseIndexProps

Ƭ **FlushDatabaseIndexProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cleanupPercentage` | `number` | Indicates how much space will be scanned for unreferenced data.  Value must be between 0 and 1.  Even though this operation blocks transaction processing, choosing a small percentage e.g. 0.1 may not significantly hinder normal operations while reducing used storage space.  Partially compaction may be triggered automatically by immudb. Database settings can be modified to set the cleanupPercentage attribute to non-zero in order to accomplish this. |
| `synced` | `boolean` | Should run fsync after writing data? * true --> run fsync after writing data to avoid index regeneration in   the case of an unexpected crash * false \| undefined -->  do not run fsync after writing data |

#### Defined in

[immudb-node/src/immu-api/db.ts:100](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L100)

___

### LoadDbProps

Ƭ **LoadDbProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |

#### Defined in

[immudb-node/src/immu-api/db.ts:249](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L249)

___

### SetDbSettingsProps

Ƭ **SetDbSettingsProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |
| `settings` | [`DatabaseSettingsUpdatable`](types_Db.md#databasesettingsupdatable) | Database settings |

#### Defined in

[immudb-node/src/immu-api/db.ts:320](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L320)

___

### UnloadDbProps

Ƭ **UnloadDbProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |

#### Defined in

[immudb-node/src/immu-api/db.ts:285](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L285)

## Functions

### createCompactDbIndex

▸ **createCompactDbIndex**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\>

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

[immudb-node/src/immu-api/db.ts:152](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L152)

___

### createCreateDb

▸ **createCreateDb**(`client`): (`props`: [`CreateDatabaseProps`](immu_api_db.md#createdatabaseprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CreateDatabaseProps`](immu_api_db.md#createdatabaseprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-api/db.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L27)

___

### createDeleteDb

▸ **createDeleteDb**(`client`): (`props`: [`DeleteDatabaseProps`](immu_api_db.md#deletedatabaseprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\>

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
| `props` | [`DeleteDatabaseProps`](immu_api_db.md#deletedatabaseprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-api/db.ts:70](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L70)

___

### createFlushDbIndex

▸ **createFlushDbIndex**(`client`): (`props`: [`FlushDatabaseIndexProps`](immu_api_db.md#flushdatabaseindexprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\>

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
| `props` | [`FlushDatabaseIndexProps`](immu_api_db.md#flushdatabaseindexprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-api/db.ts:124](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L124)

___

### createGetDbCurrentState

▸ **createGetDbCurrentState**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\>

#### Defined in

[immudb-node/src/immu-api/db.ts:364](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L364)

___

### createGetDbSettings

▸ **createGetDbSettings**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-api/db.ts:179](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L179)

___

### createListDbs

▸ **createListDbs**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`DBRuntimeInfo`](types_Db.md#dbruntimeinfo)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`DBRuntimeInfo`](types_Db.md#dbruntimeinfo)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<[`DBRuntimeInfo`](types_Db.md#dbruntimeinfo)[]\>

#### Defined in

[immudb-node/src/immu-api/db.ts:211](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L211)

___

### createLoadDb

▸ **createLoadDb**(`client`): (`props`: [`LoadDbProps`](immu_api_db.md#loaddbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\>

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
| `props` | [`LoadDbProps`](immu_api_db.md#loaddbprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-api/db.ts:257](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L257)

___

### createSetDbSettings

▸ **createSetDbSettings**(`client`): (`props`: [`SetDbSettingsProps`](immu_api_db.md#setdbsettingsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetDbSettingsProps`](immu_api_db.md#setdbsettingsprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-api/db.ts:332](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L332)

___

### createUnloadDb

▸ **createUnloadDb**(`client`): (`props`: [`UnloadDbProps`](immu_api_db.md#unloaddbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`void`\>

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
| `props` | [`UnloadDbProps`](immu_api_db.md#unloaddbprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-api/db.ts:293](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/db.ts#L293)
