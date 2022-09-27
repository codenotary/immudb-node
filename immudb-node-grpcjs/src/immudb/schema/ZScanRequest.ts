// Original file: schema.proto

import type { Score as _immudb_schema_Score, Score__Output as _immudb_schema_Score__Output } from '../../immudb/schema/Score';
import type { Long } from '@grpc/proto-loader';

export interface ZScanRequest {
  'set'?: (Buffer | Uint8Array | string);
  'seekKey'?: (Buffer | Uint8Array | string);
  'seekScore'?: (number | string);
  'seekAtTx'?: (number | string | Long);
  'inclusiveSeek'?: (boolean);
  'limit'?: (number | string | Long);
  'desc'?: (boolean);
  'minScore'?: (_immudb_schema_Score | null);
  'maxScore'?: (_immudb_schema_Score | null);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
}

export interface ZScanRequest__Output {
  'set': (Buffer);
  'seekKey': (Buffer);
  'seekScore': (number | string);
  'seekAtTx': (Long);
  'inclusiveSeek': (boolean);
  'limit': (Long);
  'desc': (boolean);
  'minScore': (_immudb_schema_Score__Output | null);
  'maxScore': (_immudb_schema_Score__Output | null);
  'sinceTx': (Long);
  'noWait': (boolean);
}
