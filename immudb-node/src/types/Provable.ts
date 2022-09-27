import { Entry } from "./Entry.js"
import { TxEntry } from "./TxEntry.js"
import Long from "long"






/**
 * Structure represetning fundamental data which existance in ImmuDb can be
 * verified.
 *
 * Minimal required data is transaction id {@link Verifiable.id}, because it
 * uniqly identifies transaction {@link TxAnonymous}, which is an atom of
 * verification process.
 *
 * Common users would be also interested in:
 * - time of creation - {@link Verifiable.timestamp}
 * - some entries - {@link Verifiable.entries}.
 *
 * All filds could be verified.
 *
 * Verification process in all cases will verify all filds but entries. Entries
 * will be verified if specified and in this situation sometimes all entries
 * will be verified, even if not specified.
 */
 export type ProvableTx = {
    id:                 Long,
    timestamp?:         Long,
    prevTxHash?:        Buffer,
    prevTxesMht?:       Buffer,
    allEntriesMht?:     Buffer,
    allEntriesCount?:   number,
    entries?:           Entry[],
    txHash?:              Buffer,
}


/**
 * ImmuDb can prove what has been set in what transaction, this implies that any
 * number of transaction can be verified.
 *
 * As transaction ({@link Tx}) can contain entries (of type {@link Entry}), any
 * entry in context of transaction can be proved.
 *
 * As list of transaction also can be proved, whole database composed of entries
 * (of type {@link Entry}) within transactions can also be proved.
 */
export type Provable = ProvableTx | ProvableTx[] | TxEntry | TxEntry[]


