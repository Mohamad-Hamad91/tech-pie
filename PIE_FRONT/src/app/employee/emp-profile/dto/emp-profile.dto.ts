import { CourseDto } from "./courses.dto";
import { EducationDto } from "./education.dto";
import { EmploymentHistory } from "./employment-history.dto";
import { LanguageDto } from "./language.dto";
import { LinkDto } from "./links.dto";
import { ProjectDto } from "./project.dto";
import { ReferencesDto } from "./references.dto";
import { SkillDto } from "./skills.dto";

export class EmpProfileDto {
    _id: string;
    email: string;
    name: string;
    phone: string;
    photo: {
        filename: string;
        _id: string;
        url: string;
    };
    city: string;
    address: string;
    gender?: 'Male' | 'Female';
    birthDate: Date;
    nationality: string;
    available: boolean;
    availableAt?: Date;
    workType: string[];
    shift: string;
    title: string;
    expectedPriceMin?: number;
    expectedPriceUnit?: string;
    expectedPriceCurrency?: string;
    totalExperience?: number;
    summary: string;
    hobbies: string;
    armyServiceStatus: string;
    employmentHistory: EmploymentHistory[];
    courses: CourseDto[];
    education: EducationDto[];
    links: LinkDto[];
    projects: ProjectDto[];
    references: ReferencesDto[];
    languages: LanguageDto[];
    skills: SkillDto[];
    user: string;
    avatar: File;
}