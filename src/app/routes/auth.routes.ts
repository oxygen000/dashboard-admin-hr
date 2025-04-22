import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/auth/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { LayoutLoginComponent } from '../pages/auth/layout.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: '404', component: NotFoundComponent },
    ],
  },
];
