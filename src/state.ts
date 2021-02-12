import * as messages from './proto/schema_pb';
import * as services from './proto/schema_grpc_pb';
import * as empty from 'google-protobuf/google/protobuf/empty_pb';
import { rejects } from 'assert';

type Server = Map<string, messages.ImmutableState.AsObject | empty.Empty>
type Servers = Map<string, Server>
type StateConfig = {
    serverName: string
    databaseName: string
}

class State {
    public servers: Servers = new Map()
    public client: services.ImmuServiceClient

    constructor(client: services.ImmuServiceClient) {
        this.client = client
    }

    async get (config: StateConfig): Promise<messages.ImmutableState.AsObject | empty.Empty> {
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

    async getCurrentState(config: StateConfig): Promise<messages.ImmutableState.AsObject | empty.Empty> {
        return new Promise((resolve, reject) => this.client.currentState(new empty.Empty(), (err, res) => {
            if (err) {
                reject(err);
            } else {
                const state = res.toObject();

                this.set(config, state);
                resolve(state);
            }
        }))
    }
 
    set ({ serverName, databaseName }: StateConfig, state: messages.ImmutableState.AsObject| empty.Empty) {
        const server = this.servers.get(serverName) || new Map()

        server.set(databaseName, state)

        this.servers.set(serverName, server)
    }

    // TODO: implement
    commit() {}
    exitHandler() {}
}

export default State