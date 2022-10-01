import type * as immu from '../types/index.js'
import { hashOfHashEntry } from './hashEntry.js'
import { hashOfBinEntry } from './binEntry.js'
import { hashOfValEntry } from './valEntry.js'
import { hashOfRefEntry } from './refEntry.js'
import { hashOfZSetEntry } from './zSetEntry.js'
import { 
    hashOfSqlColumnEntry, 
    hashOfSqlDbEntry, 
    hashOfSqlIndexEntry, 
    hashOfSqlRowEntry, 
    hashOfSqlTableEntry 
} from './sqlEntry.js'




export function hashOfEntry(entry: immu.Entry): Buffer {
    switch(entry.type) {
        case 'val':     return hashOfValEntry(entry)
        case 'ref':     return hashOfRefEntry(entry)
        case 'zSet':    return hashOfZSetEntry(entry)
        case 'hash':    return hashOfHashEntry(entry)
        case 'bin':     return hashOfBinEntry(entry)
        case 'sql': 
            switch(entry.sqlType) {
                case 'row':     return hashOfSqlRowEntry(entry)
                case 'column':  return hashOfSqlColumnEntry(entry)
                case 'index':   return hashOfSqlIndexEntry(entry)
                case 'table':   return hashOfSqlTableEntry(entry)
                case 'db':      return hashOfSqlDbEntry(entry)
            }
    }   
}