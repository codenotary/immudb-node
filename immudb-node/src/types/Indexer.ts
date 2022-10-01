import Long from "long"



/**
 * Entry and additional information from immudb server indexer.
 * 
 */
 export type IndexerInfo = {
    /** 
     * Entry indexer context - entry revision.
     * 
     * (Assuming that for same key (different) values was set
     * multiple times, `revision` number is sequence number of
     * set operation.)
     */
    revision:       Long,
    /** 
     * Entry indexer context - is entry expired?
     * 
     * If `true` than entry metadata expiresAt
     */
    expired?:        boolean,
}



