import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { ToscComponent } from './components/tosc/tosc.component';

// Services
import { ToscAuthService } from './services/auth/tosc-auth.service';

import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ToscComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ToscAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
