import { Buffer } from 'node:buffer'
import Long from 'long'


export type ImmuState = {
    databaseName: string,
    lastTransactionId: Long,
    lastTransactionHash: Buffer,
    instanceSignature: Buffer
}