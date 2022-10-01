// Original file: schema.proto

import type { DatabaseWithSettings as _immudb_schema_DatabaseWithSettings, DatabaseWithSettings__Output as _immudb_schema_DatabaseWithSettings__Output } from '../../immudb/schema/DatabaseWithSettings';

export interface DatabaseListResponseV2 {
  'databases'?: (_immudb_schema_DatabaseWithSettings)[];
}

export interface DatabaseListResponseV2__Output {
  'databases': (_immudb_schema_DatabaseWithSettings__Output)[];
}
