import Long from "long"






/** 
 * Structure influencing immudb Indexer behaviour for
 * indexing {@link Entry}'ies.
 */
export type EntryMetadata = {
    /**
     * If set to `true` key value will be marked as deleted.
     * 
     * Get key will not return value ok key value marked as deleted.
     */
    deleted?: boolean,
    /**
     * If set to `true` key value will be marked as non indexable and
     * skipped by ImuuDb indexer. Effectively this would mean that if this
     * key value was set with this property, and we ask for latest key,
     * returned value will be not of this key value but of last indexed.
     */
    nonIndexable?: boolean,
    /**
     * If set and immudb server time is after, this key value will be marked as expired
     * when queried. Latest key value may than return other value.
     */
    expiresAt?: Long,
}


export type KeyValMeta = {
    meta?:              EntryMetadata,
    key:                Buffer,
    val:                Buffer,
}









export type BinEntry = {
    type:               'bin',
    version:            '1',
    prefixedKey:        Buffer,
    prefixedVal:        Buffer,
    meta?:              EntryMetadata
}


export type LeafEntry = {
    type:               'hash',
    version:            '1',
    prefixedKey:        Buffer,
    meta?:              EntryMetadata
    prefixedValHash:    Buffer,
}


export type ValEntry = {
    type:               'val',
    version:            '1',
    meta?:              EntryMetadata,
    key:                Buffer,
    val:                Buffer,
}


export type RefEntry = {
    type:               'ref',
    version:            '1',
    meta?:              EntryMetadata,
    key:                Buffer,
    referredKey:        Buffer,
    referredAtTxId:     Long,
}


export type ZSetEntry = {
    type:               'zSet',
    version:            '1',
    meta?:              EntryMetadata,
    zSet:               Buffer,
    referredKey:        Buffer,
    referredAtTxId:     Long,
    referredKeyScore:   number,
}


export type SqlRowEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'row',
    dbId:               number,
    tableId:            number,
    pk:                 Buffer,
    columnsValues:      SqlRowColumn[],
}

export type SqlRowColumn = {
    id:         number,
    bin:        Buffer,
}

export type SqlColumnEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'column',
    dbId:               number,
    tableId:            number,
    columnType:         string,
    columnIsNullable:   boolean,
    columnIsAutoIncr:   boolean,
    columnName:         string,
    columnMaxLength:    number,
}

export type SqlIndexEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'index',
    dbId:               number,
    tableId:            number,
    indexId:            number,
    indexIsPrimary:     number,
    columns:            SqlIndexColumn[]
}

export type SqlIndexColumn = {
    id:         number,
    ascDesc:    number,
}

export type SqlTableEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'table',
    dbId:               number,
    tableId:            number,
    tableName:          string,
}

export type SqlDbEntry = {
    type:               'sql',
    version:            '1',
    meta?:              EntryMetadata,
    sqlType:            'db',
    dbId:               number,
    dbName:             string,
}


/**
 * immudb sql entry, one of:
 * - row entry - {@link SqlRowEntry},
 * - column entry - {@link SqlColumnEntry},
 * - index entry - {@link SqlIndexEntry},
 * - table entry - {@link SqlTableEntry},
 * - database entry - {@link SqlDbEntry}.
 */
export type SqlEntry = 
    | SqlRowEntry
    | SqlColumnEntry
    | SqlIndexEntry
    | SqlTableEntry
    | SqlDbEntry


/**
 * immudb entry, one of:
 * - binary entry - {@link BinEntry},
 * - hash entry - {@link LeafEntry},
 * - value entry - {@link ValEntry},
 * - reference entry - {@link RefEntry},
 * - z-Set entry - {@link ZSetEntry},
 * - sql entry - {@link SqlEntry},
 */
export type Entry = 
    | BinEntry
    | LeafEntry
    | ValEntry
    | RefEntry
    | ZSetEntry
    | SqlEntry


