import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferOutComponent } from '../shared/offer-out/offer-out.component';
import { CompProfileComponent } from './comp-profile/comp-profile.component';
import { OfferComponent } from './offer/offer.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: CompProfileComponent },
  { path: 'offer/:id', component: OfferComponent },
  { path: 'sent-offers', component: OfferOutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompRoutingModule { }