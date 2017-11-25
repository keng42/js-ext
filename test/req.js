const assert = require('assert');
require('../index')();

const num1 = 40.2;
const num2 = 0.4;

assert(num1.div(num2) === 100.5, 'div');
assert(num1.sub(num2) === 39.8, 'sub');
assert(num1.mul(num2) === 16.08, 'mul');
assert(num1.add(num2) === 40.6, 'add');
assert(num1.str(2) === '40', 'str');

const da = new Date('1989-04-05T12:02:03Z');
assert(da.toTimeString() === '20:02:03', 'toTimeString');
assert(da.toChinaISOString() === '1989-04-05 20:02:03', 'toChinaISOString');
assert(da.toChineseISOString() === '1989年04月05日 20:02:03', 'toChineseISOString');

const start = Date.now();
global.delay(1000).then(() => {
  assert(Date.now() - start > 1000, 'delay');
});

const objs = {
  String: '',
  Number: 1,
  Boolean: true,
  Undefined: undefined,
  Null: null,
  Function: () => {},
  Date: new Date(),
  Array: [],
  RegExp: new RegExp(),
  Error: new Error(),
};

Object.keys(objs).forEach((type) => {
  assert(global[`is${type}`](objs[type]), true);
});
