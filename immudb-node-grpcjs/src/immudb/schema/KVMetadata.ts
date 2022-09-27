// Original file: schema.proto

import type { Expiration as _immudb_schema_Expiration, Expiration__Output as _immudb_schema_Expiration__Output } from '../../immudb/schema/Expiration';

export interface KVMetadata {
  'deleted'?: (boolean);
  'expiration'?: (_immudb_schema_Expiration | null);
  'nonIndexable'?: (boolean);
}

export interface KVMetadata__Output {
  'deleted': (boolean);
  'expiration': (_immudb_schema_Expiration__Output | null);
  'nonIndexable': (boolean);
}
