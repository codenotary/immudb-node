[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-verification/entry

# Module: immu-grpc-verification/entry

## Table of contents

### Functions

- [grpcTxEntriesToVerificationEntries](immu_grpc_verification_entry.md#grpctxentriestoverificationentries)
- [kvmsToVerificationEntries](immu_grpc_verification_entry.md#kvmstoverificationentries)

## Functions

### grpcTxEntriesToVerificationEntries

▸ **grpcTxEntriesToVerificationEntries**(`props`): [`VerificationEntriesAllOf`](types_VerificationEntries.md#verificationentriesallof)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.allEntriesMht` | `Buffer` |
| `props.txEntries` | `TxEntry__Output`[] |

#### Returns

[`VerificationEntriesAllOf`](types_VerificationEntries.md#verificationentriesallof)

#### Defined in

[immudb-node/src/immu-grpc-verification/entry.ts:27](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-verification/entry.ts#L27)

___

### kvmsToVerificationEntries

▸ **kvmsToVerificationEntries**(`props`): [`VerificationEntriesAllOf`](types_VerificationEntries.md#verificationentriesallof)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.allEntriesMht` | `Buffer` |
| `props.kvms` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta)[] |

#### Returns

[`VerificationEntriesAllOf`](types_VerificationEntries.md#verificationentriesallof)

#### Defined in

[immudb-node/src/immu-grpc-verification/entry.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-verification/entry.ts#L11)
