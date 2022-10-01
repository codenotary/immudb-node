import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import * as consts from './consts.js'
import { entryMetaToBuffer } from './EntryMetadata.js'





// Example zSet key obtainde from scanTxes:
// 
// 01 00 00 00 00 00 00 00 01 42 40 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 0d 00 00 00 00 00 00 00 00
// pz-   z   length          - z-   score               -                       -pk- k-  key seen from tx id
// 
// Corresponding zEntry
// {
//     set: Buffer.from('B'),
//     key: Buffer.of(13),
//     keyIndex: 2,
// }






/**
 * 
 * Hashes zSet entry as sha256 of:
 * 
 * - metadataLength - length of binary encoded metadata - UInt16BE,
 * - metadata - metadata - bytes
 * - prefixedZSetKeyLength - UInt16BE,
 * - prefixedZSetKey:
 *     - prefixZSet - `0x01` - byte
 *     - zSetLength - UInt64BE,
 *     - zSet - bytes,
 *     - score - Double64BE,
 *     - prefixedRefKeyLength - UInt64BE,
 *     - prefixedRefKey:
 *       - prefix - `0x00` - byte,
 *       - refKey - bytes
 * - sha256 of:
 *   - value - empty
 * 
 */
 export function hashOfZSetEntry(props: immu.ZSetEntry): Buffer {


    const meta = entryMetaToBuffer(props.meta)
    const metaLength = meta.byteLength


    const prefixZKey = consts.PrefixKeyZSet

    const zSet = props.zSet
    const zSetLength = buffer.fromUInt64BEAsNumber(props.zSet.length)
    const zSetRefScore = buffer.fromDoubleBe(props.referredKeyScore)


    const prefixReferredKey = consts.PrefixKeyVal
    const referredKey = props.referredKey
    const prefixedReferredKeyLength = buffer.fromUInt64BEAsNumber(
        prefixReferredKey.byteLength 
        + referredKey.byteLength 
    )


    const referredKeyAtTxId = Buffer.from(props.referredAtTxId.toBytesBE())

    const zSetKey = [
        prefixZKey, 
        zSetLength,
        zSet,
        zSetRefScore,
        prefixedReferredKeyLength,
        [
            prefixReferredKey,
            referredKey
        ],
        referredKeyAtTxId
    ]
    
    const zSetKeyLength = 
        prefixZKey.byteLength
        + zSetLength.byteLength
        + zSet.byteLength
        + zSetRefScore.byteLength
        + prefixedReferredKeyLength.byteLength
        + prefixReferredKey.byteLength
        + referredKey.byteLength
        + referredKeyAtTxId.byteLength



    const value = Buffer.of()


    const entryHash = hash.ofTreeBuffers(
        buffer.fromUInt16BE(metaLength),
        meta,
        buffer.fromUInt16BE(zSetKeyLength), 
        zSetKey,
        hash.ofTreeBuffers(
            value, 
        )
    )

    
    return entryHash
}