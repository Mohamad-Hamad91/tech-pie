import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { MyFile } from './file.entity';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema, MyFile } from './file.schema';

@Module({
    imports: [
        // TypeOrmModule.forFeature([MyFile]),
        MongooseModule.forFeature([{ name: MyFile.name, schema: FileSchema }])
    ],
    providers: [FileService],
    exports: [FileService]
})
export class FileModule { }
