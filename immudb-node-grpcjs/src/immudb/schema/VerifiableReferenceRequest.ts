// Original file: schema.proto

import type { ReferenceRequest as _immudb_schema_ReferenceRequest, ReferenceRequest__Output as _immudb_schema_ReferenceRequest__Output } from '../../immudb/schema/ReferenceRequest';
import type { Long } from '@grpc/proto-loader';

export interface VerifiableReferenceRequest {
  'referenceRequest'?: (_immudb_schema_ReferenceRequest | null);
  'proveSinceTx'?: (number | string | Long);
}

export interface VerifiableReferenceRequest__Output {
  'referenceRequest': (_immudb_schema_ReferenceRequest__Output | null);
  'proveSinceTx': (Long);
}
