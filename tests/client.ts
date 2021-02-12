import tap from 'tap';

import * as messages from '../src/proto/schema_pb';
import ImmudbClient from '../src/client';
import Util from '../src/util'

import { Permission, Config } from '../src/interfaces';

const {
  IMMUDB_HOST = '127.0.0.1',
  IMMUDB_TEST_PORT: IMMUDB_PORT = '56789',
  IMMUDB_USER = 'immudb',
  IMMUDB_PWD = 'immudb',
} = process.env;

const util = new Util()

tap.test('database management', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    // test: login using the specified username and password
    const firstRequestData: messages.LoginRequest.AsObject = {
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
    const secondRequestData: messages.Database.AsObject = { databasename: 'db1' };
    try {
      await immudbClient.createDatabase(secondRequestData);
      t.pass('Successfully created database');
    } catch (error) {
      t.fail('Failed database creation', error);
    }

    // test: use database just created
    const thirdRequestData: messages.Database.AsObject = { databasename: 'db1' };
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
      | messages.DatabaseListResponse.AsObject
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
    const loginRequest: messages.LoginRequest.AsObject = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const loginResponse = await immudbClient.login(loginRequest);
    if (loginResponse) {
      t.type(loginResponse.token, 'string');
    }

    // test: create a new user
    const createUserRequest: messages.CreateUserRequest.AsObject = {
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
    const changeUserPermissionRequest: messages.ChangePermissionRequest.AsObject = {
      action: messages.PermissionAction.GRANT,
      username: rand,
      database: rand,
      permission: Permission.READ_ONLY,
    };
    await immudbClient.changePermission(changeUserPermissionRequest);

    // test: change user password
    const changePasswordRequest: messages.ChangePasswordRequest.AsObject = {
      user: rand,
      oldpassword: 'Example12#',
      newpassword: 'Example1234%',
    };
    await immudbClient.changePassword(changePasswordRequest);

    // test: set active user
    const setActiveUserRequest: messages.SetActiveUserRequest.AsObject = {
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
    const loginRequest: messages.LoginRequest.AsObject = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const loginResponse: messages.LoginResponse.AsObject | undefined = await immudbClient.login(
      loginRequest
    );

    // test: create database
    const createDatabaseRequest: messages.Database.AsObject = { databasename: testDB };
    const createDatabaseResponse = await immudbClient.createDatabase(createDatabaseRequest);

    // test: use database just created
    const useDatabaseRequest: messages.Database.AsObject = { databasename: testDB };
    const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

    // test: add new item having the specified key
    // and value
    let setRequest: messages.KeyValue.AsObject = {
      key: new Uint8Array(rand),
      value: new Uint8Array(rand),
    };
    let setResponse = await immudbClient.set(setRequest);
    const id = setResponse && setResponse.id; // used in txById test

    if (id === undefined || id === null) {
      t.fail('Failed to get index from set');
    }

    // test: get item by key
    const getRequest: messages.Key.AsObject = { key: new Uint8Array(rand) };
    const getResponse = await immudbClient.get(getRequest);

    // // test: count keys having the specified value
    // // in the database in use
    // const countRequest: messages.KeyPrefix.AsObject = { prefix: new Uint8Array(rand) };
    // const countResponse = await immudbClient.count(countRequest);

    // test: iterate over keys having the specified
    // prefix
    const scanRequest: messages.ScanRequest.AsObject = {
      seekkey: new Uint8Array(rand),
      prefix: new Uint8Array(rand),
      desc: true,
      limit: 5,
      sincetx: rand,
      nowait: true
    };
    const seventhResponse = await immudbClient.scan(scanRequest);

    // test: return an element by txId
    const txByIdRequest: messages.TxRequest.AsObject = { tx: id as number }
    const txByIdResponse = await immudbClient.txById(txByIdRequest);

    // history: fetch history for the item having the
    // specified key
    const historyRequest: messages.HistoryRequest.AsObject = {
      key: new Uint8Array(rand),
      offset: 10,
      limit: 5,
      desc: false,
      sincetx: rand
    };
    const historyResponse = await immudbClient.history(historyRequest);

    // test: iterate over a sorted set
    const zScanRequest: messages.ZScanRequest.AsObject = {
      set: `${rand}`,
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
    const getAllRequest: messages.KeyListRequest.AsObject = {
      keysList: [util.utf8Encode(new Uint8Array(rand))],
      sincetx: 1
    };
    const getAllResponse = await immudbClient.getAll(getAllRequest);

    // test: add new item having the specified key
    // and value
    setRequest = {
      key: new Uint8Array(rand * 2),
      value: new Uint8Array(rand * 2),
    };
    setResponse = await immudbClient.set(setRequest);
    
    // test: get current state info
    let currentStateResponse = await immudbClient.currentState();

    // // test: safely add new item having the specified key
    // // and value
    // let safeSetRequest: messages.KeyValue.AsObject = {
    //   key: `${rand + 10}`,
    //   // key: new Uint8Array(rand + 10),
    //   value: new Uint8Array(rand + 10),
    // };
    // let safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // // test: get current root info
    // currentRootResponse = await immudbClient.currentRoot();

    // // test: safely add new item having the specified key
    // // and value
    // safeSetRequest = {
    //   key: new Uint8Array(rand + 11),
    //   value: new Uint8Array(rand + 11),
    // };
    // safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // // test: safely add new item having the specified key
    // // and value
    // safeSetRequest = {
    //   key: new Uint8Array(rand + 12),
    //   value: new Uint8Array(rand + 12),
    // };
    // safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // test: safely get item by key
    const verifiedGetRequest: messages.Key.AsObject = {
      key: new Uint8Array(rand)
    }
    try {
      const verifiedGetResponse = await immudbClient.verifiedGet(verifiedGetRequest);
      t.pass('Verified get test succeeded');
    } catch(err) {
      t.fail('Verified get test failed',err)
    }

    t.end();
  } catch (err) {
    t.error(err);
  }
});

// tap.test('batches', async t => {
//   const config: Config = {
//     host: IMMUDB_HOST,
//     port: IMMUDB_PORT,
//     autoLogin: false,
//   };
//   const immudbClient = await ImmudbClient.getInstance(config);
//   try {
//     // test: login using the specified username and password
//     const loginRequest: messages.LoginRequest.AsObject = {
//       user: IMMUDB_USER,
//       password: IMMUDB_PWD,
//     };
//     const res = await immudbClient.login(loginRequest);

//     // test: use default database
//     const useDatabaseRequest: messages.Database.AsObject = { databasename: 'defaultdb' };
//     const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

//     // test: execute a batch insert
//     const setBatchRequest: messages.KVList.AsObject = { kvsList: [] };
//     for (let i = 0; i < 20; i++) {
//       setBatchRequest.kvsList.push({ key: `${i}`, value: new Uint8Array(i) });
//     }
//     const setBatchResponse = await immudbClient.setBatch(setBatchRequest);

//     // test: execute a batch read
//     const getBatchRequest: messages.KeyList.AsObject = { keysList: [] };
//     for (let i = 0; i < 20; i++) {
//       getBatchRequest.keysList.push({ key: `${i}` });
//     }
//     const getBatchResponse = await immudbClient.getBatch(getBatchRequest);

//     t.end();
//   } catch (err) {
//     t.error(err);
//   }
// });
