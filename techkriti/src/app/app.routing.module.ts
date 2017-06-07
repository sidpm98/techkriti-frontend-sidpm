import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AmbassadorComponent } from './components/ambassador/ambassador.component';

const routes: Routes = [
  { path: '', redirectTo: 'ambassador', pathMatch: 'full' },
  { path: 'ambassador', component: AmbassadorComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
