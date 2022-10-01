[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/scan-zSet-entries

# Module: immu-api/scan-zSet-entries

## Table of contents

### Type Aliases

- [ScanZSetEntriesProps](immu_api_scan_zSet_entries.md#scanzsetentriesprops)

### Functions

- [createScanZEntries](immu_api_scan_zSet_entries.md#createscanzentries)
- [createScanZEntriesStreaming](immu_api_scan_zSet_entries.md#createscanzentriesstreaming)

## Type Aliases

### ScanZSetEntriesProps

Ƭ **ScanZSetEntriesProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dontWaitForLatestKeys?` | `boolean` | If set to `true`, seek does not wait for indexer to be synchronized. This mean that operation may return stale values.  Not set does nothing (default). |
| `equalsScore?` | `number` | Include referenced entries heaving score equal to `equalsScore`. |
| `inclusiveSeek?` | `boolean` | Wheader to include entries with ScanZSetEntriesProps.minScore and ScanZSetEntriesProps.maxScore. |
| `limit?` | `Long` | Limit output to number, no limit if `undefined` (default). |
| `maxScore?` | `number` | Include referenced entries heaving score not greater than `maxScore`. |
| `minScore?` | `number` | Include referenced entries heaving score at least `minScore`. |
| `seekKey?` | `Buffer` | Include zEntries heaving key. |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |
| `seenToTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from first transaction  - to transaction with id `seenToTxId`. |
| `set` | `Buffer` | Set to seek. |
| `sortDescending?` | `boolean` | Sort order, default is ascending. To order descending set this field to `true`. |

#### Defined in

[immudb-node/src/immu-api/scan-zSet-entries.ts:11](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-zSet-entries.ts#L11)

## Functions

### createScanZEntries

▸ **createScanZEntries**(`client`): (`props`: [`ScanZSetEntriesProps`](immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `refTxEntry?`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanZSetEntriesProps`](immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refTxEntry?`: [`RefTxEntry`](types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](types_Entry.md#zsetentry)  }[]\>

#### Defined in

[immudb-node/src/immu-api/scan-zSet-entries.ts:69](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-zSet-entries.ts#L69)

___

### createScanZEntriesStreaming

▸ **createScanZEntriesStreaming**(`client`): (`props`: [`ScanZSetEntriesProps`](immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanZSetEntriesProps`](immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-api/scan-zSet-entries.ts:115](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-zSet-entries.ts#L115)
