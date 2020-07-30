declare module "number" {
    /**
     * Number utilities
     *
     * created by keng42 @2020-07-27 09:52:59
     */
    export function pad(num: number, len?: number): string;
    export function safeAdd(a: number, b: number): number;
    export function safeSub(a: number, b: number): number;
    export function safeMul(a: number, b: number): number;
    export function safeDiv(a: number, b: number): number;
}
declare module "date" {
    export function deconstructDate(date: Date): {
        y: string;
        m: string;
        d: string;
        h: string;
        min: string;
        sec: string;
    };
    export function toChinaDate(date: Date): Date;
    export function toDateString(date: Date): string;
    export function toChinaDateString(date: Date): string;
    export function toChineseDateString(date: Date): string;
    export function toTimeString(date: Date): string;
    export function toChinaTimeString(date: Date): string;
    export function ts(date: Date): string;
    export function ts8(date: Date): string;
    export function ts6(date: Date): string;
}
declare module "type" {
    /**
     * types
     *
     * created by keng42 @2020-07-27 10:51:36
     */
    export function isArray(obj: any): boolean;
    export function isBoolean(obj: any): boolean;
    export function isDate(obj: any): boolean;
    export function isError(obj: any): boolean;
    export function isFunction(obj: any): boolean;
    export function isNull(obj: any): boolean;
    export function isNumber(obj: any): boolean;
    export function isRegExp(obj: any): boolean;
    export function isString(obj: any): boolean;
    export function isUndefined(obj: any): boolean;
}
declare module "sleep" {
    /**
     * sleep
     *
     * created by keng42 @2020-07-27 10:43:41
     */
    export function sleep(ms: number, msg?: string): Promise<unknown>;
}
declare module "js-ext" {
    export * from "number";
    export * from "date";
    export * from "type";
    export * from "sleep";
}
