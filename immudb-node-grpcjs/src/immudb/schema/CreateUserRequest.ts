// Original file: schema.proto


export interface CreateUserRequest {
  'user'?: (Buffer | Uint8Array | string);
  'password'?: (Buffer | Uint8Array | string);
  'permission'?: (number);
  'database'?: (string);
}

export interface CreateUserRequest__Output {
  'user': (Buffer);
  'password': (Buffer);
  'permission': (number);
  'database': (string);
}
