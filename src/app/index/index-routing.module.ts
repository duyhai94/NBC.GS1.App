import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
      },
      {
        path: 'otp/:id',
        loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
      },
      {
        path: 'load-app',
        loadChildren: () => import('./load-app/load-app.module').then( m => m.LoadAppPageModule)
      },
      {
        path: '',
        redirectTo: 'load-app',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
