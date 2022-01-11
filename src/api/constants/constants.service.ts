import { Injectable } from '@nestjs/common';
import { ArmyServiceStatus } from 'src/utils/constants/armyServiceStatus';
import { City, Country } from 'src/utils/constants/countries';
import { Nationality } from 'src/utils/constants/nationalits';
import { WorkType } from 'src/utils/constants/workType';
import { Enum2Array } from 'src/utils/helpers/enum-2-array';

@Injectable()
export class ConstantsService {

    getCountries() {
        return Enum2Array.transform(Country);
    }

    getCity() {
        return Enum2Array.transform(City);
    }

    getNationalities() {
        return Enum2Array.transform(Nationality);
    }

    getArmyServiceStatus() {
        return Enum2Array.transform(ArmyServiceStatus);
    }

    getWorkTypes() {
        return Enum2Array.transform(WorkType);
    }

}
