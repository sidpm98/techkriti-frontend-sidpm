import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AmbassadorComponent } from './components/ambassador/ambassador.component';
import { RegisterComponent } from './components/ambassador/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'ambassador', pathMatch: 'full' },
  { path: 'ambassador', component: AmbassadorComponent },
  { path: 'ambassador/register', component: RegisterComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
