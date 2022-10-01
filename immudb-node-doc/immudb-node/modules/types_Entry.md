[immudb-node](../README.md) / [Exports](../modules.md) / types/Entry

# Module: types/Entry

## Table of contents

### Type Aliases

- [BinEntry](types_Entry.md#binentry)
- [Entry](types_Entry.md#entry)
- [HashEntry](types_Entry.md#hashentry)
- [KVMH](types_Entry.md#kvmh)
- [RefEntry](types_Entry.md#refentry)
- [SqlColumnEntry](types_Entry.md#sqlcolumnentry)
- [SqlDbEntry](types_Entry.md#sqldbentry)
- [SqlEntry](types_Entry.md#sqlentry)
- [SqlIndexColumn](types_Entry.md#sqlindexcolumn)
- [SqlIndexEntry](types_Entry.md#sqlindexentry)
- [SqlRowColumn](types_Entry.md#sqlrowcolumn)
- [SqlRowEntry](types_Entry.md#sqlrowentry)
- [SqlTableEntry](types_Entry.md#sqltableentry)
- [ValEntry](types_Entry.md#valentry)
- [ZSetEntry](types_Entry.md#zsetentry)

## Type Aliases

### BinEntry

Ƭ **BinEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `prefixedKey` | `Buffer` |
| `prefixedVal` | `Buffer` |
| `type` | ``"bin"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:16](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L16)

___

### Entry

Ƭ **Entry**: [`BinEntry`](types_Entry.md#binentry) \| [`HashEntry`](types_Entry.md#hashentry) \| [`ValEntry`](types_Entry.md#valentry) \| [`RefEntry`](types_Entry.md#refentry) \| [`ZSetEntry`](types_Entry.md#zsetentry) \| [`SqlEntry`](types_Entry.md#sqlentry)

immudb entry, one of:
- binary entry - [BinEntry](types_Entry.md#binentry),
- hash entry - [HashEntry](types_Entry.md#hashentry),
- value entry - [ValEntry](types_Entry.md#valentry),
- reference entry - [RefEntry](types_Entry.md#refentry),
- z-Set entry - [ZSetEntry](types_Entry.md#zsetentry),
- sql entry - [SqlEntry](types_Entry.md#sqlentry),

#### Defined in

[immudb-node/src/types/Entry.ts:157](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L157)

___

### HashEntry

Ƭ **HashEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `prefixedKey` | `Buffer` |
| `prefixedValHash` | `Buffer` |
| `type` | ``"hash"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:25](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L25)

___

### KVMH

Ƭ **KVMH**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `prefixedKey` | `Buffer` |
| `prefixedVal` | `Buffer` |
| `valHash` | `Buffer` |

#### Defined in

[immudb-node/src/types/Entry.ts:7](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L7)

___

### RefEntry

Ƭ **RefEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `referredAtTxId` | `Long` |
| `referredKey` | `Buffer` |
| `type` | ``"ref"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:43](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L43)

___

### SqlColumnEntry

Ƭ **SqlColumnEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columnId` | `number` |
| `columnIsAutoIncr` | `boolean` |
| `columnIsNotNull` | `boolean` |
| `columnMaxLength` | `number` |
| `columnName` | `string` |
| `columnType` | `string` |
| `dbId` | `number` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `sqlType` | ``"column"`` |
| `tableId` | `number` |
| `type` | ``"sql"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:80](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L80)

___

### SqlDbEntry

Ƭ **SqlDbEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dbId` | `number` |
| `dbName` | `string` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `sqlType` | ``"db"`` |
| `type` | ``"sql"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:122](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L122)

___

### SqlEntry

Ƭ **SqlEntry**: [`SqlRowEntry`](types_Entry.md#sqlrowentry) \| [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry) \| [`SqlIndexEntry`](types_Entry.md#sqlindexentry) \| [`SqlTableEntry`](types_Entry.md#sqltableentry) \| [`SqlDbEntry`](types_Entry.md#sqldbentry)

immudb sql entry, one of:
- row entry - [SqlRowEntry](types_Entry.md#sqlrowentry),
- column entry - [SqlColumnEntry](types_Entry.md#sqlcolumnentry),
- index entry - [SqlIndexEntry](types_Entry.md#sqlindexentry),
- table entry - [SqlTableEntry](types_Entry.md#sqltableentry),
- database entry - [SqlDbEntry](types_Entry.md#sqldbentry).

#### Defined in

[immudb-node/src/types/Entry.ts:140](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L140)

___

### SqlIndexColumn

Ƭ **SqlIndexColumn**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ascDesc` | `number` |
| `id` | `number` |

#### Defined in

[immudb-node/src/types/Entry.ts:107](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L107)

___

### SqlIndexEntry

Ƭ **SqlIndexEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columns` | [`SqlIndexColumn`](types_Entry.md#sqlindexcolumn)[] |
| `dbId` | `number` |
| `indexId` | `number` |
| `indexIsPrimary` | `number` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `sqlType` | ``"index"`` |
| `tableId` | `number` |
| `type` | ``"sql"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:95](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L95)

___

### SqlRowColumn

Ƭ **SqlRowColumn**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bin` | `Buffer` |
| `id` | `number` |

#### Defined in

[immudb-node/src/types/Entry.ts:75](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L75)

___

### SqlRowEntry

Ƭ **SqlRowEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columnsValues` | [`SqlRowColumn`](types_Entry.md#sqlrowcolumn)[] |
| `dbId` | `number` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `pk` | `Buffer` |
| `sqlType` | ``"row"`` |
| `tableId` | `number` |
| `type` | ``"sql"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:64](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L64)

___

### SqlTableEntry

Ƭ **SqlTableEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dbId` | `number` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `sqlType` | ``"table"`` |
| `tableId` | `number` |
| `tableName` | `string` |
| `type` | ``"sql"`` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:112](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L112)

___

### ValEntry

Ƭ **ValEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `type` | ``"val"`` |
| `val` | `Buffer` |
| `version` | ``"1"`` |

#### Defined in

[immudb-node/src/types/Entry.ts:34](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L34)

___

### ZSetEntry

Ƭ **ZSetEntry**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`EntryMetadata`](types_EntryMeta.md#entrymetadata) |
| `referredAtTxId` | `Long` |
| `referredKey` | `Buffer` |
| `referredKeyScore` | `number` |
| `type` | ``"zSet"`` |
| `version` | ``"1"`` |
| `zSet` | `Buffer` |

#### Defined in

[immudb-node/src/types/Entry.ts:53](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Entry.ts#L53)
