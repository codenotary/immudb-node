// Original file: schema.proto

import type { EntriesSpec as _immudb_schema_EntriesSpec, EntriesSpec__Output as _immudb_schema_EntriesSpec__Output } from '../../immudb/schema/EntriesSpec';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableTxRequest {
  'tx'?: (number | string | Long);
  'proveSinceTx'?: (number | string | Long);
  'entriesSpec'?: (_immudb_schema_EntriesSpec | null);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
  'keepReferencesUnresolved'?: (boolean);
}

export interface VerifiableTxRequest__Output {
  'tx': (Long);
  'proveSinceTx': (Long);
  'entriesSpec': (_immudb_schema_EntriesSpec__Output | null);
  'sinceTx': (Long);
  'noWait': (boolean);
  'keepReferencesUnresolved': (boolean);
}
