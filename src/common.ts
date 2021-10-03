import * as schemaTypes from './proto/schema_pb';
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import { SQLValue } from '../types/parameters';

export const getSQLValue = (value: SQLValue = null) => {
  const sqlValue = new schemaTypes.SQLValue();

  if (value === null) {
    sqlValue.setNull(google_protobuf_struct_pb.NullValue.NULL_VALUE);
  }

  if (typeof value === 'number') {
    sqlValue.setN(value);
  }

  if (typeof value === 'string') {
    sqlValue.setS(value);
  }

  if (typeof value === 'boolean') {
    sqlValue.setB(value);
  }

  if (ArrayBuffer.isView(value)) {
    sqlValue.setBs(value);
  }

  return sqlValue;
}