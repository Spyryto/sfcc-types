
declare class Array<T> extends Object {
	// constants
	// -
	// properties
	length: number;
	// constructors
	constructor(...values: Object);
	constructor(length: number);
	constructor();
	// methods
	concat(...values: Object): Array;
	every(callback: Function): boolean;
	every(callback: Function, thisObject: Array): boolean;
	filter(callback: Function): Array<T>;
	filter(callback: Function, thisObject: Array): Array<T>;
	forEach(callback: Function): void;
	forEach(callback: Function, thisObject: Array): void;
	indexOf(elementToLocate: Object): number;
	indexOf(elementToLocate: Object, fromIndex: number): number;
	join(): string;
	join(separator: string): string;
	lastIndexOf(elementToLocate: Object): number;
	lastIndexOf(elementToLocate: Object, fromIndex: number): number;
	map(callback: Function): Array;
	map(callback: Function, thisObject: Array): Array;
	pop(): T;
	push(...values: T): number;
	reverse(): void;
	shift(): T;
	slice(start: number, end: number): Array<T>;
	some(callback: Function): boolean;
	some(callback: Function, thisObject: Array): boolean;
	sort(): Array<T>;
	sort(fn: Function): Array<T>;
	splice(start: number, deleteCount: number, ...values: Object): Array<T>;
	toLocaleString(): string;
	toString(): string;
	unshift(...values: Object): number;
}

declare class Function extends Object implements Function {
	// constants
	// -
	// properties
	length: number;
	prototype: Object;
	// constructors
	constructor(...args: string);
	// methods
	apply(thisobj: Object, args: Array): Object;
	call(thisobj: Object, ...args: Object): Object;
	toString(): string;
}

declare class Object {
	// constants
	// -
	// properties
	// -
	// constructors
	constructor();
	// methods
	hasOwnProperty(propName: string): boolean;
	isPrototypeOf(prototype: Object): boolean;
	propertyIsEnumerable(propName: string): boolean;
	toLocaleString(): string;
	toString(): string;
	valueOf(): Object;
}
