[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlRowEntry

# Module: immu-entry/SqlRowEntry

## Table of contents

### Functions

- [binEntryToSqlRowEntry](immu_entry_SqlRowEntry.md#binentrytosqlrowentry)
- [decodeBinEntryKeyToSqlRowEntryPart](immu_entry_SqlRowEntry.md#decodebinentrykeytosqlrowentrypart)
- [decodeSqlRowColumnValue](immu_entry_SqlRowEntry.md#decodesqlrowcolumnvalue)
- [decodeSqlRowColumnsValues](immu_entry_SqlRowEntry.md#decodesqlrowcolumnsvalues)
- [decodeValueSqlRow](immu_entry_SqlRowEntry.md#decodevaluesqlrow)
- [encodeValueSqlRow](immu_entry_SqlRowEntry.md#encodevaluesqlrow)
- [isBinEntryKeySqlRowEntryPart](immu_entry_SqlRowEntry.md#isbinentrykeysqlrowentrypart)
- [sqlRowEntryToLeafEntryPrefixedKey](immu_entry_SqlRowEntry.md#sqlrowentrytoleafentryprefixedkey)
- [sqlRowEntryToSqlBinEntry](immu_entry_SqlRowEntry.md#sqlrowentrytosqlbinentry)

## Functions

### binEntryToSqlRowEntry

▸ **binEntryToSqlRowEntry**(`props`): [`SqlRowEntry`](types_Entry.md#sqlrowentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlRowEntry`](types_Entry.md#sqlrowentry)

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L11)

___

### decodeBinEntryKeyToSqlRowEntryPart

▸ **decodeBinEntryKeyToSqlRowEntryPart**(`b`): `Object`

Decodes Buffer to sql table row structure header from:
- prefix: first byte `0x02`
- tag: bytes `Buffer.from('R.')`
- dbId: UInt32BE,
- tableId: UInt32BE,
- zero: UInt32BE,
- isPKNullable: byte (boolean):
  - `0x80` is not nullable
  - ?
- pk: Bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dbId` | `number` |
| `pk` | `Buffer` |
| `prefix` | `number` |
| `tableId` | `number` |
| `tag` | `Buffer` |
| `zero` | `number` |

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:73](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L73)

___

### decodeSqlRowColumnValue

▸ **decodeSqlRowColumnValue**(`b`): `Object`

Decodes Buffer to sql table row column structure value from:
- columnId: UInt32BE,
- columnByteLength: UInt32BE,
- columnValue: bytes of length columnByteLength.

Returns decoded row column value and rest of buffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `rest` | `Buffer` |
| `rowColumn` | [`SqlRowColumn`](types_Entry.md#sqlrowcolumn) & { `binLength`: `number`  } |

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:171](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L171)

___

### decodeSqlRowColumnsValues

▸ **decodeSqlRowColumnsValues**(`b`): [`SqlRowColumn`](types_Entry.md#sqlrowcolumn) & { `binLength`: `number`  }[]

Decodes Buffer to sql table row columns values from:
- column value definitions:
  - columnId: UInt32BE,
  - columnByteLength: UInt32BE,
  - columnValue: bytes of length columnByteLength

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

[`SqlRowColumn`](types_Entry.md#sqlrowcolumn) & { `binLength`: `number`  }[]

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:205](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L205)

___

### decodeValueSqlRow

▸ **decodeValueSqlRow**(`b`): `Object`

Decodes Buffer to sql table row structure value from:
- numberOfColumns: UInt64BE,
- column value definitions:
  - columnId: UInt32BE,
  - columnByteLength: UInt32BE,
  - columnValue: bytes of length columnByteLength

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columnsCount` | `number` |
| `columnsValues` | [`SqlRowColumn`](types_Entry.md#sqlrowcolumn) & { `binLength`: `number`  }[] |

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:145](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L145)

___

### encodeValueSqlRow

▸ **encodeValueSqlRow**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlRowColumn`](types_Entry.md#sqlrowcolumn)[] |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:222](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L222)

___

### isBinEntryKeySqlRowEntryPart

▸ **isBinEntryKeySqlRowEntryPart**(`b`): `boolean`

Checks if first bits of Buffer are in form:
- first byte `0x02`
- following bytes `Buffer.from('R.')`

Meaning Buffer is sql table row.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:50](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L50)

___

### sqlRowEntryToLeafEntryPrefixedKey

▸ **sqlRowEntryToLeafEntryPrefixedKey**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`SqlRowEntry`](types_Entry.md#sqlrowentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:104](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L104)

___

### sqlRowEntryToSqlBinEntry

▸ **sqlRowEntryToSqlBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlRowEntry`](types_Entry.md#sqlrowentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlRowEntry.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlRowEntry.ts#L27)
