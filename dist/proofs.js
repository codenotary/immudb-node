"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("./util"));
const SHA256 = require("crypto-ts").SHA256;
class Proof {
    constructor() {
        this.util = new util_1.default();
        this.leafPrefix = [0];
        this.nodePrefix = [1];
        this.sha256Size = 32;
        this.errVerificationException = {
            clientErr: 'Inclusion proof does not verify'
        };
    }
    verify(params, callback) {
        let h = this._digest(params.item);
        if (this.util && !this.util.equalArray(h, params.proof.leaf)) {
            this.errVerificationException.meta = 1;
            return callback(this.errVerificationException);
        }
        this.verifyInclusion(params.proof, (err) => {
            if (err) {
                return callback(err);
            }
            if (params.oldRoot.root.length == 0 &&
                params.oldRoot.index == 0) {
                return callback();
            }
            this.verifyConsistency(params, (err) => {
                if (err) {
                    return callback(err);
                }
                callback();
            });
        });
    }
    // WIP 
    setKey(params) {
        let keyL = params.key.length;
        let key = Buffer.alloc(keyL);
        Buffer.from(params.key).copy(key);
        let setL = params.set.length;
        let set = Buffer.alloc(setL);
        Buffer.from(params.set).copy(set);
        const score = Buffer.allocUnsafe(4);
        let bytes = score.writeFloatBE(params.score);
        let scoreL = 8 * bytes;
        let c = Buffer.alloc(setL + scoreL + keyL);
        set.copy(c);
        score.copy(c, setL);
        key.copy(c, setL + scoreL);
        return new Uint8Array(c);
    }
    _digest(params) {
        let kl = params.key.length;
        let vl = params.value.length;
        let buf = Buffer.alloc(1 + 8 + 8 + kl + vl);
        buf[0] = this.leafPrefix;
        buf.writeBigUInt64BE(BigInt(params.index), 1);
        buf.writeBigUInt64BE(BigInt(kl), 1 + 8);
        let k = Buffer.alloc(kl);
        Buffer.from(params.key).copy(k);
        k.copy(buf, 1 + 8 + 8);
        let v = Buffer.alloc(vl);
        Buffer.from(params.value).copy(v);
        v.copy(buf, 1 + 8 + 8 + kl);
        const x = SHA256(buf);
        return new Uint8Array(x.digest());
    }
    verifyInclusion(params, callback) {
        const path = params.inclusionPath;
        if (params.index > params.at) {
            this.errVerificationException.meta = 2;
            return callback(this.errVerificationException);
        }
        if (params.at > 0 && path.length == 0) {
            this.errVerificationException.meta = 3;
            return callback(this.errVerificationException);
        }
        let h = Buffer.alloc(this.sha256Size);
        Buffer.from(params.leaf).copy(h);
        let at = params.at;
        let index = params.index;
        for (let i = 0; i < path.length; i++) {
            let v = Buffer.alloc(this.sha256Size);
            Buffer.from(path[i]).copy(v);
            let c = Buffer.alloc(this.sha256Size * 2 + 1);
            c[0] = this.nodePrefix;
            if (index % 2 == 0 && index != at) {
                h.copy(c, 1);
                v.copy(c, this.sha256Size + 1);
            }
            else {
                v.copy(c, 1);
                h.copy(c, this.sha256Size + 1);
            }
            const x = SHA256(c);
            h = x.digest();
            index = Math.floor(index / 2);
            at = Math.floor(at / 2);
        }
        if (at != index ||
            (this.util && !this.util.equalArray(new Uint8Array(h), params.root))) {
            this.errVerificationException.meta = 4;
            return callback(this.errVerificationException);
        }
        callback();
    }
    verifyConsistency(params, callback) {
        const l = params.proof.consistencyPath.length;
        const oldHash = Buffer.alloc(this.sha256Size);
        const newHash = Buffer.alloc(this.sha256Size);
        Buffer.from(params.oldRoot.root).copy(oldHash);
        Buffer.from(params.proof.root).copy(newHash);
        if (params.proof.at == params.oldRoot.index &&
            this.util && this.util.equalArray(new Uint8Array(oldHash), new Uint8Array(newHash)) && l == 0) {
            return callback();
        }
        if (params.proof.at <= params.oldRoot.index || l == 0) {
            this.errVerificationException.meta = 5;
            return callback(this.errVerificationException);
        }
        let pp = [];
        if (this.util && this.util.isPowerOfTwo(params.oldRoot.index + 1)) {
            pp.push(new Uint8Array(oldHash), ...params.proof.consistencyPath);
        }
        else {
            pp = params.proof.consistencyPath;
        }
        let fn = params.oldRoot.index;
        let sn = params.proof.at;
        while (fn % 2 == 1) {
            fn = fn >> 1;
            sn = sn >> 1;
        }
        let fr = Buffer.alloc(this.sha256Size);
        Buffer.from(pp[0]).copy(fr);
        let sr = Buffer.alloc(this.sha256Size);
        Buffer.from(pp[0]).copy(sr);
        let tmp = Buffer.alloc(this.sha256Size * 2 + 1);
        tmp[0] = this.nodePrefix;
        for (let step = 0; step < pp.length; step++) {
            let c = Buffer.alloc(this.sha256Size);
            Buffer.from(pp[step]).copy(c);
            if (step == 0) {
                continue;
            }
            if (sn == 0) {
                this.errVerificationException.meta = 7;
                return callback(this.errVerificationException);
            }
            if (fn % 2 == 1 || fn == sn) {
                c.copy(tmp, 1);
                fr.copy(tmp, this.sha256Size + 1);
                const x1 = SHA256(tmp);
                fr = x1.digest();
                sr.copy(tmp, this.sha256Size + 1);
                const x2 = SHA256(tmp);
                sr = x2.digest();
                while (fn % 2 == 0 && fn != 0) {
                    fn = fn >> 1;
                    sn = sn >> 1;
                }
                ;
            }
            else {
                sr.copy(tmp, 1);
                c.copy(tmp, this.sha256Size + 1);
                const x = SHA256(tmp);
                sr = x.digest();
            }
            fn = fn >> 1;
            sn = sn >> 1;
        }
        if (this.util && !this.util.equalArray(new Uint8Array(fr), new Uint8Array(oldHash)) ||
            (this.util && !this.util.equalArray(new Uint8Array(sr), new Uint8Array(newHash)) || sn != 0)) {
            this.errVerificationException.meta = 6;
            return callback(this.errVerificationException);
        }
        callback();
    }
}
exports.default = Proof;
