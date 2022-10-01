import { Buffer } from 'node:buffer'
import { defaultChunkSize } from './consts.js'
import * as buffer from '../buffer.js'
import Long from 'long'



export function fromKVEntry(props: {
    key: Buffer,
    val: Buffer,
}): Buffer {

    const all = Buffer.concat([
        buffer.fromUInt64BEAsNumber(props.key.byteLength),
        props.key,
        buffer.fromUInt64BEAsNumber(props.val.byteLength),
        props.val,
    ])
    return all
}


export async function* fromKVEntries(kvs: {
    key: Buffer,
    val: Buffer,
}[]) {
    // console.log('fromKVEntries')

    for(const kv of kvs) {
        yield {
            content: fromKVEntry(kv)
        }
    }
}



/**
 * Deserializes key-value from list of buffers heaving
 * following structure:
 * - key length - UInt64BE
 * - key
 * - value length - UInt64BE
 * - value
 */
export function toKVEntry(everything: Buffer) {
    if (everything.byteLength < 16) {
        throw 'buffers are too small'
    }
    const keyLength = everything.readUInt32BE(4)
    const valLength = everything.readUInt32BE(8 + keyLength + 4)
    
    // if (everything.byteLength !== (8 + keyLength + 8 + valLength)) {
    //     throw 'kv stream buffers lengths does not match'
    // }

    const key = everything.subarray(8, 8 + keyLength)
    if (key.byteLength !== keyLength) {
        throw 'kv stream key lengths does not match'
    }
    const val = everything.subarray(8 + keyLength + 8, 8 + keyLength + 8 + valLength)
    if (val.byteLength !== valLength) {
        throw 'kv stream val lengths does not match'
    }

    return {
        key,
        val,
    }
}


/**
 * Deserializes key-values from list of buffers heaving
 * following structure:
 * - serie of:
 *   - key length - UInt64BE
 *   - key
 *   - value length - UInt64BE
 *   - value
 */
export function toKVEntries(everything: Buffer) {
    const kvs: {key: Buffer, val: Buffer}[] = []
    let rest = everything
    while (rest.byteLength > 0) {
        const kv = toKVEntry(rest)
        kvs.push(kv)
        rest = rest.subarray(8 + kv.key.byteLength + 8 + kv.val.byteLength)
    }
    return kvs
}




/**
 * Deserializes key-value from list of buffers heaving
 * following structure:
 * - key length - UInt64BE
 * - key
 * - value length - UInt64BE
 * - value
 */
 export function toKVEntryOpt(bufs: Iterator<Buffer, Buffer>) {
    const keyLengthBuf = Buffer.alloc(8)
    const valLengthBuf = Buffer.alloc(8)

    let start = 0
    let keyLengthAndRestChunk: Buffer | undefined
    while (start < 8) {
        const buf = bufs.next().value
        if (start + buf.byteLength <= 8) {
            keyLengthBuf.set(buf, start)
            start += buf.byteLength
        }
        else {
            keyLengthBuf.set(buf.subarray(0, 8 - start), start)
            keyLengthAndRestChunk = buf.subarray(8 - start)
        }
    }

    if (start < 8) {
        throw 'keyLength not complete'
    }

    const keyLength = keyLengthBuf.readUInt32BE(4)
    const key = Buffer.alloc(keyLength)
    let valLengthAndRestChunk: Buffer | undefined

    start = 0
    if ( keyLengthAndRestChunk ) {
        if (keyLengthAndRestChunk.byteLength <= keyLength) {
            key.set(keyLengthAndRestChunk, 0)
            start += keyLengthAndRestChunk.byteLength
        }
        else {
            key.set(keyLengthAndRestChunk.subarray(0, keyLength), 0)
            start += keyLength
            valLengthAndRestChunk = keyLengthAndRestChunk.subarray(keyLength)
        }
    }


    while (start < keyLength) {
        const buf = bufs.next().value
        if (start + buf.byteLength <= keyLength) {
            key.set(buf, start)
            start += buf.byteLength
        }
        else {
            key.set(buf.subarray(0, keyLength - start), start)
            valLengthAndRestChunk = buf.subarray(keyLength - start)
        }
    }

    if (start < keyLength) {
        throw 'key not complete'
    }


    start = 0
    let valAndRestChunk: Buffer | undefined
    if ( valLengthAndRestChunk ) {
        if (valLengthAndRestChunk.byteLength <= 8) {
            valLengthBuf.set(valLengthAndRestChunk, 0)
            start += valLengthAndRestChunk.byteLength
        }
        else {
            valLengthBuf.set(valLengthAndRestChunk.subarray(0, 8), 0)
            start += 8
            valAndRestChunk = valLengthAndRestChunk.subarray(8)
        }
    }

    while (start < 8) {
        const buf = bufs.next().value
        if (start + buf.byteLength <= 8) {
            valLengthBuf.set(buf, start)
            start += buf.byteLength
        }
        else {
            valLengthBuf.set(buf.subarray(0, 8 - start), start)
            valAndRestChunk = buf.subarray(8 - start)
        }
    }

    if (start < 8) {
        throw 'valLength not complete'
    }


    const valLength = valLengthBuf.readUInt32BE(4)
    const val = Buffer.alloc(valLength)


    start = 0
    if ( valAndRestChunk ) {
        if (valAndRestChunk.byteLength <= valLength) {
            val.set(valAndRestChunk, 0)
            start += valAndRestChunk.byteLength
        }
        else {
            throw 'val exceeds valLength 1'
        }
    }

    while (start < valLength) {
        const buf = bufs.next().value
        if (start + buf.byteLength <= valLength) {
            key.set(buf, start)
            start += buf.byteLength
        }
        else {
            throw 'val exceeds valLength 2'
        }
    }

    if (start < valLength) {
        throw 'val not complete'
    }
    
    return {
        key,
        val
    }
}
