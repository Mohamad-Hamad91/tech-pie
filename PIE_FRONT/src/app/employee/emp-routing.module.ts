import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferOutComponent } from '../shared/offer-out/offer-out.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { OfferInboxComponent } from './offer-inbox/offer-inbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: EmpProfileComponent },
  { path: 'inbox', component: OfferInboxComponent },
  { path: 'sent-offers', component: OfferOutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }