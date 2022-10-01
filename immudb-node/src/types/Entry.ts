import Long from "long"
import { EntryMetadata } from "./EntryMeta.js"




export type KVMH = {
    prefixedKey: Buffer,
    prefixedVal: Buffer,
    meta?:       EntryMetadata,
    valHash:     Buffer,
}



export type BinEntry = {
    type:               'bin',
    version:            '1',
    prefixedKey:        Buffer,
    prefixedVal:        Buffer,
    meta?:              EntryMetadata
}


export type HashEntry = {
    type:               'hash',
    version:            '1',
    prefixedKey:        Buffer,
    meta?:              EntryMetadata
    prefixedValHash:    Buffer,
}


export type ValEntry = {
    type:               'val',
    version:            '1',
    meta?:              EntryMetadata,
    key:                Buffer,
    val:                Buffer,
}


export type RefEntry = {
    type:               'ref',
    version:            '1',
    meta?:              EntryMetadata,
    key:                Buffer,
    referredKey:        Buffer,
    referredAtTxId:     Long,
}


export type ZSetEntry = {
    type:               'zSet',
    version:            '1',
    meta?:              EntryMetadata,
    zSet:               Buffer,
    referredKey:        Buffer,
    referredAtTxId:     Long,
    referredKeyScore:   number,
}


export type SqlRowEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'row',
    dbId:               number,
    tableId:            number,
    pk:                 Buffer,
    columnsValues:      SqlRowColumn[],
}

export type SqlRowColumn = {
    id:         number,
    bin:        Buffer,
}

export type SqlColumnEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'column',
    dbId:               number,
    tableId:            number,
    columnId:           number,
    columnType:         string,
    columnIsNotNull:    boolean,
    columnIsAutoIncr:   boolean,
    columnName:         string,
    columnMaxLength:    number,
}

export type SqlIndexEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'index',
    dbId:               number,
    tableId:            number,
    indexId:            number,
    indexIsPrimary:     number,
    columns:            SqlIndexColumn[]
}

export type SqlIndexColumn = {
    id:         number,
    ascDesc:    number,
}

export type SqlTableEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'table',
    dbId:               number,
    tableId:            number,
    tableName:          string,
}

export type SqlDbEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'db',
    dbId:               number,
    dbName:             string,
}


/**
 * immudb sql entry, one of:
 * - row entry - {@link SqlRowEntry},
 * - column entry - {@link SqlColumnEntry},
 * - index entry - {@link SqlIndexEntry},
 * - table entry - {@link SqlTableEntry},
 * - database entry - {@link SqlDbEntry}.
 */
export type SqlEntry = 
    | SqlRowEntry
    | SqlColumnEntry
    | SqlIndexEntry
    | SqlTableEntry
    | SqlDbEntry


/**
 * immudb entry, one of:
 * - binary entry - {@link BinEntry},
 * - hash entry - {@link HashEntry},
 * - value entry - {@link ValEntry},
 * - reference entry - {@link RefEntry},
 * - z-Set entry - {@link ZSetEntry},
 * - sql entry - {@link SqlEntry},
 */
export type Entry = 
    | BinEntry
    | HashEntry
    | ValEntry
    | RefEntry
    | ZSetEntry
    | SqlEntry

