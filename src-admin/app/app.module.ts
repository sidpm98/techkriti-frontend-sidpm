import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdButtonModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgUploaderModule } from 'ngx-uploader';
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { BackendComponent } from './components/backend/backend.component';
import { CaDetailComponent } from './components/ca-detail/ca-detail.component';
import { CaListComponent } from './components/ca-list/ca-list.component';
import { CAComponent } from './components/ca/ca.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ToscComponent } from './components/tosc/tosc.component';

// Services
import {CdkTableModule} from '@angular/cdk/table';
import { ToscDataComponent } from './components/tosc/tosc-data/tosc-data.component';
import { AuthService } from './services/auth.service';
import { ParamsService } from './services/params.service';
import { TechHttp } from './services/tech-http.service';
import { ToscDataService } from './services/tosc.service';

@NgModule({
  declarations: [
    AppComponent,
    CAComponent,
    CaDetailComponent,
    CaListComponent,
    LoginComponent,
    BackendComponent,
    DashboardComponent,
    ToscComponent,
    ToscDataComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdButtonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CdkTableModule,
    NgUploaderModule
  ],
  providers: [
    AuthService,
    ParamsService,
    TechHttp,
    ToscDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
