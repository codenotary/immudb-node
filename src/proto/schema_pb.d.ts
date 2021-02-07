// package: immudb.schema
// file: schema.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Key extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Key;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        key: Uint8Array | string,
    }
}

export class Permission extends jspb.Message { 
    getDatabase(): string;
    setDatabase(value: string): Permission;

    getPermission(): number;
    setPermission(value: number): Permission;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permission.AsObject;
    static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permission;
    static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
    export type AsObject = {
        database: string,
        permission: number,
    }
}

export class User extends jspb.Message { 
    getUser(): Uint8Array | string;
    getUser_asU8(): Uint8Array;
    getUser_asB64(): string;
    setUser(value: Uint8Array | string): User;

    clearPermissionsList(): void;
    getPermissionsList(): Array<Permission>;
    setPermissionsList(value: Array<Permission>): User;
    addPermissions(value?: Permission, index?: number): Permission;

    getCreatedby(): string;
    setCreatedby(value: string): User;

    getCreatedat(): string;
    setCreatedat(value: string): User;

    getActive(): boolean;
    setActive(value: boolean): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        user: Uint8Array | string,
        permissionsList: Array<Permission.AsObject>,
        createdby: string,
        createdat: string,
        active: boolean,
    }
}

export class UserList extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UserList;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserList.AsObject;
    static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserList;
    static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getUser(): Uint8Array | string;
    getUser_asU8(): Uint8Array;
    getUser_asB64(): string;
    setUser(value: Uint8Array | string): CreateUserRequest;

    getPassword(): Uint8Array | string;
    getPassword_asU8(): Uint8Array;
    getPassword_asB64(): string;
    setPassword(value: Uint8Array | string): CreateUserRequest;

    getPermission(): number;
    setPermission(value: number): CreateUserRequest;

    getDatabase(): string;
    setDatabase(value: string): CreateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        user: Uint8Array | string,
        password: Uint8Array | string,
        permission: number,
        database: string,
    }
}

export class UserRequest extends jspb.Message { 
    getUser(): Uint8Array | string;
    getUser_asU8(): Uint8Array;
    getUser_asB64(): string;
    setUser(value: Uint8Array | string): UserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        user: Uint8Array | string,
    }
}

export class ChangePasswordRequest extends jspb.Message { 
    getUser(): Uint8Array | string;
    getUser_asU8(): Uint8Array;
    getUser_asB64(): string;
    setUser(value: Uint8Array | string): ChangePasswordRequest;

    getOldpassword(): Uint8Array | string;
    getOldpassword_asU8(): Uint8Array;
    getOldpassword_asB64(): string;
    setOldpassword(value: Uint8Array | string): ChangePasswordRequest;

    getNewpassword(): Uint8Array | string;
    getNewpassword_asU8(): Uint8Array;
    getNewpassword_asB64(): string;
    setNewpassword(value: Uint8Array | string): ChangePasswordRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
    static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
    export type AsObject = {
        user: Uint8Array | string,
        oldpassword: Uint8Array | string,
        newpassword: Uint8Array | string,
    }
}

export class LoginRequest extends jspb.Message { 
    getUser(): Uint8Array | string;
    getUser_asU8(): Uint8Array;
    getUser_asB64(): string;
    setUser(value: Uint8Array | string): LoginRequest;

    getPassword(): Uint8Array | string;
    getPassword_asU8(): Uint8Array;
    getPassword_asB64(): string;
    setPassword(value: Uint8Array | string): LoginRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        user: Uint8Array | string,
        password: Uint8Array | string,
    }
}

export class LoginResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LoginResponse;

    getWarning(): Uint8Array | string;
    getWarning_asU8(): Uint8Array;
    getWarning_asB64(): string;
    setWarning(value: Uint8Array | string): LoginResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        token: string,
        warning: Uint8Array | string,
    }
}

export class AuthConfig extends jspb.Message { 
    getKind(): number;
    setKind(value: number): AuthConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AuthConfig): AuthConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthConfig;
    static deserializeBinaryFromReader(message: AuthConfig, reader: jspb.BinaryReader): AuthConfig;
}

export namespace AuthConfig {
    export type AsObject = {
        kind: number,
    }
}

export class MTLSConfig extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): MTLSConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MTLSConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MTLSConfig): MTLSConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MTLSConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MTLSConfig;
    static deserializeBinaryFromReader(message: MTLSConfig, reader: jspb.BinaryReader): MTLSConfig;
}

