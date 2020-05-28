export function isObject(obj):boolean {
  return Object.prototype.toString.call(obj) === '[Object object]'
}