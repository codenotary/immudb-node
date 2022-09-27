[immudb-node](../README.md) / [Exports](../modules.md) / types/Transaction

# Module: types/Transaction

## Table of contents

### Type Aliases

- [Transaction](types_Transaction.md#transaction)

## Type Aliases

### Transaction

Ƭ **Transaction**: `Object`

Logical transaction with omitted filds connected to verification,
composed from TxCore and Entry

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entries` | [`Entry`](types_Entry.md#entry)[] |
| `id` | `Long` |
| `timestamp` | `Long` |

#### Defined in

[immudb-node/src/types/Transaction.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/Transaction.ts#L11)
