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

export class Node extends jspb.Message { 
    getI(): Uint8Array | string;
    getI_asU8(): Uint8Array;
    getI_asB64(): string;
    setI(value: Uint8Array | string): Node;

    getH(): Uint8Array | string;
    getH_asU8(): Uint8Array;
    getH_asB64(): string;
    setH(value: Uint8Array | string): Node;

    getRefk(): Uint8Array | string;
    getRefk_asU8(): Uint8Array;
    getRefk_asB64(): string;
    setRefk(value: Uint8Array | string): Node;

    getRef(): boolean;
    setRef(value: boolean): Node;

    getCache(): boolean;
    setCache(value: boolean): Node;

    getRoot(): boolean;
    setRoot(value: boolean): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        i: Uint8Array | string,
        h: Uint8Array | string,
        refk: Uint8Array | string,
        ref: boolean,
        cache: boolean,
        root: boolean,
    }
}

export class Layer extends jspb.Message { 
    clearLList(): void;
    getLList(): Array<Node>;
    setLList(value: Array<Node>): Layer;
    addL(value?: Node, index?: number): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Layer.AsObject;
    static toObject(includeInstance: boolean, msg: Layer): Layer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Layer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Layer;
    static deserializeBinaryFromReader(message: Layer, reader: jspb.BinaryReader): Layer;
}

export namespace Layer {
    export type AsObject = {
        lList: Array<Node.AsObject>,
    }
}

export class Tree extends jspb.Message { 
    clearTList(): void;
    getTList(): Array<Layer>;
    setTList(value: Array<Layer>): Tree;
    addT(value?: Layer, index?: number): Layer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tree.AsObject;
    static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tree;
    static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
    export type AsObject = {
        tList: Array<Layer.AsObject>,
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

export class StructuredKeyValue extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): StructuredKeyValue;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): Content | undefined;
    setValue(value?: Content): StructuredKeyValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructuredKeyValue.AsObject;
    static toObject(includeInstance: boolean, msg: StructuredKeyValue): StructuredKeyValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructuredKeyValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructuredKeyValue;
    static deserializeBinaryFromReader(message: StructuredKeyValue, reader: jspb.BinaryReader): StructuredKeyValue;
}

export namespace StructuredKeyValue {
    export type AsObject = {
        key: Uint8Array | string,
        value?: Content.AsObject,
    }
}

export class Content extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): Content;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): Content;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
}

export namespace Content {
    export type AsObject = {
        timestamp: number,
        payload: Uint8Array | string,
    }
}

export class Index extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): Index;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
    export type AsObject = {
        index: number,
    }
}

export class Item extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): Item;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Item;

    getIndex(): number;
    setIndex(value: number): Item;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        key: Uint8Array | string,
        value: Uint8Array | string,
        index: number,
    }
}

export class StructuredItem extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): StructuredItem;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): Content | undefined;
    setValue(value?: Content): StructuredItem;

    getIndex(): number;
    setIndex(value: number): StructuredItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructuredItem.AsObject;
    static toObject(includeInstance: boolean, msg: StructuredItem): StructuredItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructuredItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructuredItem;
    static deserializeBinaryFromReader(message: StructuredItem, reader: jspb.BinaryReader): StructuredItem;
}

export namespace StructuredItem {
    export type AsObject = {
        key: Uint8Array | string,
        value?: Content.AsObject,
        index: number,
    }
}

export class KVList extends jspb.Message { 
    clearKvsList(): void;
    getKvsList(): Array<KeyValue>;
    setKvsList(value: Array<KeyValue>): KVList;
    addKvs(value?: KeyValue, index?: number): KeyValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KVList.AsObject;
    static toObject(includeInstance: boolean, msg: KVList): KVList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KVList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KVList;
    static deserializeBinaryFromReader(message: KVList, reader: jspb.BinaryReader): KVList;
}

export namespace KVList {
    export type AsObject = {
        kvsList: Array<KeyValue.AsObject>,
    }
}

