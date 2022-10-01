import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace immudb. */
export namespace immudb {

    /** Namespace schema. */
    namespace schema {

        /** Properties of a Key. */
        interface IKey {

            /** Key key */
            key?: (Uint8Array|null);
        }

        /** Represents a Key. */
        class Key implements IKey {

            /**
             * Constructs a new Key.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKey);

            /** Key key. */
            public key: Uint8Array;

            /**
             * Creates a new Key instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Key instance
             */
            public static create(properties?: immudb.schema.IKey): immudb.schema.Key;

            /**
             * Encodes the specified Key message. Does not implicitly {@link immudb.schema.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Key message, length delimited. Does not implicitly {@link immudb.schema.Key.verify|verify} messages.
             * @param message Key message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Key message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Key;

            /**
             * Decodes a Key message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Key
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Key;

            /**
             * Verifies a Key message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Key message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Key
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Key;

            /**
             * Creates a plain object from a Key message. Also converts values to other types if specified.
             * @param message Key
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Key to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Key
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Permission. */
        interface IPermission {

            /** Permission database */
            database?: (string|null);

            /** Permission permission */
            permission?: (number|null);
        }

        /** Represents a Permission. */
        class Permission implements IPermission {

            /**
             * Constructs a new Permission.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IPermission);

            /** Permission database. */
            public database: string;

            /** Permission permission. */
            public permission: number;

            /**
             * Creates a new Permission instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Permission instance
             */
            public static create(properties?: immudb.schema.IPermission): immudb.schema.Permission;

            /**
             * Encodes the specified Permission message. Does not implicitly {@link immudb.schema.Permission.verify|verify} messages.
             * @param message Permission message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IPermission, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Permission message, length delimited. Does not implicitly {@link immudb.schema.Permission.verify|verify} messages.
             * @param message Permission message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IPermission, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Permission message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Permission
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Permission;

            /**
             * Decodes a Permission message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Permission
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Permission;

            /**
             * Verifies a Permission message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Permission message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Permission
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Permission;

            /**
             * Creates a plain object from a Permission message. Also converts values to other types if specified.
             * @param message Permission
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Permission, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Permission to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Permission
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a User. */
        interface IUser {

            /** User user */
            user?: (Uint8Array|null);

            /** User permissions */
            permissions?: (immudb.schema.IPermission[]|null);

            /** User createdby */
            createdby?: (string|null);

            /** User createdat */
            createdat?: (string|null);

            /** User active */
            active?: (boolean|null);
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUser);

            /** User user. */
            public user: Uint8Array;

            /** User permissions. */
            public permissions: immudb.schema.IPermission[];

            /** User createdby. */
            public createdby: string;

            /** User createdat. */
            public createdat: string;

            /** User active. */
            public active: boolean;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: immudb.schema.IUser): immudb.schema.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link immudb.schema.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link immudb.schema.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.User;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for User
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserList. */
        interface IUserList {

            /** UserList users */
            users?: (immudb.schema.IUser[]|null);
        }

        /** Represents a UserList. */
        class UserList implements IUserList {

            /**
             * Constructs a new UserList.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUserList);

            /** UserList users. */
            public users: immudb.schema.IUser[];

            /**
             * Creates a new UserList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserList instance
             */
            public static create(properties?: immudb.schema.IUserList): immudb.schema.UserList;

            /**
             * Encodes the specified UserList message. Does not implicitly {@link immudb.schema.UserList.verify|verify} messages.
             * @param message UserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserList message, length delimited. Does not implicitly {@link immudb.schema.UserList.verify|verify} messages.
             * @param message UserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UserList;

            /**
             * Decodes a UserList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UserList;

            /**
             * Verifies a UserList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserList
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UserList;

            /**
             * Creates a plain object from a UserList message. Also converts values to other types if specified.
             * @param message UserList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateUserRequest. */
        interface ICreateUserRequest {

            /** CreateUserRequest user */
            user?: (Uint8Array|null);

            /** CreateUserRequest password */
            password?: (Uint8Array|null);

            /** CreateUserRequest permission */
            permission?: (number|null);

            /** CreateUserRequest database */
            database?: (string|null);
        }

        /** Represents a CreateUserRequest. */
        class CreateUserRequest implements ICreateUserRequest {

            /**
             * Constructs a new CreateUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ICreateUserRequest);

            /** CreateUserRequest user. */
            public user: Uint8Array;

            /** CreateUserRequest password. */
            public password: Uint8Array;

            /** CreateUserRequest permission. */
            public permission: number;

            /** CreateUserRequest database. */
            public database: string;

            /**
             * Creates a new CreateUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserRequest instance
             */
            public static create(properties?: immudb.schema.ICreateUserRequest): immudb.schema.CreateUserRequest;

            /**
             * Encodes the specified CreateUserRequest message. Does not implicitly {@link immudb.schema.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link immudb.schema.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.CreateUserRequest;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.CreateUserRequest;

            /**
             * Verifies a CreateUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.CreateUserRequest;

            /**
             * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
             * @param message CreateUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserRequest. */
        interface IUserRequest {

            /** UserRequest user */
            user?: (Uint8Array|null);
        }

        /** Represents a UserRequest. */
        class UserRequest implements IUserRequest {

            /**
             * Constructs a new UserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUserRequest);

            /** UserRequest user. */
            public user: Uint8Array;

            /**
             * Creates a new UserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserRequest instance
             */
            public static create(properties?: immudb.schema.IUserRequest): immudb.schema.UserRequest;

            /**
             * Encodes the specified UserRequest message. Does not implicitly {@link immudb.schema.UserRequest.verify|verify} messages.
             * @param message UserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserRequest message, length delimited. Does not implicitly {@link immudb.schema.UserRequest.verify|verify} messages.
             * @param message UserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UserRequest;

            /**
             * Decodes a UserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UserRequest;

            /**
             * Verifies a UserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UserRequest;

            /**
             * Creates a plain object from a UserRequest message. Also converts values to other types if specified.
             * @param message UserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChangePasswordRequest. */
        interface IChangePasswordRequest {

            /** ChangePasswordRequest user */
            user?: (Uint8Array|null);

            /** ChangePasswordRequest oldPassword */
            oldPassword?: (Uint8Array|null);

            /** ChangePasswordRequest newPassword */
            newPassword?: (Uint8Array|null);
        }

        /** Represents a ChangePasswordRequest. */
        class ChangePasswordRequest implements IChangePasswordRequest {

            /**
             * Constructs a new ChangePasswordRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IChangePasswordRequest);

            /** ChangePasswordRequest user. */
            public user: Uint8Array;

            /** ChangePasswordRequest oldPassword. */
            public oldPassword: Uint8Array;

            /** ChangePasswordRequest newPassword. */
            public newPassword: Uint8Array;

            /**
             * Creates a new ChangePasswordRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangePasswordRequest instance
             */
            public static create(properties?: immudb.schema.IChangePasswordRequest): immudb.schema.ChangePasswordRequest;

            /**
             * Encodes the specified ChangePasswordRequest message. Does not implicitly {@link immudb.schema.ChangePasswordRequest.verify|verify} messages.
             * @param message ChangePasswordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IChangePasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangePasswordRequest message, length delimited. Does not implicitly {@link immudb.schema.ChangePasswordRequest.verify|verify} messages.
             * @param message ChangePasswordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IChangePasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangePasswordRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangePasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ChangePasswordRequest;

            /**
             * Decodes a ChangePasswordRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangePasswordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ChangePasswordRequest;

            /**
             * Verifies a ChangePasswordRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangePasswordRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangePasswordRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ChangePasswordRequest;

            /**
             * Creates a plain object from a ChangePasswordRequest message. Also converts values to other types if specified.
             * @param message ChangePasswordRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ChangePasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangePasswordRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangePasswordRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoginRequest. */
        interface ILoginRequest {

            /** LoginRequest user */
            user?: (Uint8Array|null);

            /** LoginRequest password */
            password?: (Uint8Array|null);
        }

        /** Represents a LoginRequest. */
        class LoginRequest implements ILoginRequest {

            /**
             * Constructs a new LoginRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ILoginRequest);

            /** LoginRequest user. */
            public user: Uint8Array;

            /** LoginRequest password. */
            public password: Uint8Array;

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRequest instance
             */
            public static create(properties?: immudb.schema.ILoginRequest): immudb.schema.LoginRequest;

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link immudb.schema.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link immudb.schema.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.LoginRequest;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.LoginRequest;

            /**
             * Verifies a LoginRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.LoginRequest;

            /**
             * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
             * @param message LoginRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoginRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoginResponse. */
        interface ILoginResponse {

            /** LoginResponse token */
            token?: (string|null);

            /** LoginResponse warning */
            warning?: (Uint8Array|null);
        }

        /** Represents a LoginResponse. */
        class LoginResponse implements ILoginResponse {

            /**
             * Constructs a new LoginResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ILoginResponse);

            /** LoginResponse token. */
            public token: string;

            /** LoginResponse warning. */
            public warning: Uint8Array;

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginResponse instance
             */
            public static create(properties?: immudb.schema.ILoginResponse): immudb.schema.LoginResponse;

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link immudb.schema.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link immudb.schema.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.LoginResponse;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.LoginResponse;

            /**
             * Verifies a LoginResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.LoginResponse;

            /**
             * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
             * @param message LoginResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoginResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AuthConfig. */
        interface IAuthConfig {

            /** AuthConfig kind */
            kind?: (number|null);
        }

        /** Represents an AuthConfig. */
        class AuthConfig implements IAuthConfig {

            /**
             * Constructs a new AuthConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IAuthConfig);

            /** AuthConfig kind. */
            public kind: number;

            /**
             * Creates a new AuthConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthConfig instance
             */
            public static create(properties?: immudb.schema.IAuthConfig): immudb.schema.AuthConfig;

            /**
             * Encodes the specified AuthConfig message. Does not implicitly {@link immudb.schema.AuthConfig.verify|verify} messages.
             * @param message AuthConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IAuthConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthConfig message, length delimited. Does not implicitly {@link immudb.schema.AuthConfig.verify|verify} messages.
             * @param message AuthConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IAuthConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.AuthConfig;

            /**
             * Decodes an AuthConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.AuthConfig;

            /**
             * Verifies an AuthConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthConfig
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.AuthConfig;

            /**
             * Creates a plain object from an AuthConfig message. Also converts values to other types if specified.
             * @param message AuthConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.AuthConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AuthConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MTLSConfig. */
        interface IMTLSConfig {

            /** MTLSConfig enabled */
            enabled?: (boolean|null);
        }

        /** Represents a MTLSConfig. */
        class MTLSConfig implements IMTLSConfig {

            /**
             * Constructs a new MTLSConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IMTLSConfig);

            /** MTLSConfig enabled. */
            public enabled: boolean;

            /**
             * Creates a new MTLSConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MTLSConfig instance
             */
            public static create(properties?: immudb.schema.IMTLSConfig): immudb.schema.MTLSConfig;

            /**
             * Encodes the specified MTLSConfig message. Does not implicitly {@link immudb.schema.MTLSConfig.verify|verify} messages.
             * @param message MTLSConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IMTLSConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MTLSConfig message, length delimited. Does not implicitly {@link immudb.schema.MTLSConfig.verify|verify} messages.
             * @param message MTLSConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IMTLSConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MTLSConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MTLSConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.MTLSConfig;

            /**
             * Decodes a MTLSConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MTLSConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.MTLSConfig;

            /**
             * Verifies a MTLSConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MTLSConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MTLSConfig
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.MTLSConfig;

            /**
             * Creates a plain object from a MTLSConfig message. Also converts values to other types if specified.
             * @param message MTLSConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.MTLSConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MTLSConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MTLSConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenSessionRequest. */
        interface IOpenSessionRequest {

            /** OpenSessionRequest username */
            username?: (Uint8Array|null);

            /** OpenSessionRequest password */
            password?: (Uint8Array|null);

            /** OpenSessionRequest databaseName */
            databaseName?: (string|null);
        }

        /** Represents an OpenSessionRequest. */
        class OpenSessionRequest implements IOpenSessionRequest {

            /**
             * Constructs a new OpenSessionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IOpenSessionRequest);

            /** OpenSessionRequest username. */
            public username: Uint8Array;

            /** OpenSessionRequest password. */
            public password: Uint8Array;

            /** OpenSessionRequest databaseName. */
            public databaseName: string;

            /**
             * Creates a new OpenSessionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenSessionRequest instance
             */
            public static create(properties?: immudb.schema.IOpenSessionRequest): immudb.schema.OpenSessionRequest;

            /**
             * Encodes the specified OpenSessionRequest message. Does not implicitly {@link immudb.schema.OpenSessionRequest.verify|verify} messages.
             * @param message OpenSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IOpenSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenSessionRequest message, length delimited. Does not implicitly {@link immudb.schema.OpenSessionRequest.verify|verify} messages.
             * @param message OpenSessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IOpenSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenSessionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.OpenSessionRequest;

            /**
             * Decodes an OpenSessionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.OpenSessionRequest;

            /**
             * Verifies an OpenSessionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenSessionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenSessionRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.OpenSessionRequest;

            /**
             * Creates a plain object from an OpenSessionRequest message. Also converts values to other types if specified.
             * @param message OpenSessionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.OpenSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenSessionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenSessionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OpenSessionResponse. */
        interface IOpenSessionResponse {

            /** OpenSessionResponse sessionID */
            sessionID?: (string|null);

            /** OpenSessionResponse serverUUID */
            serverUUID?: (string|null);
        }

        /** Represents an OpenSessionResponse. */
        class OpenSessionResponse implements IOpenSessionResponse {

            /**
             * Constructs a new OpenSessionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IOpenSessionResponse);

            /** OpenSessionResponse sessionID. */
            public sessionID: string;

            /** OpenSessionResponse serverUUID. */
            public serverUUID: string;

            /**
             * Creates a new OpenSessionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OpenSessionResponse instance
             */
            public static create(properties?: immudb.schema.IOpenSessionResponse): immudb.schema.OpenSessionResponse;

            /**
             * Encodes the specified OpenSessionResponse message. Does not implicitly {@link immudb.schema.OpenSessionResponse.verify|verify} messages.
             * @param message OpenSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IOpenSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OpenSessionResponse message, length delimited. Does not implicitly {@link immudb.schema.OpenSessionResponse.verify|verify} messages.
             * @param message OpenSessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IOpenSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OpenSessionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OpenSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.OpenSessionResponse;

            /**
             * Decodes an OpenSessionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OpenSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.OpenSessionResponse;

            /**
             * Verifies an OpenSessionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OpenSessionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OpenSessionResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.OpenSessionResponse;

            /**
             * Creates a plain object from an OpenSessionResponse message. Also converts values to other types if specified.
             * @param message OpenSessionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.OpenSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OpenSessionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OpenSessionResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Precondition. */
        interface IPrecondition {

            /** Precondition keyMustExist */
            keyMustExist?: (immudb.schema.Precondition.IKeyMustExistPrecondition|null);

            /** Precondition keyMustNotExist */
            keyMustNotExist?: (immudb.schema.Precondition.IKeyMustNotExistPrecondition|null);

            /** Precondition keyNotModifiedAfterTX */
            keyNotModifiedAfterTX?: (immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition|null);
        }

        /** Represents a Precondition. */
        class Precondition implements IPrecondition {

            /**
             * Constructs a new Precondition.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IPrecondition);

            /** Precondition keyMustExist. */
            public keyMustExist?: (immudb.schema.Precondition.IKeyMustExistPrecondition|null);

            /** Precondition keyMustNotExist. */
            public keyMustNotExist?: (immudb.schema.Precondition.IKeyMustNotExistPrecondition|null);

            /** Precondition keyNotModifiedAfterTX. */
            public keyNotModifiedAfterTX?: (immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition|null);

            /** Precondition precondition. */
            public precondition?: ("keyMustExist"|"keyMustNotExist"|"keyNotModifiedAfterTX");

            /**
             * Creates a new Precondition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Precondition instance
             */
            public static create(properties?: immudb.schema.IPrecondition): immudb.schema.Precondition;

            /**
             * Encodes the specified Precondition message. Does not implicitly {@link immudb.schema.Precondition.verify|verify} messages.
             * @param message Precondition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Precondition message, length delimited. Does not implicitly {@link immudb.schema.Precondition.verify|verify} messages.
             * @param message Precondition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Precondition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Precondition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Precondition;

            /**
             * Decodes a Precondition message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Precondition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Precondition;

            /**
             * Verifies a Precondition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Precondition message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Precondition
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Precondition;

            /**
             * Creates a plain object from a Precondition message. Also converts values to other types if specified.
             * @param message Precondition
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Precondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Precondition to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Precondition
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Precondition {

            /** Properties of a KeyMustExistPrecondition. */
            interface IKeyMustExistPrecondition {

                /** KeyMustExistPrecondition key */
                key?: (Uint8Array|null);
            }

            /** Represents a KeyMustExistPrecondition. */
            class KeyMustExistPrecondition implements IKeyMustExistPrecondition {

                /**
                 * Constructs a new KeyMustExistPrecondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: immudb.schema.Precondition.IKeyMustExistPrecondition);

                /** KeyMustExistPrecondition key. */
                public key: Uint8Array;

                /**
                 * Creates a new KeyMustExistPrecondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyMustExistPrecondition instance
                 */
                public static create(properties?: immudb.schema.Precondition.IKeyMustExistPrecondition): immudb.schema.Precondition.KeyMustExistPrecondition;

                /**
                 * Encodes the specified KeyMustExistPrecondition message. Does not implicitly {@link immudb.schema.Precondition.KeyMustExistPrecondition.verify|verify} messages.
                 * @param message KeyMustExistPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: immudb.schema.Precondition.IKeyMustExistPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyMustExistPrecondition message, length delimited. Does not implicitly {@link immudb.schema.Precondition.KeyMustExistPrecondition.verify|verify} messages.
                 * @param message KeyMustExistPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: immudb.schema.Precondition.IKeyMustExistPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyMustExistPrecondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyMustExistPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Precondition.KeyMustExistPrecondition;

                /**
                 * Decodes a KeyMustExistPrecondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyMustExistPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Precondition.KeyMustExistPrecondition;

                /**
                 * Verifies a KeyMustExistPrecondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyMustExistPrecondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyMustExistPrecondition
                 */
                public static fromObject(object: { [k: string]: any }): immudb.schema.Precondition.KeyMustExistPrecondition;

                /**
                 * Creates a plain object from a KeyMustExistPrecondition message. Also converts values to other types if specified.
                 * @param message KeyMustExistPrecondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: immudb.schema.Precondition.KeyMustExistPrecondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyMustExistPrecondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyMustExistPrecondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyMustNotExistPrecondition. */
            interface IKeyMustNotExistPrecondition {

                /** KeyMustNotExistPrecondition key */
                key?: (Uint8Array|null);
            }

            /** Represents a KeyMustNotExistPrecondition. */
            class KeyMustNotExistPrecondition implements IKeyMustNotExistPrecondition {

                /**
                 * Constructs a new KeyMustNotExistPrecondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: immudb.schema.Precondition.IKeyMustNotExistPrecondition);

                /** KeyMustNotExistPrecondition key. */
                public key: Uint8Array;

                /**
                 * Creates a new KeyMustNotExistPrecondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyMustNotExistPrecondition instance
                 */
                public static create(properties?: immudb.schema.Precondition.IKeyMustNotExistPrecondition): immudb.schema.Precondition.KeyMustNotExistPrecondition;

                /**
                 * Encodes the specified KeyMustNotExistPrecondition message. Does not implicitly {@link immudb.schema.Precondition.KeyMustNotExistPrecondition.verify|verify} messages.
                 * @param message KeyMustNotExistPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: immudb.schema.Precondition.IKeyMustNotExistPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyMustNotExistPrecondition message, length delimited. Does not implicitly {@link immudb.schema.Precondition.KeyMustNotExistPrecondition.verify|verify} messages.
                 * @param message KeyMustNotExistPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: immudb.schema.Precondition.IKeyMustNotExistPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyMustNotExistPrecondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyMustNotExistPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Precondition.KeyMustNotExistPrecondition;

                /**
                 * Decodes a KeyMustNotExistPrecondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyMustNotExistPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Precondition.KeyMustNotExistPrecondition;

                /**
                 * Verifies a KeyMustNotExistPrecondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyMustNotExistPrecondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyMustNotExistPrecondition
                 */
                public static fromObject(object: { [k: string]: any }): immudb.schema.Precondition.KeyMustNotExistPrecondition;

                /**
                 * Creates a plain object from a KeyMustNotExistPrecondition message. Also converts values to other types if specified.
                 * @param message KeyMustNotExistPrecondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: immudb.schema.Precondition.KeyMustNotExistPrecondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyMustNotExistPrecondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyMustNotExistPrecondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyNotModifiedAfterTXPrecondition. */
            interface IKeyNotModifiedAfterTXPrecondition {

                /** KeyNotModifiedAfterTXPrecondition key */
                key?: (Uint8Array|null);

                /** KeyNotModifiedAfterTXPrecondition txID */
                txID?: (Long|null);
            }

            /** Represents a KeyNotModifiedAfterTXPrecondition. */
            class KeyNotModifiedAfterTXPrecondition implements IKeyNotModifiedAfterTXPrecondition {

                /**
                 * Constructs a new KeyNotModifiedAfterTXPrecondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition);

                /** KeyNotModifiedAfterTXPrecondition key. */
                public key: Uint8Array;

                /** KeyNotModifiedAfterTXPrecondition txID. */
                public txID: Long;

                /**
                 * Creates a new KeyNotModifiedAfterTXPrecondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyNotModifiedAfterTXPrecondition instance
                 */
                public static create(properties?: immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition): immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition;

                /**
                 * Encodes the specified KeyNotModifiedAfterTXPrecondition message. Does not implicitly {@link immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition.verify|verify} messages.
                 * @param message KeyNotModifiedAfterTXPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyNotModifiedAfterTXPrecondition message, length delimited. Does not implicitly {@link immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition.verify|verify} messages.
                 * @param message KeyNotModifiedAfterTXPrecondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: immudb.schema.Precondition.IKeyNotModifiedAfterTXPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyNotModifiedAfterTXPrecondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyNotModifiedAfterTXPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition;

                /**
                 * Decodes a KeyNotModifiedAfterTXPrecondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyNotModifiedAfterTXPrecondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition;

                /**
                 * Verifies a KeyNotModifiedAfterTXPrecondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyNotModifiedAfterTXPrecondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyNotModifiedAfterTXPrecondition
                 */
                public static fromObject(object: { [k: string]: any }): immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition;

                /**
                 * Creates a plain object from a KeyNotModifiedAfterTXPrecondition message. Also converts values to other types if specified.
                 * @param message KeyNotModifiedAfterTXPrecondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: immudb.schema.Precondition.KeyNotModifiedAfterTXPrecondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyNotModifiedAfterTXPrecondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyNotModifiedAfterTXPrecondition
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a KeyValue. */
        interface IKeyValue {

            /** KeyValue key */
            key?: (Uint8Array|null);

            /** KeyValue value */
            value?: (Uint8Array|null);

            /** KeyValue metadata */
            metadata?: (immudb.schema.IKVMetadata|null);
        }

        /** Represents a KeyValue. */
        class KeyValue implements IKeyValue {

            /**
             * Constructs a new KeyValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKeyValue);

            /** KeyValue key. */
            public key: Uint8Array;

            /** KeyValue value. */
            public value: Uint8Array;

            /** KeyValue metadata. */
            public metadata?: (immudb.schema.IKVMetadata|null);

            /**
             * Creates a new KeyValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyValue instance
             */
            public static create(properties?: immudb.schema.IKeyValue): immudb.schema.KeyValue;

            /**
             * Encodes the specified KeyValue message. Does not implicitly {@link immudb.schema.KeyValue.verify|verify} messages.
             * @param message KeyValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link immudb.schema.KeyValue.verify|verify} messages.
             * @param message KeyValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.KeyValue;

            /**
             * Decodes a KeyValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.KeyValue;

            /**
             * Verifies a KeyValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyValue
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.KeyValue;

            /**
             * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
             * @param message KeyValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeyValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Entry. */
        interface IEntry {

            /** Entry tx */
            tx?: (Long|null);

            /** Entry key */
            key?: (Uint8Array|null);

            /** Entry value */
            value?: (Uint8Array|null);

            /** Entry referencedBy */
            referencedBy?: (immudb.schema.IReference|null);

            /** Entry metadata */
            metadata?: (immudb.schema.IKVMetadata|null);

            /** Entry expired */
            expired?: (boolean|null);

            /** Entry revision */
            revision?: (Long|null);
        }

        /** Represents an Entry. */
        class Entry implements IEntry {

            /**
             * Constructs a new Entry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IEntry);

            /** Entry tx. */
            public tx: Long;

            /** Entry key. */
            public key: Uint8Array;

            /** Entry value. */
            public value: Uint8Array;

            /** Entry referencedBy. */
            public referencedBy?: (immudb.schema.IReference|null);

            /** Entry metadata. */
            public metadata?: (immudb.schema.IKVMetadata|null);

            /** Entry expired. */
            public expired: boolean;

            /** Entry revision. */
            public revision: Long;

            /**
             * Creates a new Entry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entry instance
             */
            public static create(properties?: immudb.schema.IEntry): immudb.schema.Entry;

            /**
             * Encodes the specified Entry message. Does not implicitly {@link immudb.schema.Entry.verify|verify} messages.
             * @param message Entry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entry message, length delimited. Does not implicitly {@link immudb.schema.Entry.verify|verify} messages.
             * @param message Entry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Entry;

            /**
             * Decodes an Entry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Entry;

            /**
             * Verifies an Entry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Entry;

            /**
             * Creates a plain object from an Entry message. Also converts values to other types if specified.
             * @param message Entry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reference. */
        interface IReference {

            /** Reference tx */
            tx?: (Long|null);

            /** Reference key */
            key?: (Uint8Array|null);

            /** Reference atTx */
            atTx?: (Long|null);

            /** Reference metadata */
            metadata?: (immudb.schema.IKVMetadata|null);

            /** Reference revision */
            revision?: (Long|null);
        }

        /** Represents a Reference. */
        class Reference implements IReference {

            /**
             * Constructs a new Reference.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IReference);

            /** Reference tx. */
            public tx: Long;

            /** Reference key. */
            public key: Uint8Array;

            /** Reference atTx. */
            public atTx: Long;

            /** Reference metadata. */
            public metadata?: (immudb.schema.IKVMetadata|null);

