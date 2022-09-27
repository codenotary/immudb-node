[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-set-zSet

# Module: immu-api/verification-set-zSet

## Table of contents

### Functions

- [createSetZSetEntryGetVerification](immu_api_verification_set_zSet.md#createsetzsetentrygetverification)

## Functions

### createSetZSetEntryGetVerification

▸ **createSetZSetEntryGetVerification**(`client`): (`props`: [`SetZSetEntryProps`](immu_api_set_z_entry.md#setzsetentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetZSetEntryProps`](immu_api_set_z_entry.md#setzsetentryprops) & [`ProofRequestProps`](immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `verification`: [`Verification`](types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-set-zSet.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/verification-set-zSet.ts#L16)
