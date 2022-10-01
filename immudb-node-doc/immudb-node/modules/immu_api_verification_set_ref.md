[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-set-ref

# Module: immu-api/verification-set-ref

## Table of contents

### Functions

- [createSetRefEntryGetVerification](immu_api_verification_set_ref.md#createsetrefentrygetverification)

## Functions

### createSetRefEntryGetVerification

▸ **createSetRefEntryGetVerification**(`client`): (`props`: [`SetRefEntryProps`](immu_api_set_ref_entry.md#setrefentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refEntry`: [`RefEntry`](types_Entry.md#refentry) ; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `refEntry`: [`RefEntry`](types_Entry.md#refentry) ; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetRefEntryProps`](immu_api_set_ref_entry.md#setrefentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refEntry`: [`RefEntry`](types_Entry.md#refentry) ; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-set-ref.ts:17](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-set-ref.ts#L17)
