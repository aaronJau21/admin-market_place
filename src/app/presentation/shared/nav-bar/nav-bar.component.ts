import { Component, inject, OnInit } from '@angular/core';
import { UserUseCase } from '../../../use-case/user/user-use-case';

@Component({
  selector: 'shared-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  private userUseCase = inject(UserUseCase);
  private readonly user = JSON.parse(localStorage.getItem('user')!);
  private readonly idUser = this.user.id;

  ngOnInit(): void {
    this.userUseCase.setIdUser(this.idUser);
  }
  userImageQuery = this.userUseCase.userImageQuery;
}
