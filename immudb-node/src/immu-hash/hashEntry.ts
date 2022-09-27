import type * as immu from '../types/index.js'
import * as hash from './hash.js'
import * as buffer from '../buffer.js'
import { entryMetaToBuffer } from './EntryMetadata.js'


export function hashOfHashEntry(props: immu.HashEntry): Buffer {

    const meta              = entryMetaToBuffer(props.meta)
    const metaLength        = meta.byteLength

    return hash.ofBuffers(
        buffer.fromUInt16BE(metaLength),
        meta,
        buffer.fromUInt16BE(props.prefixedKey.byteLength), 
        props.prefixedKey,
        props.prefixedValHash,
    )
}