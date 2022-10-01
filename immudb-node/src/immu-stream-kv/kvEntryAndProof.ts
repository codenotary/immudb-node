import { Buffer } from 'node:buffer'
import * as pbImmu from 'immudb-node-pbjs'
// import * as _pbImmu from '../pb/immu.js'
// import pbImmu = _pbImmu.immudb.schema

/**
 * Deserializes key-value from list of buffers heaving
 * following structure:
 * - entry length - UInt64BE
 * - entry
 * - verifableTx length - UInt64BE
 * - verifableTx
 * - inclusionProof length - UInt64BE
 * - inclusionProof
 * - val/key length - UInt64BE
 * - val/key
 */
 export function toKVEntryAndProof(props: Buffer[]) {
    const everything = Buffer.concat(props)
    if (everything.byteLength < 4*8) {
        throw 'buffers are too small for KV and Proof'
    }

    const entryLength = everything.readUInt32BE(4)
    const entry = everything.subarray(
        8, 
        8 + entryLength
    )
    const verifableTxLength = everything.readUInt32BE(
        8 + entryLength + 4
    )
    const verifiableTx = everything.subarray(
        8 + entryLength + 8, 
        8 + entryLength + 8 + verifableTxLength
    )
    const inclusionProofLength = everything.readUInt32BE(
        8 + entryLength + 8 + verifableTxLength + 4
    )
    const inclusionProof = everything.subarray(
        8 + entryLength + 8 + verifableTxLength + 8, 
        8 + entryLength + 8 + verifableTxLength + 8 + inclusionProofLength
    )
    const valLength = everything.readUInt32BE(
        8 + entryLength + 8 + verifableTxLength + 8 + inclusionProofLength + 4
    )
    const val = everything.subarray(
        8 + entryLength + 8 + verifableTxLength + 8 + inclusionProofLength + 8, 
        8 + entryLength + 8 + verifableTxLength + 8 + inclusionProofLength + 8 + valLength
    )

    if (
        everything.byteLength 
        !== 
        8 + entryLength + 8 + verifableTxLength + 8 + inclusionProofLength + 8 + valLength
    ) {
        throw 'too much/litle data for KV and Proof'
    }

    const decodedEntry = pbImmu.immudb.schema.Entry.decode(entry)
    decodedEntry.value = val
    const decodedVerifiableTx = pbImmu.immudb.schema.VerifiableTx.decode(verifiableTx)
    const decodedInclusionProof = pbImmu.immudb.schema.InclusionProof.decode(inclusionProof)
    
    return {
        entry: decodedEntry,
        verifiableTx: decodedVerifiableTx,
        inclusionProof: decodedInclusionProof,
    }
}