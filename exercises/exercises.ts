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

/* Exercise 3: https://www.codewars.com/kata/591305520c6f9f5c93000052 */

interface IGeometricFigure {
	/** Calculates area of the figure */
	area: () => number;
	/** Calculates perimeter of the figure */
	perimeter: () => number;
}

export class Square implements IGeometricFigure {
	private x: number;

	area() {
		return this.x * this.x;
	}
	perimeter() {
		return 4 * this.x;
	}
}

export class Circle implements IGeometricFigure {
	private r: number;

	area() {
		return Math.PI * this.r * this.r;
	}
	perimeter() {
		return 2 * Math.PI * this.r;
	}
}

/* Exercise 4: https://www.codewars.com/kata/590cb67bc69e3a31d0000042 */

/* export abstract class Animal {
	// @param {number} value The length of the animal in parrots. 
	protected constructor(public value: number) {}

	convertTo(someone: Animal) {}
}

export class Boa extends Animal {
	// TODO:
}

export class Parrot extends Animal {
	// TODO:
}

export class Monkey extends Animal {
	// TODO:
} */

/* Exercise 5: https://www.codewars.com/kata/59138d93eefeaecdbe000031 */

declare var IAnimal: {
	new (
		name: string,
		age: number,
		legs: number,
		species: string,
		status: string
	): IAnimal;
};

interface IAnimal {
	name: string;
	age: number;
	legs: number;
	species: string;
	status: string;
	introduce: () => string;
}

export class Animal implements IAnimal {

	constructor(public name: string, public age: number, public legs: number, public species: string, public status: string) {
		this.name = name;
		this.age = age;
		this.legs = legs;
		this.species = species;
		this.status = status;
	}

	public introduce () {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}

}

export class Shark extends Animal {

	constructor(public name: string, public age: number, public status: string) {
		super(name, age, 0, 'Shark', status);
	}

	introduce() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
}

export class Cat extends Animal {

	constructor(public name: string, public age: number, public status: string) {
		super(name, age, 4, 'Cat', status);
	}

	introduce () {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
	}
}

export class Dog extends Animal {

	constructor(public name: string, public age: number, public status: string, public master: string) {
		super(name, age, 4, 'Dog', status);
		this.master = master;
	}

	introduce () {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}

	greetMaster() {
		return `Hello, ${this.master}.`;
	}
}

/* Exercise 6: https://www.codewars.com/kata/599d636e607719edf600010a */

export class Cuboid {

	constructor(public length: number, public width: number, public height: number) {
		this.length = length;
		this.height = height;
		this.width = width;
	}

	get surfaceArea() {
		return 2*(this.length*this.width + this.width*this.height + this.height*this.length);
	}

	get volume() {
		return this.length*this.width*this.height;
	}

}

export class Cube extends Cuboid {

	constructor(public length: number) {
		super(length, length, length);
	}

}

