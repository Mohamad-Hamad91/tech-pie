import { Component, OnInit } from '@angular/core';
import { OfferDto } from 'src/app/model/offer.dto';
import { AuthService } from 'src/app/service/auth.service';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-offer-out',
  templateUrl: './offer-out.component.html',
  styleUrls: ['./offer-out.component.scss']
})
export class OfferOutComponent implements OnInit {

  data: OfferDto[] = [];
  cols: any[];

  constructor(private _offerService: OfferService) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'status', header: 'Status' },
      { field: 'compEmail', header: 'Company Email' },
      { field: 'compPhone', header: 'Company Phone' },
      { field: 'compName', header: 'Company name' },
      { field: 'workPlace', header: 'Work Place' },
      { field: 'workType', header: 'Work Type' },
      { field: 'employer', subfield: 'email', header: 'Employer' },
      { field: 'user', subfield: 'email', header: 'Employee' },
    ];

    this.getData();
  }

  getData() {
    this._offerService.getSentOffers()
      .subscribe(res => {
        this.data = res;
      });
  }

}
