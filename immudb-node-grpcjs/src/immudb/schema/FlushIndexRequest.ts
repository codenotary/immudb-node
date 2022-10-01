// Original file: schema.proto


export interface FlushIndexRequest {
  'cleanupPercentage'?: (number | string);
  'synced'?: (boolean);
}

export interface FlushIndexRequest__Output {
  'cleanupPercentage': (number | string);
  'synced': (boolean);
}
