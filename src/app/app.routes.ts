import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout';
import { Login } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';
import { Profile } from './modules/profile/profile';
import { Landing } from './modules/landing/landing';

export const routes: Routes = [

  //Admin
  // {
  //   path: 'admin',
  //   children: [
  //     { path: "dashboard" },
  //     { path: "settings" },
  //     { path: "tables" },
  //     { path: "maps" },
  //     { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  //   ]
  // },
  //Auth
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: "login", component: Login },
      { path: "register", component: Register },
      { path: "", redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  //Others
  { path: 'profile', component: Profile },
  { path: 'landing', component: Landing },
  // { path: '' },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];
