import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import * as consts from './consts.js'






export function entryMetaToBufferLength(metadata?: immu.EntryMetadata | null) {
    let length = 0
    if(metadata?.deleted === true) {
        length += 1 // tag for deleted as UInt8
    }
    if(metadata?.expiresAt !== undefined) {
        length += 1 // tag for expiration as UInt8
        length += 8 // expiration as UInt64 BE
    }
    if(metadata?.nonIndexable === true) {
        length += 1 // tag for nonIndexable as UInt8
    }

    return length
}


/**
 * Binary formats entry KV metadata as concatence of following buffers:
 * - if `deleted` is true than buffer with `0x00` byte otherwise empty buffer
 * - if `expiration.expiresAt` is defined than buffer with `0x01` byte otherwise
 *   empty buffer
 * - if `expiration.expiresAt` is defined than buffer with `expiresAt` as UInt64
 *   BE otherwise empty buffer
 * - if `nonIndexable` is true buffer with `0x02` byte otherwise empty buffer
 */
export function entryMetaToBuffer(metadata?: immu.EntryMetadata | null) {
    
    return Buffer.concat([
        (metadata?.deleted === true
            ? consts.TagEntryMetadataDeleted
            : Buffer.of()
        ),
        (metadata?.expiresAt !== undefined
            ? consts.TagEntryMetadataExpiresAt
            : Buffer.of()
        ),
        (metadata?.expiresAt !== undefined
            ? Buffer.from(metadata.expiresAt.toBytesBE())
            : Buffer.of()
        ),
        (metadata?.nonIndexable === true
            ? consts.TagEntryMetadataNonIndexable
            : Buffer.of()
        )
    ])
}
