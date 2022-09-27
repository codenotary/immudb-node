import { Buffer } from 'node:buffer'
import * as buffer from '../buffer.js'



/**
 * Deserializes zEntry from list of buffers heaving
 * following structure:
 * - setKey length - UInt64BE
 * - setKey
 * - refKey length - UInt64BE
 * - refKey
 * - refKeyScore length - UInt64BE
 * - refKeyScore - DoubleBE
 * - refKeyAtTxId length - UInt64BE
 * - refKeyAtTxId - UInt64BE
 * - refVal length - UInt64BE
 * - refVal
 */
export function toZEntry(
    everything: Buffer
) {
    if (everything.byteLength < 5 * 8) {
        throw 'buffers are too small for zEntry'
    }

    let start = 0

    const setKeyLength = everything.readUInt32BE(start + 4)
    start += 8

    const setKey = everything.subarray(start, start + setKeyLength)
    start += setKeyLength

    const refKeyLength = everything.readUInt32BE(start + 4)
    start += 8

    const refKey = everything.subarray(start, start + refKeyLength)
    start += refKeyLength

    const refKeyScoreLength = everything.readUInt32BE(start + 4)
    start += 8

    const refKeyScore = everything.readDoubleBE(start)
    start += refKeyScoreLength

    const refKeyAtTxIdLength = everything.readUInt32BE(start + 4)
    start += 8

    const refKeyAtTxId = buffer.toUInt64BE(everything, start)
    start += refKeyAtTxIdLength

    const refValLength = everything.readUInt32BE(start + 4)
    start += 8

    const refVal = everything.subarray(start, start + refValLength)
    start += refValLength

    return {
        zSet: setKey,
        score: refKeyScore,
        refKeySeenFromTxId: refKeyAtTxId,
        refKey: refKey,
        referencedKeyVal: refVal,
    }
}



/**
 * Deserializes zEntries from list of buffers heaving
 * following structure:
 * - serie of:
 *   - setKey length - UInt64BE
 *   - setKey
 *   - refKey length - UInt64BE
 *   - refKey
 *   - refKeyScore length - UInt64BE
 *   - refKeyScore - DoubleBE
 *   - refKeyAtTxId length - UInt64BE
 *   - refKeyAtTxId - UInt64BE
 *   - refVal length - UInt64BE
 *   - refVal
 */
export function toZEntries(everything: Buffer) {
    const zEntries = []
    let rest = everything
    while (rest.byteLength > 0) {
        const zEntry = toZEntry(rest)
        zEntries.push(zEntry)
        rest = rest.subarray(
            + 8 + zEntry.zSet.byteLength
            + 8 + zEntry.refKey.byteLength
            + 8 + 8 // score
            + 8 + 8 // atTxId
            + 8 + zEntry.referencedKeyVal.byteLength
        )
    }
    return zEntries
}