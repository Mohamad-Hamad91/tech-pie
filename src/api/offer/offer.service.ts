import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { OfferStatus } from 'src/utils/constants/offer-status.const';
import { BaseQueryInputDto } from 'src/utils/generic/dto/base-query-input.dto';
import { MailService } from 'src/utils/mail/mail.service';
import { UsersService } from '../users/users.service';
import { OfferDto } from './offer.dto';
import { Offer, OfferDocument } from './offer.schema';

@Injectable()
export class OfferService {

    constructor(@InjectModel(Offer.name) private offerModel: Model<OfferDocument>,
        private userService: UsersService, private mailService: MailService) { }
    /**
     * To get all offers by admin
     * @param input 
     * @returns 
     */
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

    public async edit(_id: string, offer: OfferDto, userEmail: string) {
        let result;
        const session: ClientSession = await this.offerModel.startSession();
        await session.withTransaction(async (session) => {
            result = await this.offerModel
                .findOneAndUpdate({ _id }, offer)
                .session(session)
                .populate('user employer');
            if (offer.status === OfferStatus.ACCEPTED && result.user.email !== userEmail)
                throw new UnauthorizedException('you can\'t accept other offers!');
        });
        if (result && offer.status === OfferStatus.APPROVED) {
            this.mailService.sendOfferToEmployee(result.toObject());
        }
        if (result && offer.status === OfferStatus.REJECTED) {
            this.mailService.sendRejectReasonToEmployer(result.toObject());
        }
    }

    /**
     * To get approved offers by employee
     * @param input 
     * @returns 
     */
    public async getByEmp(user: string, input: BaseQueryInputDto) {
        const result = await this.offerModel
            .find()
            .and([
                {
                    $or: [
                        { status: OfferStatus.APPROVED },
                        { status: OfferStatus.ACCEPTED },
                    ]
                },
                { user }
            ])
            .populate([{ path: 'user', select: 'email' }, { path: 'employer', select: 'email' }])
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1))
            .sort(input.sortBy)
            .exec();
        return result;
    }


    /**
     * To get approved offers by Employer/ Company
     * @param input 
     * @returns 
     */
    public async getByComp(compId: string, input: BaseQueryInputDto) {
        return this.offerModel
            .find()
            .and([{ employer: compId }])
            .populate([{ path: 'user', select: 'email' }, { path: 'employer', select: 'email' }])
            .limit(input.pageSize)
            .skip(input.pageSize * (input.pageNumber - 1))
            .sort(input.sortBy)
            .exec();
    }

}
