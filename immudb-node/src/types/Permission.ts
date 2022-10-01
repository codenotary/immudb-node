


export type Permission = PermissionCode | KnownPermissionName
export type PermissionCode = number
export type KnownPermissionName = 'ReadWrite' | 'None' | 'Read' | 'Admin' | 'SysAdmin'





/**
 * Permission for database
 */
 export type DatabasePermission = {
    /**
     * Database name
     */
    database: string;
    /**
     * Permission known name or code
     */
    permission: Permission;
}


export type UserPermission = {
    /**
     * Name of immudb instance user
     */
    username: string;
     /**
     * Database name
     */
    database: string;
    /**
     * Permission known name or code
     */
    permission: Permission;
    
}

