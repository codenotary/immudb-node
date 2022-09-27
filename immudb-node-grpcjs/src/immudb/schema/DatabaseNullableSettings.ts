// Original file: schema.proto

import type { ReplicationNullableSettings as _immudb_schema_ReplicationNullableSettings, ReplicationNullableSettings__Output as _immudb_schema_ReplicationNullableSettings__Output } from '../../immudb/schema/ReplicationNullableSettings';
import type { NullableUint32 as _immudb_schema_NullableUint32, NullableUint32__Output as _immudb_schema_NullableUint32__Output } from '../../immudb/schema/NullableUint32';
import type { NullableBool as _immudb_schema_NullableBool, NullableBool__Output as _immudb_schema_NullableBool__Output } from '../../immudb/schema/NullableBool';
import type { IndexNullableSettings as _immudb_schema_IndexNullableSettings, IndexNullableSettings__Output as _immudb_schema_IndexNullableSettings__Output } from '../../immudb/schema/IndexNullableSettings';

export interface DatabaseNullableSettings {
  'replicationSettings'?: (_immudb_schema_ReplicationNullableSettings | null);
  'fileSize'?: (_immudb_schema_NullableUint32 | null);
  'maxKeyLen'?: (_immudb_schema_NullableUint32 | null);
  'maxValueLen'?: (_immudb_schema_NullableUint32 | null);
  'maxTxEntries'?: (_immudb_schema_NullableUint32 | null);
  'excludeCommitTime'?: (_immudb_schema_NullableBool | null);
  'maxConcurrency'?: (_immudb_schema_NullableUint32 | null);
  'maxIOConcurrency'?: (_immudb_schema_NullableUint32 | null);
  'txLogCacheSize'?: (_immudb_schema_NullableUint32 | null);
  'vLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'txLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'commitLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'indexSettings'?: (_immudb_schema_IndexNullableSettings | null);
  'writeTxHeaderVersion'?: (_immudb_schema_NullableUint32 | null);
  'autoload'?: (_immudb_schema_NullableBool | null);
}

export interface DatabaseNullableSettings__Output {
  'replicationSettings': (_immudb_schema_ReplicationNullableSettings__Output | null);
  'fileSize': (_immudb_schema_NullableUint32__Output | null);
  'maxKeyLen': (_immudb_schema_NullableUint32__Output | null);
  'maxValueLen': (_immudb_schema_NullableUint32__Output | null);
  'maxTxEntries': (_immudb_schema_NullableUint32__Output | null);
  'excludeCommitTime': (_immudb_schema_NullableBool__Output | null);
  'maxConcurrency': (_immudb_schema_NullableUint32__Output | null);
  'maxIOConcurrency': (_immudb_schema_NullableUint32__Output | null);
  'txLogCacheSize': (_immudb_schema_NullableUint32__Output | null);
  'vLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'txLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'commitLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'indexSettings': (_immudb_schema_IndexNullableSettings__Output | null);
  'writeTxHeaderVersion': (_immudb_schema_NullableUint32__Output | null);
  'autoload': (_immudb_schema_NullableBool__Output | null);
}