export namespace MTLSConfig {
    export type AsObject = {
        enabled: boolean,
    }
}

export class KeyValue extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): KeyValue;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): KeyValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyValue.AsObject;
    static toObject(includeInstance: boolean, msg: KeyValue): KeyValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyValue;
    static deserializeBinaryFromReader(message: KeyValue, reader: jspb.BinaryReader): KeyValue;
}

export namespace KeyValue {
    export type AsObject = {
        key: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export class Entry extends jspb.Message { 
    getTx(): number;
    setTx(value: number): Entry;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Entry;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Entry;


    hasReferencedby(): boolean;
    clearReferencedby(): void;
    getReferencedby(): Reference | undefined;
    setReferencedby(value?: Reference): Entry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
    export type AsObject = {
        tx: number,
        key: Uint8Array | string,
        value: Uint8Array | string,
        referencedby?: Reference.AsObject,
    }
}

export class Reference extends jspb.Message { 
    getTx(): number;
    setTx(value: number): Reference;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Reference;

    getAttx(): number;
    setAttx(value: number): Reference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reference.AsObject;
    static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reference;
    static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
    export type AsObject = {
        tx: number,
        key: Uint8Array | string,
        attx: number,
    }
}

export class Op extends jspb.Message { 

    hasKv(): boolean;
    clearKv(): void;
    getKv(): KeyValue | undefined;
    setKv(value?: KeyValue): Op;


    hasZadd(): boolean;
    clearZadd(): void;
    getZadd(): ZAddRequest | undefined;
    setZadd(value?: ZAddRequest): Op;


    hasRef(): boolean;
    clearRef(): void;
    getRef(): ReferenceRequest | undefined;
    setRef(value?: ReferenceRequest): Op;


    getOperationCase(): Op.OperationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Op.AsObject;
    static toObject(includeInstance: boolean, msg: Op): Op.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Op, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Op;
    static deserializeBinaryFromReader(message: Op, reader: jspb.BinaryReader): Op;
}

export namespace Op {
    export type AsObject = {
        kv?: KeyValue.AsObject,
        zadd?: ZAddRequest.AsObject,
        ref?: ReferenceRequest.AsObject,
    }

    export enum OperationCase {
        OPERATION_NOT_SET = 0,
    
    KV = 1,

    ZADD = 2,

    REF = 3,

    }

}

export class ExecAllRequest extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<Op>;
    setOperationsList(value: Array<Op>): ExecAllRequest;
    addOperations(value?: Op, index?: number): Op;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExecAllRequest): ExecAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecAllRequest;
    static deserializeBinaryFromReader(message: ExecAllRequest, reader: jspb.BinaryReader): ExecAllRequest;
}

export namespace ExecAllRequest {
    export type AsObject = {
        operationsList: Array<Op.AsObject>,
    }
}

export class Entries extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<Entry>;
    setEntriesList(value: Array<Entry>): Entries;
    addEntries(value?: Entry, index?: number): Entry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entries.AsObject;
    static toObject(includeInstance: boolean, msg: Entries): Entries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entries;
    static deserializeBinaryFromReader(message: Entries, reader: jspb.BinaryReader): Entries;
}

export namespace Entries {
    export type AsObject = {
        entriesList: Array<Entry.AsObject>,
    }
}

export class ZEntry extends jspb.Message { 
    getSet(): Uint8Array | string;
    getSet_asU8(): Uint8Array;
    getSet_asB64(): string;
    setSet(value: Uint8Array | string): ZEntry;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ZEntry;


    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): ZEntry;

    getScore(): number;
    setScore(value: number): ZEntry;

    getAttx(): number;
    setAttx(value: number): ZEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ZEntry): ZEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZEntry;
    static deserializeBinaryFromReader(message: ZEntry, reader: jspb.BinaryReader): ZEntry;
}

export namespace ZEntry {
    export type AsObject = {
        set: Uint8Array | string,
        key: Uint8Array | string,
        entry?: Entry.AsObject,
        score: number,
        attx: number,
    }
}

export class ZEntries extends jspb.Message { 
    clearEntriesList(): void;
    getEntriesList(): Array<ZEntry>;
    setEntriesList(value: Array<ZEntry>): ZEntries;
    addEntries(value?: ZEntry, index?: number): ZEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZEntries.AsObject;
    static toObject(includeInstance: boolean, msg: ZEntries): ZEntries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZEntries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZEntries;
    static deserializeBinaryFromReader(message: ZEntries, reader: jspb.BinaryReader): ZEntries;
}

