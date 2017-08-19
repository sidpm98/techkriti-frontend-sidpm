import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './components/resources/resources.component';
import { StatusComponent } from './components/status/status.component';
import { ToscRegisterComponent } from './components/tosc-register/tosc-register.component';
import { ToscComponent } from './components/tosc/tosc.component';

const routes: Routes = [
  { path: '', component: ToscComponent },
  { path: 'register', component: ToscRegisterComponent },
  { path: 'status', component: StatusComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
