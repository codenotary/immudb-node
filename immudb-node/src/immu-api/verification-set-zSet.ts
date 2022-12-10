import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import * as igp from '../immu-grpc-precond/index.js'
import * as ver from '../immu-grpc-verification/index.js'
import * as ike from '../immu-kvm-entry/index.js'
import Long from 'long'
import { SetZSetEntryProps } from './set-z-entry.js'
import { ProofRequestProps } from './verification-set-val.js'





export function createSetZSetEntryGetVerification(client: igrpc.ImmuServiceClient) {
    const grpcSetZSetAndGetVerification = immuGrpc.unaryCall.createVerifiableZAdd(client)

    /**
     * Sets key-value pair(s) for given session defined in credentials
     */
    return function setZSetEntryGetVerification(props: SetZSetEntryProps & ProofRequestProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        

        return grpcSetZSetAndGetVerification({
            request: {
                zAddRequest: {
                    set:        props.zSet,
                    key:        props.referredKey,
                    score:      props.referredKeyScore,
                    atTx:       props.referredKeyAtTxId,
                    noWait:     props.options?.dontWaitForIndexer,
                    boundRef:   props.boundReferredKeyAtTxId,
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
            



            const zSetEntry: immu.ZSetEntry = {
                type: 'zSet',
                version: '1',
                zSet: props.zSet,
                referredKey: props.referredKey,
                referredKeyScore: props.referredKeyScore,
                referredAtTxId: props.referredKeyAtTxId ?? Long.UZERO
            }
            const verificationEntries: immu.VerificationEntriesAllOf = {
                type:           'all-of',
                allEntries:     [zSetEntry],
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
                zSetEntry,
            }
        })
    }
}



