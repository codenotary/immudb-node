import fs, { stat, Stats } from 'fs';
import process from 'process';
import messages, { ImmutableState, Signature } from './proto/schema_pb';
import ImmudbClient from './client';

enum Signals {
    EXIT = 'exit',
    SIGINT = 'SIGINT',
    UNCAUGHT_EXCEPTION = 'uncaughtException'
}

type Server = Map<string, messages.ImmutableState>
type Servers = Map<string, Server>
type StateConfig = {
    serverName: string
    databaseName: string
}
type StateParams = {
    client: ImmudbClient
    rootPath: string
}

class State {

    public servers: Servers = new Map()
    public rootPath: string;
    public client: ImmudbClient

    constructor ({ client, rootPath }: StateParams) {
        (process as NodeJS.EventEmitter).on(Signals.EXIT, this.exitHandler);
        (process as NodeJS.EventEmitter).on(Signals.SIGINT, this.exitHandler);
        (process as NodeJS.EventEmitter).on(Signals.UNCAUGHT_EXCEPTION, this.exitHandler);

        this.client = client
        this.rootPath = rootPath

        this.initState()
    }
    
    set ({ serverName, databaseName }: StateConfig, { db, txid, txhash, signature }: ImmutableState.AsObject) {
        const currentServer: Server = this.servers.get(serverName) || new Map();
        const state = new messages.ImmutableState();
        const sgntr = new Signature();            

        if (signature !== undefined) {
            sgntr.setSignature(signature.signature)
        }

        state
            .setDb(db)
            .setTxid(txid)
            .setTxhash(txhash)
            .setSignature(sgntr);

        currentServer.set(databaseName, state)

        this.servers.set(serverName, currentServer)
    }

    async get (stateConfig: StateConfig): Promise<ImmutableState.AsObject> {
        const { serverName, databaseName } = stateConfig;
        const server: Server | undefined = this.servers.get(serverName);

        if (server !== undefined) {
            const state = server.get(databaseName);

            if (state !== undefined) {
                return state.toObject();
            } else {
                this.setCurrentState(stateConfig);

                return this.get(stateConfig);
            }
        } else {
            this.setCurrentState(stateConfig);
            
            return this.get(stateConfig);
        }
    }

    async setCurrentState({ serverName, databaseName }: StateConfig) {
        const currentState: messages.ImmutableState.AsObject = await this.client.currentState() || new messages.ImmutableState().toObject();

        this.set({ serverName, databaseName }, currentState)
    }

    initState () {
        if (fs.existsSync(this.rootPath)) {
            const rawdata = fs.readFileSync(this.rootPath, 'utf-8')
            
            this.servers = JSON.parse(rawdata)
        }
    }

    commit () {
        const data = JSON.stringify(this.servers)

        fs.writeFileSync(this.rootPath, data)
    }

    exitHandler () {
        if (this.rootPath) {
          this.commit()
        }
    }
}




export default State;