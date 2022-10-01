// Original file: schema.proto

import type { KVMetadata as _immudb_schema_KVMetadata, KVMetadata__Output as _immudb_schema_KVMetadata__Output } from '../../immudb/schema/KVMetadata';

export interface TxEntry {
  'key'?: (Buffer | Uint8Array | string);
  'hValue'?: (Buffer | Uint8Array | string);
  'vLen'?: (number);
  'metadata'?: (_immudb_schema_KVMetadata | null);
  'value'?: (Buffer | Uint8Array | string);
}

export interface TxEntry__Output {
  'key': (Buffer);
  'hValue': (Buffer);
  'vLen': (number);
  'metadata': (_immudb_schema_KVMetadata__Output | null);
  'value': (Buffer);
}
