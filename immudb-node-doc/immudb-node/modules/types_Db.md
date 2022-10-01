[immudb-node](../README.md) / [Exports](../modules.md) / types/Db

# Module: types/Db

## Table of contents

### Type Aliases

- [DBRuntimeInfo](types_Db.md#dbruntimeinfo)
- [DatabaseSettings](types_Db.md#databasesettings)
- [DatabaseSettingsReadonly](types_Db.md#databasesettingsreadonly)
- [DatabaseSettingsUpdatable](types_Db.md#databasesettingsupdatable)
- [IndexSettings](types_Db.md#indexsettings)
- [IndexSettingsReadonly](types_Db.md#indexsettingsreadonly)
- [IndexSettingsUpdatable](types_Db.md#indexsettingsupdatable)
- [ReplicationSettings](types_Db.md#replicationsettings)

## Type Aliases

### DBRuntimeInfo

Ƭ **DBRuntimeInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Name of immudb instance database |
| `isLoaded` | `boolean` | Databases can be dynamically loaded and unloaded without having to restart the server. After the database is unloaded, all its resources are released. Unloaded databases cannot be queried or written to |
| `settings` | [`DatabaseSettings`](types_Db.md#databasesettings) | Database settings |

#### Defined in

[immudb-node/src/types/Db.ts:5](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L5)

___

### DatabaseSettings

Ƭ **DatabaseSettings**: [`DatabaseSettingsReadonly`](types_Db.md#databasesettingsreadonly) & [`DatabaseSettingsUpdatable`](types_Db.md#databasesettingsupdatable)

Database settings.

> **NOTE**
> 
> Following settings cannot be updated after database creation:
> * fileSize, 
> * maxKeyLen, 
> * maxValueLen, 
> * maxTxEntries,
> * indexOptions.maxNodeSize

#### Defined in

[immudb-node/src/types/Db.ts:36](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L36)

___

### DatabaseSettingsReadonly

Ƭ **DatabaseSettingsReadonly**: `Object`

Database unchangable settings

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileSize?` | `number` | default storage layer implementation writes data into fixed-size files, default size being 512MB. The current theoretical maximum number of files is 100 millions. |
| `indexSettings` | [`IndexSettingsReadonly`](types_Db.md#indexsettingsreadonly) | Indexing settings |
| `maxKeyLen?` | `number` | maximum length of keys for entries stored in the database.  max maxKeyLen: 1024 Bytes (2^31-1 bytes) |
| `maxTxEntries?` | `number` | In order to provide manageable limits, immudb is designed to set an upper bound to the number of key-value pairs included in a single transaction. The default value being 1024, so using default settings, the theoretical number of key-value pairs that can be stored in immudb is: 1024 * (1^64 - 1). |
| `maxValueLen?` | `number` | maximum length of value for entries stored in the database.  Max maxValueLen: 32 MB (2^56-1 bytes) |

#### Defined in

[immudb-node/src/types/Db.ts:105](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L105)

___

### DatabaseSettingsUpdatable

Ƭ **DatabaseSettingsUpdatable**: `Object`

Database changable settings

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoload?` | `boolean` | Should database be automatically loaded?: * (default) yes -> leave this value undefined or set to true * no -> set this value to false |
| `commitLogMaxOpenedFiles?` | `number` | maximum number of open files for commit log |
| `excludeCommitTime?` | `boolean` | if set to true, commit time is not added to transaction headers allowing reproducible database state |
| `indexSettings` | [`IndexSettingsUpdatable`](types_Db.md#indexsettingsupdatable) | Indexing settings |
| `maxConcurrency?` | `number` | max number of concurrent operations on the db |
| `maxIOConcurrency?` | `number` | max number of concurrent IO operations on the db |
| `replicationSettings` | [`ReplicationSettings`](types_Db.md#replicationsettings) | Repliation settings |
| `txLogCacheSize?` | `number` | size of transaction log cache |
| `txLogMaxOpenedFiles?` | `number` | maximum number of open files for transaction log |
| `vLogMaxOpenedFiles?` | `number` | maximum number of open files for payload data |
| `writeTxHeaderVersion?` | `number` | transaction header version, used for backwards compatibility |

#### Defined in

[immudb-node/src/types/Db.ts:42](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L42)

___

### IndexSettings

Ƭ **IndexSettings**: [`IndexSettingsUpdatable`](types_Db.md#indexsettingsupdatable) & [`IndexSettingsReadonly`](types_Db.md#indexsettingsreadonly)

Indexing settings

#### Defined in

[immudb-node/src/types/Db.ts:182](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L182)

___

### IndexSettingsReadonly

Ƭ **IndexSettingsReadonly**: `Object`

Indexing unchangable settings

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxNodeSize?` | `number` | max size of btree node in bytes |

#### Defined in

[immudb-node/src/types/Db.ts:189](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L189)

___

### IndexSettingsUpdatable

Ƭ **IndexSettingsUpdatable**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheSize?` | `number` | size of btree node cache |
| `cleanupPercentage?` | `number` \| `string` | % of data to be cleaned up from during next automatic flush operation |
| `commitLogMaxOpenedFiles?` | `number` | maximum number of files opened for commit log |
| `compactionThld?` | `number` | minimum number of flushed snapshots to enable full compaction of the index |
| `delayDuringCompaction?` | `number` | extra delay added during indexing when full compaction is in progress |
| `flushBufferSize?` | `number` | in-memory buffer size when doing flush operation |
| `flushThreshold?` | `number` | threshold in number of entries between automatic flushes |
| `historyLogMaxOpenedFiles?` | `number` | maximum number of files opened for nodes history |
| `maxActiveSnapshots?` | `number` | max number of active in-memory btree snapshots |
| `nodesLogMaxOpenedFiles?` | `number` | maximum number of files opened for nodes data |
| `renewSnapRootAfter?` | `Long` | threshold in time for automated snapshot renewal during data scans (in seconds?). |
| `syncThreshold?` | `number` | threshold in number of entries between flushes with sync |

#### Defined in

[immudb-node/src/types/Db.ts:199](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L199)

___

### ReplicationSettings

Ƭ **ReplicationSettings**: `Object`

Replication settings

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `followerPassword?` | `string` | password used to connect to the master immudb instance |
| `followerUsername?` | `string` | username used to connect to the master immudb instance |
| `masterAddress?` | `string` | hostname of the master immudb instance |
| `masterDatabase?` | `string` | name of the database to replicate |
| `masterPort?` | `number` | tcp port of the master immudb instance |
| `replica?` | `boolean` | if true, the database is a replica of another one |

#### Defined in

[immudb-node/src/types/Db.ts:150](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/types/Db.ts#L150)
