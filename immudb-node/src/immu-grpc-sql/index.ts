import type * as immu from "../types/index.js";
import type * as igrpc from '@codenotary/immudb-node-grpcjs'


export async function* generateRows(gen: AsyncGenerator<igrpc.SQLQueryResult__Output>) {
    for await (const res of gen) {
        const rows = grpcQueryResultToListoOfSqlNamedValues(res)

        for (const row of rows) {
            yield row
        }
    }
}

export function grpcSqlObjectNamedValueToNamedValues(
    objectNamedValue: {
        [key: string]: igrpc.SQLValue__Output;
    }
): immu.SqlNamedValue[] {

    return Object.entries(objectNamedValue).map(([name, grpcSqlValue]) => ({
        name,
        ...grpcSqlValueToSqlValue(grpcSqlValue)
    }))
}





export function grpcQueryResultToListoOfSqlNamedValues(
    queryResult: igrpc.SQLQueryResult__Output
): immu.SqlNamedValue[][] {

    return queryResult.rows.map(grpcSqlRowToSqlNamedValues)
}

export function grpcSqlRowToSqlNamedValues(
    grpcRow: igrpc.Row__Output
): immu.SqlNamedValue[] {
    return grpcRow.values.map((val, i) => ({
        name: grpcRow.columns[i],
        ...grpcSqlValueToSqlValue(val)
    }))
}




export function sqlNamedValueToGrpcSqlNamedParam(
    param: immu.SqlNamedValue
): igrpc.NamedParam {
    switch (param.type) {
        case 'BOOLEAN':
            return { name: param.name, value: { value: 'b', b: param.value } }
        case 'BLOB':
            return { name: param.name, value: { value: 'bs', bs: param.value } }
        case 'INTEGER':
            return { name: param.name, value: { value: 'n', n: param.value } }
        case 'NULL':
            return { name: param.name, value: { value: 'null' } }
        case 'VARCHAR':
            return { name: param.name, value: { value: 's', s: param.value } }
        case 'TIMESTAMP':
            return { name: param.name, value: { value: 'ts', ts: param.value } }
    }
}



export function sqlValueToGrpcSqlValue(
    param: immu.SqlValue
): igrpc.SQLValue__Output {
    switch (param.type) {
        case 'BOOLEAN':
            return { value: 'b', b: param.value }
        case 'BLOB':
            return { value: 'bs', bs: param.value }
        case 'INTEGER':
            return { value: 'n', n: param.value }
        case 'NULL':
            return { value: 'null' }
        case 'VARCHAR':
            return { value: 's', s: param.value }
        case 'TIMESTAMP':
            return { value: 'ts', ts: param.value }
    }
}



/** Maps grpc sql value and value name to more js friendly value.  */
export function grpcSqlNamedParamToSqlNamedValue(
    param: igrpc.NamedParam__Output
): immu.SqlNamedValue {

    if (param.value == undefined) {
        throw 'grpc sql param must have value'
    }

    return {
        name: param.name,
        ...grpcSqlValueToSqlValue(param.value)
    }

}



/** Maps grpc sql value to more js friendly value.  */
export function grpcSqlValueToSqlValue(
    param: igrpc.SQLValue__Output
): immu.SqlValue {

    switch (param.value) {
        case 'b':
            if (param.b === undefined) {
                throw 'parsing grpc sql param error on BOOLEAN.'
            }
            return { type: 'BOOLEAN', value: param.b }
        case 'bs':
            if (param.bs === undefined) {
                throw 'parsing grpc sql param error on BLOB.'
            }
            return { type: 'BLOB', value: param.bs }
        case 'n':
            if (param.n === undefined) {
                throw 'parsing grpc sql param error on INTEGER.'
            }
            return { type: 'INTEGER', value: param.n }
        case 'null':
            return { type: 'NULL', }
        case 's':
            if (param.s === undefined) {
                throw 'parsing grpc sql param error on VARCHAR.'
            }
            return { type: 'VARCHAR', value: param.s }
        case 'ts':
            if (param.ts === undefined) {
                throw 'parsing grpc sql param error on TIMESTAMP.'
            }
            return { type: 'TIMESTAMP', value: param.ts }
        default:
            throw 'parsing grpc sql param error on value.'
    }
}


