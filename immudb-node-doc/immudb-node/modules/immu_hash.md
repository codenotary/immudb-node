[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash

# Module: immu-hash

## Table of contents

### References

- [BufferTree](immu_hash.md#buffertree)
- [FlagAutoIncrement](immu_hash.md#flagautoincrement)
- [FlagAutoIncrementValue](immu_hash.md#flagautoincrementvalue)
- [FlagNotNullValue](immu_hash.md#flagnotnullvalue)
- [FlagNullable](immu_hash.md#flagnullable)
- [PrefixKeyRef](immu_hash.md#prefixkeyref)
- [PrefixKeySql](immu_hash.md#prefixkeysql)
- [PrefixKeyVal](immu_hash.md#prefixkeyval)
- [PrefixKeyZSet](immu_hash.md#prefixkeyzset)
- [PrefixMhtLeaf](immu_hash.md#prefixmhtleaf)
- [PrefixMhtNode](immu_hash.md#prefixmhtnode)
- [PrefixSqlUpperBound](immu_hash.md#prefixsqlupperbound)
- [PrefixSqlValNotNull](immu_hash.md#prefixsqlvalnotnull)
- [PrefixSqlValNull](immu_hash.md#prefixsqlvalnull)
- [PrefixValRef](immu_hash.md#prefixvalref)
- [PrefixValVal](immu_hash.md#prefixvalval)
- [TagEntryMetadataDeleted](immu_hash.md#tagentrymetadatadeleted)
- [TagEntryMetadataExpiresAt](immu_hash.md#tagentrymetadataexpiresat)
- [TagEntryMetadataNonIndexable](immu_hash.md#tagentrymetadatanonindexable)
- [TagSqlColumn](immu_hash.md#tagsqlcolumn)
- [TagSqlDb](immu_hash.md#tagsqldb)
- [TagSqlIndex](immu_hash.md#tagsqlindex)
- [TagSqlRow](immu_hash.md#tagsqlrow)
- [TagSqlTable](immu_hash.md#tagsqltable)
- [createGenerator](immu_hash.md#creategenerator)
- [data](immu_hash.md#data)
- [fromBuffers](immu_hash.md#frombuffers)
- [fromIterableBuffers](immu_hash.md#fromiterablebuffers)
- [fromTreeBuffers](immu_hash.md#fromtreebuffers)
- [hashOfBinEntry](immu_hash.md#hashofbinentry)
- [hashOfEntry](immu_hash.md#hashofentry)
- [hashOfHashEntry](immu_hash.md#hashofhashentry)
- [hashOfImmuState](immu_hash.md#hashofimmustate)
- [hashOfKeyValMeta](immu_hash.md#hashofkeyvalmeta)
- [hashOfRefEntry](immu_hash.md#hashofrefentry)
- [hashOfSqlColumnEntry](immu_hash.md#hashofsqlcolumnentry)
- [hashOfSqlDbEntry](immu_hash.md#hashofsqldbentry)
- [hashOfSqlIndexEntry](immu_hash.md#hashofsqlindexentry)
- [hashOfSqlRowEntry](immu_hash.md#hashofsqlrowentry)
- [hashOfSqlTableEntry](immu_hash.md#hashofsqltableentry)
- [hashOfTxCore](immu_hash.md#hashoftxcore)
- [hashOfTxHash](immu_hash.md#hashoftxhash)
- [hashOfValEntry](immu_hash.md#hashofvalentry)
- [hashOfZSetEntry](immu_hash.md#hashofzsetentry)
- [isFlagAutoIncrementSet](immu_hash.md#isflagautoincrementset)
- [isFlagNotNullSet](immu_hash.md#isflagnotnullset)
- [leaf](immu_hash.md#leaf)
- [node](immu_hash.md#node)
- [ofBuffers](immu_hash.md#ofbuffers)
- [ofTreeBuffers](immu_hash.md#oftreebuffers)
- [setColumnFlagAutoIncrement](immu_hash.md#setcolumnflagautoincrement)
- [setColumnFlagNotNull](immu_hash.md#setcolumnflagnotnull)
- [setColumnFlags](immu_hash.md#setcolumnflags)

## References

### BufferTree

Re-exports [BufferTree](immu_hash_hash.md#buffertree)

___

### FlagAutoIncrement

Re-exports [FlagAutoIncrement](immu_hash_consts.md#flagautoincrement)

___

### FlagAutoIncrementValue

Re-exports [FlagAutoIncrementValue](immu_hash_consts.md#flagautoincrementvalue)

___

### FlagNotNullValue

Re-exports [FlagNotNullValue](immu_hash_consts.md#flagnotnullvalue)

___

### FlagNullable

Re-exports [FlagNullable](immu_hash_consts.md#flagnullable)

___

### PrefixKeyRef

Re-exports [PrefixKeyRef](immu_hash_consts.md#prefixkeyref)

___

### PrefixKeySql

Re-exports [PrefixKeySql](immu_hash_consts.md#prefixkeysql)

___

### PrefixKeyVal

Re-exports [PrefixKeyVal](immu_hash_consts.md#prefixkeyval)

___

### PrefixKeyZSet

Re-exports [PrefixKeyZSet](immu_hash_consts.md#prefixkeyzset)

___

### PrefixMhtLeaf

Re-exports [PrefixMhtLeaf](immu_hash_consts.md#prefixmhtleaf)

___

### PrefixMhtNode

Re-exports [PrefixMhtNode](immu_hash_consts.md#prefixmhtnode)

___

### PrefixSqlUpperBound

Re-exports [PrefixSqlUpperBound](immu_hash_consts.md#prefixsqlupperbound)

___

### PrefixSqlValNotNull

Re-exports [PrefixSqlValNotNull](immu_hash_consts.md#prefixsqlvalnotnull)

___

### PrefixSqlValNull

Re-exports [PrefixSqlValNull](immu_hash_consts.md#prefixsqlvalnull)

___

### PrefixValRef

Re-exports [PrefixValRef](immu_hash_consts.md#prefixvalref)

___

### PrefixValVal

Re-exports [PrefixValVal](immu_hash_consts.md#prefixvalval)

___

### TagEntryMetadataDeleted

Re-exports [TagEntryMetadataDeleted](immu_hash_consts.md#tagentrymetadatadeleted)

___

### TagEntryMetadataExpiresAt

Re-exports [TagEntryMetadataExpiresAt](immu_hash_consts.md#tagentrymetadataexpiresat)

___

### TagEntryMetadataNonIndexable

Re-exports [TagEntryMetadataNonIndexable](immu_hash_consts.md#tagentrymetadatanonindexable)

___

### TagSqlColumn

Re-exports [TagSqlColumn](immu_hash_consts.md#tagsqlcolumn)

___

### TagSqlDb

Re-exports [TagSqlDb](immu_hash_consts.md#tagsqldb)

___

### TagSqlIndex

Re-exports [TagSqlIndex](immu_hash_consts.md#tagsqlindex)

___

### TagSqlRow

Re-exports [TagSqlRow](immu_hash_consts.md#tagsqlrow)

___

### TagSqlTable

Re-exports [TagSqlTable](immu_hash_consts.md#tagsqltable)

___

### createGenerator

Re-exports [createGenerator](immu_hash_hash.md#creategenerator)

___

### data

Re-exports [data](immu_hash_hash.md#data)

___

### fromBuffers

Re-exports [fromBuffers](immu_hash_hash.md#frombuffers)

___

### fromIterableBuffers

Re-exports [fromIterableBuffers](immu_hash_hash.md#fromiterablebuffers)

___

### fromTreeBuffers

Re-exports [fromTreeBuffers](immu_hash_hash.md#fromtreebuffers)

___

### hashOfBinEntry

Re-exports [hashOfBinEntry](immu_hash_binEntry.md#hashofbinentry)

___

### hashOfEntry

Re-exports [hashOfEntry](immu_hash_entry.md#hashofentry)

___

### hashOfHashEntry

Re-exports [hashOfHashEntry](immu_hash_hashEntry.md#hashofhashentry)

___

### hashOfImmuState

Re-exports [hashOfImmuState](immu_hash_immuState.md#hashofimmustate)

___

### hashOfKeyValMeta

Re-exports [hashOfKeyValMeta](immu_hash_kvm.md#hashofkeyvalmeta)

___

### hashOfRefEntry

Re-exports [hashOfRefEntry](immu_hash_refEntry.md#hashofrefentry)

___

### hashOfSqlColumnEntry

Re-exports [hashOfSqlColumnEntry](immu_hash_sqlEntry.md#hashofsqlcolumnentry)

___

### hashOfSqlDbEntry

Re-exports [hashOfSqlDbEntry](immu_hash_sqlEntry.md#hashofsqldbentry)

___

### hashOfSqlIndexEntry

Re-exports [hashOfSqlIndexEntry](immu_hash_sqlEntry.md#hashofsqlindexentry)

___

### hashOfSqlRowEntry

Re-exports [hashOfSqlRowEntry](immu_hash_sqlEntry.md#hashofsqlrowentry)

___

### hashOfSqlTableEntry

Re-exports [hashOfSqlTableEntry](immu_hash_sqlEntry.md#hashofsqltableentry)

___

### hashOfTxCore

Re-exports [hashOfTxCore](immu_hash_tx.md#hashoftxcore)

___

### hashOfTxHash

Re-exports [hashOfTxHash](immu_hash_tx.md#hashoftxhash)

___

### hashOfValEntry

Re-exports [hashOfValEntry](immu_hash_valEntry.md#hashofvalentry)

___

### hashOfZSetEntry

Re-exports [hashOfZSetEntry](immu_hash_zSetEntry.md#hashofzsetentry)

___

### isFlagAutoIncrementSet

Re-exports [isFlagAutoIncrementSet](immu_hash_consts.md#isflagautoincrementset)

___

### isFlagNotNullSet

Re-exports [isFlagNotNullSet](immu_hash_consts.md#isflagnotnullset)

___

### leaf

Re-exports [leaf](immu_hash_hash.md#leaf)

___

### node

Re-exports [node](immu_hash_hash.md#node)

___

### ofBuffers

Re-exports [ofBuffers](immu_hash_hash.md#ofbuffers)

___

### ofTreeBuffers

Re-exports [ofTreeBuffers](immu_hash_hash.md#oftreebuffers)

___

### setColumnFlagAutoIncrement

Re-exports [setColumnFlagAutoIncrement](immu_hash_consts.md#setcolumnflagautoincrement)

___

### setColumnFlagNotNull

Re-exports [setColumnFlagNotNull](immu_hash_consts.md#setcolumnflagnotnull)

___

### setColumnFlags

Re-exports [setColumnFlags](immu_hash_consts.md#setcolumnflags)
