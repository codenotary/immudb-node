// Original file: schema.proto

import type { KeyValue as _immudb_schema_KeyValue, KeyValue__Output as _immudb_schema_KeyValue__Output } from '../../immudb/schema/KeyValue';
import type { ZAddRequest as _immudb_schema_ZAddRequest, ZAddRequest__Output as _immudb_schema_ZAddRequest__Output } from '../../immudb/schema/ZAddRequest';
import type { ReferenceRequest as _immudb_schema_ReferenceRequest, ReferenceRequest__Output as _immudb_schema_ReferenceRequest__Output } from '../../immudb/schema/ReferenceRequest';

export interface Op {
  'kv'?: (_immudb_schema_KeyValue | null);
  'zAdd'?: (_immudb_schema_ZAddRequest | null);
  'ref'?: (_immudb_schema_ReferenceRequest | null);
  'operation'?: "kv"|"zAdd"|"ref";
}

export interface Op__Output {
  'kv'?: (_immudb_schema_KeyValue__Output | null);
  'zAdd'?: (_immudb_schema_ZAddRequest__Output | null);
  'ref'?: (_immudb_schema_ReferenceRequest__Output | null);
  'operation': "kv"|"zAdd"|"ref";
}
