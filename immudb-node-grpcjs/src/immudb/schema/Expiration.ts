// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface Expiration {
  'expiresAt'?: (number | string | Long);
}

export interface Expiration__Output {
  'expiresAt': (Long);
}
