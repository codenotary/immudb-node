[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc/unary-call

# Module: immu-grpc/unary-call

## Table of contents

### Functions

- [createChangePassword](immu_grpc_unary_call.md#createchangepassword)
- [createChangePermission](immu_grpc_unary_call.md#createchangepermission)
- [createCloseSession](immu_grpc_unary_call.md#createclosesession)
- [createCommit](immu_grpc_unary_call.md#createcommit)
- [createCompactIndex](immu_grpc_unary_call.md#createcompactindex)
- [createCreateDatabaseV2](immu_grpc_unary_call.md#createcreatedatabasev2)
- [createCreateUsers](immu_grpc_unary_call.md#createcreateusers)
- [createCurrentState](immu_grpc_unary_call.md#createcurrentstate)
- [createDatabaseHealth](immu_grpc_unary_call.md#createdatabasehealth)
- [createDatabaseListV2](immu_grpc_unary_call.md#createdatabaselistv2)
- [createDelete](immu_grpc_unary_call.md#createdelete)
- [createDeleteDatabase](immu_grpc_unary_call.md#createdeletedatabase)
- [createDescribeTable](immu_grpc_unary_call.md#createdescribetable)
- [createExecAll](immu_grpc_unary_call.md#createexecall)
- [createFlushIndex](immu_grpc_unary_call.md#createflushindex)
- [createGet](immu_grpc_unary_call.md#createget)
- [createGetAll](immu_grpc_unary_call.md#creategetall)
- [createGetDatabaseSettingsV2](immu_grpc_unary_call.md#creategetdatabasesettingsv2)
- [createHealth](immu_grpc_unary_call.md#createhealth)
- [createHistory](immu_grpc_unary_call.md#createhistory)
- [createKeepAlive](immu_grpc_unary_call.md#createkeepalive)
- [createListTables](immu_grpc_unary_call.md#createlisttables)
- [createListUsers](immu_grpc_unary_call.md#createlistusers)
- [createLoadDatabase](immu_grpc_unary_call.md#createloaddatabase)
- [createNewTx](immu_grpc_unary_call.md#createnewtx)
- [createOpenSession](immu_grpc_unary_call.md#createopensession)
- [createRollback](immu_grpc_unary_call.md#createrollback)
- [createScan](immu_grpc_unary_call.md#createscan)
- [createSet](immu_grpc_unary_call.md#createset)
- [createSetActiveUser](immu_grpc_unary_call.md#createsetactiveuser)
- [createSetReference](immu_grpc_unary_call.md#createsetreference)
- [createSqlExec](immu_grpc_unary_call.md#createsqlexec)
- [createSqlQuery](immu_grpc_unary_call.md#createsqlquery)
- [createTxById](immu_grpc_unary_call.md#createtxbyid)
- [createTxScan](immu_grpc_unary_call.md#createtxscan)
- [createTxSqlExec](immu_grpc_unary_call.md#createtxsqlexec)
- [createTxSqlQuery](immu_grpc_unary_call.md#createtxsqlquery)
- [createUnloadDatabase](immu_grpc_unary_call.md#createunloaddatabase)
- [createUpdateDatabaseV2](immu_grpc_unary_call.md#createupdatedatabasev2)
- [createUseDatabase](immu_grpc_unary_call.md#createusedatabase)
- [createVerifiableGet](immu_grpc_unary_call.md#createverifiableget)
- [createVerifiableSet](immu_grpc_unary_call.md#createverifiableset)
- [createVerifiableSetReference](immu_grpc_unary_call.md#createverifiablesetreference)
- [createVerifiableSqlGet](immu_grpc_unary_call.md#createverifiablesqlget)
- [createVerifiableTxById](immu_grpc_unary_call.md#createverifiabletxbyid)
- [createVerifiableZAdd](immu_grpc_unary_call.md#createverifiablezadd)
- [createZAdd](immu_grpc_unary_call.md#createzadd)
- [createZScan](immu_grpc_unary_call.md#createzscan)

## Functions

### createChangePassword

▸ **createChangePassword**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ChangePasswordRequest`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ChangePasswordRequest`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:255](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L255)

___

### createChangePermission

▸ **createChangePermission**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ChangePermissionRequest`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ChangePermissionRequest`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:261](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L261)

___

### createCloseSession

▸ **createCloseSession**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:20](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L20)

___

### createCommit

▸ **createCommit**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `CommittedSQLTx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `CommittedSQLTx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `CommittedSQLTx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:44](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L44)

___

### createCompactIndex

▸ **createCompactIndex**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:319](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L319)

___

### createCreateDatabaseV2

▸ **createCreateDatabaseV2**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `CreateDatabaseRequest`  }) => `Promise`<`undefined` \| `CreateDatabaseResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `CreateDatabaseResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `CreateDatabaseRequest`  } |

##### Returns

`Promise`<`undefined` \| `CreateDatabaseResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:289](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L289)

___

### createCreateUsers

▸ **createCreateUsers**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `CreateUserRequest`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `CreateUserRequest`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:243](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L243)

___

### createCurrentState

▸ **createCurrentState**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `ImmutableState__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `ImmutableState__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `ImmutableState__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:355](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L355)

___

### createDatabaseHealth

▸ **createDatabaseHealth**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `DatabaseHealthResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `DatabaseHealthResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `DatabaseHealthResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:337](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L337)

___

### createDatabaseListV2

▸ **createDatabaseListV2**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DatabaseListRequestV2`  }) => `Promise`<`undefined` \| `DatabaseListResponseV2__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `DatabaseListResponseV2__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DatabaseListRequestV2`  } |

##### Returns

`Promise`<`undefined` \| `DatabaseListResponseV2__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:277](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L277)

___

### createDelete

▸ **createDelete**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DeleteKeysRequest`  }) => `Promise`<`undefined` \| `TxHeader__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxHeader__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DeleteKeysRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxHeader__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:209](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L209)

___

### createDeleteDatabase

▸ **createDeleteDatabase**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DeleteDatabaseRequest`  }) => `Promise`<`undefined` \| `DeleteDatabaseResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `DeleteDatabaseResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DeleteDatabaseRequest`  } |

##### Returns

`Promise`<`undefined` \| `DeleteDatabaseResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:331](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L331)

___

### createDescribeTable

▸ **createDescribeTable**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Table`  }) => `Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `SQLQueryResult__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Table`  } |

##### Returns

`Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:97](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L97)

___

### createExecAll

▸ **createExecAll**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ExecAllRequest`  }) => `Promise`<`undefined` \| `TxHeader__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxHeader__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ExecAllRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxHeader__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:203](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L203)

___

### createFlushIndex

▸ **createFlushIndex**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `FlushIndexRequest`  }) => `Promise`<`undefined` \| `FlushIndexResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `FlushIndexResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `FlushIndexRequest`  } |

##### Returns

`Promise`<`undefined` \| `FlushIndexResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:325](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L325)

___

### createGet

▸ **createGet**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `KeyRequest`  }) => `Promise`<`undefined` \| `Entry__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Entry__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `KeyRequest`  } |

##### Returns

`Promise`<`undefined` \| `Entry__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:122](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L122)

___

### createGetAll

▸ **createGetAll**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `KeyListRequest`  }) => `Promise`<`undefined` \| `Entries__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Entries__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `KeyListRequest`  } |

##### Returns

`Promise`<`undefined` \| `Entries__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:128](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L128)

___

### createGetDatabaseSettingsV2

▸ **createGetDatabaseSettingsV2**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DatabaseSettingsRequest`  }) => `Promise`<`undefined` \| `DatabaseSettingsResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `DatabaseSettingsResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `DatabaseSettingsRequest`  } |

##### Returns

`Promise`<`undefined` \| `DatabaseSettingsResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:283](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L283)

___

### createHealth

▸ **createHealth**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `HealthResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `HealthResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `HealthResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:349](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L349)

___

### createHistory

▸ **createHistory**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `HistoryRequest`  }) => `Promise`<`undefined` \| `Entries__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Entries__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `HistoryRequest`  } |

##### Returns

`Promise`<`undefined` \| `Entries__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:158](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L158)

___

### createKeepAlive

▸ **createKeepAlive**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:26](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L26)

___

### createListTables

▸ **createListTables**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `SQLQueryResult__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:91](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L91)

___

### createListUsers

▸ **createListUsers**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `UserList__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `UserList__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `UserList__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:249](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L249)

___

### createLoadDatabase

▸ **createLoadDatabase**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `LoadDatabaseRequest`  }) => `Promise`<`undefined` \| `LoadDatabaseResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `LoadDatabaseResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `LoadDatabaseRequest`  } |

##### Returns

`Promise`<`undefined` \| `LoadDatabaseResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:307](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L307)

___

### createNewTx

▸ **createNewTx**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `NewTxRequest`  }) => `Promise`<`undefined` \| `NewTxResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `NewTxResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `NewTxRequest`  } |

##### Returns

`Promise`<`undefined` \| `NewTxResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:38](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L38)

___

### createOpenSession

▸ **createOpenSession**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `OpenSessionRequest`  }) => `Promise`<`undefined` \| `OpenSessionResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `OpenSessionResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `OpenSessionRequest`  } |

##### Returns

`Promise`<`undefined` \| `OpenSessionResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:14](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L14)

___

### createRollback

▸ **createRollback**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Empty`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:50](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L50)

___

### createScan

▸ **createScan**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ScanRequest`  }) => `Promise`<`undefined` \| `Entries__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Entries__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ScanRequest`  } |

##### Returns

`Promise`<`undefined` \| `Entries__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:140](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L140)

___

### createSet

▸ **createSet**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SetRequest`  }) => `Promise`<`undefined` \| `TxHeader__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxHeader__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SetRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxHeader__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:185](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L185)

___

### createSetActiveUser

▸ **createSetActiveUser**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SetActiveUserRequest`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SetActiveUserRequest`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:267](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L267)

___

### createSetReference

▸ **createSetReference**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ReferenceRequest`  }) => `Promise`<`undefined` \| `TxHeader__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxHeader__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ReferenceRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxHeader__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:191](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L191)

___

### createSqlExec

▸ **createSqlExec**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLExecRequest`  }) => `Promise`<`undefined` \| `SQLExecResult__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `SQLExecResult__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLExecRequest`  } |

##### Returns

`Promise`<`undefined` \| `SQLExecResult__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:74](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L74)

___

### createSqlQuery

▸ **createSqlQuery**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLQueryRequest`  }) => `Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `SQLQueryResult__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLQueryRequest`  } |

##### Returns

`Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:80](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L80)

___

### createTxById

▸ **createTxById**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TxRequest`  }) => `Promise`<`undefined` \| `Tx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Tx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TxRequest`  } |

##### Returns

`Promise`<`undefined` \| `Tx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:134](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L134)

___

### createTxScan

▸ **createTxScan**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TxScanRequest`  }) => `Promise`<`undefined` \| `TxList__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxList__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `TxScanRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxList__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:146](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L146)

___

### createTxSqlExec

▸ **createTxSqlExec**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLExecRequest`  }) => `Promise`<`undefined` \| `Empty__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `Empty__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLExecRequest`  } |

##### Returns

`Promise`<`undefined` \| `Empty__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:58](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L58)

___

### createTxSqlQuery

▸ **createTxSqlQuery**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLQueryRequest`  }) => `Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `SQLQueryResult__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `SQLQueryRequest`  } |

