import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from '../landing/landing.component';
import {CityDetailsComponent} from './city-details/city-details.component';
import {TechAboutComponent} from './tech-about/tech-about.component';
import {TechCitiesComponent} from './tech-cities/tech-cities.component';
import {TechContactComponent} from './tech-contact/tech-contact.component';
import {TechDashboardComponent} from './tech-dashboard/tech-dashboard.component';
import {TechEventsComponent} from './tech-events/tech-events.component';
import {TechLandingComponent} from './tech-landing/landing.component';
import {TechTalksComponent} from './tech-talks/tech-talks.component';
import {TechWorkshopComponent} from './tech-workshop/tech-workshop.component';
import {TechnocruiseComponent} from './technocruise.component';
import {LoggedInGuardService, WeakLoggedInGaurd} from '../../services/guards.service';

const TechRoutes: Routes = [
  {
    path: 'technocruise',
    component: TechnocruiseComponent,
    children: [
      {
        path: 'about',
        component: TechAboutComponent

      },
      {
        path: 'events',
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
        component: TechTalksComponent,
      },
      {
        path: 'workshop',
        component: TechWorkshopComponent
      },
      {
        path: 'dashboard',
        component: TechDashboardComponent,
        canActivate: [ WeakLoggedInGaurd, LoggedInGuardService ]
      },
      {
        path: ':city',
        component: CityDetailsComponent,
        canActivate: [ WeakLoggedInGaurd ]
      },
      {
        path: '**',
        component: TechLandingComponent
      }
    ]
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TechRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TechnocruiseRoutingModule {

}
