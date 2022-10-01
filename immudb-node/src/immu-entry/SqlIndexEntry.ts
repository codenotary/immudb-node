import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { 
    PrefixKeySql, 
    TagSqlIndex, 
} from '../immu-hash/consts.js'












export function binEntryToSqlIndexEntry(
    props: immu.BinEntry
): immu.SqlIndexEntry {

    const decodedKey = binEntryPrefixedKeyToSqlIndexEntryPart(props.prefixedKey)
    const decodedVal = binEntryPrefixedValToSqlIndexEntryPart(props.prefixedVal)

    return {
        type:           'sql',
        version:        '1',
        sqlType:        'index',
        meta:           props.meta,
        dbId:           decodedKey.dbId,
        tableId:        decodedKey.tableId,
        indexId:        decodedKey.indexId,
        indexIsPrimary: decodedVal.indexIsPrimary,
        columns:        decodedVal.columns,
    }
}



export function sqlIndexEntryToBinEntry(
    props: immu.SqlIndexEntry
): immu.BinEntry {

    const encodedKey = sqlIndexEntryToLeafEntryPrefixedKey(props)
    const encodedVal = sqlIndexEntryToBinEntryPrefixedVal(props)

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
 * - following bytes `Buffer.from('CTL.INDEX.')`
 * 
 * Meaning {@link Buffer} is index.
 */
export function isBinEntryKeySqlIndexEntryPart(b: Buffer) {
    if(b[0] !== PrefixKeySql[0]) {
        return false
    }
    const sqlTag = TagSqlIndex
    return b.subarray(1, 1 + sqlTag.byteLength).equals(sqlTag)
}













/**
 * Decodes {@link Buffer} to sql index structure header from:
 * - prefix: first byte `0x02`
 * - tag: bytes `Buffer.from('CTL.INDEX.')`
 * - dbId: UInt32BE,
 * - tableId: UInt32BE,
 * - indexId: UInt32BE,
 * 
 */
export function binEntryPrefixedKeyToSqlIndexEntryPart(
    b: Buffer
) {
    const sqlTag = TagSqlIndex
    let index = 0
    const prefix = b[index]
    index += 1
    const tag = sqlTag
    index += sqlTag.byteLength
    const dbId = buffer.toUInt32BE(b, index)
    index += 4
    const tableId = buffer.toUInt32BE(b, index)
    index += 4
    const indexId = buffer.toUInt32BE(b, index)
    index += 4

    if(b.byteLength !== index) {
        throw 'not entire sql buffer parsed: ' + b.subarray(index)
    }

    return {
        prefix,
        tag: tag.toString(),
        dbId,
        tableId,
        indexId,
    }
}




export function sqlIndexEntryToLeafEntryPrefixedKey(
    entry: immu.SqlIndexEntry
) {
    const prefixSql = PrefixKeySql
    const prefixSqlType = TagSqlIndex
    const dbId = buffer.fromUInt32BE(entry.dbId)
    const tableId = buffer.fromUInt32BE(entry.tableId)
    const indexId = buffer.fromUInt32BE(entry.indexId)

    

    return Buffer.concat([
        prefixSql,
        prefixSqlType,
        dbId,
        tableId,
        indexId,
    ])
}





/**
 * Decodes {@link Buffer} to sql index structure value from:
 * - columnId: first byte 
 * - isAscDesc: bytes (boolean),
 * 
 */
export function binEntryPrefixedValToSqlIndexEntryPart(
    b: Buffer
): {
    indexIsPrimary: number,
    columns: immu.SqlIndexColumn[],
} {
    let index = 0
    const indexIsPrimary = b[0]
    index += 1


    const columns: immu.SqlIndexColumn[] = []
    while(index < b.byteLength) {
        const id = buffer.toUInt32BE(b, index)
        index += 4

        const ascDesc = b[index]
        index += 1

        columns.push({id, ascDesc})
    }

    if(b.byteLength !== index) {
        throw 'not entire sql buffer parsed: ' + b.subarray(index)
    }
    
    return {indexIsPrimary, columns}
}



export function sqlIndexEntryToBinEntryPrefixedVal(
    props: immu.SqlIndexEntry
): Buffer {
    return Buffer.concat([
        Buffer.of(props.indexIsPrimary),
        Buffer.concat(
            props.columns.map(indexColumn => Buffer.concat([
                buffer.fromUInt32BE(indexColumn.id),
                Buffer.of(indexColumn.ascDesc) 
            ]))
        )
    ])
}