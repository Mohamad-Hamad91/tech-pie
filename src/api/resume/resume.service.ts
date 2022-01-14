import { BadRequestException, Inject, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ObjectID, Repository } from 'typeorm';
// import { Resume } from './entity/resume.entity';
import { FileService } from 'src/utils/file/file.service';
import { ResumeDto } from './dto/resume.dto';
import { Model, ObjectId, ClientSession } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Resume, ResumeDocument } from './schema/resume.schema';
import { User } from '../users/users.schema';
import { UsersService } from '../users/users.service';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { CALC_PRICE_PER_HOUR } from 'src/utils/helpers/clac-price-per-hour.helper';

@Injectable()
export class ResumeService {

  // constructor(@InjectRepository(Resume) private resumeRepository: Repository<Resume>,
  //   private fileService: FileService) { }
  constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    private fileService: FileService, private userService: UsersService) { }

  async get(input: BaseQueryInputDto) {
    const temp = input;
    const result = await this.resumeModel.find()
      // .sort(input.sortBy)
      .limit(input.pageSize)
      .skip(input.pageSize * (input.pageNumber - 1))
      .exec();
    return result;
  }

  async getOne(id: string): Promise<Resume> {
    return await this.resumeModel.findById(id)
      .select(['-email', '-phone']).populate('photo').exec();
  }

  async getByUserId(id: string): Promise<Resume> {
    return await this.resumeModel.findOne({ user: id }).populate('photo').exec();
  }

  async create(resume: ResumeDto, userId: ObjectId, file?: Express.Multer.File): Promise<Resume> {
    let result;
    const session: ClientSession = await this.resumeModel.startSession();
    await session.withTransaction(async (session) => {
      const photoId = file ? await this.fileService.save(file, false, session) : null;
      const temp = new this.resumeModel(resume);
      const user = await this.userService.findById(userId, session);
      if (!user) throw new BadRequestException('User Not Found!');
      temp.user = user;
      temp.photo = photoId;
      // because of open issue #1980 in typeORM
      // temp.employmentHistory = resume.employmentHistory ?? [];
      // temp.courses = resume.courses ?? [];
      // temp.education = resume.education ?? [];
      // temp.links = resume.links ?? [];
      // temp.projects = resume.projects ?? [];
      // temp.references = resume.references ?? [];
      // temp.languages = resume.languages ?? [];
      // temp.skills = resume.skills ?? [];
      result = await temp.save({ session });
    });
    session.endSession();
    result.user = result.user?._id;
    return result;
  }

  async update(id: string, resume: ResumeDto, file?: Express.Multer.File): Promise<Resume> {
    let result;
    const session: ClientSession = await this.resumeModel.startSession();
    await session.withTransaction(async (session) => {
      const temp = new this.resumeModel(resume);
      if (file) {
        temp.photo = await this.fileService.save(file, false, session);
      }
      if (temp.expectedPriceCurrency && temp.expectedPriceMin && temp.expectedPriceUnit)
        temp.pricePerHour = CALC_PRICE_PER_HOUR(temp.expectedPriceMin, temp.expectedPriceCurrency, temp.expectedPriceUnit);
      const old = await this.resumeModel.findOneAndUpdate({ id }, temp);
      if (file) this.fileService.delete(old.photo._id.toString(), false);
    });
    return result;
  }

  async delete(id: string): Promise<void> {
    (await this.resumeModel.findOneAndDelete({ id }));
  }
}
