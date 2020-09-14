const crypto = require('crypto')
const util = require('./util')

const leafPrefix = [0]
const nodePrefix = [1]
const sha256Size = 32

const errVerificationException = {
 clientErr : 'Inclusion proof does not verify',
}

const verify = (params, callback) => {
  let h = _digest(params.item)

  if (!util.equalArray(h, params.proof.leaf)) {
    errVerificationException.meta = 1
    return callback(errVerificationException)
  }

  verifyInclusion(params.proof, (err) => {
    if (err) {
      return callback(err)
    }

    if (params.oldRoot.root.length == 0 &&
      params.oldRoot.index == 0) {

      return callback()
    }

    verifyConsistency(params, (err) => {
      if (err) {
        return callback(err)
      }

      callback()
    })
  })
}

// TODO(andrew): Get this working.
const setKey = (params) => {
    let keyL = params.key.length
    let key = Buffer.alloc(keyL)
    Buffer.from(params.key).copy(key)

    let setL = params.set.length
    let set = Buffer.alloc(setL)
    Buffer.from(params.set).copy(set)

    const score = Buffer.allocUnsafe(4);
    let bytes = score.writeFloatBE(params.score);
    let scoreL = 8*bytes

    let c = Buffer.alloc(setL+scoreL+keyL)
    set.copy(c)
    score.copy(c, setL)
    key.copy(c, setL+scoreL)
    return new Uint8Array(c)
}

const _digest = (params) => {
  let kl = params.key.length
  let vl = params.value.length

  let buf  = Buffer.alloc(1+8+8+kl+vl)
  buf[0] = leafPrefix

  buf.writeBigUInt64BE(BigInt(params.index), 1)
  buf.writeBigUInt64BE(BigInt(kl), 1+8)

  let k = Buffer.alloc(kl)
  Buffer.from(params.key).copy(k)
  k.copy(buf, 1+8+8)

  let v = Buffer.alloc(vl)
  Buffer.from(params.value).copy(v)
  v.copy(buf, 1+8+8+kl)

  const x = crypto.createHash('sha256')
  x.update(buf)
  return new Uint8Array(x.digest())
}

const verifyInclusion = (params, callback) => {
  const path = params.inclusionPath

  if (params.index > params.At) {
    errVerificationException.meta = 2
    return callback(errVerificationException)
  }

  if (params.At > 0 && path.length == 0) {
    errVerificationException.meta = 3
    return callback(errVerificationException)
  }

  let h = Buffer.alloc(sha256Size)
  Buffer.from(params.leaf).copy(h)

  let at = params.at
  let index = params.index

  for (let i = 0; i < path.length; i++) {
    let v = Buffer.alloc(sha256Size)
    Buffer.from(path[i]).copy(v)

    let c = Buffer.alloc(sha256Size*2+1)
    c[0] = nodePrefix

    if (params.index%2 == 0 && params.index != params.at) {
      h.copy(c, 1)
      v.copy(c, sha256Size+1)
    } else {
      v.copy(c, 1)
      h.copy(c, sha256Size+1)
    }

    const x = crypto.createHash('sha256')
    x.update(c)
    h = x.digest()

    index = index / 2
    at = at / 2
  }

  if (at != index ||
    !util.equalArray(new Uint8Array(h), params.root)) { 

    errVerificationException.meta = 4
    return callback(errVerificationException)
  }

  callback()
}

const verifyConsistency = (params, callback) => {
  const l = params.proof.consistencyPath.length

  const oldHash = Buffer.alloc(sha256Size)
  const newHash = Buffer.alloc(sha256Size)

  Buffer.from(params.oldRoot.root).copy(oldHash)
  Buffer.from(params.proof.root).copy(newHash)

  if (params.proof.at == params.oldRoot.index &&
    util.equalArray(new Uint8Array(oldHash),
      new Uint8Array(newHash)) && l == 0) {

    return callback()
  }

  if (params.proof.at <= params.oldRoot.index || l == 0) {
    errVerificationException.meta = 5
    return callback(errVerificationException)
  }

  let pp = []
  if (util._isPowerOfTwo(params.oldRoot.index + 1)) {
    pp.push(new Uint8Array(oldHash),
      ...params.proof.consistencyPath)
  } else {
    pp =  params.proof.consistencyPath
  }

  let fn = params.oldRoot.index
  let sn = params.proof.at

  while (fn%2 == 1) {
    fn = fn >> 1
    sn = sn >> 1
  }

  let fr = Buffer.alloc(sha256Size)
  Buffer.from(pp[0]).copy(fr)
  let sr = Buffer.alloc(sha256Size)
  Buffer.from(pp[0]).copy(sr)

  let tmp = Buffer.alloc(sha256Size*2 + 1)
  tmp[0] = nodePrefix

  for (let step = 0; step < pp.length; step++) {
    let c = Buffer.alloc(sha256Size)
    Buffer.from(pp[step]).copy(c)

    if (step == 0) {
      continue
    }

    if (sn == 0) {
      errVerificationException.meta = 7
      return callback(errVerificationException)
    }

    if (fn%2 == 1 || fn == sn) {
      c.copy(tmp, 1)

      fr.copy(tmp, sha256Size+1)
      let x = crypto.createHash('sha256')
      x.update(tmp)
      fr = x.digest()

      sr.copy(tmp, sha256Size+1)
      x = crypto.createHash('sha256')
      x.update(tmp)
      sr = x.digest()

      while (fn%2 == 0 && fn != 0) {
        fn = fn >> 1
        sn = sn >> 1
      }
    } else {
      sr.copy(tmp, 1)
      c.copy(tmp, sha256Size+1)
      let x = crypto.createHash('sha256')
      x.update(tmp)
      sr = x.digest()
    }
    fn = fn >> 1
    sn = sn >> 1
  }

  if (!util.equalArray(new Uint8Array(fr),
    new Uint8Array(oldHash)) ||
    !util.equalArray(new Uint8Array(sr),
    new Uint8Array(newHash)) || sn != 0) {

    errVerificationException.meta = 6
    return callback(errVerificationException)
  }

  callback()
}

module.exports = {
  verify,
  setKey,
  _digest,
}
