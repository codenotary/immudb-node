import { DatabasePermission } from "./Permission.js";
import Long from "long"





export type UserInfo = {
    /**
     * Name of immudb instance user
     */
    username: string;
    /**
     * Name of immudb instance user which created this user
     */
    createdBy: string;
    /**
     * Date when immudb instance user was created
     */
    createdDate: Date;
    /**
     * Is this immudb instance user active
     */
    active: boolean;
    /**
     * Immudb instance user permissions for databases
     */
    permissions: DatabasePermission[];
}



export type UserCredentials = {
    /**
     * Name of immudb instance user
     */
    username: string;
    /**
     * Password
     */
    password: string;
}