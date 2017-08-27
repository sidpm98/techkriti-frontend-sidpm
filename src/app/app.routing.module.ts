import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TechContactComponent} from 'app/components/technocruise/tech-contact/tech-contact.component';
import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { RegisterComponent } from './components/ambassador/register/register.component';
import {TechAboutComponent} from './components/technocruise/tech-about/tech-about.component';
import {TechCitiesComponent} from './components/technocruise/tech-cities/tech-cities.component';
import {TechDashboardComponent} from './components/technocruise/tech-dashboard/tech-dashboard.component';
import {TechEventsComponent} from './components/technocruise/tech-events/tech-events.component';
import {TechLandingComponent} from './components/technocruise/tech-landing/landing.component';
import {TechTalksComponent} from './components/technocruise/tech-talks/tech-talks.component';
import {TechWorkshopComponent} from './components/technocruise/tech-workshop/tech-workshop.component';
import {TechnocruiseComponent} from './components/technocruise/technocruise.component';
import { WeakLoggedInGaurd } from './services/guards.service';

const routes: Routes = [
  { path: 'ambassador',
    component: AmbassadorComponent
  },
  {
    path: 'ambassador/register',
    component: RegisterComponent
  },
  {
    path: 'technocruise',
    component: TechnocruiseComponent,
    children: [
      {
        path: 'about',
        component: TechAboutComponent

      },
      {
        path: 'event',
        component: TechEventsComponent
      },
      {
        path: 'cities',
        component: TechCitiesComponent
      },
      {
        path: 'contact',
        component: TechContactComponent
      },
      {
        path: 'talks',
        component: TechTalksComponent
      },
      {
        path: 'workshop',
        component: TechWorkshopComponent
      },
      {
        path: 'dashboard',
        component: TechDashboardComponent,
        canActivate: [ WeakLoggedInGaurd ]
      },
      {
        path: '**',
        component: TechLandingComponent
      }
    ]
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
