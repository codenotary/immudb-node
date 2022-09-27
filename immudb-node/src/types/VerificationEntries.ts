import { Entry } from "./Entry.js"
import Long from "long"





export type VerificationEntriesOneOf = {
    type:                   'one-of'
    allEntriesMht:          Buffer,
    entry:                  Entry,
    entryId:                number,
    allEntriesCount:        number,
    entryInclusionProof:    Buffer[]
}


export type VerificationEntriesAllOf = {
    type:           'all-of'
    allEntriesMht:  Buffer,
    allEntries:     Entry[],
}




/**
 * Verification structure for entry/entries. Structure must be in prefect
 * equilibrium to verify successfully.
 */
export type VerificationEntries = 
    | VerificationEntriesOneOf
    | VerificationEntriesAllOf


