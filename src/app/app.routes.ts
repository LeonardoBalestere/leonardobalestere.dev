import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'funnel', loadChildren: () => import('./funnel/funnel.routes') },
  { path: '**', redirectTo: '' },
];
