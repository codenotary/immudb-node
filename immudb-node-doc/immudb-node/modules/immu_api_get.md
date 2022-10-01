[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/get

# Module: immu-api/get

## Table of contents

### Type Aliases

- [GetAllValRefsProps](immu_api_get.md#getallvalrefsprops)
- [GetTxGenericEntriesProps](immu_api_get.md#gettxgenericentriesprops)
- [GetTxWithEntriesProps](immu_api_get.md#gettxwithentriesprops)
- [GetValRefProps](immu_api_get.md#getvalrefprops)

### Functions

- [createGetTxGenericEntries](immu_api_get.md#creategettxgenericentries)
- [createGetTxWithEntries](immu_api_get.md#creategettxwithentries)
- [createGetValRef](immu_api_get.md#creategetvalref)
- [createGetValRefStreaming](immu_api_get.md#creategetvalrefstreaming)
- [createGetValRefs](immu_api_get.md#creategetvalrefs)

## Type Aliases

### GetAllValRefsProps

Ƭ **GetAllValRefsProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `Buffer`[] | Keys of entries to obtain. |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |

#### Defined in

[immudb-node/src/immu-api/get.ts:113](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L113)

___

### GetTxGenericEntriesProps

Ƭ **GetTxGenericEntriesProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `resolveRefs?` | `boolean` | Resolve references or not: - `true` - resolve, - `false` or `undefined` - do not resolve. |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |
| `txId?` | `Long` | Id of transaction to retrive |

#### Defined in

[immudb-node/src/immu-api/get.ts:290](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L290)

___

### GetTxWithEntriesProps

Ƭ **GetTxWithEntriesProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `kvOrRefEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` \| ``"RESOLVE"`` | Action performed on transaction KVEntries and RefEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` (default) - filter to digest of value, - `RAW_VALUE` - just value?, - `RESOLVE` - if KVEntry is RefEntry (special KVEntry heaving as value   referenced key), value will be value of referenced key. ZEntry does   not have value (everything is encoded in key).  `ONLY_DIGEST` is default if not specified. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `resolveRefs?` | `boolean` | Resolve references or not: - `true` - resolve, - `false` or `undefined` - do not resolve. |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |
| `sqlEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` | Action performed on transaction SqlEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` (default) - filter to digest of value, - `RAW_VALUE` - just value?  `ONLY_DIGEST` is default if not specified. |
| `txId?` | `Long` | Id of transaction to retrive |
| `zEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` \| ``"RESOLVE"`` | Action performed on ZEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` - filter to digest of value, - `RAW_VALUE` - just value? (ZEntry have empty value, everything is encoded in key), - `RESOLVE` - value will be referenced key value.  `ONLY_DIGEST` is default if not specified. |

#### Defined in

[immudb-node/src/immu-api/get.ts:160](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L160)

___

### GetValRefProps

Ƭ **GetValRefProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbTxesWindow?` | { `endId?`: `Long` ; `startId?`: `Long`  } | - |
| `dbTxesWindow.endId?` | `Long` | - |
| `dbTxesWindow.startId?` | `Long` | - |
| `key` | `Buffer` | Key to look for. |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `revision?` | `Long` | Get key value heaving revision.  Each set key operation creates key revision, for the same key: - first set creates revision `1`, - second set creates revision `2`, - and so on.  Getting key with revision: - `0` or `undefined` (default) - means most recent revision, - `1`, `2`, ... - means first set key, second set key, ...,  - `-1`, `-2`, ... - means one before recent revision, two before recent   revision, ... |
| `seenAtTxId?` | `Long` | Get key in transaction (database) with specified id.  Simulate situation as if database consists of transactions: - from transaction 0 - to transaction `seenAtTxId`. |
| `seenSinceTxId?` | `Long` | Get key in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |

#### Defined in

[immudb-node/src/immu-api/get.ts:13](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L13)

## Functions

### createGetTxGenericEntries

▸ **createGetTxGenericEntries**(`client`): (`props`: [`GetTxGenericEntriesProps`](immu_api_get.md#gettxgenericentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxEntry`](types_TxEntry.md#txentry)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<[`TxEntry`](types_TxEntry.md#txentry)[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetTxGenericEntriesProps`](immu_api_get.md#gettxgenericentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxEntry`](types_TxEntry.md#txentry)[]\>

#### Defined in

[immudb-node/src/immu-api/get.ts:329](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L329)

___

### createGetTxWithEntries

▸ **createGetTxWithEntries**(`client`): (`props`: [`GetTxWithEntriesProps`](immu_api_get.md#gettxwithentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`Tx__Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`Tx__Output`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetTxWithEntriesProps`](immu_api_get.md#gettxwithentriesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`Tx__Output`\>

#### Defined in

[immudb-node/src/immu-api/get.ts:241](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L241)

___

### createGetValRef

▸ **createGetValRef**(`client`): (`props`: [`GetValRefProps`](immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetValRefProps`](immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }\>

#### Defined in

[immudb-node/src/immu-api/get.ts:73](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L73)

___

### createGetValRefStreaming

▸ **createGetValRefStreaming**(`client`): (`props`: [`GetValRefProps`](immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | [`GetValRefProps`](immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-api/get.ts:374](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L374)

___

### createGetValRefs

▸ **createGetValRefs**(`client`): (`props`: [`GetAllValRefsProps`](immu_api_get.md#getallvalrefsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

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
| `props` | [`GetAllValRefsProps`](immu_api_get.md#getallvalrefsprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-api/get.ts:129](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/get.ts#L129)
