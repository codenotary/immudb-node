// Original file: schema.proto

import type { Precondition as _immudb_schema_Precondition, Precondition__Output as _immudb_schema_Precondition__Output } from '../../immudb/schema/Precondition';
import type { Long } from '@grpc/proto-loader';

export interface ReferenceRequest {
  'key'?: (Buffer | Uint8Array | string);
  'referencedKey'?: (Buffer | Uint8Array | string);
  'atTx'?: (number | string | Long);
  'boundRef'?: (boolean);
  'noWait'?: (boolean);
  'preconditions'?: (_immudb_schema_Precondition)[];
}

export interface ReferenceRequest__Output {
  'key': (Buffer);
  'referencedKey': (Buffer);
  'atTx': (Long);
  'boundRef': (boolean);
  'noWait': (boolean);
  'preconditions': (_immudb_schema_Precondition__Output)[];
}
