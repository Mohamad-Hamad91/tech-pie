import { Module } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { ConstantsController } from './constants.controller';

@Module({
  providers: [ConstantsService],
  controllers: [ConstantsController]
})
export class ConstantsModule {}
