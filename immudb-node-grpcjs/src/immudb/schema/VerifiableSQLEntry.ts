// Original file: schema.proto

import type { SQLEntry as _immudb_schema_SQLEntry, SQLEntry__Output as _immudb_schema_SQLEntry__Output } from '../../immudb/schema/SQLEntry';
import type { VerifiableTx as _immudb_schema_VerifiableTx, VerifiableTx__Output as _immudb_schema_VerifiableTx__Output } from '../../immudb/schema/VerifiableTx';
import type { InclusionProof as _immudb_schema_InclusionProof, InclusionProof__Output as _immudb_schema_InclusionProof__Output } from '../../immudb/schema/InclusionProof';

export interface VerifiableSQLEntry {
  'sqlEntry'?: (_immudb_schema_SQLEntry | null);
  'verifiableTx'?: (_immudb_schema_VerifiableTx | null);
  'inclusionProof'?: (_immudb_schema_InclusionProof | null);
  'DatabaseId'?: (number);
  'TableId'?: (number);
  'ColNamesById'?: ({[key: number]: string});
  'ColIdsByName'?: ({[key: string]: number});
  'ColTypesById'?: ({[key: number]: string});
  'ColLenById'?: ({[key: number]: number});
  'PKIDs'?: (number)[];
}

export interface VerifiableSQLEntry__Output {
  'sqlEntry': (_immudb_schema_SQLEntry__Output | null);
  'verifiableTx': (_immudb_schema_VerifiableTx__Output | null);
  'inclusionProof': (_immudb_schema_InclusionProof__Output | null);
  'DatabaseId': (number);
  'TableId': (number);
  'ColNamesById': ({[key: number]: string});
  'ColIdsByName': ({[key: string]: number});
  'ColTypesById': ({[key: number]: string});
  'ColLenById': ({[key: number]: number});
  'PKIDs': (number)[];
}
