// Original file: schema.proto

import type { SQLGetRequest as _immudb_schema_SQLGetRequest, SQLGetRequest__Output as _immudb_schema_SQLGetRequest__Output } from '../../immudb/schema/SQLGetRequest';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableSQLGetRequest {
  'sqlGetRequest'?: (_immudb_schema_SQLGetRequest | null);
  'proveSinceTx'?: (number | string | Long);
}

export interface VerifiableSQLGetRequest__Output {
  'sqlGetRequest': (_immudb_schema_SQLGetRequest__Output | null);
  'proveSinceTx': (Long);
}