            /** Reference revision. */
            public revision: Long;

            /**
             * Creates a new Reference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reference instance
             */
            public static create(properties?: immudb.schema.IReference): immudb.schema.Reference;

            /**
             * Encodes the specified Reference message. Does not implicitly {@link immudb.schema.Reference.verify|verify} messages.
             * @param message Reference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reference message, length delimited. Does not implicitly {@link immudb.schema.Reference.verify|verify} messages.
             * @param message Reference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Reference;

            /**
             * Decodes a Reference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Reference;

            /**
             * Verifies a Reference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reference
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Reference;

            /**
             * Creates a plain object from a Reference message. Also converts values to other types if specified.
             * @param message Reference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Op. */
        interface IOp {

            /** Op kv */
            kv?: (immudb.schema.IKeyValue|null);

            /** Op zAdd */
            zAdd?: (immudb.schema.IZAddRequest|null);

            /** Op ref */
            ref?: (immudb.schema.IReferenceRequest|null);
        }

        /** Represents an Op. */
        class Op implements IOp {

            /**
             * Constructs a new Op.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IOp);

            /** Op kv. */
            public kv?: (immudb.schema.IKeyValue|null);

            /** Op zAdd. */
            public zAdd?: (immudb.schema.IZAddRequest|null);

            /** Op ref. */
            public ref?: (immudb.schema.IReferenceRequest|null);

            /** Op operation. */
            public operation?: ("kv"|"zAdd"|"ref");

            /**
             * Creates a new Op instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Op instance
             */
            public static create(properties?: immudb.schema.IOp): immudb.schema.Op;

            /**
             * Encodes the specified Op message. Does not implicitly {@link immudb.schema.Op.verify|verify} messages.
             * @param message Op message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Op message, length delimited. Does not implicitly {@link immudb.schema.Op.verify|verify} messages.
             * @param message Op message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IOp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Op message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Op
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Op;

            /**
             * Decodes an Op message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Op
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Op;

            /**
             * Verifies an Op message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Op message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Op
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Op;

            /**
             * Creates a plain object from an Op message. Also converts values to other types if specified.
             * @param message Op
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Op, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Op to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Op
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ExecAllRequest. */
        interface IExecAllRequest {

            /** ExecAllRequest Operations */
            Operations?: (immudb.schema.IOp[]|null);

            /** ExecAllRequest noWait */
            noWait?: (boolean|null);

            /** ExecAllRequest preconditions */
            preconditions?: (immudb.schema.IPrecondition[]|null);
        }

        /** Represents an ExecAllRequest. */
        class ExecAllRequest implements IExecAllRequest {

            /**
             * Constructs a new ExecAllRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IExecAllRequest);

            /** ExecAllRequest Operations. */
            public Operations: immudb.schema.IOp[];

            /** ExecAllRequest noWait. */
            public noWait: boolean;

            /** ExecAllRequest preconditions. */
            public preconditions: immudb.schema.IPrecondition[];

            /**
             * Creates a new ExecAllRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecAllRequest instance
             */
            public static create(properties?: immudb.schema.IExecAllRequest): immudb.schema.ExecAllRequest;

            /**
             * Encodes the specified ExecAllRequest message. Does not implicitly {@link immudb.schema.ExecAllRequest.verify|verify} messages.
             * @param message ExecAllRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IExecAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExecAllRequest message, length delimited. Does not implicitly {@link immudb.schema.ExecAllRequest.verify|verify} messages.
             * @param message ExecAllRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IExecAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecAllRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecAllRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ExecAllRequest;

            /**
             * Decodes an ExecAllRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExecAllRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ExecAllRequest;

            /**
             * Verifies an ExecAllRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExecAllRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExecAllRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ExecAllRequest;

            /**
             * Creates a plain object from an ExecAllRequest message. Also converts values to other types if specified.
             * @param message ExecAllRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ExecAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExecAllRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExecAllRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Entries. */
        interface IEntries {

            /** Entries entries */
            entries?: (immudb.schema.IEntry[]|null);
        }

        /** Represents an Entries. */
        class Entries implements IEntries {

            /**
             * Constructs a new Entries.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IEntries);

            /** Entries entries. */
            public entries: immudb.schema.IEntry[];

            /**
             * Creates a new Entries instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entries instance
             */
            public static create(properties?: immudb.schema.IEntries): immudb.schema.Entries;

            /**
             * Encodes the specified Entries message. Does not implicitly {@link immudb.schema.Entries.verify|verify} messages.
             * @param message Entries message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IEntries, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entries message, length delimited. Does not implicitly {@link immudb.schema.Entries.verify|verify} messages.
             * @param message Entries message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IEntries, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entries message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entries
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Entries;

            /**
             * Decodes an Entries message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entries
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Entries;

            /**
             * Verifies an Entries message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entries message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entries
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Entries;

            /**
             * Creates a plain object from an Entries message. Also converts values to other types if specified.
             * @param message Entries
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Entries, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entries to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entries
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ZEntry. */
        interface IZEntry {

            /** ZEntry set */
            set?: (Uint8Array|null);

            /** ZEntry key */
            key?: (Uint8Array|null);

            /** ZEntry entry */
            entry?: (immudb.schema.IEntry|null);

            /** ZEntry score */
            score?: (number|null);

            /** ZEntry atTx */
            atTx?: (Long|null);
        }

        /** Represents a ZEntry. */
        class ZEntry implements IZEntry {

            /**
             * Constructs a new ZEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IZEntry);

            /** ZEntry set. */
            public set: Uint8Array;

            /** ZEntry key. */
            public key: Uint8Array;

            /** ZEntry entry. */
            public entry?: (immudb.schema.IEntry|null);

            /** ZEntry score. */
            public score: number;

            /** ZEntry atTx. */
            public atTx: Long;

            /**
             * Creates a new ZEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ZEntry instance
             */
            public static create(properties?: immudb.schema.IZEntry): immudb.schema.ZEntry;

            /**
             * Encodes the specified ZEntry message. Does not implicitly {@link immudb.schema.ZEntry.verify|verify} messages.
             * @param message ZEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IZEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ZEntry message, length delimited. Does not implicitly {@link immudb.schema.ZEntry.verify|verify} messages.
             * @param message ZEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IZEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ZEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ZEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ZEntry;

            /**
             * Decodes a ZEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ZEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ZEntry;

            /**
             * Verifies a ZEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ZEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ZEntry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ZEntry;

            /**
             * Creates a plain object from a ZEntry message. Also converts values to other types if specified.
             * @param message ZEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ZEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ZEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ZEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ZEntries. */
        interface IZEntries {

            /** ZEntries entries */
            entries?: (immudb.schema.IZEntry[]|null);
        }

        /** Represents a ZEntries. */
        class ZEntries implements IZEntries {

            /**
             * Constructs a new ZEntries.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IZEntries);

            /** ZEntries entries. */
            public entries: immudb.schema.IZEntry[];

            /**
             * Creates a new ZEntries instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ZEntries instance
             */
            public static create(properties?: immudb.schema.IZEntries): immudb.schema.ZEntries;

            /**
             * Encodes the specified ZEntries message. Does not implicitly {@link immudb.schema.ZEntries.verify|verify} messages.
             * @param message ZEntries message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IZEntries, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ZEntries message, length delimited. Does not implicitly {@link immudb.schema.ZEntries.verify|verify} messages.
             * @param message ZEntries message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IZEntries, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ZEntries message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ZEntries
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ZEntries;

            /**
             * Decodes a ZEntries message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ZEntries
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ZEntries;

            /**
             * Verifies a ZEntries message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ZEntries message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ZEntries
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ZEntries;

            /**
             * Creates a plain object from a ZEntries message. Also converts values to other types if specified.
             * @param message ZEntries
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ZEntries, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ZEntries to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ZEntries
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScanRequest. */
        interface IScanRequest {

            /** ScanRequest seekKey */
            seekKey?: (Uint8Array|null);

            /** ScanRequest endKey */
            endKey?: (Uint8Array|null);

            /** ScanRequest prefix */
            prefix?: (Uint8Array|null);

            /** ScanRequest desc */
            desc?: (boolean|null);

            /** ScanRequest limit */
            limit?: (Long|null);

            /** ScanRequest sinceTx */
            sinceTx?: (Long|null);

            /** ScanRequest noWait */
            noWait?: (boolean|null);

            /** ScanRequest inclusiveSeek */
            inclusiveSeek?: (boolean|null);

            /** ScanRequest inclusiveEnd */
            inclusiveEnd?: (boolean|null);
        }

        /** Represents a ScanRequest. */
        class ScanRequest implements IScanRequest {

            /**
             * Constructs a new ScanRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IScanRequest);

            /** ScanRequest seekKey. */
            public seekKey: Uint8Array;

            /** ScanRequest endKey. */
            public endKey: Uint8Array;

            /** ScanRequest prefix. */
            public prefix: Uint8Array;

            /** ScanRequest desc. */
            public desc: boolean;

            /** ScanRequest limit. */
            public limit: Long;

            /** ScanRequest sinceTx. */
            public sinceTx: Long;

            /** ScanRequest noWait. */
            public noWait: boolean;

            /** ScanRequest inclusiveSeek. */
            public inclusiveSeek: boolean;

            /** ScanRequest inclusiveEnd. */
            public inclusiveEnd: boolean;

            /**
             * Creates a new ScanRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScanRequest instance
             */
            public static create(properties?: immudb.schema.IScanRequest): immudb.schema.ScanRequest;

            /**
             * Encodes the specified ScanRequest message. Does not implicitly {@link immudb.schema.ScanRequest.verify|verify} messages.
             * @param message ScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScanRequest message, length delimited. Does not implicitly {@link immudb.schema.ScanRequest.verify|verify} messages.
             * @param message ScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScanRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ScanRequest;

            /**
             * Decodes a ScanRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ScanRequest;

            /**
             * Verifies a ScanRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScanRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScanRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ScanRequest;

            /**
             * Creates a plain object from a ScanRequest message. Also converts values to other types if specified.
             * @param message ScanRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScanRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScanRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KeyPrefix. */
        interface IKeyPrefix {

            /** KeyPrefix prefix */
            prefix?: (Uint8Array|null);
        }

        /** Represents a KeyPrefix. */
        class KeyPrefix implements IKeyPrefix {

            /**
             * Constructs a new KeyPrefix.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKeyPrefix);

            /** KeyPrefix prefix. */
            public prefix: Uint8Array;

            /**
             * Creates a new KeyPrefix instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyPrefix instance
             */
            public static create(properties?: immudb.schema.IKeyPrefix): immudb.schema.KeyPrefix;

            /**
             * Encodes the specified KeyPrefix message. Does not implicitly {@link immudb.schema.KeyPrefix.verify|verify} messages.
             * @param message KeyPrefix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKeyPrefix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyPrefix message, length delimited. Does not implicitly {@link immudb.schema.KeyPrefix.verify|verify} messages.
             * @param message KeyPrefix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKeyPrefix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyPrefix message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyPrefix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.KeyPrefix;

            /**
             * Decodes a KeyPrefix message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyPrefix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.KeyPrefix;

            /**
             * Verifies a KeyPrefix message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyPrefix message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyPrefix
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.KeyPrefix;

            /**
             * Creates a plain object from a KeyPrefix message. Also converts values to other types if specified.
             * @param message KeyPrefix
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.KeyPrefix, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyPrefix to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeyPrefix
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EntryCount. */
        interface IEntryCount {

            /** EntryCount count */
            count?: (Long|null);
        }

        /** Represents an EntryCount. */
        class EntryCount implements IEntryCount {

            /**
             * Constructs a new EntryCount.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IEntryCount);

            /** EntryCount count. */
            public count: Long;

            /**
             * Creates a new EntryCount instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntryCount instance
             */
            public static create(properties?: immudb.schema.IEntryCount): immudb.schema.EntryCount;

            /**
             * Encodes the specified EntryCount message. Does not implicitly {@link immudb.schema.EntryCount.verify|verify} messages.
             * @param message EntryCount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IEntryCount, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntryCount message, length delimited. Does not implicitly {@link immudb.schema.EntryCount.verify|verify} messages.
             * @param message EntryCount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IEntryCount, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntryCount message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntryCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.EntryCount;

            /**
             * Decodes an EntryCount message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntryCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.EntryCount;

            /**
             * Verifies an EntryCount message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntryCount message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntryCount
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.EntryCount;

            /**
             * Creates a plain object from an EntryCount message. Also converts values to other types if specified.
             * @param message EntryCount
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.EntryCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntryCount to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EntryCount
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Signature. */
        interface ISignature {

            /** Signature publicKey */
            publicKey?: (Uint8Array|null);

            /** Signature signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Signature. */
        class Signature implements ISignature {

            /**
             * Constructs a new Signature.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISignature);

            /** Signature publicKey. */
            public publicKey: Uint8Array;

            /** Signature signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(properties?: immudb.schema.ISignature): immudb.schema.Signature;

            /**
             * Encodes the specified Signature message. Does not implicitly {@link immudb.schema.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link immudb.schema.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Signature;

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Signature;

            /**
             * Verifies a Signature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signature
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Signature;

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Signature
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxHeader. */
        interface ITxHeader {

            /** TxHeader id */
            id?: (Long|null);

            /** TxHeader prevAlh */
            prevAlh?: (Uint8Array|null);

            /** TxHeader ts */
            ts?: (Long|null);

            /** TxHeader nentries */
            nentries?: (number|null);

            /** TxHeader eH */
            eH?: (Uint8Array|null);

            /** TxHeader blTxId */
            blTxId?: (Long|null);

            /** TxHeader blRoot */
            blRoot?: (Uint8Array|null);

            /** TxHeader version */
            version?: (number|null);

            /** TxHeader metadata */
            metadata?: (immudb.schema.ITxMetadata|null);
        }

        /** Represents a TxHeader. */
        class TxHeader implements ITxHeader {

            /**
             * Constructs a new TxHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxHeader);

            /** TxHeader id. */
            public id: Long;

            /** TxHeader prevAlh. */
            public prevAlh: Uint8Array;

            /** TxHeader ts. */
            public ts: Long;

            /** TxHeader nentries. */
            public nentries: number;

            /** TxHeader eH. */
            public eH: Uint8Array;

            /** TxHeader blTxId. */
            public blTxId: Long;

            /** TxHeader blRoot. */
            public blRoot: Uint8Array;

            /** TxHeader version. */
            public version: number;

            /** TxHeader metadata. */
            public metadata?: (immudb.schema.ITxMetadata|null);

            /**
             * Creates a new TxHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxHeader instance
             */
            public static create(properties?: immudb.schema.ITxHeader): immudb.schema.TxHeader;

            /**
             * Encodes the specified TxHeader message. Does not implicitly {@link immudb.schema.TxHeader.verify|verify} messages.
             * @param message TxHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxHeader message, length delimited. Does not implicitly {@link immudb.schema.TxHeader.verify|verify} messages.
             * @param message TxHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxHeader;

            /**
             * Decodes a TxHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxHeader;

            /**
             * Verifies a TxHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxHeader
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxHeader;

            /**
             * Creates a plain object from a TxHeader message. Also converts values to other types if specified.
             * @param message TxHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxHeader
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxMetadata. */
        interface ITxMetadata {
        }

        /** Represents a TxMetadata. */
        class TxMetadata implements ITxMetadata {

            /**
             * Constructs a new TxMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxMetadata);

            /**
             * Creates a new TxMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxMetadata instance
             */
            public static create(properties?: immudb.schema.ITxMetadata): immudb.schema.TxMetadata;

            /**
             * Encodes the specified TxMetadata message. Does not implicitly {@link immudb.schema.TxMetadata.verify|verify} messages.
             * @param message TxMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxMetadata message, length delimited. Does not implicitly {@link immudb.schema.TxMetadata.verify|verify} messages.
             * @param message TxMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxMetadata;

            /**
             * Decodes a TxMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxMetadata;

            /**
             * Verifies a TxMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxMetadata
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxMetadata;

            /**
             * Creates a plain object from a TxMetadata message. Also converts values to other types if specified.
             * @param message TxMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LinearProof. */
        interface ILinearProof {

            /** LinearProof sourceTxId */
            sourceTxId?: (Long|null);

            /** LinearProof TargetTxId */
            TargetTxId?: (Long|null);

            /** LinearProof terms */
            terms?: (Uint8Array[]|null);
        }

        /** Represents a LinearProof. */
        class LinearProof implements ILinearProof {

            /**
             * Constructs a new LinearProof.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ILinearProof);

            /** LinearProof sourceTxId. */
            public sourceTxId: Long;

            /** LinearProof TargetTxId. */
            public TargetTxId: Long;

            /** LinearProof terms. */
            public terms: Uint8Array[];

            /**
             * Creates a new LinearProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LinearProof instance
             */
            public static create(properties?: immudb.schema.ILinearProof): immudb.schema.LinearProof;

            /**
             * Encodes the specified LinearProof message. Does not implicitly {@link immudb.schema.LinearProof.verify|verify} messages.
             * @param message LinearProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ILinearProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LinearProof message, length delimited. Does not implicitly {@link immudb.schema.LinearProof.verify|verify} messages.
             * @param message LinearProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ILinearProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LinearProof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LinearProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.LinearProof;

            /**
             * Decodes a LinearProof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LinearProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.LinearProof;

            /**
             * Verifies a LinearProof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LinearProof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LinearProof
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.LinearProof;

            /**
             * Creates a plain object from a LinearProof message. Also converts values to other types if specified.
             * @param message LinearProof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.LinearProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LinearProof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LinearProof
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DualProof. */
        interface IDualProof {

            /** DualProof sourceTxHeader */
            sourceTxHeader?: (immudb.schema.ITxHeader|null);

            /** DualProof targetTxHeader */
            targetTxHeader?: (immudb.schema.ITxHeader|null);

            /** DualProof inclusionProof */
            inclusionProof?: (Uint8Array[]|null);

            /** DualProof consistencyProof */
            consistencyProof?: (Uint8Array[]|null);

            /** DualProof targetBlTxAlh */
            targetBlTxAlh?: (Uint8Array|null);

            /** DualProof lastInclusionProof */
            lastInclusionProof?: (Uint8Array[]|null);

            /** DualProof linearProof */
            linearProof?: (immudb.schema.ILinearProof|null);
        }

        /** Represents a DualProof. */
        class DualProof implements IDualProof {

            /**
             * Constructs a new DualProof.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDualProof);

            /** DualProof sourceTxHeader. */
            public sourceTxHeader?: (immudb.schema.ITxHeader|null);

            /** DualProof targetTxHeader. */
            public targetTxHeader?: (immudb.schema.ITxHeader|null);

            /** DualProof inclusionProof. */
            public inclusionProof: Uint8Array[];

            /** DualProof consistencyProof. */
            public consistencyProof: Uint8Array[];

            /** DualProof targetBlTxAlh. */
            public targetBlTxAlh: Uint8Array;

            /** DualProof lastInclusionProof. */
            public lastInclusionProof: Uint8Array[];

            /** DualProof linearProof. */
            public linearProof?: (immudb.schema.ILinearProof|null);

            /**
             * Creates a new DualProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DualProof instance
             */
            public static create(properties?: immudb.schema.IDualProof): immudb.schema.DualProof;

            /**
             * Encodes the specified DualProof message. Does not implicitly {@link immudb.schema.DualProof.verify|verify} messages.
             * @param message DualProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDualProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DualProof message, length delimited. Does not implicitly {@link immudb.schema.DualProof.verify|verify} messages.
             * @param message DualProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDualProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DualProof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DualProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DualProof;

            /**
             * Decodes a DualProof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DualProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DualProof;

            /**
             * Verifies a DualProof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DualProof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DualProof
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DualProof;

            /**
             * Creates a plain object from a DualProof message. Also converts values to other types if specified.
             * @param message DualProof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DualProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DualProof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DualProof
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Tx. */
        interface ITx {

            /** Tx header */
            header?: (immudb.schema.ITxHeader|null);

            /** Tx entries */
            entries?: (immudb.schema.ITxEntry[]|null);

            /** Tx kvEntries */
            kvEntries?: (immudb.schema.IEntry[]|null);

            /** Tx zEntries */
            zEntries?: (immudb.schema.IZEntry[]|null);
        }

        /** Represents a Tx. */
        class Tx implements ITx {

            /**
             * Constructs a new Tx.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITx);

            /** Tx header. */
            public header?: (immudb.schema.ITxHeader|null);

            /** Tx entries. */
            public entries: immudb.schema.ITxEntry[];

            /** Tx kvEntries. */
            public kvEntries: immudb.schema.IEntry[];

            /** Tx zEntries. */
            public zEntries: immudb.schema.IZEntry[];

            /**
             * Creates a new Tx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tx instance
             */
            public static create(properties?: immudb.schema.ITx): immudb.schema.Tx;

            /**
             * Encodes the specified Tx message. Does not implicitly {@link immudb.schema.Tx.verify|verify} messages.
             * @param message Tx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tx message, length delimited. Does not implicitly {@link immudb.schema.Tx.verify|verify} messages.
             * @param message Tx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Tx;

            /**
             * Decodes a Tx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Tx;

            /**
             * Verifies a Tx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tx
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Tx;

            /**
             * Creates a plain object from a Tx message. Also converts values to other types if specified.
             * @param message Tx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Tx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Tx
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxEntry. */
        interface ITxEntry {

            /** TxEntry key */
            key?: (Uint8Array|null);

            /** TxEntry hValue */
            hValue?: (Uint8Array|null);

            /** TxEntry vLen */
            vLen?: (number|null);

            /** TxEntry metadata */
            metadata?: (immudb.schema.IKVMetadata|null);

            /** TxEntry value */
            value?: (Uint8Array|null);
        }

        /** Represents a TxEntry. */
        class TxEntry implements ITxEntry {

            /**
             * Constructs a new TxEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxEntry);

            /** TxEntry key. */
            public key: Uint8Array;

            /** TxEntry hValue. */
            public hValue: Uint8Array;

            /** TxEntry vLen. */
            public vLen: number;

            /** TxEntry metadata. */
            public metadata?: (immudb.schema.IKVMetadata|null);

            /** TxEntry value. */
            public value: Uint8Array;

            /**
             * Creates a new TxEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxEntry instance
             */
            public static create(properties?: immudb.schema.ITxEntry): immudb.schema.TxEntry;

            /**
             * Encodes the specified TxEntry message. Does not implicitly {@link immudb.schema.TxEntry.verify|verify} messages.
             * @param message TxEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxEntry message, length delimited. Does not implicitly {@link immudb.schema.TxEntry.verify|verify} messages.
             * @param message TxEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxEntry;

            /**
             * Decodes a TxEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxEntry;

            /**
             * Verifies a TxEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxEntry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxEntry;

            /**
             * Creates a plain object from a TxEntry message. Also converts values to other types if specified.
             * @param message TxEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KVMetadata. */
        interface IKVMetadata {

            /** KVMetadata deleted */
            deleted?: (boolean|null);

            /** KVMetadata expiration */
            expiration?: (immudb.schema.IExpiration|null);

            /** KVMetadata nonIndexable */
            nonIndexable?: (boolean|null);
        }

        /** Represents a KVMetadata. */
        class KVMetadata implements IKVMetadata {

            /**
             * Constructs a new KVMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKVMetadata);

            /** KVMetadata deleted. */
            public deleted: boolean;

            /** KVMetadata expiration. */
            public expiration?: (immudb.schema.IExpiration|null);

            /** KVMetadata nonIndexable. */
            public nonIndexable: boolean;

            /**
             * Creates a new KVMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KVMetadata instance
             */
            public static create(properties?: immudb.schema.IKVMetadata): immudb.schema.KVMetadata;

            /**
             * Encodes the specified KVMetadata message. Does not implicitly {@link immudb.schema.KVMetadata.verify|verify} messages.
             * @param message KVMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKVMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KVMetadata message, length delimited. Does not implicitly {@link immudb.schema.KVMetadata.verify|verify} messages.
             * @param message KVMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKVMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KVMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KVMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.KVMetadata;

            /**
             * Decodes a KVMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KVMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.KVMetadata;

            /**
             * Verifies a KVMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KVMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KVMetadata
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.KVMetadata;

            /**
             * Creates a plain object from a KVMetadata message. Also converts values to other types if specified.
             * @param message KVMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.KVMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KVMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KVMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Expiration. */
        interface IExpiration {

            /** Expiration expiresAt */
            expiresAt?: (Long|null);
        }

        /** Represents an Expiration. */
        class Expiration implements IExpiration {

            /**
             * Constructs a new Expiration.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IExpiration);

            /** Expiration expiresAt. */
            public expiresAt: Long;

            /**
             * Creates a new Expiration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expiration instance
             */
            public static create(properties?: immudb.schema.IExpiration): immudb.schema.Expiration;

            /**
             * Encodes the specified Expiration message. Does not implicitly {@link immudb.schema.Expiration.verify|verify} messages.
             * @param message Expiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expiration message, length delimited. Does not implicitly {@link immudb.schema.Expiration.verify|verify} messages.
             * @param message Expiration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expiration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Expiration;

            /**
             * Decodes an Expiration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expiration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Expiration;

            /**
             * Verifies an Expiration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expiration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expiration
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Expiration;

            /**
             * Creates a plain object from an Expiration message. Also converts values to other types if specified.
             * @param message Expiration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Expiration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expiration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expiration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableTx. */
        interface IVerifiableTx {

            /** VerifiableTx tx */
            tx?: (immudb.schema.ITx|null);

            /** VerifiableTx dualProof */
            dualProof?: (immudb.schema.IDualProof|null);

            /** VerifiableTx signature */
            signature?: (immudb.schema.ISignature|null);
        }

        /** Represents a VerifiableTx. */
        class VerifiableTx implements IVerifiableTx {

            /**
             * Constructs a new VerifiableTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableTx);

            /** VerifiableTx tx. */
            public tx?: (immudb.schema.ITx|null);

            /** VerifiableTx dualProof. */
            public dualProof?: (immudb.schema.IDualProof|null);

            /** VerifiableTx signature. */
            public signature?: (immudb.schema.ISignature|null);

            /**
             * Creates a new VerifiableTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableTx instance
             */
            public static create(properties?: immudb.schema.IVerifiableTx): immudb.schema.VerifiableTx;

