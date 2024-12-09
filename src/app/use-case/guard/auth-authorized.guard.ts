import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authAuthorizedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  if (!token && !user) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
