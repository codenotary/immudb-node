// Original file: schema.proto


export interface LoginRequest {
  'user'?: (Buffer | Uint8Array | string);
  'password'?: (Buffer | Uint8Array | string);
}

export interface LoginRequest__Output {
  'user': (Buffer);
  'password': (Buffer);
}
