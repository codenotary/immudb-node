[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry/RefEntry

# Module: immu-entry/RefEntry

## Table of contents

### Functions

- [binEntryKeyToRefEntryKey](immu_entry_RefEntry.md#binentrykeytorefentrykey)
- [binEntryToRefEntry](immu_entry_RefEntry.md#binentrytorefentry)
- [decodeBinEntryValAsRefEntryPart](immu_entry_RefEntry.md#decodebinentryvalasrefentrypart)
- [refEntryToBinEntry](immu_entry_RefEntry.md#refentrytobinentry)
- [refEntryToLeafEntryPrefixedKey](immu_entry_RefEntry.md#refentrytoleafentryprefixedkey)

## Functions

### binEntryKeyToRefEntryKey

▸ **binEntryKeyToRefEntryKey**(`keyBytes`, `offset?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyBytes` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/RefEntry.ts:51](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/RefEntry.ts#L51)

___

### binEntryToRefEntry

▸ **binEntryToRefEntry**(`props`): [`RefEntry`](types_Entry.md#refentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BinEntry`](types_Entry.md#binentry) |

#### Returns

[`RefEntry`](types_Entry.md#refentry)

#### Defined in

[immudb-node/src/immu-entry/RefEntry.ts:13](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/RefEntry.ts#L13)

___

### decodeBinEntryValAsRefEntryPart

▸ **decodeBinEntryValAsRefEntryPart**(`valBytes`, `offset?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valBytes` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `refKey` | `Buffer` |
| `refKeySeenFromTxId` | `Long` |

#### Defined in

[immudb-node/src/immu-entry/RefEntry.ts:62](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/RefEntry.ts#L62)

___

### refEntryToBinEntry

▸ **refEntryToBinEntry**(`props`): [`BinEntry`](types_Entry.md#binentry)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RefEntry`](types_Entry.md#refentry) |

#### Returns

[`BinEntry`](types_Entry.md#binentry)

#### Defined in

[immudb-node/src/immu-entry/RefEntry.ts:27](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/RefEntry.ts#L27)

___

### refEntryToLeafEntryPrefixedKey

▸ **refEntryToLeafEntryPrefixedKey**(`props`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RefEntry`](types_Entry.md#refentry) |

#### Returns

`Buffer`

#### Defined in

[immudb-node/src/immu-entry/RefEntry.ts:46](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-entry/RefEntry.ts#L46)