export type TxContext = {
    id:         Long,
    entryId?:   Long,
}


export type TxEntry = 
    | BinTxEntry
    | LeafTxEntry
    | ValTxEntry
    | RefTxEntry
    | ZSetTxEntry
    | SqlTxEntry


export type SqlTxEntry = 
    | SqlRowTxEntry
    | SqlColumnTxEntry
    | SqlIndexTxEntry
    | SqlTableTxEntry
    | SqlDbTxEntry



export type BinTxEntry  = TxContext & BinEntry
export type LeafTxEntry = TxContext & LeafEntry
export type ValTxEntry  = TxContext & ValEntry
export type RefTxEntry  = TxContext & RefEntry
export type ZSetTxEntry = TxContext & ZSetEntry

export type SqlRowTxEntry       = TxContext & SqlRowEntry
export type SqlColumnTxEntry    = TxContext & SqlColumnEntry
export type SqlIndexTxEntry     = TxContext & SqlIndexEntry
export type SqlTableTxEntry     = TxContext & SqlTableEntry
export type SqlDbTxEntry        = TxContext & SqlDbEntry














/**
 * Entry and additional informations from immudb server indexer.
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




















export type TxHash = {
    type: 'tx-hash',
    /**
     * Transaction structure version.
     */
    version: '1',
     /**
      * Transaction sequence number. First transaction
      * have sequence number `1`.
      */
    id: Long,
    /**
     * Hash of transaction.
     */
    txHash: Buffer
}



/**
 * Transaction without specified entries.
 */
 export type TxCore = {
    type: 'tx-core',
    /**
     * Transaction structure version.
     */
    version: '1',
    /**
     * Transaction sequence number. First transaction
     * have sequence number `1`.
     */
    id: Long,
    /**
     * When transaction happened.
     */
    timestamp:  Long,
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
    /**
     * Count of all entries set during this transaction.
     */
    allEntriesCount: number,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash:     Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht:    Buffer,
}









/** 
 * Head-tail recursive (by hash) structure encoding logical transaction
 * and all transactions before it.
 * 
 * Entries of transaction can be specified (see {@link TxType}): 
 * - fully, 
 * - partially,
 * - or not at all.
 */
export type Tx = TxAnonymous | TxFull | TxHash







/**
 * Transaction without specified entries.
 */
export type TxAnonymous = {
    txType: 'anonymous',
    type: 'tx',
    /**
     * Transaction structure version.
     */
    version: '1',
    /**
     * Transaction sequence number. First transaction
     * have sequence number `1`.
     */
    id: Long,
    /**
     * When transaction happened.
     */
    timestamp:  Long,
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
    /**
     * Count of all entries set during this transaction.
     */
    allEntriesCount: number,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash:     Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht:    Buffer,
}


/**
 * Transaction with all entries specified.
 */
export type TxFull = {
    txType: 'full',
    type: 'tx',
    /**
     * Transaction structure version.
     */
    version: '1',
    /**
     * Transaction sequence number. First transaction
     * have sequence number `1`.
     */
    id: Long,
    /**
     * When transaction happened.
     */
    timestamp:  Long,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash:     Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht:    Buffer,
    /**
     * All transaction entries. **Order matters**.
     */
    allEntries: Entry[],
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
     /**
      * Count of all entries set during this transaction.
      */
    allEntriesCount: number,
}

/**
 * Transaction with all entries specified.
 */
 export type TxSome = {
    txType: 'some',
    type: 'tx',
    /**
     * Transaction structure version.
     */
    version: '1',
    /**
     * Transaction sequence number. First transaction
     * have sequence number `1`.
     */
    id: Long,
    /**
     * When transaction happened.
     */
    timestamp:  Long,
    /**
     * Hash of contained transaction, effectively
     * this means that transaction contain all
     * other (database) transactions. 
     * 
     * What is start transaction?
     */
    prevTxHash:     Buffer,
    /**
     * Merkle Hash of list of all contained transactions (sha256) hashes
     * (up to this transaction but not including).
     */
    prevTxesMht:    Buffer,
    /**
     * All transaction entries. **Order matters**.
     */
    someEntries: Entry[],
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
     /**
      * Count of all entries set during this transaction.
      */
    allEntriesCount: number,
}



