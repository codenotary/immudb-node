// Original file: schema.proto

import type { KVMetadata as _immudb_schema_KVMetadata, KVMetadata__Output as _immudb_schema_KVMetadata__Output } from '../../immudb/schema/KVMetadata';
import type { Long } from '@grpc/proto-loader';

export interface SQLEntry {
  'tx'?: (number | string | Long);
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'metadata'?: (_immudb_schema_KVMetadata | null);
}

export interface SQLEntry__Output {
  'tx': (Long);
  'key': (Buffer);
  'value': (Buffer);
  'metadata': (_immudb_schema_KVMetadata__Output | null);
}
