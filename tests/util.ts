// @ts-ignore
import tap from 'tap';
import * as util from '../src/util';

tap.test('utf8 encode', t => {
    const array = new Uint8Array([226, 130, 172])
    t.same(util.utf8Encode('€'), array)
    t.notSame(util.utf8Encode('$'), array)
    t.end()
  })
  
  tap.test('utf8 decode', t => {
    const array = new Uint8Array([226, 130, 172])
    t.equal(util.utf8Decode(array), '€')
    t.notEqual(util.utf8Decode(array), '$')
    t.end()
  })

  tap.test('utf8 decode empty string', t => {
    t.equal(util.utf8Decode(''), '')
    t.notEqual(util.utf8Decode(''), '$')
    t.end()
  })

  tap.test('equal array', t => {
    t.true(util.equalArray([0], [0]))
    t.true(util.equalArray([0,1], [0,1]))
    t.false(util.equalArray([0], [0,1]))
    t.false(util.equalArray([1], [2]))
    t.end()
  })
  
  tap.test('is power of two', t => {
    t.true(util.isPowerOfTwo(1))
    t.true(util.isPowerOfTwo(2))
    t.true(util.isPowerOfTwo(4))
  
    t.false(util.isPowerOfTwo(0))
    t.false(util.isPowerOfTwo(3))
    t.end()
  })