[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-set-val

# Module: immu-api/verification-set-val

## Table of contents

### Type Aliases

- [ProofRequestProps](immu_api_verification_set_val.md#proofrequestprops)

### Functions

- [createSetValEntriesGetVerification](immu_api_verification_set_val.md#createsetvalentriesgetverification)

## Type Aliases

### ProofRequestProps

Ƭ **ProofRequestProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `refHash` | `Buffer` |
| `refTxId` | `Long` |

#### Defined in

[immudb-node/src/immu-api/verification-set-val.ts:12](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-set-val.ts#L12)

## Functions

### createSetValEntriesGetVerification

▸ **createSetValEntriesGetVerification**(`client`): (`props`: [`SetValEntryProps`](immu_api_set_val_entry.md#setvalentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

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
| `props` | [`SetValEntryProps`](immu_api_set_val_entry.md#setvalentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-set-val.ts:19](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-set-val.ts#L19)
