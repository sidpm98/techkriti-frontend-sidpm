import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {MarkdownToHtmlModule} from 'ng2-markdown-to-html';
import {PaymentService} from '../../../../src-tosc/app/services/payment.service';
import {ScriptService} from '../../../../src-tosc/app/services/script.service';
import {AuthService} from '../../services/auth.service';
import {GuardsService, LoggedInGuardService, UpdateGuardService, WeakLoggedInGaurd} from '../../services/guards.service';
import {TechnocruiseService} from '../../services/technocruise.service';
import { CityDetailsComponent } from './city-details/city-details.component';
import {SocLinksComponent} from './soc-links/soc-links.component';
import {TechAboutComponent} from './tech-about/tech-about.component';
import {TechCitiesComponent} from './tech-cities/tech-cities.component';
import {TechContactComponent} from './tech-contact/tech-contact.component';
import {TechDashboardComponent} from './tech-dashboard/tech-dashboard.component';
import {TechEventsComponent} from './tech-events/tech-events.component';
import {TechLandingComponent} from './tech-landing/landing.component';
import {TechNavbarComponent} from './tech-navbar/tech-navbar.component';
import {TechRegisterComponent} from './tech-register/tech-register.component';
import {DialogSidenavComponent, TechSidenavComponent} from './tech-sidenav/tech-sidenav.component';
import {TechTalksComponent} from './tech-talks/tech-talks.component';
import {TechWorkshopComponent} from './tech-workshop/tech-workshop.component';
import {WorkshopDialogComponent} from './tech-workshop/workshop-dialog/workshop-dialog.component';
import { TechnoLoginComponent } from './techno-login/techno-login.component';
import { TechnoTicketComponent } from './techno-ticket/techno-ticket.component';
import {TechnocruiseComponent} from './technocruise.component';
import {TechnocruiseRoutingModule} from './technocruise.routing.module';

@NgModule({
  imports:  [
    TechnocruiseRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MarkdownToHtmlModule.forRoot(),
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [
    TechAboutComponent,
    TechnocruiseComponent,
    TechCitiesComponent,
    TechDashboardComponent,
    TechEventsComponent,
    TechContactComponent,
    TechLandingComponent,
    TechRegisterComponent,
    TechTalksComponent,
    TechNavbarComponent,
    TechSidenavComponent,
    TechWorkshopComponent,
    WorkshopDialogComponent,
    CityDetailsComponent,
    SocLinksComponent,
    TechnoLoginComponent,
    DialogSidenavComponent,
    TechnoTicketComponent
  ],
  exports: [ TechnocruiseComponent ],
  providers: [
    GuardsService,
    PaymentService,
    ScriptService,
    LoggedInGuardService,
    UpdateGuardService,
    WeakLoggedInGaurd,
    AuthService,
    TechnocruiseService
  ],
  entryComponents: [WorkshopDialogComponent]
})

export class TechnocruiseModule { }
