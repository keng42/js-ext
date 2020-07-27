/**
 * Date utilities
 *
 * created by keng42 @2020-07-27 09:52:18
 */

import { pad } from './number';

const offset = (480 + new Date().getTimezoneOffset()) * 60000;

export function deconstructDate(date: Date) {
  return {
    y: date.getFullYear().toString(),
    m: pad(date.getMonth() + 1),
    d: pad(date.getDate()),
    h: pad(date.getHours()),
    min: pad(date.getMinutes()),
    sec: pad(date.getSeconds()),
  };
}

export function toChinaDate(date: Date): Date {
  return offset === 0 ? date : new Date(date.getTime() + offset);
}

// 1970-01-01 00:00:00
export function toDateString(date: Date): string {
  const { y, m, d, h, min, sec } = deconstructDate(date);
  return `${y}-${m}-${d} ${h}:${min}:${sec}`;
}

// 1970-01-01 08:00:00
export function toChinaDateString(date: Date): string {
  return toDateString(toChinaDate(date));
}

// 1970年01月01日 08:00:00
export function toChineseDateString(date: Date): string {
  const { y, m, d, h, min, sec } = deconstructDate(toChinaDate(date));
  return `${y}年${m}月${d}日 ${h}:${min}:${sec}`;
}

// 00:00:00
export function toTimeString(date: Date) {
  const { h, min, sec } = deconstructDate(date);
  return `${h}:${min}:${sec}`;
}

// 08:00:00
export function toChinaTimeString(date: Date) {
  return toTimeString(toChinaDate(date));
}

// 19700101000000
export function ts(date: Date) {
  const { y, m, d, h, min, sec } = deconstructDate(date);
  return `${y}${m}${d}${h}${min}${sec}`;
}

// 19700101
export function ts8(date: Date) {
  const { y, m, d } = deconstructDate(date);
  return `${y}${m}${d}`;
}

// 000000
export function ts6(date: Date) {
  const { h, min, sec } = deconstructDate(date);
  return `${h}${min}${sec}`;
}