export namespace ZEntries {
    export type AsObject = {
        entriesList: Array<ZEntry.AsObject>,
    }
}

export class ScanRequest extends jspb.Message { 
    getSeekkey(): Uint8Array | string;
    getSeekkey_asU8(): Uint8Array;
    getSeekkey_asB64(): string;
    setSeekkey(value: Uint8Array | string): ScanRequest;

    getPrefix(): Uint8Array | string;
    getPrefix_asU8(): Uint8Array;
    getPrefix_asB64(): string;
    setPrefix(value: Uint8Array | string): ScanRequest;

    getDesc(): boolean;
    setDesc(value: boolean): ScanRequest;

    getLimit(): number;
    setLimit(value: number): ScanRequest;

    getSincetx(): number;
    setSincetx(value: number): ScanRequest;

    getNowait(): boolean;
    setNowait(value: boolean): ScanRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScanRequest): ScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanRequest;
    static deserializeBinaryFromReader(message: ScanRequest, reader: jspb.BinaryReader): ScanRequest;
}

export namespace ScanRequest {
    export type AsObject = {
        seekkey: Uint8Array | string,
        prefix: Uint8Array | string,
        desc: boolean,
        limit: number,
        sincetx: number,
        nowait: boolean,
    }
}

export class KeyPrefix extends jspb.Message { 
    getPrefix(): Uint8Array | string;
    getPrefix_asU8(): Uint8Array;
    getPrefix_asB64(): string;
    setPrefix(value: Uint8Array | string): KeyPrefix;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyPrefix.AsObject;
    static toObject(includeInstance: boolean, msg: KeyPrefix): KeyPrefix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyPrefix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyPrefix;
    static deserializeBinaryFromReader(message: KeyPrefix, reader: jspb.BinaryReader): KeyPrefix;
}

export namespace KeyPrefix {
    export type AsObject = {
        prefix: Uint8Array | string,
    }
}

export class EntryCount extends jspb.Message { 
    getCount(): number;
    setCount(value: number): EntryCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntryCount.AsObject;
    static toObject(includeInstance: boolean, msg: EntryCount): EntryCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntryCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntryCount;
    static deserializeBinaryFromReader(message: EntryCount, reader: jspb.BinaryReader): EntryCount;
}

export namespace EntryCount {
    export type AsObject = {
        count: number,
    }
}

export class Signature extends jspb.Message { 
    getPublickey(): Uint8Array | string;
    getPublickey_asU8(): Uint8Array;
    getPublickey_asB64(): string;
    setPublickey(value: Uint8Array | string): Signature;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): Signature;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Signature.AsObject;
    static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Signature;
    static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
    export type AsObject = {
        publickey: Uint8Array | string,
        signature: Uint8Array | string,
    }
}

export class TxMetadata extends jspb.Message { 
    getId(): number;
    setId(value: number): TxMetadata;

    getPrevalh(): Uint8Array | string;
    getPrevalh_asU8(): Uint8Array;
    getPrevalh_asB64(): string;
    setPrevalh(value: Uint8Array | string): TxMetadata;

    getTs(): number;
    setTs(value: number): TxMetadata;

    getNentries(): number;
    setNentries(value: number): TxMetadata;

    getEh(): Uint8Array | string;
    getEh_asU8(): Uint8Array;
    getEh_asB64(): string;
    setEh(value: Uint8Array | string): TxMetadata;

    getBltxid(): number;
    setBltxid(value: number): TxMetadata;

    getBlroot(): Uint8Array | string;
    getBlroot_asU8(): Uint8Array;
    getBlroot_asB64(): string;
    setBlroot(value: Uint8Array | string): TxMetadata;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: TxMetadata): TxMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxMetadata;
    static deserializeBinaryFromReader(message: TxMetadata, reader: jspb.BinaryReader): TxMetadata;
}

export namespace TxMetadata {
    export type AsObject = {
        id: number,
        prevalh: Uint8Array | string,
        ts: number,
        nentries: number,
        eh: Uint8Array | string,
        bltxid: number,
        blroot: Uint8Array | string,
    }
}

export class LinearProof extends jspb.Message { 
    getSourcetxid(): number;
    setSourcetxid(value: number): LinearProof;

    getTargettxid(): number;
    setTargettxid(value: number): LinearProof;

