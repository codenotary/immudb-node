[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlIndexEntry

# Module: immu-entry/SqlIndexEntry

## Table of contents

### Functions

- [binEntryPrefixedKeyToSqlIndexEntryPart](immu_entry_SqlIndexEntry.md#binentryprefixedkeytosqlindexentrypart)
- [binEntryPrefixedValToSqlIndexEntryPart](immu_entry_SqlIndexEntry.md#binentryprefixedvaltosqlindexentrypart)
- [binEntryToSqlIndexEntry](immu_entry_SqlIndexEntry.md#binentrytosqlindexentry)
- [isBinEntryKeySqlIndexEntryPart](immu_entry_SqlIndexEntry.md#isbinentrykeysqlindexentrypart)
- [sqlIndexEntryToBinEntry](immu_entry_SqlIndexEntry.md#sqlindexentrytobinentry)
- [sqlIndexEntryToBinEntryPrefixedVal](immu_entry_SqlIndexEntry.md#sqlindexentrytobinentryprefixedval)
- [sqlIndexEntryToLeafEntryPrefixedKey](immu_entry_SqlIndexEntry.md#sqlindexentrytoleafentryprefixedkey)

## Functions

### binEntryPrefixedKeyToSqlIndexEntryPart

▸ **binEntryPrefixedKeyToSqlIndexEntryPart**(`b`): `Object`

Decodes Buffer to sql index structure header from:
- prefix: first byte `0x02`
- tag: bytes `Buffer.from('CTL.INDEX.')`
- dbId: UInt32BE,
- tableId: UInt32BE,
- indexId: UInt32BE,

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dbId` | `number` |
| `indexId` | `number` |
| `prefix` | `number` |
| `tableId` | `number` |
| `tag` | `string` |

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:98](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L98)

___

### binEntryPrefixedValToSqlIndexEntryPart

▸ **binEntryPrefixedValToSqlIndexEntryPart**(`b`): `Object`

Decodes Buffer to sql index structure value from:
- columnId: first byte 
- isAscDesc: bytes (boolean),

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columns` | [`SqlIndexColumn`](types_Entry.md#sqlindexcolumn)[] |
| `indexIsPrimary` | `number` |

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:160](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L160)

___

### binEntryToSqlIndexEntry

▸ **binEntryToSqlIndexEntry**(`props`): [`SqlIndexEntry`](types_Entry.md#sqlindexentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlIndexEntry`](types_Entry.md#sqlindexentry)

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:20](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L20)

___

### isBinEntryKeySqlIndexEntryPart

▸ **isBinEntryKeySqlIndexEntryPart**(`b`): `boolean`

Checks if first bits of Buffer are in form:
- first byte `0x02`
- following bytes `Buffer.from('CTL.INDEX.')`

Meaning Buffer is index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:69](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L69)

___

### sqlIndexEntryToBinEntry

▸ **sqlIndexEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlIndexEntry`](types_Entry.md#sqlindexentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:42](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L42)

___

### sqlIndexEntryToBinEntryPrefixedVal

▸ **sqlIndexEntryToBinEntryPrefixedVal**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlIndexEntry`](types_Entry.md#sqlindexentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:191](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L191)

___

### sqlIndexEntryToLeafEntryPrefixedKey

▸ **sqlIndexEntryToLeafEntryPrefixedKey**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`SqlIndexEntry`](types_Entry.md#sqlindexentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlIndexEntry.ts:130](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlIndexEntry.ts#L130)
