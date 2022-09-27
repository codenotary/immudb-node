// Original file: schema.proto

import type { TxMetadata as _immudb_schema_TxMetadata, TxMetadata__Output as _immudb_schema_TxMetadata__Output } from '../../immudb/schema/TxMetadata';
import type { Long } from '@grpc/proto-loader';

export interface TxHeader {
  'id'?: (number | string | Long);
  'prevAlh'?: (Buffer | Uint8Array | string);
  'ts'?: (number | string | Long);
  'nentries'?: (number);
  'eH'?: (Buffer | Uint8Array | string);
  'blTxId'?: (number | string | Long);
  'blRoot'?: (Buffer | Uint8Array | string);
  'version'?: (number);
  'metadata'?: (_immudb_schema_TxMetadata | null);
}

export interface TxHeader__Output {
  'id': (Long);
  'prevAlh': (Buffer);
  'ts': (Long);
  'nentries': (number);
  'eH': (Buffer);
  'blTxId': (Long);
  'blRoot': (Buffer);
  'version': (number);
  'metadata': (_immudb_schema_TxMetadata__Output | null);
}
