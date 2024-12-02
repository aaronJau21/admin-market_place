import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/page/auth/login/login.component';
import { DashboardLayoutComponent } from './presentation/layaout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
