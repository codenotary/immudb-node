[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/sql-tx

# Module: immu-api/sql-tx

## Table of contents

### Type Aliases

- [SqlTxExecProps](immu_api_sql_tx.md#sqltxexecprops)
- [SqlTxNewProps](immu_api_sql_tx.md#sqltxnewprops)
- [SqlTxQueryProps](immu_api_sql_tx.md#sqltxqueryprops)

### Functions

- [createSqlTxCommit](immu_api_sql_tx.md#createsqltxcommit)
- [createSqlTxExec](immu_api_sql_tx.md#createsqltxexec)
- [createSqlTxNew](immu_api_sql_tx.md#createsqltxnew)
- [createSqlTxQuery](immu_api_sql_tx.md#createsqltxquery)
- [createSqlTxRollback](immu_api_sql_tx.md#createsqltxrollback)

## Type Aliases

### SqlTxExecProps

Ƭ **SqlTxExecProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for ImmuDb to update database indexes, setting this  value to `true` may cause operation to speed up in exchange for  stale database latest keys values.    For example geting key value will return key value pointed by  indexer. If indexer is not up to date, returned value may be not  latest value.    Default value is `false`. |
| `params?` | [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] | sql params    ```ts    sqlExec({    sql: 'select * from customer where id = :clientId',    params: [      {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},    ]  })  ``` |
| `sql` | `string` | Sql statements to execute. (May be multiple, all will be executed inside  automatic transaction.) |

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:132](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L132)

___

### SqlTxNewProps

Ƭ **SqlTxNewProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode?` | ``"ReadOnly"`` \| ``"WriteOnly"`` \| ``"ReadWrite"`` | Mode of interactive transaction:  - `ReadOnly` declares that transaction will not modify db,  - `WriteOnly` declares that transaction will not depend on reading db,  - `ReadWrite` declares that transaction may read and write to db. |

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:10](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L10)

___

### SqlTxQueryProps

Ƭ **SqlTxQueryProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] | sql params    ```ts    sqlExec({    sql: 'select * from customer where id = :clientId',    params: [      {name: ':clientId', type: 'Int64', value: Long.fromValue(10)},    ]  })  ``` |
| `reuseSnapshot?` | `boolean` | Does this query operation needs refreshed index  or not? (perhaps earlier operation was also read). |
| `sql` | `string` | Sql statements to execute. (May be multiple, all will be executed inside  automatic transaction.) |

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:200](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L200)

## Functions

### createSqlTxCommit

▸ **createSqlTxCommit**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.credentials` | `CallCredentials` |

##### Returns

`Promise`<{ `firstPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }\>

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:55](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L55)

___

### createSqlTxExec

▸ **createSqlTxExec**(`client`): (`props`: [`SqlTxExecProps`](immu_api_sql_tx.md#sqltxexecprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`void`\>

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
| `props` | [`SqlTxExecProps`](immu_api_sql_tx.md#sqltxexecprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:172](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L172)

___

### createSqlTxNew

▸ **createSqlTxNew**(`client`): (`props`: [`SqlTxNewProps`](immu_api_sql_tx.md#sqltxnewprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TransactionTokens`](types_Session.md#transactiontokens)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`TransactionTokens`](types_Session.md#transactiontokens)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlTxNewProps`](immu_api_sql_tx.md#sqltxnewprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TransactionTokens`](types_Session.md#transactiontokens)\>

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:20](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L20)

___

### createSqlTxQuery

▸ **createSqlTxQuery**(`client`): (`props`: [`SqlTxQueryProps`](immu_api_sql_tx.md#sqltxqueryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

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
| `props` | [`SqlTxQueryProps`](immu_api_sql_tx.md#sqltxqueryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-api/sql-tx.ts:232](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L232)

___

### createSqlTxRollback

▸ **createSqlTxRollback**(`client`): (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\>

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

[immudb-node/src/immu-api/sql-tx.ts:102](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/sql-tx.ts#L102)
