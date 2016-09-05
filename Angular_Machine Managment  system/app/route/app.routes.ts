import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';

import{FilterComponent} from '../filter/filter';
import{LoginComponent} from '../login/login';
import { AuthService }        from './auth.service';
import { AuthGuard }  from './auth.guard';
import {addUpdateComponent} from '../addUpdate/addUpdate';
import{ConfirmComponent} from '../addUpdate/confirm';
import{updateComponent} from '../update/update';





export const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'update', component: updateComponent,canActivate: [AuthGuard] },
  { path: 'filter', component: FilterComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'addUpdate', component: addUpdateComponent,canActivate: [AuthGuard]}

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthService,
  AuthGuard
];


