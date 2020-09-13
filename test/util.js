const tap = require('tap')

const util = require('../lib/util')

tap.test('is power of two', (t) => {
  t.true(util._isPowerOfTwo(1))
  t.true(util._isPowerOfTwo(2))
  t.true(util._isPowerOfTwo(4))

  t.false(util._isPowerOfTwo(0))
  t.false(util._isPowerOfTwo(3))
  t.end()
})
