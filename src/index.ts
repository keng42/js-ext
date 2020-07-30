export * from './number';
export * from './date';
export * from './type';
export * from './sleep';

import * as number from './number';
import * as date from './date';
import * as type from './type';
import * as sleep from './sleep';

export default {
  ...number,
  ...date,
  ...type,
  ...sleep,
};
