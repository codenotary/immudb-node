// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface EntryCount {
  'count'?: (number | string | Long);
}

export interface EntryCount__Output {
  'count': (Long);
}
