import * as messages from '../src/proto/schema_pb';
import ImmudbClient from '../src/client';
import { Config } from '../dist/interfaces';

const tap = require('tap');

const { Action, Permission } = require('../src/interfaces');

const {
  IMMUDB_HOST = '127.0.0.1',
  IMMUDB_TEST_PORT: IMMUDB_PORT = '56789',
  IMMUDB_USER = 'immudb',
  IMMUDB_PWD = 'immudb',
} = process.env;

tap.test('database management', async (t: any) => {
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
    const thirdRequestData = { databasename: 'db1' };
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
      t.equal(fourthResponse.index, 0);
    } else {
      t.fail('Failed to set');
    }

    // test: list all databases available
    const fifthResponse:
      | messages.DatabaseListResponse.AsObject
      | undefined = await immudbClient.listDatabases();
    if (fifthResponse) {
      t.equal(fifthResponse.databasesList[0], 'defaultdb');
      t.equal(fifthResponse.databasesList[1], 'db1');
      t.notEqual(fifthResponse.databasesList[1], 'defaultdb');
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

tap.test('user management', async (t: any) => {
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
      action: Action.Grant,
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

tap.test('operations', async (t: any) => {
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
    const index = setResponse && setResponse.index; // saving for byIndex

    if (index === undefined || index === null) {
      t.fail('Failed to get index from set');
    }

    // test: get item by key
    const getRequest: messages.Key.AsObject = { key: new Uint8Array(rand) };
    const getResponse = await immudbClient.get(getRequest);

    // test: count keys having the specified value
    // in the database in use
    const countRequest: messages.KeyPrefix.AsObject = { prefix: new Uint8Array(rand) };
    const countResponse = await immudbClient.count(countRequest);

    // test: iterate over keys having the specified
    // prefix
    const scanRequest: messages.ScanOptions.AsObject = {
      prefix: new Uint8Array(rand),
      offset: '10',
      limit: 5,
      reverse: false,
      deep: false,
    };
    const seventhResponse = await immudbClient.scan(scanRequest);

    // test: return an element by index
    const byIndexRequest: messages.Index.AsObject = { index: index as number };
    const byIndexResponse = await immudbClient.byIndex(byIndexRequest);

    // history: fetch history for the item having the
    // specified key
    const historyRequest: messages.HistoryOptions.AsObject = {
      key: new Uint8Array(rand),
      offset: 10,
      limit: 5,
      reverse: false,
    };
    const historyResponse = await immudbClient.history(historyRequest);

    // test: iterate over a sorted set
    const zScanRequest: messages.ZScanOptions.AsObject = {
      set: `${rand}`,
      // set: new Uint8Array(rand),
      offset: '10',
      limit: 5,
      reverse: false,
    };
    const tenthResponse = await immudbClient.zScan(zScanRequest);

    // test: iterate over all elements by
    // insertion order
    const iScanRequest: messages.IScanOptions.AsObject = { pagesize: 1, pagenumber: 1 };
    const iscanResponse = await immudbClient.iScan(iScanRequest);

    // test: execute a batch read
    const getBatchRequest: messages.KeyList.AsObject = {
      keysList: [
        {
          key: new Uint8Array(rand),
        },
      ],
    };
    const getBatchResponse = await immudbClient.getBatch(getBatchRequest);

    // test: add new item having the specified key
    // and value
    setRequest = {
      key: new Uint8Array(rand * 2),
      value: new Uint8Array(rand * 2),
    };
    setResponse = await immudbClient.set(setRequest);

    // test: get current root info
    let currentRootResponse = await immudbClient.currentRoot();

    // test: safely add new item having the specified key
    // and value
    let safeSetRequest: messages.KeyValue.AsObject = {
      key: `${rand + 10}`,
      // key: new Uint8Array(rand + 10),
      value: new Uint8Array(rand + 10),
    };
    let safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // test: get current root info
    currentRootResponse = await immudbClient.currentRoot();

    // test: safely add new item having the specified key
    // and value
    safeSetRequest = {
      key: new Uint8Array(rand + 11),
      value: new Uint8Array(rand + 11),
    };
    safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // test: safely add new item having the specified key
    // and value
    safeSetRequest = {
      key: new Uint8Array(rand + 12),
      value: new Uint8Array(rand + 12),
    };
    safeSetResponse = await immudbClient.safeSet(safeSetRequest);

    // test: safely get item by key
    const safeGetRequest: messages.Key.AsObject = {
      key: new Uint8Array(rand + 12),
    };
    const safeGetResponse = await immudbClient.safeGet(safeGetRequest);

    t.end();
  } catch (err) {
    t.error(err);
  }
});

tap.test('batches', async (t: any) => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient = await ImmudbClient.getInstance(config);
  try {
    // test: login using the specified username and password
    const loginRequest: messages.LoginRequest.AsObject = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    const res = await immudbClient.login(loginRequest);

    // test: use default database
    const useDatabaseRequest: messages.Database.AsObject = { databasename: 'defaultdb' };
    const useDatabaseResponse = await immudbClient.useDatabase(useDatabaseRequest);

    // test: execute a batch insert
    const setBatchRequest: messages.KVList.AsObject = { kvsList: [] };
    for (let i = 0; i < 20; i++) {
      setBatchRequest.kvsList.push({ key: `${i}`, value: new Uint8Array(i) });
    }
    const setBatchResponse = await immudbClient.setBatch(setBatchRequest);

    // test: execute a batch read
    const getBatchRequest: messages.KeyList.AsObject = { keysList: [] };
    for (let i = 0; i < 20; i++) {
      getBatchRequest.keysList.push({ key: `${i}` });
    }
    const getBatchResponse = await immudbClient.getBatch(getBatchRequest);

    t.end();
  } catch (err) {
    t.error(err);
  }
});
