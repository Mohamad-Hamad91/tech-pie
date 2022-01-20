export class CompanyDto {

    _id?: string;
    email?: string;
    phone?: string;
    name?: string;
    website?: string;
    logo?: string;
    logoFile?: File;
    address?: string;
    city?: string;
    description?: string;
    empBenifits?: string;
    compSize?: string;
    aboutImg?: string;
    aboutImgFile?: File;
    aboutContent?: string;
    portofolio?: PortofolioDto[];
    user?: string;
    contactPerson?: string;

}

export class PortofolioDto {
    id?: string;
    value?: string;
    label?: string;
    img?: string;
    imgFile?: File;
}