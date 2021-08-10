import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'profile-detail',
    loadChildren: () => import('./profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },
  {
    path: 'profile-change',
    loadChildren: () => import('./profile-change/profile-change.module').then( m => m.ProfileChangePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
