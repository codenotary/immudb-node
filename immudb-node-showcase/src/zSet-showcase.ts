import Long from 'long'
import {
    Client, 
    verifyVerification, 
    types, 
    stream, 
} from 'immudb-node'





zSetShowcase()
.catch(console.error)

async function zSetShowcase() {

    const client = new Client({
        host:       '127.0.0.1',
        port:       3322,
        user:       'immudb',
        password:   'immudb',
        database:   'defaultdb',
    })


    const {valEntries: [kv1, kv2]} = await client.setValEntries({
        kvms: [
            {key: Buffer.of(0), val: Buffer.of(0)},
            {key: Buffer.of(1), val: Buffer.of(1)},
        ]
    })
    // console.log('kv1', kv1)
    // console.log('kv2', kv2)


    const {ref: ref1} = await client.setRefEntry({
        key:        Buffer.of(3),
        referToKey: kv1.key,
        keyTxId:    kv1.id,
        boundRef:   true,
    })
    const {ref: ref2} = await client.setRefEntry({
        key:        Buffer.of(4),
        referToKey: kv2.key,
        keyTxId:    kv2.id,
        boundRef:   true,
    })
    // console.log('ref1', ref1)
    // console.log('ref2', ref2)


    const {zSetTxEntry: zSet1} = await client.setZSetEntry({
        zSet:                   Buffer.of(4),
        referredKey:            ref1.referredKey,
        referredKeyScore:       3.14,
        referredKeyAtTxId:      ref1.referredAtTxId,
        boundReferredKeyAtTxId: true,
    })
    const {zSetTxEntry: zSet2} = await client.setZSetEntry({
        zSet:                   Buffer.of(4),
        referredKey:            ref2.referredKey,
        referredKeyScore:       5.15,
    })
    // console.log('zSet1', zSet1)
    // console.log('zSet2', zSet2)


    const zSetEntries = await client.scanZEntries({
        set: zSet2.zSet,
    })
    console.log('zSetEntries', zSetEntries)



    const dbEntries = await client.scanDbEntries({
        scanStartAtTxId: Long.fromInt(1, true)
    })
    // console.log('dbEntries', dbEntries)

    await client.close()
}