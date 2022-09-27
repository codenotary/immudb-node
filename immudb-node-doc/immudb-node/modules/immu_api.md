[immudb-node](../README.md) / [Exports](../modules.md) / immu-api

# Module: immu-api

## Table of contents

### References

- [CreateDatabaseProps](immu_api.md#createdatabaseprops)
- [CreateUsersProps](immu_api.md#createusersprops)
- [DeleteDatabaseProps](immu_api.md#deletedatabaseprops)
- [DeleteValRefProps](immu_api.md#deletevalrefprops)
- [ExportTxProps](immu_api.md#exporttxprops)
- [FlushDatabaseIndexProps](immu_api.md#flushdatabaseindexprops)
- [GetAllValRefsProps](immu_api.md#getallvalrefsprops)
- [GetHistoryProps](immu_api.md#gethistoryprops)
- [GetSqlRowEntryAndVerificationProps](immu_api.md#getsqlrowentryandverificationprops)
- [GetTxAndVerificationProps](immu_api.md#gettxandverificationprops)
- [GetTxGenericEntriesProps](immu_api.md#gettxgenericentriesprops)
- [GetTxWithEntriesProps](immu_api.md#gettxwithentriesprops)
- [GetValRefAndVerificationProps](immu_api.md#getvalrefandverificationprops)
- [GetValRefProps](immu_api.md#getvalrefprops)
- [LoadDbProps](immu_api.md#loaddbprops)
- [ProofRequestProps](immu_api.md#proofrequestprops)
- [ReplicateTxProps](immu_api.md#replicatetxprops)
- [ScanDBProps](immu_api.md#scandbprops)
- [ScanTxesProps](immu_api.md#scantxesprops)
- [ScanValRefEntriesProps](immu_api.md#scanvalrefentriesprops)
- [ScanZSetEntriesProps](immu_api.md#scanzsetentriesprops)
- [SetDbSettingsProps](immu_api.md#setdbsettingsprops)
- [SetEntriesStreamingProps](immu_api.md#setentriesstreamingprops)
- [SetEntryProps](immu_api.md#setentryprops)
- [SetOperation](immu_api.md#setoperation)
- [SetRefEntryProps](immu_api.md#setrefentryprops)
- [SetUserActiveProps](immu_api.md#setuseractiveprops)
- [SetUserDbPermissionsProps](immu_api.md#setuserdbpermissionsprops)
- [SetUserPasswordProps](immu_api.md#setuserpasswordprops)
- [SetValEntriesStreamingProps](immu_api.md#setvalentriesstreamingprops)
- [SetValEntryProps](immu_api.md#setvalentryprops)
- [SetZSetEntryProps](immu_api.md#setzsetentryprops)
- [SqlExecProps](immu_api.md#sqlexecprops)
- [SqlQueryProps](immu_api.md#sqlqueryprops)
- [SqlQueryTableProps](immu_api.md#sqlquerytableprops)
- [SqlTxExecProps](immu_api.md#sqltxexecprops)
- [SqlTxNewProps](immu_api.md#sqltxnewprops)
- [SqlTxQueryProps](immu_api.md#sqltxqueryprops)
- [UnloadDbProps](immu_api.md#unloaddbprops)
- [UseDbProps](immu_api.md#usedbprops)
- [createCloseSession](immu_api.md#createclosesession)
- [createCompactDbIndex](immu_api.md#createcompactdbindex)
- [createCreateDb](immu_api.md#createcreatedb)
- [createCreateUser](immu_api.md#createcreateuser)
- [createDeleteDb](immu_api.md#createdeletedb)
- [createDeleteValRef](immu_api.md#createdeletevalref)
- [createExportTx](immu_api.md#createexporttx)
- [createFlushDbIndex](immu_api.md#createflushdbindex)
- [createGetDbCurrentState](immu_api.md#creategetdbcurrentstate)
- [createGetDbSettings](immu_api.md#creategetdbsettings)
- [createGetSqlRowEntryAndVerification](immu_api.md#creategetsqlrowentryandverification)
- [createGetTxAndVerification](immu_api.md#creategettxandverification)
- [createGetTxGenericEntries](immu_api.md#creategettxgenericentries)
- [createGetTxWithEntries](immu_api.md#creategettxwithentries)
- [createGetValRef](immu_api.md#creategetvalref)
- [createGetValRefAndVerification](immu_api.md#creategetvalrefandverification)
- [createGetValRefStreaming](immu_api.md#creategetvalrefstreaming)
- [createGetValRefs](immu_api.md#creategetvalrefs)
- [createKeepAlive](immu_api.md#createkeepalive)
- [createListDbs](immu_api.md#createlistdbs)
- [createListUsers](immu_api.md#createlistusers)
- [createLoadDb](immu_api.md#createloaddb)
- [createOpenSession](immu_api.md#createopensession)
- [createReplicateTx](immu_api.md#createreplicatetx)
- [createScanDb](immu_api.md#createscandb)
- [createScanHistory](immu_api.md#createscanhistory)
- [createScanHistoryStreaming](immu_api.md#createscanhistorystreaming)
- [createScanTxes](immu_api.md#createscantxes)
- [createScanValRefEntries](immu_api.md#createscanvalrefentries)
- [createScanValRefEntriesStreaming](immu_api.md#createscanvalrefentriesstreaming)
- [createScanZEntries](immu_api.md#createscanzentries)
- [createScanZEntriesStreaming](immu_api.md#createscanzentriesstreaming)
- [createServerInfo](immu_api.md#createserverinfo)
- [createSetDbSettings](immu_api.md#createsetdbsettings)
- [createSetEntries](immu_api.md#createsetentries)
- [createSetEntriesStreaming](immu_api.md#createsetentriesstreaming)
- [createSetRefEntry](immu_api.md#createsetrefentry)
- [createSetRefEntryGetVerification](immu_api.md#createsetrefentrygetverification)
- [createSetUserActive](immu_api.md#createsetuseractive)
- [createSetUserDbPermissions](immu_api.md#createsetuserdbpermissions)
- [createSetUserPassword](immu_api.md#createsetuserpassword)
- [createSetValEntries](immu_api.md#createsetvalentries)
- [createSetValEntriesGetVerification](immu_api.md#createsetvalentriesgetverification)
- [createSetValEntriesStreaming](immu_api.md#createsetvalentriesstreaming)
- [createSetZSetEntry](immu_api.md#createsetzsetentry)
- [createSetZSetEntryGetVerification](immu_api.md#createsetzsetentrygetverification)
- [createSqlExec](immu_api.md#createsqlexec)
- [createSqlQuery](immu_api.md#createsqlquery)
- [createSqlQueryTable](immu_api.md#createsqlquerytable)
- [createSqlQueryTables](immu_api.md#createsqlquerytables)
- [createSqlTxCommit](immu_api.md#createsqltxcommit)
- [createSqlTxExec](immu_api.md#createsqltxexec)
- [createSqlTxNew](immu_api.md#createsqltxnew)
- [createSqlTxQuery](immu_api.md#createsqltxquery)
- [createSqlTxRollback](immu_api.md#createsqltxrollback)
- [createUnloadDb](immu_api.md#createunloaddb)
- [createUseDb](immu_api.md#createusedb)

## References

### CreateDatabaseProps

Re-exports [CreateDatabaseProps](immu_api_db.md#createdatabaseprops)

___

### CreateUsersProps

Re-exports [CreateUsersProps](immu_api_user.md#createusersprops)

___

### DeleteDatabaseProps

Re-exports [DeleteDatabaseProps](immu_api_db.md#deletedatabaseprops)

___

### DeleteValRefProps

Re-exports [DeleteValRefProps](immu_api_delete_val_ref.md#deletevalrefprops)

___

### ExportTxProps

Re-exports [ExportTxProps](immu_api_instance.md#exporttxprops)

___

### FlushDatabaseIndexProps

Re-exports [FlushDatabaseIndexProps](immu_api_db.md#flushdatabaseindexprops)

___

### GetAllValRefsProps

Re-exports [GetAllValRefsProps](immu_api_get.md#getallvalrefsprops)

___

### GetHistoryProps

Re-exports [GetHistoryProps](immu_api_history.md#gethistoryprops)

___

### GetSqlRowEntryAndVerificationProps

Re-exports [GetSqlRowEntryAndVerificationProps](immu_api_verification_get_sql_row.md#getsqlrowentryandverificationprops)

___

### GetTxAndVerificationProps

Re-exports [GetTxAndVerificationProps](immu_api_verification_get_tx.md#gettxandverificationprops)

___

### GetTxGenericEntriesProps

Re-exports [GetTxGenericEntriesProps](immu_api_get.md#gettxgenericentriesprops)

___

### GetTxWithEntriesProps

Re-exports [GetTxWithEntriesProps](immu_api_get.md#gettxwithentriesprops)

___

### GetValRefAndVerificationProps

Re-exports [GetValRefAndVerificationProps](immu_api_verification_get_val_ref.md#getvalrefandverificationprops)

___

### GetValRefProps

Re-exports [GetValRefProps](immu_api_get.md#getvalrefprops)

___

### LoadDbProps

Re-exports [LoadDbProps](immu_api_db.md#loaddbprops)

___

### ProofRequestProps

Re-exports [ProofRequestProps](immu_api_verification_set_val.md#proofrequestprops)

___

### ReplicateTxProps

Re-exports [ReplicateTxProps](immu_api_instance.md#replicatetxprops)

___

### ScanDBProps

Re-exports [ScanDBProps](immu_api_scan_txes.md#scandbprops)

___

### ScanTxesProps

Re-exports [ScanTxesProps](immu_api_scan_txes.md#scantxesprops)

___

### ScanValRefEntriesProps

Re-exports [ScanValRefEntriesProps](immu_api_scan_val_ref_entries.md#scanvalrefentriesprops)

___

### ScanZSetEntriesProps

Re-exports [ScanZSetEntriesProps](immu_api_scan_zSet_entries.md#scanzsetentriesprops)

___

### SetDbSettingsProps

Re-exports [SetDbSettingsProps](immu_api_db.md#setdbsettingsprops)

___

### SetEntriesStreamingProps

Re-exports [SetEntriesStreamingProps](immu_api_set_val_ref_zSet.md#setentriesstreamingprops)

___

### SetEntryProps

Re-exports [SetEntryProps](immu_api_set_val_ref_zSet.md#setentryprops)

___

### SetOperation

Re-exports [SetOperation](immu_api_set_val_ref_zSet.md#setoperation)

___

### SetRefEntryProps

Re-exports [SetRefEntryProps](immu_api_set_ref_entry.md#setrefentryprops)

___

### SetUserActiveProps

Re-exports [SetUserActiveProps](immu_api_user.md#setuseractiveprops)

___

### SetUserDbPermissionsProps

Re-exports [SetUserDbPermissionsProps](immu_api_user.md#setuserdbpermissionsprops)

___

### SetUserPasswordProps

Re-exports [SetUserPasswordProps](immu_api_user.md#setuserpasswordprops)

___

### SetValEntriesStreamingProps

Re-exports [SetValEntriesStreamingProps](immu_api_set_val_entry.md#setvalentriesstreamingprops)

___

### SetValEntryProps

Re-exports [SetValEntryProps](immu_api_set_val_entry.md#setvalentryprops)

___

### SetZSetEntryProps

Re-exports [SetZSetEntryProps](immu_api_set_z_entry.md#setzsetentryprops)

___

### SqlExecProps

Re-exports [SqlExecProps](immu_api_sql_exec.md#sqlexecprops)

___

### SqlQueryProps

Re-exports [SqlQueryProps](immu_api_sql_query.md#sqlqueryprops)

___

### SqlQueryTableProps

Re-exports [SqlQueryTableProps](immu_api_sql_query.md#sqlquerytableprops)

___

### SqlTxExecProps

Re-exports [SqlTxExecProps](immu_api_sql_tx.md#sqltxexecprops)

___

### SqlTxNewProps

Re-exports [SqlTxNewProps](immu_api_sql_tx.md#sqltxnewprops)

___

### SqlTxQueryProps

Re-exports [SqlTxQueryProps](immu_api_sql_tx.md#sqltxqueryprops)

___

### UnloadDbProps

Re-exports [UnloadDbProps](immu_api_db.md#unloaddbprops)

___

### UseDbProps

Re-exports [UseDbProps](immu_api_session.md#usedbprops)

___

### createCloseSession

Re-exports [createCloseSession](immu_api_session.md#createclosesession)

___

### createCompactDbIndex

Re-exports [createCompactDbIndex](immu_api_db.md#createcompactdbindex)

___

### createCreateDb

Re-exports [createCreateDb](immu_api_db.md#createcreatedb)

___

### createCreateUser

Re-exports [createCreateUser](immu_api_user.md#createcreateuser)

___

### createDeleteDb

Re-exports [createDeleteDb](immu_api_db.md#createdeletedb)

___

### createDeleteValRef

Re-exports [createDeleteValRef](immu_api_delete_val_ref.md#createdeletevalref)

___

### createExportTx

Re-exports [createExportTx](immu_api_instance.md#createexporttx)

___

### createFlushDbIndex

Re-exports [createFlushDbIndex](immu_api_db.md#createflushdbindex)

___

### createGetDbCurrentState

Re-exports [createGetDbCurrentState](immu_api_db.md#creategetdbcurrentstate)

___

### createGetDbSettings

Re-exports [createGetDbSettings](immu_api_db.md#creategetdbsettings)

___

### createGetSqlRowEntryAndVerification

Re-exports [createGetSqlRowEntryAndVerification](immu_api_verification_get_sql_row.md#creategetsqlrowentryandverification)

___

### createGetTxAndVerification

Re-exports [createGetTxAndVerification](immu_api_verification_get_tx.md#creategettxandverification)

___

### createGetTxGenericEntries

Re-exports [createGetTxGenericEntries](immu_api_get.md#creategettxgenericentries)

___

### createGetTxWithEntries

Re-exports [createGetTxWithEntries](immu_api_get.md#creategettxwithentries)

___

### createGetValRef

Re-exports [createGetValRef](immu_api_get.md#creategetvalref)

___

### createGetValRefAndVerification

Re-exports [createGetValRefAndVerification](immu_api_verification_get_val_ref.md#creategetvalrefandverification)

___

### createGetValRefStreaming

Re-exports [createGetValRefStreaming](immu_api_get.md#creategetvalrefstreaming)

___

### createGetValRefs

Re-exports [createGetValRefs](immu_api_get.md#creategetvalrefs)

___

### createKeepAlive

Re-exports [createKeepAlive](immu_api_session.md#createkeepalive)

___

### createListDbs

Re-exports [createListDbs](immu_api_db.md#createlistdbs)

___

### createListUsers

Re-exports [createListUsers](immu_api_user.md#createlistusers)

___

### createLoadDb

Re-exports [createLoadDb](immu_api_db.md#createloaddb)

___

### createOpenSession

Re-exports [createOpenSession](immu_api_session.md#createopensession)

___

### createReplicateTx

Re-exports [createReplicateTx](immu_api_instance.md#createreplicatetx)

___

### createScanDb

Re-exports [createScanDb](immu_api_scan_txes.md#createscandb)

___

### createScanHistory

Re-exports [createScanHistory](immu_api_history.md#createscanhistory)

___

### createScanHistoryStreaming

Re-exports [createScanHistoryStreaming](immu_api_history.md#createscanhistorystreaming)

___

### createScanTxes

Re-exports [createScanTxes](immu_api_scan_txes.md#createscantxes)

___

### createScanValRefEntries

Re-exports [createScanValRefEntries](immu_api_scan_val_ref_entries.md#createscanvalrefentries)

___

### createScanValRefEntriesStreaming

Re-exports [createScanValRefEntriesStreaming](immu_api_scan_val_ref_entries.md#createscanvalrefentriesstreaming)

___

### createScanZEntries

Re-exports [createScanZEntries](immu_api_scan_zSet_entries.md#createscanzentries)

___

### createScanZEntriesStreaming

Re-exports [createScanZEntriesStreaming](immu_api_scan_zSet_entries.md#createscanzentriesstreaming)

___

### createServerInfo

Re-exports [createServerInfo](immu_api_instance.md#createserverinfo)

___

### createSetDbSettings

Re-exports [createSetDbSettings](immu_api_db.md#createsetdbsettings)

___

### createSetEntries

Re-exports [createSetEntries](immu_api_set_val_ref_zSet.md#createsetentries)

___

### createSetEntriesStreaming

Re-exports [createSetEntriesStreaming](immu_api_set_val_ref_zSet.md#createsetentriesstreaming)

___

### createSetRefEntry

Re-exports [createSetRefEntry](immu_api_set_ref_entry.md#createsetrefentry)

___

### createSetRefEntryGetVerification

Re-exports [createSetRefEntryGetVerification](immu_api_verification_set_ref.md#createsetrefentrygetverification)

___

### createSetUserActive

Re-exports [createSetUserActive](immu_api_user.md#createsetuseractive)

___

### createSetUserDbPermissions

Re-exports [createSetUserDbPermissions](immu_api_user.md#createsetuserdbpermissions)

___

### createSetUserPassword

Re-exports [createSetUserPassword](immu_api_user.md#createsetuserpassword)

___

### createSetValEntries

Re-exports [createSetValEntries](immu_api_set_val_entry.md#createsetvalentries)

___

### createSetValEntriesGetVerification

Re-exports [createSetValEntriesGetVerification](immu_api_verification_set_val.md#createsetvalentriesgetverification)

___

### createSetValEntriesStreaming

Re-exports [createSetValEntriesStreaming](immu_api_set_val_entry.md#createsetvalentriesstreaming)

___

### createSetZSetEntry

Re-exports [createSetZSetEntry](immu_api_set_z_entry.md#createsetzsetentry)

___

### createSetZSetEntryGetVerification

Re-exports [createSetZSetEntryGetVerification](immu_api_verification_set_zSet.md#createsetzsetentrygetverification)

___

### createSqlExec

Re-exports [createSqlExec](immu_api_sql_exec.md#createsqlexec)

___

### createSqlQuery

Re-exports [createSqlQuery](immu_api_sql_query.md#createsqlquery)

___

### createSqlQueryTable

Re-exports [createSqlQueryTable](immu_api_sql_query.md#createsqlquerytable)

___

### createSqlQueryTables

Re-exports [createSqlQueryTables](immu_api_sql_query.md#createsqlquerytables)

___

### createSqlTxCommit

Re-exports [createSqlTxCommit](immu_api_sql_tx.md#createsqltxcommit)

___

### createSqlTxExec

Re-exports [createSqlTxExec](immu_api_sql_tx.md#createsqltxexec)

___

### createSqlTxNew

Re-exports [createSqlTxNew](immu_api_sql_tx.md#createsqltxnew)

___

### createSqlTxQuery

Re-exports [createSqlTxQuery](immu_api_sql_tx.md#createsqltxquery)

___

### createSqlTxRollback

Re-exports [createSqlTxRollback](immu_api_sql_tx.md#createsqltxrollback)

___

### createUnloadDb

Re-exports [createUnloadDb](immu_api_db.md#createunloaddb)

___

### createUseDb

Re-exports [createUseDb](immu_api_session.md#createusedb)
