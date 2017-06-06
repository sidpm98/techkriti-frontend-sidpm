import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { RegisterComponent } from './components/ambassador/register/register.component';
import { IncentivesComponent } from './components/ambassador/incentives/incentives.component';
import { CaHeaderComponent } from './components/ambassador/ca-header/ca-header.component';
import { ApplicationProcessComponent } from './components/ambassador/application-process/application-process.component';
import { CaAboutUsComponent } from './components/ambassador/ca-about-us/ca-about-us.component';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
