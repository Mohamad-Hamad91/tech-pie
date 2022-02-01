import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from '../schema/company.schema';
import { SearchQueryDto } from './dto/query.dto';

@Injectable()
export class SearchService {

    constructor(@InjectModel(Company.name) private model: Model<CompanyDocument>) { }


    async search(input: SearchQueryDto) {
        const fields = ['name', 'website', 'city', 'address', 'description', 'compSize', 'techStack', 'logo'];

        let query = this.model.find();
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
            .populate('logo')
            .sort({ totalExperience: 1 })
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1));
        return query.exec();
    }

}
