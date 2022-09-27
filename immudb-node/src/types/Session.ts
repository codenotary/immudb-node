

/**
 * User credentials needed for ImmuDb session.
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
 * Informations needed to connect user with ImmuDb database.
 */
export type UserDatabaseSession = UserSessionCredentials & {
    /**
     * Name of database for user session
     */
    database: string,
}


/**
 * Represents ImmuDb user session tokens
 */
export type SessionTokens = {
    /**
     * Token of ImmuDb server user session.
     */
    sessionid: string,
    /**
     * Token of ImmuDb server.
     */
    'immudb-uuid': string;
}


/**
 * Represents ImmuDb user session transaction token
 */
 export type TransactionTokens = {
    /**
     * Token of ImmuDb server user session transaction.
     */
    transactionid: string,
    
}