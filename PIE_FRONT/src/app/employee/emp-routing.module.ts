import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: EmpProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }