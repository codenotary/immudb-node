/**
 * Run with:
 * 
 * ```sh
 * npx ts-node --esm .\immudb-node-showcase\src\sql-showcase.ts
 * ```
 */
import Long from 'long'
import {
    Client,
    verifyVerification,
    types,
    stream,
} from '@codenotary/immudb-node'

sqlShowcase()
    .catch(console.error)

async function sqlShowcase() {

    const client = new Client({
        host: '127.0.0.1',
        port: 3322,
        user: 'immudb',
        password: 'immudb',
        database: 'defaultdb',
    })

    // since tx used for verification reference 
    // cannot be first db transaction lets insert some dummy value:
    const { valEntries: [dummyValEntry] } = await client.setValEntries({
        kvms: [
            { key: Buffer.of(0), val: Buffer.of(0) }
        ]
    })

    // state will be dummyValEntry if database was empty
    const stateId2 = await client.getDbCurrentState()
    console.log('stateId2:', stateId2)


    const { subTxes: [{ tx: createTestTableTx }] } = await client.sqlExec({
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
    console.log('createTestTableTx:', createTestTableTx)


    const { subTxes: [{
        tx: insertTestTableTx,
        lastPK: insertTestTableLastPK,
        firstPK: insertTestTableFirstPK,
        updatedRowsCount: insertTestTableUpdatedRowsCount
    }] } = await client.sqlExec({
        sql: `
        upsert into testtable
            (id1, id2, created, data, isactive)
        values
            (-2, 'kkk', NOW(), 'upsert existing', true),
            (10, 'yoy', NOW(), 'upsert operation 2', false),
            (11, 'qoy', NOW(), 'upsert operation 3', true);
    `})
    console.log('insertTestTableTx:', insertTestTableTx)
    console.log('insertTestTableLastPK:', insertTestTableLastPK)
    console.log('insertTestTableFirstPK:', insertTestTableFirstPK)
    console.log('insertTestTableUpdatedRowsCount:', insertTestTableUpdatedRowsCount)

    const res = await client.sqlQuery({ sql: 'SELECT * FROM testtable' })
    for await (let row of res) {
        console.log(row);
    }

    // state at last sql insert (assuming empty db)
    const stateId4 = await client.getDbCurrentState()
    console.log('stateId4:', stateId4)


    const { valEntries: [dummyValEntry1] } = await client.setValEntries({
        kvms: [
            { key: Buffer.of(0), val: Buffer.of(1) }
        ]
    })

    // state 1 transactions after last sql insert (assuming empty db)
    const stateId5 = await client.getDbCurrentState()
    console.log('stateId5:', stateId5)


    const { valEntries: [dummyValEntry2] } = await client.setValEntries({
        kvms: [
            { key: Buffer.of(0), val: Buffer.of(2) }
        ]
    })

    // state 2 transactions after last sql insert (assuming empty db)
    const stateId6 = await client.getDbCurrentState()
    console.log('stateId6:', stateId6)

    if (createTestTableTx) {
        const createTestTableTxVer = await client.getTxAndVerification({
            txId: createTestTableTx.id,
            refHash: stateId5.txHash,
            refTxId: stateId5.txId,
        })
        verifyVerification(createTestTableTxVer.verification)
        console.log('createTestTableTxVer has been verified.')
    }

    if (insertTestTableTx) {
        const insertTestTableTxVer = await client.getTxAndVerification({
            txId: insertTestTableTx.id,
            refHash: stateId5.txHash,
            refTxId: stateId5.txId,
        })
        verifyVerification(insertTestTableTxVer.verification)
        console.log('insertTestTableTxVer has been verified.')
        // console.log('insertTestTableTxVer')
        // console.log(insertTestTableTxVer, {depth: 10})



        // await client.getSqlRowEntryAndVerification({
        //     pk: is.encodeAsPK([
        //         {type: 'INTEGER', isNotNullable: true, val: -2},
        //         {type: 'VARCHAR', isNotNullable: false, val: 'kkk'},
        //     ])
        // })
    }

    console.log('dbScan:', await client.scanDbEntries())

    await client.close()
}