export type TxEntriesComputed = {
    /**
     * Merkle Hash of all entries set during this transaction.
     */
    allEntriesMht: Buffer,
    /**
     * Count of all entries set during this transaction.
     */
    allEntriesCount: number,
}

export type TxFullComputed = TxFull & TxEntriesComputed





















/**
 * Structure represetning fundamental data which existance in immudb can be
 * verified.
 *
 * Minimal required data is transaction id {@link Verifiable.id}, because it
 * uniqly identifies transaction {@link TxAnonymous}, which is an atom of
 * verification process.
 *
 * Common users would be also interested in:
 * - time of creation - {@link Verifiable.timestamp}
 * - some entries - {@link Verifiable.entries}.
 *
 * All filds could be verified.
 *
 * Verification process in all cases will verify all filds but entries. Entries
 * will be verified if specified and in this situation sometimes all entries
 * will be verified, even if not specified.
 */
export type ProvableTx = {
    id:                 Long,
    timestamp?:         Long,
    prevTxHash?:        Buffer,
    prevTxesMht?:       Buffer,
    allEntriesMht?:     Buffer,
    allEntriesCount?:   number,
    entries?:           Entry[],
    txHash?:              Buffer,
}


/**
 * immudb can prove what has been set in what transaction, this implies that any
 * number of transaction can be verified.
 *
 * As transaction ({@link Tx}) can contain entries (of type {@link Entry}), any
 * entry in context of transaction can be proved.
 *
 * As list of transaction also can be proved, whole database composed of entries
 * (of type {@link Entry}) within transactions can also be proved.
 */
export type Provable = ProvableTx | ProvableTx[] | TxEntry | TxEntry[]





/** 
 * Logical transaction with omitted filds connected to verification,
 * composed from {@link TxCore} and {@link Entry}
 */
export type Transaction = {
    id:         Long,
    timestamp:  Long,
    entries:    Entry[],
}














export type VerificationEntriesOneOf = {
    type:                   'one-of'
    allEntriesMht:             Buffer,
    entry:                  Entry,
    entryId:                number,
    allEntriesCount:        number,
    entryInclusionProof:    Buffer[]
}


export type VerificationEntriesAllOf = {
    type:           'all-of'
    allEntriesMht:  Buffer,
    allEntries:     Entry[],
}




/**
 * Verification structure for entry/entries. Structure must be in prefect
 * equilibrium to verify successfully.
 */
export type VerificationEntries = 
    | VerificationEntriesOneOf
    | VerificationEntriesAllOf










export type VerificationTx = 
    | VerificationTxInclusion 
    | VerificationTxIsExtending 
    | VerificationTxEquality


export type VerificationTxInclusion = {
    type:                       'tx-prev-in-ref-prev',
    refHash:                    TxHash,
    tx:                         TxCore,
    ref:                        TxCore,
    txPrevInRefPrevTxesMht:     Buffer[],
    refPrevTxInRefPrevTxesMht:  Buffer[],
}

export type VerificationTxIsExtending = {
    type: 'ref-prev-in-tx-prev';
    refHash:                    TxHash,
    tx:                         TxCore,
    ref:                        TxCore,
    txPrevTxInTxPrevTxesMht:    Buffer[],
    refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht: Buffer[]
}

export type VerificationTxEquality = {
    type: 'tx-is-ref';
    refHash:                   TxHash,
    tx:                        TxCore,
    txPrevTxInRefPrevTxesMht:  Buffer[],
}

export type VerificationTxType = VerificationTx['type']

export type Verification = {
    entries: VerificationEntries,
    tx: VerificationTx,
}


