[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/scan-txes

# Module: immu-api/scan-txes

## Table of contents

### Type Aliases

- [ScanDBProps](immu_api_scan_txes.md#scandbprops)
- [ScanTxesProps](immu_api_scan_txes.md#scantxesprops)

### Functions

- [createScanDb](immu_api_scan_txes.md#createscandb)
- [createScanTxes](immu_api_scan_txes.md#createscantxes)

## Type Aliases

### ScanDBProps

Ƭ **ScanDBProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dontWaitForLatestKeys?` | `boolean` | If set to `true`, seek does not wait for indexer to be synchronized. This mean that operation may return stale values.  Not set does nothing (default). |
| `limit?` | `number` | If set limits output to set value, no limit if `undefined` (default). |
| `scanStartAtTxId` | `Long` | If set operation will start scanning from transaction with specified id, if not set operation will start from first transaction.  **Mandatory**. |
| `seenSinceTxId?` | `Long` | Get keys in transactions (database) after specified id.  Simulate situation as if database consists of transactions: - from transaction `seenAtTxId` - to most recent transaction. |
| `sortDescending?` | `boolean` | Sort order, default is ascending. To order descending set this field to `true`. |

#### Defined in

[immudb-node/src/immu-api/scan-txes.ts:141](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-txes.ts#L141)

___

### ScanTxesProps

Ƭ **ScanTxesProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dontWaitForLatestKeys?` | `boolean` | If set to `true`, seek does not wait for indexer to be synchronized. This mean that operation may return stale values.  Not set does nothing (default). |
| `kvOrRefEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` \| ``"RESOLVE"`` | Action performed on transaction KVEntries and RefEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` (default) - filter to digest of value, - `RAW_VALUE` - just value?, - `RESOLVE` - if KVEntry is RefEntry (special KVEntry heaving as value   referenced key), value will be value of referenced key. ZEntry does   not have value (everything is encoded in key).  `ONLY_DIGEST` is default if not specified. |
| `limit?` | `number` | If set limits output to set value, no limit if `undefined` (default). |
| `scanStartAtTxId` | `Long` | If set operation will start scanning from transaction with specified id, if not set operation will start from first transaction.  **Mandatory**. |
| `seenSinceTxId?` | `Long` | If set includes in output only keys since transaction id.  Not set does nothing (default).  How this parameter is related to ScanTxesProps.scanStartAtTxId??? => maybe this would influence output if entry was resolved... |
| `sortDescending?` | `boolean` | Sort order, default is ascending. To order descending set this field to `true`. |
| `sqlEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` | Action performed on transaction SqlEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` (default) - filter to digest of value, - `RAW_VALUE` - just value?  `ONLY_DIGEST` is default if not specified. |
| `zEntryAction?` | ``"EXCLUDE"`` \| ``"ONLY_DIGEST"`` \| ``"RAW_VALUE"`` \| ``"RESOLVE"`` | Action performed on ZEntries: - `EXCLUDE` - filter out (value?), - `ONLY_DIGEST` - filter to digest of value, - `RAW_VALUE` - just value? (ZEntry have empty value, everything is encoded in key), - `RESOLVE` - value will be referenced key value.  `ONLY_DIGEST` is default if not specified. |

#### Defined in

[immudb-node/src/immu-api/scan-txes.ts:9](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-txes.ts#L9)

## Functions

### createScanDb

▸ **createScanDb**(`client`): (`props`: [`ScanDBProps`](immu_api_scan_txes.md#scandbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxEntry`](types_TxEntry.md#txentry)[]\>

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
| `props` | [`ScanDBProps`](immu_api_scan_txes.md#scandbprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<[`TxEntry`](types_TxEntry.md#txentry)[]\>

#### Defined in

[immudb-node/src/immu-api/scan-txes.ts:176](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-txes.ts#L176)

___

### createScanTxes

▸ **createScanTxes**(`client`): (`props`: [`ScanTxesProps`](immu_api_scan_txes.md#scantxesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`Tx__Output`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<`Tx__Output`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanTxesProps`](immu_api_scan_txes.md#scantxesprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<`Tx__Output`[]\>

#### Defined in

[immudb-node/src/immu-api/scan-txes.ts:88](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/scan-txes.ts#L88)
