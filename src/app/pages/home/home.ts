import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private router = inject(Router);
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

  selectMenu(item: any) {
    this.router.navigate([item.url]);
  }
}
