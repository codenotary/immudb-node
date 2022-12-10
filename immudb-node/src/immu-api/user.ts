import type * as igrpc from '@codenotary/immudb-node-grpcjs'
import type * as immu from '../types/index.js'
import * as ip from '../immu-permission.js'
import * as grpcjs from '@grpc/grpc-js'
import * as immuGrpc from '../immu-grpc/index.js'
import { Buffer } from 'node:buffer'






export function createListUsers(client: igrpc.ImmuServiceClient) {
    const sqlQueryGrpc = immuGrpc.unaryCall.createListUsers(client)

    
    return function sqlQuery(props: {
        credentials: grpcjs.CallCredentials,
    }) {

        return sqlQueryGrpc({
            request: {
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('UserList__Output must be defined')
        )
        .then(grpcUsers => grpcUsers.users.map(grpcUserInfoToUserInfo))
    }
}





/**
 * Transforms User__Output to more friendly object.
 */
function grpcUserInfoToUserInfo(userResponse: igrpc.User__Output): immu.UserInfo {
    
    return {
        
        username:       userResponse.user.toString(),
        createdBy:      userResponse.createdby,
        createdDate:    new Date(userResponse.createdat),
        active:         userResponse.active,
        permissions:    userResponse.permissions.map(grpcPermissionToDatabasePermission)
    }
}


/**
 * Transforms grpc user permissions to more friendly output.
 */
function grpcPermissionToDatabasePermission(
    p: igrpc.Permission__Output
): immu.DatabasePermission {
    return {
        database:       p.database,
        permission:     ip.permissionFromCode(p.permission),
    }
}






export type CreateUsersProps = {
    /**
     * Name of new user. Must be unique.
     */
    username: string,
     /**
      * Password of new user. Password must have between 8 and 32 letters,
      * digits and special characters of which at least 1 uppercase letter, 1
      * digit and 1 special character.
      */
    password: string,
     /**
      * New user database name for which she will have permission
      */
    database: string,
     /**
      * Permission given to new user on selected database.
      * New user creator must have permissions for giving permissions
      * on selected database.
      */
    permission: immu.Permission
}


export function createCreateUser(client: igrpc.ImmuServiceClient) {
    const createUsersGrpc = immuGrpc.unaryCall.createCreateUsers(client)

    
    return function createUsers(props: CreateUsersProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return createUsersGrpc({
            request: {
                database:   props.database,
                user:       Buffer.from(props.username),
                password:   Buffer.from(props.password),
                permission: ip.permissionToCode(props.permission)
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Empty__Output must be defined')
        )
        .then(_ => {
            const res: immu.UserCredentials & immu.DatabasePermission = props
            return res
        })
    }
}




export type SetUserPasswordProps = {
    /**
     * Name of new user. Must be unique.
     */
    username: string,
     /**
      * Actual password
      */
    password: string,
     /**
      * New password. Must have between 8 and 32 letters, digits and special
      * characters of which at least 1 uppercase letter, 1 digit and 1 special
      * character.
      */
    newPassword: string,
}


export function createSetUserPassword(client: igrpc.ImmuServiceClient) {
    const changePasswordGrpc = immuGrpc.unaryCall.createChangePassword(client)

    
    return function setUserPassword(props: SetUserPasswordProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return changePasswordGrpc({
            request: {
                user:           Buffer.from(props.username),
                oldPassword:    Buffer.from(props.password),
                newPassword:    Buffer.from(props.newPassword),
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Empty__Output must be defined')
        )
        .then(_ => props.username)
    }
}



export type SetUserActiveProps = {
    /**
     * Name of existing user.
     */
    username: string,
     /**
      * Should user be active?
      */
    active: boolean,
}


export function createSetUserActive(client: igrpc.ImmuServiceClient) {
    const setActiveUserGrpc = immuGrpc.unaryCall.createSetActiveUser(client)

    
    return function setUserActive(props: SetUserActiveProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return setActiveUserGrpc({
            request: {
                username:       props.username,
                active:         props.active,
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Empty__Output must be defined')
        )
        .then(_ => props)
    }
}



export type SetUserDbPermissionsProps = {
    /**
     * Name of existing user for whome database permission is to be applied.
     */
    username: string,
     /**
      * Database for with user permission is to be applied.
      */
    database: string,
     /**
      * New permissions for user.
      */
    permission: immu.KnownPermissionName,
    /**
     * 
     */
    grantRevoke: 'GRANT' | 'REVOKE'
}


export function createSetUserDbPermissions(client: igrpc.ImmuServiceClient) {
    const changePermissionGrpc = immuGrpc.unaryCall.createChangePermission(client)

    
    return function setUserDbPermissions(props: SetUserDbPermissionsProps & {
        credentials: grpcjs.CallCredentials,
    }) {

        return changePermissionGrpc({
            request: {
                action:         props.grantRevoke,
                username:       props.username,
                database:       props.database,
                permission:     ip.permissionToCode((props.permission)),
            },
            options: {
                credentials: props.credentials,
            },
        })
        .then(maybeResponse => maybeResponse 
            ? maybeResponse 
            : Promise.reject('Empty__Output must be defined')
        )
        .then(_ => props)
    }
}

