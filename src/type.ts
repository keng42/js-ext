/**
 * types
 *
 * created by keng42 @2020-07-27 10:51:36
 */

export function isArray(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Array]`;
}

export function isBoolean(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Boolean]`;
}

export function isDate(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Date]`;
}

export function isError(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Error]`;
}

export function isFunction(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Function]`;
}

export function isNull(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Null]`;
}

export function isNumber(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Number]`;
}

export function isRegExp(obj: any) {
  return Object.prototype.toString.call(obj) === `[object RegExp]`;
}

export function isString(obj: any) {
  return Object.prototype.toString.call(obj) === `[object String]`;
}

export function isUndefined(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Undefined]`;
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === `[object Object]`;
}
