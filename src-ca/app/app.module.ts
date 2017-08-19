import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';

// Services
import { FacebookService } from 'ngx-facebook';

import { LoginService } from './services/login.service';
import { ScriptService } from './services/script.service';
import { TechkritiFeedService } from './services/techkriti-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    FacebookService,
    LoginService,
    ScriptService,
    TechkritiFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
