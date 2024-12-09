import { Component } from '@angular/core';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideBarComponent, RouterOutlet, NavBarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {}
