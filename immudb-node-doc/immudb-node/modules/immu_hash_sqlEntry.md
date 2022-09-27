[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/sqlEntry

# Module: immu-hash/sqlEntry

## Table of contents

### Functions

- [hashOfSqlColumnEntry](immu_hash_sqlEntry.md#hashofsqlcolumnentry)
- [hashOfSqlDbEntry](immu_hash_sqlEntry.md#hashofsqldbentry)
- [hashOfSqlIndexEntry](immu_hash_sqlEntry.md#hashofsqlindexentry)
- [hashOfSqlRowEntry](immu_hash_sqlEntry.md#hashofsqlrowentry)
- [hashOfSqlTableEntry](immu_hash_sqlEntry.md#hashofsqltableentry)

## Functions

### hashOfSqlColumnEntry

▸ **hashOfSqlColumnEntry**(`props`): `Buffer`

Hashes sql column entry. Schema is sha256 of:
- `metadataLength` - length of binary encoded metadata - UInt16BE,
- `meta` - metadata - bytes,
- `keyLength` - UInt16BE,
- `Key`:
  - `prefixSql` - `0x02` - byte,
  - `prefixSqlColumn` - `CTL.COLUMN` - utf8 encoded string - bytes,
  - `dbId` - id of database - UInt32BE,
  - `tableId` - id of table - UInt32BE,
  - `columnTypeLength` - length of `columnType` - UInt32BE,
  - `columnType` - utf8 encoded string of column type - bytes,
- sha256 of:
  - `value`:
    - `columnAttribute` - `0b00000001` bit set if column nullable, and
      `0b00000010` bit set if column autoincrement - byte,
    - `columnMaxLength` - byte length columnName - UInt32BE,
    - `columnName` - utf8 encoded string of column name - bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/sqlEntry.ts:111](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/sqlEntry.ts#L111)

___

### hashOfSqlDbEntry

▸ **hashOfSqlDbEntry**(`props`): `Buffer`

Hashes sql database entry. Schema is sha256 of:
- `metadataLength` - length of binary encoded metadata - UInt16BE,
- `meta` - metadata - bytes,
- `keyLength` - UInt16BE,
- `Key`:
  - `prefixSql` - `0x02` - byte,
  - `prefixSqlDb` - `CTL.DATABASE` - utf8 encoded string - bytes,
  - `dbId` - id of database - UInt32BE,
- sha256 of:
  - `value` - utf8 encoded string of database name - bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlDbEntry`](types_Entry.md#sqldbentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/sqlEntry.ts:316](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/sqlEntry.ts#L316)

___

### hashOfSqlIndexEntry

▸ **hashOfSqlIndexEntry**(`props`): `Buffer`

Hashes sql table entry. Schema is sha256 of:
- `metadataLength` - length of binary encoded metadata - UInt16BE,
- `meta` - metadata - bytes,
- `keyLength` - UInt16BE,
- `Key`:
  - `prefixSql` - `0x02` - byte,
  - `prefixSqlIndex` - `CTL.INDEX` - utf8 encoded string - bytes,
  - `dbId` - id of database - UInt32BE,
  - `tableId` - id of table - UInt32BE,
  - `indexId` - id of index - UInt32BE,
- sha256 of:
  - `value`:
    - `indexIsPrimary`: byte,
    - `columns[]`:
      - columnId - id of indexed column - UInt32BE
      - columnAscDesc - sort order of indexed column - byte

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlIndexEntry`](types_Entry.md#sqlindexentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/sqlEntry.ts:189](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/sqlEntry.ts#L189)

___

### hashOfSqlRowEntry

▸ **hashOfSqlRowEntry**(`props`): `Buffer`

Hashes sql row entry. Schema is sha256 of:
- `metadataLength` - length of binary encoded metadata - UInt16BE,
- `meta` - metadata - bytes,
- `keyLength` - UInt16BE,
- `key`:
  - `prefixSql` - `0x02` - byte,
  - `prefixSqlRow` - `R.` - utf8 encoded string bytes,
  - `dbId` - id of database - UInt32BE,
  - `tableId` - id of table - UInt32BE,
  - `pkIndexId` - `0` - UInt32BE,
  - `pk` - primary key - bytes,
- sha256 of:
  - `columnsCount` - count of row columns - UInt32BE,
  - `value[]`:
    - `columnId` - id of column - UInt32BE,
    - `columnValLength` - byte length of column value - UInt32BE,
    - `columnValue` - value of column - bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlRowEntry`](types_Entry.md#sqlrowentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/sqlEntry.ts:29](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/sqlEntry.ts#L29)

___

### hashOfSqlTableEntry

▸ **hashOfSqlTableEntry**(`props`): `Buffer`

Hashes sql table entry. Schema is sha256 of:
- `metadataLength` - length of binary encoded metadata - UInt16BE,
- `meta` - metadata - bytes,
- `keyLength` - UInt16BE,
- `Key`:
  - `prefixSql` - `0x02` - byte,
  - `prefixSqlTable` - `CTL.TABLE` - utf8 encoded string - bytes,
  - `dbId` - id of database - UInt32BE,
  - `tableId` - id of table - UInt32BE,
- sha256 of:
  - `value` - utf8 encoded string of table name - bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlTableEntry`](types_Entry.md#sqltableentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/sqlEntry.ts:260](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/sqlEntry.ts#L260)
