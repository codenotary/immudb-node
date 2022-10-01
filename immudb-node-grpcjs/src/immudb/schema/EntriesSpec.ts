// Original file: schema.proto

import type { EntryTypeSpec as _immudb_schema_EntryTypeSpec, EntryTypeSpec__Output as _immudb_schema_EntryTypeSpec__Output } from '../../immudb/schema/EntryTypeSpec';

export interface EntriesSpec {
  'kvEntriesSpec'?: (_immudb_schema_EntryTypeSpec | null);
  'zEntriesSpec'?: (_immudb_schema_EntryTypeSpec | null);
  'sqlEntriesSpec'?: (_immudb_schema_EntryTypeSpec | null);
}

export interface EntriesSpec__Output {
  'kvEntriesSpec': (_immudb_schema_EntryTypeSpec__Output | null);
  'zEntriesSpec': (_immudb_schema_EntryTypeSpec__Output | null);
  'sqlEntriesSpec': (_immudb_schema_EntryTypeSpec__Output | null);
}
