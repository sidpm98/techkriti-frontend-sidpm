import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { CAComponent } from './components/ca/ca.component';
import { CaListComponent } from './components/ca-list/ca-list.component';
import { CaDetailComponent } from './components/ca-detail/ca-detail.component';

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
    CaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'ca',
        component: CAComponent
      }
    ])
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
