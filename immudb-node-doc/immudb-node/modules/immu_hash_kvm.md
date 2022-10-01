[immudb-node](../README.md) / [Exports](../modules.md) / immu-hash/kvm

# Module: immu-hash/kvm

## Table of contents

### Functions

- [hashOfKeyValMeta](immu_hash_kvm.md#hashofkeyvalmeta)

## Functions

### hashOfKeyValMeta

▸ **hashOfKeyValMeta**(`props`): `Buffer`

Hashes value entry in immu.KeyValMeta representation:
- metadata binary format length as UInt16 BE
- metadata binary
- key prefix length plus key length as UInt16 BE
- key prefix (0x00)
- key
- hash of value prefix and value:
  - value prefix (0x00)
  - value

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-hash/kvm.ts:19](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-hash/kvm.ts#L19)
