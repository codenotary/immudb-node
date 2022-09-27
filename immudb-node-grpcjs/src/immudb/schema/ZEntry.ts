// Original file: schema.proto

import type { Entry as _immudb_schema_Entry, Entry__Output as _immudb_schema_Entry__Output } from '../../immudb/schema/Entry';
import type { Long } from '@grpc/proto-loader';

export interface ZEntry {
  'set'?: (Buffer | Uint8Array | string);
  'key'?: (Buffer | Uint8Array | string);
  'entry'?: (_immudb_schema_Entry | null);
  'score'?: (number | string);
  'atTx'?: (number | string | Long);
}

export interface ZEntry__Output {
  'set': (Buffer);
  'key': (Buffer);
  'entry': (_immudb_schema_Entry__Output | null);
  'score': (number | string);
  'atTx': (Long);
}
