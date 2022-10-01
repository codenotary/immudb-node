// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface DatabaseHealthResponse {
  'pendingRequests'?: (number);
  'lastRequestCompletedAt'?: (number | string | Long);
}

export interface DatabaseHealthResponse__Output {
  'pendingRequests': (number);
  'lastRequestCompletedAt': (Long);
}
