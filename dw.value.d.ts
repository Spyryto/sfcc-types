
declare namespace dw.value {

	declare class Quantity {
		// constants
		// -
		// properties
		available: boolean
		decimalValue: Decimal
		unit: string
		value: number
		// constructors
		constructor(value: number, unit: string)
		// methods
		add(value: Quantity): Quantity
		compareTo(other: Quantity): number
		divide(divisor: number): Quantity
		equals(other: Object): boolean
		getDecimalValue(): Decimal
		getUnit(): string
		getValue(): number
		hashCode(): number
		isAvailable(): boolean
		isOfSameUnit(value: Quantity): boolean
		multiply(factor: number): Quantity
		newQuantity(value: Decimal): Quantity
		round(precision: number): Quantity
		subtract(value: Quantity): Quantity
		toString(): string
		valueOf(): Object
	}


	declare namespace dw.value.Money {
		/*   constants   */
		const NOT_AVAILABLE: Money
		/*   properties   */
		const available: boolean
		const currencyCode: string
		const decimalValue: Decimal
		const value: number
		const valueOrNull: number
		/*   constructors   */
		function Money(value: number, currencyCode: string)
		/*   methods   */
		function add(value: Money): Money
		function addPercent(percent: number): Money
		function addRate(value: number): Money
		function compareTo(other: Money): number
		function divide(divisor: number): Money
		function equals(other: Object): boolean
		function getCurrencyCode(): string
		function getDecimalValue(): Decimal
		function getValue(): number
		function getValueOrNull(): number
		function hashCode(): number
		function isAvailable(): boolean
		function isOfSameCurrency(value: Money): boolean
		function multiply(factor: number): Money
		function multiply(quantity: Quantity): Money
		function newMoney(value: Decimal): Money
		function percentLessThan(value: Money): number
		function percentOf(value: Money): number
		static function prorate(dist: Money, ...values: Money): Money[]
		function subtract(value: Money): Money
		function subtractPercent(percent: number): Money
		function subtractRate(value: number): Money
		function toFormattedString(): string
		function toNumberString(): string
		function toString(): string
		function valueOf(): Object
	}


}