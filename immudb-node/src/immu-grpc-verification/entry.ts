import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as ige from '../immu-grpc-entry/index.js'
import * as ike from '../immu-kvm-entry/index.js'






export function kvmsToVerificationEntries(props: {
    kvms:  immu.KeyValMeta[],
    allEntriesMht: Buffer,
}): immu.VerificationEntriesAllOf {

    const entries = props.kvms.map(ike.kvmToValEntry)
    const verificationEntries: immu.VerificationEntriesAllOf = {
        type:           'all-of',
        allEntries:     entries,
        allEntriesMht:  props.allEntriesMht,
    }
    return verificationEntries

}


export function grpcTxEntriesToVerificationEntries(props: {
    txEntries:  igrpc.TxEntry__Output[],
    allEntriesMht: Buffer,
}): immu.VerificationEntriesAllOf {

    const entries: immu.Entry[] = props.txEntries.map(ige.grpcTxEntryToEntry)
    const verificationEntries: immu.VerificationEntriesAllOf = {
        type:           'all-of',
        allEntries:     entries,
        allEntriesMht:  props.allEntriesMht,
    }
    return verificationEntries

}