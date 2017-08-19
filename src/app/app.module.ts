import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
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

import { CAService } from './services/ca.service';

import { AppRoutingModule } from './app.routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { TechAboutComponent } from './components/technocruise/tech-about/tech-about.component';
import { TechCitiesComponent } from './components/technocruise/tech-cities/tech-cities.component';
import { TechContactComponent } from './components/technocruise/tech-contact/tech-contact.component';
import { TechEventsComponent } from './components/technocruise/tech-events/tech-events.component';
import { TechNavbarComponent } from './components/technocruise/tech-navbar/tech-navbar.component';
import { TechRegisterComponent } from './components/technocruise/tech-register/tech-register.component';
import { TechTalksComponent } from './components/technocruise/tech-talks/tech-talks.component';
import { TechWorkshopComponent } from './components/technocruise/tech-workshop/tech-workshop.component';
import { TechnocruiseComponent } from './components/technocruise/technocruise.component';
import { TechnocruiseRoutingModule } from './components/technocruise/technocruise.routing.module';
import { TechnocruiseService } from './services/technocruise.service';

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
    LandingComponent,
    SuccessDialogComponent,
    TechnocruiseComponent,
    TechNavbarComponent,
    TechAboutComponent,
    TechWorkshopComponent,
    TechTalksComponent,
    TechRegisterComponent,
    TechEventsComponent,
    TechContactComponent,
    TechCitiesComponent
  ],
  imports: [
    AppRoutingModule,
    TechnocruiseRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CAService,
    TechnocruiseService
  ],
  entryComponents: [SuccessDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
