import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import Long from 'long'
import * as ver from '../immu-grpc-verification/index.js'




export type GetTxAndVerificationProps = {
    txId:       Long,
    refTxId:    Long,
    refHash:    Buffer,
    dbTxesWindow?: {
        startId?: Long
    }
}


export function createGetTxAndVerification(client: igrpc.ImmuServiceClient) {
    const verifiableTxByIdGrpc = immuGrpc.unaryCall.createVerifiableTxById(client)

    /**
     * 
     */
    return function getTxAndVerification(props: GetTxAndVerificationProps & {
        credentials: grpcjs.CallCredentials,
    }) {



        return verifiableTxByIdGrpc({
            request: { 
                proveSinceTx:               props.refTxId,
                tx:                         props.txId,
                keepReferencesUnresolved:   true,
                sinceTx:                    props.dbTxesWindow?.startId,

                entriesSpec: {
                    kvEntriesSpec:  {action: 'RAW_VALUE'},
                    zEntriesSpec:   {action: 'RAW_VALUE'},
                    sqlEntriesSpec: {action: 'RAW_VALUE'},
                },
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



