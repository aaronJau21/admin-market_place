import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authNotAuthorizedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (token && user) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
