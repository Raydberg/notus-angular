import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout';
import { Login } from './modules/auth/login';

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
      // { path: "register" },
      { path: "", redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  //Others
  // { path: 'profile' },
  // { path: 'landing' },
  // { path: '' },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];
