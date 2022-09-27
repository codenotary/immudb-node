// Original file: schema.proto

import type { Long } from '@grpc/proto-loader';

export interface _immudb_schema_Precondition_KeyMustExistPrecondition {
  'key'?: (Buffer | Uint8Array | string);
}

export interface _immudb_schema_Precondition_KeyMustExistPrecondition__Output {
  'key': (Buffer);
}

export interface _immudb_schema_Precondition_KeyMustNotExistPrecondition {
  'key'?: (Buffer | Uint8Array | string);
}

export interface _immudb_schema_Precondition_KeyMustNotExistPrecondition__Output {
  'key': (Buffer);
}

export interface _immudb_schema_Precondition_KeyNotModifiedAfterTXPrecondition {
  'key'?: (Buffer | Uint8Array | string);
  'txID'?: (number | string | Long);
}

export interface _immudb_schema_Precondition_KeyNotModifiedAfterTXPrecondition__Output {
  'key': (Buffer);
  'txID': (Long);
}

export interface Precondition {
  'keyMustExist'?: (_immudb_schema_Precondition_KeyMustExistPrecondition | null);
  'keyMustNotExist'?: (_immudb_schema_Precondition_KeyMustNotExistPrecondition | null);
  'keyNotModifiedAfterTX'?: (_immudb_schema_Precondition_KeyNotModifiedAfterTXPrecondition | null);
  'precondition'?: "keyMustExist"|"keyMustNotExist"|"keyNotModifiedAfterTX";
}

export interface Precondition__Output {
  'keyMustExist'?: (_immudb_schema_Precondition_KeyMustExistPrecondition__Output | null);
  'keyMustNotExist'?: (_immudb_schema_Precondition_KeyMustNotExistPrecondition__Output | null);
  'keyNotModifiedAfterTX'?: (_immudb_schema_Precondition_KeyNotModifiedAfterTXPrecondition__Output | null);
  'precondition': "keyMustExist"|"keyMustNotExist"|"keyNotModifiedAfterTX";
}
