// Original file: schema.proto

import type { EntriesSpec as _immudb_schema_EntriesSpec, EntriesSpec__Output as _immudb_schema_EntriesSpec__Output } from '../../immudb/schema/EntriesSpec';
import type { Long } from '@grpc/proto-loader';

export interface TxRequest {
  'tx'?: (number | string | Long);
  'entriesSpec'?: (_immudb_schema_EntriesSpec | null);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
  'keepReferencesUnresolved'?: (boolean);
}

export interface TxRequest__Output {
  'tx': (Long);
  'entriesSpec': (_immudb_schema_EntriesSpec__Output | null);
  'sinceTx': (Long);
  'noWait': (boolean);
  'keepReferencesUnresolved': (boolean);
}
