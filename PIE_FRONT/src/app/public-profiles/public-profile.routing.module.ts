import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCompProfileComponent } from './view-comp-profile/view-comp-profile.component';
import { ViewEmpProfileComponent } from './view-emp-profile/view-emp-profile.component';

const routes: Routes = [
    // { path: '', redirectTo: 'v', pathMatch: 'full' },
    { path: 'r/:user/:id', component: ViewEmpProfileComponent },
    { path: 'c/:user/:id', component: ViewCompProfileComponent },
    { path: 'r/:id', component: ViewEmpProfileComponent },
    { path: 'c/:id', component: ViewCompProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicProfileRoutingModule { }