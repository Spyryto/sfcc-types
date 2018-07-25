
declare namespace dw.catalog {

	declare class CatalogMgr extends Object {
		// constants
		// -
		// properties
		get siteCatalog(): Catalog;
		get sortingOptions(): List;
		get sortingRules(): dw.util.Collection;
		// constructors
		// -
		// methods
		static getCatalog(id: string): Catalog;
		static getCategory(id: string): Category;
		static getSiteCatalog(): Catalog;
		static getSortingOption(id: string): SortingOption;
		static getSortingOptions(): List;
		static getSortingRule(id: string): SortingRule;
		static getSortingRules(): dw.util.Collection;
	}

	declare class Product extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		get activeData(): ProductActiveData;
		get allCategories(): dw.util.Collection<Category>;
		get allCategoryAssignments(): dw.util.Collection;
		get allIncomingProductLinks(): dw.util.Collection;
		get allProductLinks(): dw.util.Collection;
		get assignedToSiteCatalog(): boolean;
		get attributeModel(): ProductAttributeModel;
		get availabilityModel(): ProductAvailabilityModel;
		get available(): boolean;
		get availableFlag(): boolean;
		get brand(): string;
		get bundle(): boolean;
		get bundled(): boolean;
		get bundledProducts(): dw.util.Collection;
		get bundles(): dw.util.Collection;
		get categories(): dw.util.Collection;
		get categorized(): boolean;
		get categoryAssignments(): dw.util.Collection;
		get classificationCategory(): Category;
		get EAN(): string;
		get facebookEnabled(): boolean;
		get ID(): string;
		get image(): dw.content.MediaFile;
		get incomingProductLinks(): dw.util.Collection;
		get longDescription(): MarkupText;
		get manufacturerName(): string;
		get manufacturerSKU(): string;
		get master(): boolean;
		get minOrderQuantity(): Quantity;
		get name(): string;
		get online(): boolean;
		get onlineCategories(): dw.util.Collection<Category>;
		get onlineFlag(): boolean;
		get onlineFrom(): Date;
		get onlineTo(): Date;
		get optionModel(): ProductOptionModel;
		get optionProduct(): boolean;
		get orderableRecommendations(): dw.util.Collection;
		get pageDescription(): string;
		get pageKeywords(): string;
		get pageMetaTags(): Array;
		get pageTitle(): string;
		get pageURL(): string;
		get pinterestEnabled(): boolean;
		get priceModel(): ProductPriceModel;
		get primaryCategory(): Category;
		get primaryCategoryAssignment(): CategoryAssignment;
		get product(): boolean;
		get productLinks(): dw.util.Collection;
		get productSet(): boolean;
		get productSetProduct(): boolean;
		get productSetProducts(): dw.util.Collection<Product>;
		get productSets(): dw.util.Collection<Product>;
		get recommendations(): dw.util.Collection;
		get retailSet(): boolean;
		get searchable(): boolean;
		get searchableFlag(): boolean;
		get searchableIfUnavailableFlag(): boolean;
		get searchPlacement(): number;
		get searchRank(): number;
		get shortDescription(): MarkupText;
		get siteMapChangeFrequency(): string;
		get siteMapPriority(): number;
		get siteProduct(): boolean;
		get stepQuantity(): Quantity;
		get storeReceiptName(): string;
		get storeTaxClass(): string;
		get taxClassID(): string;
		get template(): string;
		get thumbnail(): dw.content.MediaFile;
		get unit(): string;
		get UPC(): string;
		get variant(): boolean;
		/** (Read Only)
		 *  A collection of all variants assigned to this variation master or variation group product. All variants are returned regardless of whether they are online or offline. If this product does not represent a variation master or variation group product then an empty collection is returned. */
		get variants(): dw.util.Collection<Variant>;
		get variationGroup(): boolean;
		get variationGroups(): dw.util.Collection;
		get variationModel(): ProductVariationModel;
		// constructors
		// -
		// methods
		assignedToCategory(category: Category): boolean;
		getActiveData(): ProductActiveData;
		getAllCategories(): dw.util.Collection;
		getAllCategoryAssignments(): dw.util.Collection;
		getAllIncomingProductLinks(): dw.util.Collection;
		getAllIncomingProductLinks(type: number): dw.util.Collection;
		getAllProductLinks(): dw.util.Collection;
		getAllProductLinks(type: number): dw.util.Collection;
		getAllRecommendations(catalog: Catalog): dw.util.Collection;
		getAllRecommendations(catalog: Catalog, type: number): dw.util.Collection;
		getAttributeModel(): ProductAttributeModel;
		getAvailabilityModel(): ProductAvailabilityModel;
		getAvailabilityModel(list: ProductInventoryList): ProductAvailabilityModel;
		getAvailableFlag(): boolean;
		getBrand(): string;
		getBundledProductQuantity(aProduct: Product): Quantity;
		getBundledProducts(): dw.util.Collection;
		getBundles(): dw.util.Collection;
		getCategories(): dw.util.Collection;
		getCategoryAssignment(category: Category): CategoryAssignment;
		getCategoryAssignments(): dw.util.Collection;
		getClassificationCategory(): Category;
		getEAN(): string;
		getID(): string;
		getImage(): dw.content.MediaFile;
		getImage(viewtype: string, index: number): dw.content.MediaFile;
		getImage(viewtype: string): dw.content.MediaFile;
		getImages(viewtype: string): List;
		getIncomingProductLinks(): dw.util.Collection;
		getIncomingProductLinks(type: number): dw.util.Collection;
		getLongDescription(): MarkupText;
		getManufacturerName(): string;
		getManufacturerSKU(): string;
		getMinOrderQuantity(): Quantity;
		getName(): string;
		getOnlineCategories(): dw.util.Collection;
		getOnlineFlag(): boolean;
		getOnlineFrom(): Date;
		getOnlineTo(): Date;
		getOptionModel(): ProductOptionModel;
		getOrderableRecommendations(): dw.util.Collection;
		getOrderableRecommendations(type: number): dw.util.Collection;
		getPageDescription(): string;
		getPageKeywords(): string;
		getPageMetaTag(id: string): PageMetaTag;
		getPageMetaTags(): Array;
		getPageTitle(): string;
		getPageURL(): string;
		getPriceModel(): ProductPriceModel;
		getPriceModel(optionModel: ProductOptionModel): ProductPriceModel;
		getPrimaryCategory(): Category;
		getPrimaryCategoryAssignment(): CategoryAssignment;
		getProductLinks(): dw.util.Collection;
		getProductLinks(type: number): dw.util.Collection;
		getProductSetProducts(): dw.util.Collection;
		getProductSets(): dw.util.Collection;
		getRecommendations(): dw.util.Collection;
		getRecommendations(type: number): dw.util.Collection;
		getSearchableFlag(): boolean;
		getSearchableIfUnavailableFlag(): boolean;
		getSearchPlacement(): number;
		getSearchRank(): number;
		getShortDescription(): MarkupText;
		getSiteMapChangeFrequency(): string;
		getSiteMapPriority(): number;
		getStepQuantity(): Quantity;
		getStoreReceiptName(): string;
		getStoreTaxClass(): string;
		getTaxClassID(): string;
		getTemplate(): string;
		getThumbnail(): dw.content.MediaFile;
		getUnit(): string;
		getUPC(): string;
		getVariants(): dw.util.Collection;
		getVariationGroups(): dw.util.Collection;
		getVariationModel(): ProductVariationModel;
		includedInBundle(product: Product): boolean;
		isAssignedToCategory(category: Category): boolean;
		isAssignedToSiteCatalog(): boolean;
		isAvailable(): boolean;
		isBundle(): boolean;
		isBundled(): boolean;
		isCategorized(): boolean;
		isFacebookEnabled(): boolean;
		isMaster(): boolean;
		isOnline(): boolean;
		isOptionProduct(): boolean;
		isPinterestEnabled(): boolean;
		isProduct(): boolean;
		isProductSet(): boolean;
		isProductSetProduct(): boolean;
		isRetailSet(): boolean;
		isSearchable(): boolean;
		isSiteProduct(): boolean;
		isVariant(): boolean;
		isVariationGroup(): boolean;
		setAvailableFlag(available: boolean): void;
		setOnlineFlag(online: boolean): void;
		setSearchableFlag(searchable: boolean): void;
		setSearchPlacement(placement: number): void;
		setSearchRank(rank: number): void;
	}

	declare class ProductMgr {
		// constants
		// -
		// properties
		// -
		// constructors
		// -
		// methods
		static getProduct(productID: string): Product;
		static queryAllSiteProducts(): dw.util.SeekableIterator;
		static queryAllSiteProductsSorted(): dw.util.SeekableIterator;
		static queryProductsInCatalog(catalog: Catalog): dw.util.SeekableIterator;
		static queryProductsInCatalogSorted(catalog: Catalog): dw.util.SeekableIterator;
	}


	declare class ProductInventoryList extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		get defaultInStockFlag(): boolean;
		get description(): string;
		get ID(): string;
		// constructors
		// -
		// methods
		getDefaultInStockFlag(): boolean;
		getDescription(): string;
		getID(): string;
		getRecord(product: Product): ProductInventoryRecord;
		getRecord(productID: string): ProductInventoryRecord;
	}

	declare class ProductInventoryMgr extends Object {
		// constants
		// -
		// properties
		static get inventoryList(): ProductInventoryList;
		// constructors
		// -
		// methods
		static getInventoryList(): ProductInventoryList;
		static getInventoryList(listID: string): ProductInventoryList;
	}

	declare class ProductInventoryRecord extends dw.object.ExtensibleObject {
		// constants
		// -
		// properties
		allocation: Quantity;
		get allocationResetDate(): Date;
		get ATS(): Quantity;
		backorderable: boolean;
		inStockDate: Date;
		get onHand(): Quantity;
		get onOrder(): Quantity;
		perpetual: boolean;
		preorderable: boolean;
		preorderBackorderAllocation: Quantity;
		get reserved(): Quantity;
		get stockLevel(): Quantity;
		get turnover(): Quantity;
		// constructors
		// -
		// methods
		getAllocation(): Quantity;
		getAllocationResetDate(): Date;
		getATS(): Quantity;
		getInStockDate(): Date;
		getOnHand(): Quantity;
		getOnOrder(): Quantity;
		getPreorderBackorderAllocation(): Quantity;
		getReserved(): Quantity;
		getStockLevel(): Quantity;
		getTurnover(): Quantity;
		isBackorderable(): boolean;
		isPerpetual(): boolean;
		isPreorderable(): boolean;
		setAllocation(quantity: number): void;
		setBackorderable(backorderableFlag: boolean): void;
		setInStockDate(inStockDate: Date): void;
		setPerpetual(perpetualFlag: boolean): void;
		setPreorderable(preorderableFlag: boolean): void;
		setPreorderBackorderAllocation(quantity: number): void;
	}

	declare class SearchModel extends Object {
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
		get products(): dw.util.Iterator<Product>;
		get productSearchHits(): dw.util.Iterator<dw.catalog.ProductSearchHit>;
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
		static urlForCategory(action: string, cgid: string): URL;
		static urlForCategory(url: URL, cgid: string): URL;
		static urlForProduct(action: string, cgid: string, pid: string): URL;
		static urlForProduct(url: URL, cgid: string, pid: string): URL;
		static urlForRefine(action: string, attributeID: string, value: string): URL;
		static urlForRefine(url: URL, attributeID: string, value: string): URL;
	}

	declare class ProductSearchHit extends Object {
		// constants
		// -
		// properties
		get allPromotionIDs(): List<string>;
		get bonusPromotionIDs(): List<string>;
		get discountedPromotionIDs(): List<string>;
		get firstRepresentedProduct(): Product;
		get firstRepresentedProductID(): string;
		get lastRepresentedProduct(): Product;
		get lastRepresentedProductID(): string;
		get maxPrice(): dw.value.Money;
		get minPrice(): dw.value.Money;
		get priceRange(): boolean;
		get product(): Product;
		get productID(): string;
		get qualifyingPromotionIDs(): List<string>;
		get representedProductIDs(): List<string>;
		get representedProducts(): List<string>;
		// constructors
		// -
		// methods
		getFirstRepresentedProduct(): Product;
		getFirstRepresentedProductID(): string;
		getLastRepresentedProduct(): Product;
		getLastRepresentedProductID(): string;
		getMaxPrice(): dw.value.Money;
		getMinPrice(): dw.value.Money;
		getProduct(): Product;
		getProductID(): string;
		getRepresentedProductIDs(): List<string>;
		getRepresentedProducts(): List<Product>;
		getRepresentedVariationValues(va: dw.catalog.ProductVariationAttribute | string): List<dw.catalog.ProductVariationAttributeValue>;
		isPriceRange(): boolean;
	}

	declare class Category {
		// constants
		// -
		// properties
		get allRecommendations(): Collection;
		get categoryAssignments(): Collection;
		get defaultSortingRule(): SortingRule;
		get description(): String;
		get displayName(): String;
		get ID(): String;
		get image(): dw.content.MediaFile;
		get incomingCategoryLinks(): Collection;
		get online(): boolean;
		get onlineCategoryAssignments(): Collection;
		get onlineFlag(): boolean;
		get onlineFrom(): Date;
		get onlineIncomingCategoryLinks(): Collection;
		get onlineOutgoingCategoryLinks(): Collection;
		get onlineProducts(): Collection;
		get onlineSubCategories(): Collection;
		get onlineTo(): Date;
		get orderableRecommendations(): Collection;
		get outgoingCategoryLinks(): Collection;
		get pageDescription(): String;
		get pageKeywords(): String;
		get pageTitle(): String;
		get pageURL(): String;
		get parent(): Category;
		get productAttributeModel(): ProductAttributeModel;
		get products(): Collection;
		get recommendations(): Collection;
		get root(): boolean;
		searchPlacement: Number;
		searchRank: Number;
		get siteMapChangeFrequency(): String;
		get siteMapPriority(): Number;
		get subCategories(): Collection;
		get template(): String;
		get thumbnail(): dw.content.MediaFile;
		get topLevel(): boolean;
		// constructors
		// -
		// methods
		getAllRecommendations(): Collection;
		getAllRecommendations(type: Number): Collection;
		getCategoryAssignments(): Collection;
		getDefaultSortingRule(): SortingRule;
		getDescription(): String;
		getDisplayName(): String;
		getID(): String;
		getImage(): dw.content.MediaFile;
		getIncomingCategoryLinks(): Collection;
		getIncomingCategoryLinks(type: Number): Collection;
		getOnlineCategoryAssignments(): Collection;
		getOnlineFlag(): boolean;
		getOnlineFrom(): Date;
		getOnlineIncomingCategoryLinks(): Collection;
		getOnlineOutgoingCategoryLinks(): Collection;
		getOnlineProducts(): Collection;
		getOnlineSubCategories(): Collection;
		getOnlineTo(): Date;
		getOrderableRecommendations(): Collection;
		getOrderableRecommendations(type: Number): Collection;
		getOutgoingCategoryLinks(): Collection;
		getOutgoingCategoryLinks(type: Number): Collection;
		getPageDescription(): String;
		getPageKeywords(): String;
		getPageTitle(): String;
		getPageURL(): String;
		getParent(): Category;
		getProductAttributeModel(): ProductAttributeModel;
		getProducts(): Collection;
		getRecommendations(): Collection;
		getRecommendations(type: Number): Collection;
		getSearchPlacement(): Number;
		getSearchRank(): Number;
		getSiteMapChangeFrequency(): String;
		getSiteMapPriority(): Number;
		getSubCategories(): Collection;
		getTemplate(): String;
		getThumbnail(): dw.content.MediaFile;
		hasOnlineProducts(): boolean;
		hasOnlineSubCategories(): boolean;
		isDirectSubCategoryOf(parent: Category): boolean;
		isOnline(): boolean;
		isRoot(): boolean;
		isSubCategoryOf(ancestor: Category): boolean;
		isTopLevel(): boolean;
		setSearchPlacement(placement: Number): void;
		setSearchRank(rank: Number): void;
	}

	declare class Variant extends Product {
		// constants
		// -
		// properties
		get allProductLinks(): Collection;
		get brand(): String;
		get classificationCategory(): Category;
		get custom(): CustomAttributes;
		get EAN(): String;
		get image(): dw.content.MediaFile;
		get longDescription(): MarkupText;
		get manufacturerName(): String;
		get manufacturerSKU(): String;
		get masterProduct(): Product;
		get name(): String;
		get onlineFrom(): Date;
		get onlineTo(): Date;
		get optionProduct(): boolean;
		get pageDescription(): String;
		get pageKeywords(): String;
		get pageTitle(): String;
		get pageURL(): String;
		get productLinks(): Collection;
		get shortDescription(): MarkupText;
		get taxClassID(): String;
		get template(): String;
		get thumbnail(): dw.content.MediaFile;
		get unit(): String;
		get UPC(): String;
		// constructors
		// -
		// methods
		getAllProductLinks(): Collection;
		getAllProductLinks(type: Number): Collection;
		getBrand(): String;
		getClassificationCategory(): Category;
		getCustom(): CustomAttributes;
		getEAN(): String;
		getImage(): dw.content.MediaFile;
		getLongDescription(): MarkupText;
		getManufacturerName(): String;
		getManufacturerSKU(): String;
		getMasterProduct(): Product;
		getName(): String;
		getOnlineFrom(): Date;
		getOnlineTo(): Date;
		getPageDescription(): String;
		getPageKeywords(): String;
		getPageTitle(): String;
		getPageURL(): String;
		getProductLinks(): Collection;
		getProductLinks(type: Number): Collection;
		getRecommendations(type: Number): Collection;
		getShortDescription(): MarkupText;
		getTaxClassID(): String;
		getTemplate(): String;
		getThumbnail(): dw.content.MediaFile;
		getUnit(): String;
		getUPC(): String;
		isOptionProduct(): boolean;
	}


}