    clearTermsList(): void;
    getTermsList(): Array<Uint8Array | string>;
    getTermsList_asU8(): Array<Uint8Array>;
    getTermsList_asB64(): Array<string>;
    setTermsList(value: Array<Uint8Array | string>): LinearProof;
    addTerms(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinearProof.AsObject;
    static toObject(includeInstance: boolean, msg: LinearProof): LinearProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LinearProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinearProof;
    static deserializeBinaryFromReader(message: LinearProof, reader: jspb.BinaryReader): LinearProof;
}

export namespace LinearProof {
    export type AsObject = {
        sourcetxid: number,
        targettxid: number,
        termsList: Array<Uint8Array | string>,
    }
}

export class DualProof extends jspb.Message { 

    hasSourcetxmetadata(): boolean;
    clearSourcetxmetadata(): void;
    getSourcetxmetadata(): TxMetadata | undefined;
    setSourcetxmetadata(value?: TxMetadata): DualProof;


    hasTargettxmetadata(): boolean;
    clearTargettxmetadata(): void;
    getTargettxmetadata(): TxMetadata | undefined;
    setTargettxmetadata(value?: TxMetadata): DualProof;

    clearInclusionproofList(): void;
    getInclusionproofList(): Array<Uint8Array | string>;
    getInclusionproofList_asU8(): Array<Uint8Array>;
    getInclusionproofList_asB64(): Array<string>;
    setInclusionproofList(value: Array<Uint8Array | string>): DualProof;
    addInclusionproof(value: Uint8Array | string, index?: number): Uint8Array | string;

    clearConsistencyproofList(): void;
    getConsistencyproofList(): Array<Uint8Array | string>;
    getConsistencyproofList_asU8(): Array<Uint8Array>;
    getConsistencyproofList_asB64(): Array<string>;
    setConsistencyproofList(value: Array<Uint8Array | string>): DualProof;
    addConsistencyproof(value: Uint8Array | string, index?: number): Uint8Array | string;

    getTargetbltxalh(): Uint8Array | string;
    getTargetbltxalh_asU8(): Uint8Array;
    getTargetbltxalh_asB64(): string;
    setTargetbltxalh(value: Uint8Array | string): DualProof;

    clearLastinclusionproofList(): void;
    getLastinclusionproofList(): Array<Uint8Array | string>;
    getLastinclusionproofList_asU8(): Array<Uint8Array>;
    getLastinclusionproofList_asB64(): Array<string>;
    setLastinclusionproofList(value: Array<Uint8Array | string>): DualProof;
    addLastinclusionproof(value: Uint8Array | string, index?: number): Uint8Array | string;


    hasLinearproof(): boolean;
    clearLinearproof(): void;
    getLinearproof(): LinearProof | undefined;
    setLinearproof(value?: LinearProof): DualProof;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DualProof.AsObject;
    static toObject(includeInstance: boolean, msg: DualProof): DualProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DualProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DualProof;
    static deserializeBinaryFromReader(message: DualProof, reader: jspb.BinaryReader): DualProof;
}

export namespace DualProof {
    export type AsObject = {
        sourcetxmetadata?: TxMetadata.AsObject,
        targettxmetadata?: TxMetadata.AsObject,
        inclusionproofList: Array<Uint8Array | string>,
        consistencyproofList: Array<Uint8Array | string>,
        targetbltxalh: Uint8Array | string,
        lastinclusionproofList: Array<Uint8Array | string>,
        linearproof?: LinearProof.AsObject,
    }
}

export class Tx extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): TxMetadata | undefined;
    setMetadata(value?: TxMetadata): Tx;

    clearEntriesList(): void;
    getEntriesList(): Array<TxEntry>;
    setEntriesList(value: Array<TxEntry>): Tx;
    addEntries(value?: TxEntry, index?: number): TxEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tx.AsObject;
    static toObject(includeInstance: boolean, msg: Tx): Tx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tx;
    static deserializeBinaryFromReader(message: Tx, reader: jspb.BinaryReader): Tx;
}

export namespace Tx {
    export type AsObject = {
        metadata?: TxMetadata.AsObject,
        entriesList: Array<TxEntry.AsObject>,
    }
}

export class TxEntry extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): TxEntry;

    getHvalue(): Uint8Array | string;
    getHvalue_asU8(): Uint8Array;
    getHvalue_asB64(): string;
    setHvalue(value: Uint8Array | string): TxEntry;

    getVoff(): number;
    setVoff(value: number): TxEntry;

    getVlen(): number;
    setVlen(value: number): TxEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxEntry.AsObject;
    static toObject(includeInstance: boolean, msg: TxEntry): TxEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxEntry;
    static deserializeBinaryFromReader(message: TxEntry, reader: jspb.BinaryReader): TxEntry;
}

