/**
 * types
 *
 * created by keng42 @2020-07-27 10:51:36
 */

export const isArray = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Array]`;

export const isBoolean = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Boolean]`;

export const isDate = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Date]`;

export const isError = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Error]`;

export const isFunction = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Function]`;

export const isNull = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Null]`;

export const isNumber = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Number]`;

export const isRegExp = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object RegExp]`;

export const isString = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object String]`;

export const isUndefined = (obj: any) =>
  Object.prototype.toString.call(obj) === `[object Undefined]`;
