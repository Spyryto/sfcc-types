
declare namespace dw.value {

	declare class Quantity {
		// constants
		// -
		// properties
		available  :  boolean
		decimalValue  :  Decimal
		unit  :  String
		value  :  Number
		// constructors
		constructor(value : number, unit : string)
		// methods
		add(value : Quantity) : Quantity
		compareTo(other : Quantity) : number
		divide(divisor : number) : Quantity
		equals(other : Object) : boolean
		getDecimalValue() : Decimal
		getUnit() : string
		getValue() : number
		hashCode() : number
		isAvailable() : boolean
		isOfSameUnit(value : Quantity) : boolean
		multiply(factor : number) : Quantity
		newQuantity(value : Decimal) : Quantity
		round(precision : number) : Quantity
		subtract(value : Quantity) : Quantity
		toString() : string
		valueOf() : Object
	}

}