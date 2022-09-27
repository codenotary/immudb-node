import type * as igrpc from 'immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as ver from '../immu-grpc-verification/index.js'
import * as ike from '../immu-kvm-entry/index.js'
import Long from 'long'
import { SetRefEntryProps } from './set-ref-entry.js'
import { ProofRequestProps } from './verification-set-val.js'






export function createSetRefEntryGetVerification(client: igrpc.ImmuServiceClient) {
    const grpcSetRefAndGetVerification = immuGrpc.unaryCall.createVerifiableSetReference(client)

    /**
     * Sets key-value pair(s) for given session defined in credentials
     */
    return function setRefEntryGetVerification(props: SetRefEntryProps & ProofRequestProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        

        return grpcSetRefAndGetVerification({
            request: {
                referenceRequest: {
                    referencedKey:  props.referToKey,
                    key:            props.key,
                    atTx:           props.keyTxId,
                    boundRef:       props.boundRef,
                    preconditions:  props.preconditions?.map(
                        igp.precondToGrpcPrecond
                    ),
                    
                    noWait:         props.options?.dontWaitForIndexer,
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
            



            const refEntry: immu.RefEntry = {
                type:           'ref',
                version:        '1',
                key:            props.key,
                referredKey:    props.referToKey,
                referredAtTxId: props.keyTxId ?? Long.UZERO
            }
            const verificationEntries: immu.VerificationEntriesAllOf = {
                type:           'all-of',
                allEntries:     [refEntry],
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
                verification,
                refEntry,
            }
        })
    }
}



