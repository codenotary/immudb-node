import messages, { ImmutableState } from './proto/schema_pb';
import ImmudbClient from './client';
declare type Server = Map<string, messages.ImmutableState>;
declare type Servers = Map<string, Server>;
declare type StateConfig = {
    serverName: string;
    databaseName: string;
};
declare type StateParams = {
    client: ImmudbClient;
    rootPath: string;
};
declare class State {
    servers: Servers;
    rootPath: string;
    client: ImmudbClient;
    constructor({ client, rootPath }: StateParams);
    set({ serverName, databaseName }: StateConfig, { db, txid, txhash, signature }: ImmutableState.AsObject): void;
    get(stateConfig: StateConfig): Promise<ImmutableState>;
    setCurrentState({ serverName, databaseName }: StateConfig): Promise<void>;
    getStateFromFile(): Promise<void>;
    commit(): void;
    exitHandler(): void;
}
export default State;
