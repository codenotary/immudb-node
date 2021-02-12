// @ts-ignore
import tap from 'tap';
import Util from '../src/util';

const utilInstance = new Util;
tap.test('utf8 encode', t => {
    const array = new Uint8Array([226, 130, 172])
    t.same(utilInstance.utf8Encode('€'), array)
    t.notSame(utilInstance.utf8Encode('$'), array)
    t.end()
  })
  
  tap.test('utf8 decode', t => {
    const array = new Uint8Array([226, 130, 172])
    t.equal(utilInstance.utf8Decode(array), '€')
    t.notEqual(utilInstance.utf8Decode(array), '$')
    t.end()
  })

  tap.test('utf8 decode empty string', t => {
    t.equal(utilInstance.utf8Decode(''), '')
    t.notEqual(utilInstance.utf8Decode(''), '$')
    t.end()
  })

  /* Obsolete
  tap.test('asyncifyMethod method, catch', async t => {
    const errorMethod = function () {
      return error
    }

    try {
      req = { param1: 'param1'}
      await utilInstance.asyncifyMethod(errorMethod)
        .then(
            () => {
              assert.fail('Should not resolve')
              t.end()
            }, 
            () => {
              assert.ok('Should fail')
              t.end()
            });
    } catch (err) {
      t.end()
    }
  })
  */

  tap.test('equal array', t => {
    t.true(utilInstance.equalArray([0], [0]))
    t.true(utilInstance.equalArray([0,1], [0,1]))
    t.false(utilInstance.equalArray([0], [0,1]))
    t.false(utilInstance.equalArray([1], [2]))
    t.end()
  })
  
  tap.test('is power of two', t => {
    t.true(utilInstance.isPowerOfTwo(1))
    t.true(utilInstance.isPowerOfTwo(2))
    t.true(utilInstance.isPowerOfTwo(4))
  
    t.false(utilInstance.isPowerOfTwo(0))
    t.false(utilInstance.isPowerOfTwo(3))
    t.end()
  })