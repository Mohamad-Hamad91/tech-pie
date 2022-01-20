import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from "./auth.guard";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ROLE } from './model/roles.enum';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:userType', component: RegisterComponent },
  { path: 'admin', component: AdminLoginComponent },
  {
    path: 'e', canActivate: [AuthGuard], data: { roles: [ROLE.USER] },
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'c', canActivate: [AuthGuard], data: { roles: [ROLE.USER, ROLE.COMPANY] },
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'v', canActivate: [AuthGuard],
    loadChildren: () => import('./public-profiles/public-profile.module').then(m => m.PublicProfileModule)
  },
  {
    path: 'dashboard', canActivate: [AuthGuard], data: { roles: [ROLE.ADMIN] },
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
