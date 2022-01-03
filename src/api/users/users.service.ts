import { BadRequestException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './entity/user.entity';
import { RegisterDto } from '../auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { Model, ObjectId, ClientSession } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {

    // constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findOne(email: string) {
        return (await this.userModel.findOne({ email }).exec()).toObject();
    }

    async create(user: RegisterDto) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        const result = new this.userModel(user);
        try {
            await result.save();
        } catch (e) {
            if (e.code == 11000) {
                throw new BadRequestException('Email already exists');
            }
        }
    }

    async findById(id: ObjectId, session?: ClientSession): Promise<User> {
        return this.userModel.findById(id, null, { session }).exec();
    }

}
