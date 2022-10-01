// Original file: schema.proto

import type { SQLValue as _immudb_schema_SQLValue, SQLValue__Output as _immudb_schema_SQLValue__Output } from '../../immudb/schema/SQLValue';

export interface NamedParam {
  'name'?: (string);
  'value'?: (_immudb_schema_SQLValue | null);
}

export interface NamedParam__Output {
  'name': (string);
  'value': (_immudb_schema_SQLValue__Output | null);
}
