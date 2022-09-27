// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface KeyRequest {
  'key'?: (Buffer | Uint8Array | string);
  'atTx'?: (number | string | Long);
  'sinceTx'?: (number | string | Long);
  'noWait'?: (boolean);
  'atRevision'?: (number | string | Long);
}

export interface KeyRequest__Output {
  'key': (Buffer);
  'atTx': (Long);
  'sinceTx': (Long);
  'noWait': (boolean);
  'atRevision': (Long);
}
