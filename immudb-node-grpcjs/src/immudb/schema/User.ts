// Original file: schema.proto

import type { Permission as _immudb_schema_Permission, Permission__Output as _immudb_schema_Permission__Output } from '../../immudb/schema/Permission';

export interface User {
  'user'?: (Buffer | Uint8Array | string);
  'permissions'?: (_immudb_schema_Permission)[];
  'createdby'?: (string);
  'createdat'?: (string);
  'active'?: (boolean);
}

export interface User__Output {
  'user': (Buffer);
  'permissions': (_immudb_schema_Permission__Output)[];
  'createdby': (string);
  'createdat': (string);
  'active': (boolean);
}
