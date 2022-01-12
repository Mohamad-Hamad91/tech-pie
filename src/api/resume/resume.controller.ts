import {
  Body,
  // CacheInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { AutoCompleteService } from 'src/utils/autocomplete/autocomplete-redis';
import { GetUser } from 'src/utils/decorator/get-user.decorator';
import { Roles } from 'src/utils/decorator/roles.decorator';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { ParseFormDataJsonPipe } from 'src/utils/pipe/pares-formdata.pipe';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ResumeDto } from './dto/resume.dto';
// import { Resume } from './entity/resume.entity';
import { ResumeService } from './resume.service';


@Controller({
  version: '1',
  path: 'resume'
})
@UseGuards(AuthGuard(), RolesGuard)
// @UseInterceptors(CacheInterceptor)
export class ResumeController {

  private logger = new Logger(ResumeController.name);

  constructor(private resumeService: ResumeService, private autocomplete: AutoCompleteService) { }

  @Get('/redis')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getRedis() {
    const addRes = await this.autocomplete.add('Hello world!', 100);
    this.logger.debug(addRes);
    let result = await this.autocomplete.get('He');
    this.logger.debug(result);
    return result;
  }

  @Get()
  @Roles('ADMIN')
  @UsePipes(new ValidationPipe({ transform: true }))
  async get(@Query() input: BaseQueryInputDto) {
    return await this.resumeService.get(input);
  }

  @Get('user/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getByUserId(@Param('id') id: string) {
    return this.resumeService.getByUserId(id);
  }


  @Get('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getOne(@Param('id') id: string) {
    return this.resumeService.getOne(id);
  }


  @UseInterceptors(FileInterceptor('avatar'))
  @Post()
  @ApiConsumes('multipart/form-data')
  create(@Body(new ParseFormDataJsonPipe(), new ValidationPipe({ transform: true })) resume: ResumeDto,
    @UploadedFile() file: Express.Multer.File, @GetUser() user) {
    return this.resumeService.create(resume, user._id, file);
  }


  @UseInterceptors(FileInterceptor('avatar'))
  @Put('/:id')
  @ApiConsumes('multipart/form-data')
  update(@Body(new ParseFormDataJsonPipe(), new ValidationPipe({ transform: true })) resume: ResumeDto,
    @UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
    return this.resumeService.update(id, resume, file);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.resumeService.delete(id);
  }
}
