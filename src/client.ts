import * as dotenv from 'dotenv';
import { Metadata } from '@grpc/grpc-js';
import * as grpc from '@grpc/grpc-js';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';

dotenv.config();
import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';

import * as util from './util';
import { proofTx, txFrom } from './tx'
import State from './state';
import * as interfaces from './interfaces';
import { verifyInclusion, verifyDualProof } from './verification'
import { CLIENT_INIT_PREFIX, DEFAULT_DATABASE, DEFAULT_ROOTPATH } from './consts'
import { getSQLValue } from './common';
import Parameters, { SQLValue, SQLColumnDescription, SQLTableDescription, SQLRowDescription, } from '../types/parameters'

export class ImmudbClient {
  public state: State;

  public client: services.ImmuServiceClient;

  private static instance: ImmudbClient;

  private _auth: any;

  private _token: any;

  private _metadata: Metadata;

  private _activeDatabase: any;

  private _serverUUID: any;

  constructor({
    host = (process.env.IMMUDB_HOST as string) || '127.0.0.1',
    port = (process.env.IMMUDB_PORT as string) || '3322',
    certs,
    rootPath = DEFAULT_ROOTPATH,
  }: interfaces.Config) {
    // init insecure grpc auth
    this._auth = grpc.credentials.createInsecure();

    // init secure grpc auth
    if (certs !== undefined) {
      this._auth = grpc.credentials.createSsl(Buffer.from(JSON.stringify(certs)));
    }

    // initialize client from service
    this.client = new services.ImmuServiceClient(`${host}:${port}`, this._auth);

    // init empty grpc metadata
    this._metadata = new grpc.Metadata();

    // init state
    this.state = new State({ client: this.client, rootPath })
  }

  public static async getInstance(config: interfaces.Config): Promise<ImmudbClient> {
    const {
      user = process.env.IMMUDB_USER as string,
      password = process.env.IMMUDB_PWD as string,
      database: databasename = process.env.IMMUDB_DEFAULT_DB as string,
      autoDatabase = true,
      autoLogin = true
    } = config

    try {
      if (!ImmudbClient.instance) {
        console.log(
          `${CLIENT_INIT_PREFIX} creating new ImmudbClient instance with config`,
          '\n',
          `${util.maskConfig(config)}`
        );
        ImmudbClient.instance = new ImmudbClient(config);
        console.log(`${CLIENT_INIT_PREFIX} init new instance`);
        await ImmudbClient.instance.initClient(
          user,
          password,
          databasename,
          autoLogin,
          autoDatabase
        );
      } else {
        console.log(`${CLIENT_INIT_PREFIX} using already available ImmudbClient instance`);
      }

      return new Promise((resolve) => resolve(ImmudbClient.instance));
    } catch (err) {
      await ImmudbClient.instance.shutdown();

      return new Promise((_, reject) => reject(err));
    }
  }

  public async initClient(
    user?: string,
    password?: string,
    databasename?: string,
    autoLogin = true,
    autoDatabase = true
  ) {
    // by default automatically manage user login with dotenv variables
    if (autoLogin) {
      // login
      if (user && password) {
        const resLogin = await this.login({ user, password });
        const token = resLogin ? util.maskString(resLogin.token) : '';
        console.log('ImmudbClient: login', token);
      }
    } else {
      console.log(
        `${CLIENT_INIT_PREFIX} skipped automatic init login (manual client login is required)`
      );

      if (autoDatabase) {
        console.warn(
          `${CLIENT_INIT_PREFIX} it's not possible to 'autoDatabase' if 'autoLogin' is set to false`,
          '\n',
          `(the following ops will fallback to use '${DEFAULT_DATABASE}' database)`
        );
      }
    }

    // by default automatically manage database ops with dotenv variables
    if (autoLogin && autoDatabase) {
      // get current database list
      const resList = await this.listDatabases();
      if (resList && resList.databasesList.some(db => db.databasename === databasename)) {
        // useDatabase database specified if it
        // already exists
        await this.useDatabase({ databasename: DEFAULT_DATABASE });
        console.log(`${CLIENT_INIT_PREFIX} useDatabase  '${DEFAULT_DATABASE}'`);
      } else if (databasename) {
        // run createDatabase and useDatabase if databasename
        // is different than the default one
        await this.createDatabase({ databasename });
        console.log(`${CLIENT_INIT_PREFIX} createDatabase '${databasename}'`);
        await this.useDatabase({ databasename });
        console.log(`${CLIENT_INIT_PREFIX} useDatabase '${databasename}'`);
      } else {
        // run createDatabase and useDatabase if default
        // databasename is missing
        await this.useDatabase({ databasename: DEFAULT_DATABASE });
        console.log(`${CLIENT_INIT_PREFIX} useDatabase '${databasename}'`);
      }
    } else {
      console.log(
        `${CLIENT_INIT_PREFIX} skipped automatic init database`,
        '\n',
        `(manual client database ops are required, '${DEFAULT_DATABASE}' database will be used otherwise)`
      );
    }

    // fetch health status
    await this.health();
  }

  async shutdown() {
    this.state.commit();
    this.logout();
    process.exit(0);
  }

