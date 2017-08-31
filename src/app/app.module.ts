import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

// Ambassador Component
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { ApplicationProcessComponent } from './components/ambassador/application-process/application-process.component';
import { CaAboutUsComponent } from './components/ambassador/ca-about-us/ca-about-us.component';
import { CaContactComponent } from './components/ambassador/ca-contact/ca-contact.component';
import { CaHeaderComponent } from './components/ambassador/ca-header/ca-header.component';
import { CaWhyComponent } from './components/ambassador/ca-why/ca-why.component';
import { IncentivesComponent } from './components/ambassador/incentives/incentives.component';
import { RegisterComponent, SuccessDialogComponent } from './components/ambassador/register/register.component';
import { ResponsiblityComponent } from './components/ambassador/responsiblity/responsiblity.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Services
import { FacebookService } from 'ngx-facebook';
import {AuthService, DialogComponent, WaitDialogComponent} from './services/auth.service';
import { CAService } from './services/ca.service';
import { ScriptService } from './services/script.service';

import { AppRoutingModule } from './app.routing.module';

// Modules
import {TechnocruiseModule} from './components/technocruise/technocruise.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AmbassadorComponent,
    RegisterComponent,
    IncentivesComponent,
    CaHeaderComponent,
    ApplicationProcessComponent,
    CaAboutUsComponent,
    ResponsiblityComponent,
    CaWhyComponent,
    CaContactComponent,
    SuccessDialogComponent,
    LandingComponent,
    WaitDialogComponent,
    DialogComponent
  ],
  imports: [
    TechnocruiseModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [
    AuthService,
    CAService,
    FacebookService,
    ScriptService
  ],
  entryComponents: [
    SuccessDialogComponent,
    DialogComponent,
    WaitDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
