export class OfferDto {
    _id?: string;
    compEmail?: string;
    compPhone?: string;
    address?: string;
    user?: string;
    employer: string;
    employerType?: string;
    minPrice?: number;
    maxPrice?: number;
    position?: string;
    workType?: string;
    message?: string;
}