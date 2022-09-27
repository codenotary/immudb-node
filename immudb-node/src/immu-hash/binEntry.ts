import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'
import { entryMetaToBuffer } from './EntryMetadata.js'


/**
 * Hashes {@link immu.BinEntry} as sha256 of:
 * - metaLength - UInt16BE,
 * - meta - bytes,
 * - prefixedKeyLength - UInt16BE,
 * - prefixedKey - bytes
 * - sha256 of:
 *   - prefixedValue - bytes
 */
export function hashOfBinEntry(props: immu.BinEntry): Buffer {

    const meta = entryMetaToBuffer(props.meta)


    return hash.ofBuffers(
        buffer.fromUInt16BE(meta.byteLength),
        meta,
        buffer.fromUInt16BE(props.prefixedKey.byteLength), 
        props.prefixedKey,
        hash.ofBuffers(
            props.prefixedVal, 
        )
    )
}