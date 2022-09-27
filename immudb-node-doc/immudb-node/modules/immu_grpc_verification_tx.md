[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc-verification/tx

# Module: immu-grpc-verification/tx

## Table of contents

### Functions

- [computeVerificationTxType](immu_grpc_verification_tx.md#computeverificationtxtype)
- [grpcDualProofToVerificationTx](immu_grpc_verification_tx.md#grpcdualprooftoverificationtx)

## Functions

### computeVerificationTxType

▸ **computeVerificationTxType**(`props`): [`VerificationTxType`](types_VerificationTx.md#verificationtxtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.refId` | `Long` |
| `props.verId` | `Long` |

#### Returns

[`VerificationTxType`](types_VerificationTx.md#verificationtxtype)

#### Defined in

[immudb-node/src/immu-grpc-verification/tx.ts:77](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-verification/tx.ts#L77)

___

### grpcDualProofToVerificationTx

▸ **grpcDualProofToVerificationTx**(`props`): [`VerificationTx`](types_VerificationTx.md#verificationtx)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.grpcProof` | `DualProof__Output` |
| `props.grpcTx` | `TxHeader__Output` |
| `props.refHash` | `Buffer` |
| `props.refTxId` | `Long` |

#### Returns

[`VerificationTx`](types_VerificationTx.md#verificationtx)

#### Defined in

[immudb-node/src/immu-grpc-verification/tx.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc-verification/tx.ts#L12)
