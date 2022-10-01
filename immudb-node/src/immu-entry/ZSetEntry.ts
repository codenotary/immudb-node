import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { 
    PrefixKeyVal, 
    PrefixKeyZSet 
} from '../immu-hash/consts.js'





export function binEntryToZSetEntry(props: immu.BinEntry): immu.ZSetEntry {

    const decoded = decodeBinEntryKeyAsZSetEntryPart(props.prefixedKey)
    return {
        type:               'zSet',
        version:            '1',
        meta:               props.meta,
        zSet:               decoded.zSet,
        referredAtTxId:     decoded.refKeySeenFromTxId,
        referredKey:        decoded.refKey,
        referredKeyScore:   decoded.score,
    }
}

export function zSetEntryToBinEntry(props: immu.ZSetEntry): immu.BinEntry {
    return {
        type:               'bin',
        version:            '1',
        meta:               props.meta,
        prefixedKey:        zSetEntryToLeafEntryPrefixedKey(props),
        prefixedVal:        Buffer.of()
    }
}




export function zSetEntryToLeafEntryPrefixedKey(entry: immu.ZSetEntry): Buffer {

    // const setPrefixAndSetLength = buffer.fromUInt16BE(
    //     1 
    //     + 2
    //     + entry.zSet.byteLength
    //     + 8
    //     + 2 
    //     + 1
    //     + entry.referredKey.byteLength
    //     + 8
    // )
    const zPrefix   = PrefixKeyZSet
    const setLength = buffer.fromUInt16BE(entry.zSet.byteLength)
    const set       = entry.zSet
    const score     = buffer.fromDoubleBe(entry.referredKeyScore)
    const keyPrefixAndKeyLength = buffer.fromUInt16BE(
        1 + entry.referredKey.byteLength
    )
    const keyPrefix         = PrefixKeyVal
    const key               = entry.referredKey
    const keySeenFromTxId   = Buffer.from(entry.referredAtTxId.toBytesBE())

    return Buffer.concat([
        // setPrefixAndSetLength,
        zPrefix,
        setLength,
        set,
        score,
        keyPrefixAndKeyLength, 
            keyPrefix,
            key,
        keySeenFromTxId,
    ])
}



export function decodeBinEntryKeyAsZSetEntryPart(zKey: Buffer, offset?: number) {
    let index = offset ?? 0

    const prefix = zKey[index]
    index += 1

    const setLength = buffer.toUInt64BE(zKey, index).toNumber()
    index += 8

    const set = zKey.subarray(index, index + setLength)
    index += setLength

    const score = buffer.toDoubleBe(zKey, index)
    index += 8

    const keyPrefixAndKeyLength = buffer.toUInt64BE(zKey, index).toNumber()
    const keyLength = keyPrefixAndKeyLength - 1
    index += 8

    const keyPrefix = zKey[index]
    index += 1

    const key = zKey.subarray(index, index + keyLength)
    index += keyLength

    const keySeenFromTxId = buffer.toUInt64BE(zKey, index)
    index += 8

    return {
        zSet: set,
        score: score,
        refKey: key,
        refKeySeenFromTxId: keySeenFromTxId,
    }
}
