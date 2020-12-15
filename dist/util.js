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
class Util {
    constructor() { }
    utf8Encode(val) {
        return new util.TextEncoder().encode(val);
    }
    utf8Decode(val) {
        if (val === '') {
            return val;
        }
        return new util.TextDecoder("utf-8").decode(val);
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
}
exports.default = Util;
