[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-get-sql-row

# Module: immu-api/verification-get-sql-row

## Table of contents

### Type Aliases

- [GetSqlRowEntryAndVerificationProps](immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops)

### Functions

- [createGetSqlRowEntryAndVerification](immu_api_verification_get_sql_row.md#creategetsqlrowentryandverification)

## Type Aliases

### GetSqlRowEntryAndVerificationProps

Ƭ **GetSqlRowEntryAndVerificationProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbTxesWindow?` | { `endId?`: `Long` ; `startId?`: `Long`  } | - |
| `dbTxesWindow.endId?` | `Long` | - |
| `dbTxesWindow.startId?` | `Long` | - |
| `pk` | [`SqlValue`](types_SQL.md#sqlvalue)[] | SqlRowEntry primary key |
| `refHash` | `Buffer` | - |
| `refTxId` | `Long` | - |

#### Defined in

[immudb-node/src/immu-api/verification-get-sql-row.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-sql-row.ts#L11)

## Functions

### createGetSqlRowEntryAndVerification

▸ **createGetSqlRowEntryAndVerification**(`client`): (`props`: [`GetSqlRowEntryAndVerificationProps`](immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetSqlRowEntryAndVerificationProps`](immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-get-sql-row.ts:25](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-sql-row.ts#L25)
