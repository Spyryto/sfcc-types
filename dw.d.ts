
// constants
declare const Infinity: number;
declare const NaN: number;
declare const PIPELET_ERROR: number;
declare const PIPELET_NEXT: number;
declare const slotcontent: Object;
declare const undefined: Object;
declare const webreferences: Object;
declare const webreferences2: Object;

// properties
declare var customer: Customer;
declare var exports: Object;
declare var module: Module;
declare var request: dw.system.Request;
declare var response: dw.system.Response;
declare var session: Session;
declare var pdict: dw.system.PipelineDictionary;

// constructors
// -

// methods
declare static function decodeURI(uri: string): string;
declare static function decodeURIComponent(uriComponent: string): string;
declare static function empty(obj: Object): boolean;
declare static function encodeURI(uri: string): string;
declare static function encodeURIComponent(uriComponent: string): string;
declare static function escape(s: string): string;
declare static function eval(code: string): Object;
declare static function importClass(classPath: Object): void;
declare static function importPackage(packagePath: Object): void;
declare static function importScript(scriptPath: string): void;
declare static function isFinite(number: number): boolean;
declare static function isNaN(object: Object): boolean;
declare static function isXMLName(name: string): boolean;
declare static function parseFloat(s: string): number;
declare static function parseInt(s: string, radix: number): number;
declare static function parseInt(s: string): number;
declare static function require(path: string): Module;
declare static function trace(msg: string, ...params: Object): void;
declare static function unescape(string: string): string;

declare static function empty(object: any): boolean;
declare static function isEmpty(collection: dw.util.Collection<T>): boolean;
declare static function isNotEmpty(arg: any, msg: string): void;