##### Returns

`Promise`<`undefined` \| `SQLQueryResult__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:64](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L64)

___

### createUnloadDatabase

▸ **createUnloadDatabase**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `UnloadDatabaseRequest`  }) => `Promise`<`undefined` \| `UnloadDatabaseResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `UnloadDatabaseResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `UnloadDatabaseRequest`  } |

##### Returns

`Promise`<`undefined` \| `UnloadDatabaseResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:313](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L313)

___

### createUpdateDatabaseV2

▸ **createUpdateDatabaseV2**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `UpdateDatabaseRequest`  }) => `Promise`<`undefined` \| `UpdateDatabaseResponse__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `UpdateDatabaseResponse__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `UpdateDatabaseRequest`  } |

##### Returns

`Promise`<`undefined` \| `UpdateDatabaseResponse__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:295](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L295)

___

### createUseDatabase

▸ **createUseDatabase**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Database`  }) => `Promise`<`undefined` \| `UseDatabaseReply__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `UseDatabaseReply__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `Database`  } |

##### Returns

`Promise`<`undefined` \| `UseDatabaseReply__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:301](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L301)

___

### createVerifiableGet

▸ **createVerifiableGet**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableGetRequest`  }) => `Promise`<`undefined` \| `VerifiableEntry__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableEntry__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableGetRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableEntry__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:168](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L168)

___

### createVerifiableSet

▸ **createVerifiableSet**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableSetRequest`  }) => `Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableTx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableSetRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:221](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L221)

___

### createVerifiableSetReference

▸ **createVerifiableSetReference**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableReferenceRequest`  }) => `Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableTx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableReferenceRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:227](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L227)

___

### createVerifiableSqlGet

▸ **createVerifiableSqlGet**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableSQLGetRequest`  }) => `Promise`<`undefined` \| `VerifiableSQLEntry__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableSQLEntry__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableSQLGetRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableSQLEntry__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:107](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L107)

___

### createVerifiableTxById

▸ **createVerifiableTxById**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableTxRequest`  }) => `Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableTx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableTxRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:174](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L174)

___

### createVerifiableZAdd

▸ **createVerifiableZAdd**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableZAddRequest`  }) => `Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `VerifiableTx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `VerifiableZAddRequest`  } |

##### Returns

`Promise`<`undefined` \| `VerifiableTx__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:233](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L233)

___

### createZAdd

▸ **createZAdd**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ZAddRequest`  }) => `Promise`<`undefined` \| `TxHeader__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `TxHeader__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ZAddRequest`  } |

##### Returns

`Promise`<`undefined` \| `TxHeader__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:197](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L197)

___

### createZScan

▸ **createZScan**(`client`): (`props`: [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ZScanRequest`  }) => `Promise`<`undefined` \| `ZEntries__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`undefined` \| `ZEntries__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GrpcCallMetaAndOpts`](types_GrpcCallMetaAndOpts.md#grpccallmetaandopts) & { `request`: `ZScanRequest`  } |

##### Returns

`Promise`<`undefined` \| `ZEntries__Output`\>

#### Defined in

[immudb-node/src/immu-grpc/unary-call.ts:152](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/unary-call.ts#L152)
