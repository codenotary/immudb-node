// Original file: schema.proto


export interface DatabaseSettings {
  'databaseName'?: (string);
  'replica'?: (boolean);
  'masterDatabase'?: (string);
  'masterAddress'?: (string);
  'masterPort'?: (number);
  'followerUsername'?: (string);
  'followerPassword'?: (string);
  'fileSize'?: (number);
  'maxKeyLen'?: (number);
  'maxValueLen'?: (number);
  'maxTxEntries'?: (number);
  'excludeCommitTime'?: (boolean);
}

export interface DatabaseSettings__Output {
  'databaseName': (string);
  'replica': (boolean);
  'masterDatabase': (string);
  'masterAddress': (string);
  'masterPort': (number);
  'followerUsername': (string);
  'followerPassword': (string);
  'fileSize': (number);
  'maxKeyLen': (number);
  'maxValueLen': (number);
  'maxTxEntries': (number);
  'excludeCommitTime': (boolean);
}
