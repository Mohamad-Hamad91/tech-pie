import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { MegaMenuModule } from 'primeng-lts/megamenu';
import { SharedModule } from '../shared/shared.module';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ToastModule } from 'primeng-lts/toast';
import {TableModule} from 'primeng-lts/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng-lts/dialog';



@NgModule({
  declarations: [
    LayoutComponent,
    AdminSidebarComponent,
    ManageOffersComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MegaMenuModule,
    SharedModule,
    ToastModule,
    TableModule,
    DialogModule
  ]
})
export class DashboardModule { }