            /**
             * Encodes the specified VerifiableTx message. Does not implicitly {@link immudb.schema.VerifiableTx.verify|verify} messages.
             * @param message VerifiableTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableTx message, length delimited. Does not implicitly {@link immudb.schema.VerifiableTx.verify|verify} messages.
             * @param message VerifiableTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableTx;

            /**
             * Decodes a VerifiableTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableTx;

            /**
             * Verifies a VerifiableTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableTx
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableTx;

            /**
             * Creates a plain object from a VerifiableTx message. Also converts values to other types if specified.
             * @param message VerifiableTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableTx
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableEntry. */
        interface IVerifiableEntry {

            /** VerifiableEntry entry */
            entry?: (immudb.schema.IEntry|null);

            /** VerifiableEntry verifiableTx */
            verifiableTx?: (immudb.schema.IVerifiableTx|null);

            /** VerifiableEntry inclusionProof */
            inclusionProof?: (immudb.schema.IInclusionProof|null);
        }

        /** Represents a VerifiableEntry. */
        class VerifiableEntry implements IVerifiableEntry {

            /**
             * Constructs a new VerifiableEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableEntry);

            /** VerifiableEntry entry. */
            public entry?: (immudb.schema.IEntry|null);

            /** VerifiableEntry verifiableTx. */
            public verifiableTx?: (immudb.schema.IVerifiableTx|null);

            /** VerifiableEntry inclusionProof. */
            public inclusionProof?: (immudb.schema.IInclusionProof|null);

            /**
             * Creates a new VerifiableEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableEntry instance
             */
            public static create(properties?: immudb.schema.IVerifiableEntry): immudb.schema.VerifiableEntry;

            /**
             * Encodes the specified VerifiableEntry message. Does not implicitly {@link immudb.schema.VerifiableEntry.verify|verify} messages.
             * @param message VerifiableEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableEntry message, length delimited. Does not implicitly {@link immudb.schema.VerifiableEntry.verify|verify} messages.
             * @param message VerifiableEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableEntry;

            /**
             * Decodes a VerifiableEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableEntry;

            /**
             * Verifies a VerifiableEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableEntry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableEntry;

            /**
             * Creates a plain object from a VerifiableEntry message. Also converts values to other types if specified.
             * @param message VerifiableEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InclusionProof. */
        interface IInclusionProof {

            /** InclusionProof leaf */
            leaf?: (number|null);

            /** InclusionProof width */
            width?: (number|null);

            /** InclusionProof terms */
            terms?: (Uint8Array[]|null);
        }

        /** Represents an InclusionProof. */
        class InclusionProof implements IInclusionProof {

            /**
             * Constructs a new InclusionProof.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IInclusionProof);

            /** InclusionProof leaf. */
            public leaf: number;

            /** InclusionProof width. */
            public width: number;

            /** InclusionProof terms. */
            public terms: Uint8Array[];

            /**
             * Creates a new InclusionProof instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InclusionProof instance
             */
            public static create(properties?: immudb.schema.IInclusionProof): immudb.schema.InclusionProof;

            /**
             * Encodes the specified InclusionProof message. Does not implicitly {@link immudb.schema.InclusionProof.verify|verify} messages.
             * @param message InclusionProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IInclusionProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InclusionProof message, length delimited. Does not implicitly {@link immudb.schema.InclusionProof.verify|verify} messages.
             * @param message InclusionProof message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IInclusionProof, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InclusionProof message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InclusionProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.InclusionProof;

            /**
             * Decodes an InclusionProof message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InclusionProof
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.InclusionProof;

            /**
             * Verifies an InclusionProof message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InclusionProof message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InclusionProof
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.InclusionProof;

            /**
             * Creates a plain object from an InclusionProof message. Also converts values to other types if specified.
             * @param message InclusionProof
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.InclusionProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InclusionProof to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InclusionProof
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetRequest. */
        interface ISetRequest {

            /** SetRequest KVs */
            KVs?: (immudb.schema.IKeyValue[]|null);

            /** SetRequest noWait */
            noWait?: (boolean|null);

            /** SetRequest preconditions */
            preconditions?: (immudb.schema.IPrecondition[]|null);
        }

        /** Represents a SetRequest. */
        class SetRequest implements ISetRequest {

            /**
             * Constructs a new SetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISetRequest);

            /** SetRequest KVs. */
            public KVs: immudb.schema.IKeyValue[];

            /** SetRequest noWait. */
            public noWait: boolean;

            /** SetRequest preconditions. */
            public preconditions: immudb.schema.IPrecondition[];

            /**
             * Creates a new SetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRequest instance
             */
            public static create(properties?: immudb.schema.ISetRequest): immudb.schema.SetRequest;

            /**
             * Encodes the specified SetRequest message. Does not implicitly {@link immudb.schema.SetRequest.verify|verify} messages.
             * @param message SetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link immudb.schema.SetRequest.verify|verify} messages.
             * @param message SetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SetRequest;

            /**
             * Decodes a SetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SetRequest;

            /**
             * Verifies a SetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SetRequest;

            /**
             * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
             * @param message SetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KeyRequest. */
        interface IKeyRequest {

            /** KeyRequest key */
            key?: (Uint8Array|null);

            /** KeyRequest atTx */
            atTx?: (Long|null);

            /** KeyRequest sinceTx */
            sinceTx?: (Long|null);

            /** KeyRequest noWait */
            noWait?: (boolean|null);

            /** KeyRequest atRevision */
            atRevision?: (Long|null);
        }

        /** Represents a KeyRequest. */
        class KeyRequest implements IKeyRequest {

            /**
             * Constructs a new KeyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKeyRequest);

            /** KeyRequest key. */
            public key: Uint8Array;

            /** KeyRequest atTx. */
            public atTx: Long;

            /** KeyRequest sinceTx. */
            public sinceTx: Long;

            /** KeyRequest noWait. */
            public noWait: boolean;

            /** KeyRequest atRevision. */
            public atRevision: Long;

            /**
             * Creates a new KeyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyRequest instance
             */
            public static create(properties?: immudb.schema.IKeyRequest): immudb.schema.KeyRequest;

            /**
             * Encodes the specified KeyRequest message. Does not implicitly {@link immudb.schema.KeyRequest.verify|verify} messages.
             * @param message KeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyRequest message, length delimited. Does not implicitly {@link immudb.schema.KeyRequest.verify|verify} messages.
             * @param message KeyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.KeyRequest;

            /**
             * Decodes a KeyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.KeyRequest;

            /**
             * Verifies a KeyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.KeyRequest;

            /**
             * Creates a plain object from a KeyRequest message. Also converts values to other types if specified.
             * @param message KeyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.KeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeyRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KeyListRequest. */
        interface IKeyListRequest {

            /** KeyListRequest keys */
            keys?: (Uint8Array[]|null);

            /** KeyListRequest sinceTx */
            sinceTx?: (Long|null);
        }

        /** Represents a KeyListRequest. */
        class KeyListRequest implements IKeyListRequest {

            /**
             * Constructs a new KeyListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IKeyListRequest);

            /** KeyListRequest keys. */
            public keys: Uint8Array[];

            /** KeyListRequest sinceTx. */
            public sinceTx: Long;

            /**
             * Creates a new KeyListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyListRequest instance
             */
            public static create(properties?: immudb.schema.IKeyListRequest): immudb.schema.KeyListRequest;

            /**
             * Encodes the specified KeyListRequest message. Does not implicitly {@link immudb.schema.KeyListRequest.verify|verify} messages.
             * @param message KeyListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IKeyListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyListRequest message, length delimited. Does not implicitly {@link immudb.schema.KeyListRequest.verify|verify} messages.
             * @param message KeyListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IKeyListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.KeyListRequest;

            /**
             * Decodes a KeyListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.KeyListRequest;

            /**
             * Verifies a KeyListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyListRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.KeyListRequest;

            /**
             * Creates a plain object from a KeyListRequest message. Also converts values to other types if specified.
             * @param message KeyListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.KeyListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeyListRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteKeysRequest. */
        interface IDeleteKeysRequest {

            /** DeleteKeysRequest keys */
            keys?: (Uint8Array[]|null);

            /** DeleteKeysRequest sinceTx */
            sinceTx?: (Long|null);

            /** DeleteKeysRequest noWait */
            noWait?: (boolean|null);
        }

        /** Represents a DeleteKeysRequest. */
        class DeleteKeysRequest implements IDeleteKeysRequest {

            /**
             * Constructs a new DeleteKeysRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDeleteKeysRequest);

            /** DeleteKeysRequest keys. */
            public keys: Uint8Array[];

            /** DeleteKeysRequest sinceTx. */
            public sinceTx: Long;

            /** DeleteKeysRequest noWait. */
            public noWait: boolean;

            /**
             * Creates a new DeleteKeysRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteKeysRequest instance
             */
            public static create(properties?: immudb.schema.IDeleteKeysRequest): immudb.schema.DeleteKeysRequest;

            /**
             * Encodes the specified DeleteKeysRequest message. Does not implicitly {@link immudb.schema.DeleteKeysRequest.verify|verify} messages.
             * @param message DeleteKeysRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDeleteKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteKeysRequest message, length delimited. Does not implicitly {@link immudb.schema.DeleteKeysRequest.verify|verify} messages.
             * @param message DeleteKeysRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDeleteKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteKeysRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteKeysRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DeleteKeysRequest;

            /**
             * Decodes a DeleteKeysRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteKeysRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DeleteKeysRequest;

            /**
             * Verifies a DeleteKeysRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteKeysRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteKeysRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DeleteKeysRequest;

            /**
             * Creates a plain object from a DeleteKeysRequest message. Also converts values to other types if specified.
             * @param message DeleteKeysRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DeleteKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteKeysRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteKeysRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableSetRequest. */
        interface IVerifiableSetRequest {

            /** VerifiableSetRequest setRequest */
            setRequest?: (immudb.schema.ISetRequest|null);

            /** VerifiableSetRequest proveSinceTx */
            proveSinceTx?: (Long|null);
        }

        /** Represents a VerifiableSetRequest. */
        class VerifiableSetRequest implements IVerifiableSetRequest {

            /**
             * Constructs a new VerifiableSetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableSetRequest);

            /** VerifiableSetRequest setRequest. */
            public setRequest?: (immudb.schema.ISetRequest|null);

            /** VerifiableSetRequest proveSinceTx. */
            public proveSinceTx: Long;

            /**
             * Creates a new VerifiableSetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableSetRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableSetRequest): immudb.schema.VerifiableSetRequest;

            /**
             * Encodes the specified VerifiableSetRequest message. Does not implicitly {@link immudb.schema.VerifiableSetRequest.verify|verify} messages.
             * @param message VerifiableSetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableSetRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableSetRequest.verify|verify} messages.
             * @param message VerifiableSetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableSetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableSetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableSetRequest;

            /**
             * Decodes a VerifiableSetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableSetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableSetRequest;

            /**
             * Verifies a VerifiableSetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableSetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableSetRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableSetRequest;

            /**
             * Creates a plain object from a VerifiableSetRequest message. Also converts values to other types if specified.
             * @param message VerifiableSetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableSetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableSetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableGetRequest. */
        interface IVerifiableGetRequest {

            /** VerifiableGetRequest keyRequest */
            keyRequest?: (immudb.schema.IKeyRequest|null);

            /** VerifiableGetRequest proveSinceTx */
            proveSinceTx?: (Long|null);
        }

        /** Represents a VerifiableGetRequest. */
        class VerifiableGetRequest implements IVerifiableGetRequest {

            /**
             * Constructs a new VerifiableGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableGetRequest);

            /** VerifiableGetRequest keyRequest. */
            public keyRequest?: (immudb.schema.IKeyRequest|null);

            /** VerifiableGetRequest proveSinceTx. */
            public proveSinceTx: Long;

            /**
             * Creates a new VerifiableGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableGetRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableGetRequest): immudb.schema.VerifiableGetRequest;

            /**
             * Encodes the specified VerifiableGetRequest message. Does not implicitly {@link immudb.schema.VerifiableGetRequest.verify|verify} messages.
             * @param message VerifiableGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableGetRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableGetRequest.verify|verify} messages.
             * @param message VerifiableGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableGetRequest;

            /**
             * Decodes a VerifiableGetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableGetRequest;

            /**
             * Verifies a VerifiableGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableGetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableGetRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableGetRequest;

            /**
             * Creates a plain object from a VerifiableGetRequest message. Also converts values to other types if specified.
             * @param message VerifiableGetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableGetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableGetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HealthResponse. */
        interface IHealthResponse {

            /** HealthResponse status */
            status?: (boolean|null);

            /** HealthResponse version */
            version?: (string|null);
        }

        /** Represents a HealthResponse. */
        class HealthResponse implements IHealthResponse {

            /**
             * Constructs a new HealthResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IHealthResponse);

            /** HealthResponse status. */
            public status: boolean;

            /** HealthResponse version. */
            public version: string;

            /**
             * Creates a new HealthResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HealthResponse instance
             */
            public static create(properties?: immudb.schema.IHealthResponse): immudb.schema.HealthResponse;

            /**
             * Encodes the specified HealthResponse message. Does not implicitly {@link immudb.schema.HealthResponse.verify|verify} messages.
             * @param message HealthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HealthResponse message, length delimited. Does not implicitly {@link immudb.schema.HealthResponse.verify|verify} messages.
             * @param message HealthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HealthResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HealthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.HealthResponse;

            /**
             * Decodes a HealthResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HealthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.HealthResponse;

            /**
             * Verifies a HealthResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HealthResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HealthResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.HealthResponse;

            /**
             * Creates a plain object from a HealthResponse message. Also converts values to other types if specified.
             * @param message HealthResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.HealthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HealthResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HealthResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseHealthResponse. */
        interface IDatabaseHealthResponse {

            /** DatabaseHealthResponse pendingRequests */
            pendingRequests?: (number|null);

            /** DatabaseHealthResponse lastRequestCompletedAt */
            lastRequestCompletedAt?: (Long|null);
        }

        /** Represents a DatabaseHealthResponse. */
        class DatabaseHealthResponse implements IDatabaseHealthResponse {

            /**
             * Constructs a new DatabaseHealthResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseHealthResponse);

            /** DatabaseHealthResponse pendingRequests. */
            public pendingRequests: number;

            /** DatabaseHealthResponse lastRequestCompletedAt. */
            public lastRequestCompletedAt: Long;

            /**
             * Creates a new DatabaseHealthResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseHealthResponse instance
             */
            public static create(properties?: immudb.schema.IDatabaseHealthResponse): immudb.schema.DatabaseHealthResponse;

            /**
             * Encodes the specified DatabaseHealthResponse message. Does not implicitly {@link immudb.schema.DatabaseHealthResponse.verify|verify} messages.
             * @param message DatabaseHealthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseHealthResponse message, length delimited. Does not implicitly {@link immudb.schema.DatabaseHealthResponse.verify|verify} messages.
             * @param message DatabaseHealthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseHealthResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseHealthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseHealthResponse;

            /**
             * Decodes a DatabaseHealthResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseHealthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseHealthResponse;

            /**
             * Verifies a DatabaseHealthResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseHealthResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseHealthResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseHealthResponse;

            /**
             * Creates a plain object from a DatabaseHealthResponse message. Also converts values to other types if specified.
             * @param message DatabaseHealthResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseHealthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseHealthResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseHealthResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ImmutableState. */
        interface IImmutableState {

            /** ImmutableState db */
            db?: (string|null);

            /** ImmutableState txId */
            txId?: (Long|null);

            /** ImmutableState txHash */
            txHash?: (Uint8Array|null);

            /** ImmutableState signature */
            signature?: (immudb.schema.ISignature|null);
        }

        /** Represents an ImmutableState. */
        class ImmutableState implements IImmutableState {

            /**
             * Constructs a new ImmutableState.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IImmutableState);

            /** ImmutableState db. */
            public db: string;

            /** ImmutableState txId. */
            public txId: Long;

            /** ImmutableState txHash. */
            public txHash: Uint8Array;

            /** ImmutableState signature. */
            public signature?: (immudb.schema.ISignature|null);

            /**
             * Creates a new ImmutableState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ImmutableState instance
             */
            public static create(properties?: immudb.schema.IImmutableState): immudb.schema.ImmutableState;

            /**
             * Encodes the specified ImmutableState message. Does not implicitly {@link immudb.schema.ImmutableState.verify|verify} messages.
             * @param message ImmutableState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IImmutableState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ImmutableState message, length delimited. Does not implicitly {@link immudb.schema.ImmutableState.verify|verify} messages.
             * @param message ImmutableState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IImmutableState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ImmutableState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ImmutableState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ImmutableState;

            /**
             * Decodes an ImmutableState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ImmutableState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ImmutableState;

            /**
             * Verifies an ImmutableState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ImmutableState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ImmutableState
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ImmutableState;

            /**
             * Creates a plain object from an ImmutableState message. Also converts values to other types if specified.
             * @param message ImmutableState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ImmutableState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ImmutableState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ImmutableState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReferenceRequest. */
        interface IReferenceRequest {

            /** ReferenceRequest key */
            key?: (Uint8Array|null);

            /** ReferenceRequest referencedKey */
            referencedKey?: (Uint8Array|null);

            /** ReferenceRequest atTx */
            atTx?: (Long|null);

            /** ReferenceRequest boundRef */
            boundRef?: (boolean|null);

            /** ReferenceRequest noWait */
            noWait?: (boolean|null);

            /** ReferenceRequest preconditions */
            preconditions?: (immudb.schema.IPrecondition[]|null);
        }

        /** Represents a ReferenceRequest. */
        class ReferenceRequest implements IReferenceRequest {

            /**
             * Constructs a new ReferenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IReferenceRequest);

            /** ReferenceRequest key. */
            public key: Uint8Array;

            /** ReferenceRequest referencedKey. */
            public referencedKey: Uint8Array;

            /** ReferenceRequest atTx. */
            public atTx: Long;

            /** ReferenceRequest boundRef. */
            public boundRef: boolean;

            /** ReferenceRequest noWait. */
            public noWait: boolean;

            /** ReferenceRequest preconditions. */
            public preconditions: immudb.schema.IPrecondition[];

            /**
             * Creates a new ReferenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReferenceRequest instance
             */
            public static create(properties?: immudb.schema.IReferenceRequest): immudb.schema.ReferenceRequest;

            /**
             * Encodes the specified ReferenceRequest message. Does not implicitly {@link immudb.schema.ReferenceRequest.verify|verify} messages.
             * @param message ReferenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IReferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReferenceRequest message, length delimited. Does not implicitly {@link immudb.schema.ReferenceRequest.verify|verify} messages.
             * @param message ReferenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IReferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReferenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReferenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ReferenceRequest;

            /**
             * Decodes a ReferenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReferenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ReferenceRequest;

            /**
             * Verifies a ReferenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReferenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReferenceRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ReferenceRequest;

            /**
             * Creates a plain object from a ReferenceRequest message. Also converts values to other types if specified.
             * @param message ReferenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ReferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReferenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReferenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableReferenceRequest. */
        interface IVerifiableReferenceRequest {

            /** VerifiableReferenceRequest referenceRequest */
            referenceRequest?: (immudb.schema.IReferenceRequest|null);

            /** VerifiableReferenceRequest proveSinceTx */
            proveSinceTx?: (Long|null);
        }

        /** Represents a VerifiableReferenceRequest. */
        class VerifiableReferenceRequest implements IVerifiableReferenceRequest {

            /**
             * Constructs a new VerifiableReferenceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableReferenceRequest);

            /** VerifiableReferenceRequest referenceRequest. */
            public referenceRequest?: (immudb.schema.IReferenceRequest|null);

            /** VerifiableReferenceRequest proveSinceTx. */
            public proveSinceTx: Long;

            /**
             * Creates a new VerifiableReferenceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableReferenceRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableReferenceRequest): immudb.schema.VerifiableReferenceRequest;

            /**
             * Encodes the specified VerifiableReferenceRequest message. Does not implicitly {@link immudb.schema.VerifiableReferenceRequest.verify|verify} messages.
             * @param message VerifiableReferenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableReferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableReferenceRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableReferenceRequest.verify|verify} messages.
             * @param message VerifiableReferenceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableReferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableReferenceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableReferenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableReferenceRequest;

            /**
             * Decodes a VerifiableReferenceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableReferenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableReferenceRequest;

            /**
             * Verifies a VerifiableReferenceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableReferenceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableReferenceRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableReferenceRequest;

            /**
             * Creates a plain object from a VerifiableReferenceRequest message. Also converts values to other types if specified.
             * @param message VerifiableReferenceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableReferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableReferenceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableReferenceRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ZAddRequest. */
        interface IZAddRequest {

            /** ZAddRequest set */
            set?: (Uint8Array|null);

            /** ZAddRequest score */
            score?: (number|null);

            /** ZAddRequest key */
            key?: (Uint8Array|null);

            /** ZAddRequest atTx */
            atTx?: (Long|null);

            /** ZAddRequest boundRef */
            boundRef?: (boolean|null);

            /** ZAddRequest noWait */
            noWait?: (boolean|null);
        }

        /** Represents a ZAddRequest. */
        class ZAddRequest implements IZAddRequest {

            /**
             * Constructs a new ZAddRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IZAddRequest);

            /** ZAddRequest set. */
            public set: Uint8Array;

            /** ZAddRequest score. */
            public score: number;

            /** ZAddRequest key. */
            public key: Uint8Array;

            /** ZAddRequest atTx. */
            public atTx: Long;

            /** ZAddRequest boundRef. */
            public boundRef: boolean;

            /** ZAddRequest noWait. */
            public noWait: boolean;

            /**
             * Creates a new ZAddRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ZAddRequest instance
             */
            public static create(properties?: immudb.schema.IZAddRequest): immudb.schema.ZAddRequest;

            /**
             * Encodes the specified ZAddRequest message. Does not implicitly {@link immudb.schema.ZAddRequest.verify|verify} messages.
             * @param message ZAddRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IZAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ZAddRequest message, length delimited. Does not implicitly {@link immudb.schema.ZAddRequest.verify|verify} messages.
             * @param message ZAddRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IZAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ZAddRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ZAddRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ZAddRequest;

            /**
             * Decodes a ZAddRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ZAddRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ZAddRequest;

            /**
             * Verifies a ZAddRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ZAddRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ZAddRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ZAddRequest;

            /**
             * Creates a plain object from a ZAddRequest message. Also converts values to other types if specified.
             * @param message ZAddRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ZAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ZAddRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ZAddRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Score. */
        interface IScore {

            /** Score score */
            score?: (number|null);
        }

        /** Represents a Score. */
        class Score implements IScore {

            /**
             * Constructs a new Score.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IScore);

            /** Score score. */
            public score: number;

            /**
             * Creates a new Score instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Score instance
             */
            public static create(properties?: immudb.schema.IScore): immudb.schema.Score;

            /**
             * Encodes the specified Score message. Does not implicitly {@link immudb.schema.Score.verify|verify} messages.
             * @param message Score message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Score message, length delimited. Does not implicitly {@link immudb.schema.Score.verify|verify} messages.
             * @param message Score message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IScore, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Score message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Score
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Score;

            /**
             * Decodes a Score message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Score
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Score;

            /**
             * Verifies a Score message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Score message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Score
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Score;

            /**
             * Creates a plain object from a Score message. Also converts values to other types if specified.
             * @param message Score
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Score, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Score to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Score
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ZScanRequest. */
        interface IZScanRequest {

            /** ZScanRequest set */
            set?: (Uint8Array|null);

            /** ZScanRequest seekKey */
            seekKey?: (Uint8Array|null);

            /** ZScanRequest seekScore */
            seekScore?: (number|null);

            /** ZScanRequest seekAtTx */
            seekAtTx?: (Long|null);

            /** ZScanRequest inclusiveSeek */
            inclusiveSeek?: (boolean|null);

            /** ZScanRequest limit */
            limit?: (Long|null);

            /** ZScanRequest desc */
            desc?: (boolean|null);

            /** ZScanRequest minScore */
            minScore?: (immudb.schema.IScore|null);

            /** ZScanRequest maxScore */
            maxScore?: (immudb.schema.IScore|null);

            /** ZScanRequest sinceTx */
            sinceTx?: (Long|null);

            /** ZScanRequest noWait */
            noWait?: (boolean|null);
        }

        /** Represents a ZScanRequest. */
        class ZScanRequest implements IZScanRequest {

            /**
             * Constructs a new ZScanRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IZScanRequest);

            /** ZScanRequest set. */
            public set: Uint8Array;

            /** ZScanRequest seekKey. */
            public seekKey: Uint8Array;

            /** ZScanRequest seekScore. */
            public seekScore: number;

            /** ZScanRequest seekAtTx. */
            public seekAtTx: Long;

            /** ZScanRequest inclusiveSeek. */
            public inclusiveSeek: boolean;

            /** ZScanRequest limit. */
            public limit: Long;

            /** ZScanRequest desc. */
            public desc: boolean;

            /** ZScanRequest minScore. */
            public minScore?: (immudb.schema.IScore|null);

            /** ZScanRequest maxScore. */
            public maxScore?: (immudb.schema.IScore|null);

            /** ZScanRequest sinceTx. */
            public sinceTx: Long;

            /** ZScanRequest noWait. */
            public noWait: boolean;

            /**
             * Creates a new ZScanRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ZScanRequest instance
             */
            public static create(properties?: immudb.schema.IZScanRequest): immudb.schema.ZScanRequest;

            /**
             * Encodes the specified ZScanRequest message. Does not implicitly {@link immudb.schema.ZScanRequest.verify|verify} messages.
             * @param message ZScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IZScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ZScanRequest message, length delimited. Does not implicitly {@link immudb.schema.ZScanRequest.verify|verify} messages.
             * @param message ZScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IZScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ZScanRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ZScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ZScanRequest;

            /**
             * Decodes a ZScanRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ZScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ZScanRequest;

            /**
             * Verifies a ZScanRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ZScanRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ZScanRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ZScanRequest;

            /**
             * Creates a plain object from a ZScanRequest message. Also converts values to other types if specified.
             * @param message ZScanRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ZScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ZScanRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ZScanRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HistoryRequest. */
        interface IHistoryRequest {

            /** HistoryRequest key */
            key?: (Uint8Array|null);

            /** HistoryRequest offset */
            offset?: (Long|null);

            /** HistoryRequest limit */
            limit?: (number|null);

            /** HistoryRequest desc */
            desc?: (boolean|null);

