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
  OfferStatus = OfferStatus;
  displayRejectDialog: boolean = false;
  tempRejectMessage: string;
  tempIndex: number;

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
    let tempOffer = { status: OfferStatus.APPROVED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data[index].status = OfferStatus.APPROVED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Approved!'
        });
      });
  }

  openRejectDialog(index: number) {
    this.tempRejectMessage = this.data[index].rejectMessage;
    this.tempIndex = index;
    this.displayRejectDialog = true;
  }

  cancelReject() {
    this.tempIndex = null;
    this.displayRejectDialog = false;
    this.tempRejectMessage = '';
  }

  reject() {
    let tempOffer = { status: OfferStatus.REJECTED, rejectMessage: this.tempRejectMessage };
    this._offerService.edit(this.data[this.tempIndex]._id, tempOffer)
      .subscribe(res => {
        this.data[this.tempIndex].status = OfferStatus.REJECTED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Rejected!'
        });
        this.displayRejectDialog = false;
      });
  }

  cancel(offerId: string, index: number) {
    let tempOffer = { status: OfferStatus.CANCELED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data[index].status = OfferStatus.CANCELED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer Canceled!'
        });
      });
  }

  finish(offerId: string, index: number) {
    let tempOffer = { status: OfferStatus.FINISHED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data[index].status = OfferStatus.FINISHED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer maeked as finished!'
        });
      });
  }

  ignore(offerId: string, index: number) {
    let tempOffer = { status: OfferStatus.IGNORED, rejectMessage: '' };
    this._offerService.edit(offerId, tempOffer)
      .subscribe(res => {
        this.data[index].status = OfferStatus.IGNORED;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer ignored!'
        });
      });
  }

}
