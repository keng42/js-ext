/**
 * sleep
 *
 * created by keng42 @2020-07-27 10:43:41
 */

export async function sleep(ms: number, msg: string = '') {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, ms);
  });
}