            /** HistoryRequest sinceTx */
            sinceTx?: (Long|null);
        }

        /** Represents a HistoryRequest. */
        class HistoryRequest implements IHistoryRequest {

            /**
             * Constructs a new HistoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IHistoryRequest);

            /** HistoryRequest key. */
            public key: Uint8Array;

            /** HistoryRequest offset. */
            public offset: Long;

            /** HistoryRequest limit. */
            public limit: number;

            /** HistoryRequest desc. */
            public desc: boolean;

            /** HistoryRequest sinceTx. */
            public sinceTx: Long;

            /**
             * Creates a new HistoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HistoryRequest instance
             */
            public static create(properties?: immudb.schema.IHistoryRequest): immudb.schema.HistoryRequest;

            /**
             * Encodes the specified HistoryRequest message. Does not implicitly {@link immudb.schema.HistoryRequest.verify|verify} messages.
             * @param message HistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HistoryRequest message, length delimited. Does not implicitly {@link immudb.schema.HistoryRequest.verify|verify} messages.
             * @param message HistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HistoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.HistoryRequest;

            /**
             * Decodes a HistoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.HistoryRequest;

            /**
             * Verifies a HistoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HistoryRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.HistoryRequest;

            /**
             * Creates a plain object from a HistoryRequest message. Also converts values to other types if specified.
             * @param message HistoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.HistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HistoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HistoryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableZAddRequest. */
        interface IVerifiableZAddRequest {

            /** VerifiableZAddRequest zAddRequest */
            zAddRequest?: (immudb.schema.IZAddRequest|null);

            /** VerifiableZAddRequest proveSinceTx */
            proveSinceTx?: (Long|null);
        }

        /** Represents a VerifiableZAddRequest. */
        class VerifiableZAddRequest implements IVerifiableZAddRequest {

            /**
             * Constructs a new VerifiableZAddRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableZAddRequest);

            /** VerifiableZAddRequest zAddRequest. */
            public zAddRequest?: (immudb.schema.IZAddRequest|null);

            /** VerifiableZAddRequest proveSinceTx. */
            public proveSinceTx: Long;

            /**
             * Creates a new VerifiableZAddRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableZAddRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableZAddRequest): immudb.schema.VerifiableZAddRequest;

            /**
             * Encodes the specified VerifiableZAddRequest message. Does not implicitly {@link immudb.schema.VerifiableZAddRequest.verify|verify} messages.
             * @param message VerifiableZAddRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableZAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableZAddRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableZAddRequest.verify|verify} messages.
             * @param message VerifiableZAddRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableZAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableZAddRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableZAddRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableZAddRequest;

            /**
             * Decodes a VerifiableZAddRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableZAddRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableZAddRequest;

            /**
             * Verifies a VerifiableZAddRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableZAddRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableZAddRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableZAddRequest;

            /**
             * Creates a plain object from a VerifiableZAddRequest message. Also converts values to other types if specified.
             * @param message VerifiableZAddRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableZAddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableZAddRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableZAddRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxRequest. */
        interface ITxRequest {

            /** TxRequest tx */
            tx?: (Long|null);

            /** TxRequest entriesSpec */
            entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** TxRequest sinceTx */
            sinceTx?: (Long|null);

            /** TxRequest noWait */
            noWait?: (boolean|null);

            /** TxRequest keepReferencesUnresolved */
            keepReferencesUnresolved?: (boolean|null);
        }

        /** Represents a TxRequest. */
        class TxRequest implements ITxRequest {

            /**
             * Constructs a new TxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxRequest);

            /** TxRequest tx. */
            public tx: Long;

            /** TxRequest entriesSpec. */
            public entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** TxRequest sinceTx. */
            public sinceTx: Long;

            /** TxRequest noWait. */
            public noWait: boolean;

            /** TxRequest keepReferencesUnresolved. */
            public keepReferencesUnresolved: boolean;

            /**
             * Creates a new TxRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxRequest instance
             */
            public static create(properties?: immudb.schema.ITxRequest): immudb.schema.TxRequest;

            /**
             * Encodes the specified TxRequest message. Does not implicitly {@link immudb.schema.TxRequest.verify|verify} messages.
             * @param message TxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxRequest message, length delimited. Does not implicitly {@link immudb.schema.TxRequest.verify|verify} messages.
             * @param message TxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxRequest;

            /**
             * Decodes a TxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxRequest;

            /**
             * Verifies a TxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxRequest;

            /**
             * Creates a plain object from a TxRequest message. Also converts values to other types if specified.
             * @param message TxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EntriesSpec. */
        interface IEntriesSpec {

            /** EntriesSpec kvEntriesSpec */
            kvEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);

            /** EntriesSpec zEntriesSpec */
            zEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);

            /** EntriesSpec sqlEntriesSpec */
            sqlEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);
        }

        /** Represents an EntriesSpec. */
        class EntriesSpec implements IEntriesSpec {

            /**
             * Constructs a new EntriesSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IEntriesSpec);

            /** EntriesSpec kvEntriesSpec. */
            public kvEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);

            /** EntriesSpec zEntriesSpec. */
            public zEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);

            /** EntriesSpec sqlEntriesSpec. */
            public sqlEntriesSpec?: (immudb.schema.IEntryTypeSpec|null);

            /**
             * Creates a new EntriesSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntriesSpec instance
             */
            public static create(properties?: immudb.schema.IEntriesSpec): immudb.schema.EntriesSpec;

            /**
             * Encodes the specified EntriesSpec message. Does not implicitly {@link immudb.schema.EntriesSpec.verify|verify} messages.
             * @param message EntriesSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IEntriesSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntriesSpec message, length delimited. Does not implicitly {@link immudb.schema.EntriesSpec.verify|verify} messages.
             * @param message EntriesSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IEntriesSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntriesSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntriesSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.EntriesSpec;

            /**
             * Decodes an EntriesSpec message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntriesSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.EntriesSpec;

            /**
             * Verifies an EntriesSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntriesSpec message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntriesSpec
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.EntriesSpec;

            /**
             * Creates a plain object from an EntriesSpec message. Also converts values to other types if specified.
             * @param message EntriesSpec
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.EntriesSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntriesSpec to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EntriesSpec
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EntryTypeSpec. */
        interface IEntryTypeSpec {

            /** EntryTypeSpec action */
            action?: (immudb.schema.EntryTypeAction|null);
        }

        /** Represents an EntryTypeSpec. */
        class EntryTypeSpec implements IEntryTypeSpec {

            /**
             * Constructs a new EntryTypeSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IEntryTypeSpec);

            /** EntryTypeSpec action. */
            public action: immudb.schema.EntryTypeAction;

            /**
             * Creates a new EntryTypeSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntryTypeSpec instance
             */
            public static create(properties?: immudb.schema.IEntryTypeSpec): immudb.schema.EntryTypeSpec;

            /**
             * Encodes the specified EntryTypeSpec message. Does not implicitly {@link immudb.schema.EntryTypeSpec.verify|verify} messages.
             * @param message EntryTypeSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IEntryTypeSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntryTypeSpec message, length delimited. Does not implicitly {@link immudb.schema.EntryTypeSpec.verify|verify} messages.
             * @param message EntryTypeSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IEntryTypeSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntryTypeSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntryTypeSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.EntryTypeSpec;

            /**
             * Decodes an EntryTypeSpec message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntryTypeSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.EntryTypeSpec;

            /**
             * Verifies an EntryTypeSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntryTypeSpec message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntryTypeSpec
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.EntryTypeSpec;

            /**
             * Creates a plain object from an EntryTypeSpec message. Also converts values to other types if specified.
             * @param message EntryTypeSpec
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.EntryTypeSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntryTypeSpec to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EntryTypeSpec
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** EntryTypeAction enum. */
        enum EntryTypeAction {
            EXCLUDE = 0,
            ONLY_DIGEST = 1,
            RAW_VALUE = 2,
            RESOLVE = 3
        }

        /** Properties of a VerifiableTxRequest. */
        interface IVerifiableTxRequest {

            /** VerifiableTxRequest tx */
            tx?: (Long|null);

            /** VerifiableTxRequest proveSinceTx */
            proveSinceTx?: (Long|null);

            /** VerifiableTxRequest entriesSpec */
            entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** VerifiableTxRequest sinceTx */
            sinceTx?: (Long|null);

            /** VerifiableTxRequest noWait */
            noWait?: (boolean|null);

            /** VerifiableTxRequest keepReferencesUnresolved */
            keepReferencesUnresolved?: (boolean|null);
        }

        /** Represents a VerifiableTxRequest. */
        class VerifiableTxRequest implements IVerifiableTxRequest {

            /**
             * Constructs a new VerifiableTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableTxRequest);

            /** VerifiableTxRequest tx. */
            public tx: Long;

            /** VerifiableTxRequest proveSinceTx. */
            public proveSinceTx: Long;

            /** VerifiableTxRequest entriesSpec. */
            public entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** VerifiableTxRequest sinceTx. */
            public sinceTx: Long;

            /** VerifiableTxRequest noWait. */
            public noWait: boolean;

            /** VerifiableTxRequest keepReferencesUnresolved. */
            public keepReferencesUnresolved: boolean;

            /**
             * Creates a new VerifiableTxRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableTxRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableTxRequest): immudb.schema.VerifiableTxRequest;

            /**
             * Encodes the specified VerifiableTxRequest message. Does not implicitly {@link immudb.schema.VerifiableTxRequest.verify|verify} messages.
             * @param message VerifiableTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableTxRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableTxRequest.verify|verify} messages.
             * @param message VerifiableTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableTxRequest;

            /**
             * Decodes a VerifiableTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableTxRequest;

            /**
             * Verifies a VerifiableTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableTxRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableTxRequest;

            /**
             * Creates a plain object from a VerifiableTxRequest message. Also converts values to other types if specified.
             * @param message VerifiableTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableTxRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxScanRequest. */
        interface ITxScanRequest {

            /** TxScanRequest initialTx */
            initialTx?: (Long|null);

            /** TxScanRequest limit */
            limit?: (number|null);

            /** TxScanRequest desc */
            desc?: (boolean|null);

            /** TxScanRequest entriesSpec */
            entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** TxScanRequest sinceTx */
            sinceTx?: (Long|null);

            /** TxScanRequest noWait */
            noWait?: (boolean|null);
        }

        /** Represents a TxScanRequest. */
        class TxScanRequest implements ITxScanRequest {

            /**
             * Constructs a new TxScanRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxScanRequest);

            /** TxScanRequest initialTx. */
            public initialTx: Long;

            /** TxScanRequest limit. */
            public limit: number;

            /** TxScanRequest desc. */
            public desc: boolean;

            /** TxScanRequest entriesSpec. */
            public entriesSpec?: (immudb.schema.IEntriesSpec|null);

            /** TxScanRequest sinceTx. */
            public sinceTx: Long;

            /** TxScanRequest noWait. */
            public noWait: boolean;

            /**
             * Creates a new TxScanRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxScanRequest instance
             */
            public static create(properties?: immudb.schema.ITxScanRequest): immudb.schema.TxScanRequest;

            /**
             * Encodes the specified TxScanRequest message. Does not implicitly {@link immudb.schema.TxScanRequest.verify|verify} messages.
             * @param message TxScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxScanRequest message, length delimited. Does not implicitly {@link immudb.schema.TxScanRequest.verify|verify} messages.
             * @param message TxScanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxScanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxScanRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxScanRequest;

            /**
             * Decodes a TxScanRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxScanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxScanRequest;

            /**
             * Verifies a TxScanRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxScanRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxScanRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxScanRequest;

            /**
             * Creates a plain object from a TxScanRequest message. Also converts values to other types if specified.
             * @param message TxScanRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxScanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxScanRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxScanRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TxList. */
        interface ITxList {

            /** TxList txs */
            txs?: (immudb.schema.ITx[]|null);
        }

        /** Represents a TxList. */
        class TxList implements ITxList {

            /**
             * Constructs a new TxList.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITxList);

            /** TxList txs. */
            public txs: immudb.schema.ITx[];

            /**
             * Creates a new TxList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TxList instance
             */
            public static create(properties?: immudb.schema.ITxList): immudb.schema.TxList;

            /**
             * Encodes the specified TxList message. Does not implicitly {@link immudb.schema.TxList.verify|verify} messages.
             * @param message TxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TxList message, length delimited. Does not implicitly {@link immudb.schema.TxList.verify|verify} messages.
             * @param message TxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TxList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.TxList;

            /**
             * Decodes a TxList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.TxList;

            /**
             * Verifies a TxList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TxList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TxList
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.TxList;

            /**
             * Creates a plain object from a TxList message. Also converts values to other types if specified.
             * @param message TxList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.TxList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TxList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TxList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ExportTxRequest. */
        interface IExportTxRequest {

            /** ExportTxRequest tx */
            tx?: (Long|null);
        }

        /** Represents an ExportTxRequest. */
        class ExportTxRequest implements IExportTxRequest {

            /**
             * Constructs a new ExportTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IExportTxRequest);

            /** ExportTxRequest tx. */
            public tx: Long;

            /**
             * Creates a new ExportTxRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExportTxRequest instance
             */
            public static create(properties?: immudb.schema.IExportTxRequest): immudb.schema.ExportTxRequest;

            /**
             * Encodes the specified ExportTxRequest message. Does not implicitly {@link immudb.schema.ExportTxRequest.verify|verify} messages.
             * @param message ExportTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IExportTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExportTxRequest message, length delimited. Does not implicitly {@link immudb.schema.ExportTxRequest.verify|verify} messages.
             * @param message ExportTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IExportTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExportTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExportTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ExportTxRequest;

            /**
             * Decodes an ExportTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExportTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ExportTxRequest;

            /**
             * Verifies an ExportTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExportTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExportTxRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ExportTxRequest;

            /**
             * Creates a plain object from an ExportTxRequest message. Also converts values to other types if specified.
             * @param message ExportTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ExportTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExportTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExportTxRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Database. */
        interface IDatabase {

            /** Database databaseName */
            databaseName?: (string|null);
        }

        /** Represents a Database. */
        class Database implements IDatabase {

            /**
             * Constructs a new Database.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabase);

            /** Database databaseName. */
            public databaseName: string;

            /**
             * Creates a new Database instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Database instance
             */
            public static create(properties?: immudb.schema.IDatabase): immudb.schema.Database;

            /**
             * Encodes the specified Database message. Does not implicitly {@link immudb.schema.Database.verify|verify} messages.
             * @param message Database message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Database message, length delimited. Does not implicitly {@link immudb.schema.Database.verify|verify} messages.
             * @param message Database message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Database message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Database
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Database;

            /**
             * Decodes a Database message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Database
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Database;

            /**
             * Verifies a Database message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Database message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Database
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Database;

            /**
             * Creates a plain object from a Database message. Also converts values to other types if specified.
             * @param message Database
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Database, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Database to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Database
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseSettings. */
        interface IDatabaseSettings {

            /** DatabaseSettings databaseName */
            databaseName?: (string|null);

            /** DatabaseSettings replica */
            replica?: (boolean|null);

            /** DatabaseSettings masterDatabase */
            masterDatabase?: (string|null);

            /** DatabaseSettings masterAddress */
            masterAddress?: (string|null);

            /** DatabaseSettings masterPort */
            masterPort?: (number|null);

            /** DatabaseSettings followerUsername */
            followerUsername?: (string|null);

            /** DatabaseSettings followerPassword */
            followerPassword?: (string|null);

            /** DatabaseSettings fileSize */
            fileSize?: (number|null);

            /** DatabaseSettings maxKeyLen */
            maxKeyLen?: (number|null);

            /** DatabaseSettings maxValueLen */
            maxValueLen?: (number|null);

            /** DatabaseSettings maxTxEntries */
            maxTxEntries?: (number|null);

            /** DatabaseSettings excludeCommitTime */
            excludeCommitTime?: (boolean|null);
        }

        /** Represents a DatabaseSettings. */
        class DatabaseSettings implements IDatabaseSettings {

            /**
             * Constructs a new DatabaseSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseSettings);

            /** DatabaseSettings databaseName. */
            public databaseName: string;

            /** DatabaseSettings replica. */
            public replica: boolean;

            /** DatabaseSettings masterDatabase. */
            public masterDatabase: string;

            /** DatabaseSettings masterAddress. */
            public masterAddress: string;

            /** DatabaseSettings masterPort. */
            public masterPort: number;

            /** DatabaseSettings followerUsername. */
            public followerUsername: string;

            /** DatabaseSettings followerPassword. */
            public followerPassword: string;

            /** DatabaseSettings fileSize. */
            public fileSize: number;

            /** DatabaseSettings maxKeyLen. */
            public maxKeyLen: number;

            /** DatabaseSettings maxValueLen. */
            public maxValueLen: number;

            /** DatabaseSettings maxTxEntries. */
            public maxTxEntries: number;

            /** DatabaseSettings excludeCommitTime. */
            public excludeCommitTime: boolean;

            /**
             * Creates a new DatabaseSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseSettings instance
             */
            public static create(properties?: immudb.schema.IDatabaseSettings): immudb.schema.DatabaseSettings;

            /**
             * Encodes the specified DatabaseSettings message. Does not implicitly {@link immudb.schema.DatabaseSettings.verify|verify} messages.
             * @param message DatabaseSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseSettings message, length delimited. Does not implicitly {@link immudb.schema.DatabaseSettings.verify|verify} messages.
             * @param message DatabaseSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseSettings;

            /**
             * Decodes a DatabaseSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseSettings;

            /**
             * Verifies a DatabaseSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseSettings
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseSettings;

            /**
             * Creates a plain object from a DatabaseSettings message. Also converts values to other types if specified.
             * @param message DatabaseSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateDatabaseRequest. */
        interface ICreateDatabaseRequest {

            /** CreateDatabaseRequest name */
            name?: (string|null);

            /** CreateDatabaseRequest settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** CreateDatabaseRequest ifNotExists */
            ifNotExists?: (boolean|null);
        }

        /** Represents a CreateDatabaseRequest. */
        class CreateDatabaseRequest implements ICreateDatabaseRequest {

            /**
             * Constructs a new CreateDatabaseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ICreateDatabaseRequest);

            /** CreateDatabaseRequest name. */
            public name: string;

            /** CreateDatabaseRequest settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** CreateDatabaseRequest ifNotExists. */
            public ifNotExists: boolean;

            /**
             * Creates a new CreateDatabaseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateDatabaseRequest instance
             */
            public static create(properties?: immudb.schema.ICreateDatabaseRequest): immudb.schema.CreateDatabaseRequest;

            /**
             * Encodes the specified CreateDatabaseRequest message. Does not implicitly {@link immudb.schema.CreateDatabaseRequest.verify|verify} messages.
             * @param message CreateDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateDatabaseRequest message, length delimited. Does not implicitly {@link immudb.schema.CreateDatabaseRequest.verify|verify} messages.
             * @param message CreateDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateDatabaseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.CreateDatabaseRequest;

            /**
             * Decodes a CreateDatabaseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.CreateDatabaseRequest;

            /**
             * Verifies a CreateDatabaseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateDatabaseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateDatabaseRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.CreateDatabaseRequest;

            /**
             * Creates a plain object from a CreateDatabaseRequest message. Also converts values to other types if specified.
             * @param message CreateDatabaseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.CreateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateDatabaseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateDatabaseRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateDatabaseResponse. */
        interface ICreateDatabaseResponse {

            /** CreateDatabaseResponse name */
            name?: (string|null);

            /** CreateDatabaseResponse settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** CreateDatabaseResponse alreadyExisted */
            alreadyExisted?: (boolean|null);
        }

        /** Represents a CreateDatabaseResponse. */
        class CreateDatabaseResponse implements ICreateDatabaseResponse {

            /**
             * Constructs a new CreateDatabaseResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ICreateDatabaseResponse);

            /** CreateDatabaseResponse name. */
            public name: string;

            /** CreateDatabaseResponse settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** CreateDatabaseResponse alreadyExisted. */
            public alreadyExisted: boolean;

            /**
             * Creates a new CreateDatabaseResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateDatabaseResponse instance
             */
            public static create(properties?: immudb.schema.ICreateDatabaseResponse): immudb.schema.CreateDatabaseResponse;

            /**
             * Encodes the specified CreateDatabaseResponse message. Does not implicitly {@link immudb.schema.CreateDatabaseResponse.verify|verify} messages.
             * @param message CreateDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ICreateDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateDatabaseResponse message, length delimited. Does not implicitly {@link immudb.schema.CreateDatabaseResponse.verify|verify} messages.
             * @param message CreateDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ICreateDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateDatabaseResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.CreateDatabaseResponse;

            /**
             * Decodes a CreateDatabaseResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.CreateDatabaseResponse;

            /**
             * Verifies a CreateDatabaseResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateDatabaseResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateDatabaseResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.CreateDatabaseResponse;

            /**
             * Creates a plain object from a CreateDatabaseResponse message. Also converts values to other types if specified.
             * @param message CreateDatabaseResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.CreateDatabaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateDatabaseResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateDatabaseResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateDatabaseRequest. */
        interface IUpdateDatabaseRequest {

            /** UpdateDatabaseRequest database */
            database?: (string|null);

            /** UpdateDatabaseRequest settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);
        }

        /** Represents an UpdateDatabaseRequest. */
        class UpdateDatabaseRequest implements IUpdateDatabaseRequest {

            /**
             * Constructs a new UpdateDatabaseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUpdateDatabaseRequest);

            /** UpdateDatabaseRequest database. */
            public database: string;

            /** UpdateDatabaseRequest settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /**
             * Creates a new UpdateDatabaseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateDatabaseRequest instance
             */
            public static create(properties?: immudb.schema.IUpdateDatabaseRequest): immudb.schema.UpdateDatabaseRequest;

            /**
             * Encodes the specified UpdateDatabaseRequest message. Does not implicitly {@link immudb.schema.UpdateDatabaseRequest.verify|verify} messages.
             * @param message UpdateDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateDatabaseRequest message, length delimited. Does not implicitly {@link immudb.schema.UpdateDatabaseRequest.verify|verify} messages.
             * @param message UpdateDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateDatabaseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UpdateDatabaseRequest;

            /**
             * Decodes an UpdateDatabaseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UpdateDatabaseRequest;

            /**
             * Verifies an UpdateDatabaseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateDatabaseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateDatabaseRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UpdateDatabaseRequest;

            /**
             * Creates a plain object from an UpdateDatabaseRequest message. Also converts values to other types if specified.
             * @param message UpdateDatabaseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UpdateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateDatabaseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateDatabaseRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateDatabaseResponse. */
        interface IUpdateDatabaseResponse {

            /** UpdateDatabaseResponse database */
            database?: (string|null);

            /** UpdateDatabaseResponse settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);
        }

        /** Represents an UpdateDatabaseResponse. */
        class UpdateDatabaseResponse implements IUpdateDatabaseResponse {

            /**
             * Constructs a new UpdateDatabaseResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUpdateDatabaseResponse);

            /** UpdateDatabaseResponse database. */
            public database: string;

            /** UpdateDatabaseResponse settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /**
             * Creates a new UpdateDatabaseResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateDatabaseResponse instance
             */
            public static create(properties?: immudb.schema.IUpdateDatabaseResponse): immudb.schema.UpdateDatabaseResponse;

            /**
             * Encodes the specified UpdateDatabaseResponse message. Does not implicitly {@link immudb.schema.UpdateDatabaseResponse.verify|verify} messages.
             * @param message UpdateDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUpdateDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateDatabaseResponse message, length delimited. Does not implicitly {@link immudb.schema.UpdateDatabaseResponse.verify|verify} messages.
             * @param message UpdateDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUpdateDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateDatabaseResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UpdateDatabaseResponse;

            /**
             * Decodes an UpdateDatabaseResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UpdateDatabaseResponse;

            /**
             * Verifies an UpdateDatabaseResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateDatabaseResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateDatabaseResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UpdateDatabaseResponse;

            /**
             * Creates a plain object from an UpdateDatabaseResponse message. Also converts values to other types if specified.
             * @param message UpdateDatabaseResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UpdateDatabaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateDatabaseResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateDatabaseResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseSettingsRequest. */
        interface IDatabaseSettingsRequest {
        }

        /** Represents a DatabaseSettingsRequest. */
        class DatabaseSettingsRequest implements IDatabaseSettingsRequest {

            /**
             * Constructs a new DatabaseSettingsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseSettingsRequest);

            /**
             * Creates a new DatabaseSettingsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseSettingsRequest instance
             */
            public static create(properties?: immudb.schema.IDatabaseSettingsRequest): immudb.schema.DatabaseSettingsRequest;

            /**
             * Encodes the specified DatabaseSettingsRequest message. Does not implicitly {@link immudb.schema.DatabaseSettingsRequest.verify|verify} messages.
             * @param message DatabaseSettingsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseSettingsRequest message, length delimited. Does not implicitly {@link immudb.schema.DatabaseSettingsRequest.verify|verify} messages.
             * @param message DatabaseSettingsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseSettingsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseSettingsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseSettingsRequest;

            /**
             * Decodes a DatabaseSettingsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseSettingsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseSettingsRequest;

            /**
             * Verifies a DatabaseSettingsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseSettingsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseSettingsRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseSettingsRequest;

            /**
             * Creates a plain object from a DatabaseSettingsRequest message. Also converts values to other types if specified.
             * @param message DatabaseSettingsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseSettingsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseSettingsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseSettingsResponse. */
        interface IDatabaseSettingsResponse {

            /** DatabaseSettingsResponse database */
            database?: (string|null);

            /** DatabaseSettingsResponse settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);
        }

        /** Represents a DatabaseSettingsResponse. */
        class DatabaseSettingsResponse implements IDatabaseSettingsResponse {

            /**
             * Constructs a new DatabaseSettingsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseSettingsResponse);

            /** DatabaseSettingsResponse database. */
            public database: string;

            /** DatabaseSettingsResponse settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /**
             * Creates a new DatabaseSettingsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseSettingsResponse instance
             */
            public static create(properties?: immudb.schema.IDatabaseSettingsResponse): immudb.schema.DatabaseSettingsResponse;

