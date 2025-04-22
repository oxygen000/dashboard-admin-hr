import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth.routes';
import { protectedRoutes } from './routes/protected.routes';

export const routes: Routes = [
  ...protectedRoutes,
  ...authRoutes,

  // fallback route
  {
    path: '**',
    redirectTo: '404',
  },
];
