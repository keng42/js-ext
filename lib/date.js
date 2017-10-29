/**
 * Date 扩展：输出北京时间的 ISO 字符串
 * 1970-01-01T00:00:00Z
 * 1970-01-01 08:00:00
 * 1970年01月01日 08:00:00
 */

/* eslint no-extend-native: ["error", { "exceptions": ["Date"] }] */

function pad(num) {
  return num < 10 ? `0${num}` : num;
}

const offset = (480 + new Date().getTimezoneOffset()) * 60000;

function toISO(da) {
  return `${da.getFullYear()
  }-${pad(da.getMonth() + 1)
  }-${pad(da.getDate())
  } ${pad(da.getHours())
  }:${pad(da.getMinutes())
  }:${pad(da.getSeconds())
  }`;
}

function toTime(da) {
  return `${pad(da.getHours())
  }:${pad(da.getMinutes())
  }:${pad(da.getSeconds())
  }`;
}

function toISO2(da) {
  return `${da.getFullYear()
  }年${pad(da.getMonth() + 1)
  }月${pad(da.getDate())
  }日 ${pad(da.getHours())
  }:${pad(da.getMinutes())
  }:${pad(da.getSeconds())
  }`;
}

Date.prototype.toTimeString = function toTimeString() {
  return toTime(this);
};

if (offset === 0) {
  Date.prototype.toChinaISOString = function toChinaISOString() {
    return toISO(this);
  };
  Date.prototype.toChineseISOString = function toChineseISOString() {
    return toISO2(this);
  };
} else {
  Date.prototype.toChinaISOString = function toChinaISOString() {
    const da = new Date(this.getTime() + offset);
    return toISO(da);
  };
  Date.prototype.toChineseISOString = function toChineseISOString() {
    const da = new Date(this.getTime() + offset);
    return toISO2(da);
  };
}
