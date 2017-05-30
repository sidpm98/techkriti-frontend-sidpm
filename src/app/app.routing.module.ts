import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToscComponent } from './components/tosc/tosc.component';
import { ToscForgotComponent } from './components/tosc-forgot/tosc-forgot.component';
import { ToscResetComponent } from './components/tosc-reset/tosc-reset.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';

const routes: Routes = [
  { path: '', redirectTo: '/tosc', pathMatch: 'full' },
  { path: 'tosc', component: ToscComponent },
  { path: 'tosc-register', component: ToscRegisterComponent },
  { path: 'tosc-forgot', component: ToscForgotComponent },
  { path: 'tosc-reset', component: ToscResetComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
