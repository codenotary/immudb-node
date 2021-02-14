import { Metadata } from 'grpc';
import fs from 'fs'

import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';

type Server = Map<string, schemaTypes.ImmutableState>
type Servers = Map<string, Server>
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
        const server = this.servers.get(serverName)

        if (server !== undefined) {
            const state = server.get(databaseName)

            if (state !== undefined) {
                return state
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

            const stateObject = res.toObject();
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
 
    set ({ serverName, databaseName }: StateSetMetadata, { db, txid, txhash, signature }: schemaTypes.ImmutableState.AsObject) {
        const server = this.servers.get(serverName) || new Map() as Server
        const state = new schemaTypes.ImmutableState()
        const sgntr = new schemaTypes.Signature()

        if (signature) {
            sgntr.setSignature(signature.signature)
            sgntr.setPublickey(signature.publickey)
        }

        state.setDb(db)
        state.setTxid(txid)
        state.setTxhash(txhash)
        state.setSignature(sgntr)

        server.set(databaseName, state)

        this.servers.set(serverName, server)
    }

    commit() {
        try {
            const data = JSON.stringify(this.servers)

            fs.writeFileSync(this.rootPath, data, 'utf-8')
        } catch(err) {
            console.error(err)
            throw new Error('Error writing state to file')
        }
    }

    exitHandler() {
        try {
            this.commit()
        } catch(err) {
            console.error(err)
            throw new Error('Error in state exit handler')
        }
    }
    
    getInitialState() {
        try {
            const initialStateEntriesGetter = () => {
                if (fs.existsSync(this.rootPath)) {
                    const rawdata = fs.readFileSync(this.rootPath, 'utf-8')
                    const dataEntries: [string, Server][] = Object.entries(JSON.parse(rawdata))

                    return dataEntries
                } else {
                    return [];
                }                
            }

            return new Map(initialStateEntriesGetter())
        } catch(err) {
            console.error(err)
            throw new Error('Error getting initial state')
        }
    }
}

export default State