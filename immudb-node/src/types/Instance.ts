



export type ServerInfo = {
    /**
     * Status of immudb inistance:
     * * ok --> true
     * * something wrong --> false
     */
    status: boolean;
    /**
     * Version of instance.
     */
    version: string;
}