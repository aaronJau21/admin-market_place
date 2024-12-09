import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const expiresIn = localStorage.getItem('expires_in');
  const router = inject(Router);

  if (token && expiresIn && Date.now() > Number(expiresIn)) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('expires_in');
    router.navigateByUrl('/login');
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expires_in');
        router.navigateByUrl('/login');
      }
      return throwError(() => new Error(error));
    })
  );
};
