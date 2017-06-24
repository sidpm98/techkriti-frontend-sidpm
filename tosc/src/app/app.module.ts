import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { ToscComponent } from './components/tosc/tosc.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscTopperComponent } from './components/tosc-topper/tosc-topper.component';
import { TopperWriteUp } from './components/tosc-topper/tosc-topper.component';

// Services
import { ToscAuthService } from './services/auth/tosc-auth.service';
import { ToscService } from './services/tosc.service';
import { SchoolService } from './services/school-name';

// Facebook
import { SmoothScrollDirective, SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { Parallax, ParallaxConfig } from 'ng2-parallax/commonjs';

// Routing Module
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Parallax,
    SmoothScrollDirective,
    SmoothScrollToDirective,
    ToscComponent,
    ToscRegisterComponent,
    ToscTopperComponent,
    TopperWriteUp
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
    ToscAuthService,
    ToscService,
    SchoolService
  ],
  entryComponents: [
    TopperWriteUp

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
