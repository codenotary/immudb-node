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

export enum Permission {
    NONE = 0,
    READ_ONLY = 1,
    READ_WRITE = 2
}

export enum Auth {
    DISABLED = 0,
    ENABLED = 1
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
