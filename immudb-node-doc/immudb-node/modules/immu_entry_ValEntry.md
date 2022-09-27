[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/ValEntry

# Module: immu-entry/ValEntry

## Table of contents

### Functions

- [binEntryKeyToValEntryKey](immu_entry_ValEntry.md#binentrykeytovalentrykey)
- [binEntryToValEntry](immu_entry_ValEntry.md#binentrytovalentry)
- [binEntryValToValEntryVal](immu_entry_ValEntry.md#binentryvaltovalentryval)
- [valEntryToBinEntry](immu_entry_ValEntry.md#valentrytobinentry)
- [valEntryToLeafEntryPrefixedKey](immu_entry_ValEntry.md#valentrytoleafentryprefixedkey)

## Functions

### binEntryKeyToValEntryKey

▸ **binEntryKeyToValEntryKey**(`keyBytes`, `offset?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyBytes` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/ValEntry.ts:45](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/ValEntry.ts#L45)

___

### binEntryToValEntry

▸ **binEntryToValEntry**(`props`): [`ValEntry`](types_Entry.md#valentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`ValEntry`](types_Entry.md#valentry)

#### Defined in

[immudb-node/src/immu-entry/ValEntry.ts:9](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/ValEntry.ts#L9)

___

### binEntryValToValEntryVal

▸ **binEntryValToValEntryVal**(`valBytes`, `offset?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valBytes` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/ValEntry.ts:56](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/ValEntry.ts#L56)

___

### valEntryToBinEntry

▸ **valEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ValEntry`](types_Entry.md#valentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/ValEntry.ts:21](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/ValEntry.ts#L21)

___

### valEntryToLeafEntryPrefixedKey

▸ **valEntryToLeafEntryPrefixedKey**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ValEntry`](types_Entry.md#valentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/ValEntry.ts:38](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-entry/ValEntry.ts#L38)
