import { Component } from '@angular/core';
import { Search } from '../../components/search/search';

@Component({
  selector: 'app-gomin',
  imports: [Search],
  templateUrl: './gomin.html',
  styleUrl: './gomin.scss',
})
export class Gomin {
  listGoods: any = [];
}
