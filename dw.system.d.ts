
declare namespace dw.system {

	declare class Logger extends Object {
		// constants
		// -
		// properties
		get debugEnabled(): boolean;
		get errorEnabled(): boolean;
		get infoEnabled(): boolean;
		get rootLogger(): Log;
		get warnEnabled(): boolean;
		// constructors
		// -
		// methods
		static debug(msg: string, ...args: Object): void;
		static error(msg: string, ...args: Object): void;
		static getLogger(category: string): Log;
		static getLogger(fileNamePrefix: string, category: string): Log;
		static getRootLogger(): Log;
		static info(msg: string, ...args: Object): void;
		static isDebugEnabled(): boolean;
		static isErrorEnabled(): boolean;
		static isInfoEnabled(): boolean;
		static isWarnEnabled(): boolean;
		static warn(msg: string, ...args: Object): void;
	}

	declare class Request extends Object {
		// constants
		// -
		// properties
		get clientId(): string;
		get custom(): CustomAttributes;
		geolocation: Geolocation;
		get httpCookies(): Cookies;
		get httpHeaders(): Map;
		get httpHost(): string;
		get httpLocale(): string;
		get httpMethod(): string;
		get httpParameterMap(): dw.web.HttpParameterMap;
		get httpParameters(): Map;
		get httpPath(): string;
		get httpProtocol(): string;
		get httpQueryString(): string;
		get httpReferer(): string;
		get httpRemoteAddress(): string;
		get httpRequest(): boolean;
		get httpSecure(): boolean;
		get httpURL(): URL;
		get httpUserAgent(): string;
		get includeRequest(): boolean;
		locale: string;
		get ocapiVersion(): string;
		get pageMetaData(): PageMetaData;
		get requestID(): string;
		get session(): Session;
		get triggeredForm(): Form;
		get triggeredFormAction(): FormAction;
		// constructors
		// -
		// methods
		addHttpCookie(cookie: Cookie): void;
		getClientId(): string;
		getCustom(): CustomAttributes;
		getGeolocation(): Geolocation;
		getHttpCookies(): Cookies;
		getHttpHeaders(): Map;
		getHttpHost(): string;
		getHttpLocale(): string;
		getHttpMethod(): string;
		getHttpParameterMap(): HttpParameterMap;
		getHttpParameters(): Map;
		getHttpPath(): string;
		getHttpProtocol(): string;
		getHttpQueryString(): string;
		getHttpReferer(): string;
		getHttpRemoteAddress(): string;
		getHttpURL(): URL;
		getHttpUserAgent(): string;
		getLocale(): string;
		getOcapiVersion(): string;
		getPageMetaData(): PageMetaData;
		getRequestID(): string;
		getSession(): Session;
		getTriggeredForm(): Form;
		getTriggeredFormAction(): FormAction;
		isHttpRequest(): boolean;
		isHttpSecure(): boolean;
		isIncludeRequest(): boolean;
		setGeolocation(geoLocation: Geolocation): void;
		setLocale(localeID: string): boolean;
	}

	declare class Response extends Object {
		// constants
		const ACCESS_CONTROL_ALLOW_CREDENTIALS: string;
		const ACCESS_CONTROL_ALLOW_HEADERS: string;
		const ACCESS_CONTROL_ALLOW_METHODS: string;
		const ACCESS_CONTROL_ALLOW_ORIGIN: string;
		const ACCESS_CONTROL_EXPOSE_HEADERS: string;
		const ALLOW: string;
		const CONTENT_DISPOSITION: string;
		const CONTENT_LANGUAGE: string;
		const CONTENT_LOCATION: string;
		const CONTENT_MD5: string;
		const CONTENT_TYPE: string;
		const LOCATION: string;
		const PLATFORM_FOR_PRIVACY_PREFERENCES_PROJECT: string;
		const REFERRER_POLICY: string;
		const REFRESH: string;
		const RETRY_AFTER: string;
		const VARY: string;
		const X_CONTENT_TYPE_OPTIONS: string;
		const X_FRAME_OPTIONS: string;
		const X_FRAME_OPTIONS_DENY_VALUE: string;
		const X_FRAME_OPTIONS_SAMEORIGIN_VALUE: string;
		const X_XSS_PROTECTION: string;
		// properties
		get writer(): dw.io.PrintWriter;
		// constructors
		// -
		// methods
		addHttpCookie(cookie: Cookie): void;
		addHttpHeader(name: string, value: string): void;
		containsHttpHeader(name: string): boolean;
		getWriter(): PrintWriter;
		redirect(url: URL): void;
		redirect(url: URL, status: number): void;
		redirect(location: string): void;
		redirect(location: string, status: number): void;
		redirect(redirect: URLRedirect): void;
		setBuffered(buffered: boolean): void;
		setContentType(contentType: string): void;
		setExpires(expires: number): void;
		setExpires(expires: Date): void;
		setHttpHeader(name: string, value: string): void;
		setStatus(status: number): void;
		setVaryBy(varyBy: string): void;
	}

	declare class PipelineDictionary extends Object {

	}

}