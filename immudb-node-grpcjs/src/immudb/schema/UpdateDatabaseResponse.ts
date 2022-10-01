// Original file: schema.proto

import type { DatabaseNullableSettings as _immudb_schema_DatabaseNullableSettings, DatabaseNullableSettings__Output as _immudb_schema_DatabaseNullableSettings__Output } from '../../immudb/schema/DatabaseNullableSettings';

export interface UpdateDatabaseResponse {
  'database'?: (string);
  'settings'?: (_immudb_schema_DatabaseNullableSettings | null);
}

export interface UpdateDatabaseResponse__Output {
  'database': (string);
  'settings': (_immudb_schema_DatabaseNullableSettings__Output | null);
}
