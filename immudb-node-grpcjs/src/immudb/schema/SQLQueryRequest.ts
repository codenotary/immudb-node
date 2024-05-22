// Original file: schema.proto

import type { NamedParam as _immudb_schema_NamedParam, NamedParam__Output as _immudb_schema_NamedParam__Output } from '../../immudb/schema/NamedParam';

export interface SQLQueryRequest {
  'sql'?: (string);
  'params'?: (_immudb_schema_NamedParam)[];
  'reuseSnapshot'?: (boolean);
  'acceptStream'?: (boolean);
}

export interface SQLQueryRequest__Output {
  'sql': (string);
  'params': (_immudb_schema_NamedParam__Output)[];
  'reuseSnapshot': (boolean);
  'acceptStream': (boolean);
}
