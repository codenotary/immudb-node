import Long from "long";
import { Entry } from "./Entry.js";




/** 
 * Logical transaction with omitted filds connected to verification,
 * composed from {@link TxCore} and {@link Entry}
 */
 export type Transaction = {
    id:         Long,
    timestamp:  Long,
    entries:    Entry[],
}


