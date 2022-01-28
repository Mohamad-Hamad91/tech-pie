import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { OfferStatus } from 'src/app/model/offer-status';
import { OfferDto } from '../../model/offer.dto';
import { OfferService } from '../../service/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  offerId: string;
  data: OfferDto = new OfferDto();
  tempRejectMessage: any;
  displayRejectDialog: boolean;
  OfferStatus = OfferStatus;

  constructor(private _offerService: OfferService,
    private _route: ActivatedRoute,
    private _messageService: MessageService) { }

  ngOnInit(): void {
    this.offerId = this._route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this._offerService
      .getOne(this.offerId)
      .subscribe(res => this.data = res);
  }

  approve(offerId: string) {
    let tempOffer = { status: OfferStatus.APPROVED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data.status = OfferStatus.APPROVED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Approved!'
        });
      });
  }

  openRejectDialog() {
    this.tempRejectMessage = this.data.rejectMessage;
    this.displayRejectDialog = true;
  }

  cancelReject() {
    this.displayRejectDialog = false;
    this.tempRejectMessage = '';
  }

  reject() {
    let tempOffer = { status: OfferStatus.REJECTED, rejectMessage: this.tempRejectMessage };
    this._offerService.edit(this.data._id, tempOffer)
      .subscribe(res => {
        this.data.status = OfferStatus.REJECTED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Rejected!'
        });
        this.displayRejectDialog = false;
      });
  }

  cancel(offerId: string) {
    let tempOffer = { status: OfferStatus.CANCELED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data.status = OfferStatus.CANCELED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Canceled!'
        });
      });
  }

  finish(offerId: string) {
    let tempOffer = { status: OfferStatus.FINISHED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data.status = OfferStatus.FINISHED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer maeked as finished!'
        });
      });
  }

  ignore(offerId: string) {
    let tempOffer = { status: OfferStatus.IGNORED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data.status = OfferStatus.IGNORED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer ignored!'
        });
      });
  }

}
