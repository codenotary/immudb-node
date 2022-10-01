import type * as immu from './types/index.js'




export function permissionToKnownIfPossible(
    permission: immu.KnownPermissionName
): immu.Permission {
    if(typeof permission === 'string') {
        return permission
    }

    return permissionFromCode(permission)
}



export function permissionFromCode(
    code: number
): immu.Permission {
    const map: Record<
        number, 
        immu.KnownPermissionName | undefined
    > = knownPermissionCodeToName
    return map[code] ?? code
}


export function permissionToCode(
    permission: immu.Permission
): immu.PermissionCode {
    return typeof permission === 'number' 
        ? permission 
        : knownPermissionNameToCode[permission]
}






/**
 * Permission names to codes.
 */
 export const knownPermissionNameToCode = {
    /**
     * No permissions
     */
    None: 0,
    /**
     *Permission to read database
     */
    Read: 1,
    /**
     * Permission to read and write database
     */
    ReadWrite: 2,

    /**
     * Permission to read, write and administer database
     */
    Admin: 254,
    /**
     * Permission to read, write and administer all databases
     */
    SysAdmin: 255,
} as const



/**
 * Inverts const maps, e.g.
 * 
 * @example
 * Invert<{None: 0, Sth: 1} as const>
 * // -> {1: 'None', 2: 'Sth'} as const
 */
export type Invert<T extends Record<PropertyKey, PropertyKey>> = {
    [P in keyof T as T[P]]: P
}


export const knownPermissionCodeToName: Invert<typeof knownPermissionNameToCode> = {
    /**
     * No permissions
     */
    0: 'None',
    /**
     *Permission to read database
     */
    1: 'Read',
    /**
     * Permission to read and write database
     */
    2: 'ReadWrite',

    /**
     * Permission to read, write and administer database
     */
    254: 'Admin',
    /**
     * Permission to read, write and administer all databases
     */
     255: 'SysAdmin',
} as const