export namespace TxEntry {
    export type AsObject = {
        key: Uint8Array | string,
        hvalue: Uint8Array | string,
        voff: number,
        vlen: number,
    }
}

export class VerifiableTx extends jspb.Message { 

    hasTx(): boolean;
    clearTx(): void;
    getTx(): Tx | undefined;
    setTx(value?: Tx): VerifiableTx;


    hasDualproof(): boolean;
    clearDualproof(): void;
    getDualproof(): DualProof | undefined;
    setDualproof(value?: DualProof): VerifiableTx;


    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): VerifiableTx;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableTx.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableTx): VerifiableTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableTx;
    static deserializeBinaryFromReader(message: VerifiableTx, reader: jspb.BinaryReader): VerifiableTx;
}

export namespace VerifiableTx {
    export type AsObject = {
        tx?: Tx.AsObject,
        dualproof?: DualProof.AsObject,
        signature?: Signature.AsObject,
    }
}

export class VerifiableEntry extends jspb.Message { 

    hasEntry(): boolean;
    clearEntry(): void;
    getEntry(): Entry | undefined;
    setEntry(value?: Entry): VerifiableEntry;


    hasVerifiabletx(): boolean;
    clearVerifiabletx(): void;
    getVerifiabletx(): VerifiableTx | undefined;
    setVerifiabletx(value?: VerifiableTx): VerifiableEntry;


    hasInclusionproof(): boolean;
    clearInclusionproof(): void;
    getInclusionproof(): InclusionProof | undefined;
    setInclusionproof(value?: InclusionProof): VerifiableEntry;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableEntry.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableEntry): VerifiableEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableEntry;
    static deserializeBinaryFromReader(message: VerifiableEntry, reader: jspb.BinaryReader): VerifiableEntry;
}

export namespace VerifiableEntry {
    export type AsObject = {
        entry?: Entry.AsObject,
        verifiabletx?: VerifiableTx.AsObject,
        inclusionproof?: InclusionProof.AsObject,
    }
}

export class InclusionProof extends jspb.Message { 
    getLeaf(): number;
    setLeaf(value: number): InclusionProof;

    getWidth(): number;
    setWidth(value: number): InclusionProof;

    clearTermsList(): void;
    getTermsList(): Array<Uint8Array | string>;
    getTermsList_asU8(): Array<Uint8Array>;
    getTermsList_asB64(): Array<string>;
    setTermsList(value: Array<Uint8Array | string>): InclusionProof;
    addTerms(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InclusionProof.AsObject;
    static toObject(includeInstance: boolean, msg: InclusionProof): InclusionProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InclusionProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InclusionProof;
    static deserializeBinaryFromReader(message: InclusionProof, reader: jspb.BinaryReader): InclusionProof;
}

export namespace InclusionProof {
    export type AsObject = {
        leaf: number,
        width: number,
        termsList: Array<Uint8Array | string>,
    }
}

export class SetRequest extends jspb.Message { 
    clearKvsList(): void;
    getKvsList(): Array<KeyValue>;
    setKvsList(value: Array<KeyValue>): SetRequest;
    addKvs(value?: KeyValue, index?: number): KeyValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRequest;
    static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
    export type AsObject = {
        kvsList: Array<KeyValue.AsObject>,
    }
}

export class KeyRequest extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): KeyRequest;

    getAttx(): number;
    setAttx(value: number): KeyRequest;

    getSincetx(): number;
    setSincetx(value: number): KeyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KeyRequest): KeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyRequest;
    static deserializeBinaryFromReader(message: KeyRequest, reader: jspb.BinaryReader): KeyRequest;
}

export namespace KeyRequest {
    export type AsObject = {
        key: Uint8Array | string,
        attx: number,
        sincetx: number,
    }
}

export class KeyListRequest extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<Uint8Array | string>;
    getKeysList_asU8(): Array<Uint8Array>;
    getKeysList_asB64(): Array<string>;
    setKeysList(value: Array<Uint8Array | string>): KeyListRequest;
    addKeys(value: Uint8Array | string, index?: number): Uint8Array | string;

    getSincetx(): number;
    setSincetx(value: number): KeyListRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: KeyListRequest): KeyListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyListRequest;
    static deserializeBinaryFromReader(message: KeyListRequest, reader: jspb.BinaryReader): KeyListRequest;
}

export namespace KeyListRequest {
    export type AsObject = {
        keysList: Array<Uint8Array | string>,
        sincetx: number,
    }
}

