[immudb-node](../README.md) / [Exports](../modules.md) / [immu-client](../modules/immu_client.md) / Client

# Class: Client

[immu-client](../modules/immu_client.md).Client

## Table of contents

### Constructors

- [constructor](immu_client.Client.md#constructor)

### Properties

- [callCredentials](immu_client.Client.md#callcredentials)
- [conf](immu_client.Client.md#conf)
- [immuGrpcApi](immu_client.Client.md#immugrpcapi)
- [immuGrpcClient](immu_client.Client.md#immugrpcclient)
- [sessionTokens](immu_client.Client.md#sessiontokens)

### Methods

- [close](immu_client.Client.md#close)
- [compactDbIndex](immu_client.Client.md#compactdbindex)
- [createDb](immu_client.Client.md#createdb)
- [createUser](immu_client.Client.md#createuser)
- [deleteDb](immu_client.Client.md#deletedb)
- [deleteUser](immu_client.Client.md#deleteuser)
- [deleteValRef](immu_client.Client.md#deletevalref)
- [executeSqlTx](immu_client.Client.md#executesqltx)
- [exportTx](immu_client.Client.md#exporttx)
- [flushDbIndex](immu_client.Client.md#flushdbindex)
- [getCallCredentials](immu_client.Client.md#getcallcredentials)
- [getDbCurrentState](immu_client.Client.md#getdbcurrentstate)
- [getDbSettings](immu_client.Client.md#getdbsettings)
- [getSessionTokens](immu_client.Client.md#getsessiontokens)
- [getSqlRowEntryAndVerification](immu_client.Client.md#getsqlrowentryandverification)
- [getTxAndVerification](immu_client.Client.md#gettxandverification)
- [getTxGenericEntries](immu_client.Client.md#gettxgenericentries)
- [getTxWithEntries](immu_client.Client.md#gettxwithentries)
- [getValRef](immu_client.Client.md#getvalref)
- [getValRefAndVerification](immu_client.Client.md#getvalrefandverification)
- [getValRefStreaming](immu_client.Client.md#getvalrefstreaming)
- [getValRefs](immu_client.Client.md#getvalrefs)
- [keepAlive](immu_client.Client.md#keepalive)
- [listDbs](immu_client.Client.md#listdbs)
- [listUsers](immu_client.Client.md#listusers)
- [loadDb](immu_client.Client.md#loaddb)
- [replicateTx](immu_client.Client.md#replicatetx)
- [scanDbEntries](immu_client.Client.md#scandbentries)
- [scanHistory](immu_client.Client.md#scanhistory)
- [scanHistoryStreaming](immu_client.Client.md#scanhistorystreaming)
- [scanTxes](immu_client.Client.md#scantxes)
- [scanValRefEntries](immu_client.Client.md#scanvalrefentries)
- [scanValRefEntriesStreaming](immu_client.Client.md#scanvalrefentriesstreaming)
- [scanZEntries](immu_client.Client.md#scanzentries)
- [scanZEntriesStreaming](immu_client.Client.md#scanzentriesstreaming)
- [setDbSettings](immu_client.Client.md#setdbsettings)
- [setRefEntry](immu_client.Client.md#setrefentry)
- [setRefEntryGetVerification](immu_client.Client.md#setrefentrygetverification)
- [setUserDbPermissions](immu_client.Client.md#setuserdbpermissions)
- [setUserPassword](immu_client.Client.md#setuserpassword)
- [setValEntries](immu_client.Client.md#setvalentries)
- [setValEntriesGetVerification](immu_client.Client.md#setvalentriesgetverification)
- [setValEntriesStreaming](immu_client.Client.md#setvalentriesstreaming)
- [setValRefZSetEntries](immu_client.Client.md#setvalrefzsetentries)
- [setValZSetEntriesStreaming](immu_client.Client.md#setvalzsetentriesstreaming)
- [setZSetEntry](immu_client.Client.md#setzsetentry)
- [setZSetEntryGetVerification](immu_client.Client.md#setzsetentrygetverification)
- [sqlExec](immu_client.Client.md#sqlexec)
- [sqlQuery](immu_client.Client.md#sqlquery)
- [sqlQueryTable](immu_client.Client.md#sqlquerytable)
- [sqlQueryTables](immu_client.Client.md#sqlquerytables)
- [unloadDb](immu_client.Client.md#unloaddb)

## Constructors

### constructor

• **new Client**(`conf`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`Config`](../modules/immu_client.md#config) |

#### Defined in

[immudb-node/src/immu-client.ts:115](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L115)

## Properties

### callCredentials

• `Private` `Optional` **callCredentials**: `CallCredentials`

#### Defined in

[immudb-node/src/immu-client.ts:113](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L113)

___

### conf

• `Private` `Readonly` **conf**: [`Config`](../modules/immu_client.md#config)

#### Defined in

[immudb-node/src/immu-client.ts:109](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L109)

___

### immuGrpcApi

• `Private` `Readonly` **immuGrpcApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closeSession` | (`props`: `CallCredentials`) => `Promise`<`void`\> |
| `compactDbIndex` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\> |
| `createDb` | (`props`: [`CreateDatabaseProps`](../modules/immu_api_db.md#createdatabaseprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\> |
| `createUser` | (`props`: [`CreateUsersProps`](../modules/immu_api_user.md#createusersprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`UserCredentials`](../modules/types_User.md#usercredentials) & [`DatabasePermission`](../modules/types_Permission.md#databasepermission)\> |
| `deleteDb` | (`props`: [`DeleteDatabaseProps`](../modules/immu_api_db.md#deletedatabaseprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\> |
| `deleteValRef` | (`props`: [`DeleteValRefProps`](../modules/immu_api_delete_val_ref.md#deletevalrefprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\> |
| `exportTx` | (`props`: [`ExportTxProps`](../modules/immu_api_instance.md#exporttxprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\> |
| `flushDbIndex` | (`props`: [`FlushDatabaseIndexProps`](../modules/immu_api_db.md#flushdatabaseindexprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\> |
| `getDbCurrentState` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\> |
| `getDbSettings` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\> |
| `getSqlRowEntryAndVerification` | (`props`: [`GetSqlRowEntryAndVerificationProps`](../modules/immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\> |
| `getTxAndVerification` | (`props`: [`GetTxAndVerificationProps`](../modules/immu_api_verification_get_tx.md#gettxandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\> |
| `getTxGenericEntries` | (`props`: [`GetTxGenericEntriesProps`](../modules/immu_api_get.md#gettxgenericentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\> |
| `getTxWithEntries` | (`props`: [`GetTxWithEntriesProps`](../modules/immu_api_get.md#gettxwithentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`Tx__Output`\> |
| `getValRef` | (`props`: [`GetValRefProps`](../modules/immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }\> |
| `getValRefAndVerification` | (`props`: [`GetValRefAndVerificationProps`](../modules/immu_api_verification_get_val_ref.md#getvalrefandverificationprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refEntry`: `undefined` \| [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\> |
| `getValRefStreaming` | (`props`: [`GetValRefProps`](../modules/immu_api_get.md#getvalrefprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\> |
| `getValRefs` | (`props`: [`GetAllValRefsProps`](../modules/immu_api_get.md#getallvalrefsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\> |
| `keepAlive` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\> |
| `listDbs` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`DBRuntimeInfo`](../modules/types_Db.md#dbruntimeinfo)[]\> |
| `listUsers` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`UserInfo`](../modules/types_User.md#userinfo)[]\> |
| `loadDb` | (`props`: [`LoadDbProps`](../modules/immu_api_db.md#loaddbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\> |
| `openSession` | (`sessionInfo`: [`UserDatabaseSession`](../modules/types_Session.md#userdatabasesession)) => `Promise`<[`SessionTokens`](../modules/types_Session.md#sessiontokens)\> |
| `replicateTx` | (`props`: [`ReplicateTxProps`](../modules/immu_api_instance.md#replicatetxprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\> |
| `scanDbEntries` | (`props`: [`ScanDBProps`](../modules/immu_api_scan_txes.md#scandbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\> |
| `scanHistory` | (`props`: [`GetHistoryProps`](../modules/immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\> |
| `scanHistoryStreaming` | (`props`: [`GetHistoryProps`](../modules/immu_api_history.md#gethistoryprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\> |
| `scanTxes` | (`props`: [`ScanTxesProps`](../modules/immu_api_scan_txes.md#scantxesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`Tx__Output`[]\> |
| `scanValRefEntries` | (`props`: [`ScanValRefEntriesProps`](../modules/immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\> |
| `scanValRefEntriesStreaming` | (`props`: [`ScanValRefEntriesProps`](../modules/immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\> |
| `scanZEntries` | (`props`: [`ScanZSetEntriesProps`](../modules/immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refTxEntry?`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }[]\> |
| `scanZEntriesStreaming` | (`props`: [`ScanZSetEntriesProps`](../modules/immu_api_scan_zSet_entries.md#scanzsetentriesprops) & { `credentials`: `CallCredentials`  }) => `AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\> |
| `setDbSettings` | (`props`: [`SetDbSettingsProps`](../modules/immu_api_db.md#setdbsettingsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\> |
| `setRefEntry` | (`props`: [`SetRefEntryProps`](../modules/immu_api_set_ref_entry.md#setrefentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `ref`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](../modules/types_Tx.md#txcore)  }\> |
| `setRefEntryGetVerification` | (`props`: [`SetRefEntryProps`](../modules/immu_api_set_ref_entry.md#setrefentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `refEntry`: [`RefEntry`](../modules/types_Entry.md#refentry) ; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\> |
| `setUserActive` | (`props`: [`SetUserActiveProps`](../modules/immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SetUserActiveProps`](../modules/immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\> |
| `setUserDbPermissions` | (`props`: [`SetUserDbPermissionsProps`](../modules/immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SetUserDbPermissionsProps`](../modules/immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\> |
| `setUserPassword` | (`props`: [`SetUserPasswordProps`](../modules/immu_api_user.md#setuserpasswordprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`string`\> |
| `setValEntries` | (`props`: [`SetValEntryProps`](../modules/immu_api_set_val_entry.md#setvalentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `txCore`: [`TxCore`](../modules/types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry)[]  }\> |
| `setValEntriesGetVerification` | (`props`: [`SetValEntryProps`](../modules/immu_api_set_val_entry.md#setvalentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\> |
| `setValEntriesStreaming` | (`props`: [`SetValEntriesStreamingProps`](../modules/immu_api_set_val_entry.md#setvalentriesstreamingprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\> |
| `setValRefZSetEntries` | (`props`: [`SetEntryProps`](../modules/immu_api_set_val_ref_zSet.md#setentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) \| [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry))[]  }\> |
| `setValZSetEntriesStreaming` | (`props`: [`SetEntriesStreamingProps`](../modules/immu_api_set_val_ref_zSet.md#setentriesstreamingprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\> |
| `setZSetEntry` | (`props`: [`SetZSetEntryProps`](../modules/immu_api_set_z_entry.md#setzsetentryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry)  }\> |
| `setZSetEntryGetVerification` | (`props`: [`SetZSetEntryProps`](../modules/immu_api_set_z_entry.md#setzsetentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }\> |
| `sqlExec` | (`props`: [`SqlExecProps`](../modules/immu_api_sql_exec.md#sqlexecprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](../modules/types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\> |
| `sqlQuery` | (`props`: [`SqlQueryProps`](../modules/immu_api_sql_query.md#sqlqueryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\> |
| `sqlQueryTable` | (`props`: [`SqlQueryTableProps`](../modules/immu_api_sql_query.md#sqlquerytableprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\> |
| `sqlQueryTables` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\> |
| `sqlTxCommit` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<{ `firstPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](../modules/types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }\> |
| `sqlTxExec` | (`props`: [`SqlTxExecProps`](../modules/immu_api_sql_tx.md#sqltxexecprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`void`\> |
| `sqlTxNew` | (`props`: [`SqlTxNewProps`](../modules/immu_api_sql_tx.md#sqltxnewprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`TransactionTokens`](../modules/types_Session.md#transactiontokens)\> |
| `sqlTxQuery` | (`props`: [`SqlTxQueryProps`](../modules/immu_api_sql_tx.md#sqltxqueryprops) & { `credentials`: `CallCredentials`  }) => `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\> |
| `sqlTxRollback` | (`props`: { `credentials`: `CallCredentials`  }) => `Promise`<`void`\> |
| `unloadDb` | (`props`: [`UnloadDbProps`](../modules/immu_api_db.md#unloaddbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<`void`\> |
| `useDb` | (`props`: [`UseDbProps`](../modules/immu_api_session.md#usedbprops) & { `credentials`: `CallCredentials`  }) => `Promise`<{ `database`: `string` = props.database; `token`: `string` = resp.token }\> |

#### Defined in

[immudb-node/src/immu-client.ts:111](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L111)

___

### immuGrpcClient

• `Private` `Readonly` **immuGrpcClient**: `ImmuServiceClient`

#### Defined in

[immudb-node/src/immu-client.ts:110](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L110)

___

### sessionTokens

• `Private` `Optional` **sessionTokens**: [`SessionTokens`](../modules/types_Session.md#sessiontokens)

#### Defined in

[immudb-node/src/immu-client.ts:112](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L112)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Clears stored session tokens and credentials and closses session
with ImmuDb

#### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-client.ts:179](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L179)

___

### compactDbIndex

▸ **compactDbIndex**(): `Promise`<`void`\>

Compacts current database index.

#### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-client.ts:832](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L832)

___

### createDb

▸ **createDb**(`props`): `Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

Creates database as ImmuDb server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CreateDatabaseProps`](../modules/immu_api_db.md#createdatabaseprops) |

#### Returns

`Promise`<{ `alreadyExisted`: `boolean` = resp.alreadyExisted; `database`: `string` = resp.name; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:782](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L782)

___

### createUser

▸ **createUser**(`props`): `Promise`<[`UserCredentials`](../modules/types_User.md#usercredentials) & [`DatabasePermission`](../modules/types_Permission.md#databasepermission)\>

Creates ImmuDb server user

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CreateUsersProps`](../modules/immu_api_user.md#createusersprops) |

#### Returns

`Promise`<[`UserCredentials`](../modules/types_User.md#usercredentials) & [`DatabasePermission`](../modules/types_Permission.md#databasepermission)\>

#### Defined in

[immudb-node/src/immu-client.ts:721](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L721)

___

### deleteDb

▸ **deleteDb**(`props`): `Promise`<`string`\>

Deletes database as ImmuDb server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DeleteDatabaseProps`](../modules/immu_api_db.md#deletedatabaseprops) |

#### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-client.ts:792](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L792)

___

### deleteUser

▸ **deleteUser**(`props`): `Promise`<[`SetUserActiveProps`](../modules/immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\>

Deletes (deactivates) ImmuDb server user, can also activate user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserActiveProps`](../modules/immu_api_user.md#setuseractiveprops) |

#### Returns

`Promise`<[`SetUserActiveProps`](../modules/immu_api_user.md#setuseractiveprops) & { `credentials`: `CallCredentials`  }\>

#### Defined in

[immudb-node/src/immu-client.ts:731](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L731)

___

### deleteValRef

▸ **deleteValRef**(`props`): `Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

Deletes keys or references to keys in one transaction.

Key or reference to key **marked** as deleted will be ignored
by the indexer (e.g. [getValRef](immu_client.Client.md#getvalref) method) seeing database
at this operation transaction and further transactions if key
will not be set once more.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DeleteValRefProps`](../modules/immu_api_delete_val_ref.md#deletevalrefprops) |

#### Returns

`Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

#### Defined in

[immudb-node/src/immu-client.ts:297](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L297)

___

### executeSqlTx

▸ **executeSqlTx**(`mode`, `run`): `Promise`<`SqlCommitRollback`\>

Executes interactive sql transaction. Transaction will be:
- commited if no errors will be thrown,
- rolled back if:
  - there are sql errors
  - user throws

Committing transaction example:

```ts

client.executeSqlTx(
    'ReadWrite', 
    async txApi => {
        const testTable = await txApi.query({sql: `
            select * from testtable;
        `})
        txApi.exec({sql: `
            insert into testtable 
                (id, value) 
            values 
                (1, 'yoyo');
        `})
    }
)

// testtable with inserted rows
console.log(await client.sqlQuery({sql: `
    select * from testtable;
`}))

```

Rolling back transaction example:

```ts

const txRes = await client.executeSqlTx(
    'ReadWrite', 
    async txApi => {
        const testTable = await txApi.query({sql: `
            select * from testtable;
        `})
        txApi.exec({sql: `
            insert into testtable 
                (id, value) 
            values 
                (1, 'yoyo');
        `})
        throw 'Changed my decision, don't update testtable'

        console.log('This will not be executed')
    }
)

console.log(txRes)
// Changed my decision, don't update testtable

// testtable without inserted rows
console.log(await client.sqlQuery({sql: `
    select * from testtable;
`}))

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | ``"ReadOnly"`` \| ``"WriteOnly"`` \| ``"ReadWrite"`` |
| `run` | (`txApi`: { `exec`: (`props`: [`SqlTxExecProps`](../modules/immu_api_sql_tx.md#sqltxexecprops)) => `Promise`<`void`\> ; `query`: (`props`: [`SqlTxQueryProps`](../modules/immu_api_sql_tx.md#sqltxqueryprops)) => `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>  }) => `Promise`<`void`\> |

#### Returns

`Promise`<`SqlCommitRollback`\>

#### Defined in

[immudb-node/src/immu-client.ts:640](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L640)

___

### exportTx

▸ **exportTx**(`props`): `Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

Exports transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ExportTxProps`](../modules/immu_api_instance.md#exporttxprops) |

#### Returns

`Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

#### Defined in

[immudb-node/src/immu-client.ts:901](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L901)

___

### flushDbIndex

▸ **flushDbIndex**(`props`): `Promise`<`string`\>

Flushes current database index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FlushDatabaseIndexProps`](../modules/immu_api_db.md#flushdatabaseindexprops) |

#### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-client.ts:822](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L822)

___

### getCallCredentials

▸ `Private` **getCallCredentials**(): `Promise`<`CallCredentials`\>

Creates and caches session credentials.

#### Returns

`Promise`<`CallCredentials`\>

#### Defined in

[immudb-node/src/immu-client.ts:162](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L162)

___

### getDbCurrentState

▸ **getDbCurrentState**(): `Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\>

Gets current database state.

#### Returns

`Promise`<{ `database`: `string` = resp.db; `signature`: `undefined` \| `Signature__Output` ; `txHash`: `Buffer` = resp.txHash; `txId`: `Long` = resp.txId }\>

#### Defined in

[immudb-node/src/immu-client.ts:851](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L851)

___

### getDbSettings

▸ **getDbSettings**(): `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

Gets current database settings.

#### Returns

`Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:860](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L860)

___

### getSessionTokens

▸ `Private` **getSessionTokens**(): `Promise`<[`SessionTokens`](../modules/types_Session.md#sessiontokens)\>

Gets and caches session tokens.

#### Returns

`Promise`<[`SessionTokens`](../modules/types_Session.md#sessiontokens)\>

#### Defined in

[immudb-node/src/immu-client.ts:150](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L150)

___

### getSqlRowEntryAndVerification

▸ **getSqlRowEntryAndVerification**(`props`): `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

Gets SqlRowEntry and its verification structure by looking
for sql row primary key (which can be composite).

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetSqlRowEntryAndVerificationProps`](../modules/immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops) |

#### Returns

`Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:935](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L935)

___

### getTxAndVerification

▸ **getTxAndVerification**(`props`): `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

Gets Tx, its entries and its verification structure, by looking for
transaction id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetTxAndVerificationProps`](../modules/immu_api_verification_get_tx.md#gettxandverificationprops) |

#### Returns

`Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:923](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L923)

___

### getTxGenericEntries

▸ **getTxGenericEntries**(`props`): `Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

Gets value, ref, zSet entries of transaction heaving specified id.
Obtained entries are verifiable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetTxGenericEntriesProps`](../modules/immu_api_get.md#gettxgenericentriesprops) |

#### Returns

`Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

#### Defined in

[immudb-node/src/immu-client.ts:440](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L440)

___

### getTxWithEntries

▸ **getTxWithEntries**(`props`): `Promise`<`Tx__Output`\>

Scans database transaction entries.

Result is composed in following way:
- entries are filtered out for actions:
  - `EXCLUDE`,
- entries go ordered into `entries` array fild for actions:
  - `RAW_VALUE`,
  - `ONLY_DIGEST`,
  - `undefined`,
- KV entries go ordered into `kvEntries` array fild for
  `kvOrRefEntryAction` action:
  - `RESOLVE`,
- Z entries go ordered into `zEntries` array fild for `zEntryAction`
  action:
  - `RESOLVE`,

To obtain sequential entries ordering set all actions to:
- `RAW_VALUE` or
- `ONLY_DIGEST`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetTxWithEntriesProps`](../modules/immu_api_get.md#gettxwithentriesprops) |

#### Returns

`Promise`<`Tx__Output`\>

#### Defined in

[immudb-node/src/immu-client.ts:429](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L429)

___

### getValRef

▸ **getValRef**(`props`): `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }\>

Gets value for provided key in one transaction. Key may refer to value or
reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetValRefProps`](../modules/immu_api_get.md#getvalrefprops) |

#### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:452](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L452)

___

### getValRefAndVerification

▸ **getValRefAndVerification**(`props`): `Promise`<{ `refEntry`: `undefined` \| [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

Gets ValEntry or RefEntry (and ref associated ValEntry) and its (val or
ref) verification structure by looking for ValEntry or RefEntry key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetValRefAndVerificationProps`](../modules/immu_api_verification_get_val_ref.md#getvalrefandverificationprops) |

#### Returns

`Promise`<{ `refEntry`: `undefined` \| [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.refTxEntry; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `valEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) = valEntryAndMaybeRefEntry.valTxEntry; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:947](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L947)

___

### getValRefStreaming

▸ **getValRefStreaming**(`props`): `Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

Gets value for provided key in one transaction. Key may refer to value or
reference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetValRefProps`](../modules/immu_api_get.md#getvalrefprops) |

#### Returns

`Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

#### Defined in

[immudb-node/src/immu-client.ts:464](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L464)

___

### getValRefs

▸ **getValRefs**(`props`): `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

Gets values and refs for all provided keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetAllValRefsProps`](../modules/immu_api_get.md#getallvalrefsprops) |

#### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-client.ts:474](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L474)

___

### keepAlive

▸ **keepAlive**(): `Promise`<`void`\>

Asks ImmuDb to not close (idle?) connection.

#### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-client.ts:188](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L188)

___

### listDbs

▸ **listDbs**(): `Promise`<[`DBRuntimeInfo`](../modules/types_Db.md#dbruntimeinfo)[]\>

Lists all ImmuDb server databases.

#### Returns

`Promise`<[`DBRuntimeInfo`](../modules/types_Db.md#dbruntimeinfo)[]\>

#### Defined in

[immudb-node/src/immu-client.ts:842](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L842)

___

### listUsers

▸ **listUsers**(): `Promise`<[`UserInfo`](../modules/types_User.md#userinfo)[]\>

Lists ImmuDb server users, can also activate user.

#### Returns

`Promise`<[`UserInfo`](../modules/types_User.md#userinfo)[]\>

#### Defined in

[immudb-node/src/immu-client.ts:741](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L741)

___

### loadDb

▸ **loadDb**(`props`): `Promise`<`string`\>

Loads database at ImmuDb server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LoadDbProps`](../modules/immu_api_db.md#loaddbprops) |

#### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-client.ts:802](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L802)

___

### replicateTx

▸ **replicateTx**(`props`): `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

Replicates transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ReplicateTxProps`](../modules/immu_api_instance.md#replicatetxprops) |

#### Returns

`Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-client.ts:890](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L890)

___

### scanDbEntries

▸ **scanDbEntries**(`props`): `Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

Scans all database entries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanDBProps`](../modules/immu_api_scan_txes.md#scandbprops) |

#### Returns

`Promise`<[`TxEntry`](../modules/types_TxEntry.md#txentry)[]\>

#### Defined in

[immudb-node/src/immu-client.ts:486](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L486)

___

### scanHistory

▸ **scanHistory**(`props`): `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

Scans entry history.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetHistoryProps`](../modules/immu_api_history.md#gethistoryprops) |

#### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-client.ts:497](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L497)

___

### scanHistoryStreaming

▸ **scanHistoryStreaming**(`props`): `Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

Scans entry history.
Returns output as stream.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GetHistoryProps`](../modules/immu_api_history.md#gethistoryprops) |

#### Returns

`Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

#### Defined in

[immudb-node/src/immu-client.ts:510](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L510)

___

### scanTxes

▸ **scanTxes**(`props`): `Promise`<`Tx__Output`[]\>

Scans database transactions in one transaction. This is most fundamental
operation of ImmuDb.

Result is composed in following way:
- entries are filtered out for actions:
  - `EXCLUDE`,
- entries go ordered into `entries` array fild for actions:
  - `RAW_VALUE`,
  - `ONLY_DIGEST`,
  - `undefined`,
- KV entries go ordered into `kvEntries` array fild for
  `kvOrRefEntryAction` action:
  - `RESOLVE`,
- Z entries go ordered into `zEntries` array fild for `zEntryAction`
  action:
  - `RESOLVE`,

Transactions are ordered with transaction id, however depending on
operation parameters it may not be sequential (`RESOLVE` action will
cause values to go to separate arrays, `EXCLUDE` will filter them out).

To obtain sequential transactions ordering set all actions as:
- `RAW_VALUE` or
- `ONLY_DIGEST`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanTxesProps`](../modules/immu_api_scan_txes.md#scantxesprops) |

#### Returns

`Promise`<`Tx__Output`[]\>

#### Defined in

[immudb-node/src/immu-client.ts:399](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L399)

___

### scanValRefEntries

▸ **scanValRefEntries**(`props?`): `Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

Scans database VEntries and RefEntries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ScanValRefEntriesProps`](../modules/immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) |

#### Returns

`Promise`<{ `refTxEntry?`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`RefEntry`](../modules/types_Entry.md#refentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo) ; `valTxEntry`: [`TxContext`](../modules/types_TxEntry.md#txcontext) & [`ValEntry`](../modules/types_Entry.md#valentry) & [`IndexerInfo`](../modules/types_Indexer.md#indexerinfo)  }[]\>

#### Defined in

[immudb-node/src/immu-client.ts:331](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L331)

___

### scanValRefEntriesStreaming

▸ **scanValRefEntriesStreaming**(`props`): `Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

Scans database VEntries and RefEntries in one transaction.
Returns output as stream.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanValRefEntriesProps`](../modules/immu_api_scan_val_ref_entries.md#scanvalrefentriesprops) |

#### Returns

`Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

#### Defined in

[immudb-node/src/immu-client.ts:342](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L342)

___

### scanZEntries

▸ **scanZEntries**(`props`): `Promise`<{ `refTxEntry?`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }[]\>

Scans database ZEntries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanZSetEntriesProps`](../modules/immu_api_scan_zSet_entries.md#scanzsetentriesprops) |

#### Returns

`Promise`<{ `refTxEntry?`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `valTxEntry`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }[]\>

#### Defined in

[immudb-node/src/immu-client.ts:352](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L352)

___

### scanZEntriesStreaming

▸ **scanZEntriesStreaming**(`props`): `Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

Scans database ZEntries in one transaction.
Returns output as stream.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScanZSetEntriesProps`](../modules/immu_api_scan_zSet_entries.md#scanzsetentriesprops) |

#### Returns

`Promise`<`AsyncGenerator`<`Chunk__Output`, `any`[], `unknown`\>\>

#### Defined in

[immudb-node/src/immu-client.ts:364](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L364)

___

### setDbSettings

▸ **setDbSettings**(`props`): `Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

Sets database settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetDbSettingsProps`](../modules/immu_api_db.md#setdbsettingsprops) |

#### Returns

`Promise`<{ `database`: `string` = resp.database; `settings`: [`DatabaseSettings`](../modules/types_Db.md#databasesettings)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:869](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L869)

___

### setRefEntry

▸ **setRefEntry**(`props`): `Promise`<{ `ref`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](../modules/types_Tx.md#txcore)  }\>

Sets RefEntry in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetRefEntryProps`](../modules/immu_api_set_ref_entry.md#setrefentryprops) |

#### Returns

`Promise`<{ `ref`: [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) ; `txCore`: [`TxCore`](../modules/types_Tx.md#txcore)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:278](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L278)

___

### setRefEntryGetVerification

▸ **setRefEntryGetVerification**(`props`): `Promise`<{ `refEntry`: [`RefEntry`](../modules/types_Entry.md#refentry) ; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

Sets RefEntry in one transaction.

Returns RefEntry set and its verification structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetRefEntryProps`](../modules/immu_api_set_ref_entry.md#setrefentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) |

#### Returns

`Promise`<{ `refEntry`: [`RefEntry`](../modules/types_Entry.md#refentry) ; `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:976](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L976)

___

### setUserDbPermissions

▸ **setUserDbPermissions**(`props`): `Promise`<[`SetUserDbPermissionsProps`](../modules/immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\>

Sets ImmuDb server user permissions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserDbPermissionsProps`](../modules/immu_api_user.md#setuserdbpermissionsprops) |

#### Returns

`Promise`<[`SetUserDbPermissionsProps`](../modules/immu_api_user.md#setuserdbpermissionsprops) & { `credentials`: `CallCredentials`  }\>

#### Defined in

[immudb-node/src/immu-client.ts:751](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L751)

___

### setUserPassword

▸ **setUserPassword**(`props`): `Promise`<`string`\>

Sets ImmuDb server user password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetUserPasswordProps`](../modules/immu_api_user.md#setuserpasswordprops) |

#### Returns

`Promise`<`string`\>

#### Defined in

[immudb-node/src/immu-client.ts:761](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L761)

___

### setValEntries

▸ **setValEntries**(`props`): `Promise`<{ `txCore`: [`TxCore`](../modules/types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry)[]  }\>

Sets all value entries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetValEntryProps`](../modules/immu_api_set_val_entry.md#setvalentryprops) |

#### Returns

`Promise`<{ `txCore`: [`TxCore`](../modules/types_Tx.md#txcore) ; `valEntries`: [`ValTxEntry`](../modules/types_TxEntry.md#valtxentry)[]  }\>

#### Defined in

[immudb-node/src/immu-client.ts:236](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L236)

___

### setValEntriesGetVerification

▸ **setValEntriesGetVerification**(`props`): `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

Sets all value entries in one transaction.

Returns entries set and its verification structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetValEntryProps`](../modules/immu_api_set_val_entry.md#setvalentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) |

#### Returns

`Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:961](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L961)

___

### setValEntriesStreaming

▸ **setValEntriesStreaming**(`props`): `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

Sets multiple ValEntries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetValEntriesStreamingProps`](../modules/immu_api_set_val_entry.md#setvalentriesstreamingprops) |

#### Returns

`Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-client.ts:253](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L253)

___

### setValRefZSetEntries

▸ **setValRefZSetEntries**(`props`): `Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) \| [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry))[]  }\>

Sets multiple ValEntries, RefEntries or ZSetEntries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetEntryProps`](../modules/immu_api_set_val_ref_zSet.md#setentryprops) |

#### Returns

`Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `txEntries`: ([`ValTxEntry`](../modules/types_TxEntry.md#valtxentry) \| [`RefTxEntry`](../modules/types_TxEntry.md#reftxentry) \| [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry))[]  }\>

#### Defined in

[immudb-node/src/immu-client.ts:209](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L209)

___

### setValZSetEntriesStreaming

▸ **setValZSetEntriesStreaming**(`props`): `Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

Sets multiple ValEntries or ZSetEntries in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetEntriesStreamingProps`](../modules/immu_api_set_val_ref_zSet.md#setentriesstreamingprops) |

#### Returns

`Promise`<[`TxCore`](../modules/types_Tx.md#txcore)\>

#### Defined in

[immudb-node/src/immu-client.ts:223](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L223)

___

### setZSetEntry

▸ **setZSetEntry**(`props`): `Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry)  }\>

Sets ZEntry in one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetZSetEntryProps`](../modules/immu_api_set_z_entry.md#setzsetentryprops) |

#### Returns

`Promise`<{ `tx`: [`TxCore`](../modules/types_Tx.md#txcore) ; `zSetTxEntry`: [`ZSetTxEntry`](../modules/types_TxEntry.md#zsettxentry)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:265](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L265)

___

### setZSetEntryGetVerification

▸ **setZSetEntryGetVerification**(`props`): `Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }\>

Sets ZSetEntry in one transaction.

Returns ZSetEntry set and its verification structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SetZSetEntryProps`](../modules/immu_api_set_z_entry.md#setzsetentryprops) & [`ProofRequestProps`](../modules/immu_api_verification_set_val.md#proofrequestprops) |

#### Returns

`Promise`<{ `transaction`: [`Transaction`](../modules/types_Transaction.md#transaction) ; `verification`: [`Verification`](../modules/types_Verification.md#verification) ; `zSetEntry`: [`ZSetEntry`](../modules/types_Entry.md#zsetentry)  }\>

#### Defined in

[immudb-node/src/immu-client.ts:991](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L991)

___

### sqlExec

▸ **sqlExec**(`props`): `Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](../modules/types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\>

Executes sql batch as one transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlExecProps`](../modules/immu_api_sql_exec.md#sqlexecprops) |

#### Returns

`Promise`<{ `isInTransaction`: `boolean` ; `subTxes`: { `firstPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `lastPK`: [`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[] ; `tx`: `undefined` \| [`TxCore`](../modules/types_Tx.md#txcore) ; `updatedRowsCount`: `number`  }[]  }\>

#### Defined in

[immudb-node/src/immu-client.ts:565](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L565)

___

### sqlQuery

▸ **sqlQuery**(`props`): `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

Sql queries DB in one transaction. (Multiple result sets?)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlQueryProps`](../modules/immu_api_sql_query.md#sqlqueryprops) |

#### Returns

`Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-client.ts:532](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L532)

___

### sqlQueryTable

▸ **sqlQueryTable**(`table`): `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

Queries sql table schema.

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |

#### Returns

`Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-client.ts:554](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L554)

___

### sqlQueryTables

▸ **sqlQueryTables**(`props`): `Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

Queries current db for sql tables.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SqlQueryProps`](../modules/immu_api_sql_query.md#sqlqueryprops) |

#### Returns

`Promise`<[`SqlNamedValue`](../modules/types_SQL.md#sqlnamedvalue)[][]\>

#### Defined in

[immudb-node/src/immu-client.ts:543](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L543)

___

### unloadDb

▸ **unloadDb**(`props`): `Promise`<`void`\>

Unloads database at ImmuDb server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`UnloadDbProps`](../modules/immu_api_db.md#unloaddbprops) |

#### Returns

`Promise`<`void`\>

#### Defined in

[immudb-node/src/immu-client.ts:812](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/immu-client.ts#L812)
