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
function serialize_immudb_schema_Entries(arg) {
    if (!(arg instanceof schema_pb.Entries)) {
        throw new Error('Expected argument of type immudb.schema.Entries');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_Entries(buffer_arg) {
    return schema_pb.Entries.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_Entry(arg) {
    if (!(arg instanceof schema_pb.Entry)) {
        throw new Error('Expected argument of type immudb.schema.Entry');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_Entry(buffer_arg) {
    return schema_pb.Entry.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_EntryCount(arg) {
    if (!(arg instanceof schema_pb.EntryCount)) {
        throw new Error('Expected argument of type immudb.schema.EntryCount');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_EntryCount(buffer_arg) {
    return schema_pb.EntryCount.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ExecAllRequest(arg) {
    if (!(arg instanceof schema_pb.ExecAllRequest)) {
        throw new Error('Expected argument of type immudb.schema.ExecAllRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ExecAllRequest(buffer_arg) {
    return schema_pb.ExecAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_immudb_schema_HistoryRequest(arg) {
    if (!(arg instanceof schema_pb.HistoryRequest)) {
        throw new Error('Expected argument of type immudb.schema.HistoryRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_HistoryRequest(buffer_arg) {
    return schema_pb.HistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ImmutableState(arg) {
    if (!(arg instanceof schema_pb.ImmutableState)) {
        throw new Error('Expected argument of type immudb.schema.ImmutableState');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ImmutableState(buffer_arg) {
    return schema_pb.ImmutableState.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_KeyListRequest(arg) {
    if (!(arg instanceof schema_pb.KeyListRequest)) {
        throw new Error('Expected argument of type immudb.schema.KeyListRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_KeyListRequest(buffer_arg) {
    return schema_pb.KeyListRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_immudb_schema_KeyRequest(arg) {
    if (!(arg instanceof schema_pb.KeyRequest)) {
        throw new Error('Expected argument of type immudb.schema.KeyRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_KeyRequest(buffer_arg) {
    return schema_pb.KeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_immudb_schema_ReferenceRequest(arg) {
    if (!(arg instanceof schema_pb.ReferenceRequest)) {
        throw new Error('Expected argument of type immudb.schema.ReferenceRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ReferenceRequest(buffer_arg) {
    return schema_pb.ReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ScanRequest(arg) {
    if (!(arg instanceof schema_pb.ScanRequest)) {
        throw new Error('Expected argument of type immudb.schema.ScanRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ScanRequest(buffer_arg) {
    return schema_pb.ScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_immudb_schema_SetRequest(arg) {
    if (!(arg instanceof schema_pb.SetRequest)) {
        throw new Error('Expected argument of type immudb.schema.SetRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_SetRequest(buffer_arg) {
    return schema_pb.SetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_Tx(arg) {
    if (!(arg instanceof schema_pb.Tx)) {
        throw new Error('Expected argument of type immudb.schema.Tx');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_Tx(buffer_arg) {
    return schema_pb.Tx.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_TxList(arg) {
    if (!(arg instanceof schema_pb.TxList)) {
        throw new Error('Expected argument of type immudb.schema.TxList');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_TxList(buffer_arg) {
    return schema_pb.TxList.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_TxMetadata(arg) {
    if (!(arg instanceof schema_pb.TxMetadata)) {
        throw new Error('Expected argument of type immudb.schema.TxMetadata');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_TxMetadata(buffer_arg) {
    return schema_pb.TxMetadata.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_TxRequest(arg) {
    if (!(arg instanceof schema_pb.TxRequest)) {
        throw new Error('Expected argument of type immudb.schema.TxRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_TxRequest(buffer_arg) {
    return schema_pb.TxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_TxScanRequest(arg) {
    if (!(arg instanceof schema_pb.TxScanRequest)) {
        throw new Error('Expected argument of type immudb.schema.TxScanRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_TxScanRequest(buffer_arg) {
    return schema_pb.TxScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_immudb_schema_VerifiableEntry(arg) {
    if (!(arg instanceof schema_pb.VerifiableEntry)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableEntry');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableEntry(buffer_arg) {
    return schema_pb.VerifiableEntry.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableGetRequest(arg) {
    if (!(arg instanceof schema_pb.VerifiableGetRequest)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableGetRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableGetRequest(buffer_arg) {
    return schema_pb.VerifiableGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableReferenceRequest(arg) {
    if (!(arg instanceof schema_pb.VerifiableReferenceRequest)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableReferenceRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableReferenceRequest(buffer_arg) {
    return schema_pb.VerifiableReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableSetRequest(arg) {
    if (!(arg instanceof schema_pb.VerifiableSetRequest)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableSetRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableSetRequest(buffer_arg) {
    return schema_pb.VerifiableSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableTx(arg) {
    if (!(arg instanceof schema_pb.VerifiableTx)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableTx');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableTx(buffer_arg) {
    return schema_pb.VerifiableTx.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableTxRequest(arg) {
    if (!(arg instanceof schema_pb.VerifiableTxRequest)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableTxRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableTxRequest(buffer_arg) {
    return schema_pb.VerifiableTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_VerifiableZAddRequest(arg) {
    if (!(arg instanceof schema_pb.VerifiableZAddRequest)) {
        throw new Error('Expected argument of type immudb.schema.VerifiableZAddRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_VerifiableZAddRequest(buffer_arg) {
    return schema_pb.VerifiableZAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ZAddRequest(arg) {
    if (!(arg instanceof schema_pb.ZAddRequest)) {
        throw new Error('Expected argument of type immudb.schema.ZAddRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ZAddRequest(buffer_arg) {
    return schema_pb.ZAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ZEntries(arg) {
    if (!(arg instanceof schema_pb.ZEntries)) {
        throw new Error('Expected argument of type immudb.schema.ZEntries');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ZEntries(buffer_arg) {
    return schema_pb.ZEntries.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_immudb_schema_ZScanRequest(arg) {
    if (!(arg instanceof schema_pb.ZScanRequest)) {
        throw new Error('Expected argument of type immudb.schema.ZScanRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_immudb_schema_ZScanRequest(buffer_arg) {
    return schema_pb.ZScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
        requestType: schema_pb.SetRequest,
        responseType: schema_pb.TxMetadata,
        requestSerialize: serialize_immudb_schema_SetRequest,
        requestDeserialize: deserialize_immudb_schema_SetRequest,
        responseSerialize: serialize_immudb_schema_TxMetadata,
        responseDeserialize: deserialize_immudb_schema_TxMetadata,
    },
    verifiableSet: {
        path: '/immudb.schema.ImmuService/VerifiableSet',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.VerifiableSetRequest,
        responseType: schema_pb.VerifiableTx,
        requestSerialize: serialize_immudb_schema_VerifiableSetRequest,
        requestDeserialize: deserialize_immudb_schema_VerifiableSetRequest,
        responseSerialize: serialize_immudb_schema_VerifiableTx,
        responseDeserialize: deserialize_immudb_schema_VerifiableTx,
    },
    get: {
        path: '/immudb.schema.ImmuService/Get',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.KeyRequest,
        responseType: schema_pb.Entry,
        requestSerialize: serialize_immudb_schema_KeyRequest,
        requestDeserialize: deserialize_immudb_schema_KeyRequest,
        responseSerialize: serialize_immudb_schema_Entry,
        responseDeserialize: deserialize_immudb_schema_Entry,
    },
    verifiableGet: {
        path: '/immudb.schema.ImmuService/VerifiableGet',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.VerifiableGetRequest,
        responseType: schema_pb.VerifiableEntry,
        requestSerialize: serialize_immudb_schema_VerifiableGetRequest,
        requestDeserialize: deserialize_immudb_schema_VerifiableGetRequest,
        responseSerialize: serialize_immudb_schema_VerifiableEntry,
        responseDeserialize: deserialize_immudb_schema_VerifiableEntry,
    },
    getAll: {
        path: '/immudb.schema.ImmuService/GetAll',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.KeyListRequest,
        responseType: schema_pb.Entries,
        requestSerialize: serialize_immudb_schema_KeyListRequest,
        requestDeserialize: deserialize_immudb_schema_KeyListRequest,
        responseSerialize: serialize_immudb_schema_Entries,
        responseDeserialize: deserialize_immudb_schema_Entries,
    },
    execAll: {
        path: '/immudb.schema.ImmuService/ExecAll',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.ExecAllRequest,
        responseType: schema_pb.TxMetadata,
        requestSerialize: serialize_immudb_schema_ExecAllRequest,
        requestDeserialize: deserialize_immudb_schema_ExecAllRequest,
        responseSerialize: serialize_immudb_schema_TxMetadata,
        responseDeserialize: deserialize_immudb_schema_TxMetadata,
    },
    scan: {
        path: '/immudb.schema.ImmuService/Scan',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.ScanRequest,
        responseType: schema_pb.Entries,
        requestSerialize: serialize_immudb_schema_ScanRequest,
        requestDeserialize: deserialize_immudb_schema_ScanRequest,
        responseSerialize: serialize_immudb_schema_Entries,
        responseDeserialize: deserialize_immudb_schema_Entries,
    },
    count: {
        path: '/immudb.schema.ImmuService/Count',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.KeyPrefix,
        responseType: schema_pb.EntryCount,
        requestSerialize: serialize_immudb_schema_KeyPrefix,
        requestDeserialize: deserialize_immudb_schema_KeyPrefix,
        responseSerialize: serialize_immudb_schema_EntryCount,
        responseDeserialize: deserialize_immudb_schema_EntryCount,
    },
    countAll: {
        path: '/immudb.schema.ImmuService/CountAll',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: schema_pb.EntryCount,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_immudb_schema_EntryCount,
        responseDeserialize: deserialize_immudb_schema_EntryCount,
    },
    txById: {
        path: '/immudb.schema.ImmuService/TxById',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.TxRequest,
        responseType: schema_pb.Tx,
        requestSerialize: serialize_immudb_schema_TxRequest,
        requestDeserialize: deserialize_immudb_schema_TxRequest,
        responseSerialize: serialize_immudb_schema_Tx,
        responseDeserialize: deserialize_immudb_schema_Tx,
    },
    verifiableTxById: {
        path: '/immudb.schema.ImmuService/VerifiableTxById',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.VerifiableTxRequest,
        responseType: schema_pb.VerifiableTx,
        requestSerialize: serialize_immudb_schema_VerifiableTxRequest,
        requestDeserialize: deserialize_immudb_schema_VerifiableTxRequest,
        responseSerialize: serialize_immudb_schema_VerifiableTx,
        responseDeserialize: deserialize_immudb_schema_VerifiableTx,
    },
    txScan: {
        path: '/immudb.schema.ImmuService/TxScan',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.TxScanRequest,
        responseType: schema_pb.TxList,
        requestSerialize: serialize_immudb_schema_TxScanRequest,
        requestDeserialize: deserialize_immudb_schema_TxScanRequest,
        responseSerialize: serialize_immudb_schema_TxList,
        responseDeserialize: deserialize_immudb_schema_TxList,
    },
    history: {
        path: '/immudb.schema.ImmuService/History',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.HistoryRequest,
        responseType: schema_pb.Entries,
        requestSerialize: serialize_immudb_schema_HistoryRequest,
        requestDeserialize: deserialize_immudb_schema_HistoryRequest,
        responseSerialize: serialize_immudb_schema_Entries,
        responseDeserialize: deserialize_immudb_schema_Entries,
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
    currentState: {
        path: '/immudb.schema.ImmuService/CurrentState',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: schema_pb.ImmutableState,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_immudb_schema_ImmutableState,
        responseDeserialize: deserialize_immudb_schema_ImmutableState,
    },
    setReference: {
        path: '/immudb.schema.ImmuService/SetReference',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.ReferenceRequest,
        responseType: schema_pb.TxMetadata,
        requestSerialize: serialize_immudb_schema_ReferenceRequest,
        requestDeserialize: deserialize_immudb_schema_ReferenceRequest,
        responseSerialize: serialize_immudb_schema_TxMetadata,
        responseDeserialize: deserialize_immudb_schema_TxMetadata,
    },
    verifiableSetReference: {
        path: '/immudb.schema.ImmuService/VerifiableSetReference',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.VerifiableReferenceRequest,
        responseType: schema_pb.VerifiableTx,
        requestSerialize: serialize_immudb_schema_VerifiableReferenceRequest,
        requestDeserialize: deserialize_immudb_schema_VerifiableReferenceRequest,
        responseSerialize: serialize_immudb_schema_VerifiableTx,
        responseDeserialize: deserialize_immudb_schema_VerifiableTx,
    },
    zAdd: {
        path: '/immudb.schema.ImmuService/ZAdd',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.ZAddRequest,
        responseType: schema_pb.TxMetadata,
        requestSerialize: serialize_immudb_schema_ZAddRequest,
        requestDeserialize: deserialize_immudb_schema_ZAddRequest,
        responseSerialize: serialize_immudb_schema_TxMetadata,
        responseDeserialize: deserialize_immudb_schema_TxMetadata,
    },
    verifiableZAdd: {
        path: '/immudb.schema.ImmuService/VerifiableZAdd',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.VerifiableZAddRequest,
        responseType: schema_pb.VerifiableTx,
        requestSerialize: serialize_immudb_schema_VerifiableZAddRequest,
        requestDeserialize: deserialize_immudb_schema_VerifiableZAddRequest,
        responseSerialize: serialize_immudb_schema_VerifiableTx,
        responseDeserialize: deserialize_immudb_schema_VerifiableTx,
    },
    zScan: {
        path: '/immudb.schema.ImmuService/ZScan',
        requestStream: false,
        responseStream: false,
        requestType: schema_pb.ZScanRequest,
        responseType: schema_pb.ZEntries,
        requestSerialize: serialize_immudb_schema_ZScanRequest,
        requestDeserialize: deserialize_immudb_schema_ZScanRequest,
        responseSerialize: serialize_immudb_schema_ZEntries,
        responseDeserialize: deserialize_immudb_schema_ZEntries,
    },
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
    cleanIndex: {
        path: '/immudb.schema.ImmuService/CleanIndex',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: google_protobuf_empty_pb.Empty,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_google_protobuf_Empty,
        responseDeserialize: deserialize_google_protobuf_Empty,
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
};
exports.ImmuServiceClient = grpc.makeGenericClientConstructor(ImmuServiceService);
//# sourceMappingURL=schema_grpc_pb.js.map