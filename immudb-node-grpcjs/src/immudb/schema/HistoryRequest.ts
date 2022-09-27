// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface HistoryRequest {
  'key'?: (Buffer | Uint8Array | string);
  'offset'?: (number | string | Long);
  'limit'?: (number);
  'desc'?: (boolean);
  'sinceTx'?: (number | string | Long);
}

export interface HistoryRequest__Output {
  'key': (Buffer);
  'offset': (Long);
  'limit': (number);
  'desc': (boolean);
  'sinceTx': (Long);
}
