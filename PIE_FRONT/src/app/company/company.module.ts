import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CompRoutingModule } from './comp-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { AutoCompleteModule } from 'primeng-lts/autocomplete';
import { DropdownModule } from 'primeng-lts/dropdown';
import { OfferComponent } from './offer/offer.component';
import { ToastModule } from 'primeng-lts/toast';
import { CompProfileComponent } from './comp-profile/comp-profile.component';


@NgModule({
  declarations: [
    SearchComponent,
    OfferComponent,
    CompProfileComponent
  ],
  imports: [
    CommonModule,
    CompRoutingModule,
    FormsModule,
    SharedModule,
    InputNumberModule,
    AutoCompleteModule,
    DropdownModule,
    ToastModule
  ]
})
export class CompanyModule { }