            /**
             * Encodes the specified DatabaseSettingsResponse message. Does not implicitly {@link immudb.schema.DatabaseSettingsResponse.verify|verify} messages.
             * @param message DatabaseSettingsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseSettingsResponse message, length delimited. Does not implicitly {@link immudb.schema.DatabaseSettingsResponse.verify|verify} messages.
             * @param message DatabaseSettingsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseSettingsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseSettingsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseSettingsResponse;

            /**
             * Decodes a DatabaseSettingsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseSettingsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseSettingsResponse;

            /**
             * Verifies a DatabaseSettingsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseSettingsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseSettingsResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseSettingsResponse;

            /**
             * Creates a plain object from a DatabaseSettingsResponse message. Also converts values to other types if specified.
             * @param message DatabaseSettingsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseSettingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseSettingsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseSettingsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NullableUint32. */
        interface INullableUint32 {

            /** NullableUint32 value */
            value?: (number|null);
        }

        /** Represents a NullableUint32. */
        class NullableUint32 implements INullableUint32 {

            /**
             * Constructs a new NullableUint32.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INullableUint32);

            /** NullableUint32 value. */
            public value: number;

            /**
             * Creates a new NullableUint32 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableUint32 instance
             */
            public static create(properties?: immudb.schema.INullableUint32): immudb.schema.NullableUint32;

            /**
             * Encodes the specified NullableUint32 message. Does not implicitly {@link immudb.schema.NullableUint32.verify|verify} messages.
             * @param message NullableUint32 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INullableUint32, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableUint32 message, length delimited. Does not implicitly {@link immudb.schema.NullableUint32.verify|verify} messages.
             * @param message NullableUint32 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INullableUint32, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableUint32 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableUint32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NullableUint32;

            /**
             * Decodes a NullableUint32 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableUint32
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NullableUint32;

            /**
             * Verifies a NullableUint32 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableUint32 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableUint32
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NullableUint32;

            /**
             * Creates a plain object from a NullableUint32 message. Also converts values to other types if specified.
             * @param message NullableUint32
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NullableUint32, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableUint32 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullableUint32
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NullableUint64. */
        interface INullableUint64 {

            /** NullableUint64 value */
            value?: (Long|null);
        }

        /** Represents a NullableUint64. */
        class NullableUint64 implements INullableUint64 {

            /**
             * Constructs a new NullableUint64.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INullableUint64);

            /** NullableUint64 value. */
            public value: Long;

            /**
             * Creates a new NullableUint64 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableUint64 instance
             */
            public static create(properties?: immudb.schema.INullableUint64): immudb.schema.NullableUint64;

            /**
             * Encodes the specified NullableUint64 message. Does not implicitly {@link immudb.schema.NullableUint64.verify|verify} messages.
             * @param message NullableUint64 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INullableUint64, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableUint64 message, length delimited. Does not implicitly {@link immudb.schema.NullableUint64.verify|verify} messages.
             * @param message NullableUint64 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INullableUint64, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableUint64 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableUint64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NullableUint64;

            /**
             * Decodes a NullableUint64 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableUint64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NullableUint64;

            /**
             * Verifies a NullableUint64 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableUint64 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableUint64
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NullableUint64;

            /**
             * Creates a plain object from a NullableUint64 message. Also converts values to other types if specified.
             * @param message NullableUint64
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NullableUint64, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableUint64 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullableUint64
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NullableFloat. */
        interface INullableFloat {

            /** NullableFloat value */
            value?: (number|null);
        }

        /** Represents a NullableFloat. */
        class NullableFloat implements INullableFloat {

            /**
             * Constructs a new NullableFloat.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INullableFloat);

            /** NullableFloat value. */
            public value: number;

            /**
             * Creates a new NullableFloat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableFloat instance
             */
            public static create(properties?: immudb.schema.INullableFloat): immudb.schema.NullableFloat;

            /**
             * Encodes the specified NullableFloat message. Does not implicitly {@link immudb.schema.NullableFloat.verify|verify} messages.
             * @param message NullableFloat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INullableFloat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableFloat message, length delimited. Does not implicitly {@link immudb.schema.NullableFloat.verify|verify} messages.
             * @param message NullableFloat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INullableFloat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableFloat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableFloat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NullableFloat;

            /**
             * Decodes a NullableFloat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableFloat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NullableFloat;

            /**
             * Verifies a NullableFloat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableFloat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableFloat
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NullableFloat;

            /**
             * Creates a plain object from a NullableFloat message. Also converts values to other types if specified.
             * @param message NullableFloat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NullableFloat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableFloat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullableFloat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NullableBool. */
        interface INullableBool {

            /** NullableBool value */
            value?: (boolean|null);
        }

        /** Represents a NullableBool. */
        class NullableBool implements INullableBool {

            /**
             * Constructs a new NullableBool.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INullableBool);

            /** NullableBool value. */
            public value: boolean;

            /**
             * Creates a new NullableBool instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableBool instance
             */
            public static create(properties?: immudb.schema.INullableBool): immudb.schema.NullableBool;

            /**
             * Encodes the specified NullableBool message. Does not implicitly {@link immudb.schema.NullableBool.verify|verify} messages.
             * @param message NullableBool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INullableBool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableBool message, length delimited. Does not implicitly {@link immudb.schema.NullableBool.verify|verify} messages.
             * @param message NullableBool message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INullableBool, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableBool message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableBool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NullableBool;

            /**
             * Decodes a NullableBool message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableBool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NullableBool;

            /**
             * Verifies a NullableBool message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableBool message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableBool
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NullableBool;

            /**
             * Creates a plain object from a NullableBool message. Also converts values to other types if specified.
             * @param message NullableBool
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NullableBool, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableBool to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullableBool
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NullableString. */
        interface INullableString {

            /** NullableString value */
            value?: (string|null);
        }

        /** Represents a NullableString. */
        class NullableString implements INullableString {

            /**
             * Constructs a new NullableString.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INullableString);

            /** NullableString value. */
            public value: string;

            /**
             * Creates a new NullableString instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullableString instance
             */
            public static create(properties?: immudb.schema.INullableString): immudb.schema.NullableString;

            /**
             * Encodes the specified NullableString message. Does not implicitly {@link immudb.schema.NullableString.verify|verify} messages.
             * @param message NullableString message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INullableString, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullableString message, length delimited. Does not implicitly {@link immudb.schema.NullableString.verify|verify} messages.
             * @param message NullableString message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INullableString, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullableString message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullableString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NullableString;

            /**
             * Decodes a NullableString message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullableString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NullableString;

            /**
             * Verifies a NullableString message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullableString message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullableString
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NullableString;

            /**
             * Creates a plain object from a NullableString message. Also converts values to other types if specified.
             * @param message NullableString
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NullableString, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullableString to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullableString
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseNullableSettings. */
        interface IDatabaseNullableSettings {

            /** DatabaseNullableSettings replicationSettings */
            replicationSettings?: (immudb.schema.IReplicationNullableSettings|null);

            /** DatabaseNullableSettings fileSize */
            fileSize?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxKeyLen */
            maxKeyLen?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxValueLen */
            maxValueLen?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxTxEntries */
            maxTxEntries?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings excludeCommitTime */
            excludeCommitTime?: (immudb.schema.INullableBool|null);

            /** DatabaseNullableSettings maxConcurrency */
            maxConcurrency?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxIOConcurrency */
            maxIOConcurrency?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings txLogCacheSize */
            txLogCacheSize?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings vLogMaxOpenedFiles */
            vLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings txLogMaxOpenedFiles */
            txLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings commitLogMaxOpenedFiles */
            commitLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings indexSettings */
            indexSettings?: (immudb.schema.IIndexNullableSettings|null);

            /** DatabaseNullableSettings writeTxHeaderVersion */
            writeTxHeaderVersion?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings autoload */
            autoload?: (immudb.schema.INullableBool|null);
        }

        /** Represents a DatabaseNullableSettings. */
        class DatabaseNullableSettings implements IDatabaseNullableSettings {

            /**
             * Constructs a new DatabaseNullableSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseNullableSettings);

            /** DatabaseNullableSettings replicationSettings. */
            public replicationSettings?: (immudb.schema.IReplicationNullableSettings|null);

            /** DatabaseNullableSettings fileSize. */
            public fileSize?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxKeyLen. */
            public maxKeyLen?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxValueLen. */
            public maxValueLen?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxTxEntries. */
            public maxTxEntries?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings excludeCommitTime. */
            public excludeCommitTime?: (immudb.schema.INullableBool|null);

            /** DatabaseNullableSettings maxConcurrency. */
            public maxConcurrency?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings maxIOConcurrency. */
            public maxIOConcurrency?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings txLogCacheSize. */
            public txLogCacheSize?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings vLogMaxOpenedFiles. */
            public vLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings txLogMaxOpenedFiles. */
            public txLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings commitLogMaxOpenedFiles. */
            public commitLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings indexSettings. */
            public indexSettings?: (immudb.schema.IIndexNullableSettings|null);

            /** DatabaseNullableSettings writeTxHeaderVersion. */
            public writeTxHeaderVersion?: (immudb.schema.INullableUint32|null);

            /** DatabaseNullableSettings autoload. */
            public autoload?: (immudb.schema.INullableBool|null);

            /**
             * Creates a new DatabaseNullableSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseNullableSettings instance
             */
            public static create(properties?: immudb.schema.IDatabaseNullableSettings): immudb.schema.DatabaseNullableSettings;

            /**
             * Encodes the specified DatabaseNullableSettings message. Does not implicitly {@link immudb.schema.DatabaseNullableSettings.verify|verify} messages.
             * @param message DatabaseNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseNullableSettings message, length delimited. Does not implicitly {@link immudb.schema.DatabaseNullableSettings.verify|verify} messages.
             * @param message DatabaseNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseNullableSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseNullableSettings;

            /**
             * Decodes a DatabaseNullableSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseNullableSettings;

            /**
             * Verifies a DatabaseNullableSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseNullableSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseNullableSettings
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseNullableSettings;

            /**
             * Creates a plain object from a DatabaseNullableSettings message. Also converts values to other types if specified.
             * @param message DatabaseNullableSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseNullableSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseNullableSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseNullableSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReplicationNullableSettings. */
        interface IReplicationNullableSettings {

            /** ReplicationNullableSettings replica */
            replica?: (immudb.schema.INullableBool|null);

            /** ReplicationNullableSettings masterDatabase */
            masterDatabase?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings masterAddress */
            masterAddress?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings masterPort */
            masterPort?: (immudb.schema.INullableUint32|null);

            /** ReplicationNullableSettings followerUsername */
            followerUsername?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings followerPassword */
            followerPassword?: (immudb.schema.INullableString|null);
        }

        /** Represents a ReplicationNullableSettings. */
        class ReplicationNullableSettings implements IReplicationNullableSettings {

            /**
             * Constructs a new ReplicationNullableSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IReplicationNullableSettings);

            /** ReplicationNullableSettings replica. */
            public replica?: (immudb.schema.INullableBool|null);

            /** ReplicationNullableSettings masterDatabase. */
            public masterDatabase?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings masterAddress. */
            public masterAddress?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings masterPort. */
            public masterPort?: (immudb.schema.INullableUint32|null);

            /** ReplicationNullableSettings followerUsername. */
            public followerUsername?: (immudb.schema.INullableString|null);

            /** ReplicationNullableSettings followerPassword. */
            public followerPassword?: (immudb.schema.INullableString|null);

            /**
             * Creates a new ReplicationNullableSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplicationNullableSettings instance
             */
            public static create(properties?: immudb.schema.IReplicationNullableSettings): immudb.schema.ReplicationNullableSettings;

            /**
             * Encodes the specified ReplicationNullableSettings message. Does not implicitly {@link immudb.schema.ReplicationNullableSettings.verify|verify} messages.
             * @param message ReplicationNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IReplicationNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplicationNullableSettings message, length delimited. Does not implicitly {@link immudb.schema.ReplicationNullableSettings.verify|verify} messages.
             * @param message ReplicationNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IReplicationNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplicationNullableSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplicationNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ReplicationNullableSettings;

            /**
             * Decodes a ReplicationNullableSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplicationNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ReplicationNullableSettings;

            /**
             * Verifies a ReplicationNullableSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplicationNullableSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplicationNullableSettings
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ReplicationNullableSettings;

            /**
             * Creates a plain object from a ReplicationNullableSettings message. Also converts values to other types if specified.
             * @param message ReplicationNullableSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ReplicationNullableSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplicationNullableSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReplicationNullableSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IndexNullableSettings. */
        interface IIndexNullableSettings {

            /** IndexNullableSettings flushThreshold */
            flushThreshold?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings syncThreshold */
            syncThreshold?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings cacheSize */
            cacheSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings maxNodeSize */
            maxNodeSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings maxActiveSnapshots */
            maxActiveSnapshots?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings renewSnapRootAfter */
            renewSnapRootAfter?: (immudb.schema.INullableUint64|null);

            /** IndexNullableSettings compactionThld */
            compactionThld?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings delayDuringCompaction */
            delayDuringCompaction?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings nodesLogMaxOpenedFiles */
            nodesLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings historyLogMaxOpenedFiles */
            historyLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings commitLogMaxOpenedFiles */
            commitLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings flushBufferSize */
            flushBufferSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings cleanupPercentage */
            cleanupPercentage?: (immudb.schema.INullableFloat|null);
        }

        /** Represents an IndexNullableSettings. */
        class IndexNullableSettings implements IIndexNullableSettings {

            /**
             * Constructs a new IndexNullableSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IIndexNullableSettings);

            /** IndexNullableSettings flushThreshold. */
            public flushThreshold?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings syncThreshold. */
            public syncThreshold?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings cacheSize. */
            public cacheSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings maxNodeSize. */
            public maxNodeSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings maxActiveSnapshots. */
            public maxActiveSnapshots?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings renewSnapRootAfter. */
            public renewSnapRootAfter?: (immudb.schema.INullableUint64|null);

            /** IndexNullableSettings compactionThld. */
            public compactionThld?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings delayDuringCompaction. */
            public delayDuringCompaction?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings nodesLogMaxOpenedFiles. */
            public nodesLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings historyLogMaxOpenedFiles. */
            public historyLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings commitLogMaxOpenedFiles. */
            public commitLogMaxOpenedFiles?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings flushBufferSize. */
            public flushBufferSize?: (immudb.schema.INullableUint32|null);

            /** IndexNullableSettings cleanupPercentage. */
            public cleanupPercentage?: (immudb.schema.INullableFloat|null);

            /**
             * Creates a new IndexNullableSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndexNullableSettings instance
             */
            public static create(properties?: immudb.schema.IIndexNullableSettings): immudb.schema.IndexNullableSettings;

            /**
             * Encodes the specified IndexNullableSettings message. Does not implicitly {@link immudb.schema.IndexNullableSettings.verify|verify} messages.
             * @param message IndexNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IIndexNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndexNullableSettings message, length delimited. Does not implicitly {@link immudb.schema.IndexNullableSettings.verify|verify} messages.
             * @param message IndexNullableSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IIndexNullableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndexNullableSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndexNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.IndexNullableSettings;

            /**
             * Decodes an IndexNullableSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndexNullableSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.IndexNullableSettings;

            /**
             * Verifies an IndexNullableSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndexNullableSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndexNullableSettings
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.IndexNullableSettings;

            /**
             * Creates a plain object from an IndexNullableSettings message. Also converts values to other types if specified.
             * @param message IndexNullableSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.IndexNullableSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndexNullableSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IndexNullableSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDatabaseRequest. */
        interface ILoadDatabaseRequest {

            /** LoadDatabaseRequest database */
            database?: (string|null);
        }

        /** Represents a LoadDatabaseRequest. */
        class LoadDatabaseRequest implements ILoadDatabaseRequest {

            /**
             * Constructs a new LoadDatabaseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ILoadDatabaseRequest);

            /** LoadDatabaseRequest database. */
            public database: string;

            /**
             * Creates a new LoadDatabaseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDatabaseRequest instance
             */
            public static create(properties?: immudb.schema.ILoadDatabaseRequest): immudb.schema.LoadDatabaseRequest;

            /**
             * Encodes the specified LoadDatabaseRequest message. Does not implicitly {@link immudb.schema.LoadDatabaseRequest.verify|verify} messages.
             * @param message LoadDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ILoadDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDatabaseRequest message, length delimited. Does not implicitly {@link immudb.schema.LoadDatabaseRequest.verify|verify} messages.
             * @param message LoadDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ILoadDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDatabaseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.LoadDatabaseRequest;

            /**
             * Decodes a LoadDatabaseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.LoadDatabaseRequest;

            /**
             * Verifies a LoadDatabaseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDatabaseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDatabaseRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.LoadDatabaseRequest;

            /**
             * Creates a plain object from a LoadDatabaseRequest message. Also converts values to other types if specified.
             * @param message LoadDatabaseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.LoadDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDatabaseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDatabaseRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDatabaseResponse. */
        interface ILoadDatabaseResponse {

            /** LoadDatabaseResponse database */
            database?: (string|null);
        }

        /** Represents a LoadDatabaseResponse. */
        class LoadDatabaseResponse implements ILoadDatabaseResponse {

            /**
             * Constructs a new LoadDatabaseResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ILoadDatabaseResponse);

            /** LoadDatabaseResponse database. */
            public database: string;

            /**
             * Creates a new LoadDatabaseResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDatabaseResponse instance
             */
            public static create(properties?: immudb.schema.ILoadDatabaseResponse): immudb.schema.LoadDatabaseResponse;

            /**
             * Encodes the specified LoadDatabaseResponse message. Does not implicitly {@link immudb.schema.LoadDatabaseResponse.verify|verify} messages.
             * @param message LoadDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ILoadDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDatabaseResponse message, length delimited. Does not implicitly {@link immudb.schema.LoadDatabaseResponse.verify|verify} messages.
             * @param message LoadDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ILoadDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDatabaseResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.LoadDatabaseResponse;

            /**
             * Decodes a LoadDatabaseResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.LoadDatabaseResponse;

            /**
             * Verifies a LoadDatabaseResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDatabaseResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDatabaseResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.LoadDatabaseResponse;

            /**
             * Creates a plain object from a LoadDatabaseResponse message. Also converts values to other types if specified.
             * @param message LoadDatabaseResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.LoadDatabaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDatabaseResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDatabaseResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UnloadDatabaseRequest. */
        interface IUnloadDatabaseRequest {

            /** UnloadDatabaseRequest database */
            database?: (string|null);
        }

        /** Represents an UnloadDatabaseRequest. */
        class UnloadDatabaseRequest implements IUnloadDatabaseRequest {

            /**
             * Constructs a new UnloadDatabaseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUnloadDatabaseRequest);

            /** UnloadDatabaseRequest database. */
            public database: string;

            /**
             * Creates a new UnloadDatabaseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnloadDatabaseRequest instance
             */
            public static create(properties?: immudb.schema.IUnloadDatabaseRequest): immudb.schema.UnloadDatabaseRequest;

            /**
             * Encodes the specified UnloadDatabaseRequest message. Does not implicitly {@link immudb.schema.UnloadDatabaseRequest.verify|verify} messages.
             * @param message UnloadDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUnloadDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnloadDatabaseRequest message, length delimited. Does not implicitly {@link immudb.schema.UnloadDatabaseRequest.verify|verify} messages.
             * @param message UnloadDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUnloadDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnloadDatabaseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnloadDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UnloadDatabaseRequest;

            /**
             * Decodes an UnloadDatabaseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnloadDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UnloadDatabaseRequest;

            /**
             * Verifies an UnloadDatabaseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnloadDatabaseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnloadDatabaseRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UnloadDatabaseRequest;

            /**
             * Creates a plain object from an UnloadDatabaseRequest message. Also converts values to other types if specified.
             * @param message UnloadDatabaseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UnloadDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnloadDatabaseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UnloadDatabaseRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UnloadDatabaseResponse. */
        interface IUnloadDatabaseResponse {

            /** UnloadDatabaseResponse database */
            database?: (string|null);
        }

        /** Represents an UnloadDatabaseResponse. */
        class UnloadDatabaseResponse implements IUnloadDatabaseResponse {

            /**
             * Constructs a new UnloadDatabaseResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUnloadDatabaseResponse);

            /** UnloadDatabaseResponse database. */
            public database: string;

            /**
             * Creates a new UnloadDatabaseResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnloadDatabaseResponse instance
             */
            public static create(properties?: immudb.schema.IUnloadDatabaseResponse): immudb.schema.UnloadDatabaseResponse;

            /**
             * Encodes the specified UnloadDatabaseResponse message. Does not implicitly {@link immudb.schema.UnloadDatabaseResponse.verify|verify} messages.
             * @param message UnloadDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUnloadDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnloadDatabaseResponse message, length delimited. Does not implicitly {@link immudb.schema.UnloadDatabaseResponse.verify|verify} messages.
             * @param message UnloadDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUnloadDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnloadDatabaseResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnloadDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UnloadDatabaseResponse;

            /**
             * Decodes an UnloadDatabaseResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnloadDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UnloadDatabaseResponse;

            /**
             * Verifies an UnloadDatabaseResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnloadDatabaseResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnloadDatabaseResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UnloadDatabaseResponse;

            /**
             * Creates a plain object from an UnloadDatabaseResponse message. Also converts values to other types if specified.
             * @param message UnloadDatabaseResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UnloadDatabaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnloadDatabaseResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UnloadDatabaseResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteDatabaseRequest. */
        interface IDeleteDatabaseRequest {

            /** DeleteDatabaseRequest database */
            database?: (string|null);
        }

        /** Represents a DeleteDatabaseRequest. */
        class DeleteDatabaseRequest implements IDeleteDatabaseRequest {

            /**
             * Constructs a new DeleteDatabaseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDeleteDatabaseRequest);

            /** DeleteDatabaseRequest database. */
            public database: string;

            /**
             * Creates a new DeleteDatabaseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteDatabaseRequest instance
             */
            public static create(properties?: immudb.schema.IDeleteDatabaseRequest): immudb.schema.DeleteDatabaseRequest;

            /**
             * Encodes the specified DeleteDatabaseRequest message. Does not implicitly {@link immudb.schema.DeleteDatabaseRequest.verify|verify} messages.
             * @param message DeleteDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDeleteDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteDatabaseRequest message, length delimited. Does not implicitly {@link immudb.schema.DeleteDatabaseRequest.verify|verify} messages.
             * @param message DeleteDatabaseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDeleteDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteDatabaseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DeleteDatabaseRequest;

            /**
             * Decodes a DeleteDatabaseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteDatabaseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DeleteDatabaseRequest;

            /**
             * Verifies a DeleteDatabaseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteDatabaseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteDatabaseRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DeleteDatabaseRequest;

            /**
             * Creates a plain object from a DeleteDatabaseRequest message. Also converts values to other types if specified.
             * @param message DeleteDatabaseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DeleteDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteDatabaseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteDatabaseRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteDatabaseResponse. */
        interface IDeleteDatabaseResponse {

            /** DeleteDatabaseResponse database */
            database?: (string|null);
        }

        /** Represents a DeleteDatabaseResponse. */
        class DeleteDatabaseResponse implements IDeleteDatabaseResponse {

            /**
             * Constructs a new DeleteDatabaseResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDeleteDatabaseResponse);

            /** DeleteDatabaseResponse database. */
            public database: string;

            /**
             * Creates a new DeleteDatabaseResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteDatabaseResponse instance
             */
            public static create(properties?: immudb.schema.IDeleteDatabaseResponse): immudb.schema.DeleteDatabaseResponse;

            /**
             * Encodes the specified DeleteDatabaseResponse message. Does not implicitly {@link immudb.schema.DeleteDatabaseResponse.verify|verify} messages.
             * @param message DeleteDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDeleteDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteDatabaseResponse message, length delimited. Does not implicitly {@link immudb.schema.DeleteDatabaseResponse.verify|verify} messages.
             * @param message DeleteDatabaseResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDeleteDatabaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteDatabaseResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DeleteDatabaseResponse;

            /**
             * Decodes a DeleteDatabaseResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteDatabaseResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DeleteDatabaseResponse;

            /**
             * Verifies a DeleteDatabaseResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteDatabaseResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteDatabaseResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DeleteDatabaseResponse;

            /**
             * Creates a plain object from a DeleteDatabaseResponse message. Also converts values to other types if specified.
             * @param message DeleteDatabaseResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DeleteDatabaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteDatabaseResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteDatabaseResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FlushIndexRequest. */
        interface IFlushIndexRequest {

            /** FlushIndexRequest cleanupPercentage */
            cleanupPercentage?: (number|null);

            /** FlushIndexRequest synced */
            synced?: (boolean|null);
        }

        /** Represents a FlushIndexRequest. */
        class FlushIndexRequest implements IFlushIndexRequest {

            /**
             * Constructs a new FlushIndexRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IFlushIndexRequest);

            /** FlushIndexRequest cleanupPercentage. */
            public cleanupPercentage: number;

            /** FlushIndexRequest synced. */
            public synced: boolean;

            /**
             * Creates a new FlushIndexRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FlushIndexRequest instance
             */
            public static create(properties?: immudb.schema.IFlushIndexRequest): immudb.schema.FlushIndexRequest;

            /**
             * Encodes the specified FlushIndexRequest message. Does not implicitly {@link immudb.schema.FlushIndexRequest.verify|verify} messages.
             * @param message FlushIndexRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IFlushIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FlushIndexRequest message, length delimited. Does not implicitly {@link immudb.schema.FlushIndexRequest.verify|verify} messages.
             * @param message FlushIndexRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IFlushIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FlushIndexRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FlushIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.FlushIndexRequest;

            /**
             * Decodes a FlushIndexRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FlushIndexRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.FlushIndexRequest;

            /**
             * Verifies a FlushIndexRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FlushIndexRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FlushIndexRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.FlushIndexRequest;

            /**
             * Creates a plain object from a FlushIndexRequest message. Also converts values to other types if specified.
             * @param message FlushIndexRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.FlushIndexRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FlushIndexRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FlushIndexRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FlushIndexResponse. */
        interface IFlushIndexResponse {

            /** FlushIndexResponse database */
            database?: (string|null);
        }

        /** Represents a FlushIndexResponse. */
        class FlushIndexResponse implements IFlushIndexResponse {

            /**
             * Constructs a new FlushIndexResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IFlushIndexResponse);

            /** FlushIndexResponse database. */
            public database: string;

            /**
             * Creates a new FlushIndexResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FlushIndexResponse instance
             */
            public static create(properties?: immudb.schema.IFlushIndexResponse): immudb.schema.FlushIndexResponse;

