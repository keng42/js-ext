# 一些 JS 的扩展方法

0. 浮点数的加减乘除  
1. 无视当前时区输出北京时间的 ISO 8601字符串  

# Usage

```javascript
require('mt-js-ext')();
// require('mt-js-ext')('date');
// require('mt-js-ext')('number','date');

// 浮点数的加减乘除
const num1 = 40.2;
const num2 = 0.4;

assert(num1.div(num2) === 100.5, '除');
assert(num1.sub(num2) === 39.8, '减');
assert(num1.mul(num2) === 16.08, '乘');
assert(num1.add(num2) === 40.6, '加');
assert(num1.str(2) === '40', '限定长度');

// 输出北京时间的 ISO 字符串
const da = new Date('1989-04-05T12:02:03Z');
assert(da.toTimeString() === '20:02:03', 'toTimeString');
assert(da.toChinaISOString() === '1989-04-05 20:02:03', 'toChinaISOString');
assert(da.toChineseISOString() === '1989年04月05日 20:02:03', 'toChineseISOString');
```
