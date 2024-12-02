import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthUseCase } from '../../../../use-case/auth/auth-use-case';
import { ILoginRequest } from '../../../../domain';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authUseCase = inject(AuthUseCase);
  private readonly fb = inject(FormBuilder);

  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    const loginData: ILoginRequest = this.loginForm.value;

    this.authUseCase.authMutation.mutate(loginData);
  }
}
