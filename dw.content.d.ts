
declare namespace dw.content {

	declare class MediaFile extends Object {
		// constants
		// -
		// properties
		get absURL(): dw.web.URL;
		get alt(): string;
		get httpsURL(): dw.web.URL;
		get httpURL(): dw.web.URL;
		get title(): string;
		get url(): dw.web.URL;
		get URL(): dw.web.URL;
		get viewType(): string;
		// constructors
		// -
		// methods
		getAbsImageURL(transform: Object): dw.web.URL;
		getAbsURL(): dw.web.URL;
		getAlt(): string;
		getHttpImageURL(transform: Object): dw.web.URL;
		getHttpsImageURL(transform: Object): dw.web.URL;
		getHttpsURL(): dw.web.URL;
		getHttpURL(): dw.web.URL;
		getImageURL(transform: Object): dw.web.URL;
		getTitle(): string;
		getUrl(): dw.web.URL;
		getURL(): dw.web.URL;
		getViewType(): string;
	}

	declare class SearchModel {
		// constants
		const SEARCH_PHRASE_PARAMETER: string;
		const SORT_DIRECTION_ASCENDING: number;
		const SORT_DIRECTION_DESCENDING: number;
		const SORT_DIRECTION_NONE: number;
		// properties
		get count(): number;
		get emptyQuery(): boolean;
		get refinedByAttribute(): boolean;
		get refinedSearch(): boolean;
		searchPhrase: string;
		// constructors
		// -
		// methods
		addRefinementValues(attributeID: string, values: string): void;
		canRelax(): boolean;
		getCount(): number;
		getRefinementMaxValue(attributeID: string): string;
		getRefinementMinValue(attributeID: string): string;
		getRefinementValue(attributeID: string): string;
		getRefinementValues(attributeID: string): dw.util.Collection;
		getSearchPhrase(): string;
		static getSearchRedirect(searchPhrase: string): URLRedirect;
		getSortingCondition(attributeID: string): number;
		isEmptyQuery(): boolean;
		isRefinedByAttribute(attributeID: string): boolean;
		isRefinedByAttribute(): boolean;
		isRefinedByAttributeValue(attributeID: string, value: string): boolean;
		isRefinedSearch(): boolean;
		isRefinementByValueRange(attributeID: string): boolean;
		isRefinementByValueRange(attributeID: string, minValue: string, maxValue: string): boolean;
		removeRefinementValues(attributeID: string, values: string): void;
		search(): void;
		setRefinementValueRange(attributeID: string, minValue: string, maxValue: string): void;
		setRefinementValues(attributeID: string, values: string): void;
		setSearchPhrase(phrase: string): void;
		setSortingCondition(attributeID: string, direction: number): void;
		url(action: string): URL;
		url(url: URL): URL;
		urlDefaultSort(url: string): URL;
		urlDefaultSort(url: URL): URL;
		urlRefineAttribute(action: string, attributeID: string, value: string): URL;
		urlRefineAttribute(url: URL, attributeID: string, value: string): URL;
		urlRefineAttributeValue(action: string, attributeID: string, value: string): URL;
		urlRefineAttributeValue(url: URL, attributeID: string, value: string): URL;
		urlRefineAttributeValueRange(action: string, attributeID: string, minValue: string, maxValue: string): URL;
		urlRelaxAttribute(action: string, attributeID: string): URL;
		urlRelaxAttribute(url: URL, attributeID: string): URL;
		urlRelaxAttributeValue(action: string, attributeID: string, value: string): URL;
		urlRelaxAttributeValue(url: URL, attributeID: string, value: string): URL;
		urlSort(action: string, sortBy: string, sortDir: number): URL;
		urlSort(url: URL, sortBy: string, sortDir: number): URL;
	}

