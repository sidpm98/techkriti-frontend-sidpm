import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { OtherTestComponent } from './components/other-test/other-test.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { StatusComponent } from './components/status/status.component';
import { SuccessfullDialogComponent } from './components/successfull-dialog/successfull-dialog.component';
import { ToscFaqComponent } from './components/tosc-faq/tosc-faq.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscTopperComponent } from './components/tosc-topper/tosc-topper.component';
import { TopperWriteUp } from './components/tosc-topper/tosc-topper.component';
import { ToscComponent } from './components/tosc/tosc.component';

// Services
import { ToscAuthService } from './services/auth/tosc-auth.service';
import { PaymentService } from './services/payment.service';
import { RegistrationFormService } from './services/registration-form-service';
import { ResourcesService } from './services/resources.service';
import { ScriptService } from './services/script.service';
import { ToscService } from './services/tosc.service';

import { SmoothScrollDirective, SmoothScrollToDirective } from 'ng2-smooth-scroll';

// Routing Module
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OtherTestComponent,
    ResourcesComponent,
    SmoothScrollDirective,
    SmoothScrollToDirective,
    SuccessfullDialogComponent,
    StatusComponent,
    ToscComponent,
    ToscRegisterComponent,
    ToscTopperComponent,
    TopperWriteUp,
    ToscFaqComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    PaymentService,
    ToscAuthService,
    ToscService,
    ScriptService,
    RegistrationFormService,
    ResourcesService
  ],
  entryComponents: [
    OtherTestComponent,
    TopperWriteUp,
    SuccessfullDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
