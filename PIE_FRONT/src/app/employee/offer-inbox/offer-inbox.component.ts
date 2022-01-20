import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { OfferStatus } from 'src/app/model/offer-status';
import { OfferDto } from 'src/app/model/offer.dto';
import { AuthService } from 'src/app/service/auth.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-offer-inbox',
  templateUrl: './offer-inbox.component.html',
  styleUrls: ['./offer-inbox.component.scss']
})
export class OfferInboxComponent implements OnInit {

  data: OfferDto[] = [];
  cols: any;
  OfferStatus = OfferStatus;

  constructor(private _offerService: OfferService, private _messageService: MessageService,) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'compEmail', header: 'Company Email' },
      { field: 'compPhone', header: 'Company Phone' },
      { field: 'compName', header: 'Company name' },
      { field: 'workPlace', header: 'Work Place' },
      { field: 'workType', header: 'Work Type' },
      // { field: 'employer', subfield: 'email', header: 'Employer' },
      // { field: 'user', subfield: 'email', header: 'Employee' },
    ];

    this.getData();
  }

  getData() {
    this._offerService.getIncomeOffers()
      .subscribe(res => {
        this.data = res;
      })
  }

  acceptOffer(index: number) {
    let tempOffer : OfferDto = { status: OfferStatus.ACCEPTED };
    let offerId = this.data[index]._id;
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data[index].status = OfferStatus.ACCEPTED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer maeked as finished!'
        });
      });
  }

}
