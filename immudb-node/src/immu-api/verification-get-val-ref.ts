import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import Long from 'long'
import * as ver from '../immu-grpc-verification/index.js'
import { grpcEntryToValTxEntryAndRefTxEntry } from '../immu-grpc-entry/index.js'




export type GetValRefAndVerificationProps = {
    refTxId:    Long,
    refHash:    Buffer,

    dbTxesWindow?: {
        startId?:   Long,
        endId?:     Long,
    },
    revisionId?:       Long,
    key: Buffer,
    /**
     * Operation options.
     */
    options?: {
        /**
         * Do not wait for immudb to update database indexes, setting this
         * value to `true` may cause operation to speed up in exchange for
         * stale database latest keys values.
         *
         * For example geting key value will return key value pointed by
         * indexer. If indexer is not up to date, returned value may be not
         * latest value.
         *
         * Default value is `false`.
         */
        dontWaitForIndexer?: boolean,
    }
}


export function createGetValRefAndVerification(client: igrpc.ImmuServiceClient) {
    const verifiableGetValRefGrpc = immuGrpc.unaryCall.createVerifiableGet(client)

    /**
     * 
     */
    return function getValRefAndVerification(props: GetValRefAndVerificationProps & {
        credentials: grpcjs.CallCredentials,
    }) {



        return verifiableGetValRefGrpc({
            request: { 
                keyRequest: {
                    atTx:       props.dbTxesWindow?.endId,
                    sinceTx:    props.dbTxesWindow?.startId,
                    atRevision: props.revisionId,
                    key:        props.key,
                    noWait:     props.options?.dontWaitForIndexer,
                },
                proveSinceTx:               props.refTxId,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('VerifiableTx__Output must be defined')
        )
        .then(grpcVerEntry => {

            

            const grpcVerTx = grpcVerEntry.verifiableTx
            if(grpcVerTx == undefined) {
                throw 'verifiableTx must be defined.'
            }

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




            const grpcEntry = grpcVerEntry.entry
            if(grpcEntry == undefined) {
                throw 'entry must be defined'
            }
            const valEntryAndMaybeRefEntry = grpcEntryToValTxEntryAndRefTxEntry(grpcEntry)


            // const grpcInclusionProof = grpcVerEntry.inclusionProof
            // if(grpcInclusionProof == undefined) {
            //     throw 'inclusionProof must be defined.'
            // }

            // const verificationOneOfEntries: immu.VerificationEntriesOneOf = {
            //     type:                   'one-of',
            //     allEntriesMht:          grpcTxHeader.eH,
            //     allEntriesCount:        grpcTxHeader.nentries,
            //     entryId:                grpcInclusionProof.leaf,
            //     entryInclusionProof:    grpcInclusionProof.terms,

            //     entry: valEntryAndMaybeRefEntry.refTxEntry == undefined
            //         ? valEntryAndMaybeRefEntry.valTxEntry
            //         : valEntryAndMaybeRefEntry.refTxEntry,
            // }
            




            const verificationEntries = ver.grpcTxEntriesToVerificationEntries({
                txEntries: grpcTx.entries,
                allEntriesMht: grpcTxHeader.eH,
            })


            const verificationTx: immu.VerificationTx = ver.grpcDualProofToVerificationTx({
                grpcProof:  grpcProof,
                grpcTx:     grpcTxHeader,
                refHash:    props.refHash,
                refTxId:    props.refTxId,
            })
            
        
            const verification: immu.Verification = {
                // entries:    verificationOneOfEntries,
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
                valEntry:   valEntryAndMaybeRefEntry.valTxEntry,
                refEntry:   valEntryAndMaybeRefEntry.refTxEntry,
                verification,
            }
        })
    }
}



