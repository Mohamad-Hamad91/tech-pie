import { CacheModule, Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './offer.schema';
import { User, UserSchema } from '../users/users.schema';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { FileService } from 'src/utils/file/file.service';
import { FileModule } from 'src/utils/file/file.module';
import { FileSchema, MyFile } from 'src/utils/file/file.schema';
import { SseModule } from 'src/utils/sse/sse.module';
import { SseService } from 'src/utils/sse/sse.service';
import { NotificationModule } from 'src/utils/notification/notification.module';
import { Notification, NotificationSchema } from 'src/utils/notification/notification.schema';
import { NotificationService } from 'src/utils/notification/notification.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Offer.name, schema: OfferSchema },
      { name: User.name, schema: UserSchema },
      { name: Notification.name, schema: NotificationSchema },
      { name: MyFile.name, schema: FileSchema }
    ]),
    AuthModule,
    UsersModule,
    FileModule,
    SseModule,
    NotificationModule,
    CacheModule.register()
  ],
  providers: [OfferService, FileService, SseService, NotificationService],
  controllers: [OfferController],
})
export class OfferModule { }
