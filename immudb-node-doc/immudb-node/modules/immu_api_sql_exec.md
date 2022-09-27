[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/sql-exec

# Module: immu-api/sql-exec

## Table of contents

### Type Aliases

- [SqlExecProps](immu_api_sql_exec.md#sqlexecprops)

### Functions

- [createSqlExec](immu_api_sql_exec.md#createsqlexec)

## Type Aliases

### SqlExecProps

Ƭ **SqlExecProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for ImmuDb to update database indexes, setting this  value to `true` may cause operation to speed up in exchange for  stale database latest keys values.    For example geting key value will return key value pointed by  indexer. If indexer is not up to date, returned value may be not  latest value.    Default value is `false`. |
| `params?` | [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] | sql params    ```ts    sqlExec({    sql: 'select * from customer where id = :clientId',    params: [      {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},    ]  })  ``` |
| `sql` | `string` | Sql statements to execute. (May be multiple, all will be executed inside  automatic transaction.) |

#### Defined in

[immudb-node/src/immu-api/sql-exec.ts:10](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-exec.ts#L10)

## Functions

### createSqlExec

▸ **createSqlExec**(`client`): (`props`: [`SqlExecProps`](immu_api_sql_exec.md#sqlexecprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlExecProps`](immu_api_sql_exec.md#sqlexecprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\>

#### Defined in

[immudb-node/src/immu-api/sql-exec.ts:53](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-exec.ts#L53)
