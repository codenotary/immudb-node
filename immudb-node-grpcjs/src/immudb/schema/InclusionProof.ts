// Original file: schema.proto


export interface InclusionProof {
  'leaf'?: (number);
  'width'?: (number);
  'terms'?: (Buffer | Uint8Array | string)[];
}

export interface InclusionProof__Output {
  'leaf': (number);
  'width': (number);
  'terms': (Buffer)[];
}
