[immudb-node](../README.md) / [Exports](../modules.md) / immu-rfc6962/lastLeafInclusionProof

# Module: immu-rfc6962/lastLeafInclusionProof

## Table of contents

### Functions

- [rootFromLastLeafInclusionProof](immu_rfc6962_lastLeafInclusionProof.md#rootfromlastleafinclusionproof)

## Functions

### rootFromLastLeafInclusionProof

▸ **rootFromLastLeafInclusionProof**(`proofData`): `Buffer`

Computes MHT shortest path from last leaf and returns last element of path
(root).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proofData` | `Object` | - |
| `proofData.lastLeaf` | `Buffer` | Last leaf (= sha256(0 \|\| lastLeafValue)) |
| `proofData.lastLeafId` | `Long` |  |
| `proofData.lastLeafInclusionProofNodes` | `Buffer`[] | List of nodes which to join from left |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/lastLeafInclusionProof.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/lastLeafInclusionProof.ts#L11)
