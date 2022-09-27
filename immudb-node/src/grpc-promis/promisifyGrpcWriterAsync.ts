import * as grpcjs from '@grpc/grpc-js'
import * as common from '../common/index.js'
import * as stream from 'node:stream'
import { grpcWriteToEnd } from './grpcWriteToEnd.js'



export function promisifyGrpcWriterAsync<TRequest, TResponse>(
    callFunction: (
        metadata:   grpcjs.Metadata, 
        options:    grpcjs.CallOptions, 
        callback:   (err: grpcjs.ServiceError | null, res?: TResponse) => void
    ) => grpcjs.ClientWritableStream<TRequest>
) {

    
    return async function grpcWriterAsync(props: {
        request:                AsyncIterable<TRequest>,
        credentials?:           grpcjs.CallCredentials,
        requestMetadata?:       grpcjs.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {

        if(props.cancelSignal?.aborted === true) {
            throw new common.OperationCanceledError(
                'Operation cancelled by client before started.'
            )
        }


        let resolveResult: (props: {res?: TResponse, info: any[]}) => void
        let rejectResult: (err?: any) => void
        const result = new Promise((
            resolve: (props: {res?: TResponse, info: any[]}) => void, 
            reject: (err?: any) => void
        ) => {
            resolveResult = resolve
            rejectResult = reject
        })


        const writeStream = callFunction(
            props.requestMetadata ?? new grpcjs.Metadata(),
            {
                deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                credentials:    props.credentials,
            },
            (err, res) => {
                if(err) {
                    rejectResult({err, info})
                }
                else {
                    resolveResult({res, info})
                }
            }
        )
        

        if(props.cancelSignal) {
            stream.addAbortSignal(props.cancelSignal, writeStream)
        }


        const info: any[] = []
        writeStream.addListener('metadata', (metadata) => info.push(metadata))
        writeStream.addListener('status',   (status) => info.push(status))

        writeStream.addListener('drain',    () => info.push('write stream drain'))
        writeStream.addListener('pipe',     () => info.push('write stream pipe'))
        writeStream.addListener('unpipe',   () => info.push('write stream unpipe'))

        writeStream.addListener('finish',   () => info.push('write stream finish'))
        writeStream.addListener('close',    () => info.push('write stream closed'))

        
        writeStream.addListener('error', (err) => {
            info.push('stream error')
        })

        try {
            

            grpcWriteToEnd({
                chunks: props.request,
                grpcWriter: writeStream
            })
            
            await stream.promises.finished(writeStream as stream.Writable)
            return await result
        }
        catch (err) {
            throw {err, info}
        }
    }
    
}

