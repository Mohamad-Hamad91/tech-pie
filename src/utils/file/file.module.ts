import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { MyFile } from './file.entity';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema, MyFile } from './file.schema';
import { FileController } from './file.controller';
import { AuthModule } from 'src/api/auth/auth.module';

@Module({
    imports: [
        // TypeOrmModule.forFeature([MyFile]),
        MongooseModule.forFeature([{ name: MyFile.name, schema: FileSchema }]),
        AuthModule
    ],
    providers: [FileService],
    exports: [FileService],
    controllers: [FileController]
})
export class FileModule { }
