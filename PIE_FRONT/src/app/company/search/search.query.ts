export class SearchQuery {
    expectedPriceMin: number;
    expectedPriceMax: number;
    expectedPriceUnit: string;
    expectedPriceCurrency: string;
    country?: string;
    city?: string;
    available?: boolean;
    availableAt?: Date;
    workType?: string;
    shift?: string;
    skills?: string[];
}

export class Skill {
    expertLevel: string;
    value: string;
}

export class QueryDto {
    search: string;
    pageSize: number;
    pageNumber: number;
    criteria: Criteria[] = [];
}

export class Criteria {
    key: string;
    value: any;
    operation: string;
    ignoreCase?: boolean = false;
}