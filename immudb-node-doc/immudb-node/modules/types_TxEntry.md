[immudb-node](../README.md) / [Exports](../modules.md) / types/TxEntry

# Module: types/TxEntry

## Table of contents

### Type Aliases

- [BinTxEntry](types_TxEntry.md#bintxentry)
- [LeafTxEntry](types_TxEntry.md#leaftxentry)
- [RefTxEntry](types_TxEntry.md#reftxentry)
- [SqlColumnTxEntry](types_TxEntry.md#sqlcolumntxentry)
- [SqlDbTxEntry](types_TxEntry.md#sqldbtxentry)
- [SqlIndexTxEntry](types_TxEntry.md#sqlindextxentry)
- [SqlRowTxEntry](types_TxEntry.md#sqlrowtxentry)
- [SqlTableTxEntry](types_TxEntry.md#sqltabletxentry)
- [SqlTxEntry](types_TxEntry.md#sqltxentry)
- [TxContext](types_TxEntry.md#txcontext)
- [TxEntry](types_TxEntry.md#txentry)
- [ValTxEntry](types_TxEntry.md#valtxentry)
- [ZSetTxEntry](types_TxEntry.md#zsettxentry)

## Type Aliases

### BinTxEntry

Ƭ **BinTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:39](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L39)

___

### LeafTxEntry

Ƭ **LeafTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`HashEntry`](types_Entry.md#hashentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:40](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L40)

___

### RefTxEntry

Ƭ **RefTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:42](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L42)

___

### SqlColumnTxEntry

Ƭ **SqlColumnTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`SqlColumnEntry`](types_Entry.md#sqlcolumnentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:46](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L46)

___

### SqlDbTxEntry

Ƭ **SqlDbTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`SqlDbEntry`](types_Entry.md#sqldbentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:49](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L49)

___

### SqlIndexTxEntry

Ƭ **SqlIndexTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`SqlIndexEntry`](types_Entry.md#sqlindexentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:47](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L47)

___

### SqlRowTxEntry

Ƭ **SqlRowTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`SqlRowEntry`](types_Entry.md#sqlrowentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:45](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L45)

___

### SqlTableTxEntry

Ƭ **SqlTableTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`SqlTableEntry`](types_Entry.md#sqltableentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:48](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L48)

___

### SqlTxEntry

Ƭ **SqlTxEntry**: [`SqlRowTxEntry`](types_TxEntry.md#sqlrowtxentry) \| [`SqlColumnTxEntry`](types_TxEntry.md#sqlcolumntxentry) \| [`SqlIndexTxEntry`](types_TxEntry.md#sqlindextxentry) \| [`SqlTableTxEntry`](types_TxEntry.md#sqltabletxentry) \| [`SqlDbTxEntry`](types_TxEntry.md#sqldbtxentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:30](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L30)

___

### TxContext

Ƭ **TxContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entryId?` | `Long` |
| `id` | `Long` |

#### Defined in

[immudb-node/src/types/TxEntry.ts:15](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L15)

___

### TxEntry

Ƭ **TxEntry**: [`BinTxEntry`](types_TxEntry.md#bintxentry) \| [`LeafTxEntry`](types_TxEntry.md#leaftxentry) \| [`ValTxEntry`](types_TxEntry.md#valtxentry) \| [`RefTxEntry`](types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](types_TxEntry.md#zsettxentry) \| [`SqlTxEntry`](types_TxEntry.md#sqltxentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:21](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L21)

___

### ValTxEntry

Ƭ **ValTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:41](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L41)

___

### ZSetTxEntry

Ƭ **ZSetTxEntry**: [`TxContext`](types_TxEntry.md#txcontext) & [`ZSetEntry`](types_Entry.md#zsetentry)

#### Defined in

[immudb-node/src/types/TxEntry.ts:43](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/TxEntry.ts#L43)
