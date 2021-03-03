import { PermissionAction } from '../src/proto/schema_pb'

export enum USER_PERMISSION {
  NONE = 0,
  READ_ONLY = 1,
  READ_WRITE = 2,
}
export const USER_ACTION  = PermissionAction