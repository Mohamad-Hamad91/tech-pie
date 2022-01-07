import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EmpRoutingModule } from './emp-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  
    ResumeComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
