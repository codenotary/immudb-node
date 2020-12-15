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
export declare enum Action {
    Grant = 0,
    Revoke = 1
}
export declare enum Permission {
    NONE = 0,
    READ_ONLY = 1,
    READ_WRITE = 2
}
export declare enum Auth {
    Disabled = 0,
    Enabled = 1
}
export declare namespace SimpleZAddOptions {
    type AsObject = {
        set: Uint8Array | string;
        score?: number;
        key: Uint8Array | string;
        index?: number;
    };
}
