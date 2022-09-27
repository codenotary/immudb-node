[immudb-node](../README.md) / [Exports](../modules.md) / [common/errors](../modules/common_errors.md) / NoResponseValueError

# Class: NoResponseValueError

[common/errors](../modules/common_errors.md).NoResponseValueError

## Hierarchy

- [`ImmudbClientError`](common_errors.ImmudbClientError.md)

  ↳ **`NoResponseValueError`**

## Table of contents

### Constructors

- [constructor](common_errors.NoResponseValueError.md#constructor)

### Properties

- [data](common_errors.NoResponseValueError.md#data)
- [message](common_errors.NoResponseValueError.md#message)
- [name](common_errors.NoResponseValueError.md#name)
- [stack](common_errors.NoResponseValueError.md#stack)
- [prepareStackTrace](common_errors.NoResponseValueError.md#preparestacktrace)
- [stackTraceLimit](common_errors.NoResponseValueError.md#stacktracelimit)

### Methods

- [captureStackTrace](common_errors.NoResponseValueError.md#capturestacktrace)

## Constructors

### constructor

• **new NoResponseValueError**(`message`, `info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `info` | `any` |

#### Overrides

[ImmudbClientError](common_errors.ImmudbClientError.md).[constructor](common_errors.ImmudbClientError.md#constructor)

#### Defined in

[immudb-node/src/common/errors.ts:26](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/errors.ts#L26)

## Properties

### data

• **data**: `any`

#### Defined in

[immudb-node/src/common/errors.ts:25](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/errors.ts#L25)

___

### message

• **message**: `string`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[message](common_errors.ImmudbClientError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[name](common_errors.ImmudbClientError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[stack](common_errors.ImmudbClientError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[prepareStackTrace](common_errors.ImmudbClientError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[stackTraceLimit](common_errors.ImmudbClientError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ImmudbClientError](common_errors.ImmudbClientError.md).[captureStackTrace](common_errors.ImmudbClientError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
