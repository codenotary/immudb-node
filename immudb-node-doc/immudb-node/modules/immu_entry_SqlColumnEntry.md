[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlColumnEntry

# Module: immu-entry/SqlColumnEntry

## Table of contents

### Functions

- [binEntryPrefixedKeyToSqlColumnEntryPart](immu_entry_SqlColumnEntry.md#binentryprefixedkeytosqlcolumnentrypart)
- [binEntryPrefixedValToSqlColumnEntryPart](immu_entry_SqlColumnEntry.md#binentryprefixedvaltosqlcolumnentrypart)
- [binEntryToSqlColumnEntry](immu_entry_SqlColumnEntry.md#binentrytosqlcolumnentry)
- [isBinEntryKeySqlColumnEntryPart](immu_entry_SqlColumnEntry.md#isbinentrykeysqlcolumnentrypart)
- [sqlColumnEntryToBinEntry](immu_entry_SqlColumnEntry.md#sqlcolumnentrytobinentry)
- [sqlColumnEntryToLeafEntryPrefixedKey](immu_entry_SqlColumnEntry.md#sqlcolumnentrytoleafentryprefixedkey)
- [sqlColumnEntryToLeafEntryPrefixedVal](immu_entry_SqlColumnEntry.md#sqlcolumnentrytoleafentryprefixedval)

## Functions

### binEntryPrefixedKeyToSqlColumnEntryPart

▸ **binEntryPrefixedKeyToSqlColumnEntryPart**(`b`): `Object`

Decodes Buffer to sql column structure header from:
- prefix: first byte `0x02`
- tag: bytes `Buffer.from('CTL.COLUMN.')`
- dbId: UInt32BE,
- tableId: UInt32BE,
- columnTypeLength: UInt32BE,
- columnType: utf8 encoded string,

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columnId` | `number` |
| `columnType` | `string` |
| `dbId` | `number` |
| `prefix` | `number` |
| `tableId` | `number` |
| `tag` | `string` |

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:127](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L127)

___

### binEntryPrefixedValToSqlColumnEntryPart

▸ **binEntryPrefixedValToSqlColumnEntryPart**(`b`): `Object`

Decodes Buffer to sql column structure value from:
- columnAttribute: first byte 
- columnMaxLength: UInt32BE,
- columnName: utf8 encoded string,

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columnAttribute` | `number` |
| `columnMaxLength` | `number` |
| `columnName` | `string` |

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:167](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L167)

___

### binEntryToSqlColumnEntry

▸ **binEntryToSqlColumnEntry**(`props`): [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlColumnEntry`](types_Entry.md#sqlcolumnentry)

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:21](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L21)

___

### isBinEntryKeySqlColumnEntryPart

▸ **isBinEntryKeySqlColumnEntryPart**(`b`): `boolean`

Checks if first bits of Buffer are in form:
- first byte `0x02`
- following bytes `Buffer.from('CTL.COLUMN.')`

Meaning Buffer is sql column.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:104](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L104)

___

### sqlColumnEntryToBinEntry

▸ **sqlColumnEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:59](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L59)

___

### sqlColumnEntryToLeafEntryPrefixedKey

▸ **sqlColumnEntryToLeafEntryPrefixedKey**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:72](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L72)

___

### sqlColumnEntryToLeafEntryPrefixedVal

▸ **sqlColumnEntryToLeafEntryPrefixedVal**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlColumnEntry.ts:84](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlColumnEntry.ts#L84)
