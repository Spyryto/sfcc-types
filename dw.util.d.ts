
declare namespace dw.util {

	declare class Collection<T> extends Object {
		// constants
		// -
		// properties
		get empty(): boolean
		get length(): number
		// constructors
		// -
		// methods
		add(...values: Object): boolean
		add1(object: Object): boolean
		addAll(objs: Collection): boolean
		clear(): void
		contains(obj: Object): boolean
		containsAll(objs: Collection): boolean
		getLength(): number
		isEmpty(): boolean
		iterator(): Iterator<T>
		remove(obj: Object): boolean
		removeAll(objs: Collection): boolean
		retainAll(objs: Collection): boolean
		size(): number
		toArray(): Array<T>
		toArray(start: number, size: number): Array<T>
	}

	declare class List<T> extends Collection<T> {
		// constants
		// -
		// properties
		static EMPTY_LIST: List<T>
		// constructors
		// -
		// methods
		addAt(index: number, value: Object): void
		concat(...values: Object): List<any>
		fill(obj: Object): void
		get(index: number): Object
		indexOf(value: Object): number
		join(): string
		join(separator: string): string
		lastIndexOf(value: Object): number
		pop(): Object
		push(...values: Object): number
		removeAt(index: number): Object
		replaceAll(oldValue: Object, newValue: Object): boolean
		reverse(): void
		rotate(distance: number): void
		set(index: number, value: Object): Object
		shift(): Object
		shuffle(): void
		size(): number
		slice(from: number): List<T>
		slice(from: number, to: number): List<T>
		sort(): void
		sort(comparator: Object): void
		subList(from: number, to: number): List<T>
		swap(i: number, j: number): void
		unshift(...values: Object): number
	}

	declare class ArrayList {
		// constants
		// -
		// properties
		// -
		// constructors
		ArrayList()
		ArrayList(collection: Collection)
		ArrayList(iterator: Iterator)
		ArrayList(...values: Object)
		// methods
		clone(): ArrayList
	}

	declare class Decimal extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		constructor(value: number)
		constructor(value: string)
		constructor()
		// methods
		abs(): Decimal
		add(value: number): Decimal
		add(value: Decimal): Decimal
		addPercent(value: number): Decimal
		addPercent(value: Decimal): Decimal
		divide(value: number): Decimal
		divide(value: Decimal): Decimal
		equals(other: Object): boolean
		get(): number
		hashCode(): number
		multiply(value: number): Decimal
		multiply(value: Decimal): Decimal
		negate(): Decimal
		round(decimals: number): Decimal
		subtract(value: number): Decimal
		subtract(value: Decimal): Decimal
		subtractPercent(value: number): Decimal
		subtractPercent(value: Decimal): Decimal
		toString(): string
		valueOf(): Object
	}

	declare class Iterator<T> extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		// -
		// methods
		asList(start: number, size: number): List<T>
		asList(): List<T>
		hasNext(): boolean
		next(): T // was Object
	}

	declare class SeekableIterator {
		// constants
		// -
		// properties
		get count(): number
		// constructors
		// -
		// methods
		asList(start: number, size: number): List
		close(): void
		first(): Object
		forward(n: number): void
		forward(n: number, size: number): void
		getCount(): number
		hasNext(): boolean
		next(): Object
	}

	declare class StringUtils extends Object {
		// constants
		const ENCODE_TYPE_HTML: number
		const ENCODE_TYPE_WML: number
		const ENCODE_TYPE_XML: number
		const TRUNCATE_CHAR: string
		const TRUNCATE_SENTENCE: string
		const TRUNCATE_WORD: string
		// properties
		// -
		// constructors
		// -
		// methods
		static decodeBase64(base64: string): string
		static decodeBase64(base64: string, characterEncoding: string): string
		static decodeString(str: string, type: number): string
		static encodeBase64(str: string): string
		static encodeBase64(str: string, characterEncoding: string): string
		static encodeString(str: string, type: number): string
		static format(format: string, ...args: Object): string
		static formatCalendar(calendar: Calendar): string
		static formatCalendar(calendar: Calendar, format: string): string
		static formatCalendar(calendar: Calendar, locale: string, pattern: number): string
		static formatDate(date: Date): string
		static formatDate(date: Date, format: string): string
		static formatDate(date: Date, format: string, locale: string): string
		static formatInteger(number: number): string
		static formatMoney(money: Money): string
		static formatNumber(number: number): string
		static formatNumber(number: number, format: string): string
		static formatNumber(number: number, format: string, locale: string): string
		static garble(str: string, replaceChar: string, suffixLength: number): string
		static ltrim(str: string): string
		static pad(str: string, width: number): string
		static rtrim(str: string): string
		static stringToHtml(str: string): string
		static stringToWml(str: string): string
		static stringToXml(str: string): string
		static trim(str: string): string
		static truncate(str: string, maxLength: number, mode: string, suffix: string): string
	}

	declare class Set<T> extends Collection<T> {
		// constants
		// -
		// properties
		static EMPTY_SET: Set<T>
		// constructors
		// -
		// methods
		// -
	}

}
