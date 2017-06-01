import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendComponent } from './components/backend/backend.component';
import { ToscComponent } from './components/tosc/tosc.component';
import { ToscForgotComponent } from './components/tosc-forgot/tosc-forgot.component';
import { ToscResetComponent } from './components/tosc-reset/tosc-reset.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscLoginComponent } from './components/tosc/tosc-login/tosc-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/tosc', pathMatch: 'full' },
  { path: 'tosc', component: ToscComponent },
  { path: 'tosc-register', component: ToscRegisterComponent },
  { path: 'tosc-forgot', component: ToscForgotComponent },
  { path: 'tosc-reset', component: ToscResetComponent },
  { path: 'tosc-login', component: ToscLoginComponent },
  { path: 'backend', component: BackendComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
