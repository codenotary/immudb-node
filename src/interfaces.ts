import { StatePersistenceTypes } from "./state"
export interface Certs {
    privateKey: string;
    cercChain?: string;
}

export interface Config {
    host: string;
    port: string | number;
    user?: string;
    password?: string;
    database?: string;
    rootPath?: string;
    certs?: Certs;
    secure?: boolean;
    autoLogin?: boolean;
    autoDatabase?: boolean;
    statePersistenceType?: StatePersistenceTypes
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
