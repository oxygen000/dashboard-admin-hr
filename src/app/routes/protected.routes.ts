import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { EmployeesComponent } from '../pages/employees/employees.component';
import { LeaveRequestsComponent } from '../pages/leave-requests/leave-requests.component';
import { TicketsComponent } from '../pages/tickets/tickets.component';
import { AttendanceComponent } from '../pages/attendance/attendance.component';
import { PayrollComponent } from '../pages/payroll/payroll.component';
import { HrRequestsComponent } from '../pages/hr-requests/hr-requests.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { SettingsComponent } from '../pages/settings/settings.component';

export const protectedRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'leave-requests', component: LeaveRequestsComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'hr-requests', component: HrRequestsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