export class SKVList extends jspb.Message { 
    clearSkvsList(): void;
    getSkvsList(): Array<StructuredKeyValue>;
    setSkvsList(value: Array<StructuredKeyValue>): SKVList;
    addSkvs(value?: StructuredKeyValue, index?: number): StructuredKeyValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SKVList.AsObject;
    static toObject(includeInstance: boolean, msg: SKVList): SKVList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SKVList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SKVList;
    static deserializeBinaryFromReader(message: SKVList, reader: jspb.BinaryReader): SKVList;
}

export namespace SKVList {
    export type AsObject = {
        skvsList: Array<StructuredKeyValue.AsObject>,
    }
}

export class KeyList extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): KeyList;
    addKeys(value?: Key, index?: number): Key;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyList.AsObject;
    static toObject(includeInstance: boolean, msg: KeyList): KeyList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyList;
    static deserializeBinaryFromReader(message: KeyList, reader: jspb.BinaryReader): KeyList;
}

export namespace KeyList {
    export type AsObject = {
        keysList: Array<Key.AsObject>,
    }
}

export class ItemList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): ItemList;
    addItems(value?: Item, index?: number): Item;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemList.AsObject;
    static toObject(includeInstance: boolean, msg: ItemList): ItemList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemList;
    static deserializeBinaryFromReader(message: ItemList, reader: jspb.BinaryReader): ItemList;
}

export namespace ItemList {
    export type AsObject = {
        itemsList: Array<Item.AsObject>,
    }
}

export class ZItem extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): Item | undefined;
    setItem(value?: Item): ZItem;

    getScore(): number;
    setScore(value: number): ZItem;

    getCurrentoffset(): Uint8Array | string;
    getCurrentoffset_asU8(): Uint8Array;
    getCurrentoffset_asB64(): string;
    setCurrentoffset(value: Uint8Array | string): ZItem;

    getIndex(): number;
    setIndex(value: number): ZItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZItem.AsObject;
    static toObject(includeInstance: boolean, msg: ZItem): ZItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZItem;
    static deserializeBinaryFromReader(message: ZItem, reader: jspb.BinaryReader): ZItem;
}

export namespace ZItem {
    export type AsObject = {
        item?: Item.AsObject,
        score: number,
        currentoffset: Uint8Array | string,
        index: number,
    }
}

export class ZItemList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ZItem>;
    setItemsList(value: Array<ZItem>): ZItemList;
    addItems(value?: ZItem, index?: number): ZItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZItemList.AsObject;
    static toObject(includeInstance: boolean, msg: ZItemList): ZItemList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZItemList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZItemList;
    static deserializeBinaryFromReader(message: ZItemList, reader: jspb.BinaryReader): ZItemList;
}

export namespace ZItemList {
    export type AsObject = {
        itemsList: Array<ZItem.AsObject>,
    }
}

export class StructuredItemList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<StructuredItem>;
    setItemsList(value: Array<StructuredItem>): StructuredItemList;
    addItems(value?: StructuredItem, index?: number): StructuredItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructuredItemList.AsObject;
    static toObject(includeInstance: boolean, msg: StructuredItemList): StructuredItemList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructuredItemList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructuredItemList;
    static deserializeBinaryFromReader(message: StructuredItemList, reader: jspb.BinaryReader): StructuredItemList;
}

export namespace StructuredItemList {
    export type AsObject = {
        itemsList: Array<StructuredItem.AsObject>,
    }
}

export class ZStructuredItemList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ZStructuredItem>;
    setItemsList(value: Array<ZStructuredItem>): ZStructuredItemList;
    addItems(value?: ZStructuredItem, index?: number): ZStructuredItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZStructuredItemList.AsObject;
    static toObject(includeInstance: boolean, msg: ZStructuredItemList): ZStructuredItemList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZStructuredItemList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZStructuredItemList;
    static deserializeBinaryFromReader(message: ZStructuredItemList, reader: jspb.BinaryReader): ZStructuredItemList;
}

export namespace ZStructuredItemList {
    export type AsObject = {
        itemsList: Array<ZStructuredItem.AsObject>,
    }
}

