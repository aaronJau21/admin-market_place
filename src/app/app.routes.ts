import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/page/auth/login/login.component';
import { DashboardLayoutComponent } from './presentation/layaout/dashboard-layout/dashboard-layout.component';
import { authAuthorizedGuard } from './use-case/guard/auth-authorized.guard';
import { authNotAuthorizedGuard } from './use-case/guard/auth-not-authorized.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [authNotAuthorizedGuard],
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    canActivate: [authAuthorizedGuard],
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./presentation/page/home/home.component'),
        title: 'Dashboard',
        data: {
          icon: "fas fa-home",
        },
      },
      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
];
