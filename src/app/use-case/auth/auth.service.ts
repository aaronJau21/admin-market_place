import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ILoginRequest, ILoginResponse } from '../../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = environment.BASE_URL;

  public login(data: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.BASE_URL}/auth/login`, data);
  }
}
