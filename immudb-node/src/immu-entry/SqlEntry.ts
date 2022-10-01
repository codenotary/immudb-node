import type * as immu from '../types/index.js'
import { 
    binEntryToSqlColumnEntry, 
    isBinEntryKeySqlColumnEntryPart, 
    sqlColumnEntryToBinEntry,
    sqlColumnEntryToLeafEntryPrefixedKey
} from './SqlColumnEntry.js'
import { 
    binEntryToSqlDbEntry, 
    isBinEntryKeySqlDbEntryPart, 
    sqlDbEntryToBinEntry,
    sqlDbEntryToLeafEntryPrefixedKey
} from './SqlDbEntry.js'
import { 
    binEntryToSqlIndexEntry, 
    isBinEntryKeySqlIndexEntryPart, 
    sqlIndexEntryToBinEntry,
    sqlIndexEntryToLeafEntryPrefixedKey
} from './SqlIndexEntry.js'
import { 
    binEntryToSqlRowEntry, 
    isBinEntryKeySqlRowEntryPart, 
    sqlRowEntryToLeafEntryPrefixedKey, 
    sqlRowEntryToSqlBinEntry
} from './SqlRowEntry.js'
import { 
    binEntryToSqlTableEntry, 
    isBinEntryKeySqlTableEntryPart, 
    sqlTableEntryToBinEntry,
    sqlTableEntryToLeafEntryPrefixedKey
} from './SqlTableEntry.js'












export function binEntryToSqlEntryType(
    props: immu.BinEntry
): immu.SqlEntry['sqlType'] | 'bin' {

    if(isBinEntryKeySqlRowEntryPart(props.prefixedKey)) {
        return 'row'
    }

    if(isBinEntryKeySqlColumnEntryPart(props.prefixedKey)) {
        return 'column'
    }

    if(isBinEntryKeySqlIndexEntryPart(props.prefixedKey)) {
        return 'index'
    }

    if(isBinEntryKeySqlTableEntryPart(props.prefixedKey)) {
        return 'table'
    }

    if(isBinEntryKeySqlDbEntryPart(props.prefixedKey)) {
        return 'db'
    }

    return 'bin'
}











export function binEntryToSqlEntry(
    props: immu.BinEntry
): immu.SqlEntry | immu.BinEntry {

    switch(binEntryToSqlEntryType(props)) {
        case 'bin':     return props
        case 'row':     return binEntryToSqlRowEntry(props)
        case 'column':  return binEntryToSqlColumnEntry(props)
        case 'index':   return binEntryToSqlIndexEntry(props)
        case 'table':   return binEntryToSqlTableEntry(props)
        case 'db':      return binEntryToSqlDbEntry(props)
    }
}



export function sqlEntryToBinEntry(
    props: immu.SqlEntry
): immu.BinEntry {

    switch(props.sqlType) {
        case 'row':     return sqlRowEntryToSqlBinEntry(props)
        case 'column':  return sqlColumnEntryToBinEntry(props)
        case 'index':   return sqlIndexEntryToBinEntry(props)
        case 'table':   return sqlTableEntryToBinEntry(props)
        case 'db':      return sqlDbEntryToBinEntry(props)
    }
}


export function sqlEntryToLeafEntryPrefixedKey(
    props: immu.SqlEntry
): Buffer {

    switch(props.sqlType) {
        case 'row':     return sqlRowEntryToLeafEntryPrefixedKey(props)
        case 'column':  return sqlColumnEntryToLeafEntryPrefixedKey(props)
        case 'index':   return sqlIndexEntryToLeafEntryPrefixedKey(props)
        case 'table':   return sqlTableEntryToLeafEntryPrefixedKey(props)
        case 'db':      return sqlDbEntryToLeafEntryPrefixedKey(props)
    }
}