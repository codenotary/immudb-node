import fs from 'fs';
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

    public servers: Servers
    public rootPath: string;
    public client: ImmudbClient

    constructor ({ client, rootPath }: StateParams) {
        (process as NodeJS.EventEmitter).on(Signals.EXIT, this.exitHandler);
        (process as NodeJS.EventEmitter).on(Signals.SIGINT, this.exitHandler);
        (process as NodeJS.EventEmitter).on(Signals.UNCAUGHT_EXCEPTION, this.exitHandler);

        this.servers = new Map()

        this.client = client
        this.rootPath = rootPath

        this.getStateFromFile()
    }
    
    set ({ serverName, databaseName }: StateConfig, { db, txid, txhash, signature }: ImmutableState.AsObject) {
		try {
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
		} catch (err) {
			console.error(err);
		}
    }

    async get (stateConfig: StateConfig): Promise<ImmutableState> {
		try {
			const { serverName, databaseName } = stateConfig;
			const server: Server | undefined = this.servers.get(serverName);

			if (server !== undefined) {
				const state = server.get(databaseName);

				if (state !== undefined) {
					return state;
				} else {
					this.setCurrentState(stateConfig);

					return this.get(stateConfig);
				}
			} else {
				this.setCurrentState(stateConfig);
				
				return this.get(stateConfig);
			}
		} catch (err) {
			return new Promise((reject) => reject(err));
		}
    }

    async setCurrentState({ serverName, databaseName }: StateConfig) {
		try {
			const currentState: messages.ImmutableState.AsObject = await this.client.currentState() || new messages.ImmutableState().toObject();
			
			this.set({ serverName, databaseName }, currentState)
		} catch (err) {
			return new Promise((reject) => reject(err));
		}
    }

    async getStateFromFile () {
		try {
			if (fs.existsSync(this.rootPath)) {
				const rawdata = fs.readFileSync(this.rootPath, 'utf-8')
				const dataEntries: [string, Server][] = Object.entries(JSON.parse(rawdata))
				
				this.servers = new Map(dataEntries);
			}
		} catch (err) {
			return new Promise((reject) => reject(err));
		}
    }

    commit () {
		try {
			const data = JSON.stringify(this.servers)
	
			fs.writeFileSync(this.rootPath, data)
		} catch (err) {
			return new Promise((reject) => reject(err));
		}
    }

    exitHandler () {
		try {
			if (this.rootPath) {
			  this.commit()
			}
		} catch (err) {
			return new Promise((reject) => reject(err));
		}
	}
}




export default State;