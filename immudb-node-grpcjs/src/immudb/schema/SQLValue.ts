// Original file: schema.proto

import type { NullValue as _google_protobuf_NullValue } from '../../google/protobuf/NullValue';
import type { Long } from '@grpc/proto-loader';

export interface SQLValue {
  'null'?: (_google_protobuf_NullValue | keyof typeof _google_protobuf_NullValue);
  'n'?: (number | string | Long);
  's'?: (string);
  'b'?: (boolean);
  'bs'?: (Buffer | Uint8Array | string);
  'ts'?: (number | string | Long);
  'value'?: "null"|"n"|"s"|"b"|"bs"|"ts";
}

export interface SQLValue__Output {
  'null'?: (keyof typeof _google_protobuf_NullValue);
  'n'?: (Long);
  's'?: (string);
  'b'?: (boolean);
  'bs'?: (Buffer);
  'ts'?: (Long);
  'value': "null"|"n"|"s"|"b"|"bs"|"ts";
}
