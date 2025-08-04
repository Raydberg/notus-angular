import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout';
import { Login } from './modules/auth/login/login';
import { Register } from './modules/auth/register/register';
import { Profile } from './modules/profile/profile';
import { Landing } from './modules/landing/landing';
import { AdminLayout } from './shared/layouts/admin-layout';

export const routes: Routes = [

  //Admin
  {
    path: 'admin',
    component:AdminLayout,
    children: [
      { path: "dashboard", loadComponent: () => import('./modules/admin/dashboard/dashboard') },
      // { path: "settings" },
      // { path: "tables" },
      // { path: "maps" },
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
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
