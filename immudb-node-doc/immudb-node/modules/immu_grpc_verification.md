[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-verification

# Module: immu-grpc-verification

## Table of contents

### References

- [computeVerificationTxType](immu_grpc_verification.md#computeverificationtxtype)
- [grpcDualProofToVerificationTx](immu_grpc_verification.md#grpcdualprooftoverificationtx)
- [grpcTxEntriesToVerificationEntries](immu_grpc_verification.md#grpctxentriestoverificationentries)
- [kvmsToVerificationEntries](immu_grpc_verification.md#kvmstoverificationentries)

### Functions

- [verificationAndTxFromGrpcVerTx](immu_grpc_verification.md#verificationandtxfromgrpcvertx)

## References

### computeVerificationTxType

Re-exports [computeVerificationTxType](immu_grpc_verification_tx.md#computeverificationtxtype)

___

### grpcDualProofToVerificationTx

Re-exports [grpcDualProofToVerificationTx](immu_grpc_verification_tx.md#grpcdualprooftoverificationtx)

___

### grpcTxEntriesToVerificationEntries

Re-exports [grpcTxEntriesToVerificationEntries](immu_grpc_verification_entry.md#grpctxentriestoverificationentries)

___

### kvmsToVerificationEntries

Re-exports [kvmsToVerificationEntries](immu_grpc_verification_entry.md#kvmstoverificationentries)

## Functions

### verificationAndTxFromGrpcVerTx

▸ **verificationAndTxFromGrpcVerTx**(`props`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.grpcVerTx` | `VerifiableTx__Output` |
| `props.refHash` | `Buffer` |
| `props.refTxId` | `Long` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `transaction` | [`Transaction`](types_Transaction.md#transaction) |
| `verification` | [`Verification`](types_Verification.md#verification) |

#### Defined in

[immudb-node/src/immu-grpc-verification/index.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-verification/index.ts#L12)
