import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TechContactComponent} from 'app/components/technocruise/tech-contact/tech-contact.component';
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { RegisterComponent } from './components/ambassador/register/register.component';
import {TechAboutComponent} from './components/technocruise/tech-about/tech-about.component';
import {TechCitiesComponent} from './components/technocruise/tech-cities/tech-cities.component';
import {TechDashboardComponent} from './components/technocruise/tech-dashboard/tech-dashboard.component';
import {TechEventsComponent} from './components/technocruise/tech-events/tech-events.component';
import {TechTalksComponent} from './components/technocruise/tech-talks/tech-talks.component';
import {TechWorkshopComponent} from './components/technocruise/tech-workshop/tech-workshop.component';
import {TechnocruiseComponent} from './components/technocruise/technocruise.component';
import { WeakLoggedInGaurd } from './services/guards.service';
import {TechLandingComponent} from './components/technocruise/tech-landing/landing.component';

const routes: Routes = [
  { path: 'ambassador',
    component: AmbassadorComponent
  },
  {
    path: 'ambassador/register',
    component: RegisterComponent
  }
// todo
// {
//   path: '**',
//   component: LandingComponent
// }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
