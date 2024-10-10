import { Metadata } from '@grpc/grpc-js';
import fs from 'fs'

import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';

type Server = { [key: string]:  schemaTypes.ImmutableState.AsObject }
type Servers = { [key: string]: Server }
type StateGetMetadata = {
    serverName: string
    databaseName: string
    metadata: Metadata
}
type StateSetMetadata = {
    serverName: string
    databaseName: string
}

type StateConfig = {
    client: services.ImmuServiceClient
    rootPath?: string
}

enum Signals {
    EXIT = 'exit',
    SIGINT = 'SIGINT',
    UNCAUGHT_EXCEPTION = 'uncaughtException'
}

class State {
    public servers: Servers
    public client: services.ImmuServiceClient
    public rootPath: string

    constructor({ client, rootPath = 'root' }: StateConfig) {
        const handleExit = () => {
            this.exitHandler()
        }
        (process as NodeJS.EventEmitter).on(Signals.EXIT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.SIGINT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.UNCAUGHT_EXCEPTION, handleExit);

        this.client = client
        this.rootPath = rootPath

        this.servers = this.getInitialState()
    }

    async get (config: StateGetMetadata): Promise<schemaTypes.ImmutableState> {
        const { serverName, databaseName } = config
        const server = this.servers[serverName]

        if (server !== undefined) {
            const state = server[databaseName]

            if (state !== undefined || Object.keys(state).length === 0) {
                const { db, txid, txhash, signature } = state
                const iState = new schemaTypes.ImmutableState()

                iState.setDb(db)
                iState.setTxid(txid)
                iState.setTxhash(txhash)
                
                if (signature !== undefined) {
                    const sgntr = new schemaTypes.Signature()

                    sgntr.setSignature(signature.signature)
                    sgntr.setPublickey(signature.publickey)

                    iState.setSignature(sgntr)
                }

                return iState
            } else {
                return await this.getCurrentState(config)
            }
        } else {
            return await this.getCurrentState(config)
        }
    }

    async getCurrentState(config: StateGetMetadata): Promise<schemaTypes.ImmutableState> {
        const { databaseName, metadata } = config
        return new Promise((resolve, reject) => this.client.currentState(new empty.Empty(), metadata, (err, res) => {
            if (err) {
                reject(err);
            }

            const stateObject: schemaTypes.ImmutableState.AsObject = {
                db: res.getDb(),
                txid: res.getTxid(),
                txhash: res.getTxhash_asU8(),
                signature: res.getSignature()?.toObject()
            };
            const state = new schemaTypes.ImmutableState()
            const sgntr = new schemaTypes.Signature()

            if (stateObject.signature !== undefined) {
                sgntr.setSignature(stateObject.signature.signature)
                sgntr.setPublickey(stateObject.signature.publickey)
            }

            state.setDb(databaseName)
            state.setTxid(stateObject.txid)
            state.setTxhash(stateObject.txhash)
            state.setSignature(sgntr)

            this.set(config, stateObject);

            resolve(state);
        }))
    }
 
    set ({ serverName, databaseName }: StateSetMetadata, state: schemaTypes.ImmutableState.AsObject) {
        const server = this.servers[serverName] || {} as Server
        
        server[databaseName] = state
        this.servers[serverName] = server

        this.commit();
    }
    
    getInitialState(): Servers {
        try {
            if (fs.existsSync(this.rootPath)) {
                const rawdata = fs.readFileSync(this.rootPath, 'utf-8')

                return this.parseServers(rawdata)
            } else {
                return {} as Servers;
            }     
        } catch(err) {
            console.error(err)
            throw new Error('Error getting initial state')
        }
    }

    commit() {
        try {
            const data = this.stringifyServers()

            fs.writeFileSync(this.rootPath, data)
        } catch (err) {
            console.error(err)
        }
    }

    exitHandler() {
        this.commit()
    }

    stringifyServers() {
        const serverNames = Object.keys(this.servers)

        const servers = serverNames.reduce((sAcc, serverName) => {
            const databaseNames = Object.keys(this.servers[serverName])

            const databases = databaseNames.reduce((dAcc, databaseName) => {
                const state = this.servers[serverName][databaseName]
                const txhash = Array.from(state.txhash as Uint8Array)
                const newState = Object.assign({}, state, { txhash })

                return Object.assign({}, dAcc, { [databaseName]: newState })
            }, {})

            return Object.assign({}, sAcc, { [serverName]: databases })
        }, {})

        return JSON.stringify(servers)
    }

    parseServers(stringifiedServers: string): Servers {
        const data = JSON.parse(stringifiedServers)
        const serverNames = Object.keys(data)

        const servers = serverNames.reduce((sAcc, serverName) => {
            const databaseNames = Object.keys(data[serverName])

            const databases = databaseNames.reduce((dAcc, databaseName) => {
                const state = data[serverName][databaseName]
                const txhash = new Uint8Array(state.txhash)
                const newState = Object.assign({}, state, { txhash })

                return Object.assign({}, dAcc, { [databaseName]: newState })
            }, {})

            return Object.assign({}, sAcc, { [serverName]: databases })
        }, {})

        return servers
    }
}

export default State