import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';

export const protectedRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
