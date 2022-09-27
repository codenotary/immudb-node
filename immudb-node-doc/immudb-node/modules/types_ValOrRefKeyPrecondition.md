[immudb-node](../README.md) / [Exports](../modules.md) / types/ValOrRefKeyPrecondition

# Module: types/ValOrRefKeyPrecondition

## Table of contents

### Type Aliases

- [ValOrRefKeyPrecondition](types_ValOrRefKeyPrecondition.md#valorrefkeyprecondition)
- [ValOrRefKeyPreconditionKeyExist](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeyexist)
- [ValOrRefKeyPreconditionKeyNotExist](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeynotexist)
- [ValOrRefKeyPreconditionKeyNotModified](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeynotmodified)

## Type Aliases

### ValOrRefKeyPrecondition

Ƭ **ValOrRefKeyPrecondition**: [`ValOrRefKeyPreconditionKeyExist`](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeyexist) \| [`ValOrRefKeyPreconditionKeyNotExist`](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeynotexist) \| [`ValOrRefKeyPreconditionKeyNotModified`](types_ValOrRefKeyPrecondition.md#valorrefkeypreconditionkeynotmodified)

Key value condition, one of 3 possible conditions:
- key must exist taking as argument some key,
- key must not exist taking as arugment some key,
- key must not be modified arter transaction with id taking as
  argument some key and id of transaction.

#### Defined in

[immudb-node/src/types/ValOrRefKeyPrecondition.ts:13](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/ValOrRefKeyPrecondition.ts#L13)

___

### ValOrRefKeyPreconditionKeyExist

Ƭ **ValOrRefKeyPreconditionKeyExist**: `Object`

Key must exist condition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `type` | ``"key-must-exist"`` |

#### Defined in

[immudb-node/src/types/ValOrRefKeyPrecondition.ts:19](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/ValOrRefKeyPrecondition.ts#L19)

___

### ValOrRefKeyPreconditionKeyNotExist

Ƭ **ValOrRefKeyPreconditionKeyNotExist**: `Object`

Key must exist condition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `type` | ``"key-must-not-exist"`` |

#### Defined in

[immudb-node/src/types/ValOrRefKeyPrecondition.ts:26](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/ValOrRefKeyPrecondition.ts#L26)

___

### ValOrRefKeyPreconditionKeyNotModified

Ƭ **ValOrRefKeyPreconditionKeyNotModified**: `Object`

Key must not be modified since transaction with id condition.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `Buffer` |
| `txId` | `Long` |
| `type` | ``"key-must-not-be-modified"`` |

#### Defined in

[immudb-node/src/types/ValOrRefKeyPrecondition.ts:32](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/ValOrRefKeyPrecondition.ts#L32)
