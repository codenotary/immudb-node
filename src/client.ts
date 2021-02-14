import dotenv from 'dotenv';
import { Metadata } from 'grpc';
import * as grpc from '@grpc/grpc-js';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';

dotenv.config();
import * as messages from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';

import { Config } from './interfaces';
import Util, { hashUint8Array, utf8Encode, digestKeyValue, getAlh } from './util';
import { proofTx, txFrom } from './tx'
import Proofs from './proofs';
import State from './state';
import * as types from './interfaces';
import { Database, Permission, User } from './proto/schema_pb';
import { inclusionProofFrom, dualProofFrom, verifyInclusion, verifyDualProof } from './htree'

const CLIENT_INIT_PREFIX = 'ImmudbClient:';
const DEFAULT_DATABASE = 'defaultdb';
const DEFAULT_ROOTPATH = 'root';

type SetReferenceParameters = {
  key: string
  referencedKey: string
}
type SetReferenceAtParameters = {
  key: string
  referencedKey: string
  attx: number
}
type ZAddParameters = {
  set: string
  score: number
  key: string
}
type ZAddAtParameters = {
  set: string
  score: number
  key: string
  attx: number
}
type SetParameters = {
  key: string
  value: string
}

class ImmudbClient {
  public util = new Util();

  public proofs = new Proofs();

  public state: State;

  public client: services.ImmuServiceClient;

  private static instance: ImmudbClient;

  private _auth: any;

  private _token: any;

  private _metadata: Metadata;

  private _activeDatabase: any;

  private _serverUUID: any;

  private constructor({
    host = (process.env.IMMUDB_HOST as string) || '127.0.0.1',
    port = (process.env.IMMUDB_PORT as string) || '3322',
    certs,
    rootPath = DEFAULT_ROOTPATH,
  }: Config) {
    // init insecure grpc auth
    this._auth = grpc.credentials.createInsecure();

    // init secure grpc auth
    if (certs !== undefined) {
      this._auth = grpc.credentials.createSsl();
    }

    // initialize client from service
    this.client = new services.ImmuServiceClient(`${host}:${port}`, this._auth);

    // init empty grpc metadata
    this._metadata = new grpc.Metadata();

    // init state
    this.state = new State({ client: this.client, rootPath })
  }

  public static async getInstance(config: Config): Promise<ImmudbClient> {
    const util = new Util();
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
      return new Promise((reject) => reject(err));
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
        const token = resLogin ? this.util.maskString(resLogin.token) : '';
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
    this.health();
  }

  async shutdown() {
    this.state.commit();
    this.logout();
    process.exit(0);
  }

