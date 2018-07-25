
declare namespace dw.io {

	declare class Writer extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		constructor(stream: OutputStream);
		constructor(stream: OutputStream, encoding: string);
		// methods
		close(): void;
		flush(): void;
		write(str: string): void;
		write(str: string, off: number, len: number): void;
	}

	declare class PrintWriter extends Writer {
		// constants
		// -
		// properties
		// -
		// constructors
		// -
		// methods
		print(str: string): void;
		println(str: string): void;
		println(): void;
	}

	declare class OutputStream extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		// -
		// methods
		close() : void;
	}

}