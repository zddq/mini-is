/**
 * 检查给定的值是否为字符串类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是字符串类型, 则返回 true; 否则返回 false
 */
export const isString = (val: any) => typeof val === "string";

/**
 * 检查给定的值是否为数字类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数字类型, 则返回 true; 否则返回 false
 */
export const isNumber = (val: any) => typeof val === "number";

/**
 * 检查给定的值是否为布尔值类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是布尔值类型, 则返回 true; 否则返回 false
 */
export const isBoolean = (val: any) => typeof val === "boolean";

/**
 * 检查给定的值是否为undefined。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是undefined, 则返回 true; 否则返回 false
 */
export const isUndefined = (val: any) => typeof val === "undefined";

/**
 * 检查给定的值是否为null。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是null, 则返回 true; 否则返回 false
 */
export const isNull = (val: any) => val === null;

/**
 * 检查给定的值是否为Symbol类型。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是Symbol类型, 则返回 true; 否则返回 false
 */
export const isSymbol = (val: any) => typeof val === "symbol";

/**
 * 检查给定的值是否为BigInt。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是BigInt, 则返回 true; 否则返回 false
 */
export const isBigint = (val: any) => typeof val === "bigint";

/**
 * 检查给定的值是否为数组。
 * @param {*} val 要检查的值
 * @returns {boolean} 如果值是数组, 则返回 true; 否则返回 false
 */
export const isArray = (val: any) => Array.isArray(val);
