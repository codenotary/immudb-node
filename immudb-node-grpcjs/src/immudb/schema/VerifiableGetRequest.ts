// Original file: schema.proto

import type { KeyRequest as _immudb_schema_KeyRequest, KeyRequest__Output as _immudb_schema_KeyRequest__Output } from '../../immudb/schema/KeyRequest';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableGetRequest {
  'keyRequest'?: (_immudb_schema_KeyRequest | null);
  'proveSinceTx'?: (number | string | Long);
}

export interface VerifiableGetRequest__Output {
  'keyRequest': (_immudb_schema_KeyRequest__Output | null);
  'proveSinceTx': (Long);
}
