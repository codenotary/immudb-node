// Original file: schema.proto

import type { NullableBool as _immudb_schema_NullableBool, NullableBool__Output as _immudb_schema_NullableBool__Output } from '../../immudb/schema/NullableBool';
import type { NullableString as _immudb_schema_NullableString, NullableString__Output as _immudb_schema_NullableString__Output } from '../../immudb/schema/NullableString';
import type { NullableUint32 as _immudb_schema_NullableUint32, NullableUint32__Output as _immudb_schema_NullableUint32__Output } from '../../immudb/schema/NullableUint32';

export interface ReplicationNullableSettings {
  'replica'?: (_immudb_schema_NullableBool | null);
  'masterDatabase'?: (_immudb_schema_NullableString | null);
  'masterAddress'?: (_immudb_schema_NullableString | null);
  'masterPort'?: (_immudb_schema_NullableUint32 | null);
  'followerUsername'?: (_immudb_schema_NullableString | null);
  'followerPassword'?: (_immudb_schema_NullableString | null);
}

export interface ReplicationNullableSettings__Output {
  'replica': (_immudb_schema_NullableBool__Output | null);
  'masterDatabase': (_immudb_schema_NullableString__Output | null);
  'masterAddress': (_immudb_schema_NullableString__Output | null);
  'masterPort': (_immudb_schema_NullableUint32__Output | null);
  'followerUsername': (_immudb_schema_NullableString__Output | null);
  'followerPassword': (_immudb_schema_NullableString__Output | null);
}
