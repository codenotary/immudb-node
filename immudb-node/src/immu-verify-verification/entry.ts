import type * as immu from '../types/index.js'
import * as hash from '../immu-hash/index.js'
import * as prove from '../immu-rfc6962/index.js'
import Long from 'long'


export function verifyEntries(props: immu.VerificationEntries): true {
    switch(props.type) {
        case 'all-of': return verifyEntriesAllOf(props)
        case 'one-of': return verifyEntriesOneOf(props)
    }
}


export function verifyEntriesOneOf(props: immu.VerificationEntriesOneOf): true {
    const leaf = hash.ofBuffers(hash.PrefixMhtLeaf, hash.hashOfEntry(props.entry))
    const mht = prove.rootFromInclusionProof({
        leaf,
        leafId:                 Long.fromInt(props.entryId, true),
        lastLeafId:             Long.fromInt(props.allEntriesCount, true),
        inclusionProofNodes:    props.entryInclusionProof,
    })

    if(mht.equals(props.allEntriesMht) === false) {
        throw 'computed mht differs from entriesMht'
    }

    return true
}



export function verifyEntriesAllOf(props: immu.VerificationEntriesAllOf): true {
    const hashes = props.allEntries.map(hash.hashOfEntry)

    const mht = new prove.MemoryMht(hashes).getRoot()

    if(mht.equals(props.allEntriesMht) === false) {
        throw 'computed mht differs from entriesMht'
    }

    return true
}