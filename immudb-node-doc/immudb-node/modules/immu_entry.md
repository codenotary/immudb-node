[immudb-node](../README.md) / [Exports](../modules.md) / immu-entry

# Module: immu-entry

## Table of contents

### References

- [binEntryKeyToRefEntryKey](immu_entry.md#binentrykeytorefentrykey)
- [binEntryKeyToValEntryKey](immu_entry.md#binentrykeytovalentrykey)
- [binEntryPrefixedKeyToSqlColumnEntryPart](immu_entry.md#binentryprefixedkeytosqlcolumnentrypart)
- [binEntryPrefixedKeyToSqlDbEntryPart](immu_entry.md#binentryprefixedkeytosqldbentrypart)
- [binEntryPrefixedKeyToSqlIndexEntryPart](immu_entry.md#binentryprefixedkeytosqlindexentrypart)
- [binEntryPrefixedKeyToSqlTableEntryPart](immu_entry.md#binentryprefixedkeytosqltableentrypart)
- [binEntryPrefixedValToSqlColumnEntryPart](immu_entry.md#binentryprefixedvaltosqlcolumnentrypart)
- [binEntryPrefixedValToSqlDbEntryName](immu_entry.md#binentryprefixedvaltosqldbentryname)
- [binEntryPrefixedValToSqlIndexEntryPart](immu_entry.md#binentryprefixedvaltosqlindexentrypart)
- [binEntryPrefixedValToSqlTableEntryName](immu_entry.md#binentryprefixedvaltosqltableentryname)
- [binEntryToEntry](immu_entry.md#binentrytoentry)
- [binEntryToEntryType](immu_entry.md#binentrytoentrytype)
- [binEntryToRefEntry](immu_entry.md#binentrytorefentry)
- [binEntryToSqlColumnEntry](immu_entry.md#binentrytosqlcolumnentry)
- [binEntryToSqlDbEntry](immu_entry.md#binentrytosqldbentry)
- [binEntryToSqlEntry](immu_entry.md#binentrytosqlentry)
- [binEntryToSqlEntryType](immu_entry.md#binentrytosqlentrytype)
- [binEntryToSqlIndexEntry](immu_entry.md#binentrytosqlindexentry)
- [binEntryToSqlRowEntry](immu_entry.md#binentrytosqlrowentry)
- [binEntryToSqlTableEntry](immu_entry.md#binentrytosqltableentry)
- [binEntryToValEntry](immu_entry.md#binentrytovalentry)
- [binEntryToZSetEntry](immu_entry.md#binentrytozsetentry)
- [binEntryValToValEntryVal](immu_entry.md#binentryvaltovalentryval)
- [decodeBinEntryKeyAsZSetEntryPart](immu_entry.md#decodebinentrykeyaszsetentrypart)
- [decodeBinEntryKeyToSqlRowEntryPart](immu_entry.md#decodebinentrykeytosqlrowentrypart)
- [decodeBinEntryValAsRefEntryPart](immu_entry.md#decodebinentryvalasrefentrypart)
- [decodeSqlRowColumnValue](immu_entry.md#decodesqlrowcolumnvalue)
- [decodeSqlRowColumnsValues](immu_entry.md#decodesqlrowcolumnsvalues)
- [decodeValueSqlRow](immu_entry.md#decodevaluesqlrow)
- [encodeValueSqlRow](immu_entry.md#encodevaluesqlrow)
- [entryToBinEntry](immu_entry.md#entrytobinentry)
- [entryToLeafEntryPrefixedKey](immu_entry.md#entrytoleafentryprefixedkey)
- [isBinEntryKeySqlColumnEntryPart](immu_entry.md#isbinentrykeysqlcolumnentrypart)
- [isBinEntryKeySqlDbEntryPart](immu_entry.md#isbinentrykeysqldbentrypart)
- [isBinEntryKeySqlIndexEntryPart](immu_entry.md#isbinentrykeysqlindexentrypart)
- [isBinEntryKeySqlRowEntryPart](immu_entry.md#isbinentrykeysqlrowentrypart)
- [isBinEntryKeySqlTableEntryPart](immu_entry.md#isbinentrykeysqltableentrypart)
- [refEntryToBinEntry](immu_entry.md#refentrytobinentry)
- [refEntryToLeafEntryPrefixedKey](immu_entry.md#refentrytoleafentryprefixedkey)
- [sqlColumnEntryToBinEntry](immu_entry.md#sqlcolumnentrytobinentry)
- [sqlColumnEntryToLeafEntryPrefixedKey](immu_entry.md#sqlcolumnentrytoleafentryprefixedkey)
- [sqlColumnEntryToLeafEntryPrefixedVal](immu_entry.md#sqlcolumnentrytoleafentryprefixedval)
- [sqlDbEntryToBinEntry](immu_entry.md#sqldbentrytobinentry)
- [sqlDbEntryToBinEntryPrefixedVal](immu_entry.md#sqldbentrytobinentryprefixedval)
- [sqlDbEntryToLeafEntryPrefixedKey](immu_entry.md#sqldbentrytoleafentryprefixedkey)
- [sqlEntryToBinEntry](immu_entry.md#sqlentrytobinentry)
- [sqlEntryToLeafEntryPrefixedKey](immu_entry.md#sqlentrytoleafentryprefixedkey)
- [sqlIndexEntryToBinEntry](immu_entry.md#sqlindexentrytobinentry)
- [sqlIndexEntryToBinEntryPrefixedVal](immu_entry.md#sqlindexentrytobinentryprefixedval)
- [sqlIndexEntryToLeafEntryPrefixedKey](immu_entry.md#sqlindexentrytoleafentryprefixedkey)
- [sqlRowEntryToLeafEntryPrefixedKey](immu_entry.md#sqlrowentrytoleafentryprefixedkey)
- [sqlRowEntryToSqlBinEntry](immu_entry.md#sqlrowentrytosqlbinentry)
- [sqlTableEntryToBinEntry](immu_entry.md#sqltableentrytobinentry)
- [sqlTableEntryToBinEntryPrefixedVal](immu_entry.md#sqltableentrytobinentryprefixedval)
- [sqlTableEntryToLeafEntryPrefixedKey](immu_entry.md#sqltableentrytoleafentryprefixedkey)
- [valEntryToBinEntry](immu_entry.md#valentrytobinentry)
- [valEntryToLeafEntryPrefixedKey](immu_entry.md#valentrytoleafentryprefixedkey)
- [zSetEntryToBinEntry](immu_entry.md#zsetentrytobinentry)
- [zSetEntryToLeafEntryPrefixedKey](immu_entry.md#zsetentrytoleafentryprefixedkey)

## References

### binEntryKeyToRefEntryKey

Re-exports [binEntryKeyToRefEntryKey](immu_entry_RefEntry.md#binentrykeytorefentrykey)

___

### binEntryKeyToValEntryKey

Re-exports [binEntryKeyToValEntryKey](immu_entry_ValEntry.md#binentrykeytovalentrykey)

___

### binEntryPrefixedKeyToSqlColumnEntryPart

Re-exports [binEntryPrefixedKeyToSqlColumnEntryPart](immu_entry_SqlColumnEntry.md#binentryprefixedkeytosqlcolumnentrypart)

___

### binEntryPrefixedKeyToSqlDbEntryPart

Re-exports [binEntryPrefixedKeyToSqlDbEntryPart](immu_entry_SqlDbEntry.md#binentryprefixedkeytosqldbentrypart)

___

### binEntryPrefixedKeyToSqlIndexEntryPart

Re-exports [binEntryPrefixedKeyToSqlIndexEntryPart](immu_entry_SqlIndexEntry.md#binentryprefixedkeytosqlindexentrypart)

___

### binEntryPrefixedKeyToSqlTableEntryPart

Re-exports [binEntryPrefixedKeyToSqlTableEntryPart](immu_entry_SqlTableEntry.md#binentryprefixedkeytosqltableentrypart)

___

### binEntryPrefixedValToSqlColumnEntryPart

Re-exports [binEntryPrefixedValToSqlColumnEntryPart](immu_entry_SqlColumnEntry.md#binentryprefixedvaltosqlcolumnentrypart)

___

### binEntryPrefixedValToSqlDbEntryName

Re-exports [binEntryPrefixedValToSqlDbEntryName](immu_entry_SqlDbEntry.md#binentryprefixedvaltosqldbentryname)

___

### binEntryPrefixedValToSqlIndexEntryPart

Re-exports [binEntryPrefixedValToSqlIndexEntryPart](immu_entry_SqlIndexEntry.md#binentryprefixedvaltosqlindexentrypart)

___

### binEntryPrefixedValToSqlTableEntryName

Re-exports [binEntryPrefixedValToSqlTableEntryName](immu_entry_SqlTableEntry.md#binentryprefixedvaltosqltableentryname)

___

### binEntryToEntry

Re-exports [binEntryToEntry](immu_entry_Entry.md#binentrytoentry)

___

### binEntryToEntryType

Re-exports [binEntryToEntryType](immu_entry_Entry.md#binentrytoentrytype)

___

### binEntryToRefEntry

Re-exports [binEntryToRefEntry](immu_entry_RefEntry.md#binentrytorefentry)

___

### binEntryToSqlColumnEntry

Re-exports [binEntryToSqlColumnEntry](immu_entry_SqlColumnEntry.md#binentrytosqlcolumnentry)

___

### binEntryToSqlDbEntry

Re-exports [binEntryToSqlDbEntry](immu_entry_SqlDbEntry.md#binentrytosqldbentry)

___

### binEntryToSqlEntry

Re-exports [binEntryToSqlEntry](immu_entry_SqlEntry.md#binentrytosqlentry)

___

### binEntryToSqlEntryType

Re-exports [binEntryToSqlEntryType](immu_entry_SqlEntry.md#binentrytosqlentrytype)

___

### binEntryToSqlIndexEntry

Re-exports [binEntryToSqlIndexEntry](immu_entry_SqlIndexEntry.md#binentrytosqlindexentry)

___

### binEntryToSqlRowEntry

Re-exports [binEntryToSqlRowEntry](immu_entry_SqlRowEntry.md#binentrytosqlrowentry)

___

### binEntryToSqlTableEntry

Re-exports [binEntryToSqlTableEntry](immu_entry_SqlTableEntry.md#binentrytosqltableentry)

___

### binEntryToValEntry

Re-exports [binEntryToValEntry](immu_entry_ValEntry.md#binentrytovalentry)

___

### binEntryToZSetEntry

Re-exports [binEntryToZSetEntry](immu_entry_ZSetEntry.md#binentrytozsetentry)

___

### binEntryValToValEntryVal

Re-exports [binEntryValToValEntryVal](immu_entry_ValEntry.md#binentryvaltovalentryval)

___

### decodeBinEntryKeyAsZSetEntryPart

Re-exports [decodeBinEntryKeyAsZSetEntryPart](immu_entry_ZSetEntry.md#decodebinentrykeyaszsetentrypart)

___

### decodeBinEntryKeyToSqlRowEntryPart

Re-exports [decodeBinEntryKeyToSqlRowEntryPart](immu_entry_SqlRowEntry.md#decodebinentrykeytosqlrowentrypart)

___

### decodeBinEntryValAsRefEntryPart

Re-exports [decodeBinEntryValAsRefEntryPart](immu_entry_RefEntry.md#decodebinentryvalasrefentrypart)

___

### decodeSqlRowColumnValue

Re-exports [decodeSqlRowColumnValue](immu_entry_SqlRowEntry.md#decodesqlrowcolumnvalue)

___

### decodeSqlRowColumnsValues

Re-exports [decodeSqlRowColumnsValues](immu_entry_SqlRowEntry.md#decodesqlrowcolumnsvalues)

___

### decodeValueSqlRow

Re-exports [decodeValueSqlRow](immu_entry_SqlRowEntry.md#decodevaluesqlrow)

___

### encodeValueSqlRow

Re-exports [encodeValueSqlRow](immu_entry_SqlRowEntry.md#encodevaluesqlrow)

___

### entryToBinEntry

Re-exports [entryToBinEntry](immu_entry_Entry.md#entrytobinentry)

___

### entryToLeafEntryPrefixedKey

Re-exports [entryToLeafEntryPrefixedKey](immu_entry_Entry.md#entrytoleafentryprefixedkey)

___

### isBinEntryKeySqlColumnEntryPart

Re-exports [isBinEntryKeySqlColumnEntryPart](immu_entry_SqlColumnEntry.md#isbinentrykeysqlcolumnentrypart)

___

### isBinEntryKeySqlDbEntryPart

Re-exports [isBinEntryKeySqlDbEntryPart](immu_entry_SqlDbEntry.md#isbinentrykeysqldbentrypart)

___

### isBinEntryKeySqlIndexEntryPart

Re-exports [isBinEntryKeySqlIndexEntryPart](immu_entry_SqlIndexEntry.md#isbinentrykeysqlindexentrypart)

___

### isBinEntryKeySqlRowEntryPart

Re-exports [isBinEntryKeySqlRowEntryPart](immu_entry_SqlRowEntry.md#isbinentrykeysqlrowentrypart)

___

### isBinEntryKeySqlTableEntryPart

Re-exports [isBinEntryKeySqlTableEntryPart](immu_entry_SqlTableEntry.md#isbinentrykeysqltableentrypart)

___

### refEntryToBinEntry

Re-exports [refEntryToBinEntry](immu_entry_RefEntry.md#refentrytobinentry)

___

### refEntryToLeafEntryPrefixedKey

Re-exports [refEntryToLeafEntryPrefixedKey](immu_entry_RefEntry.md#refentrytoleafentryprefixedkey)

___

### sqlColumnEntryToBinEntry

Re-exports [sqlColumnEntryToBinEntry](immu_entry_SqlColumnEntry.md#sqlcolumnentrytobinentry)

___

### sqlColumnEntryToLeafEntryPrefixedKey

Re-exports [sqlColumnEntryToLeafEntryPrefixedKey](immu_entry_SqlColumnEntry.md#sqlcolumnentrytoleafentryprefixedkey)

___

### sqlColumnEntryToLeafEntryPrefixedVal

Re-exports [sqlColumnEntryToLeafEntryPrefixedVal](immu_entry_SqlColumnEntry.md#sqlcolumnentrytoleafentryprefixedval)

___

### sqlDbEntryToBinEntry

Re-exports [sqlDbEntryToBinEntry](immu_entry_SqlDbEntry.md#sqldbentrytobinentry)

___

### sqlDbEntryToBinEntryPrefixedVal

Re-exports [sqlDbEntryToBinEntryPrefixedVal](immu_entry_SqlDbEntry.md#sqldbentrytobinentryprefixedval)

___

### sqlDbEntryToLeafEntryPrefixedKey

Re-exports [sqlDbEntryToLeafEntryPrefixedKey](immu_entry_SqlDbEntry.md#sqldbentrytoleafentryprefixedkey)

___

### sqlEntryToBinEntry

Re-exports [sqlEntryToBinEntry](immu_entry_SqlEntry.md#sqlentrytobinentry)

___

### sqlEntryToLeafEntryPrefixedKey

Re-exports [sqlEntryToLeafEntryPrefixedKey](immu_entry_SqlEntry.md#sqlentrytoleafentryprefixedkey)

___

### sqlIndexEntryToBinEntry

Re-exports [sqlIndexEntryToBinEntry](immu_entry_SqlIndexEntry.md#sqlindexentrytobinentry)

___

### sqlIndexEntryToBinEntryPrefixedVal

Re-exports [sqlIndexEntryToBinEntryPrefixedVal](immu_entry_SqlIndexEntry.md#sqlindexentrytobinentryprefixedval)

___

### sqlIndexEntryToLeafEntryPrefixedKey

Re-exports [sqlIndexEntryToLeafEntryPrefixedKey](immu_entry_SqlIndexEntry.md#sqlindexentrytoleafentryprefixedkey)

___

### sqlRowEntryToLeafEntryPrefixedKey

Re-exports [sqlRowEntryToLeafEntryPrefixedKey](immu_entry_SqlRowEntry.md#sqlrowentrytoleafentryprefixedkey)

___

### sqlRowEntryToSqlBinEntry

Re-exports [sqlRowEntryToSqlBinEntry](immu_entry_SqlRowEntry.md#sqlrowentrytosqlbinentry)

___

### sqlTableEntryToBinEntry

Re-exports [sqlTableEntryToBinEntry](immu_entry_SqlTableEntry.md#sqltableentrytobinentry)

___

### sqlTableEntryToBinEntryPrefixedVal

Re-exports [sqlTableEntryToBinEntryPrefixedVal](immu_entry_SqlTableEntry.md#sqltableentrytobinentryprefixedval)

___

### sqlTableEntryToLeafEntryPrefixedKey

Re-exports [sqlTableEntryToLeafEntryPrefixedKey](immu_entry_SqlTableEntry.md#sqltableentrytoleafentryprefixedkey)

___

### valEntryToBinEntry

Re-exports [valEntryToBinEntry](immu_entry_ValEntry.md#valentrytobinentry)

___

### valEntryToLeafEntryPrefixedKey

Re-exports [valEntryToLeafEntryPrefixedKey](immu_entry_ValEntry.md#valentrytoleafentryprefixedkey)

___

### zSetEntryToBinEntry

Re-exports [zSetEntryToBinEntry](immu_entry_ZSetEntry.md#zsetentrytobinentry)

___

### zSetEntryToLeafEntryPrefixedKey

Re-exports [zSetEntryToLeafEntryPrefixedKey](immu_entry_ZSetEntry.md#zsetentrytoleafentryprefixedkey)
