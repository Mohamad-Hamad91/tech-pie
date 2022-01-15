import { Body, Controller, Get, Logger, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/utils/decorator/roles.decorator';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { OfferDto } from './offer.dto';
import { OfferService } from './offer.service';

@Controller({
    path: 'offer',
    version: '1'
})
@UseGuards(AuthGuard(), RolesGuard)
export class OfferController {

    private logger = new Logger(OfferController.name);

    constructor(private offerService: OfferService) { }

    @Get()
    @Roles('ADMIN')
    @UsePipes(new ValidationPipe({ transform: true }))
    async get(@Query() input: BaseQueryInputDto) {
        return await this.offerService.get(input);
    }

    @Post()
    @Roles('USER', 'COMPANY')
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() offer: OfferDto) {
        return this.offerService.add(offer);
    }

}
