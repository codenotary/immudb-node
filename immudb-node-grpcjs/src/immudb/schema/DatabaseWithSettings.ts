// Original file: schema.proto

import type { DatabaseNullableSettings as _immudb_schema_DatabaseNullableSettings, DatabaseNullableSettings__Output as _immudb_schema_DatabaseNullableSettings__Output } from '../../immudb/schema/DatabaseNullableSettings';

export interface DatabaseWithSettings {
  'name'?: (string);
  'settings'?: (_immudb_schema_DatabaseNullableSettings | null);
  'loaded'?: (boolean);
}

export interface DatabaseWithSettings__Output {
  'name': (string);
  'settings': (_immudb_schema_DatabaseNullableSettings__Output | null);
  'loaded': (boolean);
}