            /**
             * Encodes the specified FlushIndexResponse message. Does not implicitly {@link immudb.schema.FlushIndexResponse.verify|verify} messages.
             * @param message FlushIndexResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IFlushIndexResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FlushIndexResponse message, length delimited. Does not implicitly {@link immudb.schema.FlushIndexResponse.verify|verify} messages.
             * @param message FlushIndexResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IFlushIndexResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FlushIndexResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FlushIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.FlushIndexResponse;

            /**
             * Decodes a FlushIndexResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FlushIndexResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.FlushIndexResponse;

            /**
             * Verifies a FlushIndexResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FlushIndexResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FlushIndexResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.FlushIndexResponse;

            /**
             * Creates a plain object from a FlushIndexResponse message. Also converts values to other types if specified.
             * @param message FlushIndexResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.FlushIndexResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FlushIndexResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FlushIndexResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Table. */
        interface ITable {

            /** Table tableName */
            tableName?: (string|null);
        }

        /** Represents a Table. */
        class Table implements ITable {

            /**
             * Constructs a new Table.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ITable);

            /** Table tableName. */
            public tableName: string;

            /**
             * Creates a new Table instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Table instance
             */
            public static create(properties?: immudb.schema.ITable): immudb.schema.Table;

            /**
             * Encodes the specified Table message. Does not implicitly {@link immudb.schema.Table.verify|verify} messages.
             * @param message Table message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Table message, length delimited. Does not implicitly {@link immudb.schema.Table.verify|verify} messages.
             * @param message Table message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Table message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Table
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Table;

            /**
             * Decodes a Table message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Table
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Table;

            /**
             * Verifies a Table message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Table message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Table
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Table;

            /**
             * Creates a plain object from a Table message. Also converts values to other types if specified.
             * @param message Table
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Table to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Table
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLGetRequest. */
        interface ISQLGetRequest {

            /** SQLGetRequest table */
            table?: (string|null);

            /** SQLGetRequest pkValues */
            pkValues?: (immudb.schema.ISQLValue[]|null);

            /** SQLGetRequest atTx */
            atTx?: (Long|null);

            /** SQLGetRequest sinceTx */
            sinceTx?: (Long|null);
        }

        /** Represents a SQLGetRequest. */
        class SQLGetRequest implements ISQLGetRequest {

            /**
             * Constructs a new SQLGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLGetRequest);

            /** SQLGetRequest table. */
            public table: string;

            /** SQLGetRequest pkValues. */
            public pkValues: immudb.schema.ISQLValue[];

            /** SQLGetRequest atTx. */
            public atTx: Long;

            /** SQLGetRequest sinceTx. */
            public sinceTx: Long;

            /**
             * Creates a new SQLGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLGetRequest instance
             */
            public static create(properties?: immudb.schema.ISQLGetRequest): immudb.schema.SQLGetRequest;

            /**
             * Encodes the specified SQLGetRequest message. Does not implicitly {@link immudb.schema.SQLGetRequest.verify|verify} messages.
             * @param message SQLGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLGetRequest message, length delimited. Does not implicitly {@link immudb.schema.SQLGetRequest.verify|verify} messages.
             * @param message SQLGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLGetRequest;

            /**
             * Decodes a SQLGetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLGetRequest;

            /**
             * Verifies a SQLGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLGetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLGetRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLGetRequest;

            /**
             * Creates a plain object from a SQLGetRequest message. Also converts values to other types if specified.
             * @param message SQLGetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLGetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLGetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableSQLGetRequest. */
        interface IVerifiableSQLGetRequest {

            /** VerifiableSQLGetRequest sqlGetRequest */
            sqlGetRequest?: (immudb.schema.ISQLGetRequest|null);

            /** VerifiableSQLGetRequest proveSinceTx */
            proveSinceTx?: (Long|null);
        }

        /** Represents a VerifiableSQLGetRequest. */
        class VerifiableSQLGetRequest implements IVerifiableSQLGetRequest {

            /**
             * Constructs a new VerifiableSQLGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableSQLGetRequest);

            /** VerifiableSQLGetRequest sqlGetRequest. */
            public sqlGetRequest?: (immudb.schema.ISQLGetRequest|null);

            /** VerifiableSQLGetRequest proveSinceTx. */
            public proveSinceTx: Long;

            /**
             * Creates a new VerifiableSQLGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableSQLGetRequest instance
             */
            public static create(properties?: immudb.schema.IVerifiableSQLGetRequest): immudb.schema.VerifiableSQLGetRequest;

            /**
             * Encodes the specified VerifiableSQLGetRequest message. Does not implicitly {@link immudb.schema.VerifiableSQLGetRequest.verify|verify} messages.
             * @param message VerifiableSQLGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableSQLGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableSQLGetRequest message, length delimited. Does not implicitly {@link immudb.schema.VerifiableSQLGetRequest.verify|verify} messages.
             * @param message VerifiableSQLGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableSQLGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableSQLGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableSQLGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableSQLGetRequest;

            /**
             * Decodes a VerifiableSQLGetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableSQLGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableSQLGetRequest;

            /**
             * Verifies a VerifiableSQLGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableSQLGetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableSQLGetRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableSQLGetRequest;

            /**
             * Creates a plain object from a VerifiableSQLGetRequest message. Also converts values to other types if specified.
             * @param message VerifiableSQLGetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableSQLGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableSQLGetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableSQLGetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLEntry. */
        interface ISQLEntry {

            /** SQLEntry tx */
            tx?: (Long|null);

            /** SQLEntry key */
            key?: (Uint8Array|null);

            /** SQLEntry value */
            value?: (Uint8Array|null);

            /** SQLEntry metadata */
            metadata?: (immudb.schema.IKVMetadata|null);
        }

        /** Represents a SQLEntry. */
        class SQLEntry implements ISQLEntry {

            /**
             * Constructs a new SQLEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLEntry);

            /** SQLEntry tx. */
            public tx: Long;

            /** SQLEntry key. */
            public key: Uint8Array;

            /** SQLEntry value. */
            public value: Uint8Array;

            /** SQLEntry metadata. */
            public metadata?: (immudb.schema.IKVMetadata|null);

            /**
             * Creates a new SQLEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLEntry instance
             */
            public static create(properties?: immudb.schema.ISQLEntry): immudb.schema.SQLEntry;

            /**
             * Encodes the specified SQLEntry message. Does not implicitly {@link immudb.schema.SQLEntry.verify|verify} messages.
             * @param message SQLEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLEntry message, length delimited. Does not implicitly {@link immudb.schema.SQLEntry.verify|verify} messages.
             * @param message SQLEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLEntry;

            /**
             * Decodes a SQLEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLEntry;

            /**
             * Verifies a SQLEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLEntry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLEntry;

            /**
             * Creates a plain object from a SQLEntry message. Also converts values to other types if specified.
             * @param message SQLEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a VerifiableSQLEntry. */
        interface IVerifiableSQLEntry {

            /** VerifiableSQLEntry sqlEntry */
            sqlEntry?: (immudb.schema.ISQLEntry|null);

            /** VerifiableSQLEntry verifiableTx */
            verifiableTx?: (immudb.schema.IVerifiableTx|null);

            /** VerifiableSQLEntry inclusionProof */
            inclusionProof?: (immudb.schema.IInclusionProof|null);

            /** VerifiableSQLEntry DatabaseId */
            DatabaseId?: (number|null);

            /** VerifiableSQLEntry TableId */
            TableId?: (number|null);

            /** VerifiableSQLEntry PKIDs */
            PKIDs?: (number[]|null);

            /** VerifiableSQLEntry ColNamesById */
            ColNamesById?: ({ [k: string]: string }|null);

            /** VerifiableSQLEntry ColIdsByName */
            ColIdsByName?: ({ [k: string]: number }|null);

            /** VerifiableSQLEntry ColTypesById */
            ColTypesById?: ({ [k: string]: string }|null);

            /** VerifiableSQLEntry ColLenById */
            ColLenById?: ({ [k: string]: number }|null);
        }

        /** Represents a VerifiableSQLEntry. */
        class VerifiableSQLEntry implements IVerifiableSQLEntry {

            /**
             * Constructs a new VerifiableSQLEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IVerifiableSQLEntry);

            /** VerifiableSQLEntry sqlEntry. */
            public sqlEntry?: (immudb.schema.ISQLEntry|null);

            /** VerifiableSQLEntry verifiableTx. */
            public verifiableTx?: (immudb.schema.IVerifiableTx|null);

            /** VerifiableSQLEntry inclusionProof. */
            public inclusionProof?: (immudb.schema.IInclusionProof|null);

            /** VerifiableSQLEntry DatabaseId. */
            public DatabaseId: number;

            /** VerifiableSQLEntry TableId. */
            public TableId: number;

            /** VerifiableSQLEntry PKIDs. */
            public PKIDs: number[];

            /** VerifiableSQLEntry ColNamesById. */
            public ColNamesById: { [k: string]: string };

            /** VerifiableSQLEntry ColIdsByName. */
            public ColIdsByName: { [k: string]: number };

            /** VerifiableSQLEntry ColTypesById. */
            public ColTypesById: { [k: string]: string };

            /** VerifiableSQLEntry ColLenById. */
            public ColLenById: { [k: string]: number };

            /**
             * Creates a new VerifiableSQLEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VerifiableSQLEntry instance
             */
            public static create(properties?: immudb.schema.IVerifiableSQLEntry): immudb.schema.VerifiableSQLEntry;

            /**
             * Encodes the specified VerifiableSQLEntry message. Does not implicitly {@link immudb.schema.VerifiableSQLEntry.verify|verify} messages.
             * @param message VerifiableSQLEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IVerifiableSQLEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VerifiableSQLEntry message, length delimited. Does not implicitly {@link immudb.schema.VerifiableSQLEntry.verify|verify} messages.
             * @param message VerifiableSQLEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IVerifiableSQLEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VerifiableSQLEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VerifiableSQLEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.VerifiableSQLEntry;

            /**
             * Decodes a VerifiableSQLEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VerifiableSQLEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.VerifiableSQLEntry;

            /**
             * Verifies a VerifiableSQLEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VerifiableSQLEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VerifiableSQLEntry
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.VerifiableSQLEntry;

            /**
             * Creates a plain object from a VerifiableSQLEntry message. Also converts values to other types if specified.
             * @param message VerifiableSQLEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.VerifiableSQLEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VerifiableSQLEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for VerifiableSQLEntry
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UseDatabaseReply. */
        interface IUseDatabaseReply {

            /** UseDatabaseReply token */
            token?: (string|null);
        }

        /** Represents a UseDatabaseReply. */
        class UseDatabaseReply implements IUseDatabaseReply {

            /**
             * Constructs a new UseDatabaseReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUseDatabaseReply);

            /** UseDatabaseReply token. */
            public token: string;

            /**
             * Creates a new UseDatabaseReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UseDatabaseReply instance
             */
            public static create(properties?: immudb.schema.IUseDatabaseReply): immudb.schema.UseDatabaseReply;

            /**
             * Encodes the specified UseDatabaseReply message. Does not implicitly {@link immudb.schema.UseDatabaseReply.verify|verify} messages.
             * @param message UseDatabaseReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUseDatabaseReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UseDatabaseReply message, length delimited. Does not implicitly {@link immudb.schema.UseDatabaseReply.verify|verify} messages.
             * @param message UseDatabaseReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUseDatabaseReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UseDatabaseReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UseDatabaseReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UseDatabaseReply;

            /**
             * Decodes a UseDatabaseReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UseDatabaseReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UseDatabaseReply;

            /**
             * Verifies a UseDatabaseReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UseDatabaseReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UseDatabaseReply
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UseDatabaseReply;

            /**
             * Creates a plain object from a UseDatabaseReply message. Also converts values to other types if specified.
             * @param message UseDatabaseReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UseDatabaseReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UseDatabaseReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UseDatabaseReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** PermissionAction enum. */
        enum PermissionAction {
            GRANT = 0,
            REVOKE = 1
        }

        /** Properties of a ChangePermissionRequest. */
        interface IChangePermissionRequest {

            /** ChangePermissionRequest action */
            action?: (immudb.schema.PermissionAction|null);

            /** ChangePermissionRequest username */
            username?: (string|null);

            /** ChangePermissionRequest database */
            database?: (string|null);

            /** ChangePermissionRequest permission */
            permission?: (number|null);
        }

        /** Represents a ChangePermissionRequest. */
        class ChangePermissionRequest implements IChangePermissionRequest {

            /**
             * Constructs a new ChangePermissionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IChangePermissionRequest);

            /** ChangePermissionRequest action. */
            public action: immudb.schema.PermissionAction;

            /** ChangePermissionRequest username. */
            public username: string;

            /** ChangePermissionRequest database. */
            public database: string;

            /** ChangePermissionRequest permission. */
            public permission: number;

            /**
             * Creates a new ChangePermissionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangePermissionRequest instance
             */
            public static create(properties?: immudb.schema.IChangePermissionRequest): immudb.schema.ChangePermissionRequest;

            /**
             * Encodes the specified ChangePermissionRequest message. Does not implicitly {@link immudb.schema.ChangePermissionRequest.verify|verify} messages.
             * @param message ChangePermissionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IChangePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangePermissionRequest message, length delimited. Does not implicitly {@link immudb.schema.ChangePermissionRequest.verify|verify} messages.
             * @param message ChangePermissionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IChangePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangePermissionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangePermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ChangePermissionRequest;

            /**
             * Decodes a ChangePermissionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangePermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ChangePermissionRequest;

            /**
             * Verifies a ChangePermissionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangePermissionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangePermissionRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ChangePermissionRequest;

            /**
             * Creates a plain object from a ChangePermissionRequest message. Also converts values to other types if specified.
             * @param message ChangePermissionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ChangePermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangePermissionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangePermissionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetActiveUserRequest. */
        interface ISetActiveUserRequest {

            /** SetActiveUserRequest active */
            active?: (boolean|null);

            /** SetActiveUserRequest username */
            username?: (string|null);
        }

        /** Represents a SetActiveUserRequest. */
        class SetActiveUserRequest implements ISetActiveUserRequest {

            /**
             * Constructs a new SetActiveUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISetActiveUserRequest);

            /** SetActiveUserRequest active. */
            public active: boolean;

            /** SetActiveUserRequest username. */
            public username: string;

            /**
             * Creates a new SetActiveUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetActiveUserRequest instance
             */
            public static create(properties?: immudb.schema.ISetActiveUserRequest): immudb.schema.SetActiveUserRequest;

            /**
             * Encodes the specified SetActiveUserRequest message. Does not implicitly {@link immudb.schema.SetActiveUserRequest.verify|verify} messages.
             * @param message SetActiveUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISetActiveUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetActiveUserRequest message, length delimited. Does not implicitly {@link immudb.schema.SetActiveUserRequest.verify|verify} messages.
             * @param message SetActiveUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISetActiveUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetActiveUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetActiveUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SetActiveUserRequest;

            /**
             * Decodes a SetActiveUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetActiveUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SetActiveUserRequest;

            /**
             * Verifies a SetActiveUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetActiveUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetActiveUserRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SetActiveUserRequest;

            /**
             * Creates a plain object from a SetActiveUserRequest message. Also converts values to other types if specified.
             * @param message SetActiveUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SetActiveUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetActiveUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetActiveUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseListResponse. */
        interface IDatabaseListResponse {

            /** DatabaseListResponse databases */
            databases?: (immudb.schema.IDatabase[]|null);
        }

        /** Represents a DatabaseListResponse. */
        class DatabaseListResponse implements IDatabaseListResponse {

            /**
             * Constructs a new DatabaseListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseListResponse);

            /** DatabaseListResponse databases. */
            public databases: immudb.schema.IDatabase[];

            /**
             * Creates a new DatabaseListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseListResponse instance
             */
            public static create(properties?: immudb.schema.IDatabaseListResponse): immudb.schema.DatabaseListResponse;

            /**
             * Encodes the specified DatabaseListResponse message. Does not implicitly {@link immudb.schema.DatabaseListResponse.verify|verify} messages.
             * @param message DatabaseListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseListResponse message, length delimited. Does not implicitly {@link immudb.schema.DatabaseListResponse.verify|verify} messages.
             * @param message DatabaseListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseListResponse;

            /**
             * Decodes a DatabaseListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseListResponse;

            /**
             * Verifies a DatabaseListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseListResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseListResponse;

            /**
             * Creates a plain object from a DatabaseListResponse message. Also converts values to other types if specified.
             * @param message DatabaseListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseListResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseListRequestV2. */
        interface IDatabaseListRequestV2 {
        }

        /** Represents a DatabaseListRequestV2. */
        class DatabaseListRequestV2 implements IDatabaseListRequestV2 {

            /**
             * Constructs a new DatabaseListRequestV2.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseListRequestV2);

            /**
             * Creates a new DatabaseListRequestV2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseListRequestV2 instance
             */
            public static create(properties?: immudb.schema.IDatabaseListRequestV2): immudb.schema.DatabaseListRequestV2;

            /**
             * Encodes the specified DatabaseListRequestV2 message. Does not implicitly {@link immudb.schema.DatabaseListRequestV2.verify|verify} messages.
             * @param message DatabaseListRequestV2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseListRequestV2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseListRequestV2 message, length delimited. Does not implicitly {@link immudb.schema.DatabaseListRequestV2.verify|verify} messages.
             * @param message DatabaseListRequestV2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseListRequestV2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseListRequestV2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseListRequestV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseListRequestV2;

            /**
             * Decodes a DatabaseListRequestV2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseListRequestV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseListRequestV2;

            /**
             * Verifies a DatabaseListRequestV2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseListRequestV2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseListRequestV2
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseListRequestV2;

            /**
             * Creates a plain object from a DatabaseListRequestV2 message. Also converts values to other types if specified.
             * @param message DatabaseListRequestV2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseListRequestV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseListRequestV2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseListRequestV2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseListResponseV2. */
        interface IDatabaseListResponseV2 {

            /** DatabaseListResponseV2 databases */
            databases?: (immudb.schema.IDatabaseWithSettings[]|null);
        }

        /** Represents a DatabaseListResponseV2. */
        class DatabaseListResponseV2 implements IDatabaseListResponseV2 {

            /**
             * Constructs a new DatabaseListResponseV2.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseListResponseV2);

            /** DatabaseListResponseV2 databases. */
            public databases: immudb.schema.IDatabaseWithSettings[];

            /**
             * Creates a new DatabaseListResponseV2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseListResponseV2 instance
             */
            public static create(properties?: immudb.schema.IDatabaseListResponseV2): immudb.schema.DatabaseListResponseV2;

            /**
             * Encodes the specified DatabaseListResponseV2 message. Does not implicitly {@link immudb.schema.DatabaseListResponseV2.verify|verify} messages.
             * @param message DatabaseListResponseV2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseListResponseV2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseListResponseV2 message, length delimited. Does not implicitly {@link immudb.schema.DatabaseListResponseV2.verify|verify} messages.
             * @param message DatabaseListResponseV2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseListResponseV2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseListResponseV2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseListResponseV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseListResponseV2;

            /**
             * Decodes a DatabaseListResponseV2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseListResponseV2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseListResponseV2;

            /**
             * Verifies a DatabaseListResponseV2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseListResponseV2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseListResponseV2
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseListResponseV2;

            /**
             * Creates a plain object from a DatabaseListResponseV2 message. Also converts values to other types if specified.
             * @param message DatabaseListResponseV2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseListResponseV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseListResponseV2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseListResponseV2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DatabaseWithSettings. */
        interface IDatabaseWithSettings {

            /** DatabaseWithSettings name */
            name?: (string|null);

            /** DatabaseWithSettings settings */
            settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** DatabaseWithSettings loaded */
            loaded?: (boolean|null);
        }

        /** Represents a DatabaseWithSettings. */
        class DatabaseWithSettings implements IDatabaseWithSettings {

            /**
             * Constructs a new DatabaseWithSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDatabaseWithSettings);

            /** DatabaseWithSettings name. */
            public name: string;

            /** DatabaseWithSettings settings. */
            public settings?: (immudb.schema.IDatabaseNullableSettings|null);

            /** DatabaseWithSettings loaded. */
            public loaded: boolean;

            /**
             * Creates a new DatabaseWithSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DatabaseWithSettings instance
             */
            public static create(properties?: immudb.schema.IDatabaseWithSettings): immudb.schema.DatabaseWithSettings;

            /**
             * Encodes the specified DatabaseWithSettings message. Does not implicitly {@link immudb.schema.DatabaseWithSettings.verify|verify} messages.
             * @param message DatabaseWithSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDatabaseWithSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DatabaseWithSettings message, length delimited. Does not implicitly {@link immudb.schema.DatabaseWithSettings.verify|verify} messages.
             * @param message DatabaseWithSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDatabaseWithSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DatabaseWithSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DatabaseWithSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DatabaseWithSettings;

            /**
             * Decodes a DatabaseWithSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DatabaseWithSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DatabaseWithSettings;

            /**
             * Verifies a DatabaseWithSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DatabaseWithSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DatabaseWithSettings
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DatabaseWithSettings;

            /**
             * Creates a plain object from a DatabaseWithSettings message. Also converts values to other types if specified.
             * @param message DatabaseWithSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DatabaseWithSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DatabaseWithSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DatabaseWithSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Chunk. */
        interface IChunk {

            /** Chunk content */
            content?: (Uint8Array|null);
        }

        /** Represents a Chunk. */
        class Chunk implements IChunk {

            /**
             * Constructs a new Chunk.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IChunk);

            /** Chunk content. */
            public content: Uint8Array;

            /**
             * Creates a new Chunk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chunk instance
             */
            public static create(properties?: immudb.schema.IChunk): immudb.schema.Chunk;

            /**
             * Encodes the specified Chunk message. Does not implicitly {@link immudb.schema.Chunk.verify|verify} messages.
             * @param message Chunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Chunk message, length delimited. Does not implicitly {@link immudb.schema.Chunk.verify|verify} messages.
             * @param message Chunk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Chunk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Chunk;

            /**
             * Decodes a Chunk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Chunk;

            /**
             * Verifies a Chunk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Chunk
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Chunk;

            /**
             * Creates a plain object from a Chunk message. Also converts values to other types if specified.
             * @param message Chunk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Chunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Chunk to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Chunk
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UseSnapshotRequest. */
        interface IUseSnapshotRequest {

            /** UseSnapshotRequest sinceTx */
            sinceTx?: (Long|null);

            /** UseSnapshotRequest asBeforeTx */
            asBeforeTx?: (Long|null);
        }

        /** Represents a UseSnapshotRequest. */
        class UseSnapshotRequest implements IUseSnapshotRequest {

            /**
             * Constructs a new UseSnapshotRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IUseSnapshotRequest);

            /** UseSnapshotRequest sinceTx. */
            public sinceTx: Long;

            /** UseSnapshotRequest asBeforeTx. */
            public asBeforeTx: Long;

            /**
             * Creates a new UseSnapshotRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UseSnapshotRequest instance
             */
            public static create(properties?: immudb.schema.IUseSnapshotRequest): immudb.schema.UseSnapshotRequest;

            /**
             * Encodes the specified UseSnapshotRequest message. Does not implicitly {@link immudb.schema.UseSnapshotRequest.verify|verify} messages.
             * @param message UseSnapshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IUseSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UseSnapshotRequest message, length delimited. Does not implicitly {@link immudb.schema.UseSnapshotRequest.verify|verify} messages.
             * @param message UseSnapshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IUseSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UseSnapshotRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UseSnapshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.UseSnapshotRequest;

            /**
             * Decodes a UseSnapshotRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UseSnapshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.UseSnapshotRequest;

            /**
             * Verifies a UseSnapshotRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UseSnapshotRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UseSnapshotRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.UseSnapshotRequest;

            /**
             * Creates a plain object from a UseSnapshotRequest message. Also converts values to other types if specified.
             * @param message UseSnapshotRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.UseSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UseSnapshotRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UseSnapshotRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLExecRequest. */
        interface ISQLExecRequest {

            /** SQLExecRequest sql */
            sql?: (string|null);

            /** SQLExecRequest params */
            params?: (immudb.schema.INamedParam[]|null);

            /** SQLExecRequest noWait */
            noWait?: (boolean|null);
        }

        /** Represents a SQLExecRequest. */
        class SQLExecRequest implements ISQLExecRequest {

            /**
             * Constructs a new SQLExecRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLExecRequest);

            /** SQLExecRequest sql. */
            public sql: string;

            /** SQLExecRequest params. */
            public params: immudb.schema.INamedParam[];

            /** SQLExecRequest noWait. */
            public noWait: boolean;

            /**
             * Creates a new SQLExecRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLExecRequest instance
             */
            public static create(properties?: immudb.schema.ISQLExecRequest): immudb.schema.SQLExecRequest;

            /**
             * Encodes the specified SQLExecRequest message. Does not implicitly {@link immudb.schema.SQLExecRequest.verify|verify} messages.
             * @param message SQLExecRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLExecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLExecRequest message, length delimited. Does not implicitly {@link immudb.schema.SQLExecRequest.verify|verify} messages.
             * @param message SQLExecRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLExecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLExecRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLExecRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLExecRequest;

            /**
             * Decodes a SQLExecRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLExecRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLExecRequest;

            /**
             * Verifies a SQLExecRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLExecRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLExecRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLExecRequest;

            /**
             * Creates a plain object from a SQLExecRequest message. Also converts values to other types if specified.
             * @param message SQLExecRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLExecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLExecRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLExecRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLQueryRequest. */
        interface ISQLQueryRequest {

            /** SQLQueryRequest sql */
            sql?: (string|null);

            /** SQLQueryRequest params */
            params?: (immudb.schema.INamedParam[]|null);

            /** SQLQueryRequest reuseSnapshot */
            reuseSnapshot?: (boolean|null);
        }

        /** Represents a SQLQueryRequest. */
        class SQLQueryRequest implements ISQLQueryRequest {

            /**
             * Constructs a new SQLQueryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLQueryRequest);

            /** SQLQueryRequest sql. */
            public sql: string;

            /** SQLQueryRequest params. */
            public params: immudb.schema.INamedParam[];

            /** SQLQueryRequest reuseSnapshot. */
            public reuseSnapshot: boolean;

            /**
             * Creates a new SQLQueryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLQueryRequest instance
             */
            public static create(properties?: immudb.schema.ISQLQueryRequest): immudb.schema.SQLQueryRequest;

