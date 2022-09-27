// Original file: schema.proto

import type { KVMetadata as _immudb_schema_KVMetadata, KVMetadata__Output as _immudb_schema_KVMetadata__Output } from '../../immudb/schema/KVMetadata';

export interface KeyValue {
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'metadata'?: (_immudb_schema_KVMetadata | null);
}

export interface KeyValue__Output {
  'key': (Buffer);
  'value': (Buffer);
  'metadata': (_immudb_schema_KVMetadata__Output | null);
}
