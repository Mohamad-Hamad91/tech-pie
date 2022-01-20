import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/utils/file/file.module';
import { FileSchema, MyFile } from 'src/utils/file/file.schema';
import { FileService } from 'src/utils/file/file.service';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { User, UserSchema } from '../users/users.schema';
import { UsersService } from '../users/users.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schema/company.schema';
import { Portofolio, PortofolioSchema } from './schema/portofolio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: Portofolio.name, schema: PortofolioSchema },
      { name: MyFile.name, schema: FileSchema },
      { name: User.name, schema: UserSchema }
    ]),
    FileModule,
    UsersModule,
    AuthModule
  ],
  controllers: [CompanyController],
  providers: [CompanyService, FileService, UsersService,]
})
export class CompanyModule {}