	declare class ContentSearchModel extends SearchModel {
		// constants
		const CONTENTID_PARAMETER: string;
		const FOLDERID_PARAMETER: string;
		// properties
		get content(): dw.util.Iterator;
		contentID: string;
		get deepestCommonFolder(): Folder;
		get folder(): Folder;
		folderID: string;
		get folderSearch(): boolean;
		get pageMetaTags(): Array;
		recursiveFolderSearch: boolean;
		get refinedByFolder(): boolean;
		get refinedFolderSearch(): boolean;
		get refinements(): ContentSearchRefinements;
		// constructors
		ContentSearchModel();
		// methods
		getContent(): dw.util.Iterator;
		getContentID(): string;
		getDeepestCommonFolder(): Folder;
		getFolder(): Folder;
		getFolderID(): string;
		getPageMetaTag(id: string): PageMetaTag;
		getPageMetaTags(): Array;
		getRefinements(): ContentSearchRefinements;
		isFolderSearch(): boolean;
		isRecursiveFolderSearch(): boolean;
		isRefinedByFolder(): boolean;
		isRefinedFolderSearch(): boolean;
		search(): void;
		setContentID(contentID: string): void;
		setFolderID(folderID: string): void;
		setRecursiveFolderSearch(recurse: boolean): void;
		static urlForContent(action: string, cid: string): URL;
		static urlForContent(url: URL, cid: string): URL;
		static urlForFolder(action: string, fid: string): URL;
		static urlForFolder(url: URL, fid: string): URL;
		static urlForRefine(action: string, name: string, value: string): URL;
		static urlForRefine(url: URL, name: string, value: string): URL;
		urlRefineFolder(action: string, refineFolderID: string): URL;
		urlRefineFolder(url: URL, refineFolderID: string): URL;
		urlRelaxFolder(action: string): URL;
		urlRelaxFolder(url: URL): URL;
	}

	declare class ProductSearchModel extends SearchModel {
		// constants
		const CATEGORYID_PARAMETER: string;
		const PRICE_MAX_PARAMETER: string;
		const PRICE_MIN_PARAMETER: string;
		const PRODUCTID_PARAMETER: string;
		const PROMOTION_PRODUCT_TYPE_ALL: string;
		const PROMOTION_PRODUCT_TYPE_BONUS: string;
		const PROMOTION_PRODUCT_TYPE_DISCOUNTED: string;
		const PROMOTION_PRODUCT_TYPE_PARAMETER: string;
		const PROMOTION_PRODUCT_TYPE_QUALIFYING: string;
		const PROMOTIONID_PARAMETER: string;
		const REFINE_NAME_PARAMETER_PREFIX: string;
		const REFINE_VALUE_PARAMETER_PREFIX: string;
		const SORT_BY_PARAMETER_PREFIX: string;
		const SORT_DIRECTION_PARAMETER_PREFIX: string;
		const SORTING_RULE_PARAMETER: string;
		// properties
		get category(): Category;
		categoryID: string;
		get categorySearch(): boolean;
		get deepestCommonCategory(): Category;
		orderableProductsOnly: boolean;
		get pageMetaTags(): Array;
		get personalizedSort(): boolean;
		priceMax: number;
		priceMin: number;
		productID: string;
		get products(): dw.util.Iterator;
		get productSearchHits(): dw.util.Iterator;
		promotionID: string;
		promotionIDs: List;
		promotionProductType: string;
		recursiveCategorySearch: boolean;
		get refinedByCategory(): boolean;
		get refinedByPrice(): boolean;
		get refinedCategorySearch(): boolean;
		get refinements(): ProductSearchRefinements;
		get searchPhraseSuggestions(): SearchPhraseSuggestions;
		sortingRule: SortingRule;
		get suggestedSearchPhrase(): string;
		get suggestedSearchPhrases(): List;
		// constructors
		constructor();
		// methods
		getCategory(): Category;
		getCategoryID(): string;
		getDeepestCommonCategory(): Category;
		getOrderableProductsOnly(): boolean;
		getPageMetaTag(id: string): PageMetaTag;
		getPageMetaTags(): Array;
		getPriceMax(): number;
		getPriceMin(): number;
		getProductID(): string;
		getProducts(): dw.util.Iterator;
		getProductSearchHit(product: Product): ProductSearchHit;
		getProductSearchHits(): dw.util.Iterator;
		getPromotionID(): string;
		getPromotionIDs(): List;
		getPromotionProductType(): string;
		getRefinements(): ProductSearchRefinements;
		getSearchPhraseSuggestions(): SearchPhraseSuggestions;
		getSortingRule(): SortingRule;
		getSuggestedSearchPhrase(): string;
		getSuggestedSearchPhrases(): List;
		isCategorySearch(): boolean;
		isPersonalizedSort(): boolean;
		isRecursiveCategorySearch(): boolean;
		isRefinedByCategory(): boolean;
		isRefinedByPrice(): boolean;
		isRefinedByPriceRange(priceMin: number, priceMax: number): boolean;
		isRefinedCategorySearch(): boolean;
		search(): void;
		setCategoryID(categoryID: string): void;
		setOrderableProductsOnly(orderableOnly: boolean): void;
		setPriceMax(priceMax: number): void;
		setPriceMin(priceMin: number): void;
		setProductID(productID: string): void;
		setPromotionID(promotionID: string): void;
		setPromotionIDs(promotionIDs: List): void;
		setPromotionProductType(promotionProductType: string): void;
		setRecursiveCategorySearch(recurse: boolean): void;
		setSortingCondition(attributeID: string, direction: number): void;
		setSortingRule(rule: SortingRule): void;
		static urlForCategory(action: string, cgid: string): URL;
		static urlForCategory(url: URL, cgid: string): URL;
		static urlForProduct(action: string, cgid: string, pid: string): URL;
		static urlForProduct(url: URL, cgid: string, pid: string): URL;
		static urlForRefine(action: string, attributeID: string, value: string): URL;
		static urlForRefine(url: URL, attributeID: string, value: string): URL;
		urlRefineCategory(action: string, refineCategoryID: string): URL;
		urlRefineCategory(url: URL, refineCategoryID: string): URL;
		urlRefinePrice(action: string, min: number, max: number): URL;
		urlRefinePrice(url: URL, min: number, max: number): URL;
		urlRelaxCategory(action: string): URL;
		urlRelaxCategory(url: URL): URL;
		urlRelaxPrice(action: string): URL;
		urlRelaxPrice(url: URL): URL;
		urlSortingRule(action: string, rule: SortingRule): URL;
		urlSortingRule(url: URL, rule: SortingRule): URL;
	}

