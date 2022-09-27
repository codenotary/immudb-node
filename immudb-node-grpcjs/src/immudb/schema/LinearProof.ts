// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface LinearProof {
  'sourceTxId'?: (number | string | Long);
  'TargetTxId'?: (number | string | Long);
  'terms'?: (Buffer | Uint8Array | string)[];
}

export interface LinearProof__Output {
  'sourceTxId': (Long);
  'TargetTxId': (Long);
  'terms': (Buffer)[];
}
