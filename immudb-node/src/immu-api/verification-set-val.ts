import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as ver from '../immu-grpc-verification/index.js'
import * as ike from '../immu-kvm-entry/index.js'
import Long from 'long'
import { SetValEntryProps } from './set-val-entry.js'


export type ProofRequestProps = {
    refTxId:    Long,
    refHash:    Buffer,
}



export function createSetValEntriesGetVerification(client: igrpc.ImmuServiceClient) {
    const setGrpc = immuGrpc.unaryCall.createVerifiableSet(client)

    /**
     * Sets key-value pair(s) for given session defined in credentials
     */
    return function setValEntriesGetVerification(props: SetValEntryProps & ProofRequestProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        

        return setGrpc({
            request: {
                setRequest: {
                    KVs:            props.kvms.map(ike.kvmToGrpcKeyValue),
                    noWait:         props.options?.dontWaitForIndexer,
                    preconditions:  props.preconditions?.map(
                        igp.precondToGrpcPrecond
                    ),
                },
                proveSinceTx: props.refTxId,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('VerifiableTx__Output must be defined')
        )
        .then(grpcVerTx => {

            const grpcTx = grpcVerTx.tx
            const grpcProof = grpcVerTx.dualProof

            if(grpcTx?.header == undefined) {
                throw 'transaction must be defined'
            }
            if(grpcProof?.sourceTxHeader == undefined) {
                throw 'sourceTxHeader must be defined'
            }
            if(grpcProof?.targetTxHeader == undefined) {
                throw 'targetTxHeader must be defined'
            }

            const grpcTxHeader = grpcTx.header
            


            // 
            const entries = props.kvms.map(kvm => ike.kvmToValTxEntry(kvm, grpcTxHeader.id))
            const verificationEntries: immu.VerificationEntriesAllOf = {
                type:           'all-of',
                allEntries:     entries,
                allEntriesMht:  grpcTxHeader.eH,
            }


            const verificationTx: immu.VerificationTx = ver.grpcDualProofToVerificationTx({
                grpcProof:  grpcProof,
                grpcTx:     grpcTxHeader,
                refHash:    props.refHash,
                refTxId:    props.refTxId,
            })
            
        
            const verification: immu.Verification = {
                entries:    verificationEntries,
                tx:         verificationTx
            }
        
        
            const transaction: immu.Transaction = {
                id:         verificationTx.tx.id,
                timestamp:  verificationTx.tx.timestamp,
                entries:    verificationEntries.allEntries,
            }
        
        
            return {
                transaction,
                verification
            }
        })
    }
}



