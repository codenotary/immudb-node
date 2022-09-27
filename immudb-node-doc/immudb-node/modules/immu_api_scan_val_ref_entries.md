[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/scan-val-ref-entries

# Module: immu-api/scan-val-ref-entries

## Table of contents

### Type Aliases

- [ScanValRefEntriesProps](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops)

### Functions

- [createScanValRefEntries](immu_api_scan_val_ref_entries.md#createscanvalrefentries)
- [createScanValRefEntriesStreaming](immu_api_scan_val_ref_entries.md#createscanvalrefentriesstreaming)

## Type Aliases

### ScanValRefEntriesProps

Ƭ **ScanValRefEntriesProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dontWaitForLatestKeys?` | `boolean` | If set to `true`, seek does not wait for indexer to be synchronized.  This mean that operation may return stale values.    Not set does nothing (default). |
| `filterToKeyPrefix?` | `Buffer` | If set outputs only keys starting with specified prefix.   Not set does nothing (default). |
| `includeSkipToKey?` | `boolean` | Wheader include ScanValRefEntriesProps.scanSkipToKey in output. Key  will be included if fild set to `true`, otherwise it will not be  included. |
| `includeStopAtKey?` | `boolean` | Include [scanStopAtKey](immu_api_scan_val_ref_entries.md#scanstopatkey) in scan if set to `true`,  don't include otherwise. |
| `limit?` | `Long` | Limit output to number, no limit if `undefined` (default). |
| `scanSkipToKey?` | `Buffer` | Scan will not output entries until specified key. |
| `scanStopAtKey?` | `Buffer` | Stop scanning before (if ScanValRefEntriesProps.includeStopAtKey not  set or `false`) or at key (if ScanValRefEntriesProps.includeStopAtKey  set to `true`).     If undefined, scan to end (default). |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.    Simulate situation as if database consists of transactions:  - from transaction `seenAtTxId`  - to most recent transaction. |
| `sortDescending?` | `boolean` | Sort order, default is ascending. To order descending set this field to  `true`. |

#### Defined in

[immudb-node/src/immu-api/scan-val-ref-entries.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/scan-val-ref-entries.ts#L11)

## Functions

### createScanValRefEntries

▸ **createScanValRefEntries**(`client`): (`props`: [`ScanValRefEntriesProps`](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanValRefEntriesProps`](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-api/scan-val-ref-entries.ts:64](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/scan-val-ref-entries.ts#L64)

___

### createScanValRefEntriesStreaming

▸ **createScanValRefEntriesStreaming**(`client`): (`props`: [`ScanValRefEntriesProps`](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | [`ScanValRefEntriesProps`](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-api/scan-val-ref-entries.ts:100](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/scan-val-ref-entries.ts#L100)
