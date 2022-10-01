
import { createHash, type Hash } from 'node:crypto'
import * as stream from 'stream'





export function createGenerator() {
    return function computeHash(data: Buffer) {
        return createHash('sha256').update(data).digest()
    }
}



export function data(props: Buffer) {
    return createHash('sha256').update(props).digest()
}


export function node(props: {
    left: Buffer,
    right: Buffer,
}) {
    const hashState = createHash('sha256')
    hashState.update(Buffer.of(0x01))
    hashState.update(props.left)
    hashState.update(props.right)
    return hashState.digest()

    // return createHash('sha256').update(Buffer.from([
    //     0x01,               // prefix
    //     ...props.left,      // left node
    //     ...props.right,     // right node
    // ])).digest()
}

export function leaf(props: Buffer) {
    const hashState = createHash('sha256')
    hashState.update(Buffer.of(0x00))
    hashState.update(props)
    return hashState.digest()

    // return createHash('sha256').update(Buffer.from([
    //     0x00,            // prefix
    //     ...props,        // leaf data
    // ])).digest()
}



/**
 * Computes sha256 hash from list of buffers
 * (using streams internally).
 * 
 * Example:
 * 
 * ```js
 * 
 * const buffers = [
 *   Buffer.of(0), 
 *   Buffer.from([1,2,3])
 * ]
 * const hashValue = fromBuffers(buffers)
 * console.log('Hash value', hashValue)
 * //
 * 
 * ```
 * 
 * @see https://nodejs.org/api/crypto.html#class-hash
 * 
 */
export function fromBuffers(buffers: Buffer[]) {
    const hashState = createHash('sha256')
    for (const buffer of buffers) {
        hashState.update(buffer)
    }
    return hashState.digest()
}

export type BufferTree = Buffer | BufferTree[]



/**
 * 
 * Example usage: 
 * 
 * ```ts
 * 
 * fromTreeBuffers([
 *     Buffer.of(0), 
 *     [
 *         Buffer.of(0), 
 *         Buffer.of(0), 
 *         [
 *             Buffer.of(0)
 *         ], 
 *         []
 *     ]
 * ])
 * 
 * ```
 */
export function fromTreeBuffers(buffers: BufferTree[]) {
    let hashState = createHash('sha256')
    fromTreeBuffersInternal(hashState, buffers)
    return hashState.digest()
}
function fromTreeBuffersInternal(inout__hashState: Hash, buffers: BufferTree[]) {
    for (const buffer of buffers) {
        if(Buffer.isBuffer(buffer)) {
            inout__hashState.update(buffer)
        }
        else {
            fromTreeBuffersInternal(inout__hashState, buffer)
        }
    }
}



export function ofTreeBuffers(...buffers: BufferTree[]) {
    return fromTreeBuffers(buffers)
}

/**
 * Computes sha256 hash from list of buffers
 * (using streams internally).
 * 
 * Example:
 * 
 * ```js
 * 
 * // compute hash
 * const hashOfBufs = ofBuffers(
 *   Buffer.of(0), 
 *   Buffer.from([1,2,3])
 * )
 * 
 * console.log('Hash value', hashOfBufs)
 * //
 * 
 * ```
 * 
 * @see https://2ality.com/2019/11/nodejs-streams-async-iteration.html
 * 
 */
export function ofBuffers(...buffers: Buffer[]) {
    return fromBuffers(buffers)
}


/**
 * Computes sha256 hash from iterable of buffers
 * (using streams internally).
 * 
 * Example:
 * 
 * ```js
 * 
 * // iterator generator
 * function* createBuffers() {
 *   yield Buffer.of(0)
 *   yield Buffer.from([1,2,3])
 * }
 * 
 * // compute hash
 * const hashOfBufs1 = fromIterableBuffers(createBuffers())
 * console.log('Hash value 1', hashOfBufs1)
 * 
 * // any iterator will do:
 * const buffers = [
 *   Buffer.of(0), 
 *   Buffer.from([1,2,3])
 * ]
 * 
 * // compute hash
 * const hashOfBufs2 = fromIterableBuffers(buffers)
 * console.log('Hash value 2', hashOfBufs2)
 * 
 * // same result
 * console.log('Same hashes', hashOfBufs1.equals(hashOfBufs2))
 * //
 * 
 * ```
 * 
 * @see https://nodejs.org/api/crypto.html#class-hash
 * @see https://2ality.com/2019/11/nodejs-streams-async-iteration.html
 * 
 */
export function fromIterableBuffers(buffers: Iterable<Buffer>) {
    return stream.pipeline(
        stream.Readable.from(buffers),
        createHash('sha256')
    ).digest()
}


