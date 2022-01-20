import { Body, Controller, Get, Logger, Param, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ROLE } from 'src/utils/constants/role.const';
import { GetUser } from 'src/utils/decorator/get-user.decorator';
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
@UsePipes(new ValidationPipe({ transform: true }))
export class OfferController {

    private logger = new Logger(OfferController.name);

    constructor(private offerService: OfferService) { }

    @Get()
    @Roles(ROLE.ADMIN)
    async get(@Query() input: BaseQueryInputDto) {
        return await this.offerService.get(input);
    }

    @Get('income')
    @Roles(ROLE.USER)
    async getEmp(@GetUser() user, @Query() input: BaseQueryInputDto) {
        return await this.offerService.getByEmp(user._id, input);
    }

    @Get('sent')
    @Roles(ROLE.USER, ROLE.COMPANY)
    async getComp(@GetUser() user, @Query() input: BaseQueryInputDto) {
        return await this.offerService.getByComp(user._id, input);
    }

    @Post()
    @Roles(ROLE.USER, ROLE.COMPANY)
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() offer: OfferDto) {
        return this.offerService.add(offer);
    }

    @Put('/:id')
    @Roles(ROLE.ADMIN, ROLE.USER)
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Body() offer: OfferDto, @Param('id') id: string, @GetUser() user) {
        return await this.offerService.edit(id, offer, user.email);
    }
}
