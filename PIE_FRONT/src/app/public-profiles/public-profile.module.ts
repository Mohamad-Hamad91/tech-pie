import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicProfileRoutingModule } from './public-profile.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewEmpProfileComponent } from './view-emp-profile/view-emp-profile.component';
import { ViewCompProfileComponent } from './view-comp-profile/view-comp-profile.component';



@NgModule({
  declarations: [
    ViewEmpProfileComponent,
    ViewCompProfileComponent
  ],
  imports: [
    CommonModule,
    PublicProfileRoutingModule,
    SharedModule
  ]
})
export class PublicProfileModule { }
