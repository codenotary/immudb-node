// Original file: schema.proto


export interface OpenSessionRequest {
  'username'?: (Buffer | Uint8Array | string);
  'password'?: (Buffer | Uint8Array | string);
  'databaseName'?: (string);
}

export interface OpenSessionRequest__Output {
  'username': (Buffer);
  'password': (Buffer);
  'databaseName': (string);
}