export class ZStructuredItem extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): StructuredItem | undefined;
    setItem(value?: StructuredItem): ZStructuredItem;

    getScore(): number;
    setScore(value: number): ZStructuredItem;

    getCurrentoffset(): Uint8Array | string;
    getCurrentoffset_asU8(): Uint8Array;
    getCurrentoffset_asB64(): string;
    setCurrentoffset(value: Uint8Array | string): ZStructuredItem;

    getIndex(): number;
    setIndex(value: number): ZStructuredItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZStructuredItem.AsObject;
    static toObject(includeInstance: boolean, msg: ZStructuredItem): ZStructuredItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZStructuredItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZStructuredItem;
    static deserializeBinaryFromReader(message: ZStructuredItem, reader: jspb.BinaryReader): ZStructuredItem;
}

export namespace ZStructuredItem {
    export type AsObject = {
        item?: StructuredItem.AsObject,
        score: number,
        currentoffset: Uint8Array | string,
        index: number,
    }
}

export class Root extends jspb.Message { 

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): RootIndex | undefined;
    setPayload(value?: RootIndex): Root;


    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): Root;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Root.AsObject;
    static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Root;
    static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
    export type AsObject = {
        payload?: RootIndex.AsObject,
        signature?: Signature.AsObject,
    }
}

export class RootIndex extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): RootIndex;

    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): RootIndex;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootIndex.AsObject;
    static toObject(includeInstance: boolean, msg: RootIndex): RootIndex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RootIndex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootIndex;
    static deserializeBinaryFromReader(message: RootIndex, reader: jspb.BinaryReader): RootIndex;
}

export namespace RootIndex {
    export type AsObject = {
        index: number,
        root: Uint8Array | string,
    }
}

export class Signature extends jspb.Message { 
    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): Signature;

    getPublickey(): Uint8Array | string;
    getPublickey_asU8(): Uint8Array;
    getPublickey_asB64(): string;
    setPublickey(value: Uint8Array | string): Signature;


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
        signature: Uint8Array | string,
        publickey: Uint8Array | string,
    }
}

export class ScanOptions extends jspb.Message { 
    getPrefix(): Uint8Array | string;
    getPrefix_asU8(): Uint8Array;
    getPrefix_asB64(): string;
    setPrefix(value: Uint8Array | string): ScanOptions;

    getOffset(): Uint8Array | string;
    getOffset_asU8(): Uint8Array;
    getOffset_asB64(): string;
    setOffset(value: Uint8Array | string): ScanOptions;

    getLimit(): number;
    setLimit(value: number): ScanOptions;

    getReverse(): boolean;
    setReverse(value: boolean): ScanOptions;

    getDeep(): boolean;
    setDeep(value: boolean): ScanOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ScanOptions): ScanOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanOptions;
    static deserializeBinaryFromReader(message: ScanOptions, reader: jspb.BinaryReader): ScanOptions;
}

export namespace ScanOptions {
    export type AsObject = {
        prefix: Uint8Array | string,
        offset: Uint8Array | string,
        limit: number,
        reverse: boolean,
        deep: boolean,
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

export class ItemsCount extends jspb.Message { 
    getCount(): number;
    setCount(value: number): ItemsCount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemsCount.AsObject;
    static toObject(includeInstance: boolean, msg: ItemsCount): ItemsCount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemsCount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemsCount;
    static deserializeBinaryFromReader(message: ItemsCount, reader: jspb.BinaryReader): ItemsCount;
}

export namespace ItemsCount {
    export type AsObject = {
        count: number,
    }
}

export class InclusionProof extends jspb.Message { 
    getAt(): number;
    setAt(value: number): InclusionProof;

    getIndex(): number;
    setIndex(value: number): InclusionProof;

    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): InclusionProof;

    getLeaf(): Uint8Array | string;
    getLeaf_asU8(): Uint8Array;
    getLeaf_asB64(): string;
    setLeaf(value: Uint8Array | string): InclusionProof;

    clearPathList(): void;
    getPathList(): Array<Uint8Array | string>;
    getPathList_asU8(): Array<Uint8Array>;
    getPathList_asB64(): Array<string>;
    setPathList(value: Array<Uint8Array | string>): InclusionProof;
    addPath(value: Uint8Array | string, index?: number): Uint8Array | string;


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
        at: number,
        index: number,
        root: Uint8Array | string,
        leaf: Uint8Array | string,
        pathList: Array<Uint8Array | string>,
    }
}

export class ConsistencyProof extends jspb.Message { 
    getFirst(): number;
    setFirst(value: number): ConsistencyProof;

