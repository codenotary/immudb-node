// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface KeyListRequest {
  'keys'?: (Buffer | Uint8Array | string)[];
  'sinceTx'?: (number | string | Long);
}

export interface KeyListRequest__Output {
  'keys': (Buffer)[];
  'sinceTx': (Long);
}