            /**
             * Encodes the specified SQLQueryRequest message. Does not implicitly {@link immudb.schema.SQLQueryRequest.verify|verify} messages.
             * @param message SQLQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLQueryRequest message, length delimited. Does not implicitly {@link immudb.schema.SQLQueryRequest.verify|verify} messages.
             * @param message SQLQueryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLQueryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLQueryRequest;

            /**
             * Decodes a SQLQueryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLQueryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLQueryRequest;

            /**
             * Verifies a SQLQueryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLQueryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLQueryRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLQueryRequest;

            /**
             * Creates a plain object from a SQLQueryRequest message. Also converts values to other types if specified.
             * @param message SQLQueryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLQueryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLQueryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NamedParam. */
        interface INamedParam {

            /** NamedParam name */
            name?: (string|null);

            /** NamedParam value */
            value?: (immudb.schema.ISQLValue|null);
        }

        /** Represents a NamedParam. */
        class NamedParam implements INamedParam {

            /**
             * Constructs a new NamedParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INamedParam);

            /** NamedParam name. */
            public name: string;

            /** NamedParam value. */
            public value?: (immudb.schema.ISQLValue|null);

            /**
             * Creates a new NamedParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedParam instance
             */
            public static create(properties?: immudb.schema.INamedParam): immudb.schema.NamedParam;

            /**
             * Encodes the specified NamedParam message. Does not implicitly {@link immudb.schema.NamedParam.verify|verify} messages.
             * @param message NamedParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INamedParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NamedParam message, length delimited. Does not implicitly {@link immudb.schema.NamedParam.verify|verify} messages.
             * @param message NamedParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INamedParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NamedParam;

            /**
             * Decodes a NamedParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NamedParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NamedParam;

            /**
             * Verifies a NamedParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NamedParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NamedParam
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NamedParam;

            /**
             * Creates a plain object from a NamedParam message. Also converts values to other types if specified.
             * @param message NamedParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NamedParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NamedParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NamedParam
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLExecResult. */
        interface ISQLExecResult {

            /** SQLExecResult txs */
            txs?: (immudb.schema.ICommittedSQLTx[]|null);

            /** SQLExecResult ongoingTx */
            ongoingTx?: (boolean|null);
        }

        /** Represents a SQLExecResult. */
        class SQLExecResult implements ISQLExecResult {

            /**
             * Constructs a new SQLExecResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLExecResult);

            /** SQLExecResult txs. */
            public txs: immudb.schema.ICommittedSQLTx[];

            /** SQLExecResult ongoingTx. */
            public ongoingTx: boolean;

            /**
             * Creates a new SQLExecResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLExecResult instance
             */
            public static create(properties?: immudb.schema.ISQLExecResult): immudb.schema.SQLExecResult;

            /**
             * Encodes the specified SQLExecResult message. Does not implicitly {@link immudb.schema.SQLExecResult.verify|verify} messages.
             * @param message SQLExecResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLExecResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLExecResult message, length delimited. Does not implicitly {@link immudb.schema.SQLExecResult.verify|verify} messages.
             * @param message SQLExecResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLExecResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLExecResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLExecResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLExecResult;

            /**
             * Decodes a SQLExecResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLExecResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLExecResult;

            /**
             * Verifies a SQLExecResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLExecResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLExecResult
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLExecResult;

            /**
             * Creates a plain object from a SQLExecResult message. Also converts values to other types if specified.
             * @param message SQLExecResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLExecResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLExecResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLExecResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommittedSQLTx. */
        interface ICommittedSQLTx {

            /** CommittedSQLTx header */
            header?: (immudb.schema.ITxHeader|null);

            /** CommittedSQLTx updatedRows */
            updatedRows?: (number|null);

            /** CommittedSQLTx lastInsertedPKs */
            lastInsertedPKs?: ({ [k: string]: immudb.schema.ISQLValue }|null);

            /** CommittedSQLTx firstInsertedPKs */
            firstInsertedPKs?: ({ [k: string]: immudb.schema.ISQLValue }|null);
        }

        /** Represents a CommittedSQLTx. */
        class CommittedSQLTx implements ICommittedSQLTx {

            /**
             * Constructs a new CommittedSQLTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ICommittedSQLTx);

            /** CommittedSQLTx header. */
            public header?: (immudb.schema.ITxHeader|null);

            /** CommittedSQLTx updatedRows. */
            public updatedRows: number;

            /** CommittedSQLTx lastInsertedPKs. */
            public lastInsertedPKs: { [k: string]: immudb.schema.ISQLValue };

            /** CommittedSQLTx firstInsertedPKs. */
            public firstInsertedPKs: { [k: string]: immudb.schema.ISQLValue };

            /**
             * Creates a new CommittedSQLTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommittedSQLTx instance
             */
            public static create(properties?: immudb.schema.ICommittedSQLTx): immudb.schema.CommittedSQLTx;

            /**
             * Encodes the specified CommittedSQLTx message. Does not implicitly {@link immudb.schema.CommittedSQLTx.verify|verify} messages.
             * @param message CommittedSQLTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ICommittedSQLTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommittedSQLTx message, length delimited. Does not implicitly {@link immudb.schema.CommittedSQLTx.verify|verify} messages.
             * @param message CommittedSQLTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ICommittedSQLTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommittedSQLTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommittedSQLTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.CommittedSQLTx;

            /**
             * Decodes a CommittedSQLTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommittedSQLTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.CommittedSQLTx;

            /**
             * Verifies a CommittedSQLTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommittedSQLTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommittedSQLTx
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.CommittedSQLTx;

            /**
             * Creates a plain object from a CommittedSQLTx message. Also converts values to other types if specified.
             * @param message CommittedSQLTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.CommittedSQLTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommittedSQLTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommittedSQLTx
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLQueryResult. */
        interface ISQLQueryResult {

            /** SQLQueryResult columns */
            columns?: (immudb.schema.IColumn[]|null);

            /** SQLQueryResult rows */
            rows?: (immudb.schema.IRow[]|null);
        }

        /** Represents a SQLQueryResult. */
        class SQLQueryResult implements ISQLQueryResult {

            /**
             * Constructs a new SQLQueryResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLQueryResult);

            /** SQLQueryResult columns. */
            public columns: immudb.schema.IColumn[];

            /** SQLQueryResult rows. */
            public rows: immudb.schema.IRow[];

            /**
             * Creates a new SQLQueryResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLQueryResult instance
             */
            public static create(properties?: immudb.schema.ISQLQueryResult): immudb.schema.SQLQueryResult;

            /**
             * Encodes the specified SQLQueryResult message. Does not implicitly {@link immudb.schema.SQLQueryResult.verify|verify} messages.
             * @param message SQLQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLQueryResult message, length delimited. Does not implicitly {@link immudb.schema.SQLQueryResult.verify|verify} messages.
             * @param message SQLQueryResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLQueryResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLQueryResult;

            /**
             * Decodes a SQLQueryResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLQueryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLQueryResult;

            /**
             * Verifies a SQLQueryResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLQueryResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLQueryResult
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLQueryResult;

            /**
             * Creates a plain object from a SQLQueryResult message. Also converts values to other types if specified.
             * @param message SQLQueryResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLQueryResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLQueryResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Column. */
        interface IColumn {

            /** Column name */
            name?: (string|null);

            /** Column type */
            type?: (string|null);
        }

        /** Represents a Column. */
        class Column implements IColumn {

            /**
             * Constructs a new Column.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IColumn);

            /** Column name. */
            public name: string;

            /** Column type. */
            public type: string;

            /**
             * Creates a new Column instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Column instance
             */
            public static create(properties?: immudb.schema.IColumn): immudb.schema.Column;

            /**
             * Encodes the specified Column message. Does not implicitly {@link immudb.schema.Column.verify|verify} messages.
             * @param message Column message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Column message, length delimited. Does not implicitly {@link immudb.schema.Column.verify|verify} messages.
             * @param message Column message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Column message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Column
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Column;

            /**
             * Decodes a Column message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Column
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Column;

            /**
             * Verifies a Column message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Column message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Column
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Column;

            /**
             * Creates a plain object from a Column message. Also converts values to other types if specified.
             * @param message Column
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Column to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Column
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Row. */
        interface IRow {

            /** Row columns */
            columns?: (string[]|null);

            /** Row values */
            values?: (immudb.schema.ISQLValue[]|null);
        }

        /** Represents a Row. */
        class Row implements IRow {

            /**
             * Constructs a new Row.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IRow);

            /** Row columns. */
            public columns: string[];

            /** Row values. */
            public values: immudb.schema.ISQLValue[];

            /**
             * Creates a new Row instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Row instance
             */
            public static create(properties?: immudb.schema.IRow): immudb.schema.Row;

            /**
             * Encodes the specified Row message. Does not implicitly {@link immudb.schema.Row.verify|verify} messages.
             * @param message Row message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Row message, length delimited. Does not implicitly {@link immudb.schema.Row.verify|verify} messages.
             * @param message Row message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Row message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Row
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.Row;

            /**
             * Decodes a Row message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Row
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.Row;

            /**
             * Verifies a Row message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Row message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Row
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.Row;

            /**
             * Creates a plain object from a Row message. Also converts values to other types if specified.
             * @param message Row
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Row to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Row
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SQLValue. */
        interface ISQLValue {

            /** SQLValue null */
            "null"?: (google.protobuf.NullValue|null);

            /** SQLValue n */
            n?: (Long|null);

            /** SQLValue s */
            s?: (string|null);

            /** SQLValue b */
            b?: (boolean|null);

            /** SQLValue bs */
            bs?: (Uint8Array|null);

            /** SQLValue ts */
            ts?: (Long|null);
        }

        /** Represents a SQLValue. */
        class SQLValue implements ISQLValue {

            /**
             * Constructs a new SQLValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.ISQLValue);

            /** SQLValue null. */
            public null?: (google.protobuf.NullValue|null);

            /** SQLValue n. */
            public n?: (Long|null);

            /** SQLValue s. */
            public s?: (string|null);

            /** SQLValue b. */
            public b?: (boolean|null);

            /** SQLValue bs. */
            public bs?: (Uint8Array|null);

            /** SQLValue ts. */
            public ts?: (Long|null);

            /** SQLValue value. */
            public value?: ("null"|"n"|"s"|"b"|"bs"|"ts");

            /**
             * Creates a new SQLValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SQLValue instance
             */
            public static create(properties?: immudb.schema.ISQLValue): immudb.schema.SQLValue;

            /**
             * Encodes the specified SQLValue message. Does not implicitly {@link immudb.schema.SQLValue.verify|verify} messages.
             * @param message SQLValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.ISQLValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SQLValue message, length delimited. Does not implicitly {@link immudb.schema.SQLValue.verify|verify} messages.
             * @param message SQLValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.ISQLValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SQLValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SQLValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.SQLValue;

            /**
             * Decodes a SQLValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SQLValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.SQLValue;

            /**
             * Verifies a SQLValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SQLValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SQLValue
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.SQLValue;

            /**
             * Creates a plain object from a SQLValue message. Also converts values to other types if specified.
             * @param message SQLValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.SQLValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SQLValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SQLValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** TxMode enum. */
        enum TxMode {
            ReadOnly = 0,
            WriteOnly = 1,
            ReadWrite = 2
        }

        /** Properties of a NewTxRequest. */
        interface INewTxRequest {

            /** NewTxRequest mode */
            mode?: (immudb.schema.TxMode|null);
        }

        /** Represents a NewTxRequest. */
        class NewTxRequest implements INewTxRequest {

            /**
             * Constructs a new NewTxRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INewTxRequest);

            /** NewTxRequest mode. */
            public mode: immudb.schema.TxMode;

            /**
             * Creates a new NewTxRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewTxRequest instance
             */
            public static create(properties?: immudb.schema.INewTxRequest): immudb.schema.NewTxRequest;

            /**
             * Encodes the specified NewTxRequest message. Does not implicitly {@link immudb.schema.NewTxRequest.verify|verify} messages.
             * @param message NewTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INewTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewTxRequest message, length delimited. Does not implicitly {@link immudb.schema.NewTxRequest.verify|verify} messages.
             * @param message NewTxRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INewTxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewTxRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NewTxRequest;

            /**
             * Decodes a NewTxRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewTxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NewTxRequest;

            /**
             * Verifies a NewTxRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewTxRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewTxRequest
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NewTxRequest;

            /**
             * Creates a plain object from a NewTxRequest message. Also converts values to other types if specified.
             * @param message NewTxRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NewTxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewTxRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NewTxRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NewTxResponse. */
        interface INewTxResponse {

            /** NewTxResponse transactionID */
            transactionID?: (string|null);
        }

        /** Represents a NewTxResponse. */
        class NewTxResponse implements INewTxResponse {

            /**
             * Constructs a new NewTxResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.INewTxResponse);

            /** NewTxResponse transactionID. */
            public transactionID: string;

            /**
             * Creates a new NewTxResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NewTxResponse instance
             */
            public static create(properties?: immudb.schema.INewTxResponse): immudb.schema.NewTxResponse;

            /**
             * Encodes the specified NewTxResponse message. Does not implicitly {@link immudb.schema.NewTxResponse.verify|verify} messages.
             * @param message NewTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.INewTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NewTxResponse message, length delimited. Does not implicitly {@link immudb.schema.NewTxResponse.verify|verify} messages.
             * @param message NewTxResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.INewTxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewTxResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NewTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.NewTxResponse;

            /**
             * Decodes a NewTxResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NewTxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.NewTxResponse;

            /**
             * Verifies a NewTxResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NewTxResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NewTxResponse
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.NewTxResponse;

            /**
             * Creates a plain object from a NewTxResponse message. Also converts values to other types if specified.
             * @param message NewTxResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.NewTxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NewTxResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NewTxResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo code */
            code?: (string|null);

            /** ErrorInfo cause */
            cause?: (string|null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IErrorInfo);

            /** ErrorInfo code. */
            public code: string;

            /** ErrorInfo cause. */
            public cause: string;

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorInfo instance
             */
            public static create(properties?: immudb.schema.IErrorInfo): immudb.schema.ErrorInfo;

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link immudb.schema.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link immudb.schema.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.ErrorInfo;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.ErrorInfo;

            /**
             * Verifies an ErrorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorInfo
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.ErrorInfo;

            /**
             * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
             * @param message ErrorInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ErrorInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DebugInfo. */
        interface IDebugInfo {

            /** DebugInfo stack */
            stack?: (string|null);
        }

        /** Represents a DebugInfo. */
        class DebugInfo implements IDebugInfo {

            /**
             * Constructs a new DebugInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IDebugInfo);

            /** DebugInfo stack. */
            public stack: string;

            /**
             * Creates a new DebugInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DebugInfo instance
             */
            public static create(properties?: immudb.schema.IDebugInfo): immudb.schema.DebugInfo;

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link immudb.schema.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link immudb.schema.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.DebugInfo;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.DebugInfo;

            /**
             * Verifies a DebugInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DebugInfo
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.DebugInfo;

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @param message DebugInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DebugInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DebugInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RetryInfo. */
        interface IRetryInfo {

            /** RetryInfo retryDelay */
            retryDelay?: (number|null);
        }

        /** Represents a RetryInfo. */
        class RetryInfo implements IRetryInfo {

            /**
             * Constructs a new RetryInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: immudb.schema.IRetryInfo);

            /** RetryInfo retryDelay. */
            public retryDelay: number;

            /**
             * Creates a new RetryInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetryInfo instance
             */
            public static create(properties?: immudb.schema.IRetryInfo): immudb.schema.RetryInfo;

            /**
             * Encodes the specified RetryInfo message. Does not implicitly {@link immudb.schema.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: immudb.schema.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link immudb.schema.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: immudb.schema.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): immudb.schema.RetryInfo;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): immudb.schema.RetryInfo;

            /**
             * Verifies a RetryInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RetryInfo
             */
            public static fromObject(object: { [k: string]: any }): immudb.schema.RetryInfo;

            /**
             * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
             * @param message RetryInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: immudb.schema.RetryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RetryInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RetryInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Represents an ImmuService */
        class ImmuService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ImmuService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ImmuService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ImmuService;

            /**
             * Calls ListUsers.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and UserList
             */
            public listUsers(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.ListUsersCallback): void;

