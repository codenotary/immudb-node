import * as grpcjs from '@grpc/grpc-js'
import * as common from '../common/index.js'
import { grpcWriteToEnd } from './grpcWriteToEnd.js'



export function promisifyGrpcWriter<TRequest, TResponse>(
    callFunction: (
        metadata:   grpcjs.Metadata, 
        options:    grpcjs.CallOptions, 
        callback:   (err: grpcjs.ServiceError | null, res?: TResponse) => void
    ) => grpcjs.ClientWritableStream<TRequest>
) {

    
    return function grpcWriter(props: {
        request:                AsyncIterable<TRequest>,
        credentials?:           grpcjs.CallCredentials,
        requestMetadata?:       grpcjs.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {

        return new Promise<{res?: TResponse, info?: any[]}>((resolve, reject) => {

            if(props.cancelSignal?.aborted === true) {
                reject(new common.OperationCanceledError(
                    'Operation cancelled by client before started.'
                ))
            }


            const info: any[] = []


            const writeStream = callFunction(
                props.requestMetadata ?? new grpcjs.Metadata(),
                {
                    deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                    credentials:    props.credentials,
                },
                (err, res) => {
                    if(err) {
                        reject({
                            err: new common.InternalError(err),
                            info
                        })
                    }

                    resolve({res, info})
                }
            )


            writeStream.addListener('metadata', (metadata) => info.push(metadata))
            writeStream.addListener('status',   (status) => info.push(status))
            
            writeStream.addListener('drain',    () => info.push('stream drain'))
            writeStream.addListener('pipe',     () => info.push('stream pipe'))
            writeStream.addListener('unpipe',   () => info.push('stream unpipe'))

            writeStream.addListener('close',    () => info.push('stream closed'))
            writeStream.addListener('finish',   () => info.push('stream finish'))


            writeStream.addListener('error', (err) => {
                info.push('stream error')
                reject({err, info})
            })


            grpcWriteToEnd({
                chunks: props.request,
                grpcWriter: writeStream
            })
            .catch(err => reject({err, info}))
            
        })
    }
}




