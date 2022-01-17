import { CacheModule, Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './offer.schema';
import { User, UserSchema } from '../users/users.schema';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Offer.name, schema: OfferSchema },
      { name: User.name, schema: UserSchema }
    ]),
    AuthModule,
    UsersModule,
    CacheModule.register()
  ],
  providers: [OfferService],
  controllers: [OfferController],
})
export class OfferModule { }
