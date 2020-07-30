# js-ext

Some commonly used js functions

1. Safe floating point number calculation
2. Determine if a variable is of a certain type
3. Outputs formatted date strings in China Standard Time regardless of the current time zone
4. Wrap setTimeount into a sleep function

## Usage

```ts
import jsExt from 'js-ext';

// number
jsExt.pad(6); // '06'
jsExt.pad(44); // '44'
jsExt.pad(89, 4); // '0089'

jsExt.safeAdd(0.1, 0.2); // 0.3
jsExt.safeSub(0.3, 0.2); // 0.1
jsExt.safeMul(0.1, 0.2); // 0.02
jsExt.safeDiv(0.3, 0.1); // 3

// type
jsExt.isArray([1]);
jsExt.isBoolean(false);
jsExt.isDate(new Date());
jsExt.isError(new Error(''));
jsExt.isFunction(() => {});
jsExt.isNull(null);
jsExt.isNumber(0);
jsExt.isRegExp(/\d+/);
jsExt.isString('0');
jsExt.isUndefined(undefined);

// date
const da = new Date('1989-04-05T12:02:03Z');

jsExt.toChinaTimeString(da); // '20:02:03'
jsExt.toChinaDateString(da); // '1989-04-05 20:02:03'
jsExt.toChineseDateString(da); // '1989年04月05日 20:02:03'

jsExt.ts(da); // '19890405200203'
jsExt.ts8(da); // '19890405'
jsExt.ts6(da); // '200203'

// sleep
(async () => {
  await jsExt.sleep(1000, 'say hi');
})();
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/almond@0.3.3/almond.min.js"></script>
<script src="./js-ext.bundle.js"></script>

<script>
  const jsExt = require('js-ext');

  console.log(jsExt.ts(new Date()));
</script>
```
