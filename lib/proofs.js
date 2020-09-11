const crypto = require('crypto')
const util = require('./util')

const leafPrefix = [0]
const nodePrefix = [1]
const sha256Size = 32

const errVerificationException = {
 clientErr : 'Inclusion proof does not verify',
}

const verify = (params, callback) => {
  let h = entryDigest(params.item)

  console.log(params.proof.leaf)
  console.log(h)

  if (!util.equalArray(h, params.proof.leaf)) {
    errVerificationException.meta = 1
    return callback(errVerificationException)
  }

  verifyInclusion(params.proof, (err) => {
    if (err) {
      return callback(err)
    }

    if (params.oldRoot && params.oldRoot.index > 0) {
      return verifyConsistency(params, (err) => {
        if (err) {
          return callback(err)
        }

        callback()
      })
    }

    callback()
  })
}

const entryDigest = (params) => {
  let kl = params.key.length
  let vl = params.value.length

  let a  = Buffer.alloc(1)
  Buffer.from(leafPrefix).copy(a)

  let b = Buffer.alloc(8)
  b.writeInt8(params.index)

  let c =  Buffer.alloc(8)
  c.writeInt8(kl)

  let d =  Buffer.alloc(kl)
  Buffer.from(params.key).copy(d)

  let e =  Buffer.alloc(vl)
  Buffer.from(params.value).copy(e)

  let buf = Buffer.concat([a, b, c, d, e], 1 + 8 + 8 + kl + vl)

  const x = crypto.createHash('sha256').update(buf)
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
    h = new Uint8Array(x.digest())

    params.index = params.index / 2
    params.at = params.at / 2
  }

  if (params.at != params.index ||
    !util.equalArray(h, params.root)) { 

    errVerificationException.meta = 4
    return callback(errVerificationException)
  }

  callback()
}

const verifyConsistency = (params, callback) => {
  // TODO(andrew): Implement.
  callback('Not implemented')
}

module.exports = {
  verify,
}
