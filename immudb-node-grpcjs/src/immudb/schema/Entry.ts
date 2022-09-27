// Original file: schema.proto

import type { Reference as _immudb_schema_Reference, Reference__Output as _immudb_schema_Reference__Output } from '../../immudb/schema/Reference';
import type { KVMetadata as _immudb_schema_KVMetadata, KVMetadata__Output as _immudb_schema_KVMetadata__Output } from '../../immudb/schema/KVMetadata';
import type { Long } from '@grpc/proto-loader';

export interface Entry {
  'tx'?: (number | string | Long);
  'key'?: (Buffer | Uint8Array | string);
  'value'?: (Buffer | Uint8Array | string);
  'referencedBy'?: (_immudb_schema_Reference | null);
  'metadata'?: (_immudb_schema_KVMetadata | null);
  'expired'?: (boolean);
  'revision'?: (number | string | Long);
}

export interface Entry__Output {
  'tx': (Long);
  'key': (Buffer);
  'value': (Buffer);
  'referencedBy': (_immudb_schema_Reference__Output | null);
  'metadata': (_immudb_schema_KVMetadata__Output | null);
  'expired': (boolean);
  'revision': (Long);
}
