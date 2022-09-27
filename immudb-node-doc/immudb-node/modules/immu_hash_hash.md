[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/hash

# Module: immu-hash/hash

## Table of contents

### Type Aliases

- [BufferTree](immu_hash_hash.md#buffertree)

### Functions

- [createGenerator](immu_hash_hash.md#creategenerator)
- [data](immu_hash_hash.md#data)
- [fromBuffers](immu_hash_hash.md#frombuffers)
- [fromIterableBuffers](immu_hash_hash.md#fromiterablebuffers)
- [fromTreeBuffers](immu_hash_hash.md#fromtreebuffers)
- [leaf](immu_hash_hash.md#leaf)
- [node](immu_hash_hash.md#node)
- [ofBuffers](immu_hash_hash.md#ofbuffers)
- [ofTreeBuffers](immu_hash_hash.md#oftreebuffers)

## Type Aliases

### BufferTree

Ƭ **BufferTree**: `Buffer` \| [`BufferTree`](immu_hash_hash.md#buffertree)[]

#### Defined in

[immudb-node/src/immu-hash/hash.ts:82](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L82)

## Functions

### createGenerator

▸ **createGenerator**(): (`data`: `Buffer`) => `Buffer`

#### Returns

`fn`

▸ (`data`): `Buffer`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

##### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:9](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L9)

___

### data

▸ **data**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:17](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L17)

___

### fromBuffers

▸ **fromBuffers**(`buffers`): `Buffer`

Computes sha256 hash from list of buffers
(using streams internally).

Example:

```js

const buffers = [
  Buffer.of(0), 
  Buffer.from([1,2,3])
]
const hashValue = fromBuffers(buffers)
console.log('Hash value', hashValue)
//

```

**`See`**

https://nodejs.org/api/crypto.html#class-hash

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | `Buffer`[] |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:74](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L74)

___

### fromIterableBuffers

▸ **fromIterableBuffers**(`buffers`): `Buffer`

Computes sha256 hash from iterable of buffers
(using streams internally).

Example:

```js

// iterator generator
function* createBuffers() {
  yield Buffer.of(0)
  yield Buffer.from([1,2,3])
}

// compute hash
const hashOfBufs1 = fromIterableBuffers(createBuffers())
console.log('Hash value 1', hashOfBufs1)

// any iterator will do:
const buffers = [
  Buffer.of(0), 
  Buffer.from([1,2,3])
]

// compute hash
const hashOfBufs2 = fromIterableBuffers(buffers)
console.log('Hash value 2', hashOfBufs2)

// same result
console.log('Same hashes', hashOfBufs1.equals(hashOfBufs2))
//

```

**`See`**

 - https://nodejs.org/api/crypto.html#class-hash
 - https://2ality.com/2019/11/nodejs-streams-async-iteration.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | `Iterable`<`Buffer`\> |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:193](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L193)

___

### fromTreeBuffers

▸ **fromTreeBuffers**(`buffers`): `Buffer`

Example usage: 

```ts

fromTreeBuffers([
    Buffer.of(0), 
    [
        Buffer.of(0), 
        Buffer.of(0), 
        [
            Buffer.of(0)
        ], 
        []
    ]
])

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | [`BufferTree`](immu_hash_hash.md#buffertree)[] |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:106](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L106)

___

### leaf

▸ **leaf**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:39](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L39)

___

### node

▸ **node**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.left` | `Buffer` |
| `props.right` | `Buffer` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:22](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L22)

___

### ofBuffers

▸ **ofBuffers**(...`buffers`): `Buffer`

Computes sha256 hash from list of buffers
(using streams internally).

Example:

```js

// compute hash
const hashOfBufs = ofBuffers(
  Buffer.of(0), 
  Buffer.from([1,2,3])
)

console.log('Hash value', hashOfBufs)
//

```

**`See`**

https://2ality.com/2019/11/nodejs-streams-async-iteration.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `...buffers` | `Buffer`[] |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:150](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L150)

___

### ofTreeBuffers

▸ **ofTreeBuffers**(...`buffers`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...buffers` | [`BufferTree`](immu_hash_hash.md#buffertree)[] |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/hash.ts:124](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-hash/hash.ts#L124)
