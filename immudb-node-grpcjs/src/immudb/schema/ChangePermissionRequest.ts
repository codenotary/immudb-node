// Original file: schema.proto

import type { PermissionAction as _immudb_schema_PermissionAction } from '../../immudb/schema/PermissionAction';

export interface ChangePermissionRequest {
  'action'?: (_immudb_schema_PermissionAction | keyof typeof _immudb_schema_PermissionAction);
  'username'?: (string);
  'database'?: (string);
  'permission'?: (number);
}

export interface ChangePermissionRequest__Output {
  'action': (keyof typeof _immudb_schema_PermissionAction);
  'username': (string);
  'database': (string);
  'permission': (number);
}
