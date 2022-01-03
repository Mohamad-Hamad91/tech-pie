import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entity/user.entity';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema } from './users.schema';

@Module({
  imports: [
    // TypeOrmModule.forFeature([User]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
