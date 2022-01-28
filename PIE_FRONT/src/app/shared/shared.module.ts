import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { OfferOutComponent } from './offer-out/offer-out.component';
import { ToastModule } from 'primeng-lts/toast';
import { MenubarModule } from 'primeng-lts/menubar';
import { MegaMenuModule } from 'primeng-lts/megamenu';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    OfferOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    MenubarModule,
    MenubarModule,
    MegaMenuModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    OfferOutComponent
  ]
})
export class SharedModule { }
