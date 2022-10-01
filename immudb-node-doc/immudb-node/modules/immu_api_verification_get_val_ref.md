[immudb-node](../README.md) / [Exports](../modules.md) / immu-api/verification-get-val-ref

# Module: immu-api/verification-get-val-ref

## Table of contents

### Type Aliases

- [GetValRefAndVerificationProps](immu_api_verification_get_val_ref.md#getvalrefandverificationprops)

### Functions

- [createGetValRefAndVerification](immu_api_verification_get_val_ref.md#creategetvalrefandverification)

## Type Aliases

### GetValRefAndVerificationProps

Ƭ **GetValRefAndVerificationProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dbTxesWindow?` | { `endId?`: `Long` ; `startId?`: `Long`  } | - |
| `dbTxesWindow.endId?` | `Long` | - |
| `dbTxesWindow.startId?` | `Long` | - |
| `key` | `Buffer` | - |
| `options?` | { `dontWaitForIndexer?`: `boolean`  } | Operation options. |
| `options.dontWaitForIndexer?` | `boolean` | Do not wait for immudb to update database indexes, setting this value to `true` may cause operation to speed up in exchange for stale database latest keys values.  For example geting key value will return key value pointed by indexer. If indexer is not up to date, returned value may be not latest value.  Default value is `false`. |
| `refHash` | `Buffer` | - |
| `refTxId` | `Long` | - |
| `revisionId?` | `Long` | - |

#### Defined in

[immudb-node/src/immu-api/verification-get-val-ref.ts:12](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-val-ref.ts#L12)

## Functions

### createGetValRefAndVerification

▸ **createGetValRefAndVerification**(`client`): (`props`: [`GetValRefAndVerificationProps`](immu_api_verification_get_val_ref.md#getvalrefandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refEntry`: `undefined` \| [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ImmuServiceClient` |

#### Returns

`fn`

▸ (`props`): `Promise`<{ `refEntry`: `undefined` \| [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](types_Verification.md#verification)  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetValRefAndVerificationProps`](immu_api_verification_get_val_ref.md#getvalrefandverificationprops) & { `credentials`: `CallCredentials`  } |

##### Returns

`Promise`<{ `refEntry`: `undefined` \| [`TxContext`](types_TxEntry.md#txcontext) & [`RefEntry`](types_Entry.md#refentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](types_TxEntry.md#txcontext) & [`ValEntry`](types_Entry.md#valentry) & [`IndexerInfo`](types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-api/verification-get-val-ref.ts:42](https://github.com/codenotary/immudb-node/blob/fe12060/immudb-node/src/immu-api/verification-get-val-ref.ts#L42)
