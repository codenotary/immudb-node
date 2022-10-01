[immudb-node](../README.md) / [Exports](../modules.md) / immu-rfc6962/memoryMhtApi

# Module: immu-rfc6962/memoryMhtApi

## Table of contents

### Type Aliases

- [MerkleTreeData](immu_rfc6962_memoryMhtApi.md#merkletreedata)

### Functions

- [createFromValues](immu_rfc6962_memoryMhtApi.md#createfromvalues)
- [generateInclusionProofDataFor](immu_rfc6962_memoryMhtApi.md#generateinclusionproofdatafor)
- [getHight](immu_rfc6962_memoryMhtApi.md#gethight)
- [getLeaf](immu_rfc6962_memoryMhtApi.md#getleaf)
- [getLevelWidht](immu_rfc6962_memoryMhtApi.md#getlevelwidht)
- [getNode](immu_rfc6962_memoryMhtApi.md#getnode)
- [getParentNodeIndex](immu_rfc6962_memoryMhtApi.md#getparentnodeindex)
- [getRoot](immu_rfc6962_memoryMhtApi.md#getroot)
- [getWidth](immu_rfc6962_memoryMhtApi.md#getwidth)

## Type Aliases

### MerkleTreeData

Ƭ **MerkleTreeData**: `Buffer`[][]

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:13](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L13)

## Functions

### createFromValues

▸ **createFromValues**(`values`): [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Buffer`[] |

#### Returns

[`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata)

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:16](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L16)

___

### generateInclusionProofDataFor

▸ **generateInclusionProofDataFor**(`props`): `Buffer`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.leafIndex` | `number` |
| `props.usingMerkleTree` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |

#### Returns

`Buffer`[]

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:153](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L153)

___

### getHight

▸ **getHight**(`treeData`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:85](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L85)

___

### getLeaf

▸ **getLeaf**(`treeData`, `index`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |
| `index` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:102](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L102)

___

### getLevelWidht

▸ **getLevelWidht**(`treeData`, `levelIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |
| `levelIndex` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:89](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L89)

___

### getNode

▸ **getNode**(`treeData`, `levelIndex`, `index`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |
| `levelIndex` | `number` |
| `index` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:118](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L118)

___

### getParentNodeIndex

▸ **getParentNodeIndex**(`treeData`, `levelIndex`, `index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |
| `levelIndex` | `number` |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:135](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L135)

___

### getRoot

▸ **getRoot**(`treeData`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:77](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L77)

___

### getWidth

▸ **getWidth**(`treeData`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `treeData` | [`MerkleTreeData`](immu_rfc6962_memoryMhtApi.md#merkletreedata) |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-rfc6962/memoryMhtApi.ts:81](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-rfc6962/memoryMhtApi.ts#L81)
