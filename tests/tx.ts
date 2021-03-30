import tap from 'tap'

import { Tx, digestTXe } from '../src/tx'

tap.test('tx-related functions', async t => {
    try {
        // Test digestTXe
        const key = Uint8Array.from([ 0, 104, 101, 108, 108, 111 ])
        const hValue = Uint8Array.from([
            174, 163, 203, 179,  54, 244, 212,
            148, 216, 181, 161,  87, 174, 223,
            196, 128, 164,  90, 109, 231, 192,
            150, 142,   8,  84,  51, 178,  20,
            249, 180,  30, 247
          ])
        const expectedTXeDigest = [
            242,  50, 242,  70, 70,  41,   9, 135,
             29,  46, 232, 189, 48, 118, 179,  44,
            103,  71,  39, 158, 15,  92,  92,  31,
            137, 196, 237, 246, 63, 251,   1, 236
          ]
        const actualTXeDigest = digestTXe({ key, hValue })
        t.deepEqual(actualTXeDigest, expectedTXeDigest)

        // Test txFrom
    }
    catch(err) {
        t.fail(err)
    }
})