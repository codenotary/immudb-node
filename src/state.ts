import { Metadata } from 'grpc-web';
import fs from 'fs'

import * as schemaTypes from './proto/schema_pb';
import * as services from './proto/SchemaServiceClientPb';
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
    statePersistenceType: StatePersistenceTypes
}

enum Signals {
    EXIT = 'exit',
    SIGINT = 'SIGINT',
    UNCAUGHT_EXCEPTION = 'uncaughtException'
}

export enum StatePersistenceTypes {
    FILE = 'file',
    COOKIE = 'cookie',
    LOCALSTORAGE = 'localStorage',
    INDEXEDDB = 'indexedDB'
}

class State {
    public servers: Servers
    public client: services.ImmuServiceClient
    public rootPath: string
    public statePersistenceType: StatePersistenceTypes

    constructor({ client, rootPath = 'root', statePersistenceType }: StateConfig) {
        const handleExit = () => {
            this.exitHandler()
        }
        (process as NodeJS.EventEmitter).on(Signals.EXIT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.SIGINT, handleExit);
        (process as NodeJS.EventEmitter).on(Signals.UNCAUGHT_EXCEPTION, handleExit);

        this.client = client
        this.rootPath = rootPath
        this.statePersistenceType = statePersistenceType

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
    
    getInitialState(): Servers {
        try {
            return this.statePersistenceType === StatePersistenceTypes.COOKIE
                ? this.getStateFromCookie()
                : this.statePersistenceType === StatePersistenceTypes.LOCALSTORAGE
                    ? this.getStateFromLocalStorage()
                    : this.getStateFromFile();
        } catch(err) {
            console.error(err)
            throw new Error('Error getting initial state')
        }
    }

    commit(): void {
        try {
            const data = this.stringifyServers()

            this.statePersistenceType === StatePersistenceTypes.COOKIE
                ? this.setStateInCookie(data)
                : this.statePersistenceType === StatePersistenceTypes.LOCALSTORAGE
                    ? this.setStateInLocalStorage(data)
                    : this.setStateInFile(data);
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

    private getStateFromCookie(): Servers {
        var name = `${this.rootPath}=`;
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return this.parseServers(c.substring(name.length, c.length));
            }
        }
        return {} as Servers
    }

    // TODO: @Temii implement localStorage state persistence handling
    private getStateFromLocalStorage(): Servers {
        return {} as Servers
    }

    // TODO: @Temii implement IndexedDB state persistence handling
    private getStateFromIndexedDB(): Servers {
        return {} as Servers
    }

    private getStateFromFile(): Servers {
        if (fs.existsSync(this.rootPath)) {
            const rawdata = fs.readFileSync(this.rootPath, 'utf-8')

            return this.parseServers(rawdata)
        } else {
            return {} as Servers;
        }
    }

    private setStateInFile(data: string): void {
        fs.writeFileSync(this.rootPath, data)
    }

    private setStateInCookie(data: string): void {
        const date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;

        document.cookie = `${this.rootPath}=${data};${expires};path=/;samesite=strict;`;
    }

    // TODO: @Temii implement localStorage state persistence handling
    private setStateInLocalStorage(data: string): void {}

    // TODO: @Temii implement IndexedDB state persistence handling
    private setStateInIndexedDB(data: string): void {}
}

export default State