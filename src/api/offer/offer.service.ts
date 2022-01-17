import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { UsersService } from '../users/users.service';
import { OfferDto } from './offer.dto';
import { Offer, OfferDocument } from './offer.schema';

@Injectable()
export class OfferService {

    constructor(@InjectModel(Offer.name) private offerModel: Model<OfferDocument>,
        private userService: UsersService) { }

    public get(input: BaseQueryInputDto) {
        return this.offerModel
            .find()
            .populate([{ path: 'user', select: 'email' }, { path: 'employer', select: 'email' }])
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1))
            .sort(input.sortBy)
            .exec();
    }

    public add(offer: OfferDto) {
        //TODO: check if user found, else throw an error!
        let temp = new this.offerModel(offer);
        return temp.save();
    }

    public async edit(id: string, offer: OfferDto) {
        return await this.offerModel.findOneAndUpdate({id}, offer);
    }

}
