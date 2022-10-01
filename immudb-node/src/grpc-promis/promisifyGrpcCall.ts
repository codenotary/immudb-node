import {promisify} from 'node:util'
import * as grpcjs from '@grpc/grpc-js'
import * as common from '../common/index.js'
import type { GrpcCallMetaAndOpts } from '../types/GrpcCallMetaAndOpts.js'



export function basicPromisifyGrpcCall<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpcjs.Metadata, 
        options:    grpcjs.CallOptions, 
        callback:   grpcjs.requestCallback<TResponse>
    ) => grpcjs.Call,
    // callObject: unknown
) {
    const callPromise = promisify<
        TRequest,
        grpcjs.Metadata,
        grpcjs.CallOptions,
        TResponse | undefined
    >(callFunction)

    return callPromise//.bind(callObject)
}


export function promisifyGrpcCall<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpcjs.Metadata, 
        options:    grpcjs.CallOptions, 
        callback:   grpcjs.requestCallback<TResponse>
    ) => grpcjs.Call,
    // callObject?: unknown
) {
    // if(callObject !== undefined) {
    //     callMethod = callMethod.bind(callObject)
    // }

    return (props: GrpcCallMetaAndOpts & {
        request:    TRequest
    }) => new Promise<TResponse | undefined>((resolve, reject) => {
        callFunction(
            props.request,
            props.metadata ?? new grpcjs.Metadata(),
            props.options ?? {},
            (err, res) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(res)
                }
            }
        )
    })
}





export function fullPromisifyGrpcCall<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpcjs.Metadata, 
        options:    grpcjs.CallOptions, 
        callback:   grpcjs.requestCallback<TResponse>
    ) => grpcjs.Call
) {

    
    return function (props: {
        request:                TRequest,
        credentials?:           grpcjs.CallCredentials,
        requestMetadata?:       grpcjs.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {


        return new Promise<{response?: TResponse, info: any[]}>((resolve, reject) => {
    
            if(props.cancelSignal?.aborted === true) {
                return reject(
                    new common.OperationCanceledError(
                        'Operation cancelled by client before started.'
                    )
                )
            }

            const info: any[] = []
    
            const call = callFunction(
                props.request,
                props.requestMetadata ?? new grpcjs.Metadata(),
                {
                    deadline: common.unixTimeNowAfterMS(props.operationTimeoutMS),
                    credentials: props.credentials,
                },
                (err, response) => {
                    removeListeners()
                    if(err) {
                        reject({err, info})
                    }
                    resolve({response, info})
                }
            )

            function handleClose() {
                info.push('close')
            }
            call.addListener('close', handleClose)

            function handleData(data: any) {
                info.push('data:', data)
            }
            call.addListener('data', handleData)

            function handleDrain() {
                info.push('drain')
            }
            call.addListener('drain', handleDrain)

            function handleEnd() {
                info.push('end')
            }
            call.addListener('end', handleEnd)

            function handleFinish() {
                info.push('finish')
            }
            call.addListener('finish', handleFinish)

            function handlePause() {
                info.push('pause')
            }
            call.addListener('pause', handlePause)

            function handleReadable() {
                info.push('readable')
            }
            call.addListener('readable', handleReadable)

            function handleResume() {
                info.push('resume')
            }
            call.addListener('resume', handleResume)





            function handleMetadata(metadata: grpcjs.Metadata) {
                info.push(metadata)
            }
            call.addListener('metadata', handleMetadata)

            function handleResponseStatus(status: grpcjs.StatusObject) {
                info.push(status)
            }
            call.addListener('status', handleResponseStatus)

            function handleCallAbort(this: AbortSignal, ev: Event) {
                call.cancel()
                removeListeners()
                return reject(
                    new common.OperationCanceledError(
                        'Operation canceled by client. Call was canceled',
                        info
                    )
                )
            }
            props.cancelSignal?.addEventListener('abort', handleCallAbort, { once: true })

            


            function removeListeners() {
                props.cancelSignal
                ?.removeEventListener('abort',  handleCallAbort)
                call.removeListener('metadata', handleMetadata)
                call.removeListener('status',   handleResponseStatus)

                call.removeListener('close',    handleClose)
                call.removeListener('data',     handleData)
                call.removeListener('drain',    handleDrain)
                call.removeListener('end',      handleEnd)
                call.removeListener('finish',   handleFinish)
                call.removeListener('pause',    handlePause)
                call.removeListener('readable', handleReadable)
                call.removeListener('resume',   handleResume)
            }

        })
    }
    
}
