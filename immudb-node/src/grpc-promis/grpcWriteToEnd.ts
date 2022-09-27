import * as grpcjs from '@grpc/grpc-js'
import {once} from 'node:events'


export async function grpcWriteToEnd<T>(props: {
    chunks:     AsyncIterable<T>
    grpcWriter: grpcjs.ClientWritableStream<T>
}) {

    for await (const chunk of props.chunks) {
        if(!props.grpcWriter.write(chunk)) {
            // backpressure, now we stop and we need to wait for drain
            await once(props.grpcWriter, 'drain')
            // ok now it's safe to resume writing
        }
    }
    props.grpcWriter.end()
}