import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { AuthService } from 'src/app/service/auth.service';
import { OfferService } from 'src/app/service/offer.service';
import { OfferDto } from '../../model/offer.dto';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  compId: string;
  empId: string;
  offer: OfferDto = new OfferDto();
  sent: boolean = false;

  constructor(private _offerService: OfferService, private _route: ActivatedRoute,
    private _authService: AuthService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.compId = this._authService.getId();
    this._route.params.subscribe(params => {
      this.empId = this._route.snapshot.params.id;
    });
  }

  sendOffer() {
    this.offer.user = this.empId;
    this.offer.employer = this.compId;
    this.offer.employerType = this._authService.getRole();
    this._offerService
      .add(this.offer)
      .subscribe(res => {
        this.sent = true;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer sent!'
        });
      });
  }

}