    getSecond(): number;
    setSecond(value: number): ConsistencyProof;

    getFirstroot(): Uint8Array | string;
    getFirstroot_asU8(): Uint8Array;
    getFirstroot_asB64(): string;
    setFirstroot(value: Uint8Array | string): ConsistencyProof;

    getSecondroot(): Uint8Array | string;
    getSecondroot_asU8(): Uint8Array;
    getSecondroot_asB64(): string;
    setSecondroot(value: Uint8Array | string): ConsistencyProof;

    clearPathList(): void;
    getPathList(): Array<Uint8Array | string>;
    getPathList_asU8(): Array<Uint8Array>;
    getPathList_asB64(): Array<string>;
    setPathList(value: Array<Uint8Array | string>): ConsistencyProof;
    addPath(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsistencyProof.AsObject;
    static toObject(includeInstance: boolean, msg: ConsistencyProof): ConsistencyProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsistencyProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsistencyProof;
    static deserializeBinaryFromReader(message: ConsistencyProof, reader: jspb.BinaryReader): ConsistencyProof;
}

export namespace ConsistencyProof {
    export type AsObject = {
        first: number,
        second: number,
        firstroot: Uint8Array | string,
        secondroot: Uint8Array | string,
        pathList: Array<Uint8Array | string>,
    }
}

export class Proof extends jspb.Message { 
    getLeaf(): Uint8Array | string;
    getLeaf_asU8(): Uint8Array;
    getLeaf_asB64(): string;
    setLeaf(value: Uint8Array | string): Proof;

    getIndex(): number;
    setIndex(value: number): Proof;

    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): Proof;

    getAt(): number;
    setAt(value: number): Proof;

    clearInclusionpathList(): void;
    getInclusionpathList(): Array<Uint8Array | string>;
    getInclusionpathList_asU8(): Array<Uint8Array>;
    getInclusionpathList_asB64(): Array<string>;
    setInclusionpathList(value: Array<Uint8Array | string>): Proof;
    addInclusionpath(value: Uint8Array | string, index?: number): Uint8Array | string;

    clearConsistencypathList(): void;
    getConsistencypathList(): Array<Uint8Array | string>;
    getConsistencypathList_asU8(): Array<Uint8Array>;
    getConsistencypathList_asB64(): Array<string>;
    setConsistencypathList(value: Array<Uint8Array | string>): Proof;
    addConsistencypath(value: Uint8Array | string, index?: number): Uint8Array | string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proof.AsObject;
    static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proof;
    static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
    export type AsObject = {
        leaf: Uint8Array | string,
        index: number,
        root: Uint8Array | string,
        at: number,
        inclusionpathList: Array<Uint8Array | string>,
        consistencypathList: Array<Uint8Array | string>,
    }
}

export class SafeItem extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): Item | undefined;
    setItem(value?: Item): SafeItem;


    hasProof(): boolean;
    clearProof(): void;
    getProof(): Proof | undefined;
    setProof(value?: Proof): SafeItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeItem.AsObject;
    static toObject(includeInstance: boolean, msg: SafeItem): SafeItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeItem;
    static deserializeBinaryFromReader(message: SafeItem, reader: jspb.BinaryReader): SafeItem;
}

export namespace SafeItem {
    export type AsObject = {
        item?: Item.AsObject,
        proof?: Proof.AsObject,
    }
}

export class SafeStructuredItem extends jspb.Message { 

    hasItem(): boolean;
    clearItem(): void;
    getItem(): StructuredItem | undefined;
    setItem(value?: StructuredItem): SafeStructuredItem;


    hasProof(): boolean;
    clearProof(): void;
    getProof(): Proof | undefined;
    setProof(value?: Proof): SafeStructuredItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeStructuredItem.AsObject;
    static toObject(includeInstance: boolean, msg: SafeStructuredItem): SafeStructuredItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeStructuredItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeStructuredItem;
    static deserializeBinaryFromReader(message: SafeStructuredItem, reader: jspb.BinaryReader): SafeStructuredItem;
}

export namespace SafeStructuredItem {
    export type AsObject = {
        item?: StructuredItem.AsObject,
        proof?: Proof.AsObject,
    }
}

export class SafeSetOptions extends jspb.Message { 

