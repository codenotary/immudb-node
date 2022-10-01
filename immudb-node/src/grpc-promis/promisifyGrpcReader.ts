import * as grpc from '@grpc/grpc-js'
import * as common from '../common/index.js'
import * as stream from 'node:stream'




export function promisifyGrpcReader<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {

    
    return function grpcReaderCall(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {

        return new Promise<{response: TResponse[], info?: any[]}>((resolve, reject) => {
    
            if(props.cancelSignal?.aborted === true) {
                return reject(new common.OperationCanceledError(
                    'Operation cancelled by client before started.'
                ))
            }


            const call = callFunction(
                props.request,
                props.requestMetadata ?? new grpc.Metadata(),
                {
                    deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                    credentials:    props.credentials ? props.credentials : undefined,
                },
            )


            const context: Context<TResponse> = { 
                data: [],
                info: [],
                call,
                resolve,
                reject,
                cleanup,
            }
            
            const handleResponseMetadata    = createHandleResponseMetadata(context)
            const handleResponseStatus      = createHandleResponseStatus(context)
            const handleResponseData        = createHandleResponseData(context)
            const handleAbortSignal         = createHandleAbortSignal(context)
            const handleResponseError       = createHandleResponseError(context)
            const handleResponseEnd         = createHandleResponseEnd(context)


            call.addListener('error',       handleResponseError)
            call.addListener('metadata',    handleResponseMetadata)
            call.addListener('data',        handleResponseData)
            call.addListener('status',      handleResponseStatus)
            call.addListener('end',         handleResponseEnd)
            props.cancelSignal?.addEventListener('abort', handleAbortSignal)


            function cleanup() {
                props.cancelSignal?.removeEventListener('abort', handleAbortSignal)
                call.removeListener('error',    handleResponseError)
                call.removeListener('end',      handleResponseEnd)
                call.removeListener('status',   handleResponseStatus)
                call.removeListener('data',     handleResponseData)
                call.removeListener('metadata', handleResponseMetadata)
            }
    
        })
    }
    
}




type Context<TResponse> = {
    info:               any[],
    data:               TResponse[],
    call:               grpc.ClientReadableStream<TResponse>,
    cleanup:            () => void,
    reject:             (reason?: any) => void,
    resolve:            (value: {response: TResponse[], info?: any[]}) => void,
}


function createHandleResponseData<TResponse>(
    context: Context<TResponse>
) {
    return function handleResponseData(chunk: TResponse) {
        context.data.push(chunk)
    }
}


function createHandleResponseMetadata<TResponse>(
    context: Context<TResponse>
) {
    return function handleResponseMetadata(metadata: grpc.Metadata) {
        context.info.push(metadata)
    }
}


function createHandleResponseStatus<TResponse>(
    context:    Context<TResponse>
) {
    return function handleResponseStatus(status: grpc.StatusObject) {
        context.info.push(status)
    }
}


function createHandleResponseEnd<TResponse>(context: Context<TResponse>) {
    return function handleResponseEnd() {
        context.info.push('stream end event')
        context.cleanup()
        context.resolve({ 
            response: context.data, 
            info: context.info, 
        })
    }
}


function createHandleResponseError<TResponse>(context: Context<TResponse>) {
    return function handleResponseError(err: any) {
        context.info.push('stream error event')
        context.cleanup()
        context.reject(new common.InternalError(err, context.info))
    }
}


function createHandleAbortSignal<TResponse>(context: Context<TResponse>) {
    return function handleCallAbort(this: AbortSignal, ev: Event) {
        context.info.push('abort signal event')
        context.cleanup()
        context.call.cancel()

        return context.reject(new common.OperationCanceledError(
            'Operation canceled by client. Call was canceled',
            context.info
        ))
    }
}