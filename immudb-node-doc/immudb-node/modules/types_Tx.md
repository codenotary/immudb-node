[immudb-node](../README.md) / [Exports](../modules.md) / types/Tx

# Module: types/Tx

## Table of contents

### Type Aliases

- [RefToTxObsolate](types_Tx.md#reftotxobsolate)
- [TxCore](types_Tx.md#txcore)
- [TxHash](types_Tx.md#txhash)
- [TxObsolate](types_Tx.md#txobsolate)

## Type Aliases

### RefToTxObsolate

Ƭ **RefToTxObsolate**: `Object`

Structure representing transaction [TxObsolate](types_Tx.md#txobsolate),
useful for referring to transaction.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `Buffer` | Hash (sha256) of transaction. |
| `id` | `Long` | Id of reffered transaction. |
| `tx?` | [`TxObsolate`](types_Tx.md#txobsolate) | Transaction |

#### Defined in

[immudb-node/src/types/Tx.ts:143](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Tx.ts#L143)

___

### TxCore

Ƭ **TxCore**: `Object`

Transaction without specified entries.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `allEntriesCount` | `number` | Count of all entries set during this transaction. |
| `allEntriesMht` | `Buffer` | Merkle Hash of all entries set during this transaction. |
| `id` | `Long` | Transaction sequence number. First transaction have sequence number `1`. |
| `prevTxHash` | `Buffer` | Hash of contained transaction, effectively this means that transaction contain all other (database) transactions.   What is start transaction? |
| `prevTxesMht` | `Buffer` | Merkle Hash of list of all contained transactions (sha256) hashes (up to this transaction but not including). |
| `timestamp` | `Long` | When transaction happened. |
| `type` | ``"tx-core"`` | - |
| `version` | ``"1"`` | Transaction structure version. |

#### Defined in

[immudb-node/src/types/Tx.ts:30](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Tx.ts#L30)

___

### TxHash

Ƭ **TxHash**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `Long` | Transaction sequence number. First transaction have sequence number `1`. |
| `txHash` | `Buffer` | Hash of transaction. |
| `type` | ``"tx-hash"`` | - |
| `version` | ``"1"`` | Transaction structure version. |

#### Defined in

[immudb-node/src/types/Tx.ts:8](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Tx.ts#L8)

___

### TxObsolate

Ƭ **TxObsolate**: `Object`

Transaction is recursive structure heaving
entries (list of and data) and other (previous) transaction.

Effectively transaction is database at state
when the transaction was last database transaction.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `entriesCount` | `number` | Transaction can contain list of data (entries),  and it is count of this list. |
| `entriesMht` | `Buffer` | Merkle Hash of entries. |
| `id` | `Long` | Id of transaction. |
| `prevTxHash` | `Buffer` | Hash of contained transaction, effectively this means that transaction contain all other (database) transactions.   What is start transaction? |
| `prevTxesMht` | `Buffer` | Merkle Hash of list of all contained transactions (sha256) hashes (up to this transaction but not including). |
| `timestamp` | `Long` | When transaction happened. |
| `version` | ``1`` | Transaction structure version. |

#### Defined in

[immudb-node/src/types/Tx.ts:96](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Tx.ts#L96)
