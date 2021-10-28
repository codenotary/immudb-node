import tap from 'tap';

import ImmudbClient from '../../src/client';

import { Config } from '../../src/interfaces';
import { USER_PERMISSION, USER_ACTION } from '../../types/user';
import Parameters from '../../types/parameters';

const {
  IMMUDB_HOST = '127.0.0.1',
  IMMUDB_TEST_PORT: IMMUDB_PORT = '56789',
  IMMUDB_USER = 'immudb',
  IMMUDB_PWD = 'immudb',
} = process.env;

tap.test('[DATABASE MANAGEMENT]', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    // test: login using the specified username and password
    const firstRequestData = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const firstResponse = await immudbClient.login(firstRequestData);
    if (firstResponse) {
      t.type(firstResponse.token, 'string');
    } else {
      t.fail('Failed to login');
    }

    // test: create database
    const secondRequestData: Parameters.CreateDatabase = { databasename: 'db1' };
    try {
      await immudbClient.createDatabase(secondRequestData);
      t.pass('Successfully created database');
    } catch (error) {
      t.fail('Failed database creation', error);
    }

    // test: use database just created
    const thirdRequestData: Parameters.UseDatabase = { databasename: 'db1' };
    await immudbClient.useDatabase(thirdRequestData);
    // if (secondResponse) {
    //   t.type(secondResponse.token, 'string')
    // }
    // else {
    //   t.fail('Failed to use database');
    // }

    // test: add new item having the specified key and value
    const fourthRequestData = { key: 'key1', value: 'value1' };
    const fourthResponse = await immudbClient.set(fourthRequestData);

    if (fourthResponse) {
      t.equal(fourthResponse.bltxid, 1);
      t.equal(fourthResponse.id, 2);
    } else {
      t.fail('Failed to set');
    }

    // test: list all databases available
    const fifthResponse = await immudbClient.listDatabases();
    if (fifthResponse) {
      t.equal(fifthResponse.databasesList[0].databasename, 'defaultdb');
      t.equal(fifthResponse.databasesList[1].databasename, 'db1');
      t.notEqual(fifthResponse.databasesList[1].databasename, 'defaultdb');
    }

    // test: print merkle tree
    // const sixthResponse = await immudbClient.printTree()

    // test: check immudb health status
    const seventhResponse = await immudbClient.health();
    if (seventhResponse) {
      t.ok(seventhResponse.status);
    } else {
      t.fail('Failed to get health');
    }

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('[USER MANAGEMENT]', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    rootPath: `${__dirname}/../test/root.json`,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    const rand = `${Math.floor(Math.random() * Math.floor(100000))}`;

    // test: login using the specified username and password
    const loginRequest: Parameters.Login = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const loginResponse = await immudbClient.login(loginRequest);
    if (loginResponse) {
      t.type(loginResponse.token, 'string');
    }

    // test: create a new user
    const createUserRequest = {
      user: rand,
      password: 'Example12#',
      permission: USER_PERMISSION.READ_WRITE,
      database: 'defaultdb',
    };
    try {
      await immudbClient.createUser(createUserRequest);
    } catch (error) {
      t.fail('Failed to create user', error);
    }

    // test: list all users
    await immudbClient.listUsers();

    // test: change user permission
    const changeUserPermissionRequest: Parameters.ChangePermission = {
      action: USER_ACTION.GRANT,
      username: rand,
      database: rand,
      permission: USER_PERMISSION.READ_ONLY,
    };
    await immudbClient.changePermission(changeUserPermissionRequest);

    // test: change user password
    const changePasswordRequest = {
      user: rand,
      oldpassword: 'Example12#',
      newpassword: 'Example1234%',
    };
    await immudbClient.changePassword(changePasswordRequest);

    // test: set active user
    const setActiveUserRequest: Parameters.SetActiveUser = {
      username: rand,
      active: true,
    };
    await immudbClient.setActiveUser(setActiveUserRequest);

    // test: logout
    await immudbClient.logout();

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('[OPERATIONS]: Regular', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    //   const rand = '' + Math.floor(Math.random()
    //     * Math.floor(100000))

    const rand = 1;
    const testDB = 'testdb';

    // test: login using the specified username and password
    const loginRequest: Parameters.Login = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    await immudbClient.login(
      loginRequest
    );

    const listDatabasesResponse = await immudbClient.listDatabases()
    if (listDatabasesResponse) {
      const { databasesList } = listDatabasesResponse

      // let dbExists = false
      const dbExists = databasesList.some(({ databasename }) => databasename === testDB)

      if (!dbExists) {
        // test: create database
        const createDatabaseRequest: Parameters.CreateDatabase = { databasename: testDB };
        
        await immudbClient.createDatabase(createDatabaseRequest);
      }
    }

    // test: use database just created
    const useDatabaseRequest: Parameters.UseDatabase = { databasename: testDB };
    await immudbClient.useDatabase(useDatabaseRequest);

    // test: add new item having the specified key
    // and value
    const key = 'hello'
    const value = 'world'
    let setRequest = { key, value };
    let setResponse = await immudbClient.set(setRequest);
    const id = setResponse && setResponse.id; // used in txById test

    if (id === undefined || id === null) {
      t.fail('Failed to get index from set');
    }

    // test: get item by key
    const getRequest = { key };
    await immudbClient.get(getRequest);

    //test: set a reference to an inserted key
    const referenceKey = 'refHello'
    const setReferenceRequest = { key: referenceKey, referencedKey: key }
    await immudbClient.setReference(setReferenceRequest)

    // test: get item by reference
    const getRefRequest = { key: referenceKey };
    await immudbClient.get(getRefRequest);

    // test: set a reference to an inserted key
    const setReferenceAtRequest = { key: referenceKey, referencedKey: key, attx: 0 }
    await immudbClient.setReferenceAt(setReferenceAtRequest)

    // test: safely set a reference to an inserted key
    const verifiedSetReferenceRequest = { key: referenceKey, referencedKey: key }
    await immudbClient.verifiedSetReference(verifiedSetReferenceRequest)

    // test: safely set a reference to an inserted key
    const verifiedSetReferenceAtRequest = { key: referenceKey, referencedKey: key, attx: 0 }
    await immudbClient.verifiedSetReferenceAt(verifiedSetReferenceAtRequest)

    // // test: count keys having the specified value
    // // in the database in use
    // const countRequest: schemaTypes.KeyPrefix.AsObject = { prefix: new Uint8Array(rand) };
    // const countResponse = await immudbClient.count(countRequest);

    // test: iterate over keys having the specified
    // prefix
    const scanRequest: Parameters.Scan = {
      seekkey: key,
      prefix: 'test',
      desc: true,
      limit: 5,
      sincetx: rand,
      nowait: true
    };
    await immudbClient.scan(scanRequest);

    // test: return an element by txId
    const txByIdRequest: Parameters.TxById = { tx: id as number }
    await immudbClient.txById(txByIdRequest);

    // test: safely get an element by txId
    const verifiedTxByIdRequest: Parameters.VerifiedTxById = { tx: id as number }
    await immudbClient.verifiedTxById(verifiedTxByIdRequest);

    // history: fetch history for the item having the
    // specified key
    const historyRequest = {
      key,
      // offset: 10,
      // limit: 5,
      // desc: false,
      // sincetx: rand
    };
    await immudbClient.history(historyRequest);

    // test: iterate over a sorted set
    const zScanRequest = {
      set: 'test',
      seekkey: '',
      seekscore: 0,
      seekattx: 0,
      inclusiveseek: true,
      limit: 5,
      desc: true,
      sincetx: 0,
      nowait: true
    };
    await immudbClient.zScan(zScanRequest);

    // test: execute a getAll read
    const getAllRequest: Parameters.GetAll = {
      keysList: [key],
      sincetx: 1
    };
    await immudbClient.getAll(getAllRequest);

    // test: add new item having the specified key
    // and value
    setRequest = {
      key: `${key}${key}`,
      value: `${value}${value}`,
    };
    setResponse = await immudbClient.set(setRequest);
    
    // test: get current state info
    let currentStateResponse = await immudbClient.currentState();

    // test: safely add new item having the specified key
    // and value
    let verifiedSetRequest: Parameters.VerifiedSet = {
      key: `${key}${key}`,
      value: `${value}${value}`,
    };
    try {
      await immudbClient.verifiedSet(verifiedSetRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: get current root info
    currentStateResponse = await immudbClient.currentState();

    // test: safely add new item having the specified key
    // and value
    verifiedSetRequest = {
      key: `${key}1`,
      value: `${value}1`,
    };
    try {
      await immudbClient.verifiedSet(verifiedSetRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: safely add new item having the specified key
    // and value
    verifiedSetRequest = {
      key: `${key}2`,
      value: `${value}2`,
    };
    try {
      await immudbClient.verifiedSet(verifiedSetRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: safely get item by key
    const verifiedGetRequest = {
      key
    }
    try {
      await immudbClient.verifiedGet(verifiedGetRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: safely get item by key at specific tx
    const verifiedGetAtRequest = {
      key,
      attx: 0
    }
    try {
      await immudbClient.verifiedGetAt(verifiedGetAtRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: safely get item by key since specific tx
    const verifiedGetSinceRequest = {
      key,
      sincetx: 2
    }
    try {
      await immudbClient.verifiedGetSince(verifiedGetSinceRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: set a secondary index on a key
    const zAddRequest = { set: 'test', score: 23, key }
    await immudbClient.zAdd(zAddRequest)

    // test: set a secondary index on a key at a specific transaction
    const zAddAtRequest = { set: 'test', score: 23, key, attx: 0 }
    await immudbClient.zAddAt(zAddAtRequest)

    // test: safely set a secondary index on a key at a specific transaction
    const verifiedZAddRequest = { set: 'test', score: 32, key }
    await immudbClient.zAdd(verifiedZAddRequest)

    // test: safely set a secondary index on a key at a specific transaction
    const verifiedZAddAtRequest = { set: 'test', score: 32, key, attx: 0 }
    await immudbClient.zAddAt(verifiedZAddAtRequest)

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('[OPERATIONS]: SQL', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    const rand = 1;
    const testDB = 'testdb';

    // test: login using the specified username and password
    const loginRequest: Parameters.Login = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    await immudbClient.login(
      loginRequest
    );

    const listDatabasesResponse = await immudbClient.listDatabases()
    if (listDatabasesResponse) {
      const { databasesList } = listDatabasesResponse

      // let dbExists = false
      const dbExists = databasesList.some(({ databasename }) => databasename === testDB)

      if (!dbExists) {
        // test: create database
        const createDatabaseRequest: Parameters.CreateDatabase = { databasename: testDB };
        
        await immudbClient.createDatabase(createDatabaseRequest);
      }
    }

    // test: use database just created
    const useDatabaseRequest: Parameters.UseDatabase = { databasename: testDB };
    await immudbClient.useDatabase(useDatabaseRequest);

    const tableName = `table${ Math.floor(Math.random() * 101) }`

    await immudbClient.SQLExec({
      sql: `create table ${ tableName } (id integer, name varchar, primary key id);`,
    })

    await immudbClient.SQLListTables()

    const sqlExecParams = [
      {
        id: 1,
        name: 'Joe'
      },
      {
        id: 2,
        name: 'Joe'
      },
      {
        id: 3,
        name: 'Adam'
      },
    ]
    for (const params of sqlExecParams) {
      await immudbClient.SQLExec({
        sql: `insert into ${ tableName } (id, name) values (@id, @name);`,
        params
      })
    }
    
    await immudbClient.SQLQuery({
      sql: `select id,name from ${ tableName } where name=@name;`,
      params: { name: 'Joe' }
    })

    const res = await immudbClient.SQLDescribe(tableName)
    console.dir({res}) // KILLME

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('[BATCHES]', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    // test: login using the specified username and password
    const loginRequest = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const res = await immudbClient.login(loginRequest);

    // test: use default database
    const useDatabaseRequest: Parameters.UseDatabase = { databasename: 'defaultdb' };
    const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

    // test: execute setAll
    const setAllRequest: Parameters.SetAll = { kvsList: [], nowait: true };
    for (let i = 0; i < 2; i++) {
      const kv = { key: `test${i}`, value: `world${i}` }

      setAllRequest.kvsList.push(kv);
    }
    const setAllResponse = await immudbClient.setAll(setAllRequest);

    // test: execute a batch read
    const getAllRequest: Parameters.GetAll = { keysList: [], sincetx: 0 };
    for (let i = 0; i < 2; i++) {
      getAllRequest.keysList.push(`test${i}`);
    }
    const getBatchResponse = await immudbClient.getAll(getAllRequest);

    t.end();
  } catch (err) {
    t.error(err);
  }
});
