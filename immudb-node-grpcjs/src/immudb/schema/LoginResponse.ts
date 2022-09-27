// Original file: schema.proto


export interface LoginResponse {
  'token'?: (string);
  'warning'?: (Buffer | Uint8Array | string);
}

export interface LoginResponse__Output {
  'token': (string);
  'warning': (Buffer);
}
