import type * as immu from '../types/index.js'
import * as e from '../immu-entry/index.js'
import * as consts from '../immu-hash/consts.js'






export function kvmhToEntry(props: immu.KVMH): immu.Entry {
    switch(kvmhToEntryType(props)) {
        case 'bin':     return kvmhToBinEntry(props)
        case 'hash':    return kvmhToHashEntry(props)
        case 'val':     return kvmhToValEntry(props)
        case 'ref':     return kvmhToRefEntry(props)
        case 'zSet':    return kvmhToZSetEntry(props)
        case 'sql':     return kvmhToSqlEntry(props)
        // case 'sql':     return kvmhToBinEntry(props)
    }
}



export function kvmhToEntryType(props: immu.KVMH): immu.Entry['type'] {
    
    if(props.prefixedKey.length === 0) {
        throw 'key must be not empty!'
    }
    switch(props.prefixedKey[0]) {
        case 0x00: {
            if(props.prefixedVal.length === 0) {
                return 'hash'
            }
            switch(props.prefixedVal[0]) {
                case 0x00:  return 'val'
                case 0x01:  return 'ref'
                default:    return 'bin'
            }
        }
        case 0x01:  return 'zSet'
        case 0x02:  return 'sql'
        default:    return 'bin'
    }
}




function kvmhToBinEntry(props: immu.KVMH): immu.BinEntry {

    return {
        type:               'bin',
        version:            '1',
        meta:               props.meta,
        prefixedKey:        props.prefixedKey,
        prefixedVal:        props.prefixedVal,
    }
}




function kvmhToHashEntry(props: immu.KVMH): immu.HashEntry {

    return {
        type:               'hash',
        version:            '1',
        meta:               props.meta,
        prefixedKey:        props.prefixedKey,
        prefixedValHash:    props.valHash,
    }
}


function kvmhToValEntry(props: immu.KVMH): immu.ValEntry {

    return {
        type:       'val',
        version:    '1',
        meta:       props.meta,
        key:        e.binEntryKeyToValEntryKey(props.prefixedKey),
        val:        e.binEntryValToValEntryVal(props.prefixedVal),
    }
}



function kvmhToRefEntry(props: immu.KVMH): immu.RefEntry {

    const decoded = e.decodeBinEntryValAsRefEntryPart(props.prefixedVal)
    return {
        type:           'ref',
        version:        '1',
        meta:           props.meta,
        key:            e.binEntryKeyToRefEntryKey(props.prefixedKey),
        referredKey:    decoded.refKey,
        referredAtTxId: decoded.refKeySeenFromTxId,
    }
}



function kvmhToZSetEntry(props: immu.KVMH): immu.ZSetEntry {

    const decoded = e.decodeBinEntryKeyAsZSetEntryPart(props.prefixedKey)
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







function kvmhToSqlEntry(
    props: immu.KVMH
): immu.SqlEntry {

    switch(kvmhToSqlEntryType(props)) {
        case 'row':     return kvmhToSqlRowEntry(props)
        case 'column':  return kvmhToSqlColumnEntry(props)
        case 'index':   return kvmhToSqlIndexEntry(props)
        case 'table':   return kvmhToSqlTableEntry(props)
        case 'db':      return kvmhToSqlDbEntry(props)
    }
}



function kvmhToSqlEntryType(
    props: immu.KVMH
): immu.SqlEntry['sqlType'] {

    if(e.isBinEntryKeySqlRowEntryPart(props.prefixedKey)) {
        return 'row'
    }

    if(e.isBinEntryKeySqlColumnEntryPart(props.prefixedKey)) {
        return 'column'
    }

    if(e.isBinEntryKeySqlIndexEntryPart(props.prefixedKey)) {
        return 'index'
    }

    if(e.isBinEntryKeySqlTableEntryPart(props.prefixedKey)) {
        return 'table'
    }

    if(e.isBinEntryKeySqlDbEntryPart(props.prefixedKey)) {
        return 'db'
    }

    throw 'not known sql entry!'
}



function kvmhToSqlRowEntry(props: immu.KVMH): immu.SqlRowEntry {

    const decodedBinKey = e.decodeBinEntryKeyToSqlRowEntryPart(props.prefixedKey)
    return {
        type:               'sql',
        sqlType:            'row',
        version:            '1',
        meta:               props.meta,
        dbId:               decodedBinKey.dbId,
        tableId:            decodedBinKey.tableId,
        pk:                 decodedBinKey.pk,
        columnsValues:      e.decodeValueSqlRow(props.prefixedVal).columnsValues,
    }
}



function kvmhToSqlColumnEntry(props: immu.KVMH): immu.SqlColumnEntry {

    const decodedBinKey = e.binEntryPrefixedKeyToSqlColumnEntryPart(props.prefixedKey)
    const decodedBinVal = e.binEntryPrefixedValToSqlColumnEntryPart(props.prefixedVal)
    const columnEntry: immu.SqlColumnEntry = {
        type:               'sql',
        sqlType:            'column',
        version:            '1',
        meta:               props.meta,
        dbId:               decodedBinKey.dbId,
        tableId:            decodedBinKey.tableId,
        columnId:           decodedBinKey.columnId,
        columnIsAutoIncr:   consts.isFlagAutoIncrementSet(decodedBinVal.columnAttribute),
        columnIsNotNull:    consts.isFlagNotNullSet(decodedBinVal.columnAttribute),
        columnType:         decodedBinKey.columnType,
        columnName:         decodedBinVal.columnName,
        columnMaxLength:    decodedBinVal.columnMaxLength,
    }

    // const checkBinKey = e.sqlColumnEntryToLeafEntryPrefixedKey(columnEntry)
    // if(checkBinKey.equals(props.prefixedKey) === false) {
    //     console.log('prefixedVal', props.prefixedKey)
    //     console.log('encodedVal', checkBinKey)
    //     throw `
    //         prefixedKey: ${props.prefixedKey}
    //         encodedKey: ${checkBinKey}
    //     `
    // }
    // const checkBinVal = e.sqlColumnEntryToLeafEntryPrefixedVal(columnEntry)
    // if(checkBinVal.equals(props.prefixedVal) === false) {
    //     console.log('prefixedVal', props.prefixedVal)
    //     console.log('encodedVal', checkBinVal)
    //     throw `
    //         prefixedVal: ${props.prefixedVal}
    //         encodedVal: ${checkBinVal}
    //     `
    // }

    return columnEntry
}



function kvmhToSqlIndexEntry(
    props: immu.KVMH
): immu.SqlIndexEntry {

    const decodedKey = e.binEntryPrefixedKeyToSqlIndexEntryPart(props.prefixedKey)
    const decodedVal = e.binEntryPrefixedValToSqlIndexEntryPart(props.prefixedVal)

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




function kvmhToSqlTableEntry(
    props: immu.KVMH
): immu.SqlTableEntry {

    const decodedKey = e.binEntryPrefixedKeyToSqlTableEntryPart(props.prefixedKey)
    const decodedVal = e.binEntryPrefixedValToSqlTableEntryName(props.prefixedVal)

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





function kvmhToSqlDbEntry(
    props: immu.KVMH
): immu.SqlDbEntry {

    const decodedKey = e.binEntryPrefixedKeyToSqlDbEntryPart(props.prefixedKey)
    const decodedVal = e.binEntryPrefixedValToSqlDbEntryName(props.prefixedVal)

    return {
        type:       'sql',
        version:    '1',
        sqlType:    'db',
        meta:       props.meta,
        dbId:       decodedKey.dbId,
        dbName:     decodedVal,
    }
}

