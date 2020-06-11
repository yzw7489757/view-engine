export declare function isObject(obj: any): boolean;
export declare function forEach<T extends Record<string, G>, G extends {
    children?: T;
}>(obj: T, cb: (key: string, item: G) => any): T;
export declare function contains<T>(target: Array<T>, included: string | number): boolean;
export declare function toNumber(n: string | number | undefined | null | Record<string, unknown> | any[]): number;
