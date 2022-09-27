[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlEntry

# Module: immu-entry/SqlEntry

## Table of contents

### Functions

- [binEntryToSqlEntry](immu_entry_SqlEntry.md#binentrytosqlentry)
- [binEntryToSqlEntryType](immu_entry_SqlEntry.md#binentrytosqlentrytype)
- [sqlEntryToBinEntry](immu_entry_SqlEntry.md#sqlentrytobinentry)
- [sqlEntryToLeafEntryPrefixedKey](immu_entry_SqlEntry.md#sqlentrytoleafentryprefixedkey)

## Functions

### binEntryToSqlEntry

▸ **binEntryToSqlEntry**(`props`): [`SqlEntry`](types_Entry.md#sqlentry) \| [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlEntry`](types_Entry.md#sqlentry) \| [`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlEntry.ts:81](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/SqlEntry.ts#L81)

___

### binEntryToSqlEntryType

▸ **binEntryToSqlEntryType**(`props`): [`SqlEntry`](types_Entry.md#sqlentry)[``"sqlType"``] \| ``"bin"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlEntry`](types_Entry.md#sqlentry)[``"sqlType"``] \| ``"bin"``

#### Defined in

[immudb-node/src/immu-entry/SqlEntry.ts:44](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/SqlEntry.ts#L44)

___

### sqlEntryToBinEntry

▸ **sqlEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlEntry`](types_Entry.md#sqlentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlEntry.ts:97](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/SqlEntry.ts#L97)

___

### sqlEntryToLeafEntryPrefixedKey

▸ **sqlEntryToLeafEntryPrefixedKey**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlEntry`](types_Entry.md#sqlentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlEntry.ts:111](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/SqlEntry.ts#L111)
