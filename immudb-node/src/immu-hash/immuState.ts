import { ImmuState } from '../types/ImmuState.js'
import * as buffer from '../buffer.js'


export function hashOfImmuState(props: ImmuState): Buffer {

    return Buffer.concat([
        buffer.fromUInt16BE(props.databaseName.length),     // length of dbName
        Buffer.from(props.databaseName),                    // dbName
        Buffer.from(props.lastTransactionId.toBytesBE()),   // lastTransactionId
        props.lastTransactionHash                                      // immu hash
    ])
}