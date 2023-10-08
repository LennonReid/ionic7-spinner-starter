import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [

      {
        path: 'child',
        loadComponent: () => import('./home/child/home.page').then((m) => m.HomePageChild),

      }
    ]
  }
];
