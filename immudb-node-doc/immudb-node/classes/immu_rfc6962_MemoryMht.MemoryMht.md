[immudb-node](../README.md) / [Exports](../modules.md) / [immu-rfc6962/MemoryMht](../modules/immu_rfc6962_MemoryMht.md) / MemoryMht

# Class: MemoryMht

[immu-rfc6962/MemoryMht](../modules/immu_rfc6962_MemoryMht.md).MemoryMht

Stores (small) Merkle Hash Tree in memory,
provide convinient methods for tree examination,
navigation and can produce inclusion proof for
any of its leafs.

## Table of contents

### Constructors

- [constructor](immu_rfc6962_MemoryMht.MemoryMht.md#constructor)

### Properties

- [tree](immu_rfc6962_MemoryMht.MemoryMht.md#tree)

### Methods

- [generateInclusionProofFor](immu_rfc6962_MemoryMht.MemoryMht.md#generateinclusionprooffor)
- [getLeaf](immu_rfc6962_MemoryMht.MemoryMht.md#getleaf)
- [getNode](immu_rfc6962_MemoryMht.MemoryMht.md#getnode)
- [getParentNodeIndex](immu_rfc6962_MemoryMht.MemoryMht.md#getparentnodeindex)
- [getRoot](immu_rfc6962_MemoryMht.MemoryMht.md#getroot)
- [hight](immu_rfc6962_MemoryMht.MemoryMht.md#hight)
- [levelWidth](immu_rfc6962_MemoryMht.MemoryMht.md#levelwidth)
- [width](immu_rfc6962_MemoryMht.MemoryMht.md#width)

## Constructors

### constructor

• **new MemoryMht**(`values`)

Constructs full MHT tree from list of values. 

Tree is build as fallows:
- Leafs are created hashing concatence of leaf prefix `0x00` and value. 
- Nodes are created by hashing concatence of node prefix `0x01`, left
  subtree, right subtree.

Tree supports matrix like indexing, and ability to generate inclusion
proofs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Buffer`[] |

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:25](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L25)

## Properties

### tree

• `Readonly` **tree**: [`MerkleTreeData`](../modules/immu_rfc6962_memoryMhtApi.md#merkletreedata)

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L12)

## Methods

### generateInclusionProofFor

▸ **generateInclusionProofFor**(`leafIndex`): `Buffer`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafIndex` | `number` |

#### Returns

`Buffer`[]

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:64](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L64)

___

### getLeaf

▸ **getLeaf**(`index`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:53](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L53)

___

### getNode

▸ **getNode**(`levelIndex`, `index`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `levelIndex` | `number` |
| `index` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:45](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L45)

___

### getParentNodeIndex

▸ **getParentNodeIndex**(`levelIndex`, `index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `levelIndex` | `number` |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:57](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L57)

___

### getRoot

▸ **getRoot**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:29](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L29)

___

### hight

▸ **hight**(): `number`

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:37](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L37)

___

### levelWidth

▸ **levelWidth**(`levelIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `levelIndex` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:41](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L41)

___

### width

▸ **width**(): `number`

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/MemoryMht.ts:33](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-rfc6962/MemoryMht.ts#L33)
