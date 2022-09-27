[immudb-node](../README.md) / [Exports](../modules.md) / immu-grpc/reader-call

# Module: immu-grpc/reader-call

## Table of contents

### Functions

- [createExportTx](immu_grpc_reader_call.md#createexporttx)
- [createStreamGet](immu_grpc_reader_call.md#createstreamget)
- [createStreamHistory](immu_grpc_reader_call.md#createstreamhistory)
- [createStreamScan](immu_grpc_reader_call.md#createstreamscan)
- [createStreamVerifiableGet](immu_grpc_reader_call.md#createstreamverifiableget)
- [createStreamZScan](immu_grpc_reader_call.md#createstreamzscan)

## Functions

### createExportTx

▸ **createExportTx**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `ExportTxRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `ExportTxRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:50](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L50)

___

### createStreamGet

▸ **createStreamGet**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `KeyRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `KeyRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:11](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L11)

___

### createStreamHistory

▸ **createStreamHistory**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `HistoryRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `HistoryRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:29](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L29)

___

### createStreamScan

▸ **createStreamScan**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `ScanRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `ScanRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:17](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L17)

___

### createStreamVerifiableGet

▸ **createStreamVerifiableGet**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `VerifiableGetRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `VerifiableGetRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:39](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L39)

___

### createStreamZScan

▸ **createStreamZScan**(`client`): (`props`: { `cancelSignal?`: `AbortSignal` ; `credentials?`: `CallCredentials` ; `operationTimeoutMS?`: `number` ; `request`: `ZScanRequest` ; `requestMetadata?`: `Metadata`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

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
| `props` | `Object` |
| `props.cancelSignal?` | `AbortSignal` |
| `props.credentials?` | `CallCredentials` |
| `props.operationTimeoutMS?` | `number` |
| `props.request` | `ZScanRequest` |
| `props.requestMetadata?` | `Metadata` |

##### Returns

`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>

#### Defined in

[immudb-node/src/immu-grpc/reader-call.ts:23](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-grpc/reader-call.ts#L23)
