import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpRoutingModule } from './emp-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
    EmpProfileComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
