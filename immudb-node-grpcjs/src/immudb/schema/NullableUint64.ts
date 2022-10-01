// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface NullableUint64 {
  'value'?: (number | string | Long);
}

export interface NullableUint64__Output {
  'value': (Long);
}
