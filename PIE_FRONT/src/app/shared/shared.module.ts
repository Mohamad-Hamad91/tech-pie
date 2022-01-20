import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { OfferOutComponent } from './offer-out/offer-out.component';
import { ToastModule } from 'primeng-lts/toast';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    OfferOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    OfferOutComponent
  ]
})
export class SharedModule { }
