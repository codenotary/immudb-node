import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { 
    PrefixKeySql, 
    TagSqlDb, 
} from '../immu-hash/consts.js'









export function binEntryToSqlDbEntry(
    props: immu.BinEntry
): immu.SqlDbEntry {

    const decodedKey = binEntryPrefixedKeyToSqlDbEntryPart(props.prefixedKey)
    const decodedVal = binEntryPrefixedValToSqlDbEntryName(props.prefixedVal)

    return {
        type:       'sql',
        version:    '1',
        sqlType:    'db',
        meta:       props.meta,
        dbId:       decodedKey.dbId,
        dbName:     decodedVal,
    }
}



export function sqlDbEntryToBinEntry(
    props: immu.SqlDbEntry
): immu.BinEntry {

    const encodedKey = sqlDbEntryToLeafEntryPrefixedKey(props)
    const encodedVal = sqlDbEntryToBinEntryPrefixedVal(props)

    return {
        type:           'bin',
        version:        '1',
        meta:           props.meta,
        prefixedKey:    encodedKey,
        prefixedVal:    encodedVal
    }
}





/**
 * Checks if first bits of {@link Buffer} are in form:
 * - first byte `0x02`
 * - following bytes `Buffer.from('CTL.DATABASE.')`
 * 
 * Meaning {@link Buffer} is index.
 */
export function isBinEntryKeySqlDbEntryPart(b: Buffer) {
    if(b[0] !== PrefixKeySql[0]) {
        return false
    }
    const sqlTag = TagSqlDb
    return b.subarray(1, 1 + sqlTag.byteLength).equals(sqlTag)
}













/**
 * Decodes {@link Buffer} to sql index structure header from:
 * - prefix: first byte `0x02`
 * - tag: bytes `Buffer.from('CTL.DATABASE.')`
 * - dbId: UInt32BE,
 * - tableId: UInt32BE,
 * 
 */
export function binEntryPrefixedKeyToSqlDbEntryPart(
    b: Buffer
) {
    const sqlTag = TagSqlDb
    let index = 0
    const prefix = b[index]
    index += 1
    const tag = sqlTag
    index += sqlTag.byteLength
    const dbId = buffer.toUInt32BE(b, index)
    index += 4

    if(b.byteLength !== index) {
        throw 'not entire sql buffer parsed: ' + b.subarray(index)
    }

    return {
        prefix,
        tag: tag.toString(),
        dbId,
    }
}




export function sqlDbEntryToLeafEntryPrefixedKey(
    entry: immu.SqlDbEntry
) {
    const prefixSql = PrefixKeySql
    const prefixSqlType = TagSqlDb
    const dbId = buffer.fromUInt32BE(entry.dbId)


    return Buffer.concat([
        prefixSql,
        prefixSqlType,
        dbId,
    ])
}





/**
 * Decodes {@link Buffer} to sql index structure value from:
 * - columnId: first byte 
 * - isAscDesc: bytes (boolean),
 * 
 */
export function binEntryPrefixedValToSqlDbEntryName(
    b: Buffer
): string {
    return b.toString('utf8')
}



export function sqlDbEntryToBinEntryPrefixedVal(
    props: immu.SqlDbEntry
): Buffer {
    return Buffer.from(props.dbName)
}