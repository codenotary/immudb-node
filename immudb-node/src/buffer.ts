import Long from 'long'
import { Buffer } from 'node:buffer'
import { ExtendedJSONAble } from './types/ExtendedJSONAble.js'



/**
 * Serializes {@link ExtendedJSONAble} object to JSON and JSON to {@link Buffer}.
 *
 * > **Note** 
 * > 
 * > Object or subobject that is:
 * > - {@link Buffer} will be serialized to JSON as `{type: 'Buffer', data: [...]}`
 * > - {@link Long} will be serialized to JSON as`{type: 'Long', low: ..., high: ..., unsigned: ...}`
 *
 * @example
 * ```ts
 * import Long from 'long'
 * import { Buffer } from 'node:buffer'
 * 
 * console.log(
 *    toObject<string>(
 *        fromObject('some string')
 *     )
 * )
 * // 'some string'
 *
 * console.log(
 *     toObject<number>(
 *         fromObject(15)
 *     )
 * )
 * // 15
 * 
 * console.log(
 *     toObject<Buffer>(
 *         fromObject(Buffer.of(1, 10))
 *     )
 * )
 * // <Buffer 01 0a>
 *
 * console.log<Long>(
 *     toObject(
 *         fromObject(Long.fromValue({low: 1, high: 10, unsigned: true}))
 *     )
 * )
 * // Long { low: 1, high: 10, unsigned: true }
 * 
 * console.log<Buffer>(
 *     toObject(
 *         fromObject({type: 'Buffer', data: [1, 10]})
 *     )
 * )
 * // <Buffer 01 0a>
 * 
 * console.log(
 *     toObject<Long>(
 *         fromObject({type: 'Long', low: 1, high: 10, unsigned: true})
 *     )
 * )
 * // Long { low: 1, high: 10, unsigned: true }
 *
 * console.log(
 *     toObject(
 *         fromObject({
 *             string: 'some string',
 *             number: 15,
 *             long: Long.fromValue({low: 1, high: 10, unsigned: true}),
 *             buffer: Buffer.of(1, 10),
 *             alsoBuffer: {type: 'Buffer', data: [1, 10]},
 *             alsoLong: {type: 'Long', low: 1, high: 10, unsigned: true}
 *         })
 *     )
 * )
 * // {
 * //     string: 'some string',
 * //     number: 15,
 * //     long: Long { low: 1, high: 10, unsigned: true },
 * //     buffer: <Buffer 01 0a>,
 * //     alsoBuffer: <Buffer 01 0a>,
 * //     alsoLong: Long { low: 1, high: 10, unsigned: true }
 * // }
 * ```
 */
export function fromObject(object: ExtendedJSONAble): Buffer {
    return Buffer.from(JSON.stringify(object, (key, value) => {
        if(Long.isLong(value)) {
            return {
                type:       'Long',
                low:        value.low,
                high:       value.high,
                unsigned:   value.unsigned,
            }
        }
        return value
    }))
}


/**
 * Deserializes {@link Buffer} to JSON to {@link ExtendedJSONAble} object.
 * ({@link Buffer} must be serialized by {@link fromObject} function.)
 *
 * > **Note** 
 * > 
 * > Object or subobject heaving structure:
 * > - `{type: 'Buffer'}` will be tried to be parsed as {@link Buffer}
 * > - `{type: 'Long'}` will be tried to be parsed as {@link Long}
 *
 * @example
 * ```ts
 * import Long from 'long'
 * import { Buffer } from 'node:buffer'
 * 
 * console.log(
 *    toObject<string>(
 *        fromObject('some string')
 *     )
 * )
 * // 'some string'
 *
 * console.log(
 *     toObject<number>(
 *         fromObject(15)
 *     )
 * )
 * // 15
 * 
 * console.log(
 *     toObject<Buffer>(
 *         fromObject(Buffer.of(1, 10))
 *     )
 * )
 * // <Buffer 01 0a>
 *
 * console.log<Long>(
 *     toObject(
 *         fromObject(Long.fromValue({low: 1, high: 10, unsigned: true}))
 *     )
 * )
 * // Long { low: 1, high: 10, unsigned: true }
 * 
 * console.log<Buffer>(
 *     toObject(
 *         fromObject({type: 'Buffer', data: [1, 10]})
 *     )
 * )
 * // <Buffer 01 0a>
 * 
 * console.log(
 *     toObject<Long>(
 *         fromObject({type: 'Long', low: 1, high: 10, unsigned: true})
 *     )
 * )
 * // Long { low: 1, high: 10, unsigned: true }
 *
 * console.log(
 *     toObject(
 *         fromObject({
 *             string: 'some string',
 *             number: 15,
 *             long: Long.fromValue({low: 1, high: 10, unsigned: true}),
 *             buffer: Buffer.of(1, 10),
 *             alsoBuffer: {type: 'Buffer', data: [1, 10]},
 *             alsoLong: {type: 'Long', low: 1, high: 10, unsigned: true}
 *         })
 *     )
 * )
 * // {
 * //     string: 'some string',
 * //     number: 15,
 * //     long: Long { low: 1, high: 10, unsigned: true },
 * //     buffer: <Buffer 01 0a>,
 * //     alsoBuffer: <Buffer 01 0a>,
 * //     alsoLong: Long { low: 1, high: 10, unsigned: true }
 * // }
 * ```
 */
