import { Controller, Delete, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { RolesGuard } from 'src/api/auth/guards/roles.guard';
import { FileService } from './file.service';

@Controller({
    path: 'file',
    version: '1'
})
@UseGuards(AuthGuard(), RolesGuard)
export class FileController {

    constructor(private _fileService: FileService) { }

    @UseInterceptors(FileInterceptor('file'))
    @Post()
    @ApiConsumes('multipart/form-data')
    async addFile(@UploadedFile() file: Express.Multer.File) {
        return await this._fileService.save(file, false);
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        return await this._fileService.delete(id, false);
    }


}
