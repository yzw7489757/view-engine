export function isObject(obj):boolean {
  return Object.prototype.toString.call(obj) === '[object Object]'
}