import { OfferStatus } from "./offer-status";

export class OfferDto {
    _id?: string;
    compEmail?: string;
    compPhone?: string;
    compName?: string;
    workPlace?: string;
    user?: string;
    employer: string;
    employerType?: string;
    minPrice?: number;
    maxPrice?: number;
    position?: string;
    workType?: string;
    message?: string;
    status?: OfferStatus = OfferStatus.IN_PROGRESS;
}