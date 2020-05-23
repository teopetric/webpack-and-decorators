/* Exercise 1: https://www.codewars.com/kata/5914c6ee51f1d39b5600001c */

let var1Boolean: boolean = true;

let var2Decimal: number = 13;
let var3Hex: number = 0xf00d;
let var4Binary: number = 0b111111;
let var5Octal: number = 0o744;

let var6String: string = "Hello, world!";

let var7Array: any[] = [1, "test", { a: 3 }, 4, 5];
let var8NumericArray: Array<number> = [1, 2, 3, 4, 5];
//let var8NumericArray: number[] = [1, 2, 3, 4, 5];

let var9Tuple: [string, number] = ["key", 12345];

export enum Color {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let var10Enum: Color = Color.Blue;

let var11ArrayOfAny: Array<any> = [1, "test", { a: 3 }, 4, 5];

let var12VoidFunction: void;

let var13Null: null = null;

let var14Undefined: undefined = undefined;

let var15NeverFunction: never;

/* Exercise 2: https://www.codewars.com/kata/5916b952e76dc9cbcb000066 */

export class SuccessServerResult {
	constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
	constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult) {
	if (result.httpCode === 200) {
		// Returning result.resultObject if everything is OK
		return result.resultObject;
	} else {
		// Returning result.message in case of error
		// FIXME: help TypeScript Compiler to understand that result here
		// is the instance of ErrorServerResult...
		let result: any;
		return (result as ErrorServerResult).message;
	}
}


