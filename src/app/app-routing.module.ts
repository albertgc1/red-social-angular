import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { AuthGuard } from './core/services/auth.guard'

import { SearchComponent } from './search/search.component'
import { ProfileComponent } from './profile/profile.component'
import { SettingsComponent } from './settings/settings.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { NotificationComponent } from './notification/notification.component'


const routes: Routes = [
  { 
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'search', canActivate: [AuthGuard], component: SearchComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'notifications', canActivate: [AuthGuard], component: NotificationComponent },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
