export interface Certs {
    privateKey: string;
    cercChain?: string;
}

export interface Config {
    host: string;
    port: string;
    user?: string;
    password?: string;
    database?: string;
    rootPath?: string;
    certs?: Certs;
    secure?: boolean;
    autoLogin?: boolean;
    autoDatabase?: boolean;
}

export enum Action {
    Grant,
    Revoke
}

export enum Permission {
    NONE = 0,
    READ_ONLY = 1,
    READ_WRITE = 2
}

export enum Auth {
    DISABLED = 0,
    ENABLED = 1
}

export namespace SimpleZAddOptions {
    export type AsObject = {
        set: Uint8Array | string,
        score?: number,
        key: Uint8Array | string,
        index?: number
    }
}

