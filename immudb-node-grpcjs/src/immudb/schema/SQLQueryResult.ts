// Original file: schema.proto

import type { Row as _immudb_schema_Row, Row__Output as _immudb_schema_Row__Output } from '../../immudb/schema/Row';
import type { Column as _immudb_schema_Column, Column__Output as _immudb_schema_Column__Output } from '../../immudb/schema/Column';

export interface SQLQueryResult {
  'rows'?: (_immudb_schema_Row)[];
  'columns'?: (_immudb_schema_Column)[];
}

export interface SQLQueryResult__Output {
  'rows': (_immudb_schema_Row__Output)[];
  'columns': (_immudb_schema_Column__Output)[];
}
