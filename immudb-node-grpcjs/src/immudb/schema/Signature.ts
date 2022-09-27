// Original file: schema.proto


export interface Signature {
  'publicKey'?: (Buffer | Uint8Array | string);
  'signature'?: (Buffer | Uint8Array | string);
}

export interface Signature__Output {
  'publicKey': (Buffer);
  'signature': (Buffer);
}
