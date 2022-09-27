[immudb-node](../README.md) / [Exports](../modules.md) / types/ExtendedJSONAble

# Module: types/ExtendedJSONAble

## Table of contents

### Type Aliases

- [ExtendedJSONAble](types_ExtendedJSONAble.md#extendedjsonable)

## Type Aliases

### ExtendedJSONAble

Ƭ **ExtendedJSONAble**: `string` \| `number` \| `boolean` \| `Long` \| `Buffer` \| [`ExtendedJSONAble`](types_ExtendedJSONAble.md#extendedjsonable)[] \| { `[x: string]`: [`ExtendedJSONAble`](types_ExtendedJSONAble.md#extendedjsonable);  }

Recursive type representing object that can be serialized/deserialized
to/from Buffer and used as key or values.

This type extends normal node JSON with additional primitives for:
- Buffer
- and Long

This type is used by [toObject](buffer.md#toobject) and [fromObject](buffer.md#fromobject) functions.

#### Defined in

[immudb-node/src/types/ExtendedJSONAble.ts:16](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/types/ExtendedJSONAble.ts#L16)
