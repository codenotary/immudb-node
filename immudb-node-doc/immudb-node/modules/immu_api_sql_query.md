[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/sql-query

# Module: immu-api/sql-query

## Table of contents

### Type Aliases

- [SqlQueryProps](immu_api_sql_query.md#sqlqueryprops)
- [SqlQueryTableProps](immu_api_sql_query.md#sqlquerytableprops)

### Functions

- [createSqlQuery](immu_api_sql_query.md#createsqlquery)
- [createSqlQueryTable](immu_api_sql_query.md#createsqlquerytable)
- [createSqlQueryTables](immu_api_sql_query.md#createsqlquerytables)

## Type Aliases

### SqlQueryProps

Ƭ **SqlQueryProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] | sql params  ```ts  sqlExec({   sql: 'select * from customer where id = :clientId',   params: [     {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},   ] }) ``` |
| `reuseSnapshot?` | `boolean` | Does this query operation needs refreshed index or not? (perhaps earlier operation was also read). |
| `sql` | `string` | Sql statements to execute. (May be multiple, all will be executed inside automatic transaction.) |

#### Defined in

[immudb-node/src/immu-api/sql-query.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/sql-query.ts#L11)

___

### SqlQueryTableProps

Ƭ **SqlQueryTableProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `table` | `string` | Sql table to query. |

#### Defined in

[immudb-node/src/immu-api/sql-query.ts:103](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/sql-query.ts#L103)

## Functions

### createSqlQuery

▸ **createSqlQuery**(`client`): (`props`: [`SqlQueryProps`](immu_api_sql_query.md#sqlqueryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlQueryProps`](immu_api_sql_query.md#sqlqueryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-api/sql-query.ts:43](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/sql-query.ts#L43)

___

### createSqlQueryTable

▸ **createSqlQueryTable**(`client`): (`props`: [`SqlQueryTableProps`](immu_api_sql_query.md#sqlquerytableprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlQueryTableProps`](immu_api_sql_query.md#sqlquerytableprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-api/sql-query.ts:111](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/sql-query.ts#L111)

___

### createSqlQueryTables

▸ **createSqlQueryTables**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-api/sql-query.ts:74](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/sql-query.ts#L74)
