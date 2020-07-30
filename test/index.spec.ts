import { expect } from 'chai';
import 'mocha';
import jsExt from '../src/index';

describe('Number utilities', () => {
  it('should return valid padded number string', () => {
    expect(jsExt.pad(6)).to.be.equal('06');
    expect(jsExt.pad(44)).to.be.equal('44');
    expect(jsExt.pad(89, 4)).to.be.equal('0089');

    expect(jsExt.safeAdd(0.1, 0.2)).to.be.equal(0.3);
    expect(jsExt.safeSub(0.3, 0.2)).to.be.equal(0.1);
    expect(jsExt.safeMul(0.1, 0.2)).to.be.equal(0.02);
    expect(jsExt.safeDiv(0.3, 0.1)).to.be.equal(3);
  });
});

describe('Type utilities', () => {
  it('should return valid padded number string', () => {
    expect(jsExt.isArray([1])).to.be.equal(true);
    expect(jsExt.isBoolean(false)).to.be.equal(true);
    expect(jsExt.isDate(new Date())).to.be.equal(true);
    expect(jsExt.isError(new Error(''))).to.be.equal(true);
    expect(jsExt.isFunction(() => {})).to.be.equal(true);
    expect(jsExt.isNull(null)).to.be.equal(true);
    expect(jsExt.isNumber(0)).to.be.equal(true);
    expect(jsExt.isRegExp(/\d+/)).to.be.equal(true);
    expect(jsExt.isString('0')).to.be.equal(true);
    expect(jsExt.isUndefined(undefined)).to.be.equal(true);

    expect(jsExt.isArray(0)).to.be.equal(false);
    expect(jsExt.isBoolean(0)).to.be.equal(false);
    expect(jsExt.isDate(0)).to.be.equal(false);
    expect(jsExt.isError(0)).to.be.equal(false);
    expect(jsExt.isFunction(0)).to.be.equal(false);
    expect(jsExt.isNull(0)).to.be.equal(false);
    expect(jsExt.isNumber('0')).to.be.equal(false);
    expect(jsExt.isRegExp(0)).to.be.equal(false);
    expect(jsExt.isString(0)).to.be.equal(false);
    expect(jsExt.isUndefined(0)).to.be.equal(false);
  });
});

describe('Date utilities', () => {
  it('should return valid formatted date string', () => {
    const date = new Date(0);

    if (new Date().getTimezoneOffset() === 0) {
      expect(jsExt.toDateString(date)).to.be.equal('1970-01-01 00:00:00');
      expect(jsExt.toTimeString(date)).to.be.equal('00:00:00');

      expect(jsExt.ts(date)).to.be.equal('19700101000000');
      expect(jsExt.ts8(date)).to.be.equal('19700101');
      expect(jsExt.ts6(date)).to.be.equal('000000');
    }

    expect(jsExt.toChinaDateString(date)).to.be.equal('1970-01-01 08:00:00');
    expect(jsExt.toChineseDateString(date)).to.be.equal(
      '1970年01月01日 08:00:00'
    );
    expect(jsExt.toChinaTimeString(date)).to.be.equal('08:00:00');

    expect(jsExt.ts(jsExt.toChinaDate(date))).to.be.equal('19700101080000');
    expect(jsExt.ts8(jsExt.toChinaDate(date))).to.be.equal('19700101');
    expect(jsExt.ts6(jsExt.toChinaDate(date))).to.be.equal('080000');
  });
});
