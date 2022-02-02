import { Body, Controller, Get, Logger, Param, Post, Put, Query, Req, Res, Sse, UploadedFile, MessageEvent, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { map, Subject } from 'rxjs';
import { ROLE } from 'src/utils/constants/role.const';
import { GetUser } from 'src/utils/decorator/get-user.decorator';
import { Roles } from 'src/utils/decorator/roles.decorator';
import { FileService } from 'src/utils/file/file.service';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { ParseFormDataJsonPipe } from 'src/utils/pipe/pares-formdata.pipe';
import { SseService } from 'src/utils/sse/sse.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { OfferDto } from './offer.dto';
import { OfferService } from './offer.service';
const fs = require('fs');
import { Buffer } from 'buffer';
import { MyFile } from 'src/utils/file/file.schema';


@Controller({
    path: 'offer',
    version: '1'
})
@UseGuards(AuthGuard(), RolesGuard)
@UsePipes(new ValidationPipe({ transform: true }))
export class OfferController {

    private logger = new Logger(OfferController.name);

    constructor(private offerService: OfferService, private fileService: FileService,
        private sseService: SseService) { }

    @Get()
    @Roles(ROLE.ADMIN)
    async get(@Query() input: BaseQueryInputDto) {
        return await this.offerService.get(input);
    }

    @Get('income')
    @Roles(ROLE.USER, ROLE.COMPANY)
    async getEmp(@GetUser() user, @Query() input: BaseQueryInputDto) {
        return await this.offerService.getByEmp(user._id, input);
    }

    @Get('sent')
    @Roles(ROLE.USER, ROLE.COMPANY)
    async getComp(@GetUser() user, @Query() input: BaseQueryInputDto) {
        return await this.offerService.getByComp(user._id, input);
    }

    @Get('/:id')
    @Roles(ROLE.ADMIN)
    async getOne(@Param('id') id) {
        return await this.offerService.getOne(id);
    }

    @Post()
    @Roles(ROLE.USER, ROLE.COMPANY)
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() offer: OfferDto) {
        return this.offerService.add(offer);
    }

    @Put('/:id')
    @Roles(ROLE.ADMIN, ROLE.USER, ROLE.COMPANY)
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Body() offer: OfferDto, @Param('id') id: string, @GetUser() user) {
        return await this.offerService.edit(id, offer, user.email);
    }

    // @UseInterceptors(FileInterceptor('file'))
    // @Post('/file')
    // @ApiConsumes('multipart/form-data')
    // async addFile(@UploadedFile() file: Express.Multer.File, @GetUser() user) {
    //     return await this.fileService.save(file, false);

        // const busboy = require('busboy');
        // const bb = busboy({ headers: req.headers });
        // return new Promise((resolve, reject) => {
        //     let progress = 0;
        //     let percentProgress = 0;
        //     let fileSize = req.headers['content-length'] ? parseInt(req.headers['content-length']) : 0;
        //     let buffer: Buffer;
        //     let oldProgress = 0;
        //     bb.on('file', (name, file, info) => {
        //         const { filename, encoding, mimeType } = info;
        //         console.log(
        //             `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
        //             filename,
        //             encoding,
        //             mimeType
        //         );
        //         file.on('data', (data) => {
        //             console.log(`File [${name}] got ${data.length} bytes`);
        //             progress += data.length;
        //             percentProgress = Math.floor((progress * 100) / fileSize);
        //             if (!buffer) buffer = data;
        //             else buffer = Buffer.concat([buffer, data]);
        //             console.log('Progress', `${percentProgress} `, fileSize);
        //             if (percentProgress > (oldProgress + 10) || percentProgress == 100) {
        //                 oldProgress = percentProgress;
        //                 // res.write(`${percentProgress} ` );
        //                 this.sseService.addEvent({
        //                     data: {
        //                         data: `${percentProgress} `,
        //                         type: 'UPLOAD'
        //                     }
        //                 }, user._id);
        //             }
        //         }).on('close', async () => {
        //             console.log(`File [${name}] done`);
        //             console.log('Finished', progress, fileSize);
        //             const result = await this.fileService.save({
        //                 buffer,
        //                 mimetype: mimeType,
        //                 fieldname: 'file',
        //                 originalname: filename,
        //                 size: buffer.length,
        //             }, false);
        //             resolve(result);
        //         });
        //     });
        //     //   bb.on('field', (name, val, info) => {
        //     //     console.log(`Field [${name}]: value: %j`, val);
        //     //   });
        //     // bb.on('close', async () => {
        //     //     // console.log('Done parsing form!');
        //     //     console.log('Finished', progress, fileSize);
        //     //     const result = await this.fileService.save({
        //     //         buffer,
        //     //         mimetype: '',
        //     //         fieldname: 'file',
        //     //         originalname: 'Offer file',
        //     //         size: buffer.length,
        //     //     }, false);
        //     //     resolve(result);
        //     // });
        //     req.pipe(bb);
        // });
    // }


}
