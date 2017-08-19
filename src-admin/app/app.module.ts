import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
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
import { AuthService } from './services/auth.service';
import { CAService } from './services/ca.service';
import { ParamsService } from './services/params.service';
import { TechHttp } from './services/tech-http.service';
import { ToscService } from './services/tosc.service';

@NgModule({
  declarations: [
    AppComponent,
    CAComponent,
    CaDetailComponent,
    CaListComponent,
    LoginComponent,
    BackendComponent,
    DashboardComponent,
    ToscComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgUploaderModule
  ],
  providers: [
    AuthService,
    CAService,
    ParamsService,
    TechHttp,
    ToscService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
