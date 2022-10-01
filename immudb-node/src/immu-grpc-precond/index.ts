import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'



export function precondToGrpcPrecond(
    props: immu.ValOrRefKeyPrecondition
): igrpc.Precondition {

    switch (props.type) {
        case 'key-must-exist': return {
            precondition: 'keyMustExist',
            keyMustExist: {
                key: props.key
            }
        }
        case 'key-must-not-exist': return {
            precondition: 'keyMustNotExist',
            keyMustNotExist: {
                key: props.key
            }
        }
        case 'key-must-not-be-modified': return {
            precondition: 'keyNotModifiedAfterTX',
            keyNotModifiedAfterTX: {
                key: props.key,
                txID: props.txId,
            }
        }
    } 

}