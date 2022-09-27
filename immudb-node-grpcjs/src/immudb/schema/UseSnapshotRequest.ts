// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface UseSnapshotRequest {
  'sinceTx'?: (number | string | Long);
  'asBeforeTx'?: (number | string | Long);
}

export interface UseSnapshotRequest__Output {
  'sinceTx': (Long);
  'asBeforeTx': (Long);
}
