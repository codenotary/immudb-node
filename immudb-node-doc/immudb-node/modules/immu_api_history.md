[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/history

# Module: immu-api/history

## Table of contents

### Type Aliases

- [GetHistoryProps](immu_api_history.md#gethistoryprops)

### Functions

- [createScanHistory](immu_api_history.md#createscanhistory)
- [createScanHistoryStreaming](immu_api_history.md#createscanhistorystreaming)

## Type Aliases

### GetHistoryProps

Ƭ **GetHistoryProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Buffer` | Key for which scan history. |
| `limit?` | `number` | Limit output to number, no limit if `undefined` (default). |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.    Simulate situation as if database consists of transactions:  - from transaction `seenAtTxId`  - to most recent transaction. |
| `sortDescending?` | `boolean` | Sort order, default is ascending. To order descending set this field to  `true`. |
| `startAtRevisionId?` | `Long` | Start history scan starting with revision id:  - `0` - most recent revision  - `n` - n-th revision (n's starts from 1),  - `-k` - k-th revision before most recent (k's starts from 1). |

#### Defined in

[immudb-node/src/immu-api/history.ts:12](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/history.ts#L12)

## Functions

### createScanHistory

▸ **createScanHistory**(`client`): (`props`: [`GetHistoryProps`](immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

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
| `props` | [`GetHistoryProps`](immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-api/history.ts:43](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/history.ts#L43)

___

### createScanHistoryStreaming

▸ **createScanHistoryStreaming**(`client`): (`props`: [`GetHistoryProps`](immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | [`GetHistoryProps`](immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-api/history.ts:77](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-api/history.ts#L77)
