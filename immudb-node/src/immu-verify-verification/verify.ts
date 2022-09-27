import type * as immu from '../types/index.js'
import { verifyEntries } from './entry.js'
import { verifyTx } from './tx.js'




export function verifyVerification(props: immu.Verification): true {
    if(props.entries.allEntriesMht.equals(props.tx.tx.allEntriesMht) === false) {
        throw 'allEntriesMht in entries and tx verification not match'
    }

    verifyEntries(props.entries)
    verifyTx(props.tx)

    return true
}