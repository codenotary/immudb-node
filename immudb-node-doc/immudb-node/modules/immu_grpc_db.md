[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-db

# Module: immu-grpc-db

## Table of contents

### Functions

- [dbUpdatableSettingsToGrpcDbSettings](immu_grpc_db.md#dbupdatablesettingstogrpcdbsettings)
- [fromIndexNullableSettings\_\_Output](immu_grpc_db.md#fromindexnullablesettings__output)
- [fromReplicationNullableSettings\_\_Output](immu_grpc_db.md#fromreplicationnullablesettings__output)
- [grpcDbSettingsToDbSettings](immu_grpc_db.md#grpcdbsettingstodbsettings)
- [toDatabaseNullableSettings](immu_grpc_db.md#todatabasenullablesettings)
- [toImmutableDatabaseNullableSettings](immu_grpc_db.md#toimmutabledatabasenullablesettings)
- [toImmutableIndexNullableSettings](immu_grpc_db.md#toimmutableindexnullablesettings)
- [toMutableIndexNullableSettings](immu_grpc_db.md#tomutableindexnullablesettings)
- [toReplicationNullableSettings](immu_grpc_db.md#toreplicationnullablesettings)

## Functions

### dbUpdatableSettingsToGrpcDbSettings

▸ **dbUpdatableSettingsToGrpcDbSettings**(`settings`): `igrpc.DatabaseNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`DatabaseSettingsUpdatable`](types_Db.md#databasesettingsupdatable) |

#### Returns

`igrpc.DatabaseNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:10](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L10)

___

### fromIndexNullableSettings\_\_Output

▸ **fromIndexNullableSettings__Output**(`indexSettings?`): [`IndexSettings`](types_Db.md#indexsettings)

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexSettings?` | ``null`` \| `IndexNullableSettings__Output` |

#### Returns

[`IndexSettings`](types_Db.md#indexsettings)

#### Defined in

[immudb-node/src/immu-grpc-db.ts:84](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L84)

___

### fromReplicationNullableSettings\_\_Output

▸ **fromReplicationNullableSettings__Output**(`replicationSettings?`): [`ReplicationSettings`](types_Db.md#replicationsettings)

#### Parameters

| Name | Type |
| :------ | :------ |
| `replicationSettings?` | ``null`` \| `ReplicationNullableSettings__Output` |

#### Returns

[`ReplicationSettings`](types_Db.md#replicationsettings)

#### Defined in

[immudb-node/src/immu-grpc-db.ts:150](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L150)

___

### grpcDbSettingsToDbSettings

▸ **grpcDbSettingsToDbSettings**(`databaseSettings`): [`DatabaseSettings`](types_Db.md#databasesettings)

#### Parameters

| Name | Type |
| :------ | :------ |
| `databaseSettings` | ``null`` \| `DatabaseNullableSettings__Output` |

#### Returns

[`DatabaseSettings`](types_Db.md#databasesettings)

#### Defined in

[immudb-node/src/immu-grpc-db.ts:33](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L33)

___

### toDatabaseNullableSettings

▸ **toDatabaseNullableSettings**(`settings`): `igrpc.DatabaseNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`DatabaseSettings`](types_Db.md#databasesettings) |

#### Returns

`igrpc.DatabaseNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:70](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L70)

___

### toImmutableDatabaseNullableSettings

▸ **toImmutableDatabaseNullableSettings**(`settings`): `igrpc.DatabaseNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`DatabaseSettingsReadonly`](types_Db.md#databasesettingsreadonly) |

#### Returns

`igrpc.DatabaseNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:136](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L136)

___

### toImmutableIndexNullableSettings

▸ **toImmutableIndexNullableSettings**(`settings?`): `igrpc.IndexNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`IndexSettingsReadonly`](types_Db.md#indexsettingsreadonly) |

#### Returns

`igrpc.IndexNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:125](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L125)

___

### toMutableIndexNullableSettings

▸ **toMutableIndexNullableSettings**(`settings?`): `igrpc.IndexNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`IndexSettings`](types_Db.md#indexsettings) |

#### Returns

`igrpc.IndexNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:105](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L105)

___

### toReplicationNullableSettings

▸ **toReplicationNullableSettings**(`settings?`): `igrpc.ReplicationNullableSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`ReplicationSettings`](types_Db.md#replicationsettings) |

#### Returns

`igrpc.ReplicationNullableSettings`

#### Defined in

[immudb-node/src/immu-grpc-db.ts:164](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-db.ts#L164)
