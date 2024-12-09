import { inject, Injectable, signal } from '@angular/core';
import { UserService } from './user.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserUseCase {
  private readonly userService = inject(UserService);
  private idUser = signal<number | null>(null);

  userImageQuery = injectQuery(() => ({
    queryKey: ['user-image', +this.idUser()!],
    queryFn: () => lastValueFrom(this.userService.getImage(+this.idUser()!)),
    enabled: this.idUser() !== null,
  }));

  setIdUser(id: number) {
    this.idUser.set(id);
  }
}
