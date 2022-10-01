[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlTableEntry

# Module: immu-entry/SqlTableEntry

## Table of contents

### Functions

- [binEntryPrefixedKeyToSqlTableEntryPart](immu_entry_SqlTableEntry.md#binentryprefixedkeytosqltableentrypart)
- [binEntryPrefixedValToSqlTableEntryName](immu_entry_SqlTableEntry.md#binentryprefixedvaltosqltableentryname)
- [binEntryToSqlTableEntry](immu_entry_SqlTableEntry.md#binentrytosqltableentry)
- [isBinEntryKeySqlTableEntryPart](immu_entry_SqlTableEntry.md#isbinentrykeysqltableentrypart)
- [sqlTableEntryToBinEntry](immu_entry_SqlTableEntry.md#sqltableentrytobinentry)
- [sqlTableEntryToBinEntryPrefixedVal](immu_entry_SqlTableEntry.md#sqltableentrytobinentryprefixedval)
- [sqlTableEntryToLeafEntryPrefixedKey](immu_entry_SqlTableEntry.md#sqltableentrytoleafentryprefixedkey)

## Functions

### binEntryPrefixedKeyToSqlTableEntryPart

▸ **binEntryPrefixedKeyToSqlTableEntryPart**(`b`): `Object`

Decodes Buffer to sql index structure header from:
- prefix: first byte `0x02`
- tag: bytes `Buffer.from('CTL.TABLE.')`
- dbId: UInt32BE,
- tableId: UInt32BE,

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dbId` | `number` |
| `prefix` | `number` |
| `tableId` | `number` |
| `tag` | `string` |

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:92](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L92)

___

### binEntryPrefixedValToSqlTableEntryName

▸ **binEntryPrefixedValToSqlTableEntryName**(`b`): `string`

Decodes Buffer to sql index structure value from:
- columnId: first byte 
- isAscDesc: bytes (boolean),

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`string`

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:149](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L149)

___

### binEntryToSqlTableEntry

▸ **binEntryToSqlTableEntry**(`props`): [`SqlTableEntry`](types_Entry.md#sqltableentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlTableEntry`](types_Entry.md#sqltableentry)

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:17](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L17)

___

### isBinEntryKeySqlTableEntryPart

▸ **isBinEntryKeySqlTableEntryPart**(`b`): `boolean`

Checks if first bits of Buffer are in form:
- first byte `0x02`
- following bytes `Buffer.from('CTL.TABLE.')`

Meaning Buffer is index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:64](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L64)

___

### sqlTableEntryToBinEntry

▸ **sqlTableEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlTableEntry`](types_Entry.md#sqltableentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:37](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L37)

___

### sqlTableEntryToBinEntryPrefixedVal

▸ **sqlTableEntryToBinEntryPrefixedVal**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlTableEntry`](types_Entry.md#sqltableentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:157](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L157)

___

### sqlTableEntryToLeafEntryPrefixedKey

▸ **sqlTableEntryToLeafEntryPrefixedKey**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`SqlTableEntry`](types_Entry.md#sqltableentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlTableEntry.ts:121](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlTableEntry.ts#L121)
