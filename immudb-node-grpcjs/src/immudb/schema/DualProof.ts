// Original file: schema.proto

import type { TxHeader as _immudb_schema_TxHeader, TxHeader__Output as _immudb_schema_TxHeader__Output } from '../../immudb/schema/TxHeader';
import type { LinearProof as _immudb_schema_LinearProof, LinearProof__Output as _immudb_schema_LinearProof__Output } from '../../immudb/schema/LinearProof';

export interface DualProof {
  'sourceTxHeader'?: (_immudb_schema_TxHeader | null);
  'targetTxHeader'?: (_immudb_schema_TxHeader | null);
  'inclusionProof'?: (Buffer | Uint8Array | string)[];
  'consistencyProof'?: (Buffer | Uint8Array | string)[];
  'targetBlTxAlh'?: (Buffer | Uint8Array | string);
  'lastInclusionProof'?: (Buffer | Uint8Array | string)[];
  'linearProof'?: (_immudb_schema_LinearProof | null);
}

export interface DualProof__Output {
  'sourceTxHeader': (_immudb_schema_TxHeader__Output | null);
  'targetTxHeader': (_immudb_schema_TxHeader__Output | null);
  'inclusionProof': (Buffer)[];
  'consistencyProof': (Buffer)[];
  'targetBlTxAlh': (Buffer);
  'lastInclusionProof': (Buffer)[];
  'linearProof': (_immudb_schema_LinearProof__Output | null);
}
