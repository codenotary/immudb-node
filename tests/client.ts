import tap from 'tap';

import * as schemaTypes from '../src/proto/schema_pb';
import ImmudbClient from '../src/client';
import * as util from '../src/util'

import { Permission, Config } from '../src/interfaces';

const {
  IMMUDB_HOST = '127.0.0.1',
  IMMUDB_TEST_PORT: IMMUDB_PORT = '56789',
  IMMUDB_USER = 'immudb',
  IMMUDB_PWD = 'immudb',
} = process.env;

tap.test('database management', async t => {
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
    const secondRequestData: schemaTypes.Database.AsObject = { databasename: 'db1' };
    try {
      await immudbClient.createDatabase(secondRequestData);
      t.pass('Successfully created database');
    } catch (error) {
      t.fail('Failed database creation', error);
    }

    // test: use database just created
    const thirdRequestData: schemaTypes.Database.AsObject = { databasename: 'db1' };
    const secondResponse = await immudbClient.useDatabase(thirdRequestData);
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
      t.equal(fourthResponse.bltxid, 0);
      t.equal(fourthResponse.id, 1);
    } else {
      t.fail('Failed to set');
    }

    // test: list all databases available
    const fifthResponse:
      | schemaTypes.DatabaseListResponse.AsObject
      | undefined = await immudbClient.listDatabases();
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
      t.true(seventhResponse.status);
    } else {
      t.fail('Failed to get health');
    }

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('user management', async t => {
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
    const loginRequest = {
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
      permission: Permission.READ_WRITE,
      database: 'defaultdb',
    };
    try {
      await immudbClient.createUser(createUserRequest);
    } catch (error) {
      t.fail('Failed to create user', error);
    }

    // test: list all users
    const listUsersResponse = await immudbClient.listUsers();

    // test: change user permission
    const changeUserPermissionRequest: schemaTypes.ChangePermissionRequest.AsObject = {
      action: schemaTypes.PermissionAction.GRANT,
      username: rand,
      database: rand,
      permission: Permission.READ_ONLY,
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
    const setActiveUserRequest: schemaTypes.SetActiveUserRequest.AsObject = {
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

tap.test('operations', async t => {
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
    const loginRequest = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const loginResponse: schemaTypes.LoginResponse.AsObject | undefined = await immudbClient.login(
      loginRequest
    );

    // test: create database
    const createDatabaseRequest: schemaTypes.Database.AsObject = { databasename: testDB };
    const createDatabaseResponse = await immudbClient.createDatabase(createDatabaseRequest);

    // test: use database just created
    const useDatabaseRequest: schemaTypes.Database.AsObject = { databasename: testDB };
    const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

    // test: add new item having the specified key
    // and value
    const key = 'hello'
    const value = 'world'
    let setRequest = {
      key,
      value: 'world',
    };
    let setResponse = await immudbClient.set(setRequest);
    const id = setResponse && setResponse.id; // used in txById test

    if (id === undefined || id === null) {
      t.fail('Failed to get index from set');
    }

    // test: get item by key
    const getRequest = { key };
    const getResponse = await immudbClient.get(getRequest);

    // // test: count keys having the specified value
    // // in the database in use
    // const countRequest: schemaTypes.KeyPrefix.AsObject = { prefix: new Uint8Array(rand) };
    // const countResponse = await immudbClient.count(countRequest);

    // test: iterate over keys having the specified
    // prefix
    const scanRequest: schemaTypes.ScanRequest.AsObject = {
      seekkey: key,
      prefix: 'test',
      desc: true,
      limit: 5,
      sincetx: rand,
      nowait: true
    };
    const seventhResponse = await immudbClient.scan(scanRequest);

    // test: return an element by txId
    const txByIdRequest: schemaTypes.TxRequest.AsObject = { tx: id as number }
    const txByIdResponse = await immudbClient.txById(txByIdRequest);

    // history: fetch history for the item having the
    // specified key
    const historyRequest = {
      key,
      offset: 10,
      limit: 5,
      desc: false,
      sincetx: rand
    };
    const historyResponse = await immudbClient.history(historyRequest);

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
    const tenthResponse = await immudbClient.zScan(zScanRequest);

    // test: execute a getAll read
    const getAllRequest: schemaTypes.KeyListRequest.AsObject = {
      keysList: [util.utf8Encode(key)],
      sincetx: 1
    };
    const getAllResponse = await immudbClient.getAll(getAllRequest);

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
    let verifiedSetRequest: schemaTypes.KeyValue.AsObject = {
      key: `${key}${key}`,
      value: `${value}${value}`,
    };
    let verifiedSetResponse
    try {
      verifiedSetResponse = await immudbClient.verifiedSet(verifiedSetRequest);
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
      verifiedSetResponse = await immudbClient.verifiedSet(verifiedSetRequest);
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
      verifiedSetResponse = await immudbClient.verifiedSet(verifiedSetRequest);
    } catch(err) {
      t.fail(err)
    }

    // test: safely get item by key
    const verifiedGetRequest = {
      key
    }
    try {
      const verifiedGetResponse = await immudbClient.verifiedGet(verifiedGetRequest);
    } catch(err) {
      t.fail(err)
    }

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('batches', async t => {
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
    const useDatabaseRequest: schemaTypes.Database.AsObject = { databasename: 'defaultdb' };
    const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

    // // test: execute setAll
    // const setAllRequest: schemaTypes.SetRequest.AsObject = { kvsList: [] };
    // for (let i = 0; i < 2; i++) {
    //   const kv: schemaTypes.KeyValue.AsObject = { key: `test${i}`, value: `world${i}` }

    //   setAllRequest.kvsList.push(kv);
    // }
    // console.log('setAllRequest',setAllRequest)
    // const setAllResponse = await immudbClient.setAll(setAllRequest);

    // // test: execute a batch read
    // const getAllRequest: schemaTypes.KeyListRequest.AsObject = { keysList: [], sincetx: 0 };
    // for (let i = 0; i < 2; i++) {
    //   getAllRequest.keysList.push(`test${i}`);
    // }
    // const getBatchResponse = await immudbClient.getAll(getAllRequest);

    t.end();
  } catch (err) {
    t.error(err);
  }
});
