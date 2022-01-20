import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { OfferStatus } from 'src/app/model/offer-status';
import { OfferDto } from '../model/offer.dto';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-manage-offers',
  templateUrl: './manage-offers.component.html',
  styleUrls: ['./manage-offers.component.scss']
})
export class ManageOffersComponent implements OnInit {

  data: OfferDto[] = [];
  cols: { field: string; header: string; subfield?: string }[];

  constructor(private _offerService: OfferService, private _messageService: MessageService) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'compEmail', header: 'Company Email' },
      // { field: 'compPhone', header: 'Company Phone' },
      { field: 'compName', header: 'Company name' },
      // { field: 'workPlace', header: 'Work Place' },
      // { field: 'workType', header: 'Work Type' },
      { field: 'status', header: 'status' },
      { field: 'employer', subfield: 'email', header: 'Employer' },
      { field: 'user', subfield: 'email', header: 'Employee' },
    ];

    this.getData();
  }

  getData() {
    this._offerService.get()
      .subscribe(res => {
        this.data = res;
      });
  }

  approve(offerId: string, index: number) {
    let tempOffer = { status: OfferStatus.APPROVED };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Approved!'
        });
      });
  }

  reject(offerId: string, index: number) {
    let tempOffer = { status: OfferStatus.REJECTED };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Rejected!'
        });
      });
  }


}
