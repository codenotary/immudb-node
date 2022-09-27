import * as buffer from '../buffer.js'
import { Buffer } from 'node:buffer'
import type * as immu from '../types/index.js'
import { PrefixKeySql, TagSqlRow } from '../immu-hash/consts.js'






export function binEntryToSqlRowEntry(props: immu.BinEntry): immu.SqlRowEntry {

    const decodedBinKey = decodeBinEntryKeyToSqlRowEntryPart(props.prefixedKey)
    return {
        type:               'sql',
        sqlType:            'row',
        version:            '1',
        meta:               props.meta,
        dbId:               decodedBinKey.dbId,
        tableId:            decodedBinKey.tableId,
        pk:                 decodedBinKey.pk,
        columnsValues:      decodeValueSqlRow(props.prefixedVal).columnsValues,
    }
}


export function sqlRowEntryToSqlBinEntry(props: immu.SqlRowEntry): immu.BinEntry {

    return {
        type:               'bin',
        version:            '1',
        meta:               props.meta,
        prefixedKey:        sqlRowEntryToLeafEntryPrefixedKey(props),
        prefixedVal:        encodeValueSqlRow(props.columnsValues),
    }
}






/**
 * Checks if first bits of {@link Buffer} are in form:
 * - first byte `0x02`
 * - following bytes `Buffer.from('R.')`
 * 
 * Meaning {@link Buffer} is sql table row.
 */
export function isBinEntryKeySqlRowEntryPart(b: Buffer) {
    if(b[0] !== 0x02) {
        return false
    }
    const sqlTag = TagSqlRow
    return b.subarray(1, 1 + sqlTag.byteLength).equals(sqlTag)
}




/**
 * Decodes {@link Buffer} to sql table row structure header from:
 * - prefix: first byte `0x02`
 * - tag: bytes `Buffer.from('R.')`
 * - dbId: UInt32BE,
 * - tableId: UInt32BE,
 * - zero: UInt32BE,
 * - isPKNullable: byte (boolean):
 *   - `0x80` is not nullable
 *   - ?
 * - pk: Bytes
 */
export function decodeBinEntryKeyToSqlRowEntryPart(
    b: Buffer
) {
    const sqlTag = TagSqlRow
    let index = 0
    const prefix = b[index]
    index += 1
    const tag = sqlTag
    index += sqlTag.byteLength
    const dbId = buffer.toUInt32BE(b, index)
    index += 4
    const tableId = buffer.toUInt32BE(b, index)
    index += 4
    const zero = buffer.toUInt32BE(b, index)
    index += 4

    const pk = b.subarray(index)
    

    return {
        prefix,
        tag,
        dbId,
        tableId,
        zero,
        pk,
    }
}



export function sqlRowEntryToLeafEntryPrefixedKey(
    entry: immu.SqlRowEntry
): Buffer {
    const prefixSql     = PrefixKeySql
    const prefixSqlType = TagSqlRow
    const dbId          = buffer.fromUInt32BE(entry.dbId)
    const tableId       = buffer.fromUInt32BE(entry.tableId)
    const pkIndex       = buffer.fromUInt32BE(0)
    const pk            = entry.pk

    return Buffer.concat([
        prefixSql,
        prefixSqlType,
        dbId,
        tableId,
        pkIndex,
        pk
    ])
}














/**
 * Decodes {@link Buffer} to sql table row structure value from:
 * - numberOfColumns: UInt64BE,
 * - column value definitions:
 *   - columnId: UInt32BE,
 *   - columnByteLength: UInt32BE,
 *   - columnValue: bytes of length columnByteLength
 */
export function decodeValueSqlRow(b: Buffer): {
    columnsCount: number,
    columnsValues: (immu.SqlRowColumn  & {binLength: number})[],
} {
    let index = 0
    const columnsCount = buffer.toUInt32BE(b, index)
    index += 4

    const columnsValues = decodeSqlRowColumnsValues(b.subarray(index))

    return {
        columnsCount,
        columnsValues,
    }
}



/**
 * Decodes {@link Buffer} to sql table row column structure value from:
 * - columnId: UInt32BE,
 * - columnByteLength: UInt32BE,
 * - columnValue: bytes of length columnByteLength.
 * 
 * Returns decoded row column value and rest of buffer.
 */
export function decodeSqlRowColumnValue(
    b: Buffer
): {
    rowColumn: immu.SqlRowColumn & {binLength: number},
    rest: Buffer
} {
    let index = 0
    const columnId = buffer.toUInt32BE(b, index)
    index += 4
    const columnByteLength = buffer.toUInt32BE(b, index)
    index += 4
    const columnValue = b.subarray(index, index + columnByteLength)
    index += columnByteLength
    const rest = b.subarray(index)

    return {
        rowColumn: {
            id:         columnId,
            binLength:  columnByteLength,
            bin:        columnValue,
        },
        rest,
    }
}


/**
 * Decodes {@link Buffer} to sql table row columns values from:
 * - column value definitions:
 *   - columnId: UInt32BE,
 *   - columnByteLength: UInt32BE,
 *   - columnValue: bytes of length columnByteLength
 * 
 */
export function decodeSqlRowColumnsValues(
    b: Buffer
): (immu.SqlRowColumn & {binLength: number})[] {

    const result: (immu.SqlRowColumn  & {binLength: number})[] = []
    let toDecode = b.subarray()
    while(toDecode.byteLength > 0) {
        const {rowColumn, rest} = decodeSqlRowColumnValue(toDecode)
        result.push(rowColumn)
        toDecode = rest
    }

    return result
}



export function encodeValueSqlRow(
    props: immu.SqlRowColumn[]
): Buffer {

    return Buffer.concat([
        buffer.fromUInt32BE(props.length),
        Buffer.concat(props.map(column => Buffer.concat([
            buffer.fromUInt32BE(column.id),
            buffer.fromUInt32BE(column.bin.byteLength),
            column.bin
        ])))
    ])
}

