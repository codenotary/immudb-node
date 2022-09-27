[immudb-node](../README.md) / [Exports](../modules.md) / buffer

# Module: buffer

## Table of contents

### Functions

- [fromDoubleBe](buffer.md#fromdoublebe)
- [fromObject](buffer.md#fromobject)
- [fromUInt16BE](buffer.md#fromuint16be)
- [fromUInt32BE](buffer.md#fromuint32be)
- [fromUInt64BEAsBigInt](buffer.md#fromuint64beasbigint)
- [fromUInt64BEAsLong](buffer.md#fromuint64beaslong)
- [fromUInt64BEAsNumber](buffer.md#fromuint64beasnumber)
- [toDoubleBe](buffer.md#todoublebe)
- [toObject](buffer.md#toobject)
- [toUInt16BE](buffer.md#touint16be)
- [toUInt32BE](buffer.md#touint32be)
- [toUInt64BE](buffer.md#touint64be)

## Functions

### fromDoubleBe

▸ **fromDoubleBe**(`number`): `Buffer`

Same as:

```ts
const number = 3.14
const buf = Buffer.alloc(8)
buf.writeDoubleBE(number)
console.log(buf) 
// <Buffer 40 09 1e b8 51 eb 85 1f>
console.log(fromDoubleBe(number)) 
// <Buffer 40 09 1e b8 51 eb 85 1f>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:244](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L244)

___

### fromObject

▸ **fromObject**(`object`): `Buffer`

Serializes ExtendedJSONAble object to JSON and JSON to Buffer.

> **Note** 
> 
> Object or subobject that is:
> - Buffer will be serialized to JSON as `{type: 'Buffer', data: [...]}`
> - Long will be serialized to JSON as`{type: 'Long', low: ..., high: ..., unsigned: ...}`

**`Example`**

```ts
import Long from 'long'
import { Buffer } from 'node:buffer'

console.log(
   toObject<string>(
       fromObject('some string')
    )
)
// 'some string'

console.log(
    toObject<number>(
        fromObject(15)
    )
)
// 15

console.log(
    toObject<Buffer>(
        fromObject(Buffer.of(1, 10))
    )
)
// <Buffer 01 0a>

console.log<Long>(
    toObject(
        fromObject(Long.fromValue({low: 1, high: 10, unsigned: true}))
    )
)
// Long { low: 1, high: 10, unsigned: true }

console.log<Buffer>(
    toObject(
        fromObject({type: 'Buffer', data: [1, 10]})
    )
)
// <Buffer 01 0a>

console.log(
    toObject<Long>(
        fromObject({type: 'Long', low: 1, high: 10, unsigned: true})
    )
)
// Long { low: 1, high: 10, unsigned: true }

console.log(
    toObject(
        fromObject({
            string: 'some string',
            number: 15,
            long: Long.fromValue({low: 1, high: 10, unsigned: true}),
            buffer: Buffer.of(1, 10),
            alsoBuffer: {type: 'Buffer', data: [1, 10]},
            alsoLong: {type: 'Long', low: 1, high: 10, unsigned: true}
        })
    )
)
// {
//     string: 'some string',
//     number: 15,
//     long: Long { low: 1, high: 10, unsigned: true },
//     buffer: <Buffer 01 0a>,
//     alsoBuffer: <Buffer 01 0a>,
//     alsoLong: Long { low: 1, high: 10, unsigned: true }
// }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`ExtendedJSONAble`](types_ExtendedJSONAble.md#extendedjsonable) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:85](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L85)

___

### fromUInt16BE

▸ **fromUInt16BE**(`number`): `Buffer`

Same as:

```ts
const number = 1000
const buf = Buffer.alloc(4)
buf.writeUInt32BE(number)
console.log(buf) 
// <Buffer 03 e8>
console.log(fromUInt16Be(number)) 
// <Buffer 03 e8>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:206](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L206)

___

### fromUInt32BE

▸ **fromUInt32BE**(`number`): `Buffer`

Same as:

```ts
const number = 200000
const buf = Buffer.alloc(4)
buf.writeUInt32BE(number)
console.log(buf) 
// <Buffer 00 03 0d 40>
console.log(fromUInt32Be(number)) 
// <Buffer 00 03 0d 40>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:225](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L225)

___

### fromUInt64BEAsBigInt

▸ **fromUInt64BEAsBigInt**(`number`): `Buffer`

Same as:

```ts
const number = 200000n
const buf = Buffer.alloc(8)
buf.writeBigUInt64BE(number)
console.log(buf) 
// <Buffer 00 00 00 00 00 03 0d 40>
console.log(fromUInt64BEAsBigInt(number)) 
// <Buffer 00 00 00 00 00 03 0d 40>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `bigint` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:264](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L264)

___

### fromUInt64BEAsLong

▸ **fromUInt64BEAsLong**(`number`): `Buffer`

Same as:

```ts
const number = Long.fromValue(200000)
const buf = Buffer.from(number.toBytesBE())
console.log(buf) 
// <Buffer 00 00 00 00 00 03 0d 40>
console.log(fromUInt64BE(number)) 
// <Buffer 00 00 00 00 00 03 0d 40>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `Long` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:283](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L283)

___

### fromUInt64BEAsNumber

▸ **fromUInt64BEAsNumber**(`number`): `Buffer`

Same as:

```ts
const number = 200000
const numberLong = Long.fromInt(number, true)
const buf = Buffer.from(numberLong.toBytesBE())
console.log(buf) 
// <Buffer 00 00 00 00 00 03 0d 40>
console.log(fromUInt64BEAsNumber(number)) 
// <Buffer 00 00 00 00 00 03 0d 40>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/buffer.ts:300](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L300)

___

### toDoubleBe

▸ **toDoubleBe**(`buf`, `offset?`): `number`

Same as:

```ts
const buf = Buffer.from([1,2,3,4,5,6,7,8])
const offset = 0
const val = buf.readDoubleBE(offset)
console.log(val) 
// 8.20788039913184e-304
console.log(toDoubleBe(buf, offset)) 
// 8.20788039913184e-304
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/buffer.ts:319](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L319)

___

### toObject

▸ **toObject**<`T`\>(`buffer`): `T`

Deserializes Buffer to JSON to ExtendedJSONAble object.
(Buffer must be serialized by [fromObject](buffer.md#fromobject) function.)

> **Note** 
> 
> Object or subobject heaving structure:
> - `{type: 'Buffer'}` will be tried to be parsed as Buffer
> - `{type: 'Long'}` will be tried to be parsed as Long

**`Example`**

```ts
import Long from 'long'
import { Buffer } from 'node:buffer'

console.log(
   toObject<string>(
       fromObject('some string')
    )
)
// 'some string'

console.log(
    toObject<number>(
        fromObject(15)
    )
)
// 15

console.log(
    toObject<Buffer>(
        fromObject(Buffer.of(1, 10))
    )
)
// <Buffer 01 0a>

console.log<Long>(
    toObject(
        fromObject(Long.fromValue({low: 1, high: 10, unsigned: true}))
    )
)
// Long { low: 1, high: 10, unsigned: true }

console.log<Buffer>(
    toObject(
        fromObject({type: 'Buffer', data: [1, 10]})
    )
)
// <Buffer 01 0a>

console.log(
    toObject<Long>(
        fromObject({type: 'Long', low: 1, high: 10, unsigned: true})
    )
)
// Long { low: 1, high: 10, unsigned: true }

console.log(
    toObject(
        fromObject({
            string: 'some string',
            number: 15,
            long: Long.fromValue({low: 1, high: 10, unsigned: true}),
            buffer: Buffer.of(1, 10),
            alsoBuffer: {type: 'Buffer', data: [1, 10]},
            alsoLong: {type: 'Long', low: 1, high: 10, unsigned: true}
        })
    )
)
// {
//     string: 'some string',
//     number: 15,
//     long: Long { low: 1, high: 10, unsigned: true },
//     buffer: <Buffer 01 0a>,
//     alsoBuffer: <Buffer 01 0a>,
//     alsoLong: Long { low: 1, high: 10, unsigned: true }
// }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExtendedJSONAble`](types_ExtendedJSONAble.md#extendedjsonable) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`T`

#### Defined in

[immudb-node/src/buffer.ts:179](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L179)

___

### toUInt16BE

▸ **toUInt16BE**(`buf`, `offset?`): `number`

Same as:

```ts
const buffer = Buffer.from([0x00, 0b00000011])
const offset = 0
const val = buffer.readUInt16BE(offset)
console.log(val) 
// 3
console.log(toUInt16BE(buffer, offset)) 
// 3
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/buffer.ts:381](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L381)

___

### toUInt32BE

▸ **toUInt32BE**(`buf`, `offset?`): `number`

Same as:

```ts
const buffer = Buffer.from([
  0x00, 0x00, 0x00, 0b00000011
])
const offset = 0
const val = buffer.readUInt32BE(offset)
console.log(val) 
// 3
console.log(toUInt32BE(buffer, offset)) 
// 3
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[immudb-node/src/buffer.ts:362](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L362)

___

### toUInt64BE

▸ **toUInt64BE**(`buf`, `offset?`): `Long`

Same as:

```ts
const buffer = Buffer.from([
  0x00, 0x00, 0x00, 0x01, 
  0x00, 0x00, 0x00, 0x01]
)
const offset = 0
const val = Long.fromBytesBE(
  [...buffer.subarray(offset, offset + 8).values()], 
  true
)
console.log(val) 
// Long { low: 1, high: 1, unsigned: true }
console.log(toUInt64BE(buffer, offset)) 
// Long { low: 1, high: 1, unsigned: true }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Long`

#### Defined in

[immudb-node/src/buffer.ts:342](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/buffer.ts#L342)
