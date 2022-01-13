import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CompRoutingModule } from './comp-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng-lts/inputnumber';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    CompRoutingModule,
    FormsModule,
    SharedModule,
    InputNumberModule
  ]
})
export class CompanyModule { }
