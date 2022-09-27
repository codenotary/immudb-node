// Original file: schema.proto

import type { KVMetadata as _immudb_schema_KVMetadata, KVMetadata__Output as _immudb_schema_KVMetadata__Output } from '../../immudb/schema/KVMetadata';
import type { Long } from '@grpc/proto-loader';

export interface Reference {
  'tx'?: (number | string | Long);
  'key'?: (Buffer | Uint8Array | string);
  'atTx'?: (number | string | Long);
  'metadata'?: (_immudb_schema_KVMetadata | null);
  'revision'?: (number | string | Long);
}

export interface Reference__Output {
  'tx': (Long);
  'key': (Buffer);
  'atTx': (Long);
  'metadata': (_immudb_schema_KVMetadata__Output | null);
  'revision': (Long);
}
