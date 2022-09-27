[immudb-node](../README.md) / [Exports](../modules.md) / types/SQL

# Module: types/SQL

## Table of contents

### Type Aliases

- [SqlNamedValue](types_SQL.md#sqlnamedvalue)
- [SqlValBin](types_SQL.md#sqlvalbin)
- [SqlValNameTypeVal](types_SQL.md#sqlvalnametypeval)
- [SqlValTypeVal](types_SQL.md#sqlvaltypeval)
- [SqlValTypeValBlob](types_SQL.md#sqlvaltypevalblob)
- [SqlValTypeValBool](types_SQL.md#sqlvaltypevalbool)
- [SqlValTypeValChar](types_SQL.md#sqlvaltypevalchar)
- [SqlValTypeValInt](types_SQL.md#sqlvaltypevalint)
- [SqlValTypeValNull](types_SQL.md#sqlvaltypevalnull)
- [SqlValTypeValTime](types_SQL.md#sqlvaltypevaltime)
- [SqlValue](types_SQL.md#sqlvalue)

## Type Aliases

### SqlNamedValue

Ƭ **SqlNamedValue**: { `name`: `string` ; `type`: ``"BOOLEAN"`` ; `value`: `boolean`  } \| { `name`: `string` ; `type`: ``"TIMESTAMP"`` ; `value`: `Long`  } \| { `name`: `string` ; `type`: ``"BLOB"`` ; `value`: `Buffer`  } \| { `name`: `string` ; `type`: ``"INTEGER"`` ; `value`: `Long`  } \| { `name`: `string` ; `type`: ``"VARCHAR"`` ; `value`: `string`  } \| { `name`: `string` ; `type`: ``"NULL"``  }

#### Defined in

[immudb-node/src/types/SQL.ts:53](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L53)

___

### SqlValBin

Ƭ **SqlValBin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bin` | `Buffer` |
| `id` | `number` |

#### Defined in

[immudb-node/src/types/SQL.ts:5](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L5)

___

### SqlValNameTypeVal

Ƭ **SqlValNameTypeVal**: [`SqlValTypeVal`](types_SQL.md#sqlvaltypeval) & { `name`: `string`  }

#### Defined in

[immudb-node/src/types/SQL.ts:46](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L46)

___

### SqlValTypeVal

Ƭ **SqlValTypeVal**: [`SqlValTypeValBool`](types_SQL.md#sqlvaltypevalbool) \| [`SqlValTypeValTime`](types_SQL.md#sqlvaltypevaltime) \| [`SqlValTypeValBlob`](types_SQL.md#sqlvaltypevalblob) \| [`SqlValTypeValInt`](types_SQL.md#sqlvaltypevalint) \| [`SqlValTypeValChar`](types_SQL.md#sqlvaltypevalchar) \| [`SqlValTypeValNull`](types_SQL.md#sqlvaltypevalnull)

#### Defined in

[immudb-node/src/types/SQL.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L11)

___

### SqlValTypeValBlob

Ƭ **SqlValTypeValBlob**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"BLOB"`` |
| `val` | `Buffer` |

#### Defined in

[immudb-node/src/types/SQL.ts:28](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L28)

___

### SqlValTypeValBool

Ƭ **SqlValTypeValBool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"BOOLEAN"`` |
| `val` | `boolean` |

#### Defined in

[immudb-node/src/types/SQL.ts:20](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L20)

___

### SqlValTypeValChar

Ƭ **SqlValTypeValChar**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"VARCHAR"`` |
| `val` | `string` |

#### Defined in

[immudb-node/src/types/SQL.ts:36](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L36)

___

### SqlValTypeValInt

Ƭ **SqlValTypeValInt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"INTEGER"`` |
| `val` | `Long` |

#### Defined in

[immudb-node/src/types/SQL.ts:32](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L32)

___

### SqlValTypeValNull

Ƭ **SqlValTypeValNull**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"NULL"`` |

#### Defined in

[immudb-node/src/types/SQL.ts:40](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L40)

___

### SqlValTypeValTime

Ƭ **SqlValTypeValTime**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"TIMESTAMP"`` |
| `val` | `Long` |

#### Defined in

[immudb-node/src/types/SQL.ts:24](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L24)

___

### SqlValue

Ƭ **SqlValue**: { `type`: ``"BOOLEAN"`` ; `value`: `boolean`  } \| { `type`: ``"TIMESTAMP"`` ; `value`: `Long`  } \| { `type`: ``"BLOB"`` ; `value`: `Buffer`  } \| { `type`: ``"INTEGER"`` ; `value`: `Long`  } \| { `type`: ``"VARCHAR"`` ; `value`: `string`  } \| { `type`: ``"NULL"``  }

#### Defined in

[immudb-node/src/types/SQL.ts:61](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/SQL.ts#L61)
