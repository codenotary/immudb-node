// Original file: schema.proto

import type { ZAddRequest as _immudb_schema_ZAddRequest, ZAddRequest__Output as _immudb_schema_ZAddRequest__Output } from '../../immudb/schema/ZAddRequest';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableZAddRequest {
  'zAddRequest'?: (_immudb_schema_ZAddRequest | null);
  'proveSinceTx'?: (number | string | Long);
}

export interface VerifiableZAddRequest__Output {
  'zAddRequest': (_immudb_schema_ZAddRequest__Output | null);
  'proveSinceTx': (Long);
}
