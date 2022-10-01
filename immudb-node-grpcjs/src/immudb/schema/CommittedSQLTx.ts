// Original file: schema.proto

import type { TxHeader as _immudb_schema_TxHeader, TxHeader__Output as _immudb_schema_TxHeader__Output } from '../../immudb/schema/TxHeader';
import type { SQLValue as _immudb_schema_SQLValue, SQLValue__Output as _immudb_schema_SQLValue__Output } from '../../immudb/schema/SQLValue';

export interface CommittedSQLTx {
  'header'?: (_immudb_schema_TxHeader | null);
  'updatedRows'?: (number);
  'lastInsertedPKs'?: ({[key: string]: _immudb_schema_SQLValue});
  'firstInsertedPKs'?: ({[key: string]: _immudb_schema_SQLValue});
}

export interface CommittedSQLTx__Output {
  'header': (_immudb_schema_TxHeader__Output | null);
  'updatedRows': (number);
  'lastInsertedPKs': ({[key: string]: _immudb_schema_SQLValue__Output});
  'firstInsertedPKs': ({[key: string]: _immudb_schema_SQLValue__Output});
}
