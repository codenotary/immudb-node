import * as pb from '@codenotary/immudb-node-pbjs'
import { fromKVEntry } from './kvEntry.js'
import Long from 'long'
import * as buffer from '../buffer.js'


export function fromExecEntryType(type: 'kv' | 'zAdd') {
    switch (type) {
        case 'kv': return 1 //1 << 0 // === 1
        case 'zAdd': return 2 // 1 << 1 // === 2
        // case 'ref': return 1 << 2 // === 4
    }
}


export function fromExecEntries(entries: ExecEntryRequest[]) {
    return entries.map(fromExecEntry)
}

export async function* fromExecEntriesGen(entries: ExecEntryRequest[]) {
    // console.log('fromExecEntriesGen')

    for(const entry of entries) {
        const entryBin = fromExecEntry(entry)
        console.log(entryBin)
        yield {
            content: entryBin
        }
    }
}


export type ZEntryRequest = {
    set:        Buffer,
    score:      number,
    key:        Buffer,
    atTx?:      Long,
    boundRef?:  boolean,
    noWait?:    boolean,
}

export type KVEntryRequest = {
    key: Buffer,
    val: Buffer,
}

export type ExecEntryRequest = {
    type: 'kv',
    entry: KVEntryRequest,
} | {
    type: 'zAdd',
    entry: ZEntryRequest
}

export function fromExecEntry(entry: ExecEntryRequest) {
    switch (entry.type) {
        case 'kv': return Buffer.concat([
            buffer.fromUInt64BEAsNumber(1),
            Buffer.of(fromExecEntryType(entry.type)),
            fromKVEntry(entry.entry),
        ])
        case 'zAdd': {

            const zAddReqBuf = Buffer.from(pb.immudb.schema.ZAddRequest.encode(entry.entry).finish())


            return Buffer.concat([
                buffer.fromUInt64BEAsNumber(1),
                Buffer.of(fromExecEntryType(entry.type)),
                buffer.fromUInt64BEAsNumber(zAddReqBuf.byteLength),
                zAddReqBuf,
            ])
        }
    }
}