import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import { kvmhToEntry } from './kvmh.js'













export function grpcZEntryToZSetEntryAndValTxEntryAndRefTxEntry(
    entry: igrpc.ZEntry__Output
): {
    zSetEntry: immu.ZSetEntry,
    valTxEntry: immu.ValTxEntry,
    refTxEntry?: immu.RefTxEntry,
} {
    
    if(entry.entry == undefined) {
        throw 'ZEntry__Output["entry"]: Entry__Output must be defined'
    }
    if(typeof entry.score !== 'number') {
        throw 'score must be number'
    }

    const zSetEntry: immu.ZSetEntry = {
        type:               'zSet',
        version:            '1',
        zSet:               entry.set,
        referredKeyScore:   entry.score,
        referredAtTxId:     entry.atTx,
        referredKey:        entry.key,
    }

    return {
        zSetEntry,
        ...grpcEntryToValTxEntryAndRefTxEntry(entry.entry),
    }
}




export function grpcTxEntryToTxEntry(
    tx: igrpc.Tx__Output,
    grpcEntry: igrpc.TxEntry__Output
): immu.TxEntry {

    if(tx.header == undefined) {
        throw 'transaction must be defined'
    }

    const entry = grpcTxEntryToEntry(grpcEntry)
    const foundableEntry: immu.TxEntry = {
        ...entry,
        id: tx.header.id,
    }
    return foundableEntry
}




export function grpcTxEntryToEntry(
    grpcEntry: igrpc.TxEntry__Output
): immu.Entry {

    

    return kvmhToEntry({
        prefixedKey:    grpcEntry.key,
        prefixedVal:    grpcEntry.value,
        meta:           grpcMetaToEntryMeta(grpcEntry.metadata),
        valHash:        grpcEntry.hValue,
    })
}







export function grpcEntryToValTxEntryAndRefTxEntry(
    entry: igrpc.Entry__Output
): {
    valTxEntry:   immu.ValTxEntry & immu.IndexerInfo, 
    refTxEntry?:  immu.RefTxEntry & immu.IndexerInfo,
} {

    
    const valTxEntry: immu.ValTxEntry & immu.IndexerInfo = {
        type:       'val',
        version:    '1',
        key:        entry.key,
        val:        entry.value,
        meta:       grpcMetaToEntryMeta(entry.metadata),
        expired:    entry.expired,
        revision:   entry.revision,
        id:         entry.tx,
    }


    if(entry.referencedBy == undefined) { // value entry
        return {valTxEntry}

    }
    
    const refTxEntry: immu.RefTxEntry & immu.IndexerInfo = {
        type:           'ref',
        version:        '1',
        key:            entry.referencedBy.key,
        referredKey:    entry.key,
        referredAtTxId: entry.referencedBy.atTx,
        meta:           grpcMetaToEntryMeta(entry.referencedBy.metadata),
        revision:       entry.referencedBy.revision,
        id:             entry.referencedBy.tx,
    }

    return {valTxEntry, refTxEntry}
}


export function grpcMetaToEntryMeta(
    props?: igrpc.KVMetadata__Output | null
): immu.EntryMetadata | undefined {
    if(props == null) {
        return undefined
    }
    return {
        deleted: props.deleted,
        nonIndexable: props.nonIndexable,
        expiresAt: props.expiration === null
            ? undefined
            : props.expiration.expiresAt
    }
}