  async login(
    params: Parameters.Login
  ): Promise<schemaTypes.LoginResponse.AsObject | undefined> {
    try {
      const { user, password } = params;

      const req = new schemaTypes.LoginRequest();
      req.setUser(util.utf8Encode(user));
      req.setPassword(util.utf8Encode(password));

      return new Promise((resolve, reject) =>
        this.client.login(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Login Error', err);
            return reject(err);
          }

          this._token = res.getToken();
          this._metadata.remove('authorization');
          this._metadata.add('authorization', `Bearer ${this._token}`);

          resolve({
            token: this._token,
            warning: util.utf8Decode(res.getWarning()),
          });
        })
      );
    } catch (err) {
      console.error('Login Error', err);
    }
  }

  async createDatabase({ databasename }: Parameters.CreateDatabase): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.Database();

      req.setDatabasename(databasename);

      return new Promise((resolve, reject) =>
        this.client.createDatabase(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Create database error', err);
            return reject(err);
          }
          return resolve(res);
        })
      );
    } catch (err) {
      console.error('Create database error', err);
    }
  }

  async useDatabase(
    { databasename }: Parameters.UseDatabase
  ): Promise<schemaTypes.UseDatabaseReply.AsObject | undefined> {
    try {
      const req = new schemaTypes.Database();
      req.setDatabasename(databasename);

      return new Promise((resolve, reject) => this.client.useDatabase(req, this._metadata, async (err, res) => {
        if (err) {
          console.error('Use database error', err);
          return reject(err);
        } else {
          const token = res.getToken();
          this._metadata.remove('authorization');
          this._metadata.add('authorization', `Bearer ${token}`);
          this._activeDatabase = databasename;

          resolve(res.toObject());
        }
      })
      );
    } catch (err) {
      console.error('Use database error', err);
    }
  }

  async set({ key, value }: Parameters.Set): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.SetRequest();
      const kv = new schemaTypes.KeyValue();

      kv.setKey(util.utf8Encode(key));
      kv.setValue(util.utf8Encode(value));
      req.setKvsList([kv]);

      return new Promise((resolve, reject) =>
        this.client.set(req, this._metadata, async (err, res) => {
          if (err) {
            console.error('Set error', err);
            return reject(err);
          } else {
            const resObject = res.toObject()

            resolve(resObject);
          }
        })
      );
    } catch (err) {
      console.error('Set error', err);
    }
  }

  async get({ key }: Parameters.Get): Promise<schemaTypes.Entry.AsObject | undefined> {
    try {
      const req = new schemaTypes.KeyRequest();

      req.setKey(util.utf8Encode(key));

      return new Promise((resolve, reject) =>
        this.client.get(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Get error', err);
            reject(err.message);
          } else {
            resolve({
              tx: res && res.getTx(),
              key: util.utf8Decode(res && res.getKey()),
              value: util.utf8Decode(res && res.getValue()),
            });
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async listDatabases(): Promise<schemaTypes.DatabaseListResponse.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.databaseList(req, this._metadata, (err, res) => {
          if (err) {
            console.error('List databases error', err);
            return reject(err);
          }

          const dl = res && res.getDatabasesList();
          const l: Array<schemaTypes.Database.AsObject> = [];
          for (let i = 0; dl && i < dl.length; i++) {
            l.push(dl[i].toObject());
          }

          resolve({
            databasesList: l,
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async changePermission(
    params: Parameters.ChangePermission
  ): Promise<empty.Empty | undefined> {
    try {
      const { action, permission, username, database } = params

      const req = new schemaTypes.ChangePermissionRequest();
      req.setAction(action);
      req.setPermission(permission);
      req.setUsername(username);
      req.setDatabase(database);

      return new Promise((resolve, reject) =>
        this.client.changePermission(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Change permission error', err);
            return reject(err);
          } else {
            resolve(res);
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async listUsers(): Promise<schemaTypes.UserList.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.listUsers(req, this._metadata, (err, res) => {
          if (err) {
            console.error('List users error', err);
            reject(err.message);
          }

          const ul = res && res.getUsersList();
          const l: Array<schemaTypes.User.AsObject> = [];
          for (let i = 0; ul && i < ul.length; i++) {
            const u = ul[i];

            const pl = u.getPermissionsList();
            const p: Array<schemaTypes.Permission.AsObject> = [];
            for (let j = 0; j < pl.length; j++) {
              p.push({
                database: pl[j].getDatabase(),
                permission: pl[j].getPermission(),
              });
            }

            l.push({
              user: util.utf8Decode(u.getUser()),
              permissionsList: p,
              createdby: u.getCreatedby(),
              createdat: u.getCreatedat(),
              active: u.getActive(),
            });
          }

          resolve({
            usersList: l,
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async createUser(params: Parameters.CreateUser): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.CreateUserRequest();
      req.setUser(util.utf8Encode(params && params.user));
      req.setPassword(util.utf8Encode(params && params.password));
      req.setPermission(params && params.permission);
      req.setDatabase(params && params.database);

      return new Promise((resolve, reject) =>
        this.client.createUser(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Create user error', err);
            return reject(err);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async changePassword(
    params: Parameters.ChangePassword
  ): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.ChangePasswordRequest();
      req.setUser(util.utf8Encode(params && params.user));
      req.setOldpassword(util.utf8Encode(params && params.oldpassword));
      req.setNewpassword(util.utf8Encode(params && params.newpassword));

      return new Promise((resolve, reject) =>
        this.client.changePassword(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Change password error', err);
            return reject(err);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async logout(): Promise<empty.Empty | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.logout(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Logout error', err);
            reject(err.message);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async setActiveUser(
    params: Parameters.SetActiveUser
  ): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.SetActiveUserRequest();
      req.setUsername(params && params.username);
      req.setActive(params && params.active);

      return new Promise((resolve, reject) =>
        this.client.setActiveUser(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Set active user error', err);
            return reject(err);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async health(): Promise<schemaTypes.HealthResponse.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) => {
        const call = this.client.health(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Health error', err);
            return reject(err);
          }

          resolve({
            status: res.getStatus(),
            version: res.getVersion(),
          });
        })

        call.on('_metadata', (meta: Metadata) => {
          this._serverUUID = meta.get('immudb-uuid')[0]
        })
      });
    } catch (err) {
      console.error(err);
    }
  }

  async count(
    { prefix }: Parameters.Count
  ): Promise<schemaTypes.EntryCount.AsObject | undefined> {
    try {
      const req = new schemaTypes.KeyPrefix();
      req.setPrefix(util.utf8Encode(prefix));

      return new Promise((resolve, reject) =>
        this.client.count(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Count error', err);
            return reject(err);
          }

          resolve(res.toObject());
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async countAll(): Promise<schemaTypes.EntryCount.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.countAll(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Count all error', err);
            return reject(err);
          }

          resolve(res.toObject());
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async scan(
    { seekkey, prefix, desc, limit, sincetx, nowait }: Parameters.Scan = {}
  ): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.ScanRequest();

      if (seekkey !== undefined) {
        req.setSeekkey(util.utf8Encode(seekkey));
      }
      if (prefix !== undefined) {
        req.setPrefix(util.utf8Encode(prefix));
      }
      if (desc !== undefined) {
        req.setDesc(desc);
      }
      if (limit !== undefined) {
        req.setLimit(limit);
      }
      if (sincetx !== undefined) {
        req.setSincetx(sincetx);
      }
      if (nowait !== undefined) {
        req.setNowait(nowait);
      }

      return new Promise((resolve, reject) =>
        this.client.scan(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Scan error', err);
            return reject(err);
          }

          const result: Array<schemaTypes.Entry.AsObject> = [];
          const il = res && res.getEntriesList();
          for (let i = 0; il && i < il.length; i++) {
            const item = il[i];
            result.push({
              tx: item.getTx(),
              key: util.utf8Decode(item.getKey()),
              value: util.utf8Decode(item.getValue()),
            });
          }

          resolve({
            entriesList: result,
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async history(
    { key, offset, limit, desc, sincetx }: Parameters.History
  ): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.HistoryRequest();

      req.setKey(util.utf8Encode(key));
      offset && req.setOffset(offset);
      limit && req.setLimit(limit);
      desc && req.setDesc(desc);
      sincetx && req.setSincetx(sincetx);

      return new Promise((resolve, reject) =>
        this.client.history(req, this._metadata, (err, res) => {
          if (err) {
            console.error('History error', err);
            return reject(err);
          }

          const entriesList = res.getEntriesList();
          const result = entriesList.reduce(
            (entries, entry) => entries.concat({
              tx: entry.getTx(),
              key: util.utf8Decode(entry.getKey()),
              value: util.utf8Decode(entry.getValue()),
            }),
            [] as Array<schemaTypes.Entry.AsObject>
          )

          resolve({
            entriesList: result
          })
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async zScan(
    { set, seekkey, seekscore, seekattx, inclusiveseek, limit, desc, sincetx, nowait, minscore, maxscore }: Parameters.ZScan
  ): Promise<schemaTypes.ZEntries.AsObject | undefined> {
    try {
      const req = new schemaTypes.ZScanRequest();

      req.setSet(util.utf8Encode(set));
      seekkey && req.setSeekkey(util.utf8Encode(seekkey));
      seekscore && req.setSeekscore(seekscore);
      seekattx && req.setSeekattx(seekattx);
      inclusiveseek && req.setInclusiveseek(inclusiveseek);
      limit && req.setLimit(limit);
      desc && req.setDesc(desc);
      sincetx && req.setSincetx(sincetx);
      nowait && req.setNowait(nowait);

      if (minscore) {
        const minScore = new schemaTypes.Score()

        minScore.setScore(minscore.score)

        req.setMinscore(minScore)
      }

      if (maxscore) {
        const maxScore = new schemaTypes.Score()

        maxScore.setScore(maxscore.score)

        req.setMaxscore(maxScore)
      }

      return new Promise((resolve, reject) =>
        this.client.zScan(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zScan error', err);
            return reject(err);
          }

          const entriesList = res.getEntriesList();
          const result = entriesList.reduce(
            (entries, entry) => entries.concat({
              set: util.utf8Decode(entry.getSet()),
              key: util.utf8Decode(entry.getKey()),
              score: entry.getScore(),
              attx: entry.getAttx()
            }),
            [] as Array<schemaTypes.ZEntry.AsObject>
          )

          resolve({
            entriesList: result
          })
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async currentState(): Promise<schemaTypes.ImmutableState.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) => this.client.currentState(req, this._metadata, (err, res) => {
        if (err) {
          reject(err);
        } else {
          const signature = res.getSignature();

          const state: schemaTypes.ImmutableState.AsObject = {
            db: res.getDb(),
            txid: res.getTxid(),
            txhash: res.getTxhash_asU8(),
            signature: signature?.toObject()
          }

          this.state.set({ databaseName: this._activeDatabase, serverName: this._serverUUID }, state);

          resolve({
            db: this._activeDatabase,
            txid: res.getTxid(),
            txhash: res.getTxhash(),
            signature: {
              signature: util.utf8Encode(signature && signature.getSignature()),
              publickey: util.utf8Encode(signature && signature.getPublickey())
            },
          });
        }
      })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async zAdd(
    params: Parameters.ZAdd
  ): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return this.zAddAt(reqParams)
  }

  async zAddAt({ set, score = 0, key, attx = 0 }: Parameters.ZAddAt): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.ZAddRequest();

      req.setSet(util.utf8Encode(set));
      req.setScore(score);
      req.setKey(util.utf8Encode(key));
      req.setAttx(attx)
      req.setBoundref(attx > 0)

      return new Promise((resolve, reject) =>
        this.client.zAdd(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zAdd error', err);
            return reject(err);
          }

          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedZAdd(params: Parameters.VerifiedZAdd): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return await this.verifiedZAddAt(reqParams)
  }

  async verifiedZAddAt({ set, score, key, attx }: Parameters.VerifiedZAddAt): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ serverName: this._serverUUID, databaseName: this._activeDatabase, metadata: this._metadata })
      const req = new schemaTypes.VerifiableZAddRequest()
      const uintSet = util.utf8Encode(set)
      const uintKey = util.utf8Encode(key)

      const zar = new schemaTypes.ZAddRequest()

      zar.setSet(uintSet)
      zar.setScore(score)
      zar.setKey(uintKey)
      zar.setAttx(attx)
      zar.setBoundref(attx > 0)

      req.setZaddrequest(zar)
      req.setProvesincetx(state.getTxid())

      return new Promise((resolve, reject) => this.client.verifiableZAdd(req, this._metadata, (err, res) => {
        if (err) {
          console.error('verifiedZAddAt error', err);

          reject(err)
        } else {
          const resTx = res.getTx()

          if (resTx === undefined) {
            console.error('Error getting verifiedZAddAt tx')

            reject()
          } else {
            const txMetadata = resTx.getMetadata()

            if (txMetadata === undefined) {
              console.error('Error getting verifiedZAddAt txMetadata')

              reject()
            } else {
              const nEntries = txMetadata.getNentries()

              if (nEntries !== 1) {
                console.error('nEntries verification failed for verifiedZAddAt')

                reject()
              }

              const tx = txFrom(resTx)
              const eKv = util.encodeZAdd(uintSet, score, uintKey, attx)
              const inclusionProof = proofTx(tx, eKv.getKey_asU8())

              if (inclusionProof === undefined) {
                console.error('Error getting inclusionProof for verifiedZAddAt')

                reject()
              } else {
                let verifies = verifyInclusion(inclusionProof, util.digestKeyValue(eKv), tx.htree.root)

                if (verifies === false) {
                  console.error('Inclusion verification for verifiedZAddAt failed')

                  reject()
                }

                const dualProof = res.getDualproof()

                if (dualProof === undefined) {
                  console.error('Error getting dualProof for verifiedZAddAt')

                  reject()
                } else {
                  const tTxMetadata = dualProof.getTargettxmetadata()

                  if (tTxMetadata === undefined) {
                    console.error('Error getting tx metadata from dualProof in verifiedZAddAt')

                    reject()
                  } else {
                    if (!util.equalArray(tx.htree.root, tTxMetadata.getEh_asU8())) {
                      console.error('verifiedZAddAt error')
                    }

                    const txid = state.getTxid()
                    const txhash = state.getTxhash_asU8()
                    let sourceId
                    let sourceAlh

                    if (txid === 0) {
                      sourceId = tx.id
                      sourceAlh = tx.alh
                    } else {
                      sourceId = txid
                      sourceAlh = txhash
                    }

                    const targetId = tx.id
                    const targetAlh = util.getAlh(tTxMetadata)

                    verifies = verifyDualProof(dualProof, sourceId, targetId, sourceAlh, targetAlh)

                    if (verifies === false) {
                      console.error('Dual verification for verifiedZAddAt failed')

                      reject()
                    }

                    this.state.set(
                      { serverName: this._serverUUID, databaseName: this._activeDatabase },
                      { txid: targetId, txhash: targetAlh, signature: res.getSignature()?.toObject(), db: this._activeDatabase }
                    )

                    resolve(tTxMetadata.toObject())
                  }
                }
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async setReference(params: Parameters.SetReference): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const setReferenceAtParameters = Object.assign({}, params, { attx: 0 })

    return await this.setReferenceAt(setReferenceAtParameters)
  }

  async setReferenceAt({ key, referencedKey, attx }: Parameters.SetReferenceAt): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.ReferenceRequest();

      req.setKey(util.utf8Encode(key));
      req.setReferencedkey(util.utf8Encode(referencedKey));
      req.setAttx(attx)
      req.setBoundref(attx > 0)

      return new Promise((resolve, reject) => this.client.setReference(req, this._metadata, (err, res) => {
        if (err) {
          console.error('Reference error', err);
          return reject(err);
        }

        resolve({
          id: res.getId(),
          prevalh: util.getAlh(res),
          ts: res.getTs(),
          nentries: res.getNentries(),
          eh: res.getEh(),
          bltxid: res.getBltxid(),
          blroot: res.getBlroot(),
        })
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedSetReference(params: Parameters.VerifiedSetReference): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    const vSetReferenceAtParameters = Object.assign({}, params, { attx: 0 })

    return await this.verifiedSetReferenceAt(vSetReferenceAtParameters)
  }

  async verifiedSetReferenceAt({ key, referencedKey, attx }: Parameters.VerifiedSetReferenceAt): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ serverName: this._serverUUID, databaseName: this._activeDatabase, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const uint8Key = util.utf8Encode(key)
      const uint8RefKey = util.utf8Encode(referencedKey)
      const req = new schemaTypes.VerifiableReferenceRequest()

      const refReq = new schemaTypes.ReferenceRequest()

      refReq.setKey(uint8Key)
      refReq.setReferencedkey(uint8RefKey)
      refReq.setAttx(attx)
      refReq.setBoundref(attx > 0)

      req.setReferencerequest(refReq)
      req.setProvesincetx(txid)

      return new Promise((resolve, reject) => this.client.verifiableSetReference(req, this._metadata, (err, res) => {
        if (err) {
          console.error('verifiedSetReferenceAt error', err)

          reject(err)
        } else {
          const resTx = res.getTx()

          if (resTx === undefined) {
            console.error('Error getting transaction from verifiedSetReferenceAt response')

            reject()
          } else {
            const resTxMetadata = resTx.getMetadata()

            if (resTxMetadata === undefined) {
              console.error('Error getting transaction metadata from verifiedSetReferenceAt response')

              reject()
            } else {
              const nEntries = resTxMetadata.getNentries()

              if (nEntries !== 1) {
                console.error('nEntries verification failed for verifiedSetReferenceAt')

                reject()
              }

              const tx = txFrom(resTx)
              const inclusionProof = proofTx(tx, util.prefixKey(uint8Key))
              const eKv = new schemaTypes.KeyValue()

              eKv.setKey(util.prefixKey(uint8Key))
              eKv.setValue(util.encodeReferenceValue(uint8RefKey, attx))

              if (inclusionProof === undefined) {
                console.error('Error getting inclusionProof from verifiedSetReferenceAt response')

                reject()
              } else {
                let verifies = verifyInclusion(inclusionProof, util.digestKeyValue(eKv), tx.htree.root)

                if (verifies === false) {
                  console.error('Inclusion verification failed for verifiedSetReferenceAt')

                  reject()
                }

                const dualProof = res.getDualproof()

                if (dualProof === undefined) {
                  console.error('Error getting dualProof from verifiedSetReferenceAt response')

                  reject()
                } else {
                  let sourceId
                  let sourceAlh

                  if (txid === 0) {
                    sourceId = tx.id
                    sourceAlh = tx.alh
                  } else {
                    sourceId = txid
                    sourceAlh = txhash
                  }

                  const targetId = tx.id
                  const targetAlh = util.getAlh(resTxMetadata)

                  verifies = verifyDualProof(dualProof, sourceId, targetId, sourceAlh, targetAlh)

                  if (!verifies) {
                    console.error('Dual verification failed for verifiedSetReferenceAt')

                    reject()
                  }

                  this.state.set(
                    { serverName: this._serverUUID, databaseName: this._activeDatabase },
                    { db: this._activeDatabase, txid: targetId, txhash: targetAlh, signature: res.getSignature()?.toObject() }
                  )

                  const txMetadataObject: schemaTypes.TxMetadata.AsObject = {
                    id: resTxMetadata.getId(),
                    prevalh: util.getAlh(resTxMetadata),
                    ts: resTxMetadata.getTs(),
                    nentries: resTxMetadata.getNentries(),
                    eh: resTxMetadata.getEh_asU8(),
                    bltxid: resTxMetadata.getBltxid(),
                    blroot: resTxMetadata.getBlroot_asU8(),
                  }

                  resolve(txMetadataObject)
                }
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async setAll({ kvsList }: Parameters.SetAll): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.SetRequest();
      const kvls = kvsList.map(({ key, value }) => {
        const kv = new schemaTypes.KeyValue();

        kv.setKey(util.utf8Encode(key))
        kv.setValue(util.utf8Encode(value))

        return kv
      })

      req.setKvsList(kvls)

      return new Promise((resolve, reject) => this.client.set(req, this._metadata, (err, res) => {
        if (err) {
          console.error('setAll error', err)

          reject(err)
        } else {
          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async execAll({ operationsList }: Parameters.ExecAll): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const req = new schemaTypes.ExecAllRequest();
      const opl = operationsList.map(({ kv, zadd, ref }) => {
        const op = new schemaTypes.Op();
        const keyValue = new schemaTypes.KeyValue()
        const zAddReq = new schemaTypes.ZAddRequest();
        const refReq = new schemaTypes.ReferenceRequest();

        if (kv !== undefined && kv !== null) {
          const { key, value } = kv

          keyValue.setKey(key)
          keyValue.setValue(value)
        }

        if (zadd !== undefined && zadd !== null) {
          const { set, score, key, attx, boundref } = zadd

          zAddReq.setSet(set)
          zAddReq.setScore(score)
          zAddReq.setKey(key)
          zAddReq.setAttx(attx)
          zAddReq.setBoundref(boundref)
        }

        if (ref !== undefined && ref !== null) {
          const { key, referencedkey, attx, boundref } = ref

          refReq.setKey(key)
          refReq.setReferencedkey(referencedkey)
          refReq.setAttx(attx)
          refReq.setBoundref(boundref)
        }

        op.setKv(keyValue);
        op.setZadd(zAddReq)
        op.setRef(refReq)

        return op
      })

      req.setOperationsList(opl)

      return new Promise((resolve, reject) => this.client.execAll(req, this._metadata, (err, res) => {
        if (err) {
          console.error('execeAll error', err)

          reject(err)
        } else {
          resolve({
            id: res.getId(),
            prevalh: util.getAlh(res),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async getAll({ keysList, sincetx }: Parameters.GetAll): Promise<schemaTypes.Entries.AsObject | undefined> {
    try {
      const req = new schemaTypes.KeyListRequest();

      const encodedKeys = keysList.map(util.utf8Encode)

      req.setKeysList(encodedKeys);
      req.setSincetx(sincetx);

      return new Promise((resolve, reject) => this.client.getAll(req, this._metadata, (err, res) => {
        if (err) {
          console.error('Get all error', err);
          reject(err);
        }

        const entriesList = res.getEntriesList();
        const result = entriesList.reduce(
          (entries, entry) => entries.concat({
            tx: entry.getTx(),
            key: util.utf8Decode(entry.getKey()),
            value: util.utf8Decode(entry.getValue()),
          }),
          [] as Array<schemaTypes.Entry.AsObject>
        )

        resolve({
          entriesList: result
        })
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedSet({ key, value }: Parameters.VerifiedSet): Promise<schemaTypes.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new schemaTypes.VerifiableSetRequest();
      const kv = new schemaTypes.KeyValue();
      const setRequest = new schemaTypes.SetRequest();
      const uint8Key = util.utf8Encode(key)
      const uint8Value = util.utf8Encode(value)

      kv.setKey(uint8Key)
      kv.setValue(uint8Value)

      setRequest.setKvsList([kv])

      req.setProvesincetx(txid)
      req.setSetrequest(setRequest)

      return new Promise((resolve, reject) => this.client.verifiableSet(req, this._metadata, async (err, res) => {
        if (err) {
          console.error('verifiedSet error', err)

          reject(err)
        } else {
          const verifiableTx = res.getTx()

          if (verifiableTx === undefined) {
            console.error('Error getting verifiableTx from verifiedSet response')

            reject()
          } else {
            const tx = txFrom(verifiableTx)
            const inclusionProof = proofTx(tx, util.prefixKey(uint8Key))

            if (inclusionProof === undefined) {
              console.error('Error getting inclusionProof for verifiedSet')

              reject()
            } else {
              const eKv = util.encodeKeyValue(uint8Key, uint8Value)
              let verifies = verifyInclusion(inclusionProof, util.digestKeyValue(eKv), tx.htree.root)

              if (!verifies) {
                console.error('verifiedSet inclusion verification failed', err)

                reject(err)
              }

              const dualProof = res.getDualproof()

              if (!dualProof) {

              } else {
                const tTxMetadata = dualProof.getTargettxmetadata()
                const sTxMetadata = dualProof.getSourcetxmetadata()

                if (!tTxMetadata || !sTxMetadata) {

                } else {
                  if (!util.equalArray(tx.htree.root, tTxMetadata.getEh_asU8())) {
                    console.error('verifiedSet error')
                  }

                  let sourceId: number
                  let sourceAlh: Uint8Array

                  if (txid === 0) {
                    sourceId = tx.id
                    sourceAlh = util.getAlh(sTxMetadata)
                  } else {
                    sourceId = txid
                    sourceAlh = txhash
                  }

                  const targetId = tx.id
                  const targetAlh = util.getAlh(tTxMetadata)

                  verifies = verifyDualProof(dualProof, sourceId, targetId, sourceAlh, targetAlh)

                  if (!verifies) {
                    console.error('verifiedSet dual verification failed', err)

                    reject(err)
                  }

                  this.state.set({ serverName: this._serverUUID, databaseName: this._activeDatabase }, {
                    db: this._activeDatabase,
                    txid: targetId,
                    txhash: targetAlh,
                    signature: res.getSignature()?.toObject()
                  })

                  resolve(tTxMetadata.toObject())
                }
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async verifiedGet({ key, attx, sincetx }: Parameters.VerifiedGet): Promise<schemaTypes.Entry.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new schemaTypes.VerifiableGetRequest();
      const kr = new schemaTypes.KeyRequest();
      const uint8Key = util.utf8Encode(key)

      kr.setKey(uint8Key)

      if (attx !== undefined) {
        kr.setAttx(attx)
      }
      if (sincetx !== undefined) {
        kr.setSincetx(sincetx)
      }

      req.setKeyrequest(kr);
      req.setProvesincetx(txid);

      return new Promise((resolve, reject) => this.client.verifiableGet(req, this._metadata, async (err, res) => {
        if (err) {
          console.error(err);

          reject(err)
        } else {
          const inclusionproof = res.getInclusionproof()
          const verifiabletx = res.getVerifiabletx()
          const entry = res.getEntry()

          if (!inclusionproof || !verifiabletx || !entry) {
            console.error('Server verifiedGet error');

            reject()
          } else {
            const referencedby = entry.getReferencedby()
            let vTx: number
            let kv = new schemaTypes.KeyValue()

            if (referencedby === undefined) {
              vTx = entry.getTx()

              kv.setKey(util.prefixKey(uint8Key))
              kv.setValue(util.prefixValue(entry.getValue_asU8()))
            } else {
              const encRefKey = referencedby.getKey_asU8()
              const atTx = referencedby.getAttx()
              const entryKey = entry.getKey_asU8()

              vTx = referencedby.getTx()

              kv.setKey(util.prefixKey(encRefKey))
              kv.setValue(util.encodeReferenceValue(entryKey, atTx))
            }

            const dualproof = verifiabletx.getDualproof()

            if (dualproof === undefined) {
              console.error('Server verifiedGet error');

              reject()
            } else {
              const targettxmetadata = dualproof.getTargettxmetadata()
              const sourcetxmetadata = dualproof.getSourcetxmetadata()

              if (targettxmetadata === undefined || sourcetxmetadata === undefined) {
                console.error('Server verifiedGet error');

                reject()
              } else {
                let eh
                let sourceId
                let sourceAlh
                let targetId
                let targetAlh

                if (txid <= vTx) {
                  const tPrevalh = util.getAlh(targettxmetadata)

                  eh = targettxmetadata.getEh_asU8()
                  sourceId = txid
                  sourceAlh = txhash
                  targetId = vTx
                  targetAlh = tPrevalh
                } else {
                  const sPrevalh = util.getAlh(sourcetxmetadata)

                  eh = sourcetxmetadata.getEh_asU8()
                  sourceId = vTx
                  sourceAlh = sPrevalh
                  targetId = txid
                  targetAlh = txhash
                }

                let verifies = verifyInclusion(inclusionproof, util.digestKeyValue(kv), eh)

                if (!verifies) {
                  console.error('verifiedGet inclusion verification failed');

                  reject()
                }

                verifies = verifyDualProof(
                  dualproof,
                  sourceId,
                  targetId,
                  sourceAlh,
                  targetAlh
                )

                if (!verifies) {
                  console.error('verifiedGet dual verification failed');

                  reject()
                }

                this.state.set(
                  { serverName: this._serverUUID, databaseName: this._activeDatabase },
                  { txid: targetId, txhash: targetAlh, signature: verifiabletx.getSignature()?.toObject(), db: this._activeDatabase }
                )

                const referencedBy = entry.getReferencedby()

                resolve({
                  tx: vTx,
                  key: util.utf8Decode(entry.getKey_asU8()),
                  value: util.utf8Decode((entry.getValue_asU8())),
                  referencedby: referencedBy?.toObject()
                })
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async verifiedGetAt({ key, attx }: Parameters.VerifiedGetAt) {
    return await this.verifiedGet({ key, attx })
  }
  async verifiedGetSince({ key, sincetx }: Parameters.VerifiedGetSince) {
    return await this.verifiedGet({ key, sincetx })
  }

  async updateAuthConfig(params: Parameters.UpdateAuthConfig): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.AuthConfig();
      req.setKind(params && params.kind);

      return new Promise((resolve, reject) =>
        this.client.updateAuthConfig(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Update auth config error', err);
            return reject(err);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async updateMTLSConfig(params: Parameters.UpdateMTLSConfig): Promise<empty.Empty | undefined> {
    try {
      const req = new schemaTypes.MTLSConfig();
      req.setEnabled(params && params.enabled);

      return new Promise((resolve, reject) =>
        this.client.updateMTLSConfig(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Update mtls config error', err);
            return reject(err);
          } else {
            resolve(res);
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async txById({ tx }: Parameters.TxById): Promise<schemaTypes.Tx.AsObject | undefined> {
    try {
      const req = new schemaTypes.TxRequest();

      req.setTx(tx)

      return new Promise((resolve, reject) => this.client.txById(req, this._metadata, (err, res) => {
        if (err) {
          console.error('txById error', err);

          reject(err);
        } else {
          const { metadata, entriesList } = res.toObject()

          resolve({
            metadata,
            entriesList
          })
        }
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedTxById({ tx }: Parameters.VerifiedTxById): Promise<schemaTypes.Tx.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })

      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new schemaTypes.VerifiableTxRequest()

      req.setTx(tx)
      req.setProvesincetx(txid)

      return new Promise((resolve, reject) => this.client.verifiableTxById(req, this._metadata, (err, res) => {
        if (err) {
          console.error('verifiedTxById error', err)

          reject(err)
        } else {
          const dualProof = res.getDualproof()

          if (dualProof === undefined) {
            console.error('Error getting verifiedTxById dualProof')

            reject()
          } else {
            const resTxId = res.getTx()?.getMetadata()?.getId()

            if (resTxId === undefined) {
              console.error('Error getting verifiedTxById txId')

              reject()
            } else {
              const targettxmetadata = dualProof.getTargettxmetadata()
              const sourcetxmetadata = dualProof.getSourcetxmetadata()

              if (targettxmetadata === undefined || sourcetxmetadata === undefined) {
                console.error('Error getting verifiedTxById txmetadata')

                reject()
              } else {
                let sourceId
                let sourceAlh
                let targetId
                let targetAlh

                if (txid <= resTxId) {
                  sourceId = txid
                  sourceAlh = txhash
                  targetId = resTxId
                  targetAlh = util.getAlh(targettxmetadata)
                } else {
                  sourceId = resTxId
                  sourceAlh = util.getAlh(sourcetxmetadata)
                  targetId = txid
                  targetAlh = txhash
                }

                const verifies = verifyDualProof(
                  dualProof,
                  sourceId,
                  targetId,
                  sourceAlh,
                  targetAlh
                )

                if (verifies === false) {
                  console.error('verifiedTxById dual verification failed')

                  reject()
                }

                this.state.set({
                  serverName: this._serverUUID,
                  databaseName: this._activeDatabase,
                }, {
                  db: this._activeDatabase,
                  txhash: targetAlh,
                  txid: targetId,
                  signature: res.getSignature()?.toObject()
                })

                resolve(res.getTx()?.toObject())
              }
            }
          }
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async txScan(params: Parameters.TxScan): Promise<schemaTypes.TxList.AsObject | undefined> {
    try {
      const req = new schemaTypes.TxScanRequest();

      req.setInitialtx(params.initialtx);
      req.setLimit(params.limit);
      req.setDesc(params.desc);

      return new Promise((resolve, reject) => this.client.txScan(req, this._metadata, (err, res) => {
        if (err) {
          console.error('txScan error', err)

          reject(err)
        } else {
          resolve(res.toObject())
        }
      }))
    } catch (err) {
      console.error(err)
    }
  }

  async compactIndex(): Promise<empty.Empty | undefined> {
    try {
      const req = new empty.Empty()

      return new Promise((resolve, reject) => this.client.compactIndex(req, this._metadata, (err, res) => {
        if (err) {
          console.error('cleanIndex error', err);

          reject(err);
        } else {
          resolve(res)
        }
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async SQLExec({ sql, params = {}, nowait = false }: Parameters.SQLExec): Promise<schemaTypes.SQLExecResult.AsObject | undefined> {
    try {
      const req = new schemaTypes.SQLExecRequest();

      const sqlParamsList = Object.entries(params).map(([name, value]) => {
        const param = new schemaTypes.NamedParam();

        param.setName(name)
        param.setValue(getSQLValue(value))

        return param;
      });

      req.setParamsList(sqlParamsList);
      req.setSql(sql);
      req.setNowait(nowait);

      return new Promise((resolve, reject) => this.client.sQLExec(req, this._metadata, (err, res) => {
        if (err) {
          console.error('SQLExec error', err)

          reject(err)
        } else {
          resolve(res.toObject())
        }
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async SQLQuery({ sql, params = {}, reusesnapshot = false }: Parameters.SQLQuery): Promise<Array<SQLRowDescription> | undefined> {
    try {
      const req = new schemaTypes.SQLQueryRequest();

      const sqlParamsList = Object.entries(params).map(([name, value]) => {
        const param = new schemaTypes.NamedParam();

        param.setName(name)
        param.setValue(getSQLValue(value))

        return param;
      });

      req.setParamsList(sqlParamsList);
      req.setSql(sql);
      req.setReusesnapshot(reusesnapshot);

      return new Promise((resolve, reject) => this.client.sQLQuery(req, this._metadata, (err, res) => {
        if (err) {
          console.error('SQLQuery error', err)
          reject(err)
        } else {
          const rowsList = res.getRowsList().reduce(
            (acc: Array<SQLRowDescription>, cur: any) => {
              const cols = cur.array[0].map((el: string) => el.slice(el.lastIndexOf('.') + 1).replace(')', ''))
              const data = cur.array[1].map((el: string[]) => el.filter(Boolean))
              const out = cols.reduce(
                (acc: SQLRowDescription, cur: string, i: number) => (acc[cur] = data[i][0], acc),
                {},
              )
              acc.push(out)
              return acc
            },
            [],
          )
          resolve(rowsList);
        }
      }))
    } catch (err) {
      console.error(err);
    }
  }

  async SQLListTables(): Promise<Array<SQLTableDescription> | undefined> {
    try {
      const req = new empty.Empty()

      return new Promise((resolve, reject) => this.client.listTables(req, this._metadata, (err, res) => {
        if (err) {
          console.error('SQLListTables error', err);
          reject(err);
        } else {
          const rowsList = res.getRowsList()
            .map((row) => {
              const [name] = row.getValuesList();
              return {
                name: name.getS(),
              };
            })
          resolve(rowsList);
        }
      }));
    } catch (err) {
      console.error(err);
    }
  }

  async SQLDescribe(tableName: string): Promise<Array<SQLColumnDescription> | undefined> {
    const request = new schemaTypes.Table();
    request.setTablename(tableName);

    return new Promise((resolve, reject) => {
      return this.client.describeTable(request, this._metadata, (err, res) => {
        if (err) {
          console.error('SQLDescribe', err);
          reject(err);
        } else {
          const rowsList = res
            .getRowsList()
            .map(row => {
              const [name, type, nullable, index, autoincrement, unique,] = row.getValuesList();
              return {
                name: name.getS(),
                type: type?.getS(),
                nullable: nullable?.getB(),
                index: index?.getS(),
                autoincrement: autoincrement?.getB(),
                unique: unique?.getB()
              };
            })
          resolve(rowsList);
        }
      })
    })
  }
}

export default ImmudbClient;
