import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model, ObjectId } from 'mongoose';
import { FileService } from 'src/utils/file/file.service';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { UsersService } from '../users/users.service';
import { CompanyDto } from './dto/company.dto';
import { Company, CompanyDocument } from './schema/company.schema';

@Injectable()
export class CompanyService {

    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
        private fileService: FileService, private userService: UsersService) { }


    async get(input: BaseQueryInputDto) {
        const result = await this.companyModel.find()
            // .sort(input.sortBy)
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1))
            .exec();
        return result;
    }

    async getOne(id: string): Promise<Company> {
        return await this.companyModel.findById(id)
            .populate('logo').exec();
    }

    async getByUserId(id: string): Promise<Company> {
        return await this.companyModel.findOne({ user: id }).populate('logo').exec();
    }


    async create(company: CompanyDto, userId: ObjectId, file?: Express.Multer.File): Promise<Company> {
        let result;
        const session: ClientSession = await this.companyModel.startSession();
        await session.withTransaction(async (session) => {
            const photoId = file ? await this.fileService.save(file, false, session) : null;
            const temp = new this.companyModel(company);
            const user = await this.userService.findById(userId, session);
            if (!user) throw new BadRequestException('User Not Found!');
            temp.user = user;
            temp.logo = photoId;
            result = await temp.save({ session });
        });
        session.endSession();
        result.user = result.user?._id;
        return result;
    }

    async update(_id: string, company: CompanyDto, file?: Express.Multer.File): Promise<Company> {
        let result;
        const session: ClientSession = await this.companyModel.startSession();
        await session.withTransaction(async (session) => {
            const temp = new this.companyModel(company);
            if (file) {
                temp.logo = await this.fileService.save(file, false, session);
            }
            const old = await this.companyModel.findOneAndUpdate({ _id }, temp);
            if (file) this.fileService.delete(old.logo._id.toString(), false);
        });
        return result;
    }

    async delete(_id: string): Promise<void> {
        (await this.companyModel.findOneAndDelete({ _id }));
    }

}
