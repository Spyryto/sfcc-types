
declare namespace dw.web {

	declare class HttpParameter {
		// constants
		// -
		// properties
		get booleanValue(): boolean;
		get dateValue(): Date;
		get doubleValue(): number;
		get empty(): boolean;
		get intValue(): number;
		get rawValue(): string;
		get rawValues(): dw.util.Collection;
		get stringValue(): string | null;
		get stringValues(): dw.util.Collection<string>;
		get submitted(): boolean;
		get value(): string | null;
		get values(): dw.util.Collection;
		// constructors
		// -
		// methods
		containsStringValue(value: string): boolean;
		getBooleanValue(): boolean;
		getBooleanValue(defaultValue: boolean): boolean;
		getDateValue(): Date;
		getDateValue(defaultValue: Date): Date;
		getDoubleValue(): number;
		getDoubleValue(defaultValue: number): number;
		getIntValue(): number;
		getIntValue(defaultValue: number): number;
		getRawValue(): string;
		getRawValues(): dw.util.Collection;
		getStringValue(): string;
		getStringValue(defaultValue: string): string | null;
		getStringValues(): dw.util.Collection<string>;
		getValue(): string | null;
		getValues(): dw.util.Collection;
		isChecked(value: string): boolean;
		isEmpty(): boolean;
		isSubmitted(): boolean;
		toString(): string;
	}

	declare class HttpParameterMap extends Object {
		// constants
		// -
		// properties
		get parameterCount(): number;
		get parameterNames(): dw.util.Set<string>;
		get requestBodyAsString(): string;
		// constructors
		// -
		// methods
		get(name: Object): HttpParameter;
		getParameterCount(): number;
		getParameterMap(prefix: string): HttpParameterMap;
		getParameterNames(): dw.util.Set;
		getRequestBodyAsString(): string;
		isParameterSubmitted(key: string): boolean;
		processMultipart(callback: Function): dw.util.LinkedHashMap;
	}

	declare class URL extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		// -
		// methods
		abs(): URL;
		append(name: string, value: string): URL;
		appendCSRFTokenBM(): URL;
		host(host: string): URL;
		http(): URL;
		https(): URL;
		relative(): URL;
		remove(name: string): URL;
		siteHost(): URL;
		toString(): string;
	}

	declare class URLAction extends Object {
		// constants
		// -
		// properties
		// -
		// constructors
		URLAction(action: string, siteName: string, locale: string, hostName: string);
		URLAction(action: string, siteName: string, locale: string);
		URLAction(action: string, siteName: string);
		URLAction(action: string);
		// methods
		// -
	}

	declare class URLUtils extends Object {
		// constants
		const CONTEXT_CATALOG: string;
		const CONTEXT_LIBRARY: string;
		const CONTEXT_SITE: string;
		// properties
		// -
		// constructors
		// -
		// methods
		static abs(action: URLAction, ...params: URLParameter): URL;
		static abs(appendSID: boolean, action: URLAction, ...params: URLParameter): URL;
		static abs(action: string, ...namesAndParams: string): URL;
		static abs(appendSID: boolean, action: string, ...namesAndParams: string): URL;
		static absImage(context: string, contextID: string, relPath: string, transform: Object): URL;
		static absImage(relPath: string, transform: Object): URL;
		static absStatic(context: string, contextID: string, relPath: string): URL;
		static absStatic(relPath: string): URL;
		static absWebRoot(): URL;
		static continueURL(): URL;
		static home(): URL;
		static http(action: URLAction, ...params: URLParameter): URL;
		static http(appendSID: boolean, action: URLAction, ...params: URLParameter): URL;
		static http(action: string, ...namesAndParams: string): URL;
		static http(appendSID: boolean, action: string, ...namesAndParams: string): URL;
		static httpContinue(): URL;
		static httpHome(): URL;
		static httpImage(context: string, contextID: string, relPath: string, transform: Object): URL;
		static httpImage(host: string, context: string, contextID: string, relPath: string, transform: Object): URL;
		static httpImage(relPath: string, transform: Object): URL;
		static httpImage(host: string, relPath: string, transform: Object): URL;
		static https(action: URLAction, ...params: URLParameter): URL;
		static https(appendSID: boolean, action: URLAction, ...params: URLParameter): URL;
		static https(action: string, ...namesAndParams: string): URL;
		static https(appendSID: boolean, action: string, ...namesAndParams: string): URL;
		static httpsContinue(): URL;
		static httpsHome(): URL;
		static httpsImage(context: string, contextID: string, relPath: string, transform: Object): URL;
		static httpsImage(host: string, context: string, contextID: string, relPath: string, transform: Object): URL;
		static httpsImage(relPath: string, transform: Object): URL;
		static httpsImage(host: string, relPath: string, transform: Object): URL;
		static httpsStatic(context: string, contextID: string, relPath: string): URL;
		static httpsStatic(host: string, context: string, contextID: string, relPath: string): URL;
		static httpsStatic(relPath: string): URL;
		static httpsStatic(host: string, relPath: string): URL;
		static httpStatic(context: string, contextID: string, relPath: string): URL;
		static httpStatic(host: string, context: string, contextID: string, relPath: string): URL;
		static httpStatic(relPath: string): URL;
		static httpStatic(host: string, relPath: string): URL;
		static httpsWebRoot(): URL;
		static httpWebRoot(): URL;
		static imageURL(context: string, contextID: string, relPath: string, transform: Object): URL;
		static imageURL(relPath: string, transform: Object): URL;
		static sessionRedirect(host: string, url: URL): URL;
		static sessionRedirectHttpOnly(host: string, url: URL): URL;
		static staticURL(context: string, contextID: string, relPath: string): URL;
		static staticURL(relPath: string): URL;
		static url(action: URLAction, ...params: URLParameter): URL;
		static url(appendSID: boolean, action: URLAction, ...params: URLParameter): URL;
		static url(action: string, ...namesAndParams: string): URL;
		static url(appendSID: boolean, action: string, ...namesAndParams: string): URL;
		static webRoot(): URL;
	}

}