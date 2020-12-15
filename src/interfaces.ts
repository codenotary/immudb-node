export interface Certs {
    privateKey: string;
    cercChain?: string;
}

export interface Config {
    host: string;
    port: string;
    rootPath?: string;
    certs?: Certs;
    secure?: boolean;
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
    Disabled,
    Enabled
}

export namespace SimpleZAddOptions {
    export type AsObject = {
        set: Uint8Array | string,
        score?: number,
        key: Uint8Array | string,
        index?: number
    }
}

