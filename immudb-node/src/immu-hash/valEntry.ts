import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'
import { PrefixKeyVal, PrefixValVal } from './consts.js'
import { entryMetaToBuffer } from './EntryMetadata.js'


/**
 * Hashes key-value entry as hash of fallowing buffers:
 * - metadata binary format length as UInt16 BE
 * - metadata binary
 * - key prefix length plus key length as UInt16 BE
 * - key prefix (0x00)
 * - key
 * - hash of value prefix and value:
 *   - value prefix (0x00)
 *   - value 
 */
 export function hashOfValEntry(
    props: immu.ValEntry
): Buffer {

    const meta = entryMetaToBuffer(props.meta)
    const metaLength = buffer.fromUInt16BE(meta.byteLength)

    const prefixKey = PrefixKeyVal
    const prefixKeyLength = prefixKey.byteLength

    const key = props.key
    const keyLength = key.byteLength
    const prefixedKeyLength = buffer.fromUInt16BE(prefixKeyLength + keyLength)

    const prefixValue = PrefixValVal
    const value = props.val

    const entryHash = hash.ofTreeBuffers(
        metaLength,
        meta,
        prefixedKeyLength, 
        [
            prefixKey, 
            key,
        ],
        hash.ofTreeBuffers(
            prefixValue, 
            value, 
        )
    )


    return entryHash
}

