import * as grpc from '@grpc/grpc-js'
import * as common from '../common/index.js'
import * as stream from 'node:stream'
import events from 'node:events'



export function promisifyGrpcReaderAsync<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {

    
    return async function* grpcReaderAsync(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {


        const grpcReader = callFunction(
            props.request,
            props.requestMetadata ?? new grpc.Metadata(),
            {
                deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                credentials:    props.credentials ? props.credentials : undefined,
            },
        )
        const info: any[] = []
        grpcReader.on('metadata', (metadata) => info.push('stream metadata', metadata))
        grpcReader.on('status', (status) => info.push('stream status', status))
        grpcReader.on('close', () => info.push('stream close'))
        grpcReader.on('pause', () => info.push('stream pause'))
        grpcReader.on('resume', () => info.push('stream resume'))


        const ac = new AbortController()
        grpcReader.once('end', () => {
            info.push('stream end')
            ac.abort({type: 'end'})
        })
        grpcReader.once('error', (err) => {
            info.push('stream error')
            ac.abort({type: 'err', err})
        })
        

        try {
            let chunk: TResponse
            for await (chunk of grpcReader) {
                info.push('stream chunk')
                yield chunk
            }
        }
        catch (err) {
            if(ac.signal.aborted) {
                switch (ac.signal.reason.type) {
                    case 'end': return info
                    case 'err': throw {err: ac.signal.reason.err, info}
                }
            }
            else {
                throw {err, info}
            }
        } 


        return info
    }

}









export function promisifyGrpcReaderAsyncOnData<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {

    
    return async function* grpcReaderAsync(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {


        const grpcReader = callFunction(
            props.request,
            props.requestMetadata ?? new grpc.Metadata(),
            {
                deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                credentials:    props.credentials ? props.credentials : undefined,
            },
        )

        const info: any[] = []
        grpcReader.on('metadata', (metadata) => info.push('stream metadata', metadata))
        grpcReader.on('status', (status) => info.push('stream status', status))
        grpcReader.on('close', () => info.push('stream close'))
        grpcReader.on('pause', () => info.push('stream pause'))
        grpcReader.on('resume', () => info.push('stream resume'))


        const ac = new AbortController()
        grpcReader.once('end', () => {
            info.push('stream end')
            ac.abort({type: 'end'})
        })
        grpcReader.once('error', (err) => {
            info.push('stream error')
            ac.abort({type: 'err', err})
        })
        

        try {
            let chunk: TResponse
            for await (chunk of events.on(grpcReader, 'data', { signal: ac.signal }) ) {
                info.push('stream data')
                yield chunk
            }
        }
        catch (err) {
            if(ac.signal.aborted) {
                switch (ac.signal.reason.type) {
                    case 'end': return info
                    case 'err': throw {err: ac.signal.reason.err, info}
                }
            }
            else {
                throw {err, info}
            }
        } 


        return info
    }

}






export function promisifyGrpcReaderAsyncOnReadable<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {

    
    return async function* grpcReaderAsync(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {

        const grpcReader = callFunction(
            props.request,
            props.requestMetadata ?? new grpc.Metadata(),
            {
                deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                credentials:    props.credentials ? props.credentials : undefined,
            },
        )


        const info: any[] = []
        grpcReader.on('metadata', (metadata) => info.push('stream metadata', metadata))
        grpcReader.on('status', (status) => info.push('stream status', status))
        grpcReader.on('close', () => info.push('stream close'))
        grpcReader.on('pause', () => info.push('stream pause'))
        grpcReader.on('resume', () => info.push('stream resume'))


        const ac = new AbortController()
        grpcReader.once('end', () => {
            info.push('stream end')
            ac.abort({type: 'end'})
        })
        grpcReader.once('error', (err) => {
            info.push('stream error')
            ac.abort({type: 'err', err})
        })
        

        try {
            let chunk: TResponse
            for await (const _ of events.on(grpcReader, 'readable', { signal: ac.signal })) {
                info.push('stream readable')
                while ((chunk = grpcReader.read()) != null) {
                    yield chunk
                }
            }
        }
        catch (err) {
            if(ac.signal.aborted) {
                switch (ac.signal.reason.type) {
                    case 'end': return
                    case 'err': throw ac.signal.reason.err
                }
            }
            else {
                throw err
            }
        } 
        

        return info
    }

}




export function simplePromisifyGrpcReaderOnReadable<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {
    return function simpleGrpcReaderOnReadable(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {
        return new Promise((resolve, reject) => {

            const grpcReader = callFunction(
                props.request,
                props.requestMetadata ?? new grpc.Metadata(),
                {
                    deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                    credentials:    props.credentials ? props.credentials : undefined,
                },
            )


            const info: any[] = []
            grpcReader.on('metadata', (metadata) => info.push('stream metadata:', metadata))
            grpcReader.on('status', (status) => info.push('stream status:', status))
            grpcReader.on('close', () => info.push('stream close:'))
            grpcReader.on('pause', () => info.push('stream pause:'))
            grpcReader.on('resume', () => info.push('stream resume:'))


            const chunks: TResponse[] = []
            // 'readable' handler (and no 'data' handler) so stream in paused mode
            grpcReader.on('readable', () => {
                info.push('stream readable')
                let chunk: TResponse
                while ((chunk = grpcReader.read()) != null) {
                    chunks.push(chunk)
                }
            })
            grpcReader.on('end', () => {
                info.push('stream end')
                resolve({response: chunks, info})
            })
            grpcReader.on('error', (err) => {
                info.push('stream error')
                reject({err, info})
            })
        })
    }
}

export function simplePromisifyGrpcReaderOnData<TRequest, TResponse>(
    callFunction: (
        request:    TRequest, 
        metadata:   grpc.Metadata, 
        options:    grpc.CallOptions, 
    ) => grpc.ClientReadableStream<TResponse>
) {
    return function simpleGrpcReaderOnData(props: {
        request:                TRequest,
        credentials?:           grpc.CallCredentials,
        requestMetadata?:       grpc.Metadata,
        operationTimeoutMS?:    number,
        cancelSignal?:          AbortSignal,
    }) {
        return new Promise((resolve, reject) => {

            const grpcReader = callFunction(
                props.request,
                props.requestMetadata ?? new grpc.Metadata(),
                {
                    deadline:       common.unixTimeNowAfterMS(props.operationTimeoutMS),
                    credentials:    props.credentials ? props.credentials : undefined,
                },
            )
            const info: any[] = []
            grpcReader.on('metadata', (metadata) => info.push('stream metadata:', metadata))
            grpcReader.on('status', (status) => info.push('stream status:', status))
            grpcReader.on('close', () => info.push('stream close:'))
            grpcReader.on('pause', () => info.push('stream pause:'))
            grpcReader.on('resume', () => info.push('stream resume:'))

            const chunks: TResponse[] = []
            // 'data' handler so stream in flowing mode
            grpcReader.on('data', (chunk) => {
                info.push('stream data')
                chunks.push(chunk)
            })
            grpcReader.on('end', () => {
                info.push('stream end')
                resolve({response: chunks, info})
            })
            grpcReader.on('error', (err) => {
                info.push('stream error')
                reject({err, info})
            })
        })
    }
}