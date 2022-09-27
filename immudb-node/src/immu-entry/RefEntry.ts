import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { PrefixKeyRef, PrefixValRef } from '../immu-hash/consts.js'








export function binEntryToRefEntry(props: immu.BinEntry): immu.RefEntry {

    const decoded = decodeBinEntryValAsRefEntryPart(props.prefixedVal)
    return {
        type:           'ref',
        version:        '1',
        meta:           props.meta,
        key:            binEntryKeyToRefEntryKey(props.prefixedKey),
        referredKey:    decoded.refKey,
        referredAtTxId: decoded.refKeySeenFromTxId,
    }
}


export function refEntryToBinEntry(props: immu.RefEntry): immu.BinEntry {
    return {
        type:       'bin',
        version:    '1',
        meta:       props.meta,
        prefixedKey: Buffer.concat([
            PrefixKeyRef, 
            props.key
        ]),
        prefixedVal: Buffer.concat([
            PrefixValRef,
            props.referredKey,
            Buffer.from(props.referredAtTxId.toBytesBE())
        ])
    }
}



export function refEntryToLeafEntryPrefixedKey(props: immu.RefEntry): Buffer {
    return Buffer.concat([PrefixKeyRef, props.key])
}


export function binEntryKeyToRefEntryKey(keyBytes: Buffer, offset?: number) {
    let index = offset ?? 0

    const keyPrefix = keyBytes[index]
    index += 1
    const key = keyBytes.subarray(index)

    return key
}


export function decodeBinEntryValAsRefEntryPart(valBytes: Buffer, offset?: number) {
    let index = offset ?? 0

    const refPrefix = valBytes[index]
    index += 1

    const refKeySeenFromTxId = buffer.toUInt64BE(valBytes, index)
    index += 8

    const keyPrefix = valBytes[index]
    index += 1

    const refKey = valBytes.subarray(index)

    return {
        refKey,
        refKeySeenFromTxId,
    }
}

