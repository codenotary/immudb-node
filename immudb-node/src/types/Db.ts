import Long from "long"



export type DBRuntimeInfo = {
    /**
     * Name of immudb instance database
     */
    database: string;
    /**
     * Databases can be dynamically loaded and unloaded without having to
     * restart the server. After the database is unloaded, all its resources are
     * released. Unloaded databases cannot be queried or written to
     */
    isLoaded: boolean;
    /**
     * Database settings
     */
    settings: DatabaseSettings;
}


/**
 * Database settings.
 * 
 * > **NOTE**
 * > 
 * > Following settings cannot be updated after database creation:
 * > * fileSize, 
 * > * maxKeyLen, 
 * > * maxValueLen, 
 * > * maxTxEntries,
 * > * indexOptions.maxNodeSize
 * 
 */
export type DatabaseSettings = DatabaseSettingsReadonly & DatabaseSettingsUpdatable


/**
 * Database changable settings
 */
export type DatabaseSettingsUpdatable = {
    /**
     * Should database be automatically loaded?:
     * * (default) yes -> leave this value undefined or set to true
     * * no -> set this value to false
     */
    autoload?:                  boolean,
    /**
     * maximum number of open files for commit log
     */
    commitLogMaxOpenedFiles?:   number,

    /**
     * if set to true, commit time is not added to transaction headers allowing
     * reproducible database state
     */
    excludeCommitTime?:          boolean,

    

    /**
     * Indexing settings
     */
    indexSettings:              IndexSettingsUpdatable,

    /**
     * max number of concurrent operations on the db
     */
    maxConcurrency?:            number,
    /**
     * max number of concurrent IO operations on the db
     */
    maxIOConcurrency?:          number,
    
    /**
     * Repliation settings
     */
    replicationSettings:        ReplicationSettings,

    /**
     * size of transaction log cache
     */
    txLogCacheSize?:            number,
    /**
     * maximum number of open files for transaction log
     */
    txLogMaxOpenedFiles?:       number,
    /**
     * maximum number of open files for payload data
     */
    vLogMaxOpenedFiles?:        number,
    /**
     * transaction header version, used for backwards compatibility
     */
    writeTxHeaderVersion?:      number,
}




/**
 * Database unchangable settings
 */
export type DatabaseSettingsReadonly = {
    
    /**
     * default storage layer implementation writes data into fixed-size files,
     * default size being 512MB. The current theoretical maximum number of files
     * is 100 millions.
     */
    fileSize?:                  number,

    /**
     * Indexing settings
     */
    indexSettings:              IndexSettingsReadonly,

    
    /**
     * maximum length of keys for entries stored in the database.
     * 
     * max maxKeyLen: 1024 Bytes (2^31-1 bytes)
     * 
     */
    maxKeyLen?:                 number,
    /**
     * In order to provide manageable limits, immudb is designed to set an upper
     * bound to the number of key-value pairs included in a single transaction.
     * The default value being 1024, so using default settings, the theoretical
     * number of key-value pairs that can be stored in immudb is: 1024 * (1^64 -
     * 1).
     * 
     */
    maxTxEntries?:              number,
    /**
     * maximum length of value for entries stored in the database.
     * 
     * Max maxValueLen: 32 MB (2^56-1 bytes)
     */
    maxValueLen?:               number,

}



/**
 * Replication settings
 */
export type ReplicationSettings = {
    /**
     * password used to connect to the master immudb instance
     */
    followerPassword?:   string,
    /**
     * username used to connect to the master immudb instance
     */
    followerUsername?:   string,
    /**
     * hostname of the master immudb instance
     */
    masterAddress?:      string,
    /**
     * name of the database to replicate
     */
    masterDatabase?:     string,
    /**
     * tcp port of the master immudb instance
     */
    masterPort?:         number,
    /**
     * if true, the database is a replica of another one
     */
    replica?:            boolean,
}



/**
 * Indexing settings
 */
export type IndexSettings = IndexSettingsUpdatable & IndexSettingsReadonly



/**
 * Indexing unchangable settings
 */
export type IndexSettingsReadonly = {
    /**
     * max size of btree node in bytes
     */
    maxNodeSize?:                number,
}




export type IndexSettingsUpdatable = {
    /**
     * size of btree node cache
     */
    cacheSize?:                  number,
    /**
     * % of data to be cleaned up from during next automatic flush operation
     */
    cleanupPercentage?:          number | string,
    /**
     * maximum number of files opened for commit log
     */
    commitLogMaxOpenedFiles?:    number,
    /**
     * minimum number of flushed snapshots to enable full compaction of the
     * index
     */
    compactionThld?:             number,
    /**
     * extra delay added during indexing when full compaction is in progress
     */
    delayDuringCompaction?:      number,
    /**
     * in-memory buffer size when doing flush operation
     */
    flushBufferSize?:            number,
    /**
     * threshold in number of entries between automatic flushes
     */
    flushThreshold?:             number,
    /**
     * maximum number of files opened for nodes history
     */
    historyLogMaxOpenedFiles?:   number,
    /**
     * max number of active in-memory btree snapshots
     */
    maxActiveSnapshots?:         number,
    /**
     * maximum number of files opened for nodes data
     */
    nodesLogMaxOpenedFiles?:     number,
    /**
     * threshold in time for automated snapshot renewal during data scans
     * (in seconds?).
     */
    renewSnapRootAfter?:         Long,
    /**
     * threshold in number of entries between flushes with sync
     */
    syncThreshold?:              number,
}


