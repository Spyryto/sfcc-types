
declare namespace dw.object {

	declare class PersistentObject extends Object {
		// constants
		// -
		// properties
		get creationDate(): Date;
		get lastModified(): Date;
		get UUID(): string;
		// constructors
		// -
		// methods
		getCreationDate(): Date;
		getLastModified(): Date;
		getUUID(): string;
	}

	declare class ExtensibleObject extends PersistentObject {
		// constants
		// -
		// properties
		get custom(): CustomAttributes;
		// constructors
		// -
		// methods
		describe(): ObjectTypeDefinition;
		getCustom(): CustomAttributes;
	}

	/** @type {Object.<string, object>} */
	declare var CustomAttributes;

}