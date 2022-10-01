[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-get-tx

# Module: immu-api/verification-get-tx

## Table of contents

### Type Aliases

- [GetTxAndVerificationProps](immu_api_verification_get_tx.md#gettxandverificationprops)

### Functions

- [createGetTxAndVerification](immu_api_verification_get_tx.md#creategettxandverification)

## Type Aliases

### GetTxAndVerificationProps

Ƭ **GetTxAndVerificationProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dbTxesWindow?` | { `startId?`: `Long`  } |
| `dbTxesWindow.startId?` | `Long` |
| `refHash` | `Buffer` |
| `refTxId` | `Long` |
| `txId` | `Long` |

#### Defined in

[immudb-node/src/immu-api/verification-get-tx.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-tx.ts#L11)

## Functions

### createGetTxAndVerification

▸ **createGetTxAndVerification**(`client`): (`props`: [`GetTxAndVerificationProps`](immu_api_verification_get_tx.md#gettxandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

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
| `props` | [`GetTxAndVerificationProps`](immu_api_verification_get_tx.md#gettxandverificationprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-get-tx.ts:21](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-tx.ts#L21)
