[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/Entry

# Module: immu-entry/Entry

## Table of contents

### Functions

- [binEntryToEntry](immu_entry_Entry.md#binentrytoentry)
- [binEntryToEntryType](immu_entry_Entry.md#binentrytoentrytype)
- [entryToBinEntry](immu_entry_Entry.md#entrytobinentry)
- [entryToLeafEntryPrefixedKey](immu_entry_Entry.md#entrytoleafentryprefixedkey)

## Functions

### binEntryToEntry

▸ **binEntryToEntry**(`props`): [`Entry`](types_Entry.md#entry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`Entry`](types_Entry.md#entry)

#### Defined in

[immudb-node/src/immu-entry/Entry.ts:66](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/Entry.ts#L66)

___

### binEntryToEntryType

▸ **binEntryToEntryType**(`props`): [`Entry`](types_Entry.md#entry)[``"type"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`Entry`](types_Entry.md#entry)[``"type"``]

#### Defined in

[immudb-node/src/immu-entry/Entry.ts:38](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/Entry.ts#L38)

___

### entryToBinEntry

▸ **entryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry) \| [`HashEntry`](types_Entry.md#hashentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Entry`](types_Entry.md#entry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry) \| [`HashEntry`](types_Entry.md#hashentry)

#### Defined in

[immudb-node/src/immu-entry/Entry.ts:80](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/Entry.ts#L80)

___

### entryToLeafEntryPrefixedKey

▸ **entryToLeafEntryPrefixedKey**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Entry`](types_Entry.md#entry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/Entry.ts:94](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/Entry.ts#L94)
