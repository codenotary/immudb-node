[immudb-node](../README.md) / [Exports](../modules.md) / rfc6962/merkle-audit-path

# Module: rfc6962/merkle-audit-path

## Table of contents

### Functions

- [merkleAuditPath](rfc6962_merkle_audit_path.md#merkleauditpath)
- [merkleAuditPathNav](rfc6962_merkle_audit_path.md#merkleauditpathnav)

## Functions

### merkleAuditPath

▸ **merkleAuditPath**(`things`, `m`): `Buffer`[]

A Merkle audit path for a leaf in a Merkle Hash Tree is the shortest list of
additional nodes in the Merkle Tree required to compute the Merkle Tree Hash
for that tree.

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `things` | `Buffer`[] | Things for which compute Merkel Audit Path |
| `m` | `number` | 0 based index of thing |

#### Returns

`Buffer`[]

List of nodes of tree representation of merkel hash allowing (with
addition of leaf) computation of merkel hash of list.

#### Defined in

[immudb-node/src/rfc6962/merkle-audit-path.ts:56](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/rfc6962/merkle-audit-path.ts#L56)

___

### merkleAuditPathNav

▸ **merkleAuditPathNav**(`thingsLength`, `m`): (``"l"`` \| ``"r"``)[]

Computes Merkle audit path navigation list for given
size of leafs and index of selected leaf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thingsLength` | `number` | - |
| `m` | `number` | 0 based index of thing |

#### Returns

(``"l"`` \| ``"r"``)[]

#### Defined in

[immudb-node/src/rfc6962/merkle-audit-path.ts:12](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/rfc6962/merkle-audit-path.ts#L12)
