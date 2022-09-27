import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import * as consts from '../immu-hash/consts.js'





export function binEntryToValEntry(props: immu.BinEntry): immu.ValEntry {

    return {
        type: 'val',
        version: '1',
        meta: props.meta,
        key: binEntryKeyToValEntryKey(props.prefixedKey),
        val: binEntryValToValEntryVal(props.prefixedVal),
    }
}


export function valEntryToBinEntry(props: immu.ValEntry): immu.BinEntry {

    return {
        type: 'bin',
        version: '1',
        meta: props.meta,
        prefixedKey: Buffer.concat([
            consts.PrefixKeyVal,
            props.key,
        ]),
        prefixedVal: Buffer.concat([
            consts.PrefixValVal,
            props.val,
        ]),
    }
}

export function valEntryToLeafEntryPrefixedKey(props: immu.ValEntry) {
    return Buffer.concat([consts.PrefixKeyVal, props.key])
}




export function binEntryKeyToValEntryKey(keyBytes: Buffer, offset?: number) {
    let index = offset ?? 0

    const keyPrefix = keyBytes[index]
    index += 1
    const key = keyBytes.subarray(index)

    return key
}


export function binEntryValToValEntryVal(valBytes: Buffer, offset?: number) {
    let index = offset ?? 0

    const valPrefix = valBytes[index]
    index += 1
    const val = valBytes.subarray(index)

    return val
}



