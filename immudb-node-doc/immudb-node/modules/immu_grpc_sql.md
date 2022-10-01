[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-sql

# Module: immu-grpc-sql

## Table of contents

### Functions

- [grpcQueryResultToListoOfSqlNamedValues](immu_grpc_sql.md#grpcqueryresulttolistoofsqlnamedvalues)
- [grpcSqlNamedParamToSqlNamedValue](immu_grpc_sql.md#grpcsqlnamedparamtosqlnamedvalue)
- [grpcSqlObjectNamedValueToNamedValues](immu_grpc_sql.md#grpcsqlobjectnamedvaluetonamedvalues)
- [grpcSqlRowToSqlNamedValues](immu_grpc_sql.md#grpcsqlrowtosqlnamedvalues)
- [grpcSqlValueToSqlValue](immu_grpc_sql.md#grpcsqlvaluetosqlvalue)
- [sqlNamedValueToGrpcSqlNamedParam](immu_grpc_sql.md#sqlnamedvaluetogrpcsqlnamedparam)
- [sqlValueToGrpcSqlValue](immu_grpc_sql.md#sqlvaluetogrpcsqlvalue)

## Functions

### grpcQueryResultToListoOfSqlNamedValues

▸ **grpcQueryResultToListoOfSqlNamedValues**(`queryResult`): [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryResult` | `SQLQueryResult__Output` |

#### Returns

[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[][]

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:23](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L23)

___

### grpcSqlNamedParamToSqlNamedValue

▸ **grpcSqlNamedParamToSqlNamedValue**(`param`): [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)

Maps grpc sql value and value name to more js friendly value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `NamedParam__Output` |

#### Returns

[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:85](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L85)

___

### grpcSqlObjectNamedValueToNamedValues

▸ **grpcSqlObjectNamedValueToNamedValues**(`objectNamedValue`): [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectNamedValue` | `Object` |

#### Returns

[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[]

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:7](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L7)

___

### grpcSqlRowToSqlNamedValues

▸ **grpcSqlRowToSqlNamedValues**(`grpcRow`): [`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `grpcRow` | `Row__Output` |

#### Returns

[`SqlNamedValue`](types_SQL.md#sqlnamedvalue)[]

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:30](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L30)

___

### grpcSqlValueToSqlValue

▸ **grpcSqlValueToSqlValue**(`param`): [`SqlValue`](types_SQL.md#sqlvalue)

Maps grpc sql value to more js friendly value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `SQLValue__Output` |

#### Returns

[`SqlValue`](types_SQL.md#sqlvalue)

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:103](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L103)

___

### sqlNamedValueToGrpcSqlNamedParam

▸ **sqlNamedValueToGrpcSqlNamedParam**(`param`): `igrpc.NamedParam`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`SqlNamedValue`](types_SQL.md#sqlnamedvalue) |

#### Returns

`igrpc.NamedParam`

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:42](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L42)

___

### sqlValueToGrpcSqlValue

▸ **sqlValueToGrpcSqlValue**(`param`): `igrpc.SQLValue__Output`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`SqlValue`](types_SQL.md#sqlvalue) |

#### Returns

`igrpc.SQLValue__Output`

#### Defined in

[immudb-node/src/immu-grpc-sql/index.ts:63](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-grpc-sql/index.ts#L63)
