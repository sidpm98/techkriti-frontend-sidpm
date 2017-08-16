import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { RegisterComponent } from './components/ambassador/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: 'ambassador',
    component: AmbassadorComponent
  },
  {
    path: 'ambassador/register',
    component: RegisterComponent
  },
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
