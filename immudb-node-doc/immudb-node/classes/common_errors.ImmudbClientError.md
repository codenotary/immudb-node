[immudb-node](../README.md) / [Exports](../modules.md) / [common/errors](../modules/common_errors.md) / ImmudbClientError

# Class: ImmudbClientError

[common/errors](../modules/common_errors.md).ImmudbClientError

## Hierarchy

- `Error`

  ↳ **`ImmudbClientError`**

  ↳↳ [`InternalError`](common_errors.InternalError.md)

  ↳↳ [`NoResponseValueError`](common_errors.NoResponseValueError.md)

  ↳↳ [`OperationCanceledError`](common_errors.OperationCanceledError.md)

## Table of contents

### Constructors

- [constructor](common_errors.ImmudbClientError.md#constructor)

### Properties

- [message](common_errors.ImmudbClientError.md#message)
- [name](common_errors.ImmudbClientError.md#name)
- [stack](common_errors.ImmudbClientError.md#stack)
- [prepareStackTrace](common_errors.ImmudbClientError.md#preparestacktrace)
- [stackTraceLimit](common_errors.ImmudbClientError.md#stacktracelimit)

### Methods

- [captureStackTrace](common_errors.ImmudbClientError.md#capturestacktrace)

## Constructors

### constructor

• **new ImmudbClientError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[immudb-node/src/common/errors.ts:4](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/errors.ts#L4)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
