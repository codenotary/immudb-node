// Original file: schema.proto

import type { SetRequest as _immudb_schema_SetRequest, SetRequest__Output as _immudb_schema_SetRequest__Output } from '../../immudb/schema/SetRequest';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableSetRequest {
  'setRequest'?: (_immudb_schema_SetRequest | null);
  'proveSinceTx'?: (number | string | Long);
}

export interface VerifiableSetRequest__Output {
  'setRequest': (_immudb_schema_SetRequest__Output | null);
  'proveSinceTx': (Long);
}
