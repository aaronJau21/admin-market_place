import { inject, Injectable } from '@angular/core';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { AuthService } from './auth.service';
import { ILoginRequest } from '../../domain';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthUseCase {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  authMutation = injectMutation(() => ({
    mutationFn: (data: ILoginRequest) =>
      lastValueFrom(this.authService.login(data)),
    onSuccess: (res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('expires_in', res.expires_in.toString());
      this.router.navigateByUrl('/dashboard');
    },
    onError: (err) => {
      console.log(err);
    },
  }));
}