    hasKv(): boolean;
    clearKv(): void;
    getKv(): KeyValue | undefined;
    setKv(value?: KeyValue): SafeSetOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeSetOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeSetOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeSetOptions): SafeSetOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeSetOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeSetOptions;
    static deserializeBinaryFromReader(message: SafeSetOptions, reader: jspb.BinaryReader): SafeSetOptions;
}

export namespace SafeSetOptions {
    export type AsObject = {
        kv?: KeyValue.AsObject,
        rootindex?: Index.AsObject,
    }
}

export class SafeSetSVOptions extends jspb.Message { 

    hasSkv(): boolean;
    clearSkv(): void;
    getSkv(): StructuredKeyValue | undefined;
    setSkv(value?: StructuredKeyValue): SafeSetSVOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeSetSVOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeSetSVOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeSetSVOptions): SafeSetSVOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeSetSVOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeSetSVOptions;
    static deserializeBinaryFromReader(message: SafeSetSVOptions, reader: jspb.BinaryReader): SafeSetSVOptions;
}

export namespace SafeSetSVOptions {
    export type AsObject = {
        skv?: StructuredKeyValue.AsObject,
        rootindex?: Index.AsObject,
    }
}

export class SafeGetOptions extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): SafeGetOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeGetOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeGetOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeGetOptions): SafeGetOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeGetOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeGetOptions;
    static deserializeBinaryFromReader(message: SafeGetOptions, reader: jspb.BinaryReader): SafeGetOptions;
}

export namespace SafeGetOptions {
    export type AsObject = {
        key: Uint8Array | string,
        rootindex?: Index.AsObject,
    }
}

export class SafeReferenceOptions extends jspb.Message { 

    hasRo(): boolean;
    clearRo(): void;
    getRo(): ReferenceOptions | undefined;
    setRo(value?: ReferenceOptions): SafeReferenceOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeReferenceOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeReferenceOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeReferenceOptions): SafeReferenceOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeReferenceOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeReferenceOptions;
    static deserializeBinaryFromReader(message: SafeReferenceOptions, reader: jspb.BinaryReader): SafeReferenceOptions;
}

export namespace SafeReferenceOptions {
    export type AsObject = {
        ro?: ReferenceOptions.AsObject,
        rootindex?: Index.AsObject,
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

export class ReferenceOptions extends jspb.Message { 
    getReference(): Uint8Array | string;
    getReference_asU8(): Uint8Array;
    getReference_asB64(): string;
    setReference(value: Uint8Array | string): ReferenceOptions;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ReferenceOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceOptions): ReferenceOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceOptions;
    static deserializeBinaryFromReader(message: ReferenceOptions, reader: jspb.BinaryReader): ReferenceOptions;
}

export namespace ReferenceOptions {
    export type AsObject = {
        reference: Uint8Array | string,
        key: Uint8Array | string,
    }
}

export class ZAddOptions extends jspb.Message { 
    getSet(): Uint8Array | string;
    getSet_asU8(): Uint8Array;
    getSet_asB64(): string;
    setSet(value: Uint8Array | string): ZAddOptions;


    hasScore(): boolean;
    clearScore(): void;
    getScore(): Score | undefined;
    setScore(value?: Score): ZAddOptions;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): ZAddOptions;


    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): Index | undefined;
    setIndex(value?: Index): ZAddOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZAddOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ZAddOptions): ZAddOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZAddOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZAddOptions;
    static deserializeBinaryFromReader(message: ZAddOptions, reader: jspb.BinaryReader): ZAddOptions;
}

export namespace ZAddOptions {
    export type AsObject = {
        set: Uint8Array | string,
        score?: Score.AsObject,
        key: Uint8Array | string,
        index?: Index.AsObject,
    }
}

export class ZScanOptions extends jspb.Message { 
    getSet(): Uint8Array | string;
    getSet_asU8(): Uint8Array;
    getSet_asB64(): string;
    setSet(value: Uint8Array | string): ZScanOptions;

    getOffset(): Uint8Array | string;
    getOffset_asU8(): Uint8Array;
    getOffset_asB64(): string;
    setOffset(value: Uint8Array | string): ZScanOptions;

    getLimit(): number;
    setLimit(value: number): ZScanOptions;

    getReverse(): boolean;
    setReverse(value: boolean): ZScanOptions;


