import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from '../guards/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LayoutComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'admin', component: AdminComponent }
    ]
  }
];