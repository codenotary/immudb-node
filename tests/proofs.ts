// @ts-ignore
import tap from 'tap';
import proofs from '../src/proofs';

tap.test('digest', t => {
  const proofsInstance = new proofs();
  const req = {
    key: [ 57, 55, 55, 55, 54 ],
    value: [ 57, 55, 55, 55, 54 ],
    index: 1,
  }
  const expected = [
    211, 244, 174, 145, 140, 209, 168,  82,
    76, 166,  27, 179, 225,  17, 214, 232,
    78, 121, 201,  94,  89,  63, 161,  23,
    22, 162, 164, 204,  22, 191, 233, 175
  ]
  const res = proofsInstance._digest(req)
  t.deepEquals(res, expected)
  t.end()
})
