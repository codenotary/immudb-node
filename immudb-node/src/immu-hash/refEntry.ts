
import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'
import { PrefixKeyVal } from './consts.js'
import { entryMetaToBuffer } from './EntryMetadata.js'




/**
 * Hashes key-value entry as hash of fallowing buffers:
 * - metadata binary Buffer length as UInt16 BE Buffer
 * - metadata binary as Buffer Buffer
 * - key prefix length plus key length as UInt16 BE Buffer
 * - reference key prefix (0x00) as UInt8 Buffer
 * - reference key as Buffer
 * - hash of:
 *   - reference prefix (0x01) as UInt8 Buffer
 *   - reference transaction id as UInt64 BE Buffer
 *   - reference referencedKey prefix (0x00) as UInt8 Buffer
 *   - reference referencedKey as Buffer
 */
 export function hashOfRefEntry(props: immu.RefEntry): Buffer {

    const meta = entryMetaToBuffer(props.meta)
    const metaLength = meta.byteLength


    const prefixKey = PrefixKeyVal
    const prefixKeyLength = prefixKey.byteLength
    const key = props.key
    const keyLength = key.byteLength
    const prefixedKeyLength = buffer.fromUInt16BE(prefixKeyLength + keyLength)

    const prefixValueRef = Buffer.of(0x01)

    const referredKeyAtTxId = Buffer.from(props.referredAtTxId.toBytesBE())
    const prefixValue = Buffer.of(0x00)
    const referredKey = props.referredKey
    const value = [
        referredKeyAtTxId,
        prefixValue,
        referredKey,
    ]

    const entryHash = hash.ofTreeBuffers(
        buffer.fromUInt16BE(metaLength),
        meta,
        prefixedKeyLength, 
        [
            prefixKey, 
            key,
        ],
        hash.ofTreeBuffers(
            prefixValueRef, 
            value, 
        )
    )


    return entryHash
}