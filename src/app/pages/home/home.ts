import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  listPage: any = [
    {
      name: 'Gom in',
      url: '/gomin',
    },
    {
      name: 'Deals',
      url: '/deals',
    },
  ];

  constructor() {}
}
