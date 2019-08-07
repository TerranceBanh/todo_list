const isArray     = value => typeof value === 'object' && value.constructor === Array
const isBoolean   = value => typeof value === 'boolean'
const isDate      = value => value instanceof Date
const isError     = value => typeof value.message !== 'undefined' && value instanceof Error
const isFalsey    = value => value === false || value === 0 || value.length === 0 || value === null || typeof value === 'undefined' 
const isFunction  = value => typeof value === 'function'
const isPromise   = value => value instanceof Promise
const isString    = value => typeof value === 'string' || value instanceof String
const isNull      = value => value === null
const isNumber    = value => typeof value === 'number' && isFinite(value)
const isObject    = value => typeof value === 'object' && value.constructor === Object && value
const isRegExp    = value => typeof value === 'object' && value.constructor === RegExp && value
const isSymbol    = value => typeof value === 'symbol'
const isUndefined = value => typeof value === 'undefined'
// isNaN builtin javascript
// isFinite builtin javascript
// isArray builtin javascript but is used as a method instead of a standalone function

export {
  isArray,
  isBoolean,
  isDate,
  isError,
  isFalsey,
  isFunction,
  isPromise,
  isString,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isSymbol,
  isUndefined,
}