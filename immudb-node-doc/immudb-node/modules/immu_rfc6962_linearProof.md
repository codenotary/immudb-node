[immudb-node](../README.md) / [Exports](../modules.md) / immu-rfc6962/linearProof

# Module: immu-rfc6962/linearProof

## Table of contents

### Functions

- [blockFromLinearProof](immu_rfc6962_linearProof.md#blockfromlinearproof)
- [blockFromPreviousBlock](immu_rfc6962_linearProof.md#blockfrompreviousblock)

## Functions

### blockFromLinearProof

▸ **blockFromLinearProof**(`props`): `Object`

Computes last block (transactionId, previousBlock, dataHash) hash
from previous block hash and data hashes

**`Throws`**

RangeError when sourceTxId is less than zero

**`Throws`**

RangeError when proofData is empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | - |
| `props.proofData` | `Buffer`[] | Array of hashes, first element is hash of previous  block, rest are hashes of data. |
| `props.sourceTxId` | `Long` | Transaction id of previous block (UInt64) |

#### Returns

`Object`

Block hash and its transaction id

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHash` | `Buffer` | hash of computed block |
| `txId` | `Long` | transaction id of computed block |

#### Defined in

[immudb-node/src/immu-rfc6962/linearProof.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/linearProof.ts#L16)

___

### blockFromPreviousBlock

▸ **blockFromPreviousBlock**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.currentId` | `Long` |
| `props.currentMhtHash` | `Buffer` |
| `props.previousBlockHash` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/linearProof.ts:69](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/linearProof.ts#L69)
