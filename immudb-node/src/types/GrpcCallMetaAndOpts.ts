import type * as grpcjs from '@grpc/grpc-js'


/**
 * Grpc call metadata and options.
 */
export type GrpcCallMetaAndOpts = {
    /**
     * Grpc call metadata (request headers).
     */
    metadata?: grpcjs.Metadata,
    /**
     * Grpc call options, includes: 
     * - {@link grpcjs.CallOptions.deadline}  (call timeout), 
     * - {@link grpcjs.CallOptions.credentials} (not interceptable request headers), 
     * - and few other options.
     */
    options?: grpcjs.CallOptions,
}
