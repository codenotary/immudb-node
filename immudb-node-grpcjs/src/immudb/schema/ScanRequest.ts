// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface ScanRequest {
  'seekKey'?: (Buffer | Uint8Array | string);
  'prefix'?: (Buffer | Uint8Array | string);
  'desc'?: (boolean);
  'limit'?: (number | string | Long);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
  'endKey'?: (Buffer | Uint8Array | string);
  'inclusiveSeek'?: (boolean);
  'inclusiveEnd'?: (boolean);
}

export interface ScanRequest__Output {
  'seekKey': (Buffer);
  'prefix': (Buffer);
  'desc': (boolean);
  'limit': (Long);
  'sinceTx': (Long);
  'noWait': (boolean);
  'endKey': (Buffer);
  'inclusiveSeek': (boolean);
  'inclusiveEnd': (boolean);
}
