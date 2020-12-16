// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright 2019-2020 vChain, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var schema_pb = require('./schema_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_AuthConfig(arg) {
  if (!(arg instanceof schema_pb.AuthConfig)) {
    throw new Error('Expected argument of type immudb.schema.AuthConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_AuthConfig(buffer_arg) {
  return schema_pb.AuthConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ChangePasswordRequest(arg) {
  if (!(arg instanceof schema_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type immudb.schema.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ChangePasswordRequest(buffer_arg) {
  return schema_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ChangePermissionRequest(arg) {
  if (!(arg instanceof schema_pb.ChangePermissionRequest)) {
    throw new Error('Expected argument of type immudb.schema.ChangePermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ChangePermissionRequest(buffer_arg) {
  return schema_pb.ChangePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ConsistencyProof(arg) {
  if (!(arg instanceof schema_pb.ConsistencyProof)) {
    throw new Error('Expected argument of type immudb.schema.ConsistencyProof');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ConsistencyProof(buffer_arg) {
  return schema_pb.ConsistencyProof.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_CreateUserRequest(arg) {
  if (!(arg instanceof schema_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type immudb.schema.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_CreateUserRequest(buffer_arg) {
  return schema_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Database(arg) {
  if (!(arg instanceof schema_pb.Database)) {
    throw new Error('Expected argument of type immudb.schema.Database');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Database(buffer_arg) {
  return schema_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_DatabaseListResponse(arg) {
  if (!(arg instanceof schema_pb.DatabaseListResponse)) {
    throw new Error('Expected argument of type immudb.schema.DatabaseListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_DatabaseListResponse(buffer_arg) {
  return schema_pb.DatabaseListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_HealthResponse(arg) {
  if (!(arg instanceof schema_pb.HealthResponse)) {
    throw new Error('Expected argument of type immudb.schema.HealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_HealthResponse(buffer_arg) {
  return schema_pb.HealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_HistoryOptions(arg) {
  if (!(arg instanceof schema_pb.HistoryOptions)) {
    throw new Error('Expected argument of type immudb.schema.HistoryOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_HistoryOptions(buffer_arg) {
  return schema_pb.HistoryOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_IScanOptions(arg) {
  if (!(arg instanceof schema_pb.IScanOptions)) {
    throw new Error('Expected argument of type immudb.schema.IScanOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_IScanOptions(buffer_arg) {
  return schema_pb.IScanOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_InclusionProof(arg) {
  if (!(arg instanceof schema_pb.InclusionProof)) {
    throw new Error('Expected argument of type immudb.schema.InclusionProof');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_InclusionProof(buffer_arg) {
  return schema_pb.InclusionProof.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Index(arg) {
  if (!(arg instanceof schema_pb.Index)) {
    throw new Error('Expected argument of type immudb.schema.Index');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Index(buffer_arg) {
  return schema_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Item(arg) {
  if (!(arg instanceof schema_pb.Item)) {
    throw new Error('Expected argument of type immudb.schema.Item');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Item(buffer_arg) {
  return schema_pb.Item.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ItemList(arg) {
  if (!(arg instanceof schema_pb.ItemList)) {
    throw new Error('Expected argument of type immudb.schema.ItemList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ItemList(buffer_arg) {
  return schema_pb.ItemList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ItemsCount(arg) {
  if (!(arg instanceof schema_pb.ItemsCount)) {
    throw new Error('Expected argument of type immudb.schema.ItemsCount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ItemsCount(buffer_arg) {
  return schema_pb.ItemsCount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KVList(arg) {
  if (!(arg instanceof schema_pb.KVList)) {
    throw new Error('Expected argument of type immudb.schema.KVList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KVList(buffer_arg) {
  return schema_pb.KVList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Key(arg) {
  if (!(arg instanceof schema_pb.Key)) {
    throw new Error('Expected argument of type immudb.schema.Key');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Key(buffer_arg) {
  return schema_pb.Key.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyList(arg) {
  if (!(arg instanceof schema_pb.KeyList)) {
    throw new Error('Expected argument of type immudb.schema.KeyList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyList(buffer_arg) {
  return schema_pb.KeyList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyPrefix(arg) {
  if (!(arg instanceof schema_pb.KeyPrefix)) {
    throw new Error('Expected argument of type immudb.schema.KeyPrefix');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyPrefix(buffer_arg) {
  return schema_pb.KeyPrefix.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_KeyValue(arg) {
  if (!(arg instanceof schema_pb.KeyValue)) {
    throw new Error('Expected argument of type immudb.schema.KeyValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_KeyValue(buffer_arg) {
  return schema_pb.KeyValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_LoginRequest(arg) {
  if (!(arg instanceof schema_pb.LoginRequest)) {
    throw new Error('Expected argument of type immudb.schema.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_LoginRequest(buffer_arg) {
  return schema_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_LoginResponse(arg) {
  if (!(arg instanceof schema_pb.LoginResponse)) {
    throw new Error('Expected argument of type immudb.schema.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_LoginResponse(buffer_arg) {
  return schema_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_MTLSConfig(arg) {
  if (!(arg instanceof schema_pb.MTLSConfig)) {
    throw new Error('Expected argument of type immudb.schema.MTLSConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_MTLSConfig(buffer_arg) {
  return schema_pb.MTLSConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Page(arg) {
  if (!(arg instanceof schema_pb.Page)) {
    throw new Error('Expected argument of type immudb.schema.Page');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Page(buffer_arg) {
  return schema_pb.Page.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Proof(arg) {
  if (!(arg instanceof schema_pb.Proof)) {
    throw new Error('Expected argument of type immudb.schema.Proof');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Proof(buffer_arg) {
  return schema_pb.Proof.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ReferenceOptions(arg) {
  if (!(arg instanceof schema_pb.ReferenceOptions)) {
    throw new Error('Expected argument of type immudb.schema.ReferenceOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ReferenceOptions(buffer_arg) {
  return schema_pb.ReferenceOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Root(arg) {
  if (!(arg instanceof schema_pb.Root)) {
    throw new Error('Expected argument of type immudb.schema.Root');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Root(buffer_arg) {
  return schema_pb.Root.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeGetOptions(arg) {
  if (!(arg instanceof schema_pb.SafeGetOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeGetOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeGetOptions(buffer_arg) {
  return schema_pb.SafeGetOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeIndexOptions(arg) {
  if (!(arg instanceof schema_pb.SafeIndexOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeIndexOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeIndexOptions(buffer_arg) {
  return schema_pb.SafeIndexOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeItem(arg) {
  if (!(arg instanceof schema_pb.SafeItem)) {
    throw new Error('Expected argument of type immudb.schema.SafeItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeItem(buffer_arg) {
  return schema_pb.SafeItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeReferenceOptions(arg) {
  if (!(arg instanceof schema_pb.SafeReferenceOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeReferenceOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeReferenceOptions(buffer_arg) {
  return schema_pb.SafeReferenceOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeSetOptions(arg) {
  if (!(arg instanceof schema_pb.SafeSetOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeSetOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeSetOptions(buffer_arg) {
  return schema_pb.SafeSetOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SafeZAddOptions(arg) {
  if (!(arg instanceof schema_pb.SafeZAddOptions)) {
    throw new Error('Expected argument of type immudb.schema.SafeZAddOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SafeZAddOptions(buffer_arg) {
  return schema_pb.SafeZAddOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ScanOptions(arg) {
  if (!(arg instanceof schema_pb.ScanOptions)) {
    throw new Error('Expected argument of type immudb.schema.ScanOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ScanOptions(buffer_arg) {
  return schema_pb.ScanOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_SetActiveUserRequest(arg) {
  if (!(arg instanceof schema_pb.SetActiveUserRequest)) {
    throw new Error('Expected argument of type immudb.schema.SetActiveUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_SetActiveUserRequest(buffer_arg) {
  return schema_pb.SetActiveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_Tree(arg) {
  if (!(arg instanceof schema_pb.Tree)) {
    throw new Error('Expected argument of type immudb.schema.Tree');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_Tree(buffer_arg) {
  return schema_pb.Tree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_UseDatabaseReply(arg) {
  if (!(arg instanceof schema_pb.UseDatabaseReply)) {
    throw new Error('Expected argument of type immudb.schema.UseDatabaseReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_UseDatabaseReply(buffer_arg) {
  return schema_pb.UseDatabaseReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_UserList(arg) {
  if (!(arg instanceof schema_pb.UserList)) {
    throw new Error('Expected argument of type immudb.schema.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_UserList(buffer_arg) {
  return schema_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZAddOptions(arg) {
  if (!(arg instanceof schema_pb.ZAddOptions)) {
    throw new Error('Expected argument of type immudb.schema.ZAddOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZAddOptions(buffer_arg) {
  return schema_pb.ZAddOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZItemList(arg) {
  if (!(arg instanceof schema_pb.ZItemList)) {
    throw new Error('Expected argument of type immudb.schema.ZItemList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZItemList(buffer_arg) {
  return schema_pb.ZItemList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_immudb_schema_ZScanOptions(arg) {
  if (!(arg instanceof schema_pb.ZScanOptions)) {
    throw new Error('Expected argument of type immudb.schema.ZScanOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_immudb_schema_ZScanOptions(buffer_arg) {
  return schema_pb.ZScanOptions.deserializeBinary(new Uint8Array(buffer_arg));
}


// immudb gRPC & REST service
// IMPORTANT: All get and safeget functions return base64-encoded keys and values, while all set and safeset functions expect base64-encoded inputs.
var ImmuServiceService = exports.ImmuServiceService = {
  listUsers: {
    path: '/immudb.schema.ImmuService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.UserList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_UserList,
    responseDeserialize: deserialize_immudb_schema_UserList,
  },
  createUser: {
    path: '/immudb.schema.ImmuService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.CreateUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_CreateUserRequest,
    requestDeserialize: deserialize_immudb_schema_CreateUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  changePassword: {
    path: '/immudb.schema.ImmuService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ChangePasswordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_ChangePasswordRequest,
    requestDeserialize: deserialize_immudb_schema_ChangePasswordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateAuthConfig: {
    path: '/immudb.schema.ImmuService/UpdateAuthConfig',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.AuthConfig,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_AuthConfig,
    requestDeserialize: deserialize_immudb_schema_AuthConfig,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateMTLSConfig: {
    path: '/immudb.schema.ImmuService/UpdateMTLSConfig',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.MTLSConfig,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_MTLSConfig,
    requestDeserialize: deserialize_immudb_schema_MTLSConfig,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  printTree: {
    path: '/immudb.schema.ImmuService/PrintTree',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.Tree,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_Tree,
    responseDeserialize: deserialize_immudb_schema_Tree,
  },
  login: {
    path: '/immudb.schema.ImmuService/Login',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.LoginRequest,
    responseType: schema_pb.LoginResponse,
    requestSerialize: serialize_immudb_schema_LoginRequest,
    requestDeserialize: deserialize_immudb_schema_LoginRequest,
    responseSerialize: serialize_immudb_schema_LoginResponse,
    responseDeserialize: deserialize_immudb_schema_LoginResponse,
  },
  logout: {
    path: '/immudb.schema.ImmuService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  set: {
    path: '/immudb.schema.ImmuService/Set',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyValue,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_KeyValue,
    requestDeserialize: deserialize_immudb_schema_KeyValue,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  safeSet: {
    path: '/immudb.schema.ImmuService/SafeSet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeSetOptions,
    responseType: schema_pb.Proof,
    requestSerialize: serialize_immudb_schema_SafeSetOptions,
    requestDeserialize: deserialize_immudb_schema_SafeSetOptions,
    responseSerialize: serialize_immudb_schema_Proof,
    responseDeserialize: deserialize_immudb_schema_Proof,
  },
  get: {
    path: '/immudb.schema.ImmuService/Get',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Key,
    responseType: schema_pb.Item,
    requestSerialize: serialize_immudb_schema_Key,
    requestDeserialize: deserialize_immudb_schema_Key,
    responseSerialize: serialize_immudb_schema_Item,
    responseDeserialize: deserialize_immudb_schema_Item,
  },
  safeGet: {
    path: '/immudb.schema.ImmuService/SafeGet',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeGetOptions,
    responseType: schema_pb.SafeItem,
    requestSerialize: serialize_immudb_schema_SafeGetOptions,
    requestDeserialize: deserialize_immudb_schema_SafeGetOptions,
    responseSerialize: serialize_immudb_schema_SafeItem,
    responseDeserialize: deserialize_immudb_schema_SafeItem,
  },
  setBatch: {
    path: '/immudb.schema.ImmuService/SetBatch',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KVList,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_KVList,
    requestDeserialize: deserialize_immudb_schema_KVList,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  getBatch: {
    path: '/immudb.schema.ImmuService/GetBatch',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyList,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_KeyList,
    requestDeserialize: deserialize_immudb_schema_KeyList,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  scan: {
    path: '/immudb.schema.ImmuService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ScanOptions,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_ScanOptions,
    requestDeserialize: deserialize_immudb_schema_ScanOptions,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  count: {
    path: '/immudb.schema.ImmuService/Count',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.KeyPrefix,
    responseType: schema_pb.ItemsCount,
    requestSerialize: serialize_immudb_schema_KeyPrefix,
    requestDeserialize: deserialize_immudb_schema_KeyPrefix,
    responseSerialize: serialize_immudb_schema_ItemsCount,
    responseDeserialize: deserialize_immudb_schema_ItemsCount,
  },
  countAll: {
    path: '/immudb.schema.ImmuService/CountAll',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.ItemsCount,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_ItemsCount,
    responseDeserialize: deserialize_immudb_schema_ItemsCount,
  },
  currentRoot: {
    path: '/immudb.schema.ImmuService/CurrentRoot',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.Root,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_Root,
    responseDeserialize: deserialize_immudb_schema_Root,
  },
  inclusion: {
    path: '/immudb.schema.ImmuService/Inclusion',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Index,
    responseType: schema_pb.InclusionProof,
    requestSerialize: serialize_immudb_schema_Index,
    requestDeserialize: deserialize_immudb_schema_Index,
    responseSerialize: serialize_immudb_schema_InclusionProof,
    responseDeserialize: deserialize_immudb_schema_InclusionProof,
  },
  consistency: {
    path: '/immudb.schema.ImmuService/Consistency',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Index,
    responseType: schema_pb.ConsistencyProof,
    requestSerialize: serialize_immudb_schema_Index,
    requestDeserialize: deserialize_immudb_schema_Index,
    responseSerialize: serialize_immudb_schema_ConsistencyProof,
    responseDeserialize: deserialize_immudb_schema_ConsistencyProof,
  },
  byIndex: {
    path: '/immudb.schema.ImmuService/ByIndex',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Index,
    responseType: schema_pb.Item,
    requestSerialize: serialize_immudb_schema_Index,
    requestDeserialize: deserialize_immudb_schema_Index,
    responseSerialize: serialize_immudb_schema_Item,
    responseDeserialize: deserialize_immudb_schema_Item,
  },
  bySafeIndex: {
    path: '/immudb.schema.ImmuService/BySafeIndex',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeIndexOptions,
    responseType: schema_pb.SafeItem,
    requestSerialize: serialize_immudb_schema_SafeIndexOptions,
    requestDeserialize: deserialize_immudb_schema_SafeIndexOptions,
    responseSerialize: serialize_immudb_schema_SafeItem,
    responseDeserialize: deserialize_immudb_schema_SafeItem,
  },
  history: {
    path: '/immudb.schema.ImmuService/History',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.HistoryOptions,
    responseType: schema_pb.ItemList,
    requestSerialize: serialize_immudb_schema_HistoryOptions,
    requestDeserialize: deserialize_immudb_schema_HistoryOptions,
    responseSerialize: serialize_immudb_schema_ItemList,
    responseDeserialize: deserialize_immudb_schema_ItemList,
  },
  health: {
    path: '/immudb.schema.ImmuService/Health',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.HealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_HealthResponse,
    responseDeserialize: deserialize_immudb_schema_HealthResponse,
  },
  reference: {
    path: '/immudb.schema.ImmuService/Reference',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ReferenceOptions,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_ReferenceOptions,
    requestDeserialize: deserialize_immudb_schema_ReferenceOptions,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  safeReference: {
    path: '/immudb.schema.ImmuService/SafeReference',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeReferenceOptions,
    responseType: schema_pb.Proof,
    requestSerialize: serialize_immudb_schema_SafeReferenceOptions,
    requestDeserialize: deserialize_immudb_schema_SafeReferenceOptions,
    responseSerialize: serialize_immudb_schema_Proof,
    responseDeserialize: deserialize_immudb_schema_Proof,
  },
  zAdd: {
    path: '/immudb.schema.ImmuService/ZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZAddOptions,
    responseType: schema_pb.Index,
    requestSerialize: serialize_immudb_schema_ZAddOptions,
    requestDeserialize: deserialize_immudb_schema_ZAddOptions,
    responseSerialize: serialize_immudb_schema_Index,
    responseDeserialize: deserialize_immudb_schema_Index,
  },
  zScan: {
    path: '/immudb.schema.ImmuService/ZScan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ZScanOptions,
    responseType: schema_pb.ZItemList,
    requestSerialize: serialize_immudb_schema_ZScanOptions,
    requestDeserialize: deserialize_immudb_schema_ZScanOptions,
    responseSerialize: serialize_immudb_schema_ZItemList,
    responseDeserialize: deserialize_immudb_schema_ZItemList,
  },
  safeZAdd: {
    path: '/immudb.schema.ImmuService/SafeZAdd',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SafeZAddOptions,
    responseType: schema_pb.Proof,
    requestSerialize: serialize_immudb_schema_SafeZAddOptions,
    requestDeserialize: deserialize_immudb_schema_SafeZAddOptions,
    responseSerialize: serialize_immudb_schema_Proof,
    responseDeserialize: deserialize_immudb_schema_Proof,
  },
  iScan: {
    path: '/immudb.schema.ImmuService/IScan',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.IScanOptions,
    responseType: schema_pb.Page,
    requestSerialize: serialize_immudb_schema_IScanOptions,
    requestDeserialize: deserialize_immudb_schema_IScanOptions,
    responseSerialize: serialize_immudb_schema_Page,
    responseDeserialize: deserialize_immudb_schema_Page,
  },
  // 	rpc Dump(google.protobuf.Empty) returns (stream pb.KVList) {}
createDatabase: {
    path: '/immudb.schema.ImmuService/CreateDatabase',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Database,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_Database,
    requestDeserialize: deserialize_immudb_schema_Database,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  useDatabase: {
    path: '/immudb.schema.ImmuService/UseDatabase',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.Database,
    responseType: schema_pb.UseDatabaseReply,
    requestSerialize: serialize_immudb_schema_Database,
    requestDeserialize: deserialize_immudb_schema_Database,
    responseSerialize: serialize_immudb_schema_UseDatabaseReply,
    responseDeserialize: deserialize_immudb_schema_UseDatabaseReply,
  },
  changePermission: {
    path: '/immudb.schema.ImmuService/ChangePermission',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.ChangePermissionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_ChangePermissionRequest,
    requestDeserialize: deserialize_immudb_schema_ChangePermissionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setActiveUser: {
    path: '/immudb.schema.ImmuService/SetActiveUser',
    requestStream: false,
    responseStream: false,
    requestType: schema_pb.SetActiveUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_immudb_schema_SetActiveUserRequest,
    requestDeserialize: deserialize_immudb_schema_SetActiveUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  databaseList: {
    path: '/immudb.schema.ImmuService/DatabaseList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: schema_pb.DatabaseListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_immudb_schema_DatabaseListResponse,
    responseDeserialize: deserialize_immudb_schema_DatabaseListResponse,
  },
};

exports.ImmuServiceClient = grpc.makeGenericClientConstructor(ImmuServiceService);
