[immudb-node](../README.md) / [Exports](../modules.md) / rfc6962/merkle-hash

# Module: rfc6962/merkle-hash

## Table of contents

### Functions

- [maxPowOf2LessOrEqTo](rfc6962_merkle_hash.md#maxpowof2lessoreqto)
- [merkelHashOf](rfc6962_merkle_hash.md#merkelhashof)

## Functions

### maxPowOf2LessOrEqTo

▸ **maxPowOf2LessOrEqTo**(`n`): `number`

Finds highest power of 2 smaller
than or equal to n. No input checks are performed,
so illegal input will return not relevant value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | Positive 32bit integer equall or greater than 1 |

#### Returns

`number`

Closest power of two value on the left

#### Defined in

[immudb-node/src/rfc6962/merkle-hash.ts:84](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/rfc6962/merkle-hash.ts#L84)

___

### merkelHashOf

▸ **merkelHashOf**(`things`): `Buffer`

The hashing algorithm is SHA-256. The input to the Merkle Tree Hash is a list
of data entries; these entries will be hashed to form the leaves of the
Merkle Hash Tree. The output is a single 32-byte Merkle Tree Hash.

Alghoritm is as follows:

```
MTH({})      = SHA-256()
MTH({d(0)})  = SHA-256(0x00 || d(0))
MTH(D(n))    = SHA-256(0x01 || MTH(D[0:k]) || MTH(D[k:n]))
```

Symbols:
* `D(n) = [d(0), d(1), ..., d(n-1)]`
* `||` is concatenation
* `k` = the largest power of two smaller than n
* `D(k1:k2) = [d(k1), d(k1+1),..., d(k2-1)]`.

**`Example`**

```ts
const merkleHash256BytesBuffer = merkelHashOf(Buffer.from('Quick brown fox'))
```

**`See`**

[rfc6962](https://datatracker.ietf.org/doc/html/rfc6962#section-2.1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `things` | `Buffer`[] | List of things to merkle hash |

#### Returns

`Buffer`

merkle hash

#### Defined in

[immudb-node/src/rfc6962/merkle-hash.ts:32](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/rfc6962/merkle-hash.ts#L32)
