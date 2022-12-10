import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import Long from 'long'



export function kvmToValTxEntry(
    kvm: immu.KeyValMeta,
    txId: Long
): immu.ValTxEntry {

    return {
        type:       'val',
        version:    '1',
        key:        kvm.key,
        val:        kvm.val,
        meta:       kvm.meta,
        id:         txId,
    }

}


export function kvmToValEntry(
    kvm: immu.KeyValMeta,
): immu.ValEntry {

    return {
        type:       'val',
        version:    '1',
        key:        kvm.key,
        val:        kvm.val,
        meta:       kvm.meta,
    }

}







export function kvmToGrpcKeyValue(
    props: immu.KeyValMeta
): igrpc.KeyValue {
    return {
        key:        props.key, 
        value:      props.val,
        metadata:   metaToGrpcKVMetadata(props.meta)
    }
}

function metaToGrpcKVMetadata(
    meta?: immu.EntryMetadata
): igrpc.KVMetadata | undefined {
    if(meta == undefined) {
        return undefined
    }

    return {
        deleted:        meta.deleted,
        nonIndexable:   meta.nonIndexable,
        expiration: meta.expiresAt == undefined ? undefined : {
            expiresAt:  meta.expiresAt,
        }
    }
}
