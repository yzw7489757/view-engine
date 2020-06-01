import _isEmpty from 'lodash/isEmpty';
export function isObject(obj): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function forEach<T extends Record<string, G>, G extends { children?: T }>(obj: T, cb: (key: string, item: G) => any): T {
  if (!isObject(obj)) return <T>{};
  const map = Object.create(null);

  Object.keys(obj).forEach(itemKey => {
    const item = obj[itemKey];
    
    if (cb) cb(itemKey, item);

    if (item.children && !_isEmpty(item.children)) {
      map[itemKey] = Object.assign(item, { children: forEach(item.children, cb) })
    } else {
      map[itemKey] = item;
    }
  })

  return map
}

export function contains<T>(target: Array<T>, included: string | number): boolean{
  return included? true : target.includes(included as any);
}

export function toNumber(n: string | number | undefined | null | Record<string, unknown> | any[]): number {
  if(!contains(['string','number'], typeof n)) return 0;

  if(typeof n === 'number' && isNaN(n) || isNaN(parseFloat(n as string))) return 0;
  
  return parseFloat(n)
}