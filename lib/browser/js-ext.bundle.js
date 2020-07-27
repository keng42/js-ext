var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
/**
 * Number utilities
 *
 * created by keng42 @2020-07-27 09:52:59
 */
define("number", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeDiv = exports.safeMul = exports.safeSub = exports.safeAdd = exports.pad = void 0;
    // pad zero before numbers
    function pad(num, len) {
        if (len === void 0) { len = 2; }
        if (num >= Math.pow(10, len)) {
            return num.toString();
        }
        return '0'.repeat(len - num.toString().length) + num;
    }
    exports.pad = pad;
    // js has a precision problem with decimals,
    // so convert them to integers before calculating.
    // be careful with the overflow problems with larger numbers
    // https://segmentfault.com/a/1190000000324193
    function decodeNum(a, b) {
        var aStr = a.toString();
        var bStr = b.toString();
        var aInt = Number(aStr.replace('.', ''));
        var bInt = Number(bStr.replace('.', ''));
        var _a = aStr.split('.'), _b = _a[1], r1Str = _b === void 0 ? '' : _b;
        var _c = bStr.split('.'), _d = _c[1], r2Str = _d === void 0 ? '' : _d;
        return {
            aInt: aInt,
            bInt: bInt,
            r1: r1Str.length,
            r2: r2Str.length,
        };
    }
    exports.safeAdd = function (a, b) {
        var _a = decodeNum(a, b), r1 = _a.r1, r2 = _a.r2, aInt = _a.aInt, bInt = _a.bInt;
        var c = Math.abs(r1 - r2);
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                bInt *= cm;
            }
            else {
                aInt *= cm;
            }
        }
        var m = Math.pow(10, Math.max(r1, r2));
        return (aInt + bInt) / m;
    };
    exports.safeSub = function (a, b) {
        var _a = decodeNum(a, b), r1 = _a.r1, r2 = _a.r2, aInt = _a.aInt, bInt = _a.bInt;
        var c = Math.abs(r1 - r2);
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                bInt *= cm;
            }
            else {
                aInt *= cm;
            }
        }
        var m = Math.pow(10, Math.max(r1, r2));
        return (aInt - bInt) / m;
    };
    exports.safeMul = function (a, b) {
        var _a = decodeNum(a, b), r1 = _a.r1, r2 = _a.r2, aInt = _a.aInt, bInt = _a.bInt;
        var m = Math.pow(10, r1 + r2);
        return (aInt * bInt) / m;
    };
    exports.safeDiv = function (a, b) {
        var _a = decodeNum(a, b), r1 = _a.r1, r2 = _a.r2, aInt = _a.aInt, bInt = _a.bInt;
        var m = Math.pow(10, r1 - r2);
        return exports.safeMul(aInt / bInt, m);
    };
});
/**
 * Date utilities
 *
 * created by keng42 @2020-07-27 09:52:18
 */
define("date", ["require", "exports", "number"], function (require, exports, number_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ts6 = exports.ts8 = exports.ts = exports.toChinaTimeString = exports.toTimeString = exports.toChineseDateString = exports.toChinaDateString = exports.toDateString = exports.toChinaDate = exports.deconstructDate = void 0;
    var offset = (480 + new Date().getTimezoneOffset()) * 60000;
    function deconstructDate(date) {
        return {
            y: date.getFullYear().toString(),
            m: number_1.pad(date.getMonth() + 1),
            d: number_1.pad(date.getDate()),
            h: number_1.pad(date.getHours()),
            min: number_1.pad(date.getMinutes()),
            sec: number_1.pad(date.getSeconds()),
        };
    }
    exports.deconstructDate = deconstructDate;
    function toChinaDate(date) {
        return offset === 0 ? date : new Date(date.getTime() + offset);
    }
    exports.toChinaDate = toChinaDate;
    // 1970-01-01 00:00:00
    function toDateString(date) {
        var _a = deconstructDate(date), y = _a.y, m = _a.m, d = _a.d, h = _a.h, min = _a.min, sec = _a.sec;
        return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + sec;
    }
    exports.toDateString = toDateString;
    // 1970-01-01 08:00:00
    function toChinaDateString(date) {
        return toDateString(toChinaDate(date));
    }
    exports.toChinaDateString = toChinaDateString;
    // 1970年01月01日 08:00:00
    function toChineseDateString(date) {
        var _a = deconstructDate(toChinaDate(date)), y = _a.y, m = _a.m, d = _a.d, h = _a.h, min = _a.min, sec = _a.sec;
        return y + "\u5E74" + m + "\u6708" + d + "\u65E5 " + h + ":" + min + ":" + sec;
    }
    exports.toChineseDateString = toChineseDateString;
    // 00:00:00
    function toTimeString(date) {
        var _a = deconstructDate(date), h = _a.h, min = _a.min, sec = _a.sec;
        return h + ":" + min + ":" + sec;
    }
    exports.toTimeString = toTimeString;
    // 08:00:00
    function toChinaTimeString(date) {
        return toTimeString(toChinaDate(date));
    }
    exports.toChinaTimeString = toChinaTimeString;
    // 19700101000000
    function ts(date) {
        var _a = deconstructDate(date), y = _a.y, m = _a.m, d = _a.d, h = _a.h, min = _a.min, sec = _a.sec;
        return "" + y + m + d + h + min + sec;
    }
    exports.ts = ts;
    // 19700101
    function ts8(date) {
        var _a = deconstructDate(date), y = _a.y, m = _a.m, d = _a.d;
        return "" + y + m + d;
    }
    exports.ts8 = ts8;
    // 000000
    function ts6(date) {
        var _a = deconstructDate(date), h = _a.h, min = _a.min, sec = _a.sec;
        return "" + h + min + sec;
    }
    exports.ts6 = ts6;
});
/**
 * types
 *
 * created by keng42 @2020-07-27 10:51:36
 */
define("type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUndefined = exports.isString = exports.isRegExp = exports.isNumber = exports.isNull = exports.isFunction = exports.isError = exports.isDate = exports.isBoolean = exports.isArray = void 0;
    exports.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    exports.isBoolean = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Boolean]";
    };
    exports.isDate = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Date]";
    };
    exports.isError = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Error]";
    };
    exports.isFunction = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    };
    exports.isNull = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Null]";
    };
    exports.isNumber = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Number]";
    };
    exports.isRegExp = function (obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    exports.isString = function (obj) {
        return Object.prototype.toString.call(obj) === "[object String]";
    };
    exports.isUndefined = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Undefined]";
    };
});
/**
 * sleep
 *
 * created by keng42 @2020-07-27 10:43:41
 */
define("sleep", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sleep = void 0;
    function sleep(ms, msg) {
        if (msg === void 0) { msg = ''; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(msg);
                        }, ms);
                    })];
            });
        });
    }
    exports.sleep = sleep;
});
define("js-ext", ["require", "exports", "number", "date", "type", "sleep"], function (require, exports, number_2, date_1, type_1, sleep_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(number_2, exports);
    __exportStar(date_1, exports);
    __exportStar(type_1, exports);
    __exportStar(sleep_1, exports);
});
//# sourceMappingURL=js-ext.bundle.js.map