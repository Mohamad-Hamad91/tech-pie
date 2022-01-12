import { Controller, Get } from '@nestjs/common';
import { ConstantsService } from './constants.service';

@Controller({
    version: '1',
    path: 'constants'
})
export class ConstantsController {

    constructor(private _constService: ConstantsService) { }

    @Get('city')
    getCities() {
        return this._constService.getCity();
    }

    @Get('nationality')
    getNationalities() {
        return this._constService.getNationalities();
    }

    @Get('army')
    getArmyServiceStatus() {
        return this._constService.getArmyServiceStatus();
    }

    @Get('work-type')
    getWorkType() {
        return this._constService.getWorkTypes();
    }

    @Get('skill')
    getSkills() {
        return this._constService.getSkills();
    }

    @Get('language')
    getLangs() {
        return this._constService.getLanguages();
    }

}
