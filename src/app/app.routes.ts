import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'deals',
    loadComponent: () => import('./pages/deal/deal').then((m) => m.Deal),
  },
  {
    path: 'gomin',
    loadComponent: () => import('./pages/gomin/gomin').then((m) => m.Gomin),
  },
];
