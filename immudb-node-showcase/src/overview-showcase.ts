import Long from 'long'
import {
    Client,
    verifyVerification,
    types,
    stream,
} from '@codenotary/immudb-node'

overviewSchowcase()
    .catch(console.error)


async function overviewSchowcase() {


    const client = new Client({
        host: '127.0.0.1',
        port: 3322,
        user: 'immudb',
        password: 'immudb',
        database: 'defaultdb',
    })


    const emptyDbAt1 = await client.scanDbEntries({
        scanStartAtTxId: Long.fromInt(1, true)
    })
    console.log('emptyDbAt1:')
    console.log(emptyDbAt1)


    const valEntries2 = await client.setValEntries({
        kvms: [
            { key: Buffer.of(0), val: Buffer.of(0) },
            { key: Buffer.of(1), val: Buffer.of(1) },
        ]
    })
    console.log('valEntries2:')
    console.log(valEntries2)


    const valEntry3 = await client.setValEntries({
        kvms: [
            { key: Buffer.of(2), val: Buffer.of(2) },
        ]
    })
    console.log('valEntry3:')
    console.log(valEntry3)


    const refEntry4 = await client.setRefEntry({
        key: Buffer.of(3),
        referToKey: valEntries2.valEntries[0].key,
        keyTxId: valEntries2.valEntries[0].id,
        boundRef: true,
    })
    console.log('refEntry4:')
    console.log(refEntry4)


    const zSetEntry5 = await client.setZSetEntry({
        zSet: Buffer.of(4),
        referredKey: valEntry3.valEntries[0].key,
        referredKeyScore: 3,
    })
    console.log('zSetEntry5:')
    console.log(zSetEntry5)

    const entries6 = await client.setValRefZSetEntries({
        ops: [
            {
                type: 'val',
                key: Buffer.of(2),
                val: Buffer.of(6),
            },
            {
                type: 'ref',
                key: Buffer.of(3),
                referToKey: valEntry3.valEntries[0].key
            },
            {
                type: 'zSet',
                referredKey: valEntries2.valEntries[1].key,
                zSet: zSetEntry5.zSetTxEntry.zSet,
                referredKeyScore: 9,
            }
        ]
    })
    console.log('entries6:')
    console.log(entries6)


    const scanZEntriesAt6 = await client.scanZEntries({
        set: zSetEntry5.zSetTxEntry.zSet,
    })
    console.log('scanZEntriesAt6:')
    console.log(scanZEntriesAt6)


    const scanValRefEntriesAt6 = await client.scanValRefEntries({
        scanSkipToKey: valEntries2.valEntries[1].key,
    })
    console.log('scanValRefEntriesAt6:')
    console.log(scanValRefEntriesAt6)


    const scanHistoryAt6 = await client.scanHistory({
        key: valEntry3.valEntries[0].key
    })
    console.log('scanHistoryAt6:')
    console.log(scanHistoryAt6)


    const streamScanValZSetEntriesAt6 = await client.scanValRefEntriesStreaming({
        limit: Long.fromInt(6, true)
    })
    const buffs: Buffer[] = []
    for await (const chunk of streamScanValZSetEntriesAt6) {
        buffs.push(chunk.content)
    }
    console.log('streamScanValZSetEntriesAt6:')
    console.log(stream.toKVEntries(Buffer.concat(buffs)))


    const sqlExecCreateTable7 = await client.sqlExec({
        sql: `
        create table if not exists testtable (
            id1         integer not null,
            id2         varchar[3] null,
            created     timestamp null,
            data        varchar[512] not null,
            isActive    boolean not null,
            primary key (id1, id2)
        );
    `})
    console.log('sqlExecCreateTable7:')
    console.log(sqlExecCreateTable7)


    const sqlExecUpsert8 = await client.sqlExec({
        sql: `
        upsert into testtable
            (id1, id2, created, data, isactive)
        values
            (-2, 'kkk', NOW(), 'upsert existing', true),
            (10, 'yoy', NOW(), 'upsert operation 2', false),
            (11, 'qoy', NOW(), 'upsert operation 3', true);
    `})
    console.log('sqlExecUpsert8:')
    console.log(sqlExecUpsert8)


    const sqlTxAt8 = await client.executeSqlTx('ReadWrite', async (txApi) => {
        const sqlQueryInTxAt8 = await txApi.query({
            sql: `
            select * from testtable;
        `})
        console.log('sqlQueryInTxAt8')
        for await (const row of sqlQueryInTxAt8) {
            console.log(row)
        }

        // sqlExecUpsert9
        const sqlExecUpsertInTx9 = txApi.exec({
            sql: `
            upsert into testtable
                (id1, id2, created, data, isactive)
            values
                (12, 'to', NOW(), 'interactive tx 1', false),
                (13, 'ka', NOW(), 'interactive tx 2', true);
        `})


        const sqlQueryInTxAt9 = await txApi.query({
            sql: `
            select * from testtable;
        `})
        console.log('sqlQueryInTxAt9')
        for await (const row of sqlQueryInTxAt9) {
            console.log(row)
        }


        throw 'I would like to cancel'

    })
    console.log('sqlTxAt8')
    console.log(sqlTxAt8)


    const sqlQueryAt8 = await client.sqlQuery({
        sql: `
        select * from testtable;
    `})
    console.log('sqlQueryInTxAt8')
    console.log(sqlQueryAt8)

    const row = await sqlQueryAt8.next()
    console.log(row)


    const dbScanAt8 = await client.scanDbEntries({
        scanStartAtTxId: Long.fromValue(1, true),
    })
    console.log('dbScanAt8')
    console.log(dbScanAt8)



    const stateAt8 = await client.getDbCurrentState()
    console.log('stateAt8')
    console.log(stateAt8)


    const setAndProof9 = await client.setValEntriesGetVerification({
        kvms: [{ key: Buffer.from('yo'), val: Buffer.from('man') }],
        refTxId: stateAt8.txId,
        refHash: stateAt8.txHash,
    })
    console.log('setAndProof9')
    console.dir(setAndProof9, { depth: 10 })

    console.log('verifyVerification(setAndProof9) result:')
    console.log(verifyVerification(setAndProof9.verification))



    const stateAt9 = await client.getDbCurrentState()
    console.log('stateAt9')
    console.log(stateAt9)


    // entries2
    const getTx2AndVerification = await client.getTxAndVerification({
        txId: Long.fromInt(2, true),
        refHash: stateAt9.txHash,
        refTxId: stateAt9.txId,
    })
    console.log('getTx2AndVerification')
    console.log(getTx2AndVerification, { depth: 10 })
    console.log('verifyVerification(getTx2AndVerification) result:')
    console.log(verifyVerification(getTx2AndVerification.verification))




    // entries6
    const getTx6AndVerification = await client.getTxAndVerification({
        txId: entries6.tx.id,
        refHash: stateAt9.txHash,
        refTxId: stateAt9.txId,
    })
    console.log('getTx6AndVerification')
    console.log(getTx6AndVerification, { depth: 10 })
    console.log('verifyVerification(getTx6AndVerification) result:')
    console.log(verifyVerification(getTx6AndVerification.verification))



    // sqlExecCreateTable7.subTxes[0].tx?.id
    const getTx7AndVerification = await client.getTxAndVerification({
        txId: Long.fromInt(7, true),
        refHash: stateAt9.txHash,
        refTxId: stateAt9.txId,
    })
    console.log('getTx7AndVerification')
    console.log(getTx7AndVerification, { depth: 10 })
    console.log('verifyVerification(getTx7AndVerification) result:')
    console.log(verifyVerification(getTx7AndVerification.verification))


    // sqlExecUpsert8
    const getTx8AndVerification = await client.getTxAndVerification({
        txId: Long.fromInt(8, true),
        refHash: stateAt9.txHash,
        refTxId: stateAt9.txId,
    })
    console.log('getTx8AndVerification')
    console.log(getTx8AndVerification, { depth: 10 })
    console.log('verifyVerification(getTx8AndVerification) result:')
    console.log(verifyVerification(getTx8AndVerification.verification))






    await client.close()
}


