import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToscComponent } from './components/tosc/tosc.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { StatusComponent } from './components/status/status.component';

const routes: Routes = [
  { path: '', component: ToscComponent },
  { path: 'register', component: ToscRegisterComponent },
  { path: 'status', component: StatusComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
