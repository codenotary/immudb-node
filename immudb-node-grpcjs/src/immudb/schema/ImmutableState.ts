// Original file: schema.proto

import type { Signature as _immudb_schema_Signature, Signature__Output as _immudb_schema_Signature__Output } from '../../immudb/schema/Signature';
import type { Long } from '@grpc/proto-loader';

export interface ImmutableState {
  'db'?: (string);
  'txId'?: (number | string | Long);
  'txHash'?: (Buffer | Uint8Array | string);
  'signature'?: (_immudb_schema_Signature | null);
}

export interface ImmutableState__Output {
  'db': (string);
  'txId': (Long);
  'txHash': (Buffer);
  'signature': (_immudb_schema_Signature__Output | null);
}
