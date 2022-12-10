import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import Long from 'long'
import * as ver from '../immu-grpc-verification/index.js'
import * as igs from '../immu-grpc-sql/index.js'



export type GetSqlRowEntryAndVerificationProps = {
    /** 
     * SqlRowEntry primary key
     */
    pk:             immu.SqlValue[],
    refTxId:        Long,
    refHash:        Buffer,
    dbTxesWindow?: {
        startId?:   Long,
        endId?:     Long,
    },
}


export function createGetSqlRowEntryAndVerification(client: igrpc.ImmuServiceClient) {
    const verifiableSqlGetGrpc = immuGrpc.unaryCall.createVerifiableSqlGet(client)

    /**
     * 
     */
    return function getSqlRowEntryAndVerification(props: GetSqlRowEntryAndVerificationProps & {
        credentials: grpcjs.CallCredentials,
    }) {



        return verifiableSqlGetGrpc({
            request: { 
                sqlGetRequest: {
                    atTx: props.dbTxesWindow?.endId,
                    sinceTx: props.dbTxesWindow?.startId,
                    pkValues: props.pk.map(igs.sqlValueToGrpcSqlValue)
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
        .then(grpcVerSql => {

            

            const grpcVerTx = grpcVerSql.verifiableTx
            if(grpcVerTx == undefined) {
                throw 'verifiableTx must be defined'
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



