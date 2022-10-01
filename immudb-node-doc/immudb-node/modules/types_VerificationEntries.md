[immudb-node](../README.md) / [Exports](../modules.md) / types/VerificationEntries

# Module: types/VerificationEntries

## Table of contents

### Type Aliases

- [VerificationEntries](types_VerificationEntries.md#verificationentries)
- [VerificationEntriesAllOf](types_VerificationEntries.md#verificationentriesallof)
- [VerificationEntriesOneOf](types_VerificationEntries.md#verificationentriesoneof)

## Type Aliases

### VerificationEntries

Ƭ **VerificationEntries**: [`VerificationEntriesOneOf`](types_VerificationEntries.md#verificationentriesoneof) \| [`VerificationEntriesAllOf`](types_VerificationEntries.md#verificationentriesallof)

Verification structure for entry/entries. Structure must be in prefect
equilibrium to verify successfully.

#### Defined in

[immudb-node/src/types/VerificationEntries.ts:31](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationEntries.ts#L31)

___

### VerificationEntriesAllOf

Ƭ **VerificationEntriesAllOf**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allEntries` | [`Entry`](types_Entry.md#entry)[] |
| `allEntriesMht` | `Buffer` |
| `type` | ``"all-of"`` |

#### Defined in

[immudb-node/src/types/VerificationEntries.ts:18](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationEntries.ts#L18)

___

### VerificationEntriesOneOf

Ƭ **VerificationEntriesOneOf**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allEntriesCount` | `number` |
| `allEntriesMht` | `Buffer` |
| `entry` | [`Entry`](types_Entry.md#entry) |
| `entryId` | `number` |
| `entryInclusionProof` | `Buffer`[] |
| `type` | ``"one-of"`` |

#### Defined in

[immudb-node/src/types/VerificationEntries.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationEntries.ts#L8)