export class VerifiableSetRequest extends jspb.Message { 

    hasSetrequest(): boolean;
    clearSetrequest(): void;
    getSetrequest(): SetRequest | undefined;
    setSetrequest(value?: SetRequest): VerifiableSetRequest;

    getProvesincetx(): number;
    setProvesincetx(value: number): VerifiableSetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableSetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableSetRequest): VerifiableSetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableSetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableSetRequest;
    static deserializeBinaryFromReader(message: VerifiableSetRequest, reader: jspb.BinaryReader): VerifiableSetRequest;
}

export namespace VerifiableSetRequest {
    export type AsObject = {
        setrequest?: SetRequest.AsObject,
        provesincetx: number,
    }
}

export class VerifiableGetRequest extends jspb.Message { 

    hasKeyrequest(): boolean;
    clearKeyrequest(): void;
    getKeyrequest(): KeyRequest | undefined;
    setKeyrequest(value?: KeyRequest): VerifiableGetRequest;

    getProvesincetx(): number;
    setProvesincetx(value: number): VerifiableGetRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableGetRequest): VerifiableGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableGetRequest;
    static deserializeBinaryFromReader(message: VerifiableGetRequest, reader: jspb.BinaryReader): VerifiableGetRequest;
}

export namespace VerifiableGetRequest {
    export type AsObject = {
        keyrequest?: KeyRequest.AsObject,
        provesincetx: number,
    }
}

export class HealthResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): HealthResponse;

    getVersion(): string;
    setVersion(value: string): HealthResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthResponse;
    static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
    export type AsObject = {
        status: boolean,
        version: string,
    }
}

export class ImmutableState extends jspb.Message { 
    getDb(): string;
    setDb(value: string): ImmutableState;

    getTxid(): number;
    setTxid(value: number): ImmutableState;

    getTxhash(): Uint8Array | string;
    getTxhash_asU8(): Uint8Array;
    getTxhash_asB64(): string;
    setTxhash(value: Uint8Array | string): ImmutableState;


    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): ImmutableState;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImmutableState.AsObject;
    static toObject(includeInstance: boolean, msg: ImmutableState): ImmutableState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImmutableState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImmutableState;
    static deserializeBinaryFromReader(message: ImmutableState, reader: jspb.BinaryReader): ImmutableState;
}

export namespace ImmutableState {
    export type AsObject = {
        db: string,
        txid: number,
        txhash: Uint8Array | string,
        signature?: Signature.AsObject,
    }
}

export class ReferenceRequest extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ReferenceRequest;

    getReferencedkey(): Uint8Array | string;
    getReferencedkey_asU8(): Uint8Array;
    getReferencedkey_asB64(): string;
    setReferencedkey(value: Uint8Array | string): ReferenceRequest;

    getAttx(): number;
    setAttx(value: number): ReferenceRequest;

    getBoundref(): boolean;
    setBoundref(value: boolean): ReferenceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRequest): ReferenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRequest;
    static deserializeBinaryFromReader(message: ReferenceRequest, reader: jspb.BinaryReader): ReferenceRequest;
}

export namespace ReferenceRequest {
    export type AsObject = {
        key: Uint8Array | string,
        referencedkey: Uint8Array | string,
        attx: number,
        boundref: boolean,
    }
}

export class VerifiableReferenceRequest extends jspb.Message { 

    hasReferencerequest(): boolean;
    clearReferencerequest(): void;
    getReferencerequest(): ReferenceRequest | undefined;
    setReferencerequest(value?: ReferenceRequest): VerifiableReferenceRequest;

    getProvesincetx(): number;
    setProvesincetx(value: number): VerifiableReferenceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableReferenceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableReferenceRequest): VerifiableReferenceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableReferenceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableReferenceRequest;
    static deserializeBinaryFromReader(message: VerifiableReferenceRequest, reader: jspb.BinaryReader): VerifiableReferenceRequest;
}

export namespace VerifiableReferenceRequest {
    export type AsObject = {
        referencerequest?: ReferenceRequest.AsObject,
        provesincetx: number,
    }
}

export class ZAddRequest extends jspb.Message { 
    getSet(): Uint8Array | string;
    getSet_asU8(): Uint8Array;
    getSet_asB64(): string;
    setSet(value: Uint8Array | string): ZAddRequest;

    getScore(): number;
    setScore(value: number): ZAddRequest;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ZAddRequest;

    getAttx(): number;
    setAttx(value: number): ZAddRequest;

