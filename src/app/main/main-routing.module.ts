import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'historys',
        loadChildren: () => import('./historys/historys.module').then( m => m.HistorysPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'qr-code',
        loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
    
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
