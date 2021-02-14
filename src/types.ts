import * as schemaTypes from './proto/schema_pb';

export type SetReferenceParameters = {
    key: string
    referencedKey: string
}
export type SetReferenceAtParameters = {
    key: string
    referencedKey: string
    attx?: number
}
export type ZAddParameters = {
    set: string
    score: number
    key: string
}
export type ZAddAtParameters = {
    set: string
    score: number
    key: string
    attx: number
}
export type GetParameters = {
    key: string
}
export type SetParameters = {
    key: string
    value: string
}
export type LoginParameters = {
    user: string
    password: string
}
export type CreateUserParameters = {
    user: string
    password: string
    database: string
    permission: number
}
export type ChangePasswordParameters = {
    user: string
    oldpassword: string
    newpassword: string
}
export type CountParameters = {
    prefix: string
}
export type HistoryParameters = {
    key: string
    offset: number
    limit: number
    desc: boolean
    sincetx: number
}
export type ZScanParameters = {
    set: string,
    seekkey: string,
    seekscore: number,
    seekattx: number,
    inclusiveseek: boolean,
    limit: number,
    desc: boolean,
    minscore?: schemaTypes.Score.AsObject,
    maxscore?: schemaTypes.Score.AsObject,
    sincetx: number,
    nowait: boolean,
}
