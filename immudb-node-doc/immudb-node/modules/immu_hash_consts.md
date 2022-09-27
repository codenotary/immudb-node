[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/consts

# Module: immu-hash/consts

## Table of contents

### Variables

- [FlagAutoIncrement](immu_hash_consts.md#flagautoincrement)
- [FlagAutoIncrementValue](immu_hash_consts.md#flagautoincrementvalue)
- [FlagNotNullValue](immu_hash_consts.md#flagnotnullvalue)
- [FlagNullable](immu_hash_consts.md#flagnullable)
- [PrefixKeyRef](immu_hash_consts.md#prefixkeyref)
- [PrefixKeySql](immu_hash_consts.md#prefixkeysql)
- [PrefixKeyVal](immu_hash_consts.md#prefixkeyval)
- [PrefixKeyZSet](immu_hash_consts.md#prefixkeyzset)
- [PrefixMhtLeaf](immu_hash_consts.md#prefixmhtleaf)
- [PrefixMhtNode](immu_hash_consts.md#prefixmhtnode)
- [PrefixSqlUpperBound](immu_hash_consts.md#prefixsqlupperbound)
- [PrefixSqlValNotNull](immu_hash_consts.md#prefixsqlvalnotnull)
- [PrefixSqlValNull](immu_hash_consts.md#prefixsqlvalnull)
- [PrefixValRef](immu_hash_consts.md#prefixvalref)
- [PrefixValVal](immu_hash_consts.md#prefixvalval)
- [TagEntryMetadataDeleted](immu_hash_consts.md#tagentrymetadatadeleted)
- [TagEntryMetadataExpiresAt](immu_hash_consts.md#tagentrymetadataexpiresat)
- [TagEntryMetadataNonIndexable](immu_hash_consts.md#tagentrymetadatanonindexable)
- [TagSqlColumn](immu_hash_consts.md#tagsqlcolumn)
- [TagSqlDb](immu_hash_consts.md#tagsqldb)
- [TagSqlIndex](immu_hash_consts.md#tagsqlindex)
- [TagSqlRow](immu_hash_consts.md#tagsqlrow)
- [TagSqlTable](immu_hash_consts.md#tagsqltable)

### Functions

- [isFlagAutoIncrementSet](immu_hash_consts.md#isflagautoincrementset)
- [isFlagNotNullSet](immu_hash_consts.md#isflagnotnullset)
- [setColumnFlagAutoIncrement](immu_hash_consts.md#setcolumnflagautoincrement)
- [setColumnFlagNotNull](immu_hash_consts.md#setcolumnflagnotnull)
- [setColumnFlags](immu_hash_consts.md#setcolumnflags)

## Variables

### FlagAutoIncrement

• `Const` **FlagAutoIncrement**: `Buffer`

`0b00000010` byte

#### Defined in

[immudb-node/src/immu-hash/consts.ts:69](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L69)

___

### FlagAutoIncrementValue

• `Const` **FlagAutoIncrementValue**: ``2``

`0b00000010` byte

#### Defined in

[immudb-node/src/immu-hash/consts.ts:67](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L67)

___

### FlagNotNullValue

• `Const` **FlagNotNullValue**: ``1``

`0b00000001` byte

#### Defined in

[immudb-node/src/immu-hash/consts.ts:61](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L61)

___

### FlagNullable

• `Const` **FlagNullable**: `Buffer`

`0b00000001` byte

#### Defined in

[immudb-node/src/immu-hash/consts.ts:63](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L63)

___

### PrefixKeyRef

• `Const` **PrefixKeyRef**: `Buffer`

`0x00` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:51](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L51)

___

### PrefixKeySql

• `Const` **PrefixKeySql**: `Buffer`

`0x02`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:55](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L55)

___

### PrefixKeyVal

• `Const` **PrefixKeyVal**: `Buffer`

`0x00` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:49](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L49)

___

### PrefixKeyZSet

• `Const` **PrefixKeyZSet**: `Buffer`

`0x02`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:53](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L53)

___

### PrefixMhtLeaf

• `Const` **PrefixMhtLeaf**: `Buffer`

`0x00` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:5](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L5)

___

### PrefixMhtNode

• `Const` **PrefixMhtNode**: `Buffer`

`0x01` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:7](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L7)

___

### PrefixSqlUpperBound

• `Const` **PrefixSqlUpperBound**: `Buffer`

`0xFF`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:14](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L14)

___

### PrefixSqlValNotNull

• `Const` **PrefixSqlValNotNull**: `Buffer`

`0x80`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L12)

___

### PrefixSqlValNull

• `Const` **PrefixSqlValNull**: `Buffer`

`0x20`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:10](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L10)

___

### PrefixValRef

• `Const` **PrefixValRef**: `Buffer`

`0x01` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:45](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L45)

___

### PrefixValVal

• `Const` **PrefixValVal**: `Buffer`

`0x00` byte.

#### Defined in

[immudb-node/src/immu-hash/consts.ts:43](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L43)

___

### TagEntryMetadataDeleted

• `Const` **TagEntryMetadataDeleted**: `Buffer`

`0x00`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:22](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L22)

___

### TagEntryMetadataExpiresAt

• `Const` **TagEntryMetadataExpiresAt**: `Buffer`

`0x01`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:24](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L24)

___

### TagEntryMetadataNonIndexable

• `Const` **TagEntryMetadataNonIndexable**: `Buffer`

`0x02`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:26](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L26)

___

### TagSqlColumn

• `Const` **TagSqlColumn**: `Buffer`

`CTL.COLUMN.`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:32](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L32)

___

### TagSqlDb

• `Const` **TagSqlDb**: `Buffer`

`CTL.DATABASE.`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:38](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L38)

___

### TagSqlIndex

• `Const` **TagSqlIndex**: `Buffer`

`CTL.INDEX.`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:34](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L34)

___

### TagSqlRow

• `Const` **TagSqlRow**: `Buffer`

`R.`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:30](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L30)

___

### TagSqlTable

• `Const` **TagSqlTable**: `Buffer`

`CTL.TABLE.`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:36](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L36)

## Functions

### isFlagAutoIncrementSet

▸ **isFlagAutoIncrementSet**(`byte`): `boolean`

Checks if byte value have [FlagAutoIncrement](immu_hash_consts.md#flagautoincrement) bit set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `number` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:81](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L81)

___

### isFlagNotNullSet

▸ **isFlagNotNullSet**(`byte`): `boolean`

Checks if byte value have [FlagNullable](immu_hash_consts.md#flagnullable) bit set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `number` |

#### Returns

`boolean`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:77](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L77)

___

### setColumnFlagAutoIncrement

▸ **setColumnFlagAutoIncrement**(`byte`): `number`

Returns byte value with [FlagAutoIncrement](immu_hash_consts.md#flagautoincrement) bit set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:90](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L90)

___

### setColumnFlagNotNull

▸ **setColumnFlagNotNull**(`byte`): `number`

Returns byte value with [FlagNullable](immu_hash_consts.md#flagnullable) bit set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:86](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L86)

___

### setColumnFlags

▸ **setColumnFlags**(`props`): `number`

Returns byte value with [FlagAutoIncrement](immu_hash_consts.md#flagautoincrement) and [FlagNullable](immu_hash_consts.md#flagnullable)
bits set if required, leaves bits unchanged if setting not specified.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.columnIsAutoIncr?` | `boolean` |
| `props.columnIsNotNull?` | `boolean` |

#### Returns

`number`

#### Defined in

[immudb-node/src/immu-hash/consts.ts:97](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/consts.ts#L97)
