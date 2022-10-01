import Long from "long"
import type * as immu from "../types/index.js"





export type SqlValueType = "string" | "boolean" | "int" | "timestamp"

/**
 * Decodes bytes to js types.
 */
export const decodeSqlValue: SqlDecoder = {
    /** Int64BE */
    int: (b: Buffer) => {
        return Long.fromBytesBE([...b], false).toNumber()
    },
    /** Boolean (1 byte, value of `0` is `false` everything else `true`) */
    boolean: (b: Buffer) => {
        return b[0] === 0 ? false : true
    },
    /** Utf8 bytes. */
    string: (b: Buffer) => {
        return b.toString('utf8')
    },
    /** Int64BE timestamp with micro-seconds precision. */
    timestamp: (b: Buffer) => {
        return new Date(Long.fromBytesBE([...b], false).toNumber() / 1000)
    }
}


/**
 * Decodes bytes to js types.
 */
export type SqlDecoder = {
    /** Int64BE. */
    int: (b: Buffer) => number;
    /** Boolean. */
    boolean: (b: Buffer) => boolean;
    /** Utf8 bytes. */
    string: (b: Buffer) => string;
    /** Int64BE timestamp with micro-seconds precision. */
    timestamp: (b: Buffer) => Date;
}




/**
 * 
 * @example
 * 
 * ```ts
 * const mapTestTableRow = createSqlMap({
 *     id1:        {type: 'int',       id: 0},
 *     id2:        {type: 'string',    id: 1},
 *     created:    {type: 'timestamp', id: 2},
 *     data:       {type: 'string',    id: 3},
 *     isActive:   {type: 'boolean',   id: 4},
 * })
 * 
 * ```
 */
export function createSqlMap<T extends {[key in string]: {type: SqlValueType, id: number}}>(
    def: T
) {
    return function mapSql(data: immu.SqlRowColumn[]) {
        const res: any = {}

        const keys = Object.keys(def) as (keyof T)[]
        for (const key of keys) {
            const {id, type} = def[key]
            const decoded = decodeSqlValue[type](data[id].bin)
            res[key] = decoded
        }

        return res as {
            [key in keyof T]: ReturnType<SqlDecoder[T[key]['type']]>
        }
    }
}

