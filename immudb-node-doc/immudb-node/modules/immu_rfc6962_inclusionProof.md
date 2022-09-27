[immudb-node](../README.md) / [Exports](../modules.md) / immu-rfc6962/inclusionProof

# Module: immu-rfc6962/inclusionProof

## Table of contents

### Functions

- [evalInclusion](immu_rfc6962_inclusionProof.md#evalinclusion)
- [rootFromInclusionProof](immu_rfc6962_inclusionProof.md#rootfrominclusionproof)

## Functions

### evalInclusion

▸ **evalInclusion**(`props`): `Buffer`

Computes MHT root from:
- leaf `iLeaf`, 
- at posision `i`, 
- for MHT size `j` 
- using Merkle Audit Path `iProof`.

This function is 1:1 rewrite of similar function 
in Java client

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.i` | `Long` |
| `props.iLeaf` | `Buffer` |
| `props.iProof` | `Buffer`[] |
| `props.j` | `Long` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/inclusionProof.ts:100](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/inclusionProof.ts#L100)

___

### rootFromInclusionProof

▸ **rootFromInclusionProof**(`proofData`): `Buffer`

Computes MHT root from:
- leaf `leaf`, 
- at posision `leafId`, 
- for MHT size `lastLeafId` 
- using Merkle Audit Path `inclusionProofNodes`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proofData` | `Object` | - |
| `proofData.inclusionProofNodes` | `Buffer`[] | List of nodes needed to compute MHT path starting at leaf. |
| `proofData.lastLeafId` | `Long` | Size of Merkle Tree.  Number is UInt64, represented by type Long in js. |
| `proofData.leaf` | `Buffer` | Leaf node value for which proof inclusion |
| `proofData.leafId` | `Long` | Id (number) of leaf.  Number is encoded as UInt64  and represented by type Long in js. |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/inclusionProof.ts:14](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/inclusionProof.ts#L14)
