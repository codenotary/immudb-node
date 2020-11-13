const btoa = require('btoa')
const util = require('util')

const utf8Encode = (val) => {
  return new util.TextEncoder("utf-8").encode(val)
}

const utf8Decode = (val) => {
  if (val === '') {
      return val
  }
  return new util.TextDecoder("utf-8").decode(val)
}

const base64Encode = (val) => {
  return btoa(String.fromCharCode(
    ...new Uint8Array(val)))
}

const asyncifyMethod = (method, params) => {
  return new Promise((resolve, reject) => {
    method(params, (err, res) => {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}

const equalArray = (a1, a2) => {
  if (a1.length != a2.length) {
    return false
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) {
      return false
    }
  }

  return true
}

const _isPowerOfTwo = (x) => {
  return Math.log2(x) % 1 === 0
}

module.exports = {
  utf8Encode,
  utf8Decode,
  asyncifyMethod,
  base64Encode,
  equalArray,
  _isPowerOfTwo,
}
