[immudb-node](../README.md) / [Exports](../modules.md) / immu-sql

# Module: immu-sql

## Table of contents

### Type Aliases

- [SqlDecoder](immu_sql.md#sqldecoder)
- [SqlValueType](immu_sql.md#sqlvaluetype)

### Variables

- [decodeSqlValue](immu_sql.md#decodesqlvalue)

### Functions

- [createSqlMap](immu_sql.md#createsqlmap)

## Type Aliases

### SqlDecoder

Ƭ **SqlDecoder**: `Object`

Decodes bytes to js types.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boolean` | (`b`: `Buffer`) => `boolean` |
| `int` | (`b`: `Buffer`) => `number` |
| `string` | (`b`: `Buffer`) => `string` |
| `timestamp` | (`b`: `Buffer`) => `Date` |

#### Defined in

[immudb-node/src/immu-sql/index.ts:36](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-sql/index.ts#L36)

___

### SqlValueType

Ƭ **SqlValueType**: ``"string"`` \| ``"boolean"`` \| ``"int"`` \| ``"timestamp"``

#### Defined in

[immudb-node/src/immu-sql/index.ts:8](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-sql/index.ts#L8)

## Variables

### decodeSqlValue

• `Const` **decodeSqlValue**: [`SqlDecoder`](immu_sql.md#sqldecoder)

Decodes bytes to js types.

#### Defined in

[immudb-node/src/immu-sql/index.ts:13](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-sql/index.ts#L13)

## Functions

### createSqlMap

▸ **createSqlMap**<`T`\>(`def`): (`data`: [`SqlRowColumn`](types_Entry.md#sqlrowcolumn)[]) => { [key in string \| number \| symbol]: ReturnType<SqlDecoder[T[key]["type"]]\> }

**`Example`**

```ts
const mapTestTableRow = createSqlMap({
    id1:        {type: 'int',       id: 0},
    id2:        {type: 'string',    id: 1},
    created:    {type: 'timestamp', id: 2},
    data:       {type: 'string',    id: 3},
    isActive:   {type: 'boolean',   id: 4},
})

```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

`fn`

▸ (`data`): { [key in string \| number \| symbol]: ReturnType<SqlDecoder[T[key]["type"]]\> }

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`SqlRowColumn`](types_Entry.md#sqlrowcolumn)[] |

##### Returns

{ [key in string \| number \| symbol]: ReturnType<SqlDecoder[T[key]["type"]]\> }

#### Defined in

[immudb-node/src/immu-sql/index.ts:65](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-sql/index.ts#L65)
