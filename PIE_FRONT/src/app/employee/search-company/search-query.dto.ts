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