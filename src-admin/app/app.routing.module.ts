import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAComponent } from './components/ca/ca.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ToscComponent } from './components/tosc/tosc.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ca', component: CAComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tosc', component: ToscComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
