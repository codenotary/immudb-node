import Long from 'long'
import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'


export type PK = TimespanPK | IntPK | StringPK | BlobPK | BooleanPK
export type PKDecode = 
    | typeof decodePKInt 
    | typeof decodePKString 
    | typeof decodePKBlob 
    | typeof decodePKBoolean 
    | typeof decodePKTimespan 


/**
 * Example: 
 * 
 * ```ts
 * const decodedId1Id2PK = decodePK({
 *     decoders: [
 *         {name: 'id1' as const, decode: decodePKInt},
 *         {name: 'id2' as const, decode: decodePKString},
 *     ],
 *     pkBinary: Buffer.from([
 *         0x80, 0x7f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfe, 
 *         0x80, 0x6b, 0x6b, 0x6b, 0x00, 0x00, 0x00, 0x03
 *     ])
 * })
 * // [
 * //     {name: 'id1', data: {type: 'int',    isNotNull: true,  data: -2} },
 * //     {name: 'id2', data: {type: 'string', isNotNull: false, data: 'kkk'} },
 * // ]
 * ```
 */
export function decodePK<T extends string>(props: {
    decoders: {
        name: T, 
        decode: PKDecode
    }[],
    pkBinary: Buffer
}) {
    const namedPKs: {
        name: T,
        data: PK
    }[] = []

    let rest = props.pkBinary
    for (const {name, decode} of props.decoders) {
        const step = decode(rest)
        const namedPK = {name, data: step.pk}
        namedPKs.push(namedPK)
        rest = step.rest
    }

    if (rest.byteLength !== 0) {
        throw 'decodePK left non empty buffer.'
    }

    return namedPKs
}





export type IntPK = {
    type:       'int',
    isNotNull:  boolean,
    data:       number,
}

export function decodePKInt(b: Buffer, offset?: number): {pk: IntPK, rest: Buffer} {
    let index = offset ?? 0

    const isNotNull = b[index] === 0 ? true : false
    index += 1

    let shiftedUInt64BE = [...b.subarray(index, index + 8)]
    shiftedUInt64BE[0] ^= 0x80     // unshift in place
    let uInt64 = shiftedUInt64BE
    const int64BE = Long.fromBytesBE(uInt64, false)
    index += 8

    return {
        pk: {
            type: 'int' as const,
            isNotNull,
            data: int64BE.toNumber(),
        },
        rest: b.subarray(index)
    }
}


export type BooleanPK = {
    type:       'boolean',
    isNotNull:  boolean,
    data:       boolean,
}


export function decodePKBoolean(b: Buffer, offset?: number): {pk: BooleanPK, rest: Buffer} {
    let index = offset ?? 0

    const isNotNull = b[index] === 0 ? true : false
    index += 1

    let boolean = b[index] === 0 ? true : false
    index += 1
    
    return {
        pk: {
            type: 'boolean',
            isNotNull,
            data: boolean,
        },
        rest: b.subarray(index)
    }
}


export type TimespanPK = {
    type:       'timespan',
    isNotNull:  boolean,
    data:       Date,
}

export function decodePKTimespan(b: Buffer, offset?: number): {pk: TimespanPK, rest: Buffer} {
    let index = offset ?? 0

    const isNotNull = b[index] === 0 ? true : false
    index += 1

    let shiftedUInt64BE = [...b.subarray(index, index + 8)]
    shiftedUInt64BE[0] ^= 0x80     // unshift in place
    let uInt64 = shiftedUInt64BE
    const int64BE = Long.fromBytesBE(uInt64, false)
    index += 8

    return {
        pk: {
            type: 'timespan',
            isNotNull,
            data: new Date(int64BE.toNumber()/1000),
        },
        rest: b.subarray(index)
    }
}




export type StringPK = {
    type:       'string',
    isNotNull:  boolean,
    data:       string,
}


/**
 * String is encoded as fallows:
 * - isNotNull - first byte
 * - string - string byte length bytes
 * - stringLength.
 * 
 * This can not be decoded from buffer heaving additional things
 * after previous structure without taking some assumptions.
 * 
 * 
 * This decoder assumes that: 
 * - length is less than 0xffffff (max of lower 3 bytes of 4 byte UInt32)
 * - string is utf8 encoded
 * - string does not contain null character.
 * 
 * This would mean that first 0 will be highest byte of UInt32 representing length.
 * 
 * 
 */
export function decodePKString(b: Buffer, offset?: number): {pk: StringPK, rest: Buffer} {
    let index = offset ?? 0

    const isNotNull = b[index] === 0 ? true : false
    index += 1

    // find index of first zero - this will be the length:
    const stringLength = b.subarray(index).findIndex((byte) => byte === 0x00)
    const string = b.subarray(index, index + stringLength)
    index += stringLength

    const declaredLength = buffer.toUInt32BE(b, index)
    index += 4
    
    if(string.byteLength !== declaredLength) {
        throw 'decoded PK string length should mach declared length'
    }

    return {
        pk: {
            type: 'string',
            isNotNull,
            data: string.toString('utf8'),
        },
        rest: b.subarray(index)
    }
}


export type BlobPK = {
    type:       'blob',
    isNotNull:  boolean,
    data:       Buffer,
}

/**
 * Blob is encoded as fallows:
 * - isNotNull - first byte
 * - blob - string byte length bytes
 * - blobLength.
 * 
 * This can not be decoded from buffer heaving additional things.
 * This function can be used for blobs that are:
 * - last PK component
 * - only PK component
 * 
 */
 export function decodePKBlob(b: Buffer, offset?: number): {pk: BlobPK, rest: Buffer} {
    let index = offset ?? 0

    const isNotNull = b[index] === 0 ? true : false
    index += 1

    const blobLength = b.subarray(index).byteLength - 4
    const blob = b.subarray(index, index + blobLength)
    index += blobLength

    const declaredLength = buffer.toUInt32BE(b, index)
    index += 4
    
    if(blob.byteLength !== declaredLength) {
        throw 'decoded PK blob length should mach declared length'
    }

    return {
        pk: {
            type: 'blob',
            isNotNull,
            data: blob,
        },
        rest: Buffer.from([])
    }
}