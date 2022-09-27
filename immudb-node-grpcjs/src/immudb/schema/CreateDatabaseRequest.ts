// Original file: schema.proto

import type { DatabaseNullableSettings as _immudb_schema_DatabaseNullableSettings, DatabaseNullableSettings__Output as _immudb_schema_DatabaseNullableSettings__Output } from '../../immudb/schema/DatabaseNullableSettings';

export interface CreateDatabaseRequest {
  'name'?: (string);
  'settings'?: (_immudb_schema_DatabaseNullableSettings | null);
  'ifNotExists'?: (boolean);
}

export interface CreateDatabaseRequest__Output {
  'name': (string);
  'settings': (_immudb_schema_DatabaseNullableSettings__Output | null);
  'ifNotExists': (boolean);
}
