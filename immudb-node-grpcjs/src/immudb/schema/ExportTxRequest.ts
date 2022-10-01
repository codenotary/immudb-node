// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface ExportTxRequest {
  'tx'?: (number | string | Long);
}

export interface ExportTxRequest__Output {
  'tx': (Long);
}
