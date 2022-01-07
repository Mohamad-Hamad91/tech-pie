import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgParticlesModule} from "ng-particles";
import { GeneralInterceptor } from './general.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    SharedModule,
    // DashboardModule,
    // EmployeeModule,
    // CompanyModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgParticlesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GeneralInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