    hasMin(): boolean;
    clearMin(): void;
    getMin(): Score | undefined;
    setMin(value?: Score): ZScanOptions;


    hasMax(): boolean;
    clearMax(): void;
    getMax(): Score | undefined;
    setMax(value?: Score): ZScanOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZScanOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ZScanOptions): ZScanOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZScanOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZScanOptions;
    static deserializeBinaryFromReader(message: ZScanOptions, reader: jspb.BinaryReader): ZScanOptions;
}

export namespace ZScanOptions {
    export type AsObject = {
        set: Uint8Array | string,
        offset: Uint8Array | string,
        limit: number,
        reverse: boolean,
        min?: Score.AsObject,
        max?: Score.AsObject,
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

export class IScanOptions extends jspb.Message { 
    getPagesize(): number;
    setPagesize(value: number): IScanOptions;

    getPagenumber(): number;
    setPagenumber(value: number): IScanOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IScanOptions.AsObject;
    static toObject(includeInstance: boolean, msg: IScanOptions): IScanOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IScanOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IScanOptions;
    static deserializeBinaryFromReader(message: IScanOptions, reader: jspb.BinaryReader): IScanOptions;
}

export namespace IScanOptions {
    export type AsObject = {
        pagesize: number,
        pagenumber: number,
    }
}

export class Page extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): Page;
    addItems(value?: Item, index?: number): Item;

    getMore(): boolean;
    setMore(value: boolean): Page;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
    export type AsObject = {
        itemsList: Array<Item.AsObject>,
        more: boolean,
    }
}

export class SPage extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<StructuredItem>;
    setItemsList(value: Array<StructuredItem>): SPage;
    addItems(value?: StructuredItem, index?: number): StructuredItem;

    getPagenum(): number;
    setPagenum(value: number): SPage;

    getMore(): boolean;
    setMore(value: boolean): SPage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SPage.AsObject;
    static toObject(includeInstance: boolean, msg: SPage): SPage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SPage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SPage;
    static deserializeBinaryFromReader(message: SPage, reader: jspb.BinaryReader): SPage;
}

export namespace SPage {
    export type AsObject = {
        itemsList: Array<StructuredItem.AsObject>,
        pagenum: number,
        more: boolean,
    }
}

export class HistoryOptions extends jspb.Message { 
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): HistoryOptions;

    getOffset(): number;
    setOffset(value: number): HistoryOptions;

    getLimit(): number;
    setLimit(value: number): HistoryOptions;

    getReverse(): boolean;
    setReverse(value: boolean): HistoryOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoryOptions.AsObject;
    static toObject(includeInstance: boolean, msg: HistoryOptions): HistoryOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoryOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoryOptions;
    static deserializeBinaryFromReader(message: HistoryOptions, reader: jspb.BinaryReader): HistoryOptions;
}

export namespace HistoryOptions {
    export type AsObject = {
        key: Uint8Array | string,
        offset: number,
        limit: number,
        reverse: boolean,
    }
}

export class SafeZAddOptions extends jspb.Message { 

    hasZopts(): boolean;
    clearZopts(): void;
    getZopts(): ZAddOptions | undefined;
    setZopts(value?: ZAddOptions): SafeZAddOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeZAddOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeZAddOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeZAddOptions): SafeZAddOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeZAddOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeZAddOptions;
    static deserializeBinaryFromReader(message: SafeZAddOptions, reader: jspb.BinaryReader): SafeZAddOptions;
}

export namespace SafeZAddOptions {
    export type AsObject = {
        zopts?: ZAddOptions.AsObject,
        rootindex?: Index.AsObject,
    }
}

export class SafeIndexOptions extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): SafeIndexOptions;


    hasRootindex(): boolean;
    clearRootindex(): void;
    getRootindex(): Index | undefined;
    setRootindex(value?: Index): SafeIndexOptions;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SafeIndexOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SafeIndexOptions): SafeIndexOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SafeIndexOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SafeIndexOptions;
    static deserializeBinaryFromReader(message: SafeIndexOptions, reader: jspb.BinaryReader): SafeIndexOptions;
}

export namespace SafeIndexOptions {
    export type AsObject = {
        index: number,
        rootindex?: Index.AsObject,
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
