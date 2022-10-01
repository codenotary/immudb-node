import { Buffer } from 'node:buffer'
import Long from 'long'



/**
 * Key value condition, one of 3 possible conditions:
 * - key must exist taking as argument some key,
 * - key must not exist taking as arugment some key,
 * - key must not be modified arter transaction with id taking as
 *   argument some key and id of transaction.
 */
export type ValOrRefKeyPrecondition = 
    | ValOrRefKeyPreconditionKeyExist
    | ValOrRefKeyPreconditionKeyNotExist
    | ValOrRefKeyPreconditionKeyNotModified

/** Key must exist condition. */
export type ValOrRefKeyPreconditionKeyExist = {
    type: 'key-must-exist',
    key: Buffer,
}


/** Key must exist condition. */
export type ValOrRefKeyPreconditionKeyNotExist = {
    type: 'key-must-not-exist',
    key: Buffer,
}

/** Key must not be modified since transaction with id condition. */
export type ValOrRefKeyPreconditionKeyNotModified = {
    type: 'key-must-not-be-modified',
    key: Buffer,
    txId: Long,
}

