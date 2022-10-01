[immudb-node](../README.md) / [Exports](../modules.md) / immu-client

# Module: immu-client

## Table of contents

### Classes

- [Client](../classes/immu_client.Client.md)

### Type Aliases

- [Config](immu_client.md#config)

### Variables

- [devConfig](immu_client.md#devconfig)

## Type Aliases

### Config

Ƭ **Config**: `Object`

Session configuration.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `database` | `string` | Immudb server instance database name. |
| `host` | `string` | Immudb server host address. |
| `password` | `string` | Immudb server instance user password. |
| `port?` | `number` | Immudb server port number. |
| `user` | `string` | Immudb server instance user name. |

#### Defined in

[immudb-node/src/immu-client.ts:1021](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-client.ts#L1021)

## Variables

### devConfig

• `Const` **devConfig**: [`Config`](immu_client.md#config)

Config for local develpoment.

#### Defined in

[immudb-node/src/immu-client.ts:1047](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-client.ts#L1047)
