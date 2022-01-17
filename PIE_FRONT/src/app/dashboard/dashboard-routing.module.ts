import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LayoutComponent, children: [
        {path: 'users', component: ManageUsersComponent},
        {path: 'offers', component: ManageOffersComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }