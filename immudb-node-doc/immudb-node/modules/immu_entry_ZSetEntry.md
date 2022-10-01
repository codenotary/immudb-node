[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/ZSetEntry

# Module: immu-entry/ZSetEntry

## Table of contents

### Functions

- [binEntryToZSetEntry](immu_entry_ZSetEntry.md#binentrytozsetentry)
- [decodeBinEntryKeyAsZSetEntryPart](immu_entry_ZSetEntry.md#decodebinentrykeyaszsetentrypart)
- [zSetEntryToBinEntry](immu_entry_ZSetEntry.md#zsetentrytobinentry)
- [zSetEntryToLeafEntryPrefixedKey](immu_entry_ZSetEntry.md#zsetentrytoleafentryprefixedkey)

## Functions

### binEntryToZSetEntry

▸ **binEntryToZSetEntry**(`props`): [`ZSetEntry`](types_Entry.md#zsetentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`ZSetEntry`](types_Entry.md#zsetentry)

#### Defined in

[immudb-node/src/immu-entry/ZSetEntry.ts:13](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/ZSetEntry.ts#L13)

___

### decodeBinEntryKeyAsZSetEntryPart

▸ **decodeBinEntryKeyAsZSetEntryPart**(`zKey`, `offset?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zKey` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `refKey` | `Buffer` |
| `refKeySeenFromTxId` | `Long` |
| `score` | `number` |
| `zSet` | `Buffer` |

#### Defined in

[immudb-node/src/immu-entry/ZSetEntry.ts:78](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/ZSetEntry.ts#L78)

___

### zSetEntryToBinEntry

▸ **zSetEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ZSetEntry`](types_Entry.md#zsetentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/ZSetEntry.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/ZSetEntry.ts#L27)

___

### zSetEntryToLeafEntryPrefixedKey

▸ **zSetEntryToLeafEntryPrefixedKey**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`ZSetEntry`](types_Entry.md#zsetentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/ZSetEntry.ts:40](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/ZSetEntry.ts#L40)
