import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule
  ]
})
export class ResumeModule { }