    getBoundref(): boolean;
    setBoundref(value: boolean): ZAddRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ZAddRequest): ZAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZAddRequest;
    static deserializeBinaryFromReader(message: ZAddRequest, reader: jspb.BinaryReader): ZAddRequest;
}

export namespace ZAddRequest {
    export type AsObject = {
        set: Uint8Array | string,
        score: number,
        key: Uint8Array | string,
        attx: number,
        boundref: boolean,
    }
}

export class Score extends jspb.Message { 
    getScore(): number;
    setScore(value: number): Score;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Score.AsObject;
    static toObject(includeInstance: boolean, msg: Score): Score.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Score, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Score;
    static deserializeBinaryFromReader(message: Score, reader: jspb.BinaryReader): Score;
}

export namespace Score {
    export type AsObject = {
        score: number,
    }
}

export class ZScanRequest extends jspb.Message { 
    getSet(): Uint8Array | string;
    getSet_asU8(): Uint8Array;
    getSet_asB64(): string;
    setSet(value: Uint8Array | string): ZScanRequest;

    getSeekkey(): Uint8Array | string;
    getSeekkey_asU8(): Uint8Array;
    getSeekkey_asB64(): string;
    setSeekkey(value: Uint8Array | string): ZScanRequest;

    getSeekscore(): number;
    setSeekscore(value: number): ZScanRequest;

    getSeekattx(): number;
    setSeekattx(value: number): ZScanRequest;

    getInclusiveseek(): boolean;
    setInclusiveseek(value: boolean): ZScanRequest;

    getLimit(): number;
    setLimit(value: number): ZScanRequest;

    getDesc(): boolean;
    setDesc(value: boolean): ZScanRequest;


    hasMinscore(): boolean;
    clearMinscore(): void;
    getMinscore(): Score | undefined;
    setMinscore(value?: Score): ZScanRequest;


    hasMaxscore(): boolean;
    clearMaxscore(): void;
    getMaxscore(): Score | undefined;
    setMaxscore(value?: Score): ZScanRequest;

    getSincetx(): number;
    setSincetx(value: number): ZScanRequest;

    getNowait(): boolean;
    setNowait(value: boolean): ZScanRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ZScanRequest): ZScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZScanRequest;
    static deserializeBinaryFromReader(message: ZScanRequest, reader: jspb.BinaryReader): ZScanRequest;
}

export namespace ZScanRequest {
    export type AsObject = {
        set: Uint8Array | string,
        seekkey: Uint8Array | string,
        seekscore: number,
        seekattx: number,
        inclusiveseek: boolean,
        limit: number,
        desc: boolean,
        minscore?: Score.AsObject,
        maxscore?: Score.AsObject,
        sincetx: number,
        nowait: boolean,
    }
}

export class HistoryRequest extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): HistoryRequest;

    getOffset(): number;
    setOffset(value: number): HistoryRequest;

    getLimit(): number;
    setLimit(value: number): HistoryRequest;

    getDesc(): boolean;
    setDesc(value: boolean): HistoryRequest;

    getSincetx(): number;
    setSincetx(value: number): HistoryRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HistoryRequest): HistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoryRequest;
    static deserializeBinaryFromReader(message: HistoryRequest, reader: jspb.BinaryReader): HistoryRequest;
}

export namespace HistoryRequest {
    export type AsObject = {
        key: Uint8Array | string,
        offset: number,
        limit: number,
        desc: boolean,
        sincetx: number,
    }
}

export class VerifiableZAddRequest extends jspb.Message { 

    hasZaddrequest(): boolean;
    clearZaddrequest(): void;
    getZaddrequest(): ZAddRequest | undefined;
    setZaddrequest(value?: ZAddRequest): VerifiableZAddRequest;

    getProvesincetx(): number;
    setProvesincetx(value: number): VerifiableZAddRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableZAddRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableZAddRequest): VerifiableZAddRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableZAddRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableZAddRequest;
    static deserializeBinaryFromReader(message: VerifiableZAddRequest, reader: jspb.BinaryReader): VerifiableZAddRequest;
}

export namespace VerifiableZAddRequest {
    export type AsObject = {
        zaddrequest?: ZAddRequest.AsObject,
        provesincetx: number,
    }
}

export class TxRequest extends jspb.Message { 
    getTx(): number;
    setTx(value: number): TxRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TxRequest): TxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxRequest;
    static deserializeBinaryFromReader(message: TxRequest, reader: jspb.BinaryReader): TxRequest;
}

