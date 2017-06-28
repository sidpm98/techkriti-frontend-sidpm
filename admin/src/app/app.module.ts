import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { CAComponent } from './components/ca/ca.component';
import { CaListComponent } from './components/ca-list/ca-list.component';
import { CaDetailComponent } from './components/ca-detail/ca-detail.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { CAService } from './services/ca.service';
import { ParamsService } from './services/params.service';
import { TechHttp } from './services/tech-http.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CAComponent,
    CaDetailComponent,
    CaListComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    CAService,
    ParamsService,
    TechHttp,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
