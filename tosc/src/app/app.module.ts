import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { OtherTestComponent } from './components/other-test/other-test.component';
import { ToscComponent } from './components/tosc/tosc.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscTopperComponent } from './components/tosc-topper/tosc-topper.component';
import { TopperWriteUp } from './components/tosc-topper/tosc-topper.component';
import { ToscFaqComponent } from './components/tosc-faq/tosc-faq.component';
import { SuccessfullDialogComponent } from './components/successfull-dialog/successfull-dialog.component';
import { StatusComponent } from './components/status/status.component';

// Services
import { ToscAuthService } from './services/auth/tosc-auth.service';
import { ToscService } from './services/tosc.service';
import { ScriptService } from './services/script.service';
import { PaymentService } from './services/payment.service';
import { RegistrationFormService } from './services/registration-form-service';

// Facebook
import { SmoothScrollDirective, SmoothScrollToDirective } from 'ng2-smooth-scroll';

// Routing Module
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OtherTestComponent,
    SmoothScrollDirective,
    SmoothScrollToDirective,
    SuccessfullDialogComponent,
    StatusComponent,
    ToscComponent,
    ToscRegisterComponent,
    ToscTopperComponent,
    TopperWriteUp,
    ToscFaqComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [
    PaymentService,
    ToscAuthService,
    ToscService,
    ScriptService,
    RegistrationFormService
  ],
  entryComponents: [
    OtherTestComponent,
    TopperWriteUp,
    SuccessfullDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
