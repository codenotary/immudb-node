[immudb-node](../README.md) / [Exports](../modules.md) / types/Provable

# Module: types/Provable

## Table of contents

### Type Aliases

- [Provable](types_Provable.md#provable)
- [ProvableTx](types_Provable.md#provabletx)

## Type Aliases

### Provable

Ƭ **Provable**: [`ProvableTx`](types_Provable.md#provabletx) \| [`ProvableTx`](types_Provable.md#provabletx)[] \| [`TxEntry`](types_TxEntry.md#txentry) \| [`TxEntry`](types_TxEntry.md#txentry)[]

ImmuDb can prove what has been set in what transaction, this implies that any
number of transaction can be verified.

As transaction (Tx) can contain entries (of type Entry), any
entry in context of transaction can be proved.

As list of transaction also can be proved, whole database composed of entries
(of type Entry) within transactions can also be proved.

#### Defined in

[immudb-node/src/types/Provable.ts:50](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/Provable.ts#L50)

___

### ProvableTx

Ƭ **ProvableTx**: `Object`

Structure represetning fundamental data which existance in ImmuDb can be
verified.

Minimal required data is transaction id Verifiable.id, because it
uniqly identifies transaction TxAnonymous, which is an atom of
verification process.

Common users would be also interested in:
- time of creation - Verifiable.timestamp
- some entries - Verifiable.entries.

All filds could be verified.

Verification process in all cases will verify all filds but entries. Entries
will be verified if specified and in this situation sometimes all entries
will be verified, even if not specified.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allEntriesCount?` | `number` |
| `allEntriesMht?` | `Buffer` |
| `entries?` | [`Entry`](types_Entry.md#entry)[] |
| `id` | `Long` |
| `prevTxHash?` | `Buffer` |
| `prevTxesMht?` | `Buffer` |
| `timestamp?` | `Long` |
| `txHash?` | `Buffer` |

#### Defined in

[immudb-node/src/types/Provable.ts:28](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/Provable.ts#L28)
