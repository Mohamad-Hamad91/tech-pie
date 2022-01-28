import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from '../file/file.module';
import { FileSchema, MyFile } from '../file/file.schema';
import { FileService } from '../file/file.service';
import { SseController } from './sse.controller';
import { SseService } from './sse.service';

@Module({
  controllers: [SseController],
  providers: [SseService]
})
export class SseModule { }
