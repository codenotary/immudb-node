import * as grpcjs from '@grpc/grpc-js'







/**
 * Various immudb authorization headers
 */
export type ImmuGrpcMetadata = {
    /**
     * Client session token.
     */
    sessionid?:     string,
    /**
     * Immudb instance server token.
     */
    'immudb-uuid'?:    string,
    /**
     * User token? (which user is connected used database?)
     */
    authorization?:       string,
    /**
     * Client interactive transaction token
     */
    transactionid?: string,
}



/**
 * Creates {@link grpcjs.Metadata} object with provided {@link ImmuGrpcMetadata}
 * options specific to immudb.
 */
export function createImmuGrpcMetadata(
    props: ImmuGrpcMetadata
): grpcjs.Metadata {
    const meta = new grpcjs.Metadata()

    if(props.sessionid)         meta.add('sessionid',       props.sessionid)
    if(props['immudb-uuid'])    meta.add('immudb-uuid',     props['immudb-uuid'])
    if(props.authorization)     meta.add('authorization',   props.authorization)
    if(props.transactionid)     meta.add('transactionid',   props.transactionid)

    return meta
}



/**
 * Creates {@link grpcjs.CallCredentials} object with provided {@link ImmuGrpcMetadata}
 * options specific to immudb.
 */
export function createImmuGrpcCallCredentials(
    props: ImmuGrpcMetadata
): grpcjs.CallCredentials {
    return grpcjs.credentials.createFromMetadataGenerator(
        (_params, callback) => {
            callback(null, createImmuGrpcMetadata(props))
        }
    )
}
