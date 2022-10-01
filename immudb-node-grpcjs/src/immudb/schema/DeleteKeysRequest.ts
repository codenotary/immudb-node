// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteKeysRequest {
  'keys'?: (Buffer | Uint8Array | string)[];
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
}

export interface DeleteKeysRequest__Output {
  'keys': (Buffer)[];
  'sinceTx': (Long);
  'noWait': (boolean);
}
