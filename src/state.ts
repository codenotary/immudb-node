import { Metadata } from 'grpc';
import fs from 'fs'

import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';
import { utf8Decode, utf8Encode } from './util';

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
            // this.exitHandler()
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
    }

    // commit() {
    //     try {
    //         const data = prepareDataForWritingToFile(this.servers)

    //         console.log('prepared data', data)

    //         fs.writeFileSync(this.rootPath, JSON.stringify(data), 'utf-8')
    //     } catch(err) {
    //         console.error(err)
    //         throw new Error('Error writing state to file')
    //     }
    // }

    // exitHandler() {
    //     try {
    //         this.commit()
    //     } catch(err) {
    //         console.error(err)
    //         throw new Error('Error in state exit handler')
    //     }
    // }
    
    getInitialState(): Servers {
        try {
            if (fs.existsSync(this.rootPath)) {
                const rawdata = fs.readFileSync(this.rootPath, 'utf-8')

                return JSON.parse(rawdata) as Servers
            } else {
                return {} as Servers;
            }     
        } catch(err) {
            console.error(err)
            throw new Error('Error getting initial state')
        }
    }
}

export default State