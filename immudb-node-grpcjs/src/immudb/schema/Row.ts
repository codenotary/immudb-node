// Original file: schema.proto

import type { SQLValue as _immudb_schema_SQLValue, SQLValue__Output as _immudb_schema_SQLValue__Output } from '../../immudb/schema/SQLValue';

export interface Row {
  'columns'?: (string)[];
  'values'?: (_immudb_schema_SQLValue)[];
}

export interface Row__Output {
  'columns': (string)[];
  'values': (_immudb_schema_SQLValue__Output)[];
}
