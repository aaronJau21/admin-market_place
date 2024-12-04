import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    class: 'flex-1 h-screen p-5',
  },
})
export default class HomeComponent {}
