// Original file: schema.proto

import type { NamedParam as _immudb_schema_NamedParam, NamedParam__Output as _immudb_schema_NamedParam__Output } from '../../immudb/schema/NamedParam';

export interface SQLExecRequest {
  'sql'?: (string);
  'params'?: (_immudb_schema_NamedParam)[];
  'noWait'?: (boolean);
}

export interface SQLExecRequest__Output {
  'sql': (string);
  'params': (_immudb_schema_NamedParam__Output)[];
  'noWait': (boolean);
}
