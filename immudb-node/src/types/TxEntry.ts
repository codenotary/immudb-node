import Long from "long"
import { 
    BinEntry, 
    HashEntry, 
    RefEntry, 
    SqlColumnEntry, 
    SqlDbEntry, 
    SqlIndexEntry, 
    SqlRowEntry, 
    SqlTableEntry, 
    ValEntry, 
    ZSetEntry 
} from "./Entry.js"

export type TxContext = {
    id:         Long,
    entryId?:   Long,
}


export type TxEntry = 
    | BinTxEntry
    | LeafTxEntry
    | ValTxEntry
    | RefTxEntry
    | ZSetTxEntry
    | SqlTxEntry


export type SqlTxEntry = 
    | SqlRowTxEntry
    | SqlColumnTxEntry
    | SqlIndexTxEntry
    | SqlTableTxEntry
    | SqlDbTxEntry



export type BinTxEntry  = TxContext & BinEntry
export type LeafTxEntry = TxContext & HashEntry
export type ValTxEntry  = TxContext & ValEntry
export type RefTxEntry  = TxContext & RefEntry
export type ZSetTxEntry = TxContext & ZSetEntry

export type SqlRowTxEntry       = TxContext & SqlRowEntry
export type SqlColumnTxEntry    = TxContext & SqlColumnEntry
export type SqlIndexTxEntry     = TxContext & SqlIndexEntry
export type SqlTableTxEntry     = TxContext & SqlTableEntry
export type SqlDbTxEntry        = TxContext & SqlDbEntry




