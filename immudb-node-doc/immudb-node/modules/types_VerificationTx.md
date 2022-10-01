[immudb-node](../README.md) / [Exports](../modules.md) / types/VerificationTx

# Module: types/VerificationTx

## Table of contents

### Type Aliases

- [VerificationTx](types_VerificationTx.md#verificationtx)
- [VerificationTxEquality](types_VerificationTx.md#verificationtxequality)
- [VerificationTxInclusion](types_VerificationTx.md#verificationtxinclusion)
- [VerificationTxIsExtending](types_VerificationTx.md#verificationtxisextending)
- [VerificationTxType](types_VerificationTx.md#verificationtxtype)

## Type Aliases

### VerificationTx

Ƭ **VerificationTx**: [`VerificationTxInclusion`](types_VerificationTx.md#verificationtxinclusion) \| [`VerificationTxIsExtending`](types_VerificationTx.md#verificationtxisextending) \| [`VerificationTxEquality`](types_VerificationTx.md#verificationtxequality)

#### Defined in

[immudb-node/src/types/VerificationTx.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationTx.ts#L8)

___

### VerificationTxEquality

Ƭ **VerificationTxEquality**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `refHash` | [`TxHash`](types_Tx.md#txhash) |
| `tx` | [`TxCore`](types_Tx.md#txcore) |
| `txPrevTxInRefPrevTxesMht` | `Buffer`[] |
| `type` | ``"tx-is-ref"`` |

#### Defined in

[immudb-node/src/types/VerificationTx.ts:32](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationTx.ts#L32)

___

### VerificationTxInclusion

Ƭ **VerificationTxInclusion**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ref` | [`TxCore`](types_Tx.md#txcore) |
| `refHash` | [`TxHash`](types_Tx.md#txhash) |
| `refPrevTxInRefPrevTxesMht` | `Buffer`[] |
| `tx` | [`TxCore`](types_Tx.md#txcore) |
| `txPrevInRefPrevTxesMht` | `Buffer`[] |
| `type` | ``"tx-prev-in-ref-prev"`` |

#### Defined in

[immudb-node/src/types/VerificationTx.ts:14](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationTx.ts#L14)

___

### VerificationTxIsExtending

Ƭ **VerificationTxIsExtending**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ref` | [`TxCore`](types_Tx.md#txcore) |
| `refHash` | [`TxHash`](types_Tx.md#txhash) |
| `refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht` | `Buffer`[] |
| `tx` | [`TxCore`](types_Tx.md#txcore) |
| `txPrevTxInTxPrevTxesMht` | `Buffer`[] |
| `type` | ``"ref-prev-in-tx-prev"`` |

#### Defined in

[immudb-node/src/types/VerificationTx.ts:23](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationTx.ts#L23)

___

### VerificationTxType

Ƭ **VerificationTxType**: [`VerificationTx`](types_VerificationTx.md#verificationtx)[``"type"``]

#### Defined in

[immudb-node/src/types/VerificationTx.ts:39](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/VerificationTx.ts#L39)
