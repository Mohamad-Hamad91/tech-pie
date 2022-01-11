import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpRoutingModule } from './emp-routing.module';
import { FormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';


import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { ToastModule } from 'primeng-lts/toast';
import { AutoCompleteModule } from 'primeng-lts/autocomplete';
import { CheckboxModule } from 'primeng-lts/checkbox';
import {DropdownModule} from 'primeng-lts/dropdown';
import {CalendarModule} from 'primeng-lts/calendar';





@NgModule({
  declarations: [

    EmpProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmpRoutingModule,
    SharedModule,
    InputTextareaModule,
    ToastModule,
    AutoCompleteModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule
  ]
})
export class EmployeeModule { }
