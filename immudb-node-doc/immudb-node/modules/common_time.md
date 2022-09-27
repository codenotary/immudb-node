[immudb-node](../README.md) / [Exports](../modules.md) / common/time

# Module: common/time

## Table of contents

### Functions

- [dateFromLong](common_time.md#datefromlong)
- [maybeDateFromLong](common_time.md#maybedatefromlong)
- [unixTimeNowAfterMS](common_time.md#unixtimenowafterms)

## Functions

### dateFromLong

▸ **dateFromLong**(`unixSeconds`): `Date`

Creates Date from seconds since midnight, January 1, 1970 UTC.
(JS Date object can be constructed from milliseconds)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unixSeconds` | `Long` | seconds encoded as UInt64, only lower 32bits are used. |

#### Returns

`Date`

#### Defined in

[immudb-node/src/common/time.ts:27](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/time.ts#L27)

___

### maybeDateFromLong

▸ **maybeDateFromLong**(`unixSeconds?`): `Date` \| `undefined`

Computes Date object from low part of `unixSeconds` as Long value
if value have only low part. If value is `undefined` or have high part
returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unixSeconds?` | `Long` |

#### Returns

`Date` \| `undefined`

#### Defined in

[immudb-node/src/common/time.ts:18](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/time.ts#L18)

___

### unixTimeNowAfterMS

▸ **unixTimeNowAfterMS**(`miliSeconds?`): `number` \| `undefined`

Computes `now()` + `miliSeconds` as 
milli seconds after unix epoch. If `miliSeconds` is
`undefined` returns `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `miliSeconds?` | `number` |

#### Returns

`number` \| `undefined`

#### Defined in

[immudb-node/src/common/time.ts:9](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/common/time.ts#L9)
