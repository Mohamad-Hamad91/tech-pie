import { OfferStatus } from "src/app/model/offer-status";

export class OfferDto {
    _id?: string;
    compEmail?: string;
    compPhone?: string;
    compName?: string;
    workPlace?: string;
    user?: {
        _id: string;
        email: string
    };
    employer?: {
        _id: string;
        email: string
    };
    employerType?: string;
    minPrice?: number;
    maxPrice?: number;
    position?: string;
    workType?: string;
    message?: string;
    status?: OfferStatus;
}