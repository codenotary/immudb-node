// Original file: schema.proto

import type { Tx as _immudb_schema_Tx, Tx__Output as _immudb_schema_Tx__Output } from '../../immudb/schema/Tx';

export interface TxList {
  'txs'?: (_immudb_schema_Tx)[];
}

export interface TxList__Output {
  'txs': (_immudb_schema_Tx__Output)[];
}
