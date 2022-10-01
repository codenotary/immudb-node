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
     * skipped by immudb indexer. Effectively this would mean that if this
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