	declare class Content extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		const classificationFolder: Folder;
		const description: string;
		const folders: dw.util.Collection;
		const ID: string;
		const name: string;
		const online: boolean;
		const onlineFlag: boolean;
		const pageDescription: string;
		const pageKeywords: string;
		const pageMetaTags: Array;
		const pageTitle: string;
		const pageURL: string;
		const searchable: boolean;
		const searchableFlag: boolean;
		const siteMapChangeFrequency: string;
		const siteMapPriority: number;
		const template: string;
		// constructors
		// -
		// methods
		getClassificationFolder(): Folder;
		getDescription(): string;
		getFolders(): dw.util.Collection;
		getID(): string;
		getName(): string;
		getOnlineFlag(): boolean;
		getPageDescription(): string;
		getPageKeywords(): string;
		getPageMetaTag(id: string): PageMetaTag;
		getPageMetaTags(): Array;
		getPageTitle(): string;
		getPageURL(): string;
		getSearchableFlag(): boolean;
		getSiteMapChangeFrequency(): string;
		getSiteMapPriority(): number;
		getTemplate(): string;
		isOnline(): boolean;
		isSearchable(): boolean;
	}

	declare class ContentMgr extends Object {
		// constants
		// -
		// properties
		static get siteLibrary(): Library;
		// constructors
		// -
		// methods
		static getContent(id: string): Content;
		static getFolder(id: string): Folder;
		static getSiteLibrary(): Library;
	}

	declare class Folder extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		get content(): dw.util.Collection;
		get description(): string;
		get displayName(): string;
		get ID(): string;
		get online(): boolean;
		get onlineContent(): dw.util.Collection;
		get onlineSubFolders(): dw.util.Collection;
		get pageDescription(): string;
		get pageKeywords(): string;
		get pageTitle(): string;
		get pageURL(): string;
		get parent(): Folder;
		get root(): boolean;
		get subFolders(): dw.util.Collection;
		get template(): string;
		// constructors
		// -
		// methods
		getContent(): dw.util.Collection;
		getDescription(): string;
		getDisplayName(): string;
		getID(): string;
		getOnlineContent(): dw.util.Collection;
		getOnlineSubFolders(): dw.util.Collection;
		getPageDescription(): string;
		getPageKeywords(): string;
		getPageTitle(): string;
		getPageURL(): string;
		getParent(): Folder;
		getSubFolders(): dw.util.Collection;
		getTemplate(): string;
		isOnline(): boolean;
		isRoot(): boolean;
	}

	declare class Library extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		get displayName(): string;
		get ID(): string;
		get root(): Folder;
		// constructors
		// -
		// methods
		getDisplayName(): string;
		getID(): string;
		getRoot(): Folder;
	}

	declare class MediaFile extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		get absURL(): URL;
		get alt(): string;
		get httpsURL(): URL;
		get httpURL(): URL;
		get title(): string;
		get url(): URL;
		get URL(): URL;
		get viewType(): string;
		// constructors
		// -
		// methods
		getAbsImageURL(transform: Object): URL;
		getAbsURL(): URL;
		getAlt(): string;
		getHttpImageURL(transform: Object): URL;
		getHttpsImageURL(transform: Object): URL;
		getHttpsURL(): URL;
		getHttpURL(): URL;
		getImageURL(transform: Object): URL;
		getTitle(): string;
		getUrl(): URL;
		getURL(): URL;
		getViewType(): string;
	}

}