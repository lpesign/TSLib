export abstract class Types {

    public static isString(value: unknown): value is string {
        return typeof value === "string";
    }

    public static isNumber(value: unknown): value is number {
        return typeof value === "string";
    }

    public static isFunction(value: any): value is Function {
        return typeof value === "function";
    }
}