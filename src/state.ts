import * as messages from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';
import { rejects } from 'assert';

type Server = Map<string, messages.ImmutableState>
type Servers = Map<string, Server>
type StateConfig = {
    serverName: string
    databaseName: string
}

const getEmptyState = (databaseName: string): messages.ImmutableState.AsObject => ({
    db: databaseName,
    txhash: new Uint8Array(),
    txid: 0
})

class State {
    public servers: Servers = new Map()
    public client: services.ImmuServiceClient

    constructor(client: services.ImmuServiceClient) {
        this.client = client
    }

    async get (config: StateConfig): Promise<messages.ImmutableState> {
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

    async getCurrentState(config: StateConfig): Promise<messages.ImmutableState> {
        const { databaseName } = config
        return new Promise((resolve, reject) => this.client.currentState(new empty.Empty(), (err, res) => {
            if (err) {
                reject(err);
            } else {
                const stateObject = res ? res.toObject() : getEmptyState(databaseName);
                const state = new messages.ImmutableState()
                const sgntr = new messages.Signature()

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
            }
        }))
    }
 
    set ({ serverName, databaseName }: StateConfig, { db, txid, txhash, signature }: messages.ImmutableState.AsObject) {
        const server = this.servers.get(serverName) || new Map() as Server
        const state = new messages.ImmutableState()
        const sgntr = new messages.Signature()

        if (signature !== undefined) {
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

    // TODO: implement
    commit() {}
    exitHandler() {}
}

export default State