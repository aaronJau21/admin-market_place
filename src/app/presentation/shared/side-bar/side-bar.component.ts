import { Component, OnInit, signal } from '@angular/core';
import { routes } from '../../../app.routes';
import { Routes } from '@angular/router';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  public routes = signal<Routes>([]);

  ngOnInit(): void {
    const filteredRoutes =
      routes[1].children?.filter((route) => route.title) || [];
    this.routes.set(filteredRoutes);
  }
}
