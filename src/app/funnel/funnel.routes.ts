import { Routes } from '@angular/router';
import { FunnelLayout } from './layout/funnel-layout';
import { Workspace } from './workspace/workspace';

export default [
  {
    path: '',
    component: FunnelLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadComponent: () => import('./login/login').then((m) => m.Login),
      },
      {
        path: '',
        component: Workspace,
        children: [
          {
            path: 'dashboard',
            loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
          },
          {
            path: 'kanban',
            loadComponent: () => import('./kanban/kanban').then((m) => m.Kanban),
          },
        ],
      },
    ],
  },
] satisfies Routes;