  async login(
    params: messages.LoginRequest.AsObject
  ): Promise<messages.LoginResponse.AsObject | undefined> {
    try {
      const { user, password } = params;

      const req = new messages.LoginRequest();
      req.setUser(utf8Encode(user));
      req.setPassword(utf8Encode(password));

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
            warning: this.util.utf8Decode(res.getWarning()),
          });
        })
      );
    } catch (err) {
      console.error('Login Error', err);
    }
  }

  async createDatabase({ databasename }: messages.Database.AsObject): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.Database();

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
    { databasename }: messages.Database.AsObject
  ): Promise<messages.UseDatabaseReply.AsObject | undefined> {
    try {
      const req = new messages.Database();
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

  async set({ key, value }: SetParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const req = new messages.SetRequest();
      const kv = new messages.KeyValue();

      kv.setKey(utf8Encode(key));
      kv.setValue(utf8Encode(value));
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

  async get({ key }: messages.Key.AsObject): Promise<messages.Entry.AsObject | undefined> {
    try {
      const req = new messages.KeyRequest();

      req.setKey(utf8Encode(key));

      return new Promise(resolve =>
        this.client.get(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Get error', err);
            throw new Error(err.message);
          } else {
            resolve({
              tx: res && res.getTx(),
              key: this.util && this.util.utf8Decode(res && res.getKey()),
              value: this.util && this.util.utf8Decode(res && res.getValue()),
            });
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async listDatabases(): Promise<messages.DatabaseListResponse.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.databaseList(req, this._metadata, (err, res) => {
          if (err) {
            console.error('List databases error', err);
            return reject(err);
          }

          const dl = res && res.getDatabasesList();
          const l: Array<Database.AsObject> = [];
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
    params: messages.ChangePermissionRequest.AsObject
  ): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.ChangePermissionRequest();
      req.setAction(params && params.action);
      req.setPermission(params && params.permission);
      req.setUsername(params && params.username);
      req.setDatabase(params && params.database);

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

  async listUsers(): Promise<messages.UserList.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.listUsers(req, this._metadata, (err, res) => {
          if (err) {
            console.error('List users error', err);
            throw new Error(err.message);
          }

          const ul = res && res.getUsersList();
          const l: Array<User.AsObject> = [];
          for (let i = 0; ul && i < ul.length; i++) {
            const u = ul[i];

            const pl = u.getPermissionsList();
            const p: Array<Permission.AsObject> = [];
            for (let j = 0; j < pl.length; j++) {
              p.push({
                database: pl[j].getDatabase(),
                permission: pl[j].getPermission(),
              });
            }

            l.push({
              user: this.util && this.util.utf8Decode(u.getUser()),
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

  async createUser(params: messages.CreateUserRequest.AsObject): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.CreateUserRequest();
      req.setUser(this.util && utf8Encode(params && params.user));
      req.setPassword(this.util && utf8Encode(params && params.password));
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
    params: messages.ChangePasswordRequest.AsObject
  ): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.ChangePasswordRequest();
      req.setUser(this.util && utf8Encode(params && params.user));
      req.setOldpassword(this.util && utf8Encode(params && params.oldpassword));
      req.setNewpassword(this.util && utf8Encode(params && params.newpassword));

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
            throw new Error(err.message);
          }

          resolve(res);
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async setActiveUser(
    params: messages.SetActiveUserRequest.AsObject
  ): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.SetActiveUserRequest();
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

  async health(): Promise<messages.HealthResponse.AsObject | undefined> {
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

        call.on('_metadata', meta => {
          this._serverUUID = meta.get('immudb-uuid')[0]
        })
      });
    } catch (err) {
      console.error(err);
    }
  }

  async count(
    params: messages.KeyPrefix.AsObject
  ): Promise<messages.EntryCount.AsObject | undefined> {
    try {
      const req = new messages.KeyPrefix();
      req.setPrefix(this.util && utf8Encode(params && params.prefix));

      return new Promise((resolve, reject) =>
        this.client.count(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Count error', err);
            return reject(err);
          }

          resolve({
            count: res && res.getCount(),
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async countAll(
    params: messages.KeyPrefix.AsObject
  ): Promise<messages.EntryCount.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) =>
        this.client.countAll(req, this._metadata, (err, res) => {
          if (err) {
            console.error('Count all error', err);
            return reject(err);
          }

          resolve({
            count: res && res.getCount(),
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async scan(
    { seekkey, prefix, desc, limit, sincetx, nowait }: Partial<messages.ScanRequest.AsObject> = {}
  ): Promise<messages.Entries.AsObject | undefined> {
    try {
      const req = new messages.ScanRequest();

      if (seekkey !== undefined) {
        req.setSeekkey(utf8Encode(seekkey));
      } 
      if (prefix !== undefined) {
        req.setPrefix(utf8Encode(prefix));
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

          const result: Array<messages.Entry.AsObject> = [];
          const il = res && res.getEntriesList();
          for (let i = 0; il && i < il.length; i++) {
            const item = il[i];
            result.push({
              tx: item.getTx(),
              key: this.util && this.util.utf8Decode(item.getKey()),
              value: this.util && this.util.utf8Decode(item.getValue()),
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
    { key, offset, limit, desc, sincetx }: messages.HistoryRequest.AsObject
  ): Promise<messages.Entries.AsObject | undefined> {
    try {
      const req = new messages.HistoryRequest();

      req.setKey(this.util && utf8Encode(key));
      req.setOffset(offset);
      req.setLimit(limit);
      req.setDesc(desc);
      req.setSincetx(sincetx);

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
              key: this.util && this.util.utf8Decode(entry.getKey()),
              value: this.util && this.util.utf8Decode(entry.getValue()),
            }),
            [] as Array<messages.Entry.AsObject>
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
    { set, seekkey, seekscore, seekattx, inclusiveseek, limit, desc, sincetx, nowait }: messages.ZScanRequest.AsObject
  ): Promise<messages.ZEntries.AsObject | undefined> {
    try {
      const req = new messages.ZScanRequest();

      req.setSet(this.util && utf8Encode(set));
      req.setSeekkey(this.util && utf8Encode(seekkey));
      req.setSeekscore(seekscore);
      req.setSeekattx(seekattx);
      req.setInclusiveseek(inclusiveseek);
      req.setLimit(limit);
      req.setDesc(desc);
      req.setSincetx(sincetx);
      req.setNowait(nowait);

      return new Promise((resolve, reject) =>
        this.client.zScan(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zScan error', err);
            return reject(err);
          }

          const entriesList = res.getEntriesList();
          const result = entriesList.reduce(
            (entries, entry) => entries.concat({
              set: this.util && this.util.utf8Decode(entry.getSet()),
              key: this.util && this.util.utf8Decode(entry.getKey()),
              score: entry.getScore(),
              attx: entry.getAttx()
            }),
            [] as Array<messages.ZEntry.AsObject>
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

  async currentState(): Promise<messages.ImmutableState.AsObject | undefined> {
    try {
      const req = new empty.Empty();

      return new Promise((resolve, reject) => this.client.currentState(req, this._metadata, (err, res) => {
        if (err) {
          reject(err);
        } else {
          console.log('state received', res.toObject())
          const signature = res.getSignature();

          this.state.set({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata }, res.toObject());

          resolve({
            db: this._activeDatabase,
            txid: res.getTxid(),
            txhash: res.getTxhash(),
            signature: {
              signature: utf8Encode(signature && signature.getSignature()),
              publickey: utf8Encode(signature && signature.getPublickey())
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
    params: ZAddParameters
  ): Promise<messages.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return this.zAddAt(reqParams)
  }

  async zAddAt ({ set, score = 0, key, attx = 0 }: ZAddAtParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const req = new messages.ZAddRequest();

      req.setSet(this.util && utf8Encode(set));
      req.setScore(score);
      req.setKey(this.util && utf8Encode(key));
      req.setAttx(attx)
      req.setBoundref(attx > 0)

      return new Promise((resolve, reject) =>
        this.client.zAdd(req, this._metadata, (err, res) => {
          if (err) {
            console.error('zAdd error', err);
            return reject(err);
          }

          resolve({
            id: res && res.getId(),
            prevalh: res && res.getPrevalh(),
            ts: res && res.getTs(),
            nentries: res && res.getNentries(),
            eh: res && res.getEh(),
            bltxid: res && res.getBltxid(),
            blroot: res && res.getBlroot(),
          });
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async verifiedZAdd(params: ZAddParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    const reqParams = Object.assign({}, params, { attx: 0 })

    return await this.verifiedZAddAt(reqParams)
  }

  async verifiedZAddAt({ set, score, key, attx }: ZAddAtParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    const state = await this.state.get({ serverName: this._serverUUID, databaseName: this._activeDatabase, metadata: this._metadata })
    const req = new messages.VerifiableZAddRequest()
    const uintSet = utf8Encode(set)
    const uintKey = utf8Encode(key)

    const zar = new messages.ZAddRequest()

    zar.setSet(uintSet)
    zar.setScore(score)
    zar.setKey(key)
    zar.setAttx(attx)
    zar.setBoundref(attx > 0)

    req.setZaddrequest(zar)
    req.setProvesincetx(state.getTxid())

    return new Promise((resolve, reject) => this.client.verifiableZAdd(req, this._metadata, (err, res) => {
      if (err !== undefined) {
        console.error('verifiedZAddAt error', err);

        reject(err)
      } else {
        // const resTx = res.getTx()

        // if (resTx === undefined) {
        //   console.error('Error getting verifiedZAddAt tx')

        //   reject()
        // } else {
        //   const txMetadata = resTx.getMetadata()

        //   if (txMetadata === undefined) {
        //     console.error('Error getting verifiedZAddAt txMetadata')
  
        //     reject()
        //   } else {
        //     const nEntries = txMetadata.getNentries()

        //     if (nEntries !== 1) {
        //       console.error('nEntries verification failed for verifiedZAddAt')
    
        //       reject()
        //     }

        //     const tx = txFrom(resTx)
        //     const eKv = this.util.encodeZAdd(uintSet, score, uintKey, attx)
        //     const inclusionProof = tx.proof(eKv.getKey_asU8())
        //   }
        // }
      }
    }))
  }

  async setReference (params: SetReferenceParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    const referenceParams = Object.assign({}, params, { attx: 0 })

    return await this.setReferenceAt(referenceParams)
  }
  
  async setReferenceAt ({ key, referencedKey, attx }: SetReferenceAtParameters): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const req = new messages.ReferenceRequest();

      req.setKey(utf8Encode(key));
      req.setReferencedkey(utf8Encode(referencedKey));
      req.setAttx(attx)
      req.setBoundref(attx > 0)

      return new Promise((resolve, reject) => this.client.setReference(req, this._metadata, (err, res) => {
        if (err) {
          console.error('Reference error', err);
          return reject(err);
        }

        resolve({
          id: res.getId(),
          prevalh: res.getPrevalh(),
          ts: res.getTs(),
          nentries: res.getNentries(),
          eh: res.getEh(),
          bltxid: res.getBltxid(),
          blroot: res.getBlroot(),
        })
      }))      
    } catch(err) {
      console.error(err);
    }
  }

  async verifiedSetReference () {}

  async verifiedSetReferenceAt () {}

  async setAll({ kvsList }: messages.SetRequest.AsObject): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const req = new messages.SetRequest();
      const kvls = kvsList.map(({ key, value }) => {
        const kv = new messages.KeyValue();

        kv.setKey(key)
        kv.setValue(value)

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
            prevalh: res.getPrevalh(),
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
  
  async execAll({ operationsList }: messages.ExecAllRequest.AsObject): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const req = new messages.ExecAllRequest();
      const opl = operationsList.map(({ kv, zadd, ref }) => {
        const op = new messages.Op();
        const keyValue = new messages.KeyValue()
        const zAddReq = new messages.ZAddRequest();
        const refReq = new messages.ReferenceRequest();

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
            prevalh: res.getPrevalh(),
            ts: res.getTs(),
            nentries: res.getNentries(),
            eh: res.getEh(),
            bltxid: res.getBltxid(),
            blroot: res.getBlroot(),
          });
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async getAll ({ keysList, sincetx }: messages.KeyListRequest.AsObject): Promise<messages.Entries.AsObject | undefined> {
    try {
      const req = new messages.KeyListRequest();

      req.setKeysList(keysList);
      req.setSincetx(sincetx);

      return new Promise((resolve, reject) => this.client.getAll(req, this._metadata, (err, res) => {
        if (err) {
          console.error('Get all error', err);
          return reject(err);
        }

        const entriesList = res.getEntriesList();
        const result = entriesList.reduce(
          (entries, entry) => entries.concat({
            tx: entry.getTx(),
            key: this.util && this.util.utf8Decode(entry.getKey()),
            value: this.util && this.util.utf8Decode(entry.getValue()),
          }),
          [] as Array<messages.Entry.AsObject>
        )

        resolve({
          entriesList: result
        })
      }))
    } catch(err) {
      console.error(err);
    }
  }

  async verifiedSet ({ key, value }: messages.KeyValue.AsObject): Promise<messages.TxMetadata.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new messages.VerifiableSetRequest();
      const kv = new messages.KeyValue();
      const setRequest = new messages.SetRequest();

      kv.setKey(key)
      kv.setValue(value)

      setRequest.setKvsList([kv])

      req.setProvesincetx(txid)
      req.setSetrequest(setRequest)

      return new Promise((resolve, reject)=> this.client.verifiableSet(req, this._metadata, async (err, res) => {
        if (err) {
          console.error('verifiedSet error', err)

          reject(err)
        } else {
          const verifiableTx = res.getTx()

          if (verifiableTx === undefined) {
            console.error('')

            reject()
          } else {
            const tx = txFrom(verifiableTx)
            const uint8Key = utf8Encode(key)
            const uint8Value = utf8Encode(value)
            const inclusionProof = proofTx(tx, this.util.prefixKey(uint8Key))

            if (inclusionProof === undefined) {
              console.error('Error getting inclusionProof for verifiedSet')

              reject()
            } else {
              const eKv = this.util.encodeKeyValue(uint8Key, uint8Value)
              let verifies = verifyInclusion(inclusionProof, digestKeyValue(eKv), tx.htree.root)
  
              if (!verifies) {
                console.error('verifiedSet inclusion verification failed', err)
  
                reject(err)
              }
  
              const dualProof = res.getDualproof()
  
              if (!dualProof) {
  
              } else {
                const tTxMetadata = dualProof.getTargettxmetadata()
  
                if (!tTxMetadata) {
  
                } else {
                  if (tx.htree.root !== tTxMetadata.getEh_asU8()) {
                    console.error('verifiedSet error', err)
                  }
  
                  let sourceId: number
                  let sourceAlh: Uint8Array
  
                  if (txid === 0) {
                    sourceId = tx.id
                    sourceAlh = tx.alh
                  } else {
                    sourceId = txid
                    sourceAlh = txhash
                  }
  
                  const targetId = tx.id
                  const targetAlh = tx.alh
  
                  verifies = verifyDualProof(dualProofFrom(dualProof.toObject()), sourceId, targetId, sourceAlh, targetAlh)
  
                  if (!verifies) {
                    console.error('verifiedSet dual verification failed', err)
      
                    reject(err)
                  }
  
                  this.state.set({ serverName: this._serverUUID, databaseName: this._activeDatabase, metadata: this._metadata }, {
                    db: this._activeDatabase,
                    txid: targetId,
                    txhash: targetAlh,
                    signature: res.getSignature()?.toObject()
                  })
  
                  // resolve({
                  //   id
                  // })
                }
              }
            }
          }
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async verifiedGet({ key, attx, sincetx }: types.PartialBy<messages.KeyRequest.AsObject, 'sincetx' | 'attx'>): Promise<messages.Entry.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })
      const txid = state.getTxid()
      const txhash = state.getTxhash_asU8()
      const req = new messages.VerifiableGetRequest();
      const kr = new messages.KeyRequest();
      const uint8Key = utf8Encode(key)

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
            let kv = new messages.KeyValue()

            if (referencedby === undefined) {
              vTx = entry.getTx()

              kv.setKey(this.util.prefixKey(uint8Key))
              kv.setValue(this.util.prefixValue(entry.getValue_asU8()))
            } else {
              const key = utf8Encode(referencedby.getKey())
              const atTx = referencedby.getAttx()
    
              vTx = referencedby.getTx()

              kv.setKey(this.util.prefixKey(key))
              kv.setValue(this.util.encodeReferenceValue(key, atTx))
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
                let eh = targettxmetadata.getEh_asU8()
                const tPrevalh = getAlh(targettxmetadata)
                let sourceId = txid
                let sourceAlh = txhash
                let targetId = vTx
                let targetAlh = tPrevalh
    
                if (txid > vTx) {
                  const sPrevalh = sourcetxmetadata.getPrevalh_asU8()

                  eh = sourcetxmetadata.getEh_asU8()
                  sourceId = vTx
                  sourceAlh = sPrevalh
                  targetId = txid
                  targetAlh = txhash
                }
    
                let verifies = verifyInclusion(inclusionproof, digestKeyValue(kv), eh)
    
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
                  { serverName: this._serverUUID, databaseName: this._activeDatabase, metadata: this._metadata },
                  { txid: targetId, txhash: targetAlh, signature: verifiabletx.getSignature()?.toObject(), db: this._activeDatabase }
                )

                const referencedBy = entry.getReferencedby()

                resolve({
                  tx: vTx,
                  key: entry.getKey_asU8(),
                  value: entry.getValue_asU8(),
                  referencedby: referencedBy?.toObject()
                })
              }
            }
          }
        }
      }))
    } catch(err) {
      console.error(err)
    }
  }

  async verifiedGetAt({ key, attx }: Omit<messages.KeyRequest.AsObject, 'sincetx'>) {
    return await this.verifiedGet({ key, attx })
  }
  async verifiedGetSince({ key, sincetx }: Omit<messages.KeyRequest.AsObject, 'attx'>) {
    return await this.verifiedGet({ key, sincetx })
  }

  async updateAuthConfig(params: messages.AuthConfig.AsObject): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.AuthConfig();
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

  async updateMTLSConfig(params: messages.MTLSConfig.AsObject): Promise<empty.Empty | undefined> {
    try {
      const req = new messages.MTLSConfig();
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

  async txById({ tx }: messages.TxRequest.AsObject): Promise<messages.Tx.AsObject | undefined> {
    try {
      const req = new messages.TxRequest();

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

  async verifiedTxById({ tx }: messages.TxRequest.AsObject): Promise<messages.Tx.AsObject | undefined> {
    try {
      const state = await this.state.get({ databaseName: this._activeDatabase, serverName: this._serverUUID, metadata: this._metadata })

	    const txid = state.getTxid()
	    const txhash = state.getTxhash_asU8()
      const req = new messages.VerifiableTxRequest()

      req.setTx(tx)
      req.setProvesincetx(txid)

      return new Promise((resolve, reject) => this.client.verifiableTxById(req, this._metadata, (err, res) => {
        if (err) {
          console.error('verifiedTxById error', err)

          reject(err)
        } else {
          const dp = res.getDualproof()

          if (dp === undefined) {
            console.error('Error getting verifiedTxById dualProof')

            reject()
          } else {
            const dualProof = dualProofFrom(dp.toObject())
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
                  targetAlh = getAlh(targettxmetadata)
                } else {
                  sourceId = resTxId
                  sourceAlh = getAlh(sourcetxmetadata)
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
                  metadata: this._metadata
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
    } catch(err) {
      console.error(err)
    }
  }

  async txScan(params: messages.TxScanRequest.AsObject): Promise<messages.TxList.AsObject | undefined> {
    try {
      const req = new messages.TxScanRequest();

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

  async cleanIndex (): Promise<empty.Empty | undefined> {
    try {
      const req = new empty.Empty()

      return new Promise((resolve, reject) => this.client.cleanIndex(req, this._metadata, (err, res) => {
        if (err) {
          console.error('cleanIndex error', err);
          
          reject(err);
        } else {
          resolve(res)  
        }
      }))
    } catch(err) {
      console.error(err);
    }
  }
}

export default ImmudbClient;
