// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface ZAddRequest {
  'set'?: (Buffer | Uint8Array | string);
  'score'?: (number | string);
  'key'?: (Buffer | Uint8Array | string);
  'atTx'?: (number | string | Long);
  'boundRef'?: (boolean);
  'noWait'?: (boolean);
}

export interface ZAddRequest__Output {
  'set': (Buffer);
  'score': (number | string);
  'key': (Buffer);
  'atTx': (Long);
  'boundRef': (boolean);
  'noWait': (boolean);
}
