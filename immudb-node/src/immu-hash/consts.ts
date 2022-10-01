


/** `0x00` byte. */
export const PrefixMhtLeaf          = Buffer.of(0x00)
/** `0x01` byte. */
export const PrefixMhtNode          = Buffer.of(0x01)

/** `0x20` */
export const PrefixSqlValNull       = Buffer.of(0x20)
/** `0x80` */
export const PrefixSqlValNotNull    = Buffer.of(0x80)
/** `0xFF` */
export const PrefixSqlUpperBound    = Buffer.of(0xFF)




// entry metadata tags

/** `0x00` */
export const TagEntryMetadataDeleted = Buffer.of(0x00)
/** `0x01` */
export const TagEntryMetadataExpiresAt = Buffer.of(0x01)
/** `0x02` */
export const TagEntryMetadataNonIndexable = Buffer.of(0x02)


/** `R.` */
export const TagSqlRow           = Buffer.from('R.')
/** `CTL.COLUMN.` */
export const TagSqlColumn        = Buffer.from('CTL.COLUMN.')
/** `CTL.INDEX.` */
export const TagSqlIndex         = Buffer.from('CTL.INDEX.')
/** `CTL.TABLE.` */
export const TagSqlTable         = Buffer.from('CTL.TABLE.')
/** `CTL.DATABASE.` */
export const TagSqlDb            = Buffer.from('CTL.DATABASE.')



/** `0x00` byte. */
export const PrefixValVal           = Buffer.of(0x00)
/** `0x01` byte. */
export const PrefixValRef           = Buffer.of(0x01)


/** `0x00` byte. */
export const PrefixKeyVal           = Buffer.of(0x00)
/** `0x00` byte. */
export const PrefixKeyRef           = Buffer.of(0x00)
/** `0x02` */
export const PrefixKeyZSet          = Buffer.of(0x01)
/** `0x02` */
export const PrefixKeySql           = Buffer.of(0x02)




/** `0b00000001` byte */
export const FlagNotNullValue = 0b00000001
/** `0b00000001` byte */
export const FlagNullable = Buffer.of(FlagNotNullValue)


/** `0b00000010` byte */
export const FlagAutoIncrementValue = 0b00000010
/** `0b00000010` byte */
export const FlagAutoIncrement = Buffer.of(FlagAutoIncrementValue)






/** Checks if byte value have {@link FlagNullable} bit set. */
export function isFlagNotNullSet(byte: number): boolean {
    return (byte & FlagNotNullValue) === FlagNotNullValue
}
/** Checks if byte value have {@link FlagAutoIncrement} bit set. */
export function isFlagAutoIncrementSet(byte: number): boolean {
    return (byte & FlagAutoIncrementValue) === FlagAutoIncrementValue
}

/** Returns byte value with {@link FlagNullable} bit set. */
export function setColumnFlagNotNull(byte: number): number {
    return byte | FlagNotNullValue
}
/** Returns byte value with {@link FlagAutoIncrement} bit set. */
export function setColumnFlagAutoIncrement(byte: number): number {
    return byte | FlagAutoIncrementValue
}
/** 
 * Returns byte value with {@link FlagAutoIncrement} and {@link FlagNullable}
 * bits set if required, leaves bits unchanged if setting not specified.
 */
export function setColumnFlags(props: {
    columnIsAutoIncr?: boolean,
    columnIsNotNull?: boolean,
}): number {
    let result = 0
    if(props.columnIsAutoIncr === true) {
        result = setColumnFlagAutoIncrement(result)
    } 
    if(props.columnIsNotNull === true) {
        result = setColumnFlagNotNull(result)
    } 
    return result
}



