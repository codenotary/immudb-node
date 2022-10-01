[immudb-node](../README.md) / [Exports](../modules.md) / immu-kvm-entry

# Module: immu-kvm-entry

## Table of contents

### Functions

- [kvmToGrpcKeyValue](immu_kvm_entry.md#kvmtogrpckeyvalue)
- [kvmToValEntry](immu_kvm_entry.md#kvmtovalentry)
- [kvmToValTxEntry](immu_kvm_entry.md#kvmtovaltxentry)

## Functions

### kvmToGrpcKeyValue

▸ **kvmToGrpcKeyValue**(`props`): `igrpc.KeyValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta) |

#### Returns

`igrpc.KeyValue`

#### Defined in

[immudb-node/src/immu-kvm-entry/index.ts:44](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-kvm-entry/index.ts#L44)

___

### kvmToValEntry

▸ **kvmToValEntry**(`kvm`): [`ValEntry`](types_Entry.md#valentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kvm` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta) |

#### Returns

[`ValEntry`](types_Entry.md#valentry)

#### Defined in

[immudb-node/src/immu-kvm-entry/index.ts:24](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-kvm-entry/index.ts#L24)

___

### kvmToValTxEntry

▸ **kvmToValTxEntry**(`kvm`, `txId`): [`ValTxEntry`](types_TxEntry.md#valtxentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kvm` | [`KeyValMeta`](types_KeyValMeta.md#keyvalmeta) |
| `txId` | `Long` |

#### Returns

[`ValTxEntry`](types_TxEntry.md#valtxentry)

#### Defined in

[immudb-node/src/immu-kvm-entry/index.ts:7](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-kvm-entry/index.ts#L7)
