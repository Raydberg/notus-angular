import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layouts/auth-layout';
import { AdminLayout } from './shared/layouts/admin-layout';


export const routes: Routes = [

  //Admin
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: "dashboard", loadComponent: () => import('./modules/admin/dashboard/dashboard') },
      { path: "settings", loadComponent: () => import("./modules/admin/settings/settings") },
      { path: "tables", loadComponent: () => import("./modules/admin/tables-custom/tables-custom") },
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  //Auth
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: "login", loadComponent: () => import("./modules/auth/login/login") },
      { path: "register", loadComponent: () => import("./modules/auth/register/register") },
      { path: "", redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  //Others
  { path: 'profile', loadComponent: () => import("./modules/profile/profile") },
  { path: 'landing', loadComponent: () => import("./modules/landing/landing") },
  { path: '', loadComponent: () => import("./modules/home/home") },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
