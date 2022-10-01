// Original file: schema.proto


export interface ChangePasswordRequest {
  'user'?: (Buffer | Uint8Array | string);
  'oldPassword'?: (Buffer | Uint8Array | string);
  'newPassword'?: (Buffer | Uint8Array | string);
}

export interface ChangePasswordRequest__Output {
  'user': (Buffer);
  'oldPassword': (Buffer);
  'newPassword': (Buffer);
}
