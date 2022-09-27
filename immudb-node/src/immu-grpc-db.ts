import type * as immu from './types/index.js'
import type * as igrpc from 'immudb-node-grpcjs'







export function dbUpdatableSettingsToGrpcDbSettings(
    settings: immu.DatabaseSettingsUpdatable
): igrpc.DatabaseNullableSettings {
    const indexSettings = toMutableIndexNullableSettings(settings.indexSettings)
    const replicationSettings = toReplicationNullableSettings(settings.replicationSettings)
    return {
        autoload:                   {value: settings.autoload},
        commitLogMaxOpenedFiles:    {value: settings.commitLogMaxOpenedFiles},
        excludeCommitTime:          {value: settings.excludeCommitTime},
        indexSettings,
        maxConcurrency:             {value: settings.maxConcurrency},
        maxIOConcurrency:           {value: settings.maxIOConcurrency},
        replicationSettings,
        txLogCacheSize:             {value: settings.txLogCacheSize},
        txLogMaxOpenedFiles:        {value: settings.txLogMaxOpenedFiles},
        vLogMaxOpenedFiles:         {value: settings.vLogMaxOpenedFiles},
        writeTxHeaderVersion:       {value: settings.writeTxHeaderVersion},
    }
}




export function grpcDbSettingsToDbSettings(
    databaseSettings: igrpc.DatabaseNullableSettings__Output | null
): immu.DatabaseSettings {

    const indexSettings = fromIndexNullableSettings__Output(databaseSettings?.indexSettings)
    const replicationSettings = fromReplicationNullableSettings__Output(
        databaseSettings?.replicationSettings
    )

    return {
        autoload:                   databaseSettings?.autoload?.value,
        commitLogMaxOpenedFiles:    databaseSettings?.commitLogMaxOpenedFiles?.value,
        fileSize:                   databaseSettings?.fileSize?.value,

        indexSettings,

        maxConcurrency:             databaseSettings?.maxConcurrency?.value,
        maxIOConcurrency:           databaseSettings?.maxIOConcurrency?.value,
        maxKeyLen:                  databaseSettings?.maxKeyLen?.value,
        maxTxEntries:               databaseSettings?.maxTxEntries?.value,
        maxValueLen:                databaseSettings?.maxValueLen?.value,

        replicationSettings,

        txLogCacheSize:             databaseSettings?.txLogCacheSize?.value,
        txLogMaxOpenedFiles:        databaseSettings?.txLogMaxOpenedFiles?.value,
        vLogMaxOpenedFiles:         databaseSettings?.vLogMaxOpenedFiles?.value,
        writeTxHeaderVersion:       databaseSettings?.writeTxHeaderVersion?.value,
    }
}







export function toDatabaseNullableSettings(
    settings: immu.DatabaseSettings
): igrpc.DatabaseNullableSettings {
    return {
        ...dbUpdatableSettingsToGrpcDbSettings(settings),
        ...toImmutableDatabaseNullableSettings(settings),
    }
}






export function fromIndexNullableSettings__Output(
    indexSettings?: igrpc.IndexNullableSettings__Output | null
): immu.IndexSettings {
    return {
        cacheSize:                  indexSettings?.cacheSize?.value,
        cleanupPercentage:          indexSettings?.cleanupPercentage?.value,
        commitLogMaxOpenedFiles:    indexSettings?.commitLogMaxOpenedFiles?.value,
        compactionThld:             indexSettings?.compactionThld?.value,
        delayDuringCompaction:      indexSettings?.delayDuringCompaction?.value,
        flushBufferSize:            indexSettings?.flushBufferSize?.value,
        flushThreshold:             indexSettings?.flushThreshold?.value,
        historyLogMaxOpenedFiles:   indexSettings?.historyLogMaxOpenedFiles?.value,
        maxActiveSnapshots:         indexSettings?.maxActiveSnapshots?.value,
        maxNodeSize:                indexSettings?.maxNodeSize?.value,
        nodesLogMaxOpenedFiles:     indexSettings?.nodesLogMaxOpenedFiles?.value,
        renewSnapRootAfter:         indexSettings?.renewSnapRootAfter?.value,
        syncThreshold:              indexSettings?.syncThreshold?.value,
    }
}


export function toMutableIndexNullableSettings(
    settings?: immu.IndexSettings
): igrpc.IndexNullableSettings {
    return {
        cacheSize:                  {value: settings?.cacheSize},
        cleanupPercentage:          {value: settings?.cleanupPercentage},
        commitLogMaxOpenedFiles:    {value: settings?.commitLogMaxOpenedFiles},
        compactionThld:             {value: settings?.compactionThld},
        delayDuringCompaction:      {value: settings?.delayDuringCompaction},
        flushBufferSize:            {value: settings?.flushBufferSize},
        flushThreshold:             {value: settings?.flushThreshold},
        historyLogMaxOpenedFiles:   {value: settings?.historyLogMaxOpenedFiles},
        maxActiveSnapshots:         {value: settings?.maxActiveSnapshots},
        nodesLogMaxOpenedFiles:     {value: settings?.maxActiveSnapshots},
        renewSnapRootAfter:         {value: settings?.renewSnapRootAfter},
        syncThreshold:              {value: settings?.syncThreshold},
    }
}


export function toImmutableIndexNullableSettings(
    settings?: immu.IndexSettingsReadonly
): igrpc.IndexNullableSettings {
    return {
        maxNodeSize:                {value: settings?.maxNodeSize},
    }
}




export function toImmutableDatabaseNullableSettings(
    settings: immu.DatabaseSettingsReadonly
): igrpc.DatabaseNullableSettings {
    const indexSettings = toImmutableIndexNullableSettings(settings.indexSettings)
    return {
        fileSize:                   {value: settings.fileSize},
        indexSettings,
        maxKeyLen:                  {value: settings.maxKeyLen},
        maxTxEntries:               {value: settings.maxTxEntries},
        maxValueLen:                {value: settings.maxValueLen},
    }
}


export function fromReplicationNullableSettings__Output(
    replicationSettings?: igrpc.ReplicationNullableSettings__Output | null
): immu.ReplicationSettings {
    
    return {
        followerPassword:   replicationSettings?.followerPassword?.value,
        followerUsername:   replicationSettings?.followerUsername?.value,
        masterAddress:      replicationSettings?.masterAddress?.value,
        masterDatabase:     replicationSettings?.masterDatabase?.value,
        masterPort:         replicationSettings?.masterPort?.value,
        replica:            replicationSettings?.replica?.value,
    }
}

export function toReplicationNullableSettings(
    settings?: immu.ReplicationSettings
): igrpc.ReplicationNullableSettings {
    return {
        followerPassword:       {value: settings?.followerPassword},
        followerUsername:       {value: settings?.followerUsername},
        masterAddress:          {value: settings?.masterAddress},
        masterDatabase:         {value: settings?.masterDatabase},
        masterPort:             {value: settings?.masterPort},
        replica:                {value: settings?.replica},
    }
}