export function toObject<T extends ExtendedJSONAble>(buffer: Buffer): T {
    return JSON.parse(buffer.toString(), (key, value) => {
        if(value && value.type === 'Buffer') {
            return Buffer.from(value)
        }
        if(value && value.type === 'Long') {
            return Long.fromValue(value)
        }
        return value
    })
}



/**
 * Same as:
 * 
 * ```ts
 * const number = 1000
 * const buf = Buffer.alloc(4)
 * buf.writeUInt32BE(number)
 * console.log(buf) 
 * // <Buffer 03 e8>
 * console.log(fromUInt16Be(number)) 
 * // <Buffer 03 e8>
 * ```
 */
export function fromUInt16BE(number: number): Buffer {
    const buf = Buffer.alloc(2)
    buf.writeUInt16BE(number)
    return buf
}

/**
 * Same as:
 * 
 * ```ts
 * const number = 200000
 * const buf = Buffer.alloc(4)
 * buf.writeUInt32BE(number)
 * console.log(buf) 
 * // <Buffer 00 03 0d 40>
 * console.log(fromUInt32Be(number)) 
 * // <Buffer 00 03 0d 40>
 * ```
 */
export function fromUInt32BE(number: number): Buffer {
    const buf = Buffer.alloc(4)
    buf.writeUInt32BE(number)
    return buf
}

/**
 * Same as:
 * 
 * ```ts
 * const number = 3.14
 * const buf = Buffer.alloc(8)
 * buf.writeDoubleBE(number)
 * console.log(buf) 
 * // <Buffer 40 09 1e b8 51 eb 85 1f>
 * console.log(fromDoubleBe(number)) 
 * // <Buffer 40 09 1e b8 51 eb 85 1f>
 * ```
 */
export function fromDoubleBe(number: number): Buffer {
    const buf = Buffer.alloc(8)
    buf.writeDoubleBE(number)
    return buf
}


/**
 * Same as:
 * 
 * ```ts
 * const number = 200000n
 * const buf = Buffer.alloc(8)
 * buf.writeBigUInt64BE(number)
 * console.log(buf) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * console.log(fromUInt64BEAsBigInt(number)) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * ```
 */
export function fromUInt64BEAsBigInt(number: bigint): Buffer {
    const buf = Buffer.alloc(8)
    buf.writeBigUInt64BE(number)
    return buf
}


/**
 * Same as:
 * 
 * ```ts
 * const number = Long.fromValue(200000)
 * const buf = Buffer.from(number.toBytesBE())
 * console.log(buf) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * console.log(fromUInt64BE(number)) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * ```
 */
export function fromUInt64BEAsLong(number: Long): Buffer {
    return Buffer.from(number.toBytesBE())
}

/**
 * Same as:
 * 
 * ```ts
 * const number = 200000
 * const numberLong = Long.fromInt(number, true)
 * const buf = Buffer.from(numberLong.toBytesBE())
 * console.log(buf) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * console.log(fromUInt64BEAsNumber(number)) 
 * // <Buffer 00 00 00 00 00 03 0d 40>
 * ```
 */
 export function fromUInt64BEAsNumber(number: number): Buffer {
    return fromUInt64BEAsBigInt(BigInt(number))
    // return fromUInt64BEAsLong(Long.fromInt(number, true))
}


/**
 * Same as:
 * 
 * ```ts
 * const buf = Buffer.from([1,2,3,4,5,6,7,8])
 * const offset = 0
 * const val = buf.readDoubleBE(offset)
 * console.log(val) 
 * // 8.20788039913184e-304
 * console.log(toDoubleBe(buf, offset)) 
 * // 8.20788039913184e-304
 * ```
 */
export function toDoubleBe(buf: Buffer, offset?: number): number {
    return buf.readDoubleBE(offset)
}

/**
 * Same as:
 * 
 * ```ts
 * const buffer = Buffer.from([
 *   0x00, 0x00, 0x00, 0x01, 
 *   0x00, 0x00, 0x00, 0x01]
 * )
 * const offset = 0
 * const val = Long.fromBytesBE(
 *   [...buffer.subarray(offset, offset + 8).values()], 
 *   true
 * )
 * console.log(val) 
 * // Long { low: 1, high: 1, unsigned: true }
 * console.log(toUInt64BE(buffer, offset)) 
 * // Long { low: 1, high: 1, unsigned: true }
 * ```
 */
export function toUInt64BE(buf: Buffer, offset?: number): Long {
    offset = offset ?? 0
    return Long.fromBytesBE([...buf.subarray(offset, offset + 8).values()], true)
}

/**
 * Same as:
 * 
 * ```ts
 * const buffer = Buffer.from([
 *   0x00, 0x00, 0x00, 0b00000011
 * ])
 * const offset = 0
 * const val = buffer.readUInt32BE(offset)
 * console.log(val) 
 * // 3
 * console.log(toUInt32BE(buffer, offset)) 
 * // 3
 * ```
 */
export function toUInt32BE(buf: Buffer, offset?: number): number {
    return buf.readUInt32BE(offset)
}



/**
 * Same as:
 * 
 * ```ts
 * const buffer = Buffer.from([0x00, 0b00000011])
 * const offset = 0
 * const val = buffer.readUInt16BE(offset)
 * console.log(val) 
 * // 3
 * console.log(toUInt16BE(buffer, offset)) 
 * // 3
 * ```
 */
 export function toUInt16BE(buf: Buffer, offset?: number): number {
    return buf.readUInt16BE(offset)
}

