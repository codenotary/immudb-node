"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const btoa_1 = __importDefault(require("btoa"));
const util = __importStar(require("util"));
const REFERENCE_VALUE_PREFIX = new Uint8Array(0x01);
const SET_KEY_PREFIX = new Uint8Array(0x00);
const PLAIN_VALUE_PREFIX = new Uint8Array(0x00);
class Util {
    constructor() { }
    utf8Encode(val) {
        return new util.TextEncoder().encode(val);
    }
    utf8Decode(val) {
        return val === ''
            ? val
            : new util.TextDecoder("utf-8").decode(val);
    }
    base64Encode(val) {
        return btoa_1.default(String.fromCharCode(...new Uint8Array(val)));
    }
    equalArray(a1, a2) {
        if (a1.length != a2.length) {
            return false;
        }
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) {
                return false;
            }
        }
        return true;
    }
    isPowerOfTwo(x) {
        return Math.log2(x) % 1 === 0;
    }
    maskConfig(c) {
        let result = '';
        if (c) {
            result += `[ address: ${c.host}:${c.port}`;
            c.user && (result += `, user: ${c.user}`);
            c.password && (result += ', password: *****');
            c.database && (result += `, database: ${c.database || 'defaultdb'}`);
            c.rootPath && (result += `, rootPath: ${c.rootPath}`);
            c.secure && (result += `, secure: ${!!c.secure}`);
            c.certs && (result += `, certs: ${c.certs}`);
            c.autoLogin && (result += `, autoLogin: ${!!c.autoLogin}`);
            c.autoDatabase && (result += `, autoDatabase: ${!!c.autoDatabase}`);
        }
        return `${result} ]`;
    }
    maskString(data, n = 12) {
        if (data) {
            return `${data.slice(0, n)}************${data.slice(data.length - n)}`;
        }
        return '';
    }
    prefixKey(key) {
        const res = new Uint8Array(2);
        res.set(SET_KEY_PREFIX);
        res.set(key, 1);
        return res;
    }
    prefixValue(value) {
        const res = new Uint8Array(2);
        res.set(PLAIN_VALUE_PREFIX);
        res.set(value, 1);
        return res;
    }
    encodeReferenceValue(referencedKey, atTx) {
        const encoded = new Uint8Array(4);
        encoded.set(REFERENCE_VALUE_PREFIX);
        encoded.set(new Uint8Array([atTx]), 1);
        encoded.set(SET_KEY_PREFIX, 2);
        encoded.set(referencedKey, 3);
        return encoded;
    }
}
exports.default = Util;
//# sourceMappingURL=util.js.map