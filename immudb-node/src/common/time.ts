import Long from 'long'


/**
 * Computes `now()` + `miliSeconds` as 
 * milli seconds after unix epoch. If `miliSeconds` is
 * `undefined` returns `undefined`.
 */
export function unixTimeNowAfterMS(miliSeconds?: number): number | undefined {
    return miliSeconds ? Date.now() + miliSeconds : undefined
}

/**
 * Computes {@link Date} object from low part of `unixSeconds` as {@link Long} value
 * if value have only low part. If value is `undefined` or have high part
 * returns `undefined`.
 */
export function maybeDateFromLong(unixSeconds?: Long): Date | undefined {
    return unixSeconds !== undefined ? new Date(unixSeconds.low * 1000) : undefined
}

/**
 * Creates {@link Date} from seconds since midnight, January 1, 1970 UTC.
 * (JS Date object can be constructed from milliseconds) 
 * @param unixSeconds seconds encoded as UInt64, only lower 32bits are used.
 */
export function dateFromLong(unixSeconds: Long): Date {
    return new Date(unixSeconds.low * 1000)
}