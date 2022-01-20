import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { ROLE } from 'src/utils/constants/role.const';
import { GetUser } from 'src/utils/decorator/get-user.decorator';
import { Roles } from 'src/utils/decorator/roles.decorator';
import { ParseFormDataJsonPipe } from 'src/utils/pipe/pares-formdata.pipe';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';

@Controller({
    path: 'company',
    version: '1'
})
@UseGuards(AuthGuard(), RolesGuard)
export class CompanyController {

    constructor(private companyService: CompanyService) { }

    @Get('user/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getByUserId(@Param('id') id: string) {
        return this.companyService.getByUserId(id);
    }

    // get my profile
    @Get('/my-profile')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getMyProfile(@GetUser() user) {
        return this.companyService.getByUserId(user._id);
    }


    @Get('/:id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getOne(@Param('id') id: string) {
        return this.companyService.getOne(id);
    }


    @UseInterceptors(FileInterceptor('logoFile'))
    @Post()
    @ApiConsumes('multipart/form-data')
    create(@Body(new ParseFormDataJsonPipe(), new ValidationPipe({ transform: true })) company: CompanyDto,
        @UploadedFile() file: Express.Multer.File, @GetUser() user) {
        return this.companyService.create(company, user._id, file);
    }


    @UseInterceptors(FileInterceptor('logoFile'))
    @Put(':id')
    @Roles(ROLE.COMPANY)
    @ApiConsumes('multipart/form-data')
    update(@Body(new ParseFormDataJsonPipe(), new ValidationPipe({ transform: true })) company: CompanyDto,
        @UploadedFile() file: Express.Multer.File, @Param('id') id) {
        return this.companyService.update(id, company, file);
    }

    @Delete('/:id')
    @Roles(ROLE.ADMIN)
    delete(@Param('id') id: string) {
        return this.companyService.delete(id);
    }

}
