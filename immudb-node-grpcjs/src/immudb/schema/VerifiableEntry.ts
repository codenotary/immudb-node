// Original file: schema.proto

import type { Entry as _immudb_schema_Entry, Entry__Output as _immudb_schema_Entry__Output } from '../../immudb/schema/Entry';
import type { VerifiableTx as _immudb_schema_VerifiableTx, VerifiableTx__Output as _immudb_schema_VerifiableTx__Output } from '../../immudb/schema/VerifiableTx';
import type { InclusionProof as _immudb_schema_InclusionProof, InclusionProof__Output as _immudb_schema_InclusionProof__Output } from '../../immudb/schema/InclusionProof';

export interface VerifiableEntry {
  'entry'?: (_immudb_schema_Entry | null);
  'verifiableTx'?: (_immudb_schema_VerifiableTx | null);
  'inclusionProof'?: (_immudb_schema_InclusionProof | null);
}

export interface VerifiableEntry__Output {
  'entry': (_immudb_schema_Entry__Output | null);
  'verifiableTx': (_immudb_schema_VerifiableTx__Output | null);
  'inclusionProof': (_immudb_schema_InclusionProof__Output | null);
}
