import Long from 'long'
import {Buffer} from 'node:buffer'


export type SqlValBin = {
    id: number,
    bin: Buffer,
}


export type SqlValTypeVal = 
    | SqlValTypeValBool
    | SqlValTypeValTime
    | SqlValTypeValBlob
    | SqlValTypeValInt
    | SqlValTypeValChar
    | SqlValTypeValNull


export type SqlValTypeValBool = {
    type:   'BOOLEAN',
    val:    boolean,
}
export type SqlValTypeValTime = {
    type:   'TIMESTAMP',
    val:    Long,
}
export type SqlValTypeValBlob = {
    type:   'BLOB',
    val:    Buffer,
}
export type SqlValTypeValInt = {
    type:   'INTEGER',
    val:    Long,
}
export type SqlValTypeValChar = {
    type:   'VARCHAR',
    val:    string,
}
export type SqlValTypeValNull = {
    type:   'NULL',
}



export type SqlValNameTypeVal = SqlValTypeVal & {
    name: string,
}




export type SqlNamedValue = 
    | { name: string, type: 'BOOLEAN',      value: boolean }
    | { name: string, type: 'TIMESTAMP',    value: Long }
    | { name: string, type: 'BLOB',         value: Buffer }
    | { name: string, type: 'INTEGER',      value: Long }
    | { name: string, type: 'VARCHAR',      value: string }
    | { name: string, type: 'NULL' }

export type SqlValue = 
    | { type: 'BOOLEAN',      value: boolean    }
    | { type: 'TIMESTAMP',    value: Long       }
    | { type: 'BLOB',         value: Buffer     }
    | { type: 'INTEGER',      value: Long       }
    | { type: 'VARCHAR',      value: string     }
    | { type: 'NULL'                            }

