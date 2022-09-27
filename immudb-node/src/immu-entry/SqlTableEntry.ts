import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { 
    PrefixKeySql, 
    TagSqlTable, 
} from '../immu-hash/consts.js'









export function binEntryToSqlTableEntry(
    props: immu.BinEntry
): immu.SqlTableEntry {

    const decodedKey = binEntryPrefixedKeyToSqlTableEntryPart(props.prefixedKey)
    const decodedVal = binEntryPrefixedValToSqlTableEntryName(props.prefixedVal)

    return {
        type:       'sql',
        version:    '1',
        sqlType:    'table',
        meta:       props.meta,
        dbId:       decodedKey.dbId,
        tableId:    decodedKey.tableId,
        tableName:  decodedVal,
    }
}



export function sqlTableEntryToBinEntry(
    props: immu.SqlTableEntry
): immu.BinEntry {

    const encodedKey = sqlTableEntryToLeafEntryPrefixedKey(props)
    const encodedVal = sqlTableEntryToBinEntryPrefixedVal(props)

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
 * - following bytes `Buffer.from('CTL.TABLE.')`
 * 
 * Meaning {@link Buffer} is index.
 */
export function isBinEntryKeySqlTableEntryPart(b: Buffer) {
    if(b[0] !== PrefixKeySql[0]) {
        return false
    }
    const sqlTag = TagSqlTable
    return b.subarray(1, 1 + sqlTag.byteLength).equals(sqlTag)
}













/**
 * Decodes {@link Buffer} to sql index structure header from:
 * - prefix: first byte `0x02`
 * - tag: bytes `Buffer.from('CTL.TABLE.')`
 * - dbId: UInt32BE,
 * - tableId: UInt32BE,
 * 
 */
export function binEntryPrefixedKeyToSqlTableEntryPart(
    b: Buffer
) {
    const sqlTag = TagSqlTable
    let index = 0
    const prefix = b[index]
    index += 1
    const tag = sqlTag
    index += sqlTag.byteLength
    const dbId = buffer.toUInt32BE(b, index)
    index += 4
    const tableId = buffer.toUInt32BE(b, index)
    index += 4

    if(b.byteLength !== index) {
        throw 'not entire sql buffer parsed: ' + b.subarray(index)
    }

    return {
        prefix,
        tag: tag.toString(),
        dbId,
        tableId,
    }
}




export function sqlTableEntryToLeafEntryPrefixedKey(
    entry: immu.SqlTableEntry
) {
    const prefixSql = PrefixKeySql
    const prefixSqlType = TagSqlTable
    const dbId = buffer.fromUInt32BE(entry.dbId)
    const tableId = buffer.fromUInt32BE(entry.tableId)

    

    return Buffer.concat([
        prefixSql,
        prefixSqlType,
        dbId,
        tableId,
    ])
}





/**
 * Decodes {@link Buffer} to sql index structure value from:
 * - columnId: first byte 
 * - isAscDesc: bytes (boolean),
 * 
 */
export function binEntryPrefixedValToSqlTableEntryName(
    b: Buffer
): string {
    return b.toString('utf8')
}



export function sqlTableEntryToBinEntryPrefixedVal(
    props: immu.SqlTableEntry
): Buffer {
    return Buffer.from(props.tableName)
}