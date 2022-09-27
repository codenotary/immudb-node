// Original file: schema.proto

import type { Op as _immudb_schema_Op, Op__Output as _immudb_schema_Op__Output } from '../../immudb/schema/Op';
import type { Precondition as _immudb_schema_Precondition, Precondition__Output as _immudb_schema_Precondition__Output } from '../../immudb/schema/Precondition';

export interface ExecAllRequest {
  'Operations'?: (_immudb_schema_Op)[];
  'noWait'?: (boolean);
  'preconditions'?: (_immudb_schema_Precondition)[];
}

export interface ExecAllRequest__Output {
  'Operations': (_immudb_schema_Op__Output)[];
  'noWait': (boolean);
  'preconditions': (_immudb_schema_Precondition__Output)[];
}
