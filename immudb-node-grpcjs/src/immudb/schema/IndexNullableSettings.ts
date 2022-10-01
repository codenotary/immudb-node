// Original file: schema.proto

import type { NullableUint32 as _immudb_schema_NullableUint32, NullableUint32__Output as _immudb_schema_NullableUint32__Output } from '../../immudb/schema/NullableUint32';
import type { NullableUint64 as _immudb_schema_NullableUint64, NullableUint64__Output as _immudb_schema_NullableUint64__Output } from '../../immudb/schema/NullableUint64';
import type { NullableFloat as _immudb_schema_NullableFloat, NullableFloat__Output as _immudb_schema_NullableFloat__Output } from '../../immudb/schema/NullableFloat';
import type { Long } from '@grpc/proto-loader';

export interface IndexNullableSettings {
  'flushThreshold'?: (_immudb_schema_NullableUint32 | null);
  'syncThreshold'?: (_immudb_schema_NullableUint32 | null);
  'cacheSize'?: (_immudb_schema_NullableUint32 | null);
  'maxNodeSize'?: (_immudb_schema_NullableUint32 | null);
  'maxActiveSnapshots'?: (_immudb_schema_NullableUint32 | null);
  'renewSnapRootAfter'?: (_immudb_schema_NullableUint64 | null);
  'compactionThld'?: (_immudb_schema_NullableUint32 | null);
  'delayDuringCompaction'?: (_immudb_schema_NullableUint32 | null);
  'nodesLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'historyLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'commitLogMaxOpenedFiles'?: (_immudb_schema_NullableUint32 | null);
  'flushBufferSize'?: (_immudb_schema_NullableUint32 | null);
  'cleanupPercentage'?: (_immudb_schema_NullableFloat | null);
}

export interface IndexNullableSettings__Output {
  'flushThreshold': (_immudb_schema_NullableUint32__Output | null);
  'syncThreshold': (_immudb_schema_NullableUint32__Output | null);
  'cacheSize': (_immudb_schema_NullableUint32__Output | null);
  'maxNodeSize': (_immudb_schema_NullableUint32__Output | null);
  'maxActiveSnapshots': (_immudb_schema_NullableUint32__Output | null);
  'renewSnapRootAfter': (_immudb_schema_NullableUint64__Output | null);
  'compactionThld': (_immudb_schema_NullableUint32__Output | null);
  'delayDuringCompaction': (_immudb_schema_NullableUint32__Output | null);
  'nodesLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'historyLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'commitLogMaxOpenedFiles': (_immudb_schema_NullableUint32__Output | null);
  'flushBufferSize': (_immudb_schema_NullableUint32__Output | null);
  'cleanupPercentage': (_immudb_schema_NullableFloat__Output | null);
}
