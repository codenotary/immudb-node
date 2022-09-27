[immudb-node](../README.md) / [Exports](../modules.md) / immu-rfc6962/consistencyProof

# Module: immu-rfc6962/consistencyProof

## Table of contents

### Functions

- [rootsFromConsistencyProof](immu_rfc6962_consistencyProof.md#rootsfromconsistencyproof)

## Functions

### rootsFromConsistencyProof

▸ **rootsFromConsistencyProof**(`proofData`): `Object`

Computes source and target Merkel Hash trees roots
using data of the proof. This function implements
client side consistency check alghoritm.

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proofData` | `Object` | - |
| `proofData.proofNodes` | `Buffer`[] | List of nodes needed to compute source and target Merkle Tree hashes.  Proof nodes have four parts:  - first node is last leaf of source Merkle Tree, used for computation    of both source and target Merkle Trees roots,  - next is 0 or 1 node from target Merkle Tree joined on the right used for    computing target Merkle Tree,  - next are nodes from both Merkle Trees (at least 1 when source and    target are not the same) joined on the left used for computing source and    target Merkle Tree,  - next are 0 or moore nodes from target Merkle Tree joined on the right when    computing target Merkle Tree. |
| `proofData.sourceSize` | `Long` | Size (number of leafs) of the source Merkle Tree.  Number is encoded as UInt64, unsigned integer with 64 bits,  and represented by type Long in js. In immudb sourceSize  is equal to last transaction number. |
| `proofData.targetSize` | `Long` | Size (number of leafs) of the target Merkle Tree.  Number is encoded as UInt64, unsigned integer with 64 bits,  and represented by type Long in js. In immudb targetSize  is equal to last transaction number. |

#### Returns

`Object`

computed roots

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceRoot` | `Buffer` | Source Merkle Tree root  (by default as SHA256) |
| `targetRoot` | `Buffer` | Target Merkle Tree root  (by default as SHA256) |

#### Defined in

[immudb-node/src/immu-rfc6962/consistencyProof.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/consistencyProof.ts#L16)
