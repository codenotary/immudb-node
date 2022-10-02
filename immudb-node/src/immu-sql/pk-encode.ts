import * as immu from '../types/index.js'
import * as buffer from '../buffer.js'
import Long from 'long'



export function encodeAsPK(
    sqlVals: (immu.SqlValTypeVal & {
        isNotNull: boolean
    })[]
) {
    return Buffer.concat(sqlVals.map(sqlValToPKBuffer))
}



export function sqlValToPKBuffer(
    data: immu.SqlValTypeVal & {
        isNotNull: boolean
    }
) {

    switch(data.type) {
        case 'BLOB': return Buffer.concat([
            Buffer.of(data.isNotNull ? 1 : 0),
            data.val,
            buffer.fromUInt32BE(data.val.byteLength),
        ])
        case 'BOOLEAN': return Buffer.concat([
            Buffer.of(data.isNotNull ? 1 : 0),
            Buffer.of(data.val ? 1 : 0),
        ])
        case 'INTEGER': {
            const intBytes = Buffer.from(data.val.toBytesBE())
            intBytes[0] ^= 0x80     // shift in place
            return Buffer.concat([
                Buffer.of(data.isNotNull ? 1 : 0),
                intBytes,
                buffer.fromUInt32BE(intBytes.byteLength),
            ])
        }
        case 'NULL': throw 'null not supported now'
        case 'TIMESTAMP': {
            const intBytes = Buffer.from(data.val.toBytesBE())
            intBytes[0] ^= 0x80     // shift in place
            return Buffer.concat([
                Buffer.of(data.isNotNull ? 1 : 0),
                intBytes,
                buffer.fromUInt32BE(intBytes.byteLength),
            ])
        }
        case 'VARCHAR': {
            const stringBytes = Buffer.from(data.val)
            return Buffer.concat([
                Buffer.of(data.isNotNull ? 1 : 0),
                stringBytes,
                buffer.fromUInt32BE(stringBytes.byteLength),
            ])
        }
    }
}


