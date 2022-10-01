[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/SqlDbEntry

# Module: immu-entry/SqlDbEntry

## Table of contents

### Functions

- [binEntryPrefixedKeyToSqlDbEntryPart](immu_entry_SqlDbEntry.md#binentryprefixedkeytosqldbentrypart)
- [binEntryPrefixedValToSqlDbEntryName](immu_entry_SqlDbEntry.md#binentryprefixedvaltosqldbentryname)
- [binEntryToSqlDbEntry](immu_entry_SqlDbEntry.md#binentrytosqldbentry)
- [isBinEntryKeySqlDbEntryPart](immu_entry_SqlDbEntry.md#isbinentrykeysqldbentrypart)
- [sqlDbEntryToBinEntry](immu_entry_SqlDbEntry.md#sqldbentrytobinentry)
- [sqlDbEntryToBinEntryPrefixedVal](immu_entry_SqlDbEntry.md#sqldbentrytobinentryprefixedval)
- [sqlDbEntryToLeafEntryPrefixedKey](immu_entry_SqlDbEntry.md#sqldbentrytoleafentryprefixedkey)

## Functions

### binEntryPrefixedKeyToSqlDbEntryPart

▸ **binEntryPrefixedKeyToSqlDbEntryPart**(`b`): `Object`

Decodes Buffer to sql index structure header from:
- prefix: first byte `0x02`
- tag: bytes `Buffer.from('CTL.DATABASE.')`
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
| `tag` | `string` |

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:91](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L91)

___

### binEntryPrefixedValToSqlDbEntryName

▸ **binEntryPrefixedValToSqlDbEntryName**(`b`): `string`

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

[immudb-node/src/immu-entry/SqlDbEntry.ts:142](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L142)

___

### binEntryToSqlDbEntry

▸ **binEntryToSqlDbEntry**(`props`): [`SqlDbEntry`](types_Entry.md#sqldbentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`SqlDbEntry`](types_Entry.md#sqldbentry)

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:17](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L17)

___

### isBinEntryKeySqlDbEntryPart

▸ **isBinEntryKeySqlDbEntryPart**(`b`): `boolean`

Checks if first bits of Buffer are in form:
- first byte `0x02`
- following bytes `Buffer.from('CTL.DATABASE.')`

Meaning Buffer is index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:63](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L63)

___

### sqlDbEntryToBinEntry

▸ **sqlDbEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlDbEntry`](types_Entry.md#sqldbentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:36](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L36)

___

### sqlDbEntryToBinEntryPrefixedVal

▸ **sqlDbEntryToBinEntryPrefixedVal**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlDbEntry`](types_Entry.md#sqldbentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:150](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L150)

___

### sqlDbEntryToLeafEntryPrefixedKey

▸ **sqlDbEntryToLeafEntryPrefixedKey**(`entry`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`SqlDbEntry`](types_Entry.md#sqldbentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/SqlDbEntry.ts:117](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/SqlDbEntry.ts#L117)
