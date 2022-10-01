// Original file: schema.proto

import type { TxHeader as _immudb_schema_TxHeader, TxHeader__Output as _immudb_schema_TxHeader__Output } from '../../immudb/schema/TxHeader';
import type { TxEntry as _immudb_schema_TxEntry, TxEntry__Output as _immudb_schema_TxEntry__Output } from '../../immudb/schema/TxEntry';
import type { Entry as _immudb_schema_Entry, Entry__Output as _immudb_schema_Entry__Output } from '../../immudb/schema/Entry';
import type { ZEntry as _immudb_schema_ZEntry, ZEntry__Output as _immudb_schema_ZEntry__Output } from '../../immudb/schema/ZEntry';

export interface Tx {
  'header'?: (_immudb_schema_TxHeader | null);
  'entries'?: (_immudb_schema_TxEntry)[];
  'kvEntries'?: (_immudb_schema_Entry)[];
  'zEntries'?: (_immudb_schema_ZEntry)[];
}

export interface Tx__Output {
  'header': (_immudb_schema_TxHeader__Output | null);
  'entries': (_immudb_schema_TxEntry__Output)[];
  'kvEntries': (_immudb_schema_Entry__Output)[];
  'zEntries': (_immudb_schema_ZEntry__Output)[];
}
