// Original file: schema.proto

import type { EntriesSpec as _immudb_schema_EntriesSpec, EntriesSpec__Output as _immudb_schema_EntriesSpec__Output } from '../../immudb/schema/EntriesSpec';
import type { Long } from '@grpc/proto-loader';

export interface TxScanRequest {
  'initialTx'?: (number | string | Long);
  'limit'?: (number);
  'desc'?: (boolean);
  'entriesSpec'?: (_immudb_schema_EntriesSpec | null);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
}

export interface TxScanRequest__Output {
  'initialTx': (Long);
  'limit': (number);
  'desc': (boolean);
  'entriesSpec': (_immudb_schema_EntriesSpec__Output | null);
  'sinceTx': (Long);
  'noWait': (boolean);
}
