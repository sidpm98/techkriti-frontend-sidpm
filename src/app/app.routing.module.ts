import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToscComponent } from './components/tosc/tosc.component';

const routes: Routes = [
    { path: '', redirectTo: '/tosc', pathMatch: 'full' },
    { path: 'tosc', component: ToscComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
