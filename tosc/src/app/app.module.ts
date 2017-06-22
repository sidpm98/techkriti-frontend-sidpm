import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { BackendComponent } from './components/backend/backend.component';
import { ToscComponent } from './components/tosc/tosc.component';
import { ToscForgotComponent } from './components/tosc-forgot/tosc-forgot.component';
import { ToscResetComponent } from './components/tosc-reset/tosc-reset.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscLoginComponent } from './components/tosc/tosc-login/tosc-login.component';

// Services
import { FbLoginService } from './services/auth/fb-login.service';
import { ToscAuthService } from './services/auth/tosc-auth.service';
import { ToscService } from './services/tosc.service';
import { SchoolService } from './services/school-name';

// Facebook
import { FacebookService } from 'ngx-facebook';
import { NgUploaderModule } from 'ngx-uploader';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    ToscComponent,
    ToscForgotComponent,
    ToscResetComponent,
    ToscRegisterComponent,
    ToscLoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    NgUploaderModule
  ],
  providers: [
    FacebookService,
    FbLoginService,
    ToscAuthService,
    ToscService,
    SchoolService
  ],
  entryComponents: [
    ToscLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
