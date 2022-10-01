import Long from 'long'
import { Buffer } from 'node:buffer'
import type * as buffer from '../buffer.js'


/**
 * Recursive type representing object that can be serialized/deserialized
 * to/from {@link Buffer} and used as key or values.
 *
 * This type extends normal node JSON with additional primitives for:
 * - {@link Buffer}
 * - and {@link Long}
 *
 * This type is used by {@link buffer.toObject} and {@link buffer.fromObject} functions.
 */
export type ExtendedJSONAble =
    | string
    | number
    | boolean
    | Long
    | Buffer
    | Array<ExtendedJSONAble>
    | { [x: string]: ExtendedJSONAble }
