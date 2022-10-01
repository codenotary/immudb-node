

/**
 * User credentials needed for immudb session.
 */
export type UserSessionCredentials = {
    /**
     * Name of user.
     */
    user: string,
    /**
     * User password.
     */
    password: string,
}


/**
 * Information needed to connect user with immudb database.
 */
export type UserDatabaseSession = UserSessionCredentials & {
    /**
     * Name of database for user session
     */
    database: string,
}


/**
 * Represents immudb user session tokens
 */
export type SessionTokens = {
    /**
     * Token of immudb server user session.
     */
    sessionid: string,
    /**
     * Token of immudb server.
     */
    'immudb-uuid': string;
}


/**
 * Represents immudb user session transaction token
 */
 export type TransactionTokens = {
    /**
     * Token of immudb server user session transaction.
     */
    transactionid: string,
    
}