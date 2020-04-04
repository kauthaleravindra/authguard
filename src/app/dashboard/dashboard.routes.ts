import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { FeaturesModule } from '../features/features.module';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LayoutComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'admin', component: AdminComponent },
      { path: 'features', loadChildren: '../features/features.module#FeaturesModule' },
      { path: 'control-val-acc', loadChildren: '../control-val-accessor/control-val-accessor.module#ControlValAccessorModule' }
    ]
  }
];