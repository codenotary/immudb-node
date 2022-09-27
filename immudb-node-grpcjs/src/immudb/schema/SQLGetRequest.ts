// Original file: schema.proto

import type { SQLValue as _immudb_schema_SQLValue, SQLValue__Output as _immudb_schema_SQLValue__Output } from '../../immudb/schema/SQLValue';
import type { Long } from '@grpc/proto-loader';

export interface SQLGetRequest {
  'table'?: (string);
  'pkValues'?: (_immudb_schema_SQLValue)[];
  'atTx'?: (number | string | Long);
  'sinceTx'?: (number | string | Long);
}

export interface SQLGetRequest__Output {
  'table': (string);
  'pkValues': (_immudb_schema_SQLValue__Output)[];
  'atTx': (Long);
  'sinceTx': (Long);
}