            /**
             * Calls ListUsers.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public listUsers(request: google.protobuf.IEmpty): Promise<immudb.schema.UserList>;

            /**
             * Calls CreateUser.
             * @param request CreateUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public createUser(request: immudb.schema.ICreateUserRequest, callback: immudb.schema.ImmuService.CreateUserCallback): void;

            /**
             * Calls CreateUser.
             * @param request CreateUserRequest message or plain object
             * @returns Promise
             */
            public createUser(request: immudb.schema.ICreateUserRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls ChangePassword.
             * @param request ChangePasswordRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public changePassword(request: immudb.schema.IChangePasswordRequest, callback: immudb.schema.ImmuService.ChangePasswordCallback): void;

            /**
             * Calls ChangePassword.
             * @param request ChangePasswordRequest message or plain object
             * @returns Promise
             */
            public changePassword(request: immudb.schema.IChangePasswordRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls ChangePermission.
             * @param request ChangePermissionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public changePermission(request: immudb.schema.IChangePermissionRequest, callback: immudb.schema.ImmuService.ChangePermissionCallback): void;

            /**
             * Calls ChangePermission.
             * @param request ChangePermissionRequest message or plain object
             * @returns Promise
             */
            public changePermission(request: immudb.schema.IChangePermissionRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetActiveUser.
             * @param request SetActiveUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setActiveUser(request: immudb.schema.ISetActiveUserRequest, callback: immudb.schema.ImmuService.SetActiveUserCallback): void;

            /**
             * Calls SetActiveUser.
             * @param request SetActiveUserRequest message or plain object
             * @returns Promise
             */
            public setActiveUser(request: immudb.schema.ISetActiveUserRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls UpdateAuthConfig.
             * @param request AuthConfig message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public updateAuthConfig(request: immudb.schema.IAuthConfig, callback: immudb.schema.ImmuService.UpdateAuthConfigCallback): void;

            /**
             * Calls UpdateAuthConfig.
             * @param request AuthConfig message or plain object
             * @returns Promise
             */
            public updateAuthConfig(request: immudb.schema.IAuthConfig): Promise<google.protobuf.Empty>;

            /**
             * Calls UpdateMTLSConfig.
             * @param request MTLSConfig message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public updateMTLSConfig(request: immudb.schema.IMTLSConfig, callback: immudb.schema.ImmuService.UpdateMTLSConfigCallback): void;

            /**
             * Calls UpdateMTLSConfig.
             * @param request MTLSConfig message or plain object
             * @returns Promise
             */
            public updateMTLSConfig(request: immudb.schema.IMTLSConfig): Promise<google.protobuf.Empty>;

            /**
             * Calls OpenSession.
             * @param request OpenSessionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and OpenSessionResponse
             */
            public openSession(request: immudb.schema.IOpenSessionRequest, callback: immudb.schema.ImmuService.OpenSessionCallback): void;

            /**
             * Calls OpenSession.
             * @param request OpenSessionRequest message or plain object
             * @returns Promise
             */
            public openSession(request: immudb.schema.IOpenSessionRequest): Promise<immudb.schema.OpenSessionResponse>;

            /**
             * Calls CloseSession.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public closeSession(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.CloseSessionCallback): void;

            /**
             * Calls CloseSession.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public closeSession(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls KeepAlive.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public keepAlive(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.KeepAliveCallback): void;

            /**
             * Calls KeepAlive.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public keepAlive(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls NewTx.
             * @param request NewTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NewTxResponse
             */
            public newTx(request: immudb.schema.INewTxRequest, callback: immudb.schema.ImmuService.NewTxCallback): void;

            /**
             * Calls NewTx.
             * @param request NewTxRequest message or plain object
             * @returns Promise
             */
            public newTx(request: immudb.schema.INewTxRequest): Promise<immudb.schema.NewTxResponse>;

            /**
             * Calls Commit.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and CommittedSQLTx
             */
            public commit(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.CommitCallback): void;

            /**
             * Calls Commit.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public commit(request: google.protobuf.IEmpty): Promise<immudb.schema.CommittedSQLTx>;

            /**
             * Calls Rollback.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public rollback(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.RollbackCallback): void;

            /**
             * Calls Rollback.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public rollback(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls TxSQLExec.
             * @param request SQLExecRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public txSQLExec(request: immudb.schema.ISQLExecRequest, callback: immudb.schema.ImmuService.TxSQLExecCallback): void;

            /**
             * Calls TxSQLExec.
             * @param request SQLExecRequest message or plain object
             * @returns Promise
             */
            public txSQLExec(request: immudb.schema.ISQLExecRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls TxSQLQuery.
             * @param request SQLQueryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SQLQueryResult
             */
            public txSQLQuery(request: immudb.schema.ISQLQueryRequest, callback: immudb.schema.ImmuService.TxSQLQueryCallback): void;

            /**
             * Calls TxSQLQuery.
             * @param request SQLQueryRequest message or plain object
             * @returns Promise
             */
            public txSQLQuery(request: immudb.schema.ISQLQueryRequest): Promise<immudb.schema.SQLQueryResult>;

            /**
             * Calls Login.
             * @param request LoginRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoginResponse
             */
            public login(request: immudb.schema.ILoginRequest, callback: immudb.schema.ImmuService.LoginCallback): void;

            /**
             * Calls Login.
             * @param request LoginRequest message or plain object
             * @returns Promise
             */
            public login(request: immudb.schema.ILoginRequest): Promise<immudb.schema.LoginResponse>;

            /**
             * Calls Logout.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public logout(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.LogoutCallback): void;

            /**
             * Calls Logout.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public logout(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls Set.
             * @param request SetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public set(request: immudb.schema.ISetRequest, callback: immudb.schema.ImmuService.SetCallback): void;

            /**
             * Calls Set.
             * @param request SetRequest message or plain object
             * @returns Promise
             */
            public set(request: immudb.schema.ISetRequest): Promise<immudb.schema.TxHeader>;

            /**
             * Calls VerifiableSet.
             * @param request VerifiableSetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableTx
             */
            public verifiableSet(request: immudb.schema.IVerifiableSetRequest, callback: immudb.schema.ImmuService.VerifiableSetCallback): void;

            /**
             * Calls VerifiableSet.
             * @param request VerifiableSetRequest message or plain object
             * @returns Promise
             */
            public verifiableSet(request: immudb.schema.IVerifiableSetRequest): Promise<immudb.schema.VerifiableTx>;

            /**
             * Calls Get.
             * @param request KeyRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Entry
             */
            public get(request: immudb.schema.IKeyRequest, callback: immudb.schema.ImmuService.GetCallback): void;

            /**
             * Calls Get.
             * @param request KeyRequest message or plain object
             * @returns Promise
             */
            public get(request: immudb.schema.IKeyRequest): Promise<immudb.schema.Entry>;

            /**
             * Calls VerifiableGet.
             * @param request VerifiableGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableEntry
             */
            public verifiableGet(request: immudb.schema.IVerifiableGetRequest, callback: immudb.schema.ImmuService.VerifiableGetCallback): void;

            /**
             * Calls VerifiableGet.
             * @param request VerifiableGetRequest message or plain object
             * @returns Promise
             */
            public verifiableGet(request: immudb.schema.IVerifiableGetRequest): Promise<immudb.schema.VerifiableEntry>;

            /**
             * Calls Delete.
             * @param request DeleteKeysRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public delete(request: immudb.schema.IDeleteKeysRequest, callback: immudb.schema.ImmuService.DeleteCallback): void;

            /**
             * Calls Delete.
             * @param request DeleteKeysRequest message or plain object
             * @returns Promise
             */
            public delete(request: immudb.schema.IDeleteKeysRequest): Promise<immudb.schema.TxHeader>;

            /**
             * Calls GetAll.
             * @param request KeyListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Entries
             */
            public getAll(request: immudb.schema.IKeyListRequest, callback: immudb.schema.ImmuService.GetAllCallback): void;

            /**
             * Calls GetAll.
             * @param request KeyListRequest message or plain object
             * @returns Promise
             */
            public getAll(request: immudb.schema.IKeyListRequest): Promise<immudb.schema.Entries>;

            /**
             * Calls ExecAll.
             * @param request ExecAllRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public execAll(request: immudb.schema.IExecAllRequest, callback: immudb.schema.ImmuService.ExecAllCallback): void;

            /**
             * Calls ExecAll.
             * @param request ExecAllRequest message or plain object
             * @returns Promise
             */
            public execAll(request: immudb.schema.IExecAllRequest): Promise<immudb.schema.TxHeader>;

            /**
             * Calls Scan.
             * @param request ScanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Entries
             */
            public scan(request: immudb.schema.IScanRequest, callback: immudb.schema.ImmuService.ScanCallback): void;

            /**
             * Calls Scan.
             * @param request ScanRequest message or plain object
             * @returns Promise
             */
            public scan(request: immudb.schema.IScanRequest): Promise<immudb.schema.Entries>;

            /**
             * Calls Count.
             * @param request KeyPrefix message or plain object
             * @param callback Node-style callback called with the error, if any, and EntryCount
             */
            public count(request: immudb.schema.IKeyPrefix, callback: immudb.schema.ImmuService.CountCallback): void;

            /**
             * Calls Count.
             * @param request KeyPrefix message or plain object
             * @returns Promise
             */
            public count(request: immudb.schema.IKeyPrefix): Promise<immudb.schema.EntryCount>;

            /**
             * Calls CountAll.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and EntryCount
             */
            public countAll(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.CountAllCallback): void;

            /**
             * Calls CountAll.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public countAll(request: google.protobuf.IEmpty): Promise<immudb.schema.EntryCount>;

            /**
             * Calls TxById.
             * @param request TxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Tx
             */
            public txById(request: immudb.schema.ITxRequest, callback: immudb.schema.ImmuService.TxByIdCallback): void;

            /**
             * Calls TxById.
             * @param request TxRequest message or plain object
             * @returns Promise
             */
            public txById(request: immudb.schema.ITxRequest): Promise<immudb.schema.Tx>;

            /**
             * Calls VerifiableTxById.
             * @param request VerifiableTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableTx
             */
            public verifiableTxById(request: immudb.schema.IVerifiableTxRequest, callback: immudb.schema.ImmuService.VerifiableTxByIdCallback): void;

            /**
             * Calls VerifiableTxById.
             * @param request VerifiableTxRequest message or plain object
             * @returns Promise
             */
            public verifiableTxById(request: immudb.schema.IVerifiableTxRequest): Promise<immudb.schema.VerifiableTx>;

            /**
             * Calls TxScan.
             * @param request TxScanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxList
             */
            public txScan(request: immudb.schema.ITxScanRequest, callback: immudb.schema.ImmuService.TxScanCallback): void;

            /**
             * Calls TxScan.
             * @param request TxScanRequest message or plain object
             * @returns Promise
             */
            public txScan(request: immudb.schema.ITxScanRequest): Promise<immudb.schema.TxList>;

            /**
             * Calls History.
             * @param request HistoryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Entries
             */
            public history(request: immudb.schema.IHistoryRequest, callback: immudb.schema.ImmuService.HistoryCallback): void;

            /**
             * Calls History.
             * @param request HistoryRequest message or plain object
             * @returns Promise
             */
            public history(request: immudb.schema.IHistoryRequest): Promise<immudb.schema.Entries>;

            /**
             * Calls Health.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and HealthResponse
             */
            public health(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.HealthCallback): void;

            /**
             * Calls Health.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public health(request: google.protobuf.IEmpty): Promise<immudb.schema.HealthResponse>;

            /**
             * Calls DatabaseHealth.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and DatabaseHealthResponse
             */
            public databaseHealth(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.DatabaseHealthCallback): void;

            /**
             * Calls DatabaseHealth.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public databaseHealth(request: google.protobuf.IEmpty): Promise<immudb.schema.DatabaseHealthResponse>;

            /**
             * Calls CurrentState.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and ImmutableState
             */
            public currentState(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.CurrentStateCallback): void;

            /**
             * Calls CurrentState.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public currentState(request: google.protobuf.IEmpty): Promise<immudb.schema.ImmutableState>;

            /**
             * Calls SetReference.
             * @param request ReferenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public setReference(request: immudb.schema.IReferenceRequest, callback: immudb.schema.ImmuService.SetReferenceCallback): void;

            /**
             * Calls SetReference.
             * @param request ReferenceRequest message or plain object
             * @returns Promise
             */
            public setReference(request: immudb.schema.IReferenceRequest): Promise<immudb.schema.TxHeader>;

            /**
             * Calls VerifiableSetReference.
             * @param request VerifiableReferenceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableTx
             */
            public verifiableSetReference(request: immudb.schema.IVerifiableReferenceRequest, callback: immudb.schema.ImmuService.VerifiableSetReferenceCallback): void;

            /**
             * Calls VerifiableSetReference.
             * @param request VerifiableReferenceRequest message or plain object
             * @returns Promise
             */
            public verifiableSetReference(request: immudb.schema.IVerifiableReferenceRequest): Promise<immudb.schema.VerifiableTx>;

            /**
             * Calls ZAdd.
             * @param request ZAddRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public zAdd(request: immudb.schema.IZAddRequest, callback: immudb.schema.ImmuService.ZAddCallback): void;

            /**
             * Calls ZAdd.
             * @param request ZAddRequest message or plain object
             * @returns Promise
             */
            public zAdd(request: immudb.schema.IZAddRequest): Promise<immudb.schema.TxHeader>;

            /**
             * Calls VerifiableZAdd.
             * @param request VerifiableZAddRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableTx
             */
            public verifiableZAdd(request: immudb.schema.IVerifiableZAddRequest, callback: immudb.schema.ImmuService.VerifiableZAddCallback): void;

            /**
             * Calls VerifiableZAdd.
             * @param request VerifiableZAddRequest message or plain object
             * @returns Promise
             */
            public verifiableZAdd(request: immudb.schema.IVerifiableZAddRequest): Promise<immudb.schema.VerifiableTx>;

            /**
             * Calls ZScan.
             * @param request ZScanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ZEntries
             */
            public zScan(request: immudb.schema.IZScanRequest, callback: immudb.schema.ImmuService.ZScanCallback): void;

            /**
             * Calls ZScan.
             * @param request ZScanRequest message or plain object
             * @returns Promise
             */
            public zScan(request: immudb.schema.IZScanRequest): Promise<immudb.schema.ZEntries>;

            /**
             * Calls CreateDatabase.
             * @param request Database message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public createDatabase(request: immudb.schema.IDatabase, callback: immudb.schema.ImmuService.CreateDatabaseCallback): void;

            /**
             * Calls CreateDatabase.
             * @param request Database message or plain object
             * @returns Promise
             */
            public createDatabase(request: immudb.schema.IDatabase): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateDatabaseWith.
             * @param request DatabaseSettings message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public createDatabaseWith(request: immudb.schema.IDatabaseSettings, callback: immudb.schema.ImmuService.CreateDatabaseWithCallback): void;

            /**
             * Calls CreateDatabaseWith.
             * @param request DatabaseSettings message or plain object
             * @returns Promise
             */
            public createDatabaseWith(request: immudb.schema.IDatabaseSettings): Promise<google.protobuf.Empty>;

            /**
             * Calls CreateDatabaseV2.
             * @param request CreateDatabaseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateDatabaseResponse
             */
            public createDatabaseV2(request: immudb.schema.ICreateDatabaseRequest, callback: immudb.schema.ImmuService.CreateDatabaseV2Callback): void;

            /**
             * Calls CreateDatabaseV2.
             * @param request CreateDatabaseRequest message or plain object
             * @returns Promise
             */
            public createDatabaseV2(request: immudb.schema.ICreateDatabaseRequest): Promise<immudb.schema.CreateDatabaseResponse>;

            /**
             * Calls LoadDatabase.
             * @param request LoadDatabaseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadDatabaseResponse
             */
            public loadDatabase(request: immudb.schema.ILoadDatabaseRequest, callback: immudb.schema.ImmuService.LoadDatabaseCallback): void;

            /**
             * Calls LoadDatabase.
             * @param request LoadDatabaseRequest message or plain object
             * @returns Promise
             */
            public loadDatabase(request: immudb.schema.ILoadDatabaseRequest): Promise<immudb.schema.LoadDatabaseResponse>;

            /**
             * Calls UnloadDatabase.
             * @param request UnloadDatabaseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UnloadDatabaseResponse
             */
            public unloadDatabase(request: immudb.schema.IUnloadDatabaseRequest, callback: immudb.schema.ImmuService.UnloadDatabaseCallback): void;

            /**
             * Calls UnloadDatabase.
             * @param request UnloadDatabaseRequest message or plain object
             * @returns Promise
             */
            public unloadDatabase(request: immudb.schema.IUnloadDatabaseRequest): Promise<immudb.schema.UnloadDatabaseResponse>;

            /**
             * Calls DeleteDatabase.
             * @param request DeleteDatabaseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DeleteDatabaseResponse
             */
            public deleteDatabase(request: immudb.schema.IDeleteDatabaseRequest, callback: immudb.schema.ImmuService.DeleteDatabaseCallback): void;

            /**
             * Calls DeleteDatabase.
             * @param request DeleteDatabaseRequest message or plain object
             * @returns Promise
             */
            public deleteDatabase(request: immudb.schema.IDeleteDatabaseRequest): Promise<immudb.schema.DeleteDatabaseResponse>;

            /**
             * Calls DatabaseList.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and DatabaseListResponse
             */
            public databaseList(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.DatabaseListCallback): void;

            /**
             * Calls DatabaseList.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public databaseList(request: google.protobuf.IEmpty): Promise<immudb.schema.DatabaseListResponse>;

            /**
             * Calls DatabaseListV2.
             * @param request DatabaseListRequestV2 message or plain object
             * @param callback Node-style callback called with the error, if any, and DatabaseListResponseV2
             */
            public databaseListV2(request: immudb.schema.IDatabaseListRequestV2, callback: immudb.schema.ImmuService.DatabaseListV2Callback): void;

            /**
             * Calls DatabaseListV2.
             * @param request DatabaseListRequestV2 message or plain object
             * @returns Promise
             */
            public databaseListV2(request: immudb.schema.IDatabaseListRequestV2): Promise<immudb.schema.DatabaseListResponseV2>;

            /**
             * Calls UseDatabase.
             * @param request Database message or plain object
             * @param callback Node-style callback called with the error, if any, and UseDatabaseReply
             */
            public useDatabase(request: immudb.schema.IDatabase, callback: immudb.schema.ImmuService.UseDatabaseCallback): void;

            /**
             * Calls UseDatabase.
             * @param request Database message or plain object
             * @returns Promise
             */
            public useDatabase(request: immudb.schema.IDatabase): Promise<immudb.schema.UseDatabaseReply>;

            /**
             * Calls UpdateDatabase.
             * @param request DatabaseSettings message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public updateDatabase(request: immudb.schema.IDatabaseSettings, callback: immudb.schema.ImmuService.UpdateDatabaseCallback): void;

            /**
             * Calls UpdateDatabase.
             * @param request DatabaseSettings message or plain object
             * @returns Promise
             */
            public updateDatabase(request: immudb.schema.IDatabaseSettings): Promise<google.protobuf.Empty>;

            /**
             * Calls UpdateDatabaseV2.
             * @param request UpdateDatabaseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UpdateDatabaseResponse
             */
            public updateDatabaseV2(request: immudb.schema.IUpdateDatabaseRequest, callback: immudb.schema.ImmuService.UpdateDatabaseV2Callback): void;

            /**
             * Calls UpdateDatabaseV2.
             * @param request UpdateDatabaseRequest message or plain object
             * @returns Promise
             */
            public updateDatabaseV2(request: immudb.schema.IUpdateDatabaseRequest): Promise<immudb.schema.UpdateDatabaseResponse>;

            /**
             * Calls GetDatabaseSettings.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and DatabaseSettings
             */
            public getDatabaseSettings(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.GetDatabaseSettingsCallback): void;

            /**
             * Calls GetDatabaseSettings.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getDatabaseSettings(request: google.protobuf.IEmpty): Promise<immudb.schema.DatabaseSettings>;

            /**
             * Calls GetDatabaseSettingsV2.
             * @param request DatabaseSettingsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DatabaseSettingsResponse
             */
            public getDatabaseSettingsV2(request: immudb.schema.IDatabaseSettingsRequest, callback: immudb.schema.ImmuService.GetDatabaseSettingsV2Callback): void;

            /**
             * Calls GetDatabaseSettingsV2.
             * @param request DatabaseSettingsRequest message or plain object
             * @returns Promise
             */
            public getDatabaseSettingsV2(request: immudb.schema.IDatabaseSettingsRequest): Promise<immudb.schema.DatabaseSettingsResponse>;

            /**
             * Calls FlushIndex.
             * @param request FlushIndexRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and FlushIndexResponse
             */
            public flushIndex(request: immudb.schema.IFlushIndexRequest, callback: immudb.schema.ImmuService.FlushIndexCallback): void;

            /**
             * Calls FlushIndex.
             * @param request FlushIndexRequest message or plain object
             * @returns Promise
             */
            public flushIndex(request: immudb.schema.IFlushIndexRequest): Promise<immudb.schema.FlushIndexResponse>;

            /**
             * Calls CompactIndex.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public compactIndex(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.CompactIndexCallback): void;

            /**
             * Calls CompactIndex.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public compactIndex(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls streamGet.
             * @param request KeyRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public streamGet(request: immudb.schema.IKeyRequest, callback: immudb.schema.ImmuService.streamGetCallback): void;

            /**
             * Calls streamGet.
             * @param request KeyRequest message or plain object
             * @returns Promise
             */
            public streamGet(request: immudb.schema.IKeyRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls streamSet.
             * @param request Chunk message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public streamSet(request: immudb.schema.IChunk, callback: immudb.schema.ImmuService.streamSetCallback): void;

            /**
             * Calls streamSet.
             * @param request Chunk message or plain object
             * @returns Promise
             */
            public streamSet(request: immudb.schema.IChunk): Promise<immudb.schema.TxHeader>;

            /**
             * Calls streamVerifiableGet.
             * @param request VerifiableGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public streamVerifiableGet(request: immudb.schema.IVerifiableGetRequest, callback: immudb.schema.ImmuService.streamVerifiableGetCallback): void;

            /**
             * Calls streamVerifiableGet.
             * @param request VerifiableGetRequest message or plain object
             * @returns Promise
             */
            public streamVerifiableGet(request: immudb.schema.IVerifiableGetRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls streamVerifiableSet.
             * @param request Chunk message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableTx
             */
            public streamVerifiableSet(request: immudb.schema.IChunk, callback: immudb.schema.ImmuService.streamVerifiableSetCallback): void;

            /**
             * Calls streamVerifiableSet.
             * @param request Chunk message or plain object
             * @returns Promise
             */
            public streamVerifiableSet(request: immudb.schema.IChunk): Promise<immudb.schema.VerifiableTx>;

            /**
             * Calls streamScan.
             * @param request ScanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public streamScan(request: immudb.schema.IScanRequest, callback: immudb.schema.ImmuService.streamScanCallback): void;

            /**
             * Calls streamScan.
             * @param request ScanRequest message or plain object
             * @returns Promise
             */
            public streamScan(request: immudb.schema.IScanRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls streamZScan.
             * @param request ZScanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public streamZScan(request: immudb.schema.IZScanRequest, callback: immudb.schema.ImmuService.streamZScanCallback): void;

            /**
             * Calls streamZScan.
             * @param request ZScanRequest message or plain object
             * @returns Promise
             */
            public streamZScan(request: immudb.schema.IZScanRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls streamHistory.
             * @param request HistoryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public streamHistory(request: immudb.schema.IHistoryRequest, callback: immudb.schema.ImmuService.streamHistoryCallback): void;

            /**
             * Calls streamHistory.
             * @param request HistoryRequest message or plain object
             * @returns Promise
             */
            public streamHistory(request: immudb.schema.IHistoryRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls streamExecAll.
             * @param request Chunk message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public streamExecAll(request: immudb.schema.IChunk, callback: immudb.schema.ImmuService.streamExecAllCallback): void;

            /**
             * Calls streamExecAll.
             * @param request Chunk message or plain object
             * @returns Promise
             */
            public streamExecAll(request: immudb.schema.IChunk): Promise<immudb.schema.TxHeader>;

            /**
             * Calls exportTx.
             * @param request ExportTxRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Chunk
             */
            public exportTx(request: immudb.schema.IExportTxRequest, callback: immudb.schema.ImmuService.exportTxCallback): void;

            /**
             * Calls exportTx.
             * @param request ExportTxRequest message or plain object
             * @returns Promise
             */
            public exportTx(request: immudb.schema.IExportTxRequest): Promise<immudb.schema.Chunk>;

            /**
             * Calls replicateTx.
             * @param request Chunk message or plain object
             * @param callback Node-style callback called with the error, if any, and TxHeader
             */
            public replicateTx(request: immudb.schema.IChunk, callback: immudb.schema.ImmuService.replicateTxCallback): void;

            /**
             * Calls replicateTx.
             * @param request Chunk message or plain object
             * @returns Promise
             */
            public replicateTx(request: immudb.schema.IChunk): Promise<immudb.schema.TxHeader>;

            /**
             * Calls SQLExec.
             * @param request SQLExecRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SQLExecResult
             */
            public sQLExec(request: immudb.schema.ISQLExecRequest, callback: immudb.schema.ImmuService.SQLExecCallback): void;

            /**
             * Calls SQLExec.
             * @param request SQLExecRequest message or plain object
             * @returns Promise
             */
            public sQLExec(request: immudb.schema.ISQLExecRequest): Promise<immudb.schema.SQLExecResult>;

            /**
             * Calls SQLQuery.
             * @param request SQLQueryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SQLQueryResult
             */
            public sQLQuery(request: immudb.schema.ISQLQueryRequest, callback: immudb.schema.ImmuService.SQLQueryCallback): void;

            /**
             * Calls SQLQuery.
             * @param request SQLQueryRequest message or plain object
             * @returns Promise
             */
            public sQLQuery(request: immudb.schema.ISQLQueryRequest): Promise<immudb.schema.SQLQueryResult>;

            /**
             * Calls ListTables.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and SQLQueryResult
             */
            public listTables(request: google.protobuf.IEmpty, callback: immudb.schema.ImmuService.ListTablesCallback): void;

            /**
             * Calls ListTables.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public listTables(request: google.protobuf.IEmpty): Promise<immudb.schema.SQLQueryResult>;

            /**
             * Calls DescribeTable.
             * @param request Table message or plain object
             * @param callback Node-style callback called with the error, if any, and SQLQueryResult
             */
            public describeTable(request: immudb.schema.ITable, callback: immudb.schema.ImmuService.DescribeTableCallback): void;

            /**
             * Calls DescribeTable.
             * @param request Table message or plain object
             * @returns Promise
             */
            public describeTable(request: immudb.schema.ITable): Promise<immudb.schema.SQLQueryResult>;

            /**
             * Calls VerifiableSQLGet.
             * @param request VerifiableSQLGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VerifiableSQLEntry
             */
            public verifiableSQLGet(request: immudb.schema.IVerifiableSQLGetRequest, callback: immudb.schema.ImmuService.VerifiableSQLGetCallback): void;

            /**
             * Calls VerifiableSQLGet.
             * @param request VerifiableSQLGetRequest message or plain object
             * @returns Promise
             */
            public verifiableSQLGet(request: immudb.schema.IVerifiableSQLGetRequest): Promise<immudb.schema.VerifiableSQLEntry>;
        }

        namespace ImmuService {

            /**
             * Callback as used by {@link immudb.schema.ImmuService#listUsers}.
             * @param error Error, if any
             * @param [response] UserList
             */
            type ListUsersCallback = (error: (Error|null), response?: immudb.schema.UserList) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#createUser}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CreateUserCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#changePassword}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ChangePasswordCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#changePermission}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ChangePermissionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#setActiveUser}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetActiveUserCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#updateAuthConfig}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type UpdateAuthConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#updateMTLSConfig}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type UpdateMTLSConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#openSession}.
             * @param error Error, if any
             * @param [response] OpenSessionResponse
             */
            type OpenSessionCallback = (error: (Error|null), response?: immudb.schema.OpenSessionResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#closeSession}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CloseSessionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#keepAlive}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type KeepAliveCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#newTx}.
             * @param error Error, if any
             * @param [response] NewTxResponse
             */
            type NewTxCallback = (error: (Error|null), response?: immudb.schema.NewTxResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#commit}.
             * @param error Error, if any
             * @param [response] CommittedSQLTx
             */
            type CommitCallback = (error: (Error|null), response?: immudb.schema.CommittedSQLTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#rollback}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type RollbackCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#txSQLExec}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type TxSQLExecCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#txSQLQuery}.
             * @param error Error, if any
             * @param [response] SQLQueryResult
             */
            type TxSQLQueryCallback = (error: (Error|null), response?: immudb.schema.SQLQueryResult) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#login}.
             * @param error Error, if any
             * @param [response] LoginResponse
             */
            type LoginCallback = (error: (Error|null), response?: immudb.schema.LoginResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#logout}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type LogoutCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#set}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type SetCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableSet}.
             * @param error Error, if any
             * @param [response] VerifiableTx
             */
            type VerifiableSetCallback = (error: (Error|null), response?: immudb.schema.VerifiableTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#get}.
             * @param error Error, if any
             * @param [response] Entry
             */
            type GetCallback = (error: (Error|null), response?: immudb.schema.Entry) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableGet}.
             * @param error Error, if any
             * @param [response] VerifiableEntry
             */
            type VerifiableGetCallback = (error: (Error|null), response?: immudb.schema.VerifiableEntry) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#delete_}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type DeleteCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#getAll}.
             * @param error Error, if any
             * @param [response] Entries
             */
            type GetAllCallback = (error: (Error|null), response?: immudb.schema.Entries) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#execAll}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type ExecAllCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#scan}.
             * @param error Error, if any
             * @param [response] Entries
             */
            type ScanCallback = (error: (Error|null), response?: immudb.schema.Entries) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#count}.
             * @param error Error, if any
             * @param [response] EntryCount
             */
            type CountCallback = (error: (Error|null), response?: immudb.schema.EntryCount) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#countAll}.
             * @param error Error, if any
             * @param [response] EntryCount
             */
            type CountAllCallback = (error: (Error|null), response?: immudb.schema.EntryCount) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#txById}.
             * @param error Error, if any
             * @param [response] Tx
             */
            type TxByIdCallback = (error: (Error|null), response?: immudb.schema.Tx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableTxById}.
             * @param error Error, if any
             * @param [response] VerifiableTx
             */
            type VerifiableTxByIdCallback = (error: (Error|null), response?: immudb.schema.VerifiableTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#txScan}.
             * @param error Error, if any
             * @param [response] TxList
             */
            type TxScanCallback = (error: (Error|null), response?: immudb.schema.TxList) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#history}.
             * @param error Error, if any
             * @param [response] Entries
             */
            type HistoryCallback = (error: (Error|null), response?: immudb.schema.Entries) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#health}.
             * @param error Error, if any
             * @param [response] HealthResponse
             */
            type HealthCallback = (error: (Error|null), response?: immudb.schema.HealthResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#databaseHealth}.
             * @param error Error, if any
             * @param [response] DatabaseHealthResponse
             */
            type DatabaseHealthCallback = (error: (Error|null), response?: immudb.schema.DatabaseHealthResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#currentState}.
             * @param error Error, if any
             * @param [response] ImmutableState
             */
            type CurrentStateCallback = (error: (Error|null), response?: immudb.schema.ImmutableState) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#setReference}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type SetReferenceCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableSetReference}.
             * @param error Error, if any
             * @param [response] VerifiableTx
             */
            type VerifiableSetReferenceCallback = (error: (Error|null), response?: immudb.schema.VerifiableTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#zAdd}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type ZAddCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableZAdd}.
             * @param error Error, if any
             * @param [response] VerifiableTx
             */
            type VerifiableZAddCallback = (error: (Error|null), response?: immudb.schema.VerifiableTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#zScan}.
             * @param error Error, if any
             * @param [response] ZEntries
             */
            type ZScanCallback = (error: (Error|null), response?: immudb.schema.ZEntries) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#createDatabase}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CreateDatabaseCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#createDatabaseWith}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CreateDatabaseWithCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#createDatabaseV2}.
             * @param error Error, if any
             * @param [response] CreateDatabaseResponse
             */
            type CreateDatabaseV2Callback = (error: (Error|null), response?: immudb.schema.CreateDatabaseResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#loadDatabase}.
             * @param error Error, if any
             * @param [response] LoadDatabaseResponse
             */
            type LoadDatabaseCallback = (error: (Error|null), response?: immudb.schema.LoadDatabaseResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#unloadDatabase}.
             * @param error Error, if any
             * @param [response] UnloadDatabaseResponse
             */
            type UnloadDatabaseCallback = (error: (Error|null), response?: immudb.schema.UnloadDatabaseResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#deleteDatabase}.
             * @param error Error, if any
             * @param [response] DeleteDatabaseResponse
             */
            type DeleteDatabaseCallback = (error: (Error|null), response?: immudb.schema.DeleteDatabaseResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#databaseList}.
             * @param error Error, if any
             * @param [response] DatabaseListResponse
             */
            type DatabaseListCallback = (error: (Error|null), response?: immudb.schema.DatabaseListResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#databaseListV2}.
             * @param error Error, if any
             * @param [response] DatabaseListResponseV2
             */
            type DatabaseListV2Callback = (error: (Error|null), response?: immudb.schema.DatabaseListResponseV2) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#useDatabase}.
             * @param error Error, if any
             * @param [response] UseDatabaseReply
             */
            type UseDatabaseCallback = (error: (Error|null), response?: immudb.schema.UseDatabaseReply) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#updateDatabase}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type UpdateDatabaseCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#updateDatabaseV2}.
             * @param error Error, if any
             * @param [response] UpdateDatabaseResponse
             */
            type UpdateDatabaseV2Callback = (error: (Error|null), response?: immudb.schema.UpdateDatabaseResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#getDatabaseSettings}.
             * @param error Error, if any
             * @param [response] DatabaseSettings
             */
            type GetDatabaseSettingsCallback = (error: (Error|null), response?: immudb.schema.DatabaseSettings) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#getDatabaseSettingsV2}.
             * @param error Error, if any
             * @param [response] DatabaseSettingsResponse
             */
            type GetDatabaseSettingsV2Callback = (error: (Error|null), response?: immudb.schema.DatabaseSettingsResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#flushIndex}.
             * @param error Error, if any
             * @param [response] FlushIndexResponse
             */
            type FlushIndexCallback = (error: (Error|null), response?: immudb.schema.FlushIndexResponse) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#compactIndex}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CompactIndexCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamGet}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type streamGetCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamSet}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type streamSetCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamVerifiableGet}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type streamVerifiableGetCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamVerifiableSet}.
             * @param error Error, if any
             * @param [response] VerifiableTx
             */
            type streamVerifiableSetCallback = (error: (Error|null), response?: immudb.schema.VerifiableTx) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamScan}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type streamScanCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamZScan}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type streamZScanCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamHistory}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type streamHistoryCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#streamExecAll}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type streamExecAllCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#exportTx}.
             * @param error Error, if any
             * @param [response] Chunk
             */
            type exportTxCallback = (error: (Error|null), response?: immudb.schema.Chunk) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#replicateTx}.
             * @param error Error, if any
             * @param [response] TxHeader
             */
            type replicateTxCallback = (error: (Error|null), response?: immudb.schema.TxHeader) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#sQLExec}.
             * @param error Error, if any
             * @param [response] SQLExecResult
             */
            type SQLExecCallback = (error: (Error|null), response?: immudb.schema.SQLExecResult) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#sQLQuery}.
             * @param error Error, if any
             * @param [response] SQLQueryResult
             */
            type SQLQueryCallback = (error: (Error|null), response?: immudb.schema.SQLQueryResult) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#listTables}.
             * @param error Error, if any
             * @param [response] SQLQueryResult
             */
            type ListTablesCallback = (error: (Error|null), response?: immudb.schema.SQLQueryResult) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#describeTable}.
             * @param error Error, if any
             * @param [response] SQLQueryResult
             */
            type DescribeTableCallback = (error: (Error|null), response?: immudb.schema.SQLQueryResult) => void;

            /**
             * Callback as used by {@link immudb.schema.ImmuService#verifiableSQLGet}.
             * @param error Error, if any
             * @param [response] VerifiableSQLEntry
             */
            type VerifiableSQLGetCallback = (error: (Error|null), response?: immudb.schema.VerifiableSQLEntry) => void;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
