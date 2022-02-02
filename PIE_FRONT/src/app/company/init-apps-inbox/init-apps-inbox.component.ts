import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { OfferStatus } from 'src/app/model/offer-status';
import { OfferDto } from 'src/app/model/offer.dto';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-init-apps-inbox',
  templateUrl: './init-apps-inbox.component.html',
  styleUrls: ['./init-apps-inbox.component.scss']
})
export class InitAppsInboxComponent implements OnInit {

  data: OfferDto[] = [];
  cols: any;
  OfferStatus = OfferStatus;

  constructor(private _offerService: OfferService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'workPlace', header: 'Work Place' },
      { field: 'workType', header: 'Work Type' },
      { field: 'position', header: 'Position' },
      { field: 'minPrice', header: 'Min Range' },
      { field: 'maxPrice', header: 'Max Range' },
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
          detail: 'Offer marked as finished!'
        });
      });
  }

}
