///<reference path="components/technocruise/technocruise.module.ts"/>
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
import { NavbarComponent } from './components/navbar/navbar.component';

import { TechAboutComponent } from './components/technocruise/tech-about/tech-about.component';
import { TechCitiesComponent } from './components/technocruise/tech-cities/tech-cities.component';
import { TechContactComponent } from './components/technocruise/tech-contact/tech-contact.component';
import { TechEventsComponent } from './components/technocruise/tech-events/tech-events.component';
import { TechLandingComponent } from './components/technocruise/tech-landing/landing.component';
import { TechNavbarComponent } from './components/technocruise/tech-navbar/tech-navbar.component';
import { TechRegisterComponent } from './components/technocruise/tech-register/tech-register.component';
import { TechTalksComponent } from './components/technocruise/tech-talks/tech-talks.component';
import { TechWorkshopComponent } from './components/technocruise/tech-workshop/tech-workshop.component';
import { WorkshopDialogComponent } from './components/technocruise/tech-workshop/workshop-dialog/workshop-dialog.component';
//Technocruise Component

//Services
import { FacebookService } from 'ngx-facebook';
import {AuthService, DialogComponent, WaitDialogComponent} from './services/auth.service';
import { CAService } from './services/ca.service';
import { ScriptService } from './services/script.service';
import { TechnocruiseService } from './services/technocruise.service';

import { AppRoutingModule } from './app.routing.module';
import { LandingComponent } from './components/landing/landing.component';
import {SocLinksComponent} from './components/technocruise/soc-links/soc-links.component';
import { TechDashboardComponent } from './components/technocruise/tech-dashboard/tech-dashboard.component';
import { TechSidenavComponent } from './components/technocruise/tech-sidenav/tech-sidenav.component';
import {LoggedInGuardService, WeakLoggedInGaurd} from './services/guards.service';
import {TechnocruiseModule} from './components/technocruise/technocruise.module';

// todo Make module for Technocruise Component and improve the routing..

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
    DialogComponent,
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
    MdNativeDateModule,
  ],
  providers: [
    AuthService,
    CAService,
    FacebookService,
    ScriptService,
  ],
  entryComponents: [
    SuccessDialogComponent,
    DialogComponent,
    WaitDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