export namespace TxRequest {
    export type AsObject = {
        tx: number,
    }
}

export class VerifiableTxRequest extends jspb.Message { 
    getTx(): number;
    setTx(value: number): VerifiableTxRequest;

    getProvesincetx(): number;
    setProvesincetx(value: number): VerifiableTxRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiableTxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiableTxRequest): VerifiableTxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifiableTxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiableTxRequest;
    static deserializeBinaryFromReader(message: VerifiableTxRequest, reader: jspb.BinaryReader): VerifiableTxRequest;
}

export namespace VerifiableTxRequest {
    export type AsObject = {
        tx: number,
        provesincetx: number,
    }
}

export class TxScanRequest extends jspb.Message { 
    getInitialtx(): number;
    setInitialtx(value: number): TxScanRequest;

    getLimit(): number;
    setLimit(value: number): TxScanRequest;

    getDesc(): boolean;
    setDesc(value: boolean): TxScanRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TxScanRequest): TxScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxScanRequest;
    static deserializeBinaryFromReader(message: TxScanRequest, reader: jspb.BinaryReader): TxScanRequest;
}

export namespace TxScanRequest {
    export type AsObject = {
        initialtx: number,
        limit: number,
        desc: boolean,
    }
}

export class TxList extends jspb.Message { 
    clearTxsList(): void;
    getTxsList(): Array<Tx>;
    setTxsList(value: Array<Tx>): TxList;
    addTxs(value?: Tx, index?: number): Tx;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxList.AsObject;
    static toObject(includeInstance: boolean, msg: TxList): TxList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxList;
    static deserializeBinaryFromReader(message: TxList, reader: jspb.BinaryReader): TxList;
}

export namespace TxList {
    export type AsObject = {
        txsList: Array<Tx.AsObject>,
    }
}

export class Database extends jspb.Message { 
    getDatabasename(): string;
    setDatabasename(value: string): Database;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
    export type AsObject = {
        databasename: string,
    }
}

export class UseDatabaseReply extends jspb.Message { 
    getToken(): string;
    setToken(value: string): UseDatabaseReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseDatabaseReply.AsObject;
    static toObject(includeInstance: boolean, msg: UseDatabaseReply): UseDatabaseReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseDatabaseReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseDatabaseReply;
    static deserializeBinaryFromReader(message: UseDatabaseReply, reader: jspb.BinaryReader): UseDatabaseReply;
}

export namespace UseDatabaseReply {
    export type AsObject = {
        token: string,
    }
}

export class ChangePermissionRequest extends jspb.Message { 
    getAction(): PermissionAction;
    setAction(value: PermissionAction): ChangePermissionRequest;

    getUsername(): string;
    setUsername(value: string): ChangePermissionRequest;

    getDatabase(): string;
    setDatabase(value: string): ChangePermissionRequest;

    getPermission(): number;
    setPermission(value: number): ChangePermissionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePermissionRequest): ChangePermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePermissionRequest;
    static deserializeBinaryFromReader(message: ChangePermissionRequest, reader: jspb.BinaryReader): ChangePermissionRequest;
}

export namespace ChangePermissionRequest {
    export type AsObject = {
        action: PermissionAction,
        username: string,
        database: string,
        permission: number,
    }
}

export class SetActiveUserRequest extends jspb.Message { 
    getActive(): boolean;
    setActive(value: boolean): SetActiveUserRequest;

    getUsername(): string;
    setUsername(value: string): SetActiveUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetActiveUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetActiveUserRequest): SetActiveUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetActiveUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetActiveUserRequest;
    static deserializeBinaryFromReader(message: SetActiveUserRequest, reader: jspb.BinaryReader): SetActiveUserRequest;
}

export namespace SetActiveUserRequest {
    export type AsObject = {
        active: boolean,
        username: string,
    }
}

export class DatabaseListResponse extends jspb.Message { 
    clearDatabasesList(): void;
    getDatabasesList(): Array<Database>;
    setDatabasesList(value: Array<Database>): DatabaseListResponse;
    addDatabases(value?: Database, index?: number): Database;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatabaseListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DatabaseListResponse): DatabaseListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatabaseListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatabaseListResponse;
    static deserializeBinaryFromReader(message: DatabaseListResponse, reader: jspb.BinaryReader): DatabaseListResponse;
}

export namespace DatabaseListResponse {
    export type AsObject = {
        databasesList: Array<Database.AsObject>,
    }
}

export enum PermissionAction {
    GRANT = 0,
    REVOKE = 1,
}
