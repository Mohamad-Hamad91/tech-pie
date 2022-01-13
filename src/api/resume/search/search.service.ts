import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from '../schema/resume.schema';
import { SearchQueryDto } from './dto/query.dto';

@Injectable()
export class SearchService {

    constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>) { }

    async search(input: SearchQueryDto) {
        const fields = ['name', 'title', 'city', 'address', 'totalExperience', 'gender', 'summary', 'photo'];

        let query = this.resumeModel.find();
        if (input.search) query = query
            .and([{
                $or:
                    [
                        { name: { $regex: '.*' + input.search + '.*', $options: 'i' } },
                        { title: { $regex: '.*' + input.search + '.*', $options: 'i' } },
                    ]
            }]);
        if (input.criteria) {
            let criteria = input.formatCriteria();
            query = query.and([criteria]);
        }
        query = query
            .select(fields)
            .populate('photo')
            .sort({ totalExperience: 1 })
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1));
        return query.exec();
    }


}
