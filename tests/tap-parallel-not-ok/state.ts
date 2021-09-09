import tap from 'tap';
import { isEqual } from 'lodash';

import ImmudbClient from '../../src/client';

import { Config } from '../../src/interfaces';
import Parameters from '../../types/parameters';

const {
  IMMUDB_HOST = '127.0.0.1',
  IMMUDB_TEST_PORT: IMMUDB_PORT = '56789',
  IMMUDB_USER = 'immudb',
  IMMUDB_PWD = 'immudb',
} = process.env;

tap.test('state persistence', async t => {
  const config: Config = {
    host: IMMUDB_HOST,
    port: IMMUDB_PORT,
    autoLogin: false,
  };
  const immudbClient1 = await ImmudbClient.getInstance(config);
  try {
    //   const rand = '' + Math.floor(Math.random()
    //     * Math.floor(100000))

    const testDB = 'testdb';

    // test: login using the specified username and password
    const loginRequest: Parameters.Login = {
      user: IMMUDB_USER,
      password: IMMUDB_PWD,
    };
    await immudbClient1.login( loginRequest );

    const listDatabasesResponse = await immudbClient1.listDatabases()
    if (listDatabasesResponse) {
      const { databasesList } = listDatabasesResponse

      // let dbExists = false
      const dbExists = databasesList.some(({ databasename }) => databasename === testDB)

      if (!dbExists) {
        // test: create database
        const createDatabaseRequest: Parameters.CreateDatabase = { databasename: testDB };
        await immudbClient1.createDatabase(createDatabaseRequest);
      }
    }

    // test: use database just created
    const useDatabaseRequest: Parameters.UseDatabase = { databasename: testDB };
    await immudbClient1.useDatabase(useDatabaseRequest);

    // test: add new item having the specified key
    // and value
    const key = 'hello'
    const value = 'world'
    let verifiedSetRequest = { key, value };
    await immudbClient1.set(verifiedSetRequest);

    const state1 = immudbClient1.state;

    const immudbClient2 = await ImmudbClient.getInstance(config);
    const state2 = immudbClient2.state;
    const statesEqual = isEqual(state1, state2)

    if (!statesEqual) {
      t.fail('Failed to instantiate a new client with the same state')
    }

    t.end();
  } catch(err) {
    t.error(err)